import './home.css'
import SponsorsSection from '../components/SponsorsSection'
import HomeHeader from '../components/HomeHeader/'
import StaggeredSections from '../components/StaggeredSections/staggeredSections.js'
import {WhatDoIGetOutOfThis, FAQs} from '../content/StaggeredTextComponents.js'

export default function Home(){
    return (<div className='text-center space-y-10'>
        <HomeHeader />
        <div className='container mx-auto'>
          <h1>What Do I Get Out of This?</h1>
          <StaggeredSections sections={WhatDoIGetOutOfThis} />
          <SponsorsSection />
          <h1>FAQs</h1>
          <StaggeredSections sections={FAQs} />
        </div>
        
    </div>)
}
