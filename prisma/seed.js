const { PrismaClient } = require("@prisma/client");
const products = require("../utils/mocks/products.json");
const prisma = new PrismaClient();

async function main() {
  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log("upss, something when wrong", e);
    await prisma.$disconnect();
    process.exit(1);
  });
