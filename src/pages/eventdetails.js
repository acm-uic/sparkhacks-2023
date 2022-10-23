import EventCard from "../components/EventCard";
import "./eventdetails.css";

import DummyEvents from "../api/DummyEvents";
console.log(DummyEvents["Monday"][0]);
export default function EventDetails() {
  return (
    <div className="container">
      <h1>Event Details</h1>
      <EventCard event={DummyEvents["Monday"][0]} />
      <hr className="my-3" />
      <EventCard event={DummyEvents["Monday"][1]} />
    </div>
  );
}
