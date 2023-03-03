import "./social.css";
import DesktopSMBubbles from "../components/DesktopSMBubbles";
import DesktopNewsletter from "../components/DesktopNewsletter";
import MobileSMBubbles from "../components/MobileSMBubbles";

export default function Social() {
  return (
    <div>
      <h1>Social</h1>
      <div className="hidden lg:block">
        <DesktopSMBubbles />
        <DesktopNewsletter />
      </div>
      <div className="lg:hidden">
        <MobileSMBubbles />
      </div>
    </div>
  );
}
