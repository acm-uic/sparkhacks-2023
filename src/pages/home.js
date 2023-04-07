import './home.css'
import SponsorsSection from '../components/SponsorsSection'
import HomeHeader from '../components/HomeHeader/'
import StaggeredSections from '../components/StaggeredSections/staggeredSections.js'
import {WhatDoIGetOutOfThis, FAQs} from '../content/StaggeredTextComponents.js'
import MemberOrganizationSection from '../components/MemberOrganizationsSection'
import Events from "../components/Events";
import DummyEvents from "../api/DummyEvents";

export default function Home(){
    return (<div className='text-center'>
        <HomeHeader />
        <div className='container mx-auto space-y-10'>
          <Events events={DummyEvents} />
          <h1>What Do I Get Out of This?</h1>
          <StaggeredSections sections={WhatDoIGetOutOfThis} />
          <SponsorsSection />
          <h1>FAQs</h1>
          <StaggeredSections sections={FAQs} />
          <MemberOrganizationSection />
        </div>
        
    </div>)
}
