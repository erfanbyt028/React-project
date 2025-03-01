import React, { Component } from 'react';  
import { MyMain, MyCards, Card, Img, Button } from './ProductStyle';
import pd1 from '../assets/RR_car1.jpg'
import pd2 from '../assets/porshe_viwe.jpg'
import pd3 from '../assets/porshe2.jpg'


class Product extends Component {  
  render() {  
    return (  
      <MyMain>  
        <h2>Explore Our Extensive Collection of Quality Vehicles for Every Lifestyle</h2>  
        <MyCards>  
          <Card>  
            <Img src={pd1} alt="Car 1" />  
            <h3>Lorem ipsum dolor sit amet.</h3>  
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, saepe.</p>  
            <Button>Learn More</Button>  
          </Card>  
          <Card>  
            <Img src={pd2} alt="Car 2" />  
            <h3>Lorem ipsum dolor sit amet.</h3>  
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, saepe.</p>  
            <Button>Learn More</Button>  
          </Card>  
          <Card>  
            <Img src={pd3} alt="Car 3" />  
            <h3>Lorem ipsum dolor sit amet.</h3>  
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, saepe.</p>  
            <Button>Learn More</Button>  
          </Card>  
        </MyCards>  
      </MyMain>  
    );  
  }  
}  

export default Product;  