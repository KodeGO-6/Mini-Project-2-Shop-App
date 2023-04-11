import React from 'react'

export const Size = () => {
  return (
    <>
    <h5 className="section-title position-relative text-uppercase mb-3">
        <span className="bg-secondary pr-3">Filter by size</span>
    </h5>
    <div className="bg-light p-4 mb-30">
        <form>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input
            type="checkbox"
            className="custom-control-input"
            defaultChecked=""
            id="size-all"
            />
            <label className="custom-control-label" htmlFor="size-all">
            All Size
            </label>
            <span className="badge border font-weight-normal">1000</span>
        </div>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input type="checkbox" className="custom-control-input" id="size-1" />
            <label className="custom-control-label" htmlFor="size-1">
            XS
            </label>
            <span className="badge border font-weight-normal">150</span>
        </div>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input type="checkbox" className="custom-control-input" id="size-2" />
            <label className="custom-control-label" htmlFor="size-2">
            S
            </label>
            <span className="badge border font-weight-normal">295</span>
        </div>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input type="checkbox" className="custom-control-input" id="size-3" />
            <label className="custom-control-label" htmlFor="size-3">
            M
            </label>
            <span className="badge border font-weight-normal">246</span>
        </div>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
            <input type="checkbox" className="custom-control-input" id="size-4" />
            <label className="custom-control-label" htmlFor="size-4">
            L
            </label>
            <span className="badge border font-weight-normal">145</span>
        </div>
        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
            <input type="checkbox" className="custom-control-input" id="size-5" />
            <label className="custom-control-label" htmlFor="size-5">
            XL
            </label>
            <span className="badge border font-weight-normal">168</span>
        </div>
        </form>
    </div>
    </>
  )
}
