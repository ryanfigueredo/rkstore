import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { PercentIcon } from "lucide-react";

const DealsPage = async () => {
  try {
    const deals = await prismaClient.product.findMany({
      where: {
        discountPercentage: {
          gt: 0,
        },
      },
    });

    return (
      <div className="flex flex-col gap-8 p-5">
        <Badge variant="heading">
          <PercentIcon size={16} />
          Ofertas
        </Badge>

        <div className="grid grid-cols-2 gap-8">
          {deals.map((product) => (
            <ProductItem
              key={product.id}
              product={{
                ...product,
                totalPrice: computeProductTotalPrice(product),
              }}
            />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to load deals:", error);
    return <div>Failed to load deals. Please try again later.</div>;
  }
};

export default DealsPage;
