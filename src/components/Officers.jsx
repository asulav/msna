import React from 'react';
import { Card, Icon, Image, Header, Divider, Button, List, Segment, Grid, Form, Input, Select, Radio, TextArea, Checkbox, Message } from 'semantic-ui-react'
import ContactForm from './Form.jsx'
import '../App.css';

import Anuska from '../static/Anuska.jpeg';
import Ashma from '../static/Ashma.jpeg';
import Haack from '../static/Haack.jpg';
import Pramila from '../static/Pramila.jpg';
import Rijan from '../static/Rijan.jpg';
import Sadikshaya from '../static/Sadikshya.jpg';
import Sarina from '../static/Sarina.jpeg';
import Sumit from '../static/Sumit.jpeg';

const OfficerLists = {
	President	: {title: 'President', name: 'Sarina Upreti', image: Sarina, next: 'VicePresident', previous: 'FacultyAdvisor'},
	VicePresident: {title: 'Vice President', name: 'Anuska Acharya', image: Anuska, next: 'Treasurer', previous: 'President'},
	Treasurer	: {title: 'Treasurer', name: 'Sadikshaya Adhikari', image: Sadikshaya, next: 'Secratary', previous: 'VicePresident'},
	Secratary: {title: 'Secratary', name: 'Ashma Pradhan', image: Ashma,  next: 'CommunityServiceManager', previous: 'Treasurer' },
	CommunityServiceManager: {title: 'Community Service Manager', name: 'Pramila Murray', image: Pramila, next: 'EventManager', previous: 'Secratary'},
	EventManager: {title: 'Event Manager', name: 'Rijan Timsina', image: Rijan, next: 'Advisor', previous: 'CommunityServiceManager'  },
	Advisor: {title: 'Advisor', name: 'Sumit Shrestha', image: Sumit, next: 'FacultyAdvisor', previous: 'EventManager'   },
	FacultyAdvisor: {title: 'Faculty Advisor', name: 'Dr. Barry Haack', image: Haack, next: 'President', previous: 'Advisor' },
}



const OfficersCard = (props) => {
	const imgSrc = props.officer.image;
	const name = props.officer.name;
	const title = props.officer.title;
	const joinDate = 2019;
	const description = 'Place Holder Description';

	return (
			<Card className = 'divCard' >
			    <Image src={imgSrc} size = 'medium'/>
			    <Card.Content>
			      <Card.Header as ='h2'>{name}</Card.Header>
			      <Card.Meta>
			      	<Card.Header><Header>{title}</Header></Card.Header>
			        <span className='date'>Joined in {joinDate}</span>
			      </Card.Meta>
			      <Card.Description>
			       {description}
			      </Card.Description>
			    </Card.Content>
			    <Card.Content extra>
			        <a href = 'http://www.facebook.com'><Icon name='facebook'/></a>
			        <a href = 'http://www.twitter.com'><Icon name='twitter' /></a>
			        <a href = 'http://www.instagram.com'><Icon name='instagram' /></a>
			        <a href = 'http://www.gmail.com'><Icon name='mail' /></a>
			    </Card.Content>
	  		</Card>
 )};

class Officers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOfficer: 'President',
      showError: false
    };
  };

  handleitemClick(item) {
    this.setState({
      activeOfficer: item
    })
  };

  handleFormCick(){
  	this.setState({
  		showError: true
  	})
  }

  render() {
  	let officer = OfficerLists[this.state.activeOfficer];
  	let next = OfficerLists[this.state.activeOfficer].next;
  	let previous = OfficerLists[this.state.activeOfficer].previous;
  	const Options = [
					  {key: 'm', text: 'Male', value: 'm'},
					  {key: 'f', text: 'Female', value: 'f'}
	];
    return(
    	<div>
	    	<a href = 'http://www.gmu.edu'>
		      		<Segment inverted style = {{'background-color': '#066407'}}>
	    				<Header as='h2' textAlign='center' style = {{'color': '#ffbf00'}}> Apply to be Part of Our Team <Icon name = 'star'/></Header>
					</Segment>
			</a>
			<Divider hidden/>
	    	<Grid columns={2}>
	    		 <Grid.Column>
					<Divider hidden/>
		    		<Card.Group centered>
						<Button size = 'mini' icon='left arrow' color = 'green' onClick = {(e) => this.handleitemClick(previous)}/>
							<OfficersCard officer = {officer}/>
						<Button size = 'mini' icon='right arrow' color = 'green' onClick = {(e) => this.handleitemClick(next)}/>
			        </Card.Group>
		      	</Grid.Column>
			      <Grid.Column>
			      		<ContactForm />
		      			<Divider hidden/>
		      </Grid.Column>
		    </Grid>
		    <Divider hidden/>
	    </div>
  )};
};

export default Officers;
