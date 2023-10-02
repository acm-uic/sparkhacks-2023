import { useState } from 'react'
import PrimaryButton from '../PrimaryButton'
import { Alert } from '@mui/material'
export default function MobileNewsletter() {
  const[showAlert,handleShowAlert] = useState(false);
  let email = ""
  function newslettersignup() {
    handleShowAlert(true)
    // alert("Our newsletter sign ups has closed for this event! We hope to see you next year!")
  }
  return (
    <div className='text-center space-y-3 mx-2'>
    {showAlert ? <>
      <Alert
    severity='info'
    className="my-3"
    onClose={()=>{handleShowAlert(false)}}>
      Our newsletter sign ups has closed for this event! We hope to see you next year!
    </Alert>
    </> :<></>}
      <h1>Join Our Newsletter!</h1>
      <p>Want to get updates as fast as possible! Join our newsletter! We will send details about the event with sign up and RSVP forms as we get closer to the start date! We will also send insights into what types of events we are planning, and much more! Sign up to make sure you get the latest as soon as possible!</p>
      <div className='space-y-2'>
        <input type="text" onChange={evt => email = evt.target.value} placeholder="Email:" />
        <span onClick={() => newslettersignup(email)}><PrimaryButton innerText="Submit" /></span>
      </div>
    </div>
  )
}
