import './about.css'
import SpeakersSection from '../components/SpeakersSection';
import ExecutiveLeaders from '../components/ExecutiveLeaders';

export default function About(){
    return (<div>
                <h1>About</h1>
                <ExecutiveLeaders/>
                <SpeakersSection/>
            </div>
    );
}
