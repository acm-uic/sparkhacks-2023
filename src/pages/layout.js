import './layout.css'
import { Link, Outlet } from 'react-router-dom'

export default function Home(){
    return (
        <div>
            <div className={"h-16 mb-1"}></div>
            <nav className={"fixed block top-0 w-full py-7 bg-[#3E3B87] z-50"}>
                <ul className={""}>
                    <li className={"w-fit m-0 inline-block pl-4 pr-2"}><h5><b>SparkHacks 2023</b></h5></li>
                    <li className={"w-fit m-0 inline-block px-2"}><Link to="/"><b>Home</b></Link></li>
                    <li className={"w-fit m-0 inline-block px-2"}><Link to="/contact"><b>RSVP</b></Link></li>
                    <li className={"w-fit m-0 inline-block px-2"}><Link to="/social"><b>Social</b></Link></li>
                    <li className={"w-fit m-0 inline-block px-2"}><Link to="/eventdetails"><b>Calendar</b></Link></li>
                    <li className={"w-fit m-0 inline-block px-2"}><Link to="/about"><b>About</b></Link></li>
                </ul>
            </nav>
            <br />
            
            <Outlet />
        </div>
    )
}
