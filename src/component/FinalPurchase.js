import { Component } from "react";


class FinalPurchase extends Component{
    constructor(){
        super()
    }

    render(){
        return(
        <div className="checkout=container">
         <div>
            <form>
                <label >Last Name: </label>
                <label>First Name: </label>
                <label>Email: </label>
                <label>Credit Card:  </label>
                <label>Zip Code: </label>
            </form>  
            <button onClick>Buy Now</button>
          </div>
   
      </div>
        )
    }
}



export default FinalPurchase