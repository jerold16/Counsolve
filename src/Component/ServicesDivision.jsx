import React from 'react'
import { useParams } from 'react-router'
import TitleBanner from './TitleBanner'

const ServicesDivision = () => {
    let {service} =useParams()
  return (
    <div>
        <TitleBanner data={service}/>
    </div>
  )
}

export default ServicesDivision