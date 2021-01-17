import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Card from '../components/Card';
import devgrub from '../assets/images/devgrub.png';
import chow from '../assets/images/chow.jpg';
import thesel from '../assets/images/thesel.png';


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
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'SLI',
                    subTitle: 'An Intra-organisational communication application',
                    imgSrc: devgrub,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Chow',
                    subTitle: 'A food delivery application',
                    imgSrc: chow,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },

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
