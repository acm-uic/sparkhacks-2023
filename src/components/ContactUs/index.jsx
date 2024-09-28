import PrimaryButton from "../PrimaryButton";
import React,{useState} from "react";

export default function ContactUs(){
    const [value, setValue] = React.useState('');
    const[reason,setReason] = useState('');
    const[details,setDetails] = useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
        setReason(event.target.value);
    };
    const openEmail = () =>{
        console.log(reason);
        console.log(details);
        const to = "info@sparkhacksatuic.com";
        const subject = reason;
        const body = details;
        const emailLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        return window.location.href = emailLink;
    }
    return (
        <div className={"flex justify-center items-center min-h-[500px] sm:h-screen sm:bg-primary mt-5"}>
            <div className="flex-auto absolute text-center h-fit w-full min-w-max px-2 py-10 sm:w-1/2 sm:drop-shadow-[-90px_-60px_4px_rgba(0,0,0,0.5)] sm:bg-secondary-light sm:rounded-[2.813rem]">
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

                    <textarea type="textarea" rows={5} placeholder="Additional Details" 
                        onChange = {(e)=>{setDetails(e.target.value)}}
                    />
                    <PrimaryButton className={"w-full"} innerText="Send"
                        onClick = {openEmail}
                        type="submit"
                    />
                </div>
            </div>
        </div>

    )
}