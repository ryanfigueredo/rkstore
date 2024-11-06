// pages/api/deals.ts
import { NextApiRequest, NextApiResponse } from "next";
import prismaClient from "@/lib/prismaClient";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const deals = await prismaClient.product.findMany({
      where: {
        discountPercentage: {
          gt: 0,
        },
      },
    });
    res.status(200).json(deals);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch deals" });
  }
}
