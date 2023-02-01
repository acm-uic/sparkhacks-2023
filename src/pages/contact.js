import './contact.css';
import RsvpForm from "../components/RsvpForm";
import SpeakersSection from "../components/SpeakersSection";
import ContactUs from "../components/ContactUs";
export default function Contact(){
    return (
        <div className={""}>
            <RsvpForm/>
            <SpeakersSection/>
            <ContactUs/>
        </div>
    )
}
