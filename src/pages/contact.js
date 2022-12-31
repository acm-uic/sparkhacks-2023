import './contact.css';
import RsvpForm from "../components/RsvpForm";
import SpeakersSection from "../components/SpeakersSection";
import ContactUs from "../components/ContactUs";
export default function Contact(){
    return (
        <div className={"m-3"}>
            <RsvpForm/>
            <SpeakersSection/>
            <ContactUs/>
        </div>
    )
}
