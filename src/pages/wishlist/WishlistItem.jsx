import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

export const WishlistItem = (props) => {
    const { addToLikes } = useContext(ShopContext)
  return (
    <>
    <tr key={props.data.id}>
        <td className="align-middle"><img src={props.data.image} alt='#' style={{width: '50px'}}/></td>
        <td className="align-middle">$ {props.data.price}</td>
        <td className="align-middle">
            <button className="btn btn-sm btn-danger" onClick={() => addToLikes(props.data.id)}><i className="fa fa-times"></i></button>
        </td>
    </tr>
    </>
  )
}
