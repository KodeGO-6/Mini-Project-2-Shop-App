import React from 'react'
import { Price } from './Sidebar/Price'
import { Color } from './Sidebar/Color'
import { Size } from './Sidebar/Size'

export const Sidebar = () => {
  return (
    <div className='col-lg-3 col-md-4'>
        <Price />
        <Color />
        <Size />
    </div>
  )
}
