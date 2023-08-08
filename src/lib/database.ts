import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import "server-only";
import { authOptions } from "./auth";

declare global {
  var cachedPrisma: PrismaClient;
}

export let prisma: PrismaClient;

// To prevent redundant instantiate of prisma client on dev hot reloading
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const getAuthSession = () => {
  return getServerSession(authOptions);
};
