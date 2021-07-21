import React from 'react';
import styled from 'styled-components';
import Filters from "./Filters";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";





const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;





const products = [ 
{product: 'blusaum', 
price: 60}, 
{product: 'blusadois', 
price: 60},
{product: 'blusatres', 
price: 60},
{product: 'blusaquatro', 
price: 60},
{product: 'blusacinco', 
price: 60},
{product: 'blusaseis', 
preco: 60},
{product: 'blusasete', 
price: 60},
{product: 'blusaoito', 
price: 60},
{product: 'blusanove', 
price: 60},
{product: 'blusadez', 
price: 60},
]


class App extends React.Component {
    state = {
        minFilter: 100,
        maxFilter: 1000,
        nameFilter: 'Produto',
        productsInCart: [
          {
            id: 4,
            name: 'Produto 4',
            price: 10,
            photo: 'https://picsum.photos/200/200?a=4',
            quantity: 1
          },
          {
            id: 3,
            name: 'Produto 3',
            price: 30,
            photo: 'https://picsum.photos/200/200?a=3',
            quantity: 2
          }
        ]
      }









      render() {
        return (
          <AppContainer>
            <Filters
              minFilter={this.state.minFilter}
              maxFilter={this.state.maxFilter}
              nameFilter={this.state.nameFilter}
              onChangeMinFilter={this.onChangeMinFilter}            
              onChangeMaxFilter={this.onChangeMaxFilter}            
              onChangeNameFilter={this.onChangeNameFilter}                  
            />
            <Products 
              products={products}
              minFilter={this.state.minFilter}
              maxFilter={this.state.maxFilter}
              nameFilter={this.state.nameFilter}
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