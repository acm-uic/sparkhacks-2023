import './social.css'
import ArchiveCarousel from '../components/ArchiveCarousel';
import DesktopSMBubbles from '../components/DesktopSMBubbles';
import DesktopNewsletter from '../components/DesktopNewsletter';


export default function Social(){
    return (
        <div>
            <h1>Social</h1>
            <DesktopSMBubbles/>
            <DesktopNewsletter/>
            <ArchiveCarousel/>
        </div>
    
    );
}
