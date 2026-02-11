
import React from 'react'
import { motion as Motion } from 'framer-motion'
import ContactHome from "../component/ContactHome"
import WhyIts from "../component/WhyIts"
import ShouldKnow from '../component/ShouldKnow'
import Hero from '../component/Hero'
import heroImg from "../assets/eaeaea.png"
import Study from "../component/Study"
import ServicesSection from "../component/ServicesSection"
import BlogSection from '../component/BlogSection'
import ReleventSection2 from '../component/ReleventSection2'

import ReleventSection4 from '../component/ReleventSection4'

import Service from '../component/Service'
import Getready from '../component/Getready'
import Calculate from '../component/Calculate'
import FloatingWhatsApp from '../component/FloatingWhatsApp'
import ReleventSection3 from './ReleventSection3'
import FloatingMessenger from '../component/FloatingMessenger'


const Home = () => {
  
  return (
    <>
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <Motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Hero></Hero>
      </Motion.div>

      {/* Contact Section */}
      <Motion.div 
        style={{ backgroundImage: `url(${heroImg})` }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <ContactHome />
        </Motion.div>
        
        <Motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <WhyIts />
        </Motion.div>
        <Motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        ><Calculate></Calculate>
        </Motion.div>
        <Motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Service></Service>
        </Motion.div>

        <Motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Getready></Getready>
        </Motion.div>
        
        <Motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <ShouldKnow></ShouldKnow>
        </Motion.div>
        
        <Motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Study></Study>
        </Motion.div>
        
        <Motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <ServicesSection></ServicesSection>
        </Motion.div>
         <Motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <BlogSection></BlogSection>
        </Motion.div>

        <Motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <ReleventSection2></ReleventSection2>
        </Motion.div>
        <Motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <ReleventSection3></ReleventSection3>
        </Motion.div>
         <Motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <ReleventSection4></ReleventSection4>
        </Motion.div>
          {/* <Motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <ReleventSection5></ReleventSection5>
        </Motion.div> */}
      </Motion.div>
    </Motion.div>
    <FloatingMessenger page="worldwisesocial" className="bottom-24"></FloatingMessenger>
    <FloatingWhatsApp phone="+8801336485736" message="Hello! I would like to know more." />
    
    </>
  )
}

export default Home