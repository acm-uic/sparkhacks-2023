import Events from "../components/Events";
import "./eventdetails.css";

import DummyEvents from "../api/DummyEvents";

export default function EventDetails() {
  return (
    <div className="flex lg:container mx-auto">
      <Events events={DummyEvents} />
    </div>
  );
}
