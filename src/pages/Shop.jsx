import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const {products} = useLoaderData();

  return (
    <main className="min-h-[calc(100vh-187px)] sm:min-h-[calc(100vh-123px)] py-8">
      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {
              products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
            }
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;