import './about.css'
import SpeakersSection from '../components/SpeakersSection';
import ExecutiveLeaders from '../components/ExecutiveLeaders';
import Description from '../components/Description';
import ArchiveCarousel from '../components/ArchiveCarousel';
import WhoAreWe from '../components/WhoAreWe';
import StaggeredSections from "../components/StaggeredSections/staggeredSections";
import {exampleObjects} from "../api/exampleStaggeredText/exampleOBJ";
import {exampleDivs} from "../api/exampleStaggeredText/exampleDIV";
export default function About(){
    return (<div>
                <StaggeredSections sections={exampleObjects}/>
                <StaggeredSections sections={exampleDivs}/>
                <WhoAreWe/>
                <Description/>
                <ExecutiveLeaders/>
                <SpeakersSection/>
                <ArchiveCarousel/>
            </div>
    );
}