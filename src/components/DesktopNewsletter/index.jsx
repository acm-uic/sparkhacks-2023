import PrimaryButton from "../PrimaryButton";

export default function DesktopNewsletter() {
  let email = ""
  function newslettersignup(email) {
    if (email != ""){
      fetch(`https://n8n.christianbingman.com/webhook/sparkhacks-newsletter?email=${email}`)
        .then((res) => res.json())
        .then(() => alert(`You have been signed up!`))
        .catch(() => alert('There was an error signing you up, please reach out to info@sparkhacksatuic.com'))
    }
  }
  return(
    <div className="grid h-screen bg-primary place-items-center">
      <div className="relative h-full w-full items-center justify-center inline-flex">
        {/* <div className="relative h-4/6 w-1/2 bg-primary-dark rounded-[2.813rem] bottom-10 right-10"/> */}
        <div className="absolute h-fit w-1/2 px-7 py-10 drop-shadow-[-90px_-60px_4px_rgba(0,0,0,0.5)] bg-secondary-light rounded-[2.813rem]"> 
          <h1> Join Our Newsletter!</h1>
          <p className="text-[#757575] py-2"> Want to get updates as fast as possible! Join our newsletter! We will send details about the event with sign up and RSVP forms as we get closer to the start date! We will also send insights into what types of events we are planning, and much more! Sign up to make sure you get the latest as soon as possible! </p>
          <div className="grid grid-flow-col w-full gap-x-2">                    
            <input type="text" onChange={evt => email = evt.target.value} placeholder="Email:" />
            <span onClick={() => newslettersignup(email)}><PrimaryButton innerText="Submit" /></span>
          </div>
        </div>    
      </div>
    </div>
  )
}
