export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="flex cursor-pointer items-center justify-between rounded-lg bg-white px-4 py-3 shadow-sm ring-1 ring-teal-100 hover:bg-teal-50"
    >
      <span className="font-medium text-slate-800">{name}</span>
      <span className="text-sm capitalize text-teal-700">
        {quantity} &middot; {category}
      </span>
    </li>
  );
}
