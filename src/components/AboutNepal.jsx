import React from 'react';
import { Image, Grid, Header, Container, Divider, Card } from 'semantic-ui-react';
import mountains from '../static/Mountains.jpg';
import Kathmandu from '../static/kathmandu.jpeg';
import '../App.css';
import { Input, Menu, Segment } from 'semantic-ui-react'

const ActiveTextBox = (props) => {
  let activeItem = props.active;
  switch(activeItem) {
  		case 'Summary':
      		return <p style = {{'font-family': 'fantasy', 'color': '#040a74', 'font-size': '20px'}}>Nepal, officially known according to its Interim Constitution 
			as the State of Nepal is a landlocked Himalayan country in South Asia 
			that overlaps with East Asia, bordered by Tibet to the north and by 
			India to the south,east and west. For a small territory, the Nepali 
			landscape is uncommonly diverse, ranging from the humid Terai in the 
			south to the lofty Himalayas in the north.Nepal boasts eight of the 
			world's top ten highest mountains, including Mount Everest on the border 
			with China. Nepal has been made famous for its tourism, trekking, hiking, 
			camping, mountain biking, national wildlife parks, jungle safaris, 
			river rafting, sport fishing, and its many beautiful temples and places of worship.
			</p>
		case 'Major Cities':
      		return <p style = {{'font-family': 'fantasy', 'color': '#040a74', 'font-size': '20px'}}>Kathmandu is the capital and largest city. 
			The other main cities include Pokhara, Biratnagar, Lalitpur (Patan), Bhaktapur, 
			Birendranagar, Bharatpur, Siddhartanagar (Bhairahawa), Birgunj, Janakpur, Nepalgunj, 
			Hetauda, Dharan and Mahendranagar.
			</p>
		case 'Origin of Nepali':
      		return <p style = {{'font-family': 'fantasy', 'color': '#040a74', 'font-size': '20px'}}>
  			The origin of the name Nepal is derived from the Nepal Bhasa, which is the language 
			of Newars, the natives of Kathmandu Valley, and has its origin to the fact that Kathmandu 
			Valley used to be called Nepa, the term that is still used by Newars. After a long and rich history, 
			during which the region splintered and coalesced under a variety of absolute rulers, Nepal became a constitutional 
			monarchy in 1990. However, the monarchy retained many important and ill-defined powers. 
			This arrangement was marked by increasing instability, both in the parliament and, since 
			1996, in large swathes of the country that have been fought over by Maoist insurgents. 
			The Maoists, alienated from mainstream political parties, went underground and started a 
			guerrilla war against both monarchy and mainstream political parties. They have sought to 
			overthrow feudal institutions, including the monarchy, and establish a Maoist state. This led
			to the Nepalese Civil War in which more than 15,000 people have died. On the pretext of 
			quashing the insurgents, the king closed down the parliament and sacked the elected prime 
			minister Sher Bahadur Deuba of Nepali Congress (Democratic) in 2002 and started ruling 
			through prime ministers appointed by him. He then unilaterally declared a state of emergency 
			early in 2005, and assumed all executive powers. Following the 2006 democracy movement, 
			the king agreed to relinquish the sovereign power back to the people and reinstated the 
			dissolved House of Representatives on April 24, 2006. Using its newly acquired sovereign 
			authority, on May 18, 2006, the newly resumed House of Representatives unanimously 
			passed a motion to curtail the power of the king and declared Nepal a secular state.
			</p>
    	default:
	    	return <p style = {{'font-family': 'fantasy', 'color': '#040a74', 'font-size': '20px'}}>Neolithic tools found in the Kathmandu Valley indicate that people have been 
	    	living in the Himalayan region for at least 9,000 years. It appears that people who were
	    	 probably of Tibeto-Burman ethnicity lived in Nepal 2,500 years ago. Indo-Aryan tribes 
	    	 entered the valley around 1500 BCE. Around 1000 BCE, small kingdoms and confederations 
	    	 of clans arose. One of the princes of the Shakya confederation was Siddhartha Gautama 
	    	 (563-483 BC), who renounced his royalty to lead an ascetic life and came to be known 
	    	 as the Buddha ("the one who has awakened"). By 250 BCE, the region came under the influence 
	    	 of the Mauryan empire of northern India, and later became a puppet state under the Gupta 
	    	 Dynasty in the 4th century CE. From the late 5th century CE, rulers called the Licchavis 
	    	 governed the area. The Licchavi dynasty went into decline in the late 8th century CE and 
	    	 was followed by a Newar era, from 879, although the extent of their control over the entire 
	    	 country is uncertain. By late 11th century, southern Nepal came under the influence of the 
	    	 Chalukya Empire of southern India. Under the Chalukyas, Nepal's religious establishment 
	    	 changed as the kings patronised Hinduism instead of the Buddhism prevailing at that time 
	    	 By the early 13th century, leaders were emerging whose names ended with the Sanskrit 
	    	 suffix malla ("wrestler"). Initially their reign was marked by upheaval, but the kings 
	    	 consolidated their power over the next 200 years. By late 14th century, much of the country 
	    	 began to come under a unified rule. This unity was short-lived; in 1482 the kingdom was 
	    	 carved into three areas, Kathmandu, Patan, and Bhadgaon, which engaged in petty rivalry 
	    	 for centuries. In 1765, the Gorkha ruler Prithvi Narayan Shah set out to unify the kingdoms, 
	    	 	after first seeking arms and aid from Indian kings and buying the neutrality of bordering 
	    	 Indian kingdoms. After several bloody battles and sieges, he managed to unify Nepal three years 
	    	 later. However, the actual war never took place while conquering the Kathmandu Valley. In fact, 
	    	 it was during the Indra Jaatra, when all the valley citizens were celebrating the festival, 
	    	 Prithvi Narayan Shah with his troops captured the valley, virtually without any effort. 
	    	 This marked the birth of the modern nation of Nepal. A dispute and subsequent war with Tibet 
	    	 over control of mountain passes forced Nepal to retreat and pay heavy repatriations to China, 
	    	 who came to Tibet's rescue. Rivalry with the British East India Company over the annexation of 
	    	 minor states bordering Nepal eventually led to the brief but bloody Anglo-Nepalese War (1815-16), 
	    	 in which Nepal defended its present-day borders but lost its territories west of the Kali River, 
	    	 including present day Uttarakhand state and several Punjab Hill States of present day Himachal Pradesh. 
	    	 The Treaty of Sugauli also ceded parts of the Terai and Sikkim to the Company in exchange for Nepalese 
	    	 autonomy. Factionalism among the royal family led to instability after the war. In 1846, a discovered 
	    	 plot to overthrow Jang Bahadur, a fast-rising military leader, by the reigning queen, led to the Kot 
	    	 Massacre. Armed clashes between military personnel and administrators loyal to the queen led to the 
	    	 execution of several hundred princes and chieftains around the country. Bahadur won and founded the 
	    	 Rana dynasty, leading to the Rana autocracy. The king was made a titular figure, and the post of 
	    	 Prime Minister was made powerful and hereditary. The Ranas were staunchly pro-British, and assisted 
	    	 the British during the Sepoy Rebellion in 1857, and later in both World Wars. In 1923 the United 
	    	 Kingdom and Nepal formally signed an agreement of friendship, truth, law, and religion, in which Nepal's 
	    	 independence was recognised by the UK. In the late 1940s, emerging pro-democracy movements and political 
	    	 parties in Nepal were critical of the Rana autocracy. Meanwhile, China occupied Tibet in 1950, making 
	    	 India keen on stability in Nepal, to avoid an expansive military campaign. Thus India sponsored Tribhuvan 
	    	 as Nepal's new terrible king in 1951, and a new government, mostly comprising the Nepali Congress Party. 
	    	 After years of power wrangling between the king and the government, the democratic experiment was dissolved 
	    	 in 1959, and a "partyless" panchayat system was instituted to govern Nepal. In 1989, the "Jan Andolan" 
	    	 (People's) Movement forced the monarchy to accept constitutional reforms and establish a multiparty 
	    	 parliament in May 1991.[3] Krishna Prasad Bhattarai became the Prime Minister of Interim Cabinet, 
	    	 drafted a new Constitution and carried out the democratic elections for the parliament. The Nepali 
	    	 Congress Party won the country's first democratic elections, with Girija Prasad Koirala becoming 
	    	 prime minister.
			</p>
	}
};

class TextBlocks extends React.Component {
  state = { activeItem: 'Summary' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
      	<Grid>
	  		<Grid.Column>
	        	<Image src = {mountains} size = 'large' centered bordered circular/>
	        </Grid.Column>
      	</Grid>
        <Menu pointing inverted>
          <Menu.Item
            name='Summary'
            active={activeItem === 'Summary'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Major Cities'
            active={activeItem === 'Major Cities'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Origin of Nepali'
            active={activeItem === 'Origin of Nepali'}
            onClick={this.handleItemClick}
          />
        <Menu.Menu position='right'>
            <Menu.Item
            name='History'
            active={activeItem === 'History'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
        </Menu>
        <Segment>
          <ActiveTextBox active = {activeItem} />
        </Segment>
      </div>
    )
  }
};

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render() {
    return(
        <div>
	        <TextBlocks />
		</div>
  )};
};

export default About;

              