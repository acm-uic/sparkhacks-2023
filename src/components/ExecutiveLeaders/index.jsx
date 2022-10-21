import CircularImg from "../CircularImg";
import { IMAGE_LINKS } from "./allexecutives";

export default function ExecutiveLeaders(){
    return (<div class='grid place-items-center'>
                <h1 class='flex flex-col text-center my-4'>Executive Leaders</h1>
                <div class='grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-3 m-2'>
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