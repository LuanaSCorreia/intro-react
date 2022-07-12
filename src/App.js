import React, {Component} from 'react';
import imagem from './imagem/maca.jpeg';

class Me extends Component{
  state = {
   Nome: 'Luana',
   idade: 22,
   comida:'lasanha',
   Musica:['Malandro', 'Vacilão','Coração em Desalinho']
  }

render(){
return (
  <div>
  <h1>{this.state.Nome}</h1>
  <h2>{this.state.idade} </h2>
 <h3> {this.state.comida}</h3>
 <ul>
   <li>{this.state.Musica[0]}</li>
   <li>{this.state.Musica[1]}</li>
   <li>{this.state.Musica[2]}</li>
 </ul>
 <img src={imagem} alt='maca'/>
 </div>
)}}

 export default Me


// Adicione uma imagem da sua fruta favorita via import
