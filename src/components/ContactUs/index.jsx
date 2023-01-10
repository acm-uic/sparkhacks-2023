import PrimaryButton from "../PrimaryButton";
import React from "react";

export default function ContactUs(){
    const [value, setValue] = React.useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className={"text-center"}>
            <h1>Contact Us!</h1>
            <div className="grid grid-flow-row w-full gap-3">
                <input type="text" placeholder="Name" />
                <select required value={value} onChange={handleChange}>
                    <option value="" hidden>Reason</option>
                    <option value={"Sponsorship"}>Interested in sponsoring</option>
                    <option value={"Speaker"}>Interested in being a speaker</option>
                    <option value={"Other"}>Other</option>
                </select>
                <textarea type="textarea" rows={5} placeholder="Additional Details" />
                <PrimaryButton className={"w-full"} innerText="Send"/>
            </div>
        </div>

    )
}