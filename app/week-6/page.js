import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-pink-100 px-4 py-8 text-pink-950">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-4xl font-bold">
          Shopping List
        </h1>

        <ItemList />
      </div>
    </main>
  );
}