import { Component } from "react";
import "./App.css";
import data from "./data/productData"
import FinalPurchase from "./component/FinalPurchase";
import GarageCard from "./component/GarageCard";
import ShopperCard from "./component/ShopperCard";



class App extends Component {
  constructor(){
    super ()
    this.state = {
      garageProduct: data,
      lastName: " ",
      firstName: " ",
      email: " ",
      creditCard: [] ,
      zipCode: [],
    }
  }

  buyingComplete = () =>{
   const {lastName, firstName, email, creditCard, zipCode} = this.state;
  if(lastName !== " "|| firstName !== " "|| email !== ""){
    alert("Input is not valid")
  }if(creditCard < 16 ){
    alert("Credit card number is not valid")
  } if(zipCode < 5){
    alert("Zip code is not valid")
  } else{
    this.setState({
      
    })
  }
}

render (){
  let productDataArr = this.state.garageProduct.map((product) =>{
    return <GarageCard product={product}/>
  })
  return (
  <div>
      <h1>My Garage Sale</h1>;
        {productDataArr}
      <ShopperCard/>
      <FinalPurchase/>
  </div>
  )
};

}

export default App;
