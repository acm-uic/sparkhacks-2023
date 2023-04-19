import {
  FacebookSMBubble,
  InstagramSMBubble,
  LinkedinSMBubble,
  TwitterSMBubble,
  YoutubeSMBubble,
} from "../SocialMediaBubbles";

export default function MobileSMBubbles({links}) {
  return (
    <div className="flex flex-col -space-y-16 ">
      <div className=" items-center justify-center inline-flex z-0">
        <InstagramSMBubble link = {links.Instagram} />
      </div>
      <div className=" items-center justify-center inline-flex z-10">
        <LinkedinSMBubble link = {links.LinkedIn} />
      </div>
      <div className=" items-center justify-center inline-flex z-20">
        <YoutubeSMBubble link = {links.YouTube} />
      </div>
      <div className=" items-center justify-center inline-flex z-30">
        <TwitterSMBubble link = {links.Twitter} />
      </div>
      <div className=" items-center justify-center inline-flex z-40">
        <FacebookSMBubble link = {links.Facebook}/>
      </div>
    </div>
  );
}
