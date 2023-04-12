import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SearchContext } from '../context/SearchContext'
import { TrucateText } from './TrucateText'

export const CategoryResult = ({token}) => {
    const { category, filteredCategory } = useContext(SearchContext)

    const SortCategory = () => {
        return filteredCategory(category).map(product => (
            <div className="col-lg-4 col-lg-3 col-md-4 col-sm-6 pb-1"  key={product.id}>
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product.image} alt="" />
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
        if (category !== 'all') {
            return <SortCategory />
        }
    }
  return (
    <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
            <span className="bg-secondary pr-3">{category !== 'all' ? category.toUpperCase() : ''}</span>
        </h2>
        <div className="row px-xl-5">
            <DisplayProduct />
        </div>
    </div>
  )
}
