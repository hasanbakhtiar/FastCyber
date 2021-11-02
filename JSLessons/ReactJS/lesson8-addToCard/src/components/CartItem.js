import React from 'react'
import { useCart } from 'react-use-cart';

const CartItem = (props) => {
  const {addItem} = useCart();
    return (
      
        <div className="card col-4">
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <p className="card-text">{props.price}$</p>
          <button onClick={()=>addItem(props.item)}  className="btn btn-primary">Add To Card</button>
        </div>
      </div>
        
    );
}

export default CartItem
