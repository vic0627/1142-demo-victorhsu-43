const { PrismaClient } = require('./src/generated/prisma');
const prisma = new PrismaClient();

const imageMap = {
  'Sleek Bamboo Shirt': '/images/store/product-1.jpg',
  'Ergonomic Plastic Salad': '/images/store/product-2.jpg',
  'comfy bed': '/images/store/product-3.jpg',
  'chic chair': '/images/store/product-4.jpg',
  'avant-garde lamp': '/images/store/product-1.jpg',
};

(async () => {
  try {
    const products = await prisma.product.findMany();
    console.log('Current products:');
    products.forEach(p => console.log(`${p.name}: ${p.image} (featured: ${p.featured})`));
    
    for (const product of products) {
      const correctImage = imageMap[product.name];
      if (correctImage) {
        await prisma.product.update({
          where: { id: product.id },
          data: { image: correctImage }
        });
        console.log(`Updated ${product.name} to ${correctImage}`);
      }
    }
    
    const updated = await prisma.product.findMany();
    console.log('\nUpdated products:');
    updated.forEach(p => console.log(`${p.name}: ${p.image}`));
    
  } finally {
    await prisma.$disconnect();
  }
})();
