import { PrismaClient } from '@prisma/client';
import { User } from '../../libs/api/generated-db-types/src';
import {
  HOME_BLOCKS_COLORS_DATA,
  COLORS,
  HOME_BLOCK_DATA,
  HOME_BLOCK_IMAGES,
  PRODUCTS,
  PRODUCT_COVER_IMAGES,
  PRODUCT_DATA,
  USERS_SEED_DATA
} from './seed-data';
const prisma = new PrismaClient();

async function main() {
  await Promise.all(
    USERS_SEED_DATA.map((user: User) => {
      return prisma.user.upsert({
        where: { id: user.id },
        update: user,
        create: user
      });
    })
  ).then(() => console.log('seed user in db 🌱'));

  await Promise.all(
    HOME_BLOCKS_COLORS_DATA.map((color) => {
      return prisma.rgbColor.upsert({
        where: { id: color.id },
        update: color,
        create: color
      });
    })
  ).then(() => console.log('seed home blocks colors in db 🌱'));

  await Promise.all(
    HOME_BLOCK_IMAGES.map((image) => {
      return prisma.image.upsert({
        where: { id: image.id },
        update: image,
        create: image
      });
    })
  ).then(() => console.log('seed images in db 🌱'));

  await Promise.all(
    HOME_BLOCK_DATA.map((homeBlock) => {
      return prisma.homeBlock.upsert({
        where: { id: homeBlock.id },
        update: homeBlock,
        create: homeBlock
      });
    })
  ).then(() => console.log('seed home blocks data in db 🌱'));

  await Promise.all(
    PRODUCT_DATA.map((product) => {
      return prisma.product.upsert({
        where: { id: product.id },
        update: product,
        create: product
      });
    })
  ).then(() => console.log('seed product data in db 🌱'));

  for (const product of PRODUCTS) {
    for (const image of PRODUCT_COVER_IMAGES) {
      await prisma.image.upsert({
        where: { id: product + image.id },
        create: {
          ...image,
          id: product + image.id,
          product: {
            connect: { id: product }
          }
        },
        update: {
          ...image,
          id: undefined,
          product: {
            connect: { id: product }
          }
        }
      });
    }
  }

  for (const product of PRODUCTS) {
    await prisma.rgbColor.upsert({
      where: { id: product + 1 },
      create: { ...COLORS[0].color, productId: product, id: product + 1 },
      update: { ...COLORS[0].color, productId: product, id: product + 1 }
    });

    await prisma.rgbColor.upsert({
      where: { id: product + 2 },
      create: { ...COLORS[1].color, productId: product, id: product + 2 },
      update: { ...COLORS[1].color, productId: product, id: product + 2 }
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
