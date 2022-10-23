import PrimaryButton from "../PrimaryButton";

export default function EventCard({ event }) {
  return (
    <div class="flex-row w-full">
      <div class="flex w-full">
        <h4 className="flex-initial">{event.Time}</h4>
        <h2 className="flex-auto ml-4">{event.Header}</h2>
        <h4 className="flex-initial justify-self-end">{event.Date}</h4>
      </div>
      <div className="flex">
        <p>{event.Description}</p>
        <div className="flex-none self-end justify-self-end">
          <PrimaryButton innerText={"Show on Map"} />
        </div>
      </div>
      <hr class="my-3" />
    </div>
  );
}