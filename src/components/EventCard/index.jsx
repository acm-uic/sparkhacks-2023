import PrimaryButton from "../PrimaryButton";

export default function EventCard({ event }) {
  return (
    <div>
      <div className="flex w-full py-1 items-center">
        <h4 className="flex-initial">{event.time}</h4>
        <h2 className="flex-auto ml-4">{event.header}</h2>
        <h4 className="flex-initial justify-self-end">{event.date}</h4>
      </div>
      <div className="flex py-1 items-center">
        <p className="pr-10">{event.description}</p>
        <div className="flex-none justify-self-end">
          <PrimaryButton innerText={"Show on Map"} />
        </div>
      </div>
    </div>
  );
}