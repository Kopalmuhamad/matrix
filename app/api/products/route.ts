import { data } from "@/lib/data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  const id = searchParams.get("id");
  const feature = searchParams.get("feature");
  let filteredProducts = data;

  // Filter by ID
  if (id) {
    const product = data.find((product) => product.id === parseInt(id));
    if (product) {
      return NextResponse.json(product);
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  }

  // Filter by category
  if (category) {
    const categories = category.split(",");
    filteredProducts = filteredProducts.filter((product) =>
      categories.some((cat) => product.section.includes(cat))
    );
  }

  // Filter by Featured
  if (feature === "true") {
    filteredProducts = filteredProducts.filter((product) => product.featured);
  }

  // Sort by price
  if (sort === "price_asc") {
    filteredProducts = filteredProducts.sort(
      (a, b) =>
        parseFloat(a.price.replace(/\./g, "")) -
        parseFloat(b.price.replace(/\./g, ""))
    );
  } else if (sort === "price_desc") {
    filteredProducts = filteredProducts.sort(
      (a, b) =>
        parseFloat(b.price.replace(/\./g, "")) -
        parseFloat(a.price.replace(/\./g, ""))
    );
  }

  return NextResponse.json(filteredProducts);
}
