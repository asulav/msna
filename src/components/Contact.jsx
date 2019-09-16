import React, { Component } from 'react'
import {Container, Divider, Header } from 'semantic-ui-react'

import ContactForm from './Form.jsx';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class Contact extends Component {
  state = {

  }

  handleChange = (e, { value }) => this.setState({ value })
  handleFormCick() {
    this.setState({
      showError: true
    })
  }

  render() {
    const { value } = this.state
    return (
        <Container>
          <Header textAlign='center'> Contact Us </Header>
          <Divider hidden/>
          <ContactForm />
      </Container>
    )
  }
}

export default Contact;