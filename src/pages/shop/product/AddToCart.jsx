import React from 'react'

export const AddToCart = () => {
  return (
    <div className="d-flex align-items-center mb-4 pt-2">
        <div className="input-group quantity mr-3" style={{width: '130px'}}>
            <div className="input-group-btn">
                <button className="btn btn-primary btn-minus">
                    <i className="fa fa-minus"></i>
                </button>
            </div>
            <input type="text" className="form-control bg-secondary border-0 text-center" value="1" />
            <div className="input-group-btn">
                <button className="btn btn-primary btn-plus">
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </div>
        <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> Add To
            Cart</button>
    </div>
  )
}
