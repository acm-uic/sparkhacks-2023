import './about.css'
import SpeakersSection from '../components/SpeakersSection';
import ExecutiveLeaders from '../components/ExecutiveLeaders';
import Description from '../components/Description';
import ArchiveCarousel from '../components/ArchiveCarousel';
import WhoAreWe from '../components/WhoAreWe';
import StaggeredTextDivs from "../components/StaggeredText/staggeredDiv";
import StaggeredTextObjs from "../components/StaggeredText/staggeredObject";

export default function About(){
    const exampleDivs = [
        (<div key={4} className={"px-6 py-2"}>
            <h2>Q: How do I install Linux?</h2>
            <p>A: You actually do not want to install linux, for once you do you will never escape.</p>
        </div>),
        (<div key={5} className={"px-6 py-2"}>
            <h2>Q: How do I install Windows?</h2>
            <p>A: You already have it installed, everyone does...</p>
        </div>),
        (<div key={6} className={"px-6 py-2"}>
            <h2>Q: Anime?</h2>
            <p>A: No, no anime. In fact here is a link to destroy your beliefs <a href={"https://youtu.be/dQw4w9WgXcQ"}> LINK TO YOUR MOM LOL</a>. I bet you feel really silly now. Now imagine the rest is a really long explanation. This is an example of a really really long text. A long text is totally like a long thing A long text is totally like a long thingA long text is totally like a long thingA long text is totally like a long thingA long text is totally like a long thingA long text is totally like a long thingA long text is totally like a long thingA long text is totally like a long thing</p>
        </div>),
    ]
    const exampleObjects = [
        {
            id: 0,
            header: "WebScrape Crash Course",
            body: "There is a whole lot to taco bell here but lets pastrami the time a bit with Jazz."
        },
        {
            id: 1,
            header: "'Yoohoo! big summer blowout'",
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
                <StaggeredTextDivs sections = {exampleDivs}/>
                <StaggeredTextObjs sections = {exampleObjects}/>
                 <WhoAreWe/>
                <Description/>
                <ExecutiveLeaders/>
                <SpeakersSection/>
                <ArchiveCarousel/>
            </div>
    );
}