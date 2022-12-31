import PrimaryButton from "../PrimaryButton";

export default function ContactUs(){
    return (
        <div className={"text-center"}>
            <h1>Contact Us!</h1>
            <div className="grid grid-flow-row w-full gap-3">
                <input type="text" placeholder="Name:" />
                <input type="text" placeholder="Reason:" />
                <textarea type="textarea" rows={5} placeholder="Additional Details:" />
                <PrimaryButton className={"w-full"} innerText="Send"/>
            </div>
        </div>

    )
}