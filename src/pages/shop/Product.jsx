import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useFetchData from '../../useFetchData'
import { ShopContext } from '../../context/ShopContext'

export const Product = () => {
    const { data, loading, error } = useFetchData('https://fakestoreapi.com/products')
    const { cartItems, addToCart } = useContext(ShopContext)
    const navigate = useNavigate()

    { loading && <div>Loading... </div> }
    { error && <div>Error: {error.message}</div> }

    const productHandler = (productId) => {
        alert(`/products/${productId}`)
        navigate(`/products/${productId}`)
    }

    const TruncateText = ({ text }) => {
        const truncateText = text.length > 20 ? text.slice(0, 30) + '...' : text;

        return truncateText
    }

  return (
    <>
    {data.map(product => (
        <div className="col-lg-4 col-md-6 col-sm-6 pb-1" key={product.id}>
        <div className="product-item bg-light mb-4">
            <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src={product.image} alt="" />
            <div className="product-action">
                <Link className="btn btn-outline-dark btn-square" onClick={() => addToCart(product.id)}>
                    <i className="fas fa-shopping-cart" />
                </Link>
                <Link className="btn btn-outline-dark btn-square" >
                    <i className="fas fa-heart" />
                </Link>
            </div>
            </div>
            <div className="text-center py-4">
            <Link 
                className="h6 text-decoration-none text-truncate" 
                to={`/products/${product.id}`}>
                <TruncateText text={product.title} />
            </Link>
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
        ))}
    </>
  )
}

