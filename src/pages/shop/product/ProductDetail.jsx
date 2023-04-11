import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { SocialMedia } from './SocialMedia'
import { Breadcrumbs } from './Breadcrumbs'
import { ShopContext } from '../../../context/ShopContext'
import useFetchProduct from './useFetchProduct'

export const ProductDetail = () => {
    const productId = useParams()
    const { data, loading } = useFetchProduct(productId.pid)
    const { cartItems, addToCart } = useContext(ShopContext)

  return (
    <>
    <Breadcrumbs />
    <div className='container-fluid pb-5'>
        <div className='row px-xl-5'>
            {loading && (
                <div><h1>Loading...</h1></div>
            )}
            <div className='col-lg-5 mb-30 product-img-wrap'>
                <img className='w-100 h-100 product-image' src={data.image} alt='image' /> 
            </div>
            <div className='col-lg-7 h-auto mb-30'>
                <div className='h-100 bg-ligh p-30'>
                    <h3>{data.title}</h3>
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
                    <h3 className='font-weight-semi-bold mb-4'>$ {data.price}</h3>
                    <p className='mb-4'>{data.description}</p>
                    <div className="d-flex align-items-center mb-4 pt-2">
                        <div className="input-group quantity mr-3" style={{width: '130px'}}>
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-minus disabled">
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                            <input type="text" className="form-control bg-secondary border-0 text-center" disabled value='1'/>
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-plus disabled">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <button className="btn btn-primary px-3 disabled"><i className="fa fa-shopping-cart mr-1"></i> Add To
                            Cart</button>
                    </div>
                    <SocialMedia />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
