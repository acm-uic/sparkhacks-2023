import PrimaryButton from "../PrimaryButton";

export default function EventCard({ event }) {
  return (
    <div className="flex-row w-full">
      <div className="flex w-full">
        <h4 className="flex-initial">{event.time}</h4>
        <h2 className="flex-auto ml-4">{event.header}</h2>
        <h4 className="flex-initial justify-self-end">{event.date}</h4>
      </div>
      <div className="flex">
        <p>{event.description}</p>
        <div className="flex-none self-end justify-self-end">
          <PrimaryButton innerText={"Show on Map"} />
        </div>
      </div>
    </div>
  );
}