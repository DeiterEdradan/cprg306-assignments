export default function Item({ name, quantity, category }) {
  return (
    <li className="rounded-2xl border border-pink-100 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-pink-900">
        {name}
      </h3>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-pink-800">
          Quantity: {quantity}
        </p>

        <span className="rounded-full bg-pink-50 px-3 py-1 text-sm capitalize text-pink-800">
          {category}
        </span>
      </div>
    </li>
  );
}