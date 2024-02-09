import React from 'react'
import { Flex } from 'antd';
import './landing_page.css'
import Spline from '@splinetool/react-spline';
import Land_3d from '../land_3d/Land_3d';
import TimeLine from '../Timeline/Timeline';
import Resume_review from '../Resume_review/Resume_review';

const Landing_page = () => {
  return (
    <div className='main_container '>
      <Land_3d />
      <Resume_review />
      <TimeLine />

    </div>
  )
}

export default Landing_page