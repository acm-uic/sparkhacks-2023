import "./social.css";
import DesktopSMBubbles from "../components/DesktopSMBubbles";
import DesktopNewsletter from "../components/DesktopNewsletter";
import MobileSMBubbles from "../components/MobileSMBubbles";
import MobileNewsletter from "../components/MobileNewsletter";

export default function Social() {
  return (
    <div>
      <div className="hidden lg:block">
        <DesktopSMBubbles />
        <DesktopNewsletter />
      </div>
      <div className="lg:hidden">
        <MobileSMBubbles />
        <MobileNewsletter />
      </div>
    </div>
  );
}
