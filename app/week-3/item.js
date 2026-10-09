export default function Item({ name, quantity, category }) {
<<<<<<< HEAD
return (
<li className="border border-sky-500 bg-sky-800 w-full max-w-xs m-4 p-2">
<h3 className="text-xl font-bold">{name}</h3>
<p>Quantity: {quantity}</p>
<p>Category: {category}</p> </li>); }
=======
    return (
        <li className="bg-blue-900 text-white mb-4 p-4 max-w-md mx-auto">
            <h2 className="font-bold">{name}</h2>
            <p className="ml-4">Quantity: {quantity}</p>
            <p className="ml-4">Category: {category}</p>
        </li>
    );
}
>>>>>>> 62c3f3df4f96feeef15a07d036935e21b40c5398
