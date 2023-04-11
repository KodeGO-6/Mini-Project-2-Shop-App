import React from 'react'
import { SocialMedia } from './SocialMedia'
import { AddToCart } from './AddToCart'

export const ProductDetail = () => {
  return (
    <div className='container-fluid pb-5'>
        <div className='row px-xl-5'>
            <div className='col-lg-5 mb-30>'>
                <img className='w-100 h-100' src='/src/assets/img/product-1.jpg' alt='image' /> 
            </div>
            <div className='col-lg-7 h-auto mb-30'>
                <div className='h-100 bg-ligh p-30'>
                    <h3>Product name goes here</h3>
                    <div className='d-flex mb-3'>
                        <div className='text-primary mr-2'>
                            <small className='fas fa-star'></small>
                            <small className='fas fa-star'></small>
                            <small className='fas fa-star'></small>
                            <small className='fas fa-star'></small>
                            <small className='fas fa-star-half-alt'></small>
                        </div>
                        <small className='pt-1'>(99 Reviews)</small>
                    </div>
                    <h3 className='font-weight-semi-bold mb-4'>$150.00</h3>
                    <p className='mb-4'>Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                        clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                        Nonumy</p>
                    <AddToCart />
                    <SocialMedia />
                </div>
            </div>
        </div>
    </div>
  )
}
