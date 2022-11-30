import PrimaryButton from "../PrimaryButton";

export default function EventCard({ event }) {
  return (
    <div>
      <div className="flex flex-row-reverse lg:flex-row w-full py-1 items-center">
        <h4 className="flex">{event.time}</h4>
        <h2 className="hidden lg:block lg:flex-auto lg:ml-4">{event.header}</h2>
        <h4 className="flex-initial lg:justify-self-end">{event.date}</h4>
      </div>
      <h2 className="lg:hidden flex-auto">{event.header}</h2>
      <div className="flex sm:py-1 items-center">
        <p className="pr-10">{event.description}</p>
        <div className="hidden lg:block flex-none justify-self-end">
          <PrimaryButton innerText={"Show on Map"} />
        </div>
      </div>
    </div>
  );
}