import './about.css'
import SpeakersSection from '../components/SpeakersSection';
import ExecutiveLeaders from '../components/ExecutiveLeaders';
import Description from '../components/Description';
import ArchiveCarousel from '../components/ArchiveCarousel';
import WhoAreWe from '../components/WhoAreWe';
export default function About(){
    return (<div>
                <Description/>
                <WhoAreWe/>
                <ExecutiveLeaders/>
                <SpeakersSection/>
                <ArchiveCarousel/>
            </div>
    );
}
