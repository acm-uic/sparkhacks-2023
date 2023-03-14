import CircularImg from "../CircularImg";
import { IMAGE_LINKS } from "./allspeakers";

export default function SpeakersSection() {
  const imgs = IMAGE_LINKS.map((image, idx) => {
    return <CircularImg key={idx} href={image} />;
  });

  return (
    <div className="grid place-items-center">
      <h1 className="my-4">Speakers</h1>
      <div className="flex flex-col gap-4 justify-center md:flex-row flex-wrap">
        {imgs}
      </div>
    </div>
  );
}
