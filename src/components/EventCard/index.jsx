import PrimaryButton from "../PrimaryButton";

export default function EventCard({ event }) {
  return (
    <div className="px-2">
      <div className="flex justify-between flex-row-reverse lg:flex-row w-full items-center py-1">
        <h4 className="">{event.time}</h4>
        <h2 className="hidden lg:block flex-auto ml-4">{event.header}</h2>
        <h4 className="">{event.date}</h4>
      </div>
      <h2 className="lg:hidden flex-auto">{event.header}</h2>
      <div className="flex py-1 items-center">
        <p className="pr-10 text-justify">{event.description}</p>
        <div className="hidden lg:block flex-none justify-self-end">
          <PrimaryButton innerText={"Show on Map"} />
        </div>
      </div>
    </div>
  );
}
