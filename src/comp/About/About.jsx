import React, { useState } from 'react'
import './About.css'
import gifvideo from '../../assets/652ca55bbf55b01d962f9cfd_2 Brand Product & Positioning - Front.png'
import aboutbg from '../../assets/about-bg.png'
export default function About() {
    const [tabSwitch , setTabSwitch] =  useState(1);
    const handlechangetab = (tabNumber)=>{
        setTabSwitch(tabNumber);
        
    }
    console.log(tabSwitch);
  return (
   <div className='main-con' id="about">
    <h1 className='about-heading'>
    Tap into a central nervous system for all your content
    </h1>
     <div className='about-conatiner'>
        <div className="about-main">
            <div className="tabs-conatiner">
                <div className="tab1 tab"  onClick={()=>handlechangetab(1)}>
                    <h1>hello</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, id cumque rerum, iusto doloremque, illum corrupti repudiandae maxime nostrum autem eum tempore? Tenetur itaque doloribus optio cumque, dolore sunt odio.</p>
                </div>
                <div className="tab2 tab"onClick={()=>handlechangetab(2)}>
                <h1>hello</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, id cumque rerum, iusto doloremque, illum corrupti repudiandae maxime nostrum autem eum tempore? Tenetur itaque doloribus optio cumque, dolore sunt odio.</p>
                </div>
                <div className="tab3 tab" onClick={()=>handlechangetab(3)}>
                <h1>hello</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, id cumque rerum, iusto doloremque, illum corrupti repudiandae maxime nostrum autem eum tempore? Tenetur itaque doloribus optio cumque, dolore sunt odio.</p>
                </div>
            </div>
            <div className='gif-conatiner'>
                
                { tabSwitch == 1 ? (<img src={gifvideo} className='gif gif-one'/>) : (tabSwitch === 2 ? (<img src={gifvideo} className='gif gif-two'/>): (<img src={gifvideo} className='gif gif-three'/>))}
            </div>
        </div>
    </div>
   </div>
  )
}
