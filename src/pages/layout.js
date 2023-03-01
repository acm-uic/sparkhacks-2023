import './layout.css'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/eventdetails">Event Details</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/social">Social</Link></li>
                </ul>
            </nav>
            <br />

            <Outlet />

            <div className='bg-[#000] p-2'>
                <div className='flex flex-wrap p-2 '>
                    <div className=' text-center w-1/2'>
                        <h4>Pages</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/contact">RSVP</Link></li>
                            <li><Link to="/social">Social</Link></li>
                            <li><Link to="/eventdetails">Calendar</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                    <div className='text-center w-1/2'>
                        <h4>Social</h4>
                        <ul>
                            <li><Link to="/">Instagram</Link></li>
                            <li><Link to="/about">Facebook</Link></li>
                            <li><Link to="/about">Youtube</Link></li>
                            <li><Link to="/about">Twitter</Link></li>
                            <li><Link to="/about">LinkedIn</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='text-center'>
                    <p className='text-[12px]'>Copyright © Association for Computing Machinery 2023</p>
                    <p className='text-[12px]'>License is located on this sites
                        <a href="https://github.com/acm-uic/sparkhacks-2023">Github Repo.</a>
                    </p>
                </div>
            </div>
        </div>
    )
}
