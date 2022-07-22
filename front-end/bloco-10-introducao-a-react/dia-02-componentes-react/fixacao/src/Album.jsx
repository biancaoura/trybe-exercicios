import React, { Component } from 'react'

class Album extends Component {
  render() {
    const { image, title, releaseDate: { day, month, year }, others } = this.props.album;

    return (
      <section>
        <img src={ image } alt={ title } />
        <h2>{ title }</h2>
        <p>{ year }</p>
        <p>
          Lançamento:
          { `${ day }/${ month }/${ year }` }
        </p>
        <p>Gravadora: { others.recordCompany }</p>
        <p>Formatos: { others.formats }</p>
      </section>
    )
  }
}

export default Album;