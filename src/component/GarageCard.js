import { Component } from "react";


class GarageCard extends Component {
    constructor(){
        super();
    }
    
    render(){
     let { price, name, description, img} = this.props.product
        
     return(
           
          <div className="product-container">
            <div id="products">
               <div>Name:{name}</div>
               <div>Price:${price}</div>
               <div>description{description}</div>
               <img src={img} alt="Product Image"/>
              <button>Add To Cart</button>
            </div>
          </div>  
      );      
    }
}


export default GarageCard