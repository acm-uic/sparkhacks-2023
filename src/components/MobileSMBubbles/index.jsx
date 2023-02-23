import {
  FacebookSMBubble,
  InstagramSMBubble,
  LinkedinSMBubble,
  TwitterSMBubble,
  YoutubeSMBubble,
} from "../SocialMediaBubbles";

export default function MobileSMBubbles() {
  return (
    <div className="flex flex-col -space-y-16 ">
      <div className=" items-center justify-center inline-flex z-0">
        <InstagramSMBubble />
      </div>
      <div className=" items-center justify-center inline-flex z-10">
        <LinkedinSMBubble />
      </div>
      <div className=" items-center justify-center inline-flex z-20">
        <YoutubeSMBubble />
      </div>
      <div className=" items-center justify-center inline-flex z-30">
        <TwitterSMBubble />
      </div>
      <div className=" items-center justify-center inline-flex z-40">
        <FacebookSMBubble />
      </div>
    </div>
  );
}
