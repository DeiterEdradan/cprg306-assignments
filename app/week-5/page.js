
import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-sky-100 p-8">
      <h1 className="text-4xl font-bold text-center text-sky-500 mb-8">
        My Shopping List
      </h1>

      <NewItem />
    </main>
  );
}
