import { Component } from "react";


class GarageCard extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            let{ name, price, description,img}= this.props.productData
        <div className="product-container">
          <div id="products">
             <div>Name:{name}</div>
             <div>Price:${price}</div>
             <div>description{description}</div>
             <img src={img} alt="Product Image"/>
             <button onClick>Add To Cart</button>
        </div>
      );      
    }
}


export default GarageCard