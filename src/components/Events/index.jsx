import { useState } from "react";
import Day from "./Day";
import EventCard from "../EventCard";
import MobileDay from "./MobileDay";
//List of days
const days = [
  // "Monday",
  // "Tuesday",
  // "Wednesday",
  // "Thursday",
  "Friday",
  "Saturday",
  // "Sunday",
];

// Helper function to map all events from listOfEvents to EventCards

function showEvents(listOfEvents) {
  return listOfEvents.map((event, i, arr) =>
    // Don't add <hr /> to the last element
    arr.length == i + 1 ? (
      <EventCard event={event} key={event.id} />
    ) : (
      <>
        <EventCard event={event} key={event.id} /> <hr className="m-2 " />
      </>
    )
  );
}

function showNone() {
  return <div>No events</div>;
}

export default function Events({ events }) {
  //Track active day; Monday is selected by default;

  const [active, setActive] = useState(days[0]);

  return (
    <>
      {/* Large and above screen */}
      <div className="hidden lg:block border-solid border-4 border-primary-dark min-w-full">
        {/* Day Selector */}

        <div className="grid grid-flow-col">
          {days.map((day) => (
            <Day
              key={day}
              text={day}
              isActive={active === day}
              handleClick={() => setActive(day)}
            >
              {day}
            </Day>
          ))}
        </div>

        {/* Events of the selected day */}
        {events[active] ? showEvents(events[active]) : showNone()}
      </div>

      {/* Medium and smaller screen */}
      <div className="lg:hidden overflow-hidden min-w-full">
        {days.map((day, i) => (
          <MobileDay
            index={i + 1}
            key={day}
            text={day}
            events={events[day] ? showEvents(events[day]) : showNone()}
          />
        ))}
      </div>
    </>
  );
}
