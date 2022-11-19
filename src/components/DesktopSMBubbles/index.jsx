import { FacebookSMBubble, InstagramSMBubble, LinkedinSMBubble, TwitterSMBubble, YoutubeSMBubble } from "../SocialMediaBubbles";

export default function DesktopSMBubbles() {
    return( 
        <div className="grid h-screen place-items-center w-screen">  
            <div className="relative items-center justify-center inline-flex w-7/12" >
                <div className="relative items-center justify-center inline-flex z-0">
                    <InstagramSMBubble/>
                        <div className="relative items-center justify-center inline-flex w-5/12 z-10">
                            <LinkedinSMBubble/>
                            <div className="relative items-center justify-center inline-flex w-3/12 z-20">
                                <YoutubeSMBubble/>
                            </div>
                            <TwitterSMBubble/>
                        </div>
                    <FacebookSMBubble/>
                </div>
            </div>
        </div>
    );
}