import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

export const CartItem = (props) => {
    const { cartItems, addToCart, removeFromCart, updateCartItemCount  } = useContext(ShopContext)

  return (
    <>
    <tr key={props.data.id}>
        <td className="align-middle"><img src={props.data.image} alt='#' style={{width: '50px'}}/></td>
        <td className="align-middle">$ {props.data.price}</td>
        <td className="align-middle">
            <div className='input-group quantity mx-auto' style={{width: '100px'}}>
                <div className="input-group-btn">
                    <button 
                        className="btn btn-sm btn-primary btn-minus"
                        onClick={() => removeFromCart(props.data.id)}>
                        <i className='fa fa-minus'></i>
                    </button>
                </div>
                <input 
                    type='text' 
                    className='form-control-sm bg-secondary border-0 text-center' 
                    value={cartItems[props.data.id]}
                    onChange={(e) => updateCartItemCount(Number(e.target.value), props.data.id)} />
                <div className="input-group-btn">
                    <button 
                        className="btn btn-sm btn-primary btn-plus"
                        onClick={() => addToCart(props.data.id)}>
                        <i className='fa fa-plus'></i>
                    </button>
                </div>
            </div>
        </td>
        <td className="align-middle">
            <button className="btn btn-sm btn-danger"><i className="fa fa-times"></i></button>
        </td>
    </tr>
    </>
  )
}
