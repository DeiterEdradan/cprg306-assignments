export default function Item({ name, quantity, category }) {
  return (
    <li className="rounded-xl border border-pink-200 bg-white p-4 shadow-sm">
      <h2 className="text-xl font-bold text-pink-950">
        {name}
      </h2>

      <p className="mt-1 text-pink-800">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}