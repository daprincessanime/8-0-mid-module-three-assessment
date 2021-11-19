import { Component } from "react";
import "./App.css";
import GarageCard from "./component/garageCard";

class App extends Component {
  constructor(){
    super ()
    this.state = {
      garageProduct: date.productData

    }
  }

  buyingComplete = () =>
  if(lastName !== " "|| firstName !== " "|| email !== ""){
    alert("Input is not valid")
  }if(creditCard < 16 ){
    alert("Credit card number is not valid")
  } if(zipCode < 5){
    alert("Zip code is not valid")
  } else
{

}
render (){
  return 
  <div>
      <h1>My Garage Sale</h1>;
      
      <div className="shopping-container">
          <ul>
            <li ></li>
          </ul>
          <div>Subtotal: ${}</div>
          <div>Tax: $ </div>
          <div>Total Update:${}</div>
      </div>
      <div className="checkout=container">
        <label>
          <div>
            <label  >Last Name: </label>
            <label>First Name: </label>
            <label>Email: </label>
            <label>Credit Card:  </label>
            <label>Zip Code: </label>
            <button onClick>Buy Now</button>
          </div>
        </label>
      </div>
  </div>
};
}

export default App;
