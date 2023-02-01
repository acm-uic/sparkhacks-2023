import PrimaryButton from "../PrimaryButton";
import React from "react";

export default function RsvpForm(){
    const [value, setValue] = React.useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className={"text-center  sm:bg-secondary-light box-border py-3"}>
            <h1 className={"sm:text-white text-black"}>Want to Attend?</h1>
            <div className={"flex items-center justify-center "}>
                <div className="grid grid-flow-row w-full sm:w-1/2 gap-3 p-3 m-auto">
                    <input type="text" placeholder="Name" />
                    <div className={"drop-down"}>
                        <div className={"arrow-down"}/>
                        <select required value={value} onChange={handleChange}>
                            <option value="" hidden>Major</option>
                            <option value={"Computer Science"}>Computer Science</option>
                            <option value={"Computer Engineering"}>Computer Engineering</option>
                            <option value={"Other"}>Other</option>
                        </select>
                    </div>

                    <input type="text" placeholder="University" />
                    <input type="text" placeholder="Email" />
                    <PrimaryButton className={"w-full"} innerText="RSVP"/>
                </div>
            </div>

        </div>

    )
}