import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="min-h-screen bg-green-50 p-8">
        <h1 className="mb-6 text-4xl font-bold text-green-800">
        Shopping List
</h1>
    <ItemList />
    </main>
    );
}