'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const fetchCategory_43 = async () => {
  const categories = await prisma.category_43.findMany();
  return categories;
};

export const deleteProduct_43 = async (formData: FormData) => {
  const id = Number(formData.get('id'));

  if (isNaN(id)) {
    throw new Error('Invalid product ID');
  }

  await prisma.shop_43.deleteMany({
    where: { pid: id },
  });

  revalidatePath('/mid_43');
};
