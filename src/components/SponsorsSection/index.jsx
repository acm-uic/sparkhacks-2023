import CircularImg from "../CircularImg";
import { IMAGE_LINKS } from "./allsponsors";

export default function SponsorsSection(){
    const imgs = IMAGE_LINKS.map((image, idx) => {
        return (
            <div key={idx} className="basis-1/5">
                <CircularImg key={idx} href={image}/>
            </div>
        )
    });

    return (
        <div className='grid place-items-center'>
            <h1 className='my-4'>Sponsors</h1>
            <div className='flex flex-row flex-wrap justify-center w-3/4'>
                {imgs}
            </div>
        </div>
    );
}