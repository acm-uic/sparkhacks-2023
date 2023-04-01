import CircularImg from "../CircularImg";
import { IMAGE_LINKS } from "./allexecutives";

export default function ExecutiveLeaders(){
  const imgs = IMAGE_LINKS.map((image, idx) => {
    return (<div key={idx}>
      <CircularImg href={image[1]} />
      <p className="text-center">{image[0]}</p>
      </div>)
  });

  return (
    <div className="grid place-items-center">
    <h1 className="my-4">Executive Leaders</h1>
    <div className="flex flex-col gap-4 justify-center md:flex-row flex-wrap">
    {imgs}
    </div>
    </div>
  );
}
