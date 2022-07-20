import React, { Component } from 'react'

export class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composição de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composição de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];

    const renderContent = conteudos.map((el, index) => (
      <div key={index} className='card'>
        <h4>O conteúdo é: {el.conteudo}</h4>
        <p>Status: {el.status}</p>
        <p>Bloco: {el.bloco}</p>
      </div>
  ));

    return (
      <div className='content'>
        {renderContent}
      </div>
    )
  }
}

export default Content;