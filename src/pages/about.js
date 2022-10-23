import './about.css'
import SpeakersSection from '../components/SpeakersSection';
import ExecutiveLeaders from '../components/ExecutiveLeaders';
import Description from '../components/Description';
export default function About(){

    return (<div className={"place-items-center m-auto"}>
                <div className={"container m-auto px-[5rem]"}>
                    <div className={"mx-[5rem] min-w-full"}>
                        <h1>Who We Are</h1>
                    </div>
                    <div className={"ml-[10rem] min-w-fit"}>
                        <p>The Flourish! Council is a small group of ~10 students who are interested in open source technologies and want to bring this knowledge to other students! We are all UIC students ranging from 1st year to graduate with varying levels of experience. All with a common goal in of teaching about open source! Our SIG WebDev created this site as our first official project aimed at increasing interest through a fun and informative website! See below for more information about the executive project leaders and our amazing speakers!</body>
                    </div>
                </div>
                <Description/>
                <ExecutiveLeaders/>
                <SpeakersSection/>
            </div>
    );
}
