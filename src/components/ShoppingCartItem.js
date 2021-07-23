import React from 'react'
import styled from 'styled-components';

const ItemContainer = styled.div`
display: grid;
grid-auto-flow: column;
gap: 5px;
align-items: center;
p {
    margin: 10px;
}
`

export class ShoppingCartItem extends React.Component {
    render() {
        return <ItemContainer>
            <p>{this.props.cartItem.quantidade}</p>
            <p>{this.props.cartItem.nome}</p>
            <p>Produto</p>
            <button 
                onClick={() => this.props.onRemoveProductFromCart(this.props.cartItem.id)}>
                    Remover
                </button>                        
        </ItemContainer>
    }
}

export default ShoppingCartItem