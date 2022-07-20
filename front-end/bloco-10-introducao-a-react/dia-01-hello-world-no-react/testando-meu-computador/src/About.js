import React, { Component } from 'react'

class About extends Component {
  render() {
    const skills = ['Git', 'HTML', 'CSS', 'JavaScript', 'React'];
    const jsxSkills = skills.map((skill) => <li>{ skill }</li>)

    return (
      <div>
        <h1>Bianca Oura</h1>
        <p>Estudante de desenvolvimento web</p>
      </div>
    )
  }
}

export default About;