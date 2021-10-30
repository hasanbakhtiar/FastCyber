import React from 'react'

const CartItem = (props) => {
    return (
      
        <div className="card col-4">
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <p className="card-text">{props.price}$</p>
          <button  className="btn btn-primary">Add To Card</button>
        </div>
      </div>
        
    );
}

export default CartItem
