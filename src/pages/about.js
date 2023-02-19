import './about.css'
import SpeakersSection from '../components/SpeakersSection';
import ExecutiveLeaders from '../components/ExecutiveLeaders';
import Description from '../components/Description';
import ArchiveCarousel from '../components/ArchiveCarousel';
import WhoAreWe from '../components/WhoAreWe';
import StaggeredText from "../components/StaggeredText";

export default function About(){
    const exampleSections = [
        {
            id: 0,
            header: "WebScrape Crash Course",
            body: "There is a whole lot to taco bell here but lets pastrami the time a bit with Jazz."
        },
        {
            id: 1,
            header: "'Yoohoo, big summer blowout'",
            body: "This is an example of a really really long text. A long text is totally like a long thing A long text is totally like a long thingA long text is totally like a long thingA long text is totally like a long thingA long text is totally like a long thingA long text is totally like a long thingA long text is totally like a long thingA long text is totally like a long thing"
        },
        {
            id: 2,
            header: "Anime Destruction",
            body: "The end of anime is inevitable, but you can speed it up!"
        },
        {
            id: 3,
            header: "Parking Alert",
            body: "Would the owner of the green and black Jeep please move your vehicle, it is blocking the exit."
        }
    ]
    return (<div>
                <StaggeredText sections = {exampleSections}/>
                 <WhoAreWe/>
                <Description/>
                <ExecutiveLeaders/>
                <SpeakersSection/>
                <ArchiveCarousel/>
            </div>
    );
}