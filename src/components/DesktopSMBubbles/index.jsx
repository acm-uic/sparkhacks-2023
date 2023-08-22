import { FacebookSMBubble, InstagramSMBubble, LinkedinSMBubble, TwitterSMBubble, YoutubeSMBubble } from "../SocialMediaBubbles";

export default function DesktopSMBubbles({links}) {
    console.log(links)
    return(
        <div className="grid h-screen place-items-center">  
            <div className="relative items-center justify-center inline-flex w-7/12" >
                <div className="relative items-center justify-center inline-flex z-0">
                    <InstagramSMBubble link = {links.Instagram} />
                        <div className="relative items-center justify-center inline-flex w-5/12 z-10">
                            <LinkedinSMBubble link = {links.LinkedIn}/>
                            <div className="relative items-center justify-center inline-flex w-3/12 z-20">
                                <YoutubeSMBubble link = {links.YouTube}/>
                            </div>
                            <TwitterSMBubble link = {links.Twitter}/>
                        </div>
                    <FacebookSMBubble link = {links.Facebook}/>
                </div>
            </div>
        </div>
    );
}