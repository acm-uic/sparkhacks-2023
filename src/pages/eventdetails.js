import EventCard from "../components/EventCard";
import "./eventdetails.css";

const dummyData = {
  Header: "Git Workshop with Linus Torvalds",
  Time: "12:00 PM",
  Description:
    "Want to get better at git? Want to learn how you can contribute to open source? Learn from the greatest! Linus Torvalds! This workshop will cover forking repos, guidelines, pull requests, and why you should contribute! Food will be provided immediately after as well as mercy. Merchandise will also be available! This event will be hosted in the CS Lounge!",
  Date: "01/01/2022",
  Adress: "adress for google maps",
};

export default function EventDetails() {
  return (
    <div className="container">
      <h1>Event Details</h1>
      <EventCard event={dummyData} />
      <EventCard event={dummyData} />
    </div>
  );
}
