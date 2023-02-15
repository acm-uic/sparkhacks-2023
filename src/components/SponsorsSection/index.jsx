import CircularImg from "../CircularImg";
import { IMAGE_LINKS } from "./allsponsors";

export default function SponsorsSection(){
    const imgs = IMAGE_LINKS.map((image, idx) => {
        return (
            <div key={idx} className="">
                <CircularImg key={idx} href={image}/>
            </div>
        )
    });

    return (
        <div className='container mx-auto flex flex-col text-center justify-center'>
            <h1 className='my-4'>Sponsors</h1>
            <div className='flex flex-row flex-wrap justify-center gap-2 place-content-evenly'>
                {imgs}
            </div>
        </div>
    );
}
