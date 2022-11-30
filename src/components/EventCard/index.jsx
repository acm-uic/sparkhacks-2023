import PrimaryButton from "../PrimaryButton";

// const renderMobile = (screenSize) > {
//
// }
export default function EventCard({ event }) {
  return (
    <div className="px-2">
      <div className="flex w-full py-1 items-center">
        <h4 className="flex-initial">{event.time}</h4>
        <h2 className="flex-auto ml-4">{event.header}</h2>
        <h4 className="flex-initial justify-self-end">{event.date}</h4>
      </div>
      <h2 className="lg:hidden flex-auto">{event.header}</h2>
      <div className="flex py-1 items-center">
        <p className="pr-10">{event.description}</p>
        <div className="hidden lg:block flex-none  justify-self-end">
          <PrimaryButton innerText={"Show on Map"} />
        </div>
      </div>
    </div>
  );
}