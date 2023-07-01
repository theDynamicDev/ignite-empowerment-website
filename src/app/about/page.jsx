import React from 'react'
import Navbar from '../components/NavBar'
import TeamArea from './components/TeamArea'
import Layout from '../layout'
import Team from './components/Team'
const AboutPage = () => {
  return (
    <div className=" z-10">
      <TeamArea />
      <Team />
    </div>
  )
}

export default AboutPage
