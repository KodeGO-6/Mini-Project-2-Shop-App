import React from 'react'
import { Product } from './Product'
import { Breadcrumbs } from './Breadcrumbs'
import { Sidebar } from './Sidebar'
import { Sorting } from './Sorting'

export const Shop = () => {
  return (
    <>
      <Breadcrumbs />
      <div className='container-fluid'>
        <div className='row px-xl-5'>
          <Sidebar />
          <div className='col-lg-9 col-md-8'>
            <div className='row pb-3'>
              <Sorting />
              <Product />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
