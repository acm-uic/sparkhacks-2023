import CircularImg from "../CircularImg";
import { IMAGE_LINKS } from "./allexecutives";

export default function ExecutiveLeaders(){
    const imgs = IMAGE_LINKS.map((image, idx) => {
        return (
            <CircularImg key={idx} href={image} />
        )
    })

    return (
        <div className='grid place-items-center'>
            <h1 className='flex flex-col text-center my-4'>Executive Leaders</h1>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-3 m-2'>
                {imgs}
            </div>
        </div>
    );
}