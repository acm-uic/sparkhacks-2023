import './about.css'
import SpeakersSection from '../components/SpeakersSection';

export default function About(){
    return (<div className={"place-items-center"}>
                <div className={"container mx-auto"}>
                    <div className={"font-bold text-[38px] mx-auto"}>Who We Are</div>
                    <div className={"text-base text-[14px] mx-[10rem]"}>
                        The Flourish! Council is a small group of ~10 students who are interested in open source technologies and want to bring this knowledge to other students! We are all UIC students ranging from 1st year to graduate with varying levels of experience. All with a common goal in of teaching about open source! Our SIG WebDev created this site as our first official project aimed at increasing interest through a fun and informative website! See below for more information about the executive project leaders and our amazing speakers!
                    </div>
                </div>
                <SpeakersSection/>
            </div>
    );
}
