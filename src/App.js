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
import product7 from './pictures/product7.png';
import product8 from './pictures/product8.jpg';
import ShoppingCart from './components/ShoppingCart';
import ShoppingCartItem from './components/ShoppingCartItem';
import saturno from './pictures/saturno.png'

const AppContainer = styled.div`
display: flex;
flex-direction: column;
padding: 16px;
gap: 12px;
font-family: 'Roboto', sans-serif;
font-size: 1.2em;
font-weight: bolder;
color: black;
background-image: radial-gradient(circle at 35.55% 80.99%, #5B764F 0, #557753 3.33%, #4E7858 6.67%, #47795D 10%, #3F7963 13.33%, #387A69 16.67%, #317A6F 20%, #2A7A75 23.33%, #257A7A 26.67%, #207A80 30%, #1F7985 33.33%, #20798A 36.67%, #25788E 40%, #2C7792 43.33%, #347595 46.67%, #3D7497 50%, #467298 53.33%, #507199 56.67%, #596F99 60%, #626D98 63.33%, #6A6B96 66.67%, #726993 70%, #7A6690 73.33%, #80658C 76.67%, #866387 80%, #8C6182 83.33%, #90607D 86.67%, #935F77 90%, #965E71 93.33%, #985E6B 96.67%, #995E66 100%);
`
const Titulo = styled.h1`
display: flex;
justify-content: center;
` 
const Imagens = styled.img`
width: 30px;
`



const products = [

  {
    id: 1,
    nome:"Camiseta I Believe",
    preco: 50.9,
    imagem: product1
  },

  {
    id: 2,
    nome:"Camiseta Abduction Blue",
    preco: 70.9,
    imagem: product2
  },
  {
    id: 3,
    nome:"Camiseta Abduction Green",
    preco: 90.9,
    imagem: product3
  },
  {
    id: 4,
    nome:"Camiseta Abduction Unicorn",
    preco: 40.9,
    imagem: product4
  },
  {
    id: 5,
    nome:"Camiseta Abduction Black",
    preco: 60.9,
    imagem: product5
  },
  {
    id: 6,
    nome:"Camiseta Gamer in Space",
    preco: 40.9,
    imagem: product6
  },
  {
    id: 7,
    nome:"Camiseta Gay Abduction",
    preco: 90.9,
    imagem: product7
  },
  {
    id: 8,
    nome:"Camiseta Alien Abduction",
    preco: 80.9,
    imagem: product8
  },
]

class App extends React.Component {
  state ={
  filtroMinimo: 0,
  filtroMaximo: 100,
  nomeFiltro: "",
  
  productsInCart: [] 
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
        <Titulo> <strong> &#128640; Loja Espacial &#128640; </strong></Titulo>
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