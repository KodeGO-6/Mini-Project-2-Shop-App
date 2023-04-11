import React from 'react'

export const Color = () => {
  return (
    <>
    <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Filter by color</span>
    </h5>
    <div className="bg-light p-4 mb-30">
        <form>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
            type="checkbox"
            className="custom-control-input"
            defaultChecked=""
            id="color-all"
            />
            <label className="custom-control-label" htmlFor="price-all">
            All Color
            </label>
            <span className="badge border font-weight-normal">1000</span>
        </div>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input type="checkbox" className="custom-control-input" id="color-1" />
            <label className="custom-control-label" htmlFor="color-1">
            Black
            </label>
            <span className="badge border font-weight-normal">150</span>
        </div>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input type="checkbox" className="custom-control-input" id="color-2" />
            <label className="custom-control-label" htmlFor="color-2">
            White
            </label>
            <span className="badge border font-weight-normal">295</span>
        </div>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input type="checkbox" className="custom-control-input" id="color-3" />
            <label className="custom-control-label" htmlFor="color-3">
            Red
            </label>
            <span className="badge border font-weight-normal">246</span>
        </div>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input type="checkbox" className="custom-control-input" id="color-4" />
            <label className="custom-control-label" htmlFor="color-4">
            Blue
            </label>
            <span className="badge border font-weight-normal">145</span>
        </div>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
            <input type="checkbox" className="custom-control-input" id="color-5" />
            <label className="custom-control-label" htmlFor="color-5">
            Green
            </label>
            <span className="badge border font-weight-normal">168</span>
        </div>
        </form>
    </div>
    </>
  )
}
