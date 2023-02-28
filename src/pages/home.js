import './home.css'
import '../components/SponsorsSection'
import SponsorsSection from '../components/SponsorsSection'
import HomeHeader from "../components/Homepage";

export default function Home(){
    return (<div className=''>
        <HomeHeader/>
        <SponsorsSection />
        
    </div>)
}
