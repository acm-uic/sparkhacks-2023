import './layout.css'
import { Link, Outlet } from 'react-router-dom'

export default function Home(){
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
        </div>
    )
}
