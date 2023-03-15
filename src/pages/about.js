import './about.css'
import SpeakersSection from '../components/SpeakersSection';
import ExecutiveLeaders from '../components/ExecutiveLeaders';
import Description from '../components/Description';
import WhoAreWe from '../components/WhoAreWe';
export default function About(){
    return (<div className={"w-fit"}>
                <Description/>
                <WhoAreWe/>
                <ExecutiveLeaders/>
                <SpeakersSection/>
            </div>
    );
}
