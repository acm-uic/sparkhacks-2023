import PrimaryButton from '../PrimaryButton'

export default function MobileNewsletter() {
  let email = ""
  function newslettersignup(email) {
    if (email != ""){
      fetch(`https://n8n.christianbingman.com/webhook/sparkhacks-newsletter?email=${email}`)
        .then((res) => res.json())
        .then(() => alert(`You have been signed up!`))
        .catch(() => alert('There was an error signing you up, please reach out to info@sparkhacksatuic.com'))
    }
  }
  return (
    <div className='text-center space-y-3 mx-2'>
      <h1>Join Our Newsletter!</h1>
      <p>Want to get updates as fast as possible! Join our newsletter! We will send details about the event with sign up and RSVP forms as we get closer to the start date! We will also send insights into what types of events we are planning, and much more! Sign up to make sure you get the latest as soon as possible!</p>
      <div className='space-y-2'>
        <input type="text" onChange={evt => email = evt.target.value} placeholder="Email:" />
        <span onClick={() => newslettersignup(email)}><PrimaryButton innerText="Submit" /></span>
      </div>
    </div>
  )
}
