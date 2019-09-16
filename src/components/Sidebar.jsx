import React from 'react';
import {Image, Menu, Icon, Sidebar, Divider } from 'semantic-ui-react';
import cover from '../static/cover.png';
import nepalflag from '../static/nepal-flag-icon-16.png';

const GraphTypeOptions = {
  'Item1': 'Home',
  'Item2': 'About Nepal',
  'Item3': 'Officers',
  'Item4': 'Events',  'Item5': 'Photos',
  'Item6': 'Contact Us',
};

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.activeContainer
    }
  };

  handleitemClick(item) {
    this.setState({
      active: item
    })
    this.props.handleClick(item);
  };


  render() {
    const activeItem = this.state.active;
    const Item1 = GraphTypeOptions.Item1;
    const Item2 = GraphTypeOptions.Item2;
    const Item3 = GraphTypeOptions.Item3;
    const Item4 = GraphTypeOptions.Item4;
    const Item5 = GraphTypeOptions.Item5;
    const Item6 = GraphTypeOptions.Item6;

     return (
       <Sidebar className = 'nav-text' as={Menu} icon='labeled' inverted
              vertical visible={true} width = 'thin'>
          <Menu.Item 
            name = {Item1}
            active={activeItem === Item1}
            onClick={(e, {name}) => this.handleitemClick(name)}>
            <Image src = {cover} />
          </Menu.Item>
          <Menu.Item 
            name = {Item2}
            active={activeItem === Item2}
            onClick={(e, {name}) => this.handleitemClick(name)}>
            <Image src = {nepalflag} centered/>
            <Divider hidden fitted />
            {Item2}
          </Menu.Item>
          <Menu.Item 
            name = {Item3}
            active={activeItem === Item3}
            onClick={(e, {name}) => this.handleitemClick(name)}>
            <Icon name='group' />
            {Item3}
          </Menu.Item>
          <Menu.Item 
            name = {Item4}
            active={activeItem === Item4}
            onClick={(e, {name}) => this.handleitemClick(name)}>
            <Icon name='calendar alternate' />
            {Item4}
          </Menu.Item>
          <Menu.Item 
            name = {Item5}
            active={activeItem === Item5}
            onClick={(e, {name}) => this.handleitemClick(name)}>
            <Icon name='camera' />
            {Item5}
          </Menu.Item>
      </Sidebar>
  )};
};

export default NavigationBar;
