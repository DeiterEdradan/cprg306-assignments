import EventList from "./event-list";
import StudentInfo from "./student-info";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>

      <StudentInfo />

      <h2>Community Event Planner</h2>
      <EventList />

      <div>
        <h2>Current Weather</h2>
        <p>Temperature: 15°C</p>
        <p>
          <Link href="https://www.theweathernetwork.com/ca/weather/alberta/calgary">
            Weather forecast
          </Link>
        </p>
        <p>
          <Link href="../">Home</Link>
        </p>
      </div>
    </main> ); }