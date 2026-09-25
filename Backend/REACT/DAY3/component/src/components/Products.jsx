const products = [
  {
    name: "Honey",
    price: "$599",
    image:
      "https://i.pinimg.com/736x/f9/f9/0a/f9f90af5ee442fd9456d0c8a2cd83645.jpg",
  },
  {
    name: "Veggies",
    price: "$299",
    image:
      "https://i.pinimg.com/736x/08/c7/0d/08c70d473888e35bd1c4cd9d1d2983d7.jpg",
  },
  {
    name: "Cucumber",
    price: "$199",
    image:
      "https://i.pinimg.com/1200x/f9/3e/17/f93e17b7a1f0d882c7f2e10b79aeca31.jpg",
  },
];

export default function Products() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
        Our Products
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.name}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full object-cover"
            />

            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold capitalize text-gray-900">
                {product.name}
              </h3>
              <p className="mt-2 text-lg font-medium text-green-700">
                {product.price}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}