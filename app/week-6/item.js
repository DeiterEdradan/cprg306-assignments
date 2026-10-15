export default function Item({ name, quantity, category }) {
    return (
        <li className="bg-blue-900 text-white mb-4 p-4 max-w-md mx-auto">
            <h2 className="font-bold">{name}</h2>
            <p className="ml-4">Quantity: {quantity}</p>
            <p className="ml-4">Category: {category}</p>
        </li>
    );
}