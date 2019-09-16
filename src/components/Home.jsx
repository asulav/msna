import React from 'react';
import { Image, Grid, Header, Container, Divider } from 'semantic-ui-react';
import cover from '../static/cover.png';
import MasonLogo from '../static/MasonLogo.jpg'
import Namaste from "../static/CustomIcons/namaste.ico";
import '../App.css';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      container: ''
    };
  };

  render() {
    return(
        <div>
        	<Grid.Row>
        		<Grid columns={5}>
        			<Grid.Column>
        			</Grid.Column>
        			<Grid.Column>
        			</Grid.Column>
        			<Grid.Column>
					    <Image.Group size='medium'>
							    <Image src={MasonLogo}  verticalAlign='middle' />
							    <Image src={cover}  verticalAlign='middle' />
						</Image.Group>	
					</Grid.Column>
					<Grid.Column>
        			</Grid.Column>
        			<Grid.Column>
        			</Grid.Column>

			   </Grid>
	        </Grid.Row>
	        <Divider hidden/>
	        <Grid.Row>
	          <Container text textAlign = 'center'>
		          <p className = 'textblock' style={{'fontFamily': 'fantasy', 'fontSize': '150%'}}>
		            The Nepalese Students Association is a social 
		            and cultural organization that was established 
		            to unite patriots who are of Nepali origin or 
		            have interest in Nepalese culture. 
		            The main purpose of NSA is to promote 
		            and raise awareness about Nepalese language, 
		            literature, cultural and arts through various 
		            activities.
		          </p>
	          </Container>
	        </Grid.Row>
	        <Divider hidden/>
	        <Grid.Row>
	        <div>
	          <Header as='h2' icon textAlign='center'>
	            <Image src = {Namaste} style = {{'backgroundColor':'#56C6AC'}}size = 'large' centered/>
	            <Header.Content style = {{'color': '#040a74', 'fontFamily': 'fantasy'}}>NAMASTE!!</Header.Content>
	          </Header>
	        </div>
	        </Grid.Row>
      </div>
  )};
};

export default Home;

              