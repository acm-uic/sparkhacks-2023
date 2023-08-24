
import './layout.css'
import { Link, Outlet } from 'react-router-dom'
import sparkLogo from "../assets/images/sparkHacksLogo.png"
import { useState } from 'react'
import SocialLinks from "../api/SocialMediaLinks"

function getCurrentPage() {
  let path = window.location.pathname
  if (path == "/") return "Home"
  else {
    return path.charAt(1).toUpperCase() + path.slice(2)
  }
}

export default function Home(){
  const [mobileShow, setMobileShow] = useState(false)
  const [currentPage, setCurrentPage] = useState(getCurrentPage())
  return (
    <div>
      <div className={"h-10 pb-1 bg-primary-light"}></div>
      <nav className={"justify-between md:justify-start fixed block top-0 left-0 w-full flex gap-3 items-center align-center bg-primary-light z-50 animate-fade-in"}>
        <a href='https://sparkhacksatuic.com' className='flex items-center ml-2'>
          <img src={sparkLogo} className={"h-10 m-0 align-center box-content mr-2"} alt={"spark hacks logo"}/>
          <h5 className='whitespace-nowrap'><b>SparkHacks 2023</b></h5>
        </a>
        <svg onClick={() => setMobileShow(!mobileShow)} className="md:hidden w-8 h-8 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        <ul className={mobileShow ? "block absolute top-0 left-0 h-screen bg-primary-dark w-full flex flex-col text-4xl py-20 text-center justify-between animate-fade-in-imm" : "hidden md:flex gap-4"} onClick={() => mobileShow ? setMobileShow(!mobileShow) : () => {}}>
          <li><Link onClick={() => setCurrentPage("Home")} className={currentPage == "Home" ? "font-bold": ""} to="/">Home</Link></li>
          <li><Link onClick={() => setCurrentPage("Contact")} className={currentPage == "Contact" ? "font-bold": ""} to="/contact">Contact</Link></li>
          <li><Link onClick={() => setCurrentPage("Social")} className={currentPage == "Social" ? "font-bold": ""} to="/social">Social</Link></li>
          <li><Link onClick={() => setCurrentPage("Calendar")} className={currentPage == "Calendar" ? "font-bold": ""} to="/eventdetails">Calendar</Link></li>
          <li><Link onClick={() => setCurrentPage("About")} className={currentPage == "About" ? "font-bold": ""} to="/about">About</Link></li>
        </ul>
      </nav>
      <Outlet />
      <div className='bg-black'>
                <div className='space-y-5 mt-5 py-3 container mx-auto'>
                  <div className='flex flex-col md:flex-row justify-around space-y-5 md:space-y-0'>
                      <div className='text-center'>
                          <h4>Pages</h4>
                          <ul>
                              <li className={"hover:text-primary-light"}><Link to="/">Home</Link></li>
                              <li className={"hover:text-primary-light"}><Link to="/contact">RSVP</Link></li>
                              <li className={"hover:text-primary-light"}><Link to="/social">Social</Link></li>
                              <li className={"hover:text-primary-light"}><Link to="/eventdetails">Calendar</Link></li>
                              <li className={"hover:text-primary-light"}><Link to="/about">About</Link></li>
                          </ul>
                      </div>
                      <div className='text-center'>
                          <h4>Social</h4>

                          <ul>
                              <li className={"hover:text-primary-light"}><a href={SocialLinks.Instagram}>Instagram</a></li>
                              <li className={"hover:text-primary-light"}><a href={SocialLinks.Facebook}>Facebook</a></li>
                              <li className={"hover:text-primary-light"}><a href={SocialLinks.YouTube}>YouTube</a></li>
                              <li className={"hover:text-primary-light"}><a href={SocialLinks.Twitter}>Twitter</a></li>
                              <li className={"hover:text-primary-light"}><a href={SocialLinks.LinkedIn}>LinkedIn</a></li>

                          </ul>
                      </div>
                  </div>
                  <div className='text-center space-y-2'>
                      <p>Copyright © Association for Computing Machinery 2023</p>
                      <p>License is located on this sites <a href="https://github.com/acm-uic/sparkhacks-2023">Github Repo.</a>
                      </p>
                  </div>
                </div>
            </div>
    </div>
  )
}