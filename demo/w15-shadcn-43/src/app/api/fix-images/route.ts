import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const products = await prisma.product.findMany();

    const imageMap: Record<string, string> = {
      'Sleek Bamboo Shirt': '/images/store/product-1.jpg',
      'Ergonomic Plastic Salad': '/images/store/product-2.jpg',
      'comfy bed': '/images/store/product-3.jpg',
      'chic chair': '/images/store/product-4.jpg',
      'avant-garde lamp': '/images/store/product-1.jpg',
    };

    const updated: any[] = [];

    for (const product of products) {
      let newImage = product.image;

      if (product.image.includes('products-')) {
        newImage = product.image.replace('products-', 'product-');
      }

      if (imageMap[product.name]) {
        newImage = imageMap[product.name];
      }

      if (newImage !== product.image) {
        await prisma.product.update({
          where: { id: product.id },
          data: { image: newImage }
        });
        updated.push({ name: product.name, from: product.image, to: newImage });
      }
    }

    const final = await prisma.product.findMany();
    return NextResponse.json({
      message: 'Images fixed',
      updated,
      products: final.map(p => ({ name: p.name, image: p.image, featured: p.featured }))
    });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
