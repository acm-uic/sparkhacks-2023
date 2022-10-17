import CircularImg from "../CircularImg";
import { IMAGE_LINKS } from "./allspeakers";

export default function SpeakersSection(){
    return (<div class='grid place-items-center'>
                <h1 class='my-4'>Speakers</h1>
                <div class='grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5 m-2'>
                {
                    IMAGE_LINKS.map(
                            (image)=>{
                                return <CircularImg href={image}/>
                            }
                    )
                }
                </div>
            </div>);
}