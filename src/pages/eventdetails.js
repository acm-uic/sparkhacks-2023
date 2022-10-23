import EventCard from "../components/EventCard";
import "./eventdetails.css";

import DummyEvents from "../api/DummyEvents";
console.log(DummyEvents["Monday"][0]);
export default function EventDetails() {
  return (
    <div className="container">
      <div className={"mx-[5rem] min-w-full"}>
        <h1>Event Details</h1>
      </div>
      <div className={"ml-[10rem] min-w-fit"}>
        <EventCard event={DummyEvents["Monday"][0]} />
        <hr className="my-3" />
        <EventCard event={DummyEvents["Monday"][1]} />
      </div>
    </div>
  );
}
