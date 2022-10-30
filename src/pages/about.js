import './about.css'
import SpeakersSection from '../components/SpeakersSection';
import ExecutiveLeaders from '../components/ExecutiveLeaders';
import Description from '../components/Description';
import ArchiveCarousel from '../components/ArchiveCarousel';
import WhoWeAreSection from '../components/WhoAreWeSection';

export default function About(){

    return (<div>
                <WhoWeAreSection/>
                <Description/>
                <ExecutiveLeaders/>
                <SpeakersSection/>
                <ArchiveCarousel/>
            </div>
    );
}