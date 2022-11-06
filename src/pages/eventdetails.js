import Events from "../components/Events";
import "./eventdetails.css";

import DummyEvents from "../api/DummyEvents";

export default function EventDetails() {
  return (
    <div className="container">
      <div className={"mx-[5rem] min-w-full"}>
        <h1>Event Details</h1>
      </div>
      <div className={"ml-[10rem] min-w-fit"}>
        <Events events={DummyEvents} />
      </div>
    </div>
  );
}
