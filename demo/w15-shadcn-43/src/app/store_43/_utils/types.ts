// import { Prisma } from '@prisma/client';

import { PrismaClient } from '@/generated/prisma/client';
import { Prisma } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';


// src/app/store_43/_utils/types.ts

// 加入這段定義
export type actionFunction = (
  prevState: { message: string } | null,
  formData: FormData
) => Promise<{ message: string }>;

// ... 你原本的 Prisma 相關 import