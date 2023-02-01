import PrimaryButton from "../PrimaryButton";
import React from "react";

export default function ContactUs(){
    const [value, setValue] = React.useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className={"grid h-screen bg-primary place-items-center"}>
            <div className="absolute h-fit w-1/2 min-w-max px-7 py-10 drop-shadow-[-90px_-60px_4px_rgba(0,0,0,0.5)] bg-secondary-light rounded-[2.813rem]">
                <h1>Contact Us!</h1>
                <div className="grid grid-flow-row gap-1 w-full min-w-max p-3">
                    <input type="text" placeholder="Name" />
                    <div className={"drop-down"}>
                        <div className={"arrow-down"}/>
                        <select required value={value} onChange={handleChange}>
                            <option value="" hidden>Reason</option>
                            <option value={"Sponsorship"}>Interested in sponsoring</option>
                            <option value={"Speaker"}>Interested in being a speaker</option>
                            <option value={"Other"}>Other</option>
                        </select>
                    </div>

                    <textarea type="textarea" rows={5} placeholder="Additional Details" />
                    <PrimaryButton className={"w-full"} innerText="Send"/>
                </div>
            </div>
        </div>

    )
}