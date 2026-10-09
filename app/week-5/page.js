import Link from "next/link";
import NewItem from "./new-item";

export default function Week5() {
  return (
    <section className="min-h-screen bg-purple-300 p-8 text-purple-900">
      <h1 className="mb-6 text-4xl font-bold text-purple-900">
        Week 5 Assignments
      </h1>
      <div className="flex gap-4">
        <Link href="/" className="font-medium underline">Home</Link>
      </div>
        <NewItem />
    </section>
  );
}