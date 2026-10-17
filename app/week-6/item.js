
export default function Item({ name, quantity, category }) {

return (
    <li className="mb-2 rounded-lg bg-white p-3 text-black shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <span className="font-medium">{name}</span>
        <span className="text-sm">Quantity: {quantity}</span> </div>

      <p className="mt-1 text-sm capitalize text-gray-600">
        Category: {category} </p></li> 
    );
}
