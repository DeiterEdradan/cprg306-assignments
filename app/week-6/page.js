import ItemList from "./item-list";
export default function Page() {
    return (
        <main>
            <div className="mx-auto max-w-md">
                <h1 className="text-4xl font-bold text-white ">Shopping List</h1>
                <ItemList/>
            </div>
        </main>
    );
}