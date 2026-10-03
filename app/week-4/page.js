import Link from "next/link";
import NewItem from "./new-item";

export default function Week4() {
  return (
    <section className="min-h-screen bg-black-50 p-8">
      <h1 className="mb-6 text-4xl font-bold text-green-800">
        Week 4 Assignments
      </h1>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
      </div>
        <NewItem />
    </section>
  );
}