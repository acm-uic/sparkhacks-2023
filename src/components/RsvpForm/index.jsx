import PrimaryButton from "../PrimaryButton";
import React from "react";

export default function RsvpForm(){
    const [value, setValue] = React.useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className={"text-center box-border pb-3"}>
            <div className={"relative block"}>
                <div className={"block relative box-border object-cover overflow-hidden max-h-[410px]"}>
                    <img className={"hidden sm:block relative w-full"} src={require("../../assets/images/archivedImages/2018.png")} alt={"stock group photo"}/>
                </div>
                <div className={"sm:absolute top-0 mx-auto block p-2 w-full"}>
                    <h1 className={"text-white md:text-black"}>Want to Attend?</h1>
                    <div className={"flex items-center justify-center "}>
                        <div className="grid grid-flow-row w-full sm:max-w-2xl gap-3 p-3 m-auto">
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
            </div>


        </div>

    )
}