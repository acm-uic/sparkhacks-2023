import './contact.css';
import RsvpForm from "../components/RsvpForm";
import SponsorsSection from '../components/SponsorsSection';
import ContactUs from "../components/ContactUs";
export default function Contact(){
    return (
        <div className={"m-3"}>
            <RsvpForm/>
            <SponsorsSection/>
            <ContactUs/>
        </div>
    )
}