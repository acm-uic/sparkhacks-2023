import sparklogo from '../../assets/images/sparkHacksLogo.png'
import PrimaryButton from '../PrimaryButton'

export default function HomeHeader(){
  return (
    <div className="w-full h-screen bg-primary-light relative flex text-center items-center justify-center ">
      <img src={sparklogo} alt={"Sparkhacks logo"} className="opacity-50 h-2/3 animate-fade-in-slow-fade-out"/>
      <div className="absolute container delay-1000 animate-fade-in">
        <h1 className="md:text-8xl">SparkHacks 2023</h1>
        <h2>April 7-8th</h2>
        <div className="flex items-center justify-center flex-wrap md:flex-nowrap my-5 gap-5 mx-5">
          <a className="flex-1" aria-disabled={"true"}><PrimaryButton innerText="RSVP" color={"disable"}/></a>
          <a className='flex-1' aria-disabled={"true"}><PrimaryButton innerText="Newsletter" color={"disable"}/></a>
        </div>
      </div>
    
    </div>
  )
}
