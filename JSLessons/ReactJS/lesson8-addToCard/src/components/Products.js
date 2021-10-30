import React from 'react';
import CartItem from './CartItem';
import data from './data';

const Products = () => {
    return (
        <div className="container">
            <h1 className="text-center mt-3">All Items</h1>
            <div className="row">
                {data.productData.map((item,index)=>{
                    return(
                        <CartItem 
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                        item={item}
                        key={index}
                        
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Products
