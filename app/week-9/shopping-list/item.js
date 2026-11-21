export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li>
      <button
        type="button"
        onClick={onSelect}
        className="w-full cursor-pointer rounded-2xl border border-pink-100 bg-white p-5 text-left shadow-sm hover:bg-pink-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
      >
        <span className="block text-lg font-semibold text-pink-900">
          {name}
        </span>

        <span className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <span className="text-sm text-pink-800">
            Quantity: {quantity}
          </span>

          <span className="rounded-full bg-pink-50 px-3 py-1 text-sm capitalize text-pink-800">
            {category}
          </span>
        </span>
      </button>
    </li>
  );
}
