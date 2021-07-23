import React from 'react';
import Filters from './components/Filters';
import Products from './components/Products';
import ProductsCards from './components/ProductsCards';
import styled from 'styled-components';
import product1 from './pictures/product1.jpg';
import product2 from './pictures/product2.jpg';
import product3 from './pictures/product3.jpg';
import product4 from './pictures/product4.jpg';
import product5 from './pictures/product5.jpg';
import product6 from './pictures/product6.jpg';
import product7 from './pictures/product7.jpg';
import product8 from './pictures/product8.jpg';
import ShoppingCart from './components/ShoppingCart';
import ShoppingCartItem from './components/ShoppingCartItem';

const AppContainer = styled.div`
display: flex;
flex-direction: column;
padding: 16px;
gap: 12px;
font-family: 'Roboto', sans-serif;
font-size: 1.2em;
font-weight: bolder;
color: #1E3E59;
`


const products = [

  {
    id: 1,
    nome:"Camiseta I Believe",
    preco: 89.90,
    img: {product1}
  },

  {
    id: 2,
    nome:"Camiseta Abduction Blue",
    preco: 79.90,
    imagem: {product2}
  },
  {
    id: 3,
    nome:"Camiseta Abduction Green",
    preco: 79.90,
    imagem: {product3}
  },
  {
    id: 4,
    nome:"Camiseta Abduction Unicorn",
    preco: 79.90,
    imagem: {product4}
  },
  
]

class App extends React.Component {
  state ={
  filtroMinimo: 0,
  filtroMaximo: 200,
  nomeFiltro: "",
  
  productsInCart: [

    {
     
    },

    {
    
   }
  ] 
 }

 
onChangeFiltroMinimo=(event)=>{
 this.setState({filtroMinimo: event.target.value})
}

onChangeFiltroMaximo=(event)=>{
 this.setState({filtroMaximo: event.target.value})
}

onChangeNomeFiltro=(event)=>{
 this.setState({nomeFiltro: event.target.value})
}

onAddProductToCart=(productId) => {
 const productInCart = this.state.productsInCart.find(product=> productId === product.id)

 if(productInCart){
   const newProductsInCart = this.state.productsInCart.map(product => {
     if(productId === product.id) {
       return {
         ...product,
         quantidade: product.quantidade + 1
       }
     }
     return product
   })
   this.setState({productsInCart: newProductsInCart})
   }else{
     const productToAdd = products.find(product => productId === product.id)

     const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantidade: 1}]

     this.setState ({productsInCart: newProductsInCart})

   }
}

onRemoveProductFromCart=(productId) => {
 const newProductsInCart = this.state.productsInCart.map((product) => {
   if(product.id === productId) {
     return {
       ...product,
       quantidade: product.quantidade - 1
     }
   }
   return product
 }).filter((product) => product.quantidade > 0)

 this.setState({productsInCart: newProductsInCart})
}

 render(){
 return (
   <AppContainer>
     <Filters
     filtroMinimo={this.state.filtroMinimo}
     filtroMaximo={this.state.filtroMaximo}
     nomeFiltro={this.state.nomeFiltro}
     onChangeFiltroMinimo= {this.onChangeFiltroMinimo}
     onChangeFiltroMaximo={this.onChangeFiltroMaximo}
     onChangeNomeFiltro= {this.onChangeNomeFiltro}
     />
     <Products 
     products={products}
     filtroMinimo={this.state.filtroMinimo}
     filtroMaximo={this.state.filtroMaximo}
     nomeFiltro={this.state.nomeFiltro}
     onAddProductToCart={this.onAddProductToCart}
     />
     <ShoppingCart
     productsInCart={this.state.productsInCart}
     onRemoveProductFromCart={this.onRemoveProductFromCart}
     
     
     />

   </AppContainer>
 );
}
}
export default App;