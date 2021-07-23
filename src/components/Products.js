import React from 'react'
import styled from 'styled-components';
import ProductsCards from './ProductsCards';

const ProductsContainer = styled.div`
border: 2px solid black;
background-color: #BFBFBF;
`;

const ProductsHeader = styled.div`
  padding:  4px 18px;
  display: flex;
  align-items:center;
  justify-content: space-between;
`
const ProductsGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 8px;
padding: 8px;
`

export class Products extends React.Component {

  state={
    sort: "decrescente"
  }


  getFilteredAndOrderedList = () =>{
    return this.props.products
        .filter((product) =>product.preco < this.props.filtroMaximo) 
        .filter((product) =>product.preco > this.props.filtroMinimo) 
        .filter((product) =>product.nome.includes(this.props.nomeFiltro)) 
        .sort((a,b)=>this.state.sort === "crescente" ? a.preco  -  b.preco : b.preco - a.preco) 
  }

  onChangeSort =(event) => {
    this.setState({sort: event.target.value})
  }

  render(){
    const filteredAndOrderedList = this.getFilteredAndOrderedList()
    return <ProductsContainer>
      <ProductsHeader>
      <p>Nosso estoque de Camisetas: {filteredAndOrderedList.length}</p>
        <label>
          Ordem:
          <select value={this.state.sort} onChange={this.onChangeSort}>
            <option value={"crescente"}>Crescente</option>
            <option value={"decrescente"}>Decrescente</option>
          </select>
        </label>
      </ProductsHeader>
      <ProductsGrid>
        {filteredAndOrderedList.map((product)=>{
          return <ProductsCards
           product = {product} 
           onAddProductToCart={this.props.onAddProductToCart}
           />
           
        })}

      </ProductsGrid>
      
    </ProductsContainer>
  }
}
export default Products