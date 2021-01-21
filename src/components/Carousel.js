import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from '../components/Card';

import devgrub from '../assets/images/devgrub.png';
import chow from '../assets/images/chow.jpg';
import thesel from '../assets/images/thesel.png';
import myats from '../assets/images/myats.png';



class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Thesel',
                    subTitle: 'A therapeutic tele-counselling platform',
                    imgSrc: thesel,
                    link: 'https://play.google.com/store/apps/details?id=com.skiplab.theselproject&hl=en_IE&gl=US',
                    selected: false
                },
                {
                    id: 1,
                    title: 'SLI',
                    subTitle: 'An Intra-organisational communication application',
                    imgSrc: devgrub,
                    link: 'https://github.com/SKPnation/SLI',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Chow',
                    subTitle: 'A food delivery application',
                    imgSrc: chow,
                    link: 'https://github.com/SKPnation/CHOW',
                    selected: false
                },
                {
                    id: 3,
                    title: 'MyATS',
                    subTitle: 'A parent-school communication application',
                    imgSrc: myats,
                    link: 'https://play.google.com/store/apps/details?id=com.right.ayomide.myats&hl=en&gl=US',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }
    
    makeItems = (items)=>{
        return items.map(item=>{
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around" >
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;
