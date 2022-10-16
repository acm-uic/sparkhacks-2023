import CircularImg from "../CircularImg";

const PLACEHOLDER_1 = require("../../assets/images/Placeholder_1.bmp");
const PLACEHOLDER_2 = require("../../assets/images/Placeholder_2.bmp");
const PLACEHOLDER_3 = require("../../assets/images/Placeholder_3.bmp");
const PLACEHOLDER_4 = require("../../assets/images/Placeholder_4.bmp");
const PLACEHOLDER_5 = require("../../assets/images/Placeholder_5.bmp");

export default function SpeakersSection(){
    return (<div class='grid place-items-center'>
                <h1 class='my-4'>Speakers</h1>
                <div class='grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5 m-2'>
                    <CircularImg href={PLACEHOLDER_1}/>
                    <CircularImg href={PLACEHOLDER_2}/>
                    <CircularImg href={PLACEHOLDER_3}/>
                    <CircularImg href={PLACEHOLDER_4}/>
                    <CircularImg href={PLACEHOLDER_5}/>
                </div>
            </div>);
}