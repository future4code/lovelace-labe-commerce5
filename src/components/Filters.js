import React from 'react'
import styled from 'styled-components';

const FiltersContainer = styled.div`
border: 2px solid black;
padding: 10px;
background-color: #F2F2F2;
// display: flex;
// justify-content: space-evenly
// align-items: center;
`;
const InputContainer = styled.label`
width: 100vw;
margin-bottom: 10px;
margin: 40px;
`

export class Filters extends React.Component {
  render(){
    return <FiltersContainer>
      <h3>Filtros</h3>
      
        <InputContainer>
          Valor mínimo:
          <input
           type="number"
           value={this.props.filtroMinimo}
           onChange={this.props.onChangeFiltroMinimo}
           />
        </InputContainer>
      
      
        <InputContainer>
          Valor máximo:
          <input
           type="number"
           value={this.props.filtroMaximo}
           onChange={this.props.onChangeFiltroMaximo}
           />
        </InputContainer>
      
      
        <InputContainer>
          Buscar por nome:
          <input
           type="text"
           value={this.props.nomeFiltro}
           onChange={this.props.onChangeNomeFiltro}
           />
        </InputContainer>
      
      </FiltersContainer>
  }
}
export default Filters;
