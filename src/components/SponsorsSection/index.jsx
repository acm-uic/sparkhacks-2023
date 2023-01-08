import CircularImg from "../CircularImg";
import { IMAGE_LINKS } from "./allsponsors";

export default function SponsorsSection(){
    const imgs = IMAGE_LINKS.map((image, idx) => {
        return (
            <div key={idx}>
                <CircularImg key={idx} href={image}/>
            </div>
        )
    });

    return (
        <div className='grid place-items-center '>
            <h1 className='my-4'>Sponsors</h1>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5 m-2'>
                {imgs}
            </div>
        </div>
    );
}