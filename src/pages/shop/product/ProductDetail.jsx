import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { SocialMedia } from './SocialMedia'
import { AddToCart } from './AddToCart'
import useFetchData from '../../../useFetchData'
import { Breadcrumbs } from './Breadcrumbs'

export const ProductDetail = () => {
    const productId = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios({
            url: `https://fakestoreapi.com/products/${productId.pid}`,
            method: 'GET'
        }).then(res => {
            setProduct(res.data);
            setLoading(false)
        }).catch(err => {
            setError(err)
            setLoading(false)
        })
    }, [productId.pid])

    { loading && <div>Loading... </div> }
    { error && <div>Error: {error.message}</div> }

    console.log(product)
  return (
    <>
    <Breadcrumbs />
    <div className='container-fluid pb-5'>
        <div className='row px-xl-5'>
            <div className='col-lg-5 mb-30>'>
                <img className='w-100 h-100' src={product.image} alt='image' /> 
            </div>
            <div className='col-lg-7 h-auto mb-30'>
                <div className='h-100 bg-ligh p-30'>
                    <h3>{product.title}</h3>
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
                    <h3 className='font-weight-semi-bold mb-4'>$ {product.price}</h3>
                    <p className='mb-4'>{product.description}</p>
                    <AddToCart />
                    <SocialMedia />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
