import { Component } from "react";
import "./App.css";
import FinalPurchase from "./component/FinalPurchase";
import GarageCard from "./component/garageCard";
import ShopperCard from "./component/ShopperCard";



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
  return (
  <div>
      <h1>My Garage Sale</h1>;
      <GarageCard/>
      <ShopperCard/>
      <FinalPurchase/>
  </div>
  )
};
}

export default App;
