import React from 'react'
import ShoppingCartItem from './ShoppingCartItem';
import styled from 'styled-components';

const ShoppingCartContainer = styled.div`
border: 2px solid black;
padding: 10px;
background-color: #726993;
`;

const CartListContainer = styled.div`
display: grid;
gap: 4px;
`

export class ShoppingCart extends React.Component {

  getTotalValue = () => {
    let totalValue = 0

    for(let product of this.props.productsInCart){
      totalValue = totalValue + product.preco * product.quantidade
    }
    return totalValue
  }
  
  render(){
    return <ShoppingCartContainer>
      <h3>Carrinho: </h3>
      
      <CartListContainer>
        {this.props.productsInCart.map((product)=>{
            return <ShoppingCartItem cartItem={product} onRemoveProductFromCart={this.props.onRemoveProductFromCart}/>
        })}
        
      </CartListContainer>
      <p>Valor Total: R${this.getTotalValue()}</p>
    </ShoppingCartContainer>
  }
}

export default ShoppingCart




