import React from 'react';
import styled from 'styled-components';
import Filters from "./components/Filters";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import ProductsCards from "./components/ProductsCards";
import ShoppingCartItem from "./components/ShoppingCartItem"




const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;





const MotherDiv = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 15% 1fr 20%;
  column-gap: 0px;
  text-align: center;
  padding: 0px;
  border: none;
  overflow-x: auto;
  color: white
`

const ComponentDiv = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: none;
  padding: 16px 0;
  background-color: black
`

class App extends React.Component {
  state = {
    product: [{
      id: 0,
      name: "U.S.S. Discovery: NCC-1031",
      value: 349.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/228043_246x306.png",
      type: "ship",
      quantity: 0,
    },
    {
      id: 1,
      name: "USS Enterprise NCC-1701-D",
      value: 349.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/99306_246x306.png",
      type: "ship",
      quantity: 0,
    },
    {
      id: 2,
      name: "Romulan Warbird Special",
      value: 349.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/187059_246x306.png",
      type: "ship",
      quantity: 0,
    },
    {
      id: 3,
      name: "Cylon Heavy Raider",
      value: 239.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/228122_246x306.png",
      type: "ship",
      quantity: 0,
    },
    {
      id: 4,
      name: " Viper (Blood and Chrome)",
      value: 239.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/202940_246x306.png",
      type: "ship",
      quantity: 0,
    },
    {
      id: 5,
      name: "U.S.S. Orville — ECV-197",
      value: 299.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/223235_246x306.png",
      type: "ship",
      quantity: 0,
    },
    {
      id: 6,
      name: "Spocks Jellyfish",
      value: 139.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/179308_246x306.png",
      type: "ship",
      quantity: 0,
    },
    {
      id: 7,
      name: "Klingon Iks Negh'Var",
      value: 119.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/205901_246x306.png",
      type: "ship",
      quantity: 0,
    },
    {
      id: 8,
      name: "10º Doutor - DR. WHO",
      value: 109.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/23233_246x306.png",
      type: "figure",
      quantity: 0,
    },
    {
      id: 9,
      name: "Cyber-controlador - DR. WHO",
      value: 99.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/23213_246x306.png",
      type: "figure",
      quantity: 0,
    },
    {
      id: 10,
      name: "Guerreira Siluriana - DR. WHO",
      value: 89.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/23221_246x306.png",
      type: "figure",
      quantity: 0,
    },    {
      id: 11,
      name: "Davros - DR. WHO",
      value: 119.99,
      imageUrl: "https://img.assinaja.com/assets/tZ/003/img/23209_246x306.png",
      type: "figure",
      quantity: 0,
    },
    ],
    minFilterValue: "",
    maxFilterValue: "",
    textFilterValue: "",
    typeFilterValue: "",
  }

  addToCart = (id) => {
    const cartArray = this.state.productsArray.map((product) => {
      if (product.id === id) {
        const newQuantity = product.quantity + 1
        const newProduct = { ...product, quantity: newQuantity }
        return newProduct
      } else {
        return product
      }
    })
    this.setState({ productsArray: cartArray })
  }

  removeItem = (id) => {
    const cartArray = this.state.productsArray.map((product) => {
      if (product.id === id) {
        const newProduct = { ...product, quantity: 0}
        return newProduct
      } else {
        return product
      }
    })
    this.setState({ productsArray: cartArray })
  }

  subtractCartItem = (id) => {
    const cartArray = this.state.productsArray.map((product) => {
      if (product.id === id) {
        const newQuantity = product.quantity - 1
        const newProduct = { ...product, quantity: newQuantity }
        return newProduct
      } else {
        return product
      }
    })
    this.setState({ productsArray: cartArray })
  }

  // ---------------------------------------------------------//
  // Funções do FILTER //
  onChangeMin = (event) => {
    const newMinValue = event.target.value
    this.setState({ minFilterValue: newMinValue })
  }

  onChangeMax = (event) => {
    const newMaxValue = event.target.value
    this.setState({ maxFilterValue: newMaxValue })
  }

  onChangeText = (event) => {
    const newTextValue = event.target.value
    this.setState({ textFilterValue: newTextValue })
  }

  onChangeType = (event) => {
    const newTypeValue = event.target.value
    this.setState({ typeFilterValue: newTypeValue })
  }

  clearFilters = () => {
    this.setState({
      minFilterValue: "",
      maxFilterValue: "",
      textFilterValue: "",
      typeFilterValue: "",
    })
  }

  
  render() {
    let arrayFilter = (this.filterProductsArray(this.state.minFilterValue, this.state.maxFilterValue, this.state.textFilterValue, this.state.typeFilterValue))
    return (
      <MotherDiv>
            <Filters
            onChangeMin={this.onChangeMin}
            onChangeMax={this.onChangeMax}
            onChangeText={this.onChangeText}
            onChangeType={this.onChangeType}
            clearFilters={this.clearFilters}
            minValue={this.state.minFilterValue}
            maxValue={this.state.maxFilterValue}
            textValue={this.state.textFilterValue}
            typeValue={this.state.typeFilterValue}
           
          />
          <ProductsCards />
          <ShoppingCartItem />   
          <h2>Carrinho:</h2>
          <ShoppingCartItem />
         <Products addToCart={this.addToCart} propsArray={arrayFilter} />
         <ShoppingCart sumCartItem={this.props.sumCartItem} subtractCartItem={this.props.subtractCartItem}  removeItem={this.props.removeItem} />
        </MotherDiv>
    );
  }
}

export default App;