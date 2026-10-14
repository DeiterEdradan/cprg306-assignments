export default function Item({name, quantity, category}) {
    return (
        <li className="rounded-lg border border-green-200 bg-green-900 p-4 text-white shadow-sm">
            <p>Name: {name}</p>
            <p>Quantity: {quantity}</p>
            <p>Category: {category}</p>
        </li>
    );
}