import { useCallback } from "react";

import PrimaryButton from "../PrimaryButton";
import getURL from "./getURL";

export default function EventCard({ event }) {
  //generate url
  const url = getURL(event.address[0], event.address[1], event.address[2]);

  // Is user using a mobile phone?
  const isPhone = /Mobile/i.test(navigator.userAgent);

  //Handle clicking
  const handleClick = useCallback((e) => {
    e.preventDefault();
    window.open(url);
  });

  //Return a mobile phone version where the whole event is clickable, and the version with button on a PC
  return isPhone ? (
    <div className="px-2" role={"button"} onClick={handleClick}>
      <div className="flex justify-between flex-row w-full items-center py-1">
        <h4>{event.time}</h4>
        <h2 className="hidden lg:block flex-auto ml-4">{event.header}</h2>
        <h4>{event.date}</h4>
      </div>
      <h2 className="lg:hidden flex-auto text-left">{event.header}</h2>
      <div className="flex py-1 items-center">
        <p className="pr-10 text-justify">{event.description}</p>
      </div>
    </div>
  ) : (
    <div className="px-2">
      <div className="flex justify-between flex-row w-full items-center py-1">
        <h4>{event.time}</h4>
        <h2 className="hidden lg:block flex-auto ml-4">{event.header}</h2>
        <h4>{event.date}</h4>
      </div>
      <h2 className="lg:hidden flex-auto text-left">{event.header}</h2>
      <div className="flex py-1 items-center">
        <p className="pr-10 text-justify">{event.description}</p>
        <div className="hidden lg:block flex-none justify-self-end">
          <PrimaryButton innerText={"Show on Map"} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}
