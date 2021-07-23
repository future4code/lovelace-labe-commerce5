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
img {
    width: 50px;
    heigth:50px;
}
`

const Botao = styled.button`
border-radius: 15px;
`


export class ShoppingCartItem extends React.Component {
    render() {
        return <ItemContainer>
            
            <p>{this.props.cartItem.quantidade}</p>
            <p>{this.props.cartItem.nome}</p>
            <img src={this.props.cartItem.imagem}/>
          
            <Botao 
                onClick={() => this.props.onRemoveProductFromCart(this.props.cartItem.id)}>
                    Remover
                </Botao>                        
        </ItemContainer>
    }
}

export default ShoppingCartItem