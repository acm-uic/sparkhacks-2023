export function FacebookSMBubble({link}) {
    return (
        <div>
            <button onClick={() => window.location.href = link}  className="relative bg-primary h-60 w-60 rounded-full border-8 border-primary-dark items-center justify-center inline-flex">
                <img className='w-2/4 h-2/4' src={require('../../assets/icons/facebook-icon.png')} alt="facebook.icon"/>
            </button>
        </div>
    );
}

export function InstagramSMBubble({link}) {
    console.log(link)
    return (
        <div>
            <button onClick={() => window.location.href = link} className="relative bg-primary h-60 w-60 rounded-full border-8 border-primary-dark items-center justify-center inline-flex">
                <img className='w-2/4 h-2/4' src={require('../../assets/icons/instagram-icon.png')} alt="instagram.icon"/>
            </button>
        </div>
    );
}

export function LinkedinSMBubble({link}) {
    return (
        <div>
            <button onClick={() => window.location.href = link} className="relative bg-primary h-60 w-60 rounded-full border-8 border-primary-dark items-center justify-center inline-flex">
                <img className='w-2/4 h-2/4' src={require('../../assets/icons/linkedin-icon.png')} alt="linkedin.icon"/>
            </button>
        </div>
    );
}

export function TwitterSMBubble({link}) {
    return (
        <div>
            <button onClick={() => window.location.href = link} className="relative bg-primary h-60 w-60 rounded-full border-8 border-primary-dark items-center justify-center inline-flex">
                <img className='w-2/4 h-2/4' src={require('../../assets/icons/twitter-icon.png')} alt="twitter.icon"/>
            </button>
        </div>
    );
}

export function YoutubeSMBubble({link}) {
    return (
        <div>
            <button onClick={() => window.location.href = link} className="relative bg-primary h-60 w-60 rounded-full border-8 border-primary-dark items-center justify-center inline-flex">
                <img className='w-2/4 h-2/4' src={require('../../assets/icons/youtube-icon.png')} alt="youtube.icon"/>
            </button>
        </div>
    );
}


