import CircularImg from "../CircularImg";
import { IMAGE_LINKS } from "./allspeakers";

export default function SpeakersSection() {
  const imgs = IMAGE_LINKS.map((image, idx) => {

      return (
        <div className="py-1.5 px-1.5" key={idx}>
          <CircularImg href={image} />
        </div>
      );

  });

  return (
    // <div className='grid place-items-center'>
    //     <h1 className='my-4'>Speakers</h1>
    //     <div className='grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5 m-2'>
    //     {imgs}
    //     </div>
    // </div>
    <div className="grid place-items-center">
      <h1 className="my-4">Speakers</h1>
      <div className="flex flex-col justify-center md:flex-row flex-wrap place-items-center md:mx-20 lg:mx-0">
        {imgs}
      </div>
    </div>
  );
}
