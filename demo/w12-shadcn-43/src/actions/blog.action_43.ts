'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { blogData2_43 } from './data/blogData';

export const deleteBlog_43 = async (id: number) => {
  await prisma.blog_43.delete({ where: { id } });
  revalidatePath('/quiz1_43/p1_43');
};

export const deleteAllBlog_43 = async () => {
  await prisma.blog_43.deleteMany();
  revalidatePath('/quiz1_43/p1_43');
};

export const SeedBlog_43 = async () => {
  // console.log('blogData2_43:', blogData2_43);
  await prisma.blog_43.createMany({
    data: blogData2_43,
    skipDuplicates: true,
  });
  revalidatePath('/quiz1_43/p1_43');
};
