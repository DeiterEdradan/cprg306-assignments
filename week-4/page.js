import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen bg-teal-50 py-10">
      <h1 className="mb-6 text-center text-3xl font-bold text-teal-900">
        Add New Item
      </h1>
      <NewItem />
    </main>
  );
}