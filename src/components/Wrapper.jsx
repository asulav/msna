import React from 'react';
import { Grid, Divider, Segment } from 'semantic-ui-react';
import NavigationBar from './Sidebar.jsx';
import Home from './Home.jsx';
import About from './AboutNepal.jsx';
import Officers from './Officers.jsx';
import Contact from './Contact.jsx';
import '../App.css';


const ContainerItem = props => {
  let activeItem = props.active
  switch(activeItem) {
  case 'Home':
      return <Home/>
  case 'About Nepal':
    return <About/>
  case 'Officers':
    return <Officers/>  
  case 'Contact Us':
  return <Contact/>  
  default:
    return <Home />
}

}

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeContainer: 'Home'
    };
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(value){
    this.setState((state) => ({
      activeContainer: value,
    }));
  };

  render() {
    return(
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <NavigationBar activeContainer = {this.state.activeContainer} handleClick = {this.handleClick}/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Divider hidden/>
                <Segment>
                 <ContainerItem active = {this.state.activeContainer}/>
                </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
  )};
};

export default Wrapper;
