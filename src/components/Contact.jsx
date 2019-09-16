import React, { Component } from 'react'
import { Form, Segment, Message, Input, Select, TextArea, Checkbox, Button } from 'semantic-ui-react'

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
        <Segment color = 'teal'>
         <Form>
            <Form.Group widths='equal'>
              <Form.Field
                control={Input}
                label='First name'
                placeholder='First name'
              />
              <Form.Field
                control={Input}
                label='Last name'
                placeholder='Last name'
              />
            </Form.Group>
           <Form.Field
              control={TextArea}
              label='Reason'
              placeholder='Tell us more about you...'
            />
            <Form.Field
              control={Checkbox}
              label='I agree to the Terms and Conditions'
            />
            <Button type='submit' onClick = {(e) => this.handleFormCick()}>Submit</Button>
            </Form>
            <Message
            error
            hidden = {!this.state.showError}
            header='405 Method Not Implemented'
            list={[
              'I am too lazy to implement this.',
              'Blame the Vice President not me'
            ]}/>
        </Segment>
    )
  }
}

export default Contact;