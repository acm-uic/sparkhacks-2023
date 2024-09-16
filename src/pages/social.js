import "./social.css";
import DesktopSMBubbles from "../components/DesktopSMBubbles";
import DesktopNewsletter from "../components/DesktopNewsletter";
import MobileSMBubbles from "../components/MobileSMBubbles";
import MobileNewsletter from "../components/MobileNewsletter";

import SocialLinks from "../api/SocialMediaLinks";

export default function Social() {
	return (
		<div>
			<div className="hidden lg:block">
				<DesktopSMBubbles links={SocialLinks} />
				<DesktopNewsletter />
			</div>
			<div className="lg:hidden">
				<MobileSMBubbles links={SocialLinks} />
				<MobileNewsletter />
			</div>
		</div>
	);
}
