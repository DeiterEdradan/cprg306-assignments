export default function Item({ name, quantity, category }) {
  return (
    <li className="flex items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm ring-1 ring-teal-100">
      <span className="font-medium text-slate-800">{name}</span>
      <span className="text-sm text-teal-700">
        {quantity} · {category}
      </span>
    </li>
  );
}
