import React, { Component } from 'react';

import {
  Card, CardImg, CardText,
  CardTitle, CardSubtitle, 
} from 'reactstrap';
import { CardBody, Button } from 'reactstrap';
import Form from 'Form';

class Cards extends Component {
    render() {
        return(
          <div className="container-fluid d-flex justify-content-center">
          <div>
              <div className="row" >
                  <div className="col-md-4">
                  <Card>
  
  <CardBody>
    <CardTitle>Card Title</CardTitle>
    <CardText>
     <Form />
    </CardText>
    
  </CardBody>
</Card>
                  </div>
                  <div className="col-md-4">
                  <Card>
                      <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                      <CardBody>
                          <CardTitle>Total Sprint</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <CardText>Some quick example text to build on the card title and make up the bulk of the card's
                              content.</CardText>
                          
                      </CardBody>
                  </Card>
                  <Card>
                      <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                      <CardBody>
                          <CardTitle>Sprint to do</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <CardText>Some quick example text to build on the card title and make up the bulk of the card's
                              content.</CardText>
                          
                      </CardBody>
                  </Card>
                  <Card>
                      <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                      <CardBody>
                          <CardTitle>Graph</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                          <CardText>Some quick example text to build on the card title and make up the bulk of the card's
                              content.</CardText>
                          
                      </CardBody>
                  </Card>
                  </div>
              </div>
          </div>
      
      </div>

        )
    }
}

export default Cards;