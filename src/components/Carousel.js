import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Jammming from '../assets/images/Jammming.png';
import Linkedin from '../assets/images/Linkedin.png';
import Ravenous from '../assets/images/Ravenous.png';
import Card from './Card.js';


class Carousel extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            items: [
                {
                    id: 0,
                    title: 'Jammming',
                    subTitle: 'Spotify Playlist Maker',
                    imgSrc: Jammming,
                    link: 'https://aaronjammming.surge.sh/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Aaron McGloin',
                    subTitle: 'Linkedin Account',
                    imgSrc: Linkedin,
                    link: 'https://ie.linkedin.com/in/aaron-mcgloin-1aa66193',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Ravenous',
                    subTitle: 'Yelp API example',
                    imgSrc: Ravenous,
                    link: 'http://aaron_ravenous.surge.sh/',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    //so you dont have to bind it later
    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id,e))} key={item.id} />
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;