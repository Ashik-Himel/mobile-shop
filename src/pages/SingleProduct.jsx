import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
  const product = useLoaderData();
  console.log(product);
  const {thumbnail, brand, title, price, discountPercentage, description, category, stock} = product;

  return (
    <main className="min-h-[calc(100vh-187px)] sm:min-h-[calc(100vh-123px)] py-8">
      <section>
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="w-full lg:flex-1">
              <img src={thumbnail} alt="Product Image" className="w-auto max-h-[400px] block mx-auto" />
            </div>
            <div className="w-full lg:flex-1 bg-gray-200 p-8 rounded-lg self-stretch flex items-center">
              <div>
                <span className="block mb-2">{brand}</span>
                <h2 className="text-3xl font-medium mb-2">{title}</h2>
                <span className="text-2xl font-medium block mb-4"><s className="text-gray-500">${price}</s> ${(price*((100-discountPercentage)/100)).toFixed(2)}</span>
                <p className="mb-6 text-gray-500">{description}</p>
                <div className="flex gap-4">
                  <input type="number" name="quantity" id="quantity" placeholder="0" className="w-[50px] border-2 border-gray-400 rounded-md text-center" />
                  <button className="btn btn-primary text-white text-base normal-case h-auto min-h-[40px]">Add to Cart</button>
                </div>
                <hr className="border-primary my-6" />
                <span className="italic text-gray-500">category: {category}, stock: {stock}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleProduct;