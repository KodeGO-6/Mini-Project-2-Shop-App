import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'
import { Link } from 'react-router-dom'
import { TrucateText } from './TrucateText'
import { ShopContext } from '../context/ShopContext'

export const SearchResult = ({token}) => {
    const { query, filteredItem,  category, filteredCategory } = useContext(SearchContext)
    const { addToCart, addToLikes } = useContext(ShopContext)

    const SearchResult = () => {
        return filteredItem.map(product => (
            <div className="col-lg-4 col-lg-3 col-md-4 col-sm-6 pb-1"  key={product.id}>
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product.image} alt="" />
                        <div className="product-action">
                            { token ? <Link className={'btn btn-outline-dark btn-square'} onClick={() => addToCart(product.id)}>
                                <i className="fas fa-shopping-cart" />
                            </Link> : '' }
                            { token ? <Link className="btn btn-outline-dark btn-square" onClick={() => addToLikes(product.id)}>
                                <i className="fas fa-heart" />
                            </Link> : '' }
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <Link 
                            className="h6 text-decoration-none text-truncate" 
                            to={`/products/${product.id}`}
                            style={{fontSize: '16px'}}>
                            <TrucateText text={product.title} />
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
        ))
    }

    



    const DisplayProduct = () => {
        if (query !== '') {
            return <SearchResult />
        }
    }

    return (
        <div className="container-fluid pt-5 pb-3">
            <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                <span className="bg-secondary pr-3">Best Results</span>
            </h2>
            <div className="row px-xl-5">
                <DisplayProduct />
            </div>
        </div>
      )
}
