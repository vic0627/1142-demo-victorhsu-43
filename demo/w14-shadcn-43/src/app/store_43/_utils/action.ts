'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { Prisma } from '@/generated/prisma/client';
import { redirect } from 'next/navigation';
import { currentUser, auth } from '@clerk/nextjs/server';
import { deleteImage, uploadImage } from './supabase';

export type Product = Prisma.ProductGetPayload<object>;

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) redirect('/store_43');
  return user;
};

const getAdminUser = async () => {
  const user = await getAuthUser();
  if (user.id !== process.env.ADMIN_USER_ID) redirect('/store_43');
  console.log('Admin user authenticated:', user.id);
  return user;
};

const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : 'an error occurred',
  };
};


export const fetchFeaturedProducts = async () => {
  const products = await prisma.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = async ({ search = '' }: { search: string }) => {
  return prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { company: { contains: search, mode: 'insensitive' } },
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    redirect('/store_43/products_43');
  }
  return product;
};

export const fetchAdminProducts = async () => {
  await getAdminUser();
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return products;
};

export const fetchAdminOrders = async () => {
  await getAdminUser();
  const orders = await prisma.order.findMany({
    where: {
      isPaid: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return orders;
};

export const deleteProduct = async (
  prevState: { message: string },
  formData: FormData
) => {
  try {
    await getAdminUser();
    const productId = formData.get('id') as string;
    if (!productId) {
      return { message: 'Product ID is required' };
    }
    await prisma.product.delete({
      where: { id: productId },
    });
    revalidatePath('/store_43/admin_43/products_43');
    return { message: 'Product deleted successfully' };
  } catch (error) {
    return renderError(error);
  }
};