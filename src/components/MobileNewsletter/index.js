import PrimaryButton from '../PrimaryButton'
export default function MobileNewsletter() {
  return (
    <div className='text-center space-y-3 mx-2'>
      <h1>Join Our Newsletter!</h1>
      <p>Want to get updates as fast as possible! Join our newsletter! We will send details about the event with sign up and RSVP forms as we get closer to the start date! We will also send insights into what types of events we are planning, and much more! Sign up to make sure you get the latest as soon as possible!</p>
      <div className='space-y-2'>
        <input type="text" placeholder="Email" />
        <PrimaryButton innerText="Submit" />
      </div>
    </div>
  )
}
