import React from 'react'
import { Carousel } from './home/Carousel'
import { Featured } from './home/Featured'
import { Categories } from './home/Categories'
import { Offer } from './home/Offer'
import { FeaturedProducts } from './home/FeaturedProducts'

export const Home = () => {
  return (
    <>
      <Carousel />
      <Featured />
      <Categories />
      <FeaturedProducts />
      <Offer />
    </>
  )
}
