

export default function DesktopNewsletter() {
    return(
    <div className="grid h-screen bg-primary place-items-center">
        <div className="relative h-full w-full items-center justify-center inline-flex">
            <div className="relative h-4/6 w-1/2 bg-primary-dark rounded-[2.813rem] bottom-10 right-10"/>
            <div className="absolute h-4/6 w-1/2 pl-7 bg-secondary-light rounded-[2.813rem]"> 
                <h1 className="mt-14"> Join Our Newsletter!</h1>
                <p className="text-[#757575] w-5/6"> Want to get updates as fast as possible! Join our newsletter! We will send details about the event with sign up and RSVP forms as we get closer to the start date! We will also send insights into what types of events we are planning, and much more! Sign up to make sure you get the latest as soon as possible! </p>
                <input type="email" placeholder="Email:" className="mt-7 w-2/3 py-2 px-4 border-2 text-[#757575] border-[#AAAAAA] rounded-[2.813rem]"/>
                <button className="ml-3 bg-primary-light hover:bg-primary-dark py-2 w-1/4 text-white font-bold drop-shadow-lg rounded-[2.813rem]" > Submit </button>
            </div>    
        </div>
    </div>);  
} 