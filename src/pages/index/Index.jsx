import React, { useEffect, useState } from 'react'
import { Carousel } from './Carousel'
import { Featured } from './Featured'
import { Categories } from './Categories'
import { Products } from './Products'
import { Offer } from './Offer'

export const Index = () => {
  return (
    <>
      <Carousel />
      <Featured />
      <Categories />
      <Products />
      <Offer />
    </>
  )
}
