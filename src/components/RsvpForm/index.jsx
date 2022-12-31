import PrimaryButton from "../PrimaryButton";

export default function RsvpForm(){
    return (
        <div className={"text-center"}>
            <h1>Want to Attend?</h1>
            <div className="grid grid-flow-row content-center w-full gap-3">
                <input type="text" placeholder="Name" />
                <select value={"Major"}>
                    <option value="none" selected hidden>Major</option>
                    <option value={"Computer Science"}>Computer Science</option>
                    <option value={"Computer Engineering"}>Computer Engineering</option>
                    <option value={"Other"}>Other</option>
                </select>
                <input type="text" placeholder="University" />
                <input type="text" placeholder="Email" />
                <PrimaryButton className={"w-full"} innerText="RSVP"/>
            </div>
        </div>

    )
}