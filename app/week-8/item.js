export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li onClick={onSelect} className="bg-blue-900 text-white mb-4 p-4 w-full cursor-pointer hover:bg-white hover:text-black border-2 border-gray-400">
            <h2 className="font-bold">{name}</h2>
            <p className="ml-4">Quantity: {quantity}</p>
            <p className="ml-4">Category: {category}</p>
        </li>
    );
}
