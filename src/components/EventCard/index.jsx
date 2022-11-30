import PrimaryButton from "../PrimaryButton";

// const renderMobile = (screenSize) > {
//
// }
export default function EventCard({ event }) {
  return (
    <div>
      <div className="flex justify-between content-start flex-row-reverse lg:flex-row w-full py-1">
        <h4 className="flex">{event.time}</h4>
        <h2 className="hidden lg:block flex-auto lg:ml-4">{event.header}</h2>
        <h4 className="justify-self-end">{event.date}</h4>
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