import './layout.css'
import { Link, Outlet } from 'react-router-dom'
import sparkLogo from "../assets/images/sparkHacksLogo.png"

export default function Home(){
    return (
        <div>
            <div className={"h-10 mb-1"}></div>
            <nav className={"fixed block top-0 w-full bg-[#3E3B87] z-50"}>
                <ul className={"flex items-center"}>
                    <li ><img src={sparkLogo} className={"h-16 m-0 inline-block px-1 py-2 align-center box-content"} alt={"spark hacks logo"}/></li>
                    <li className={"w-fit h-fit m-0 inline-block pl-4 pr-2 align-center"}><h5><b>SparkHacks 2023</b></h5></li>
                    <li className={"w-fit h-fit m-0 inline-block px-2"}><Link to="/"><b>Home</b></Link></li>
                    <li className={"w-fit h-fit m-0 inline-block px-2"}><Link to="/contact"><b>RSVP</b></Link></li>
                    <li className={"w-fit h-fit m-0 inline-block px-2"}><Link to="/social"><b>Social</b></Link></li>
                    <li className={"w-fit h-fit m-0 inline-block px-2"}><Link to="/eventdetails"><b>Calendar</b></Link></li>
                    <li className={"w-fit h-fit m-0 inline-block px-2"}><Link to="/about"><b>About</b></Link></li>
                </ul>
            </nav>
            <br />
            
            <Outlet />
        </div>
    )
}
