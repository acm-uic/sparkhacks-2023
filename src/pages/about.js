import './about.css'
import ExecutiveLeaders from '../components/ExecutiveLeaders';
import Description from '../components/Description';
import WhoAreWe from '../components/WhoAreWe';
export default function About(){
    return (<div className={"container mx-auto"}>
                <Description/>
                <WhoAreWe/>
                <ExecutiveLeaders/>
            </div>
    );
}
