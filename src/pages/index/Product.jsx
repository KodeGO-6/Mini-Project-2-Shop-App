import React from 'react'
import { useNavigate } from 'react-router-dom'
import useFetchData from '../../useFetchData'

export const Product = () => {
    const { data, loading, error } = useFetchData('https://fakestoreapi.com/products')
    const navigate = useNavigate()

    const productHandler = (productId) => {
        navigate(`/products/${productId}`)
    }

    const TruncateText = ({ text }) => {
        const truncateText = text.length > 20 ? text.slice(0, 30) + '...' : text;

        return truncateText
    }

  return (
    <>
    {data.map(product => (
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={product.id}>
        <div className="product-item bg-light mb-4">
            <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src={product.image} alt="" />
            <div className="product-action">
                <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fas fa-shopping-cart" />
                </a>
                <a className="btn btn-outline-dark btn-square" href="">
                    <i className="fas fa-heart" />
                </a>
            </div>
            </div>
            <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href="" onClick={() => productHandler(product.id)}>
                <TruncateText text={product.title} />
            </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
                <h5>$ {product.price}</h5>
                <h6 className="text-muted ml-2">
                <del>$ {product.price}</del>
                </h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
                <small className="fa fa-star text-primary mr-1" />
                <small className="fa fa-star text-primary mr-1" />
                <small className="fa fa-star text-primary mr-1" />
                <small className="fa fa-star text-primary mr-1" />
                <small className="fa fa-star text-primary mr-1" />
                <small>(99)</small>
            </div>
            </div>
        </div>
        </div>
        )).slice(0, 8)}
    </>
  )
}
