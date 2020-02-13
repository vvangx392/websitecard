import React, { Component } from "react";
import "./Cards.css";

import { Card, CardImg, CardText, CardTitle, CardSubtitle } from "reactstrap";
import { CardBody, Button } from "reactstrap";
import Form from "react-bootstrap/Form";

class Cards extends Component {
  render() {
    return (
      <div className="main-card">
        <div>
          <div className="row">
            <div className="col-md-4 form-container">
              <Card>
                <CardBody>
                  <CardTitle>Card Title</CardTitle>
                  <CardText></CardText>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Example select</Form.Label>
                      <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect2">
                      <Form.Label>Example multiple select</Form.Label>
                      <Form.Control as="select" multiple>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Example textarea</Form.Label>
                      <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button>Button</Button>
                  </Form>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-4 jira-map">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="/assets/318x180.svg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Total Sprint</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
              </Card>

              <Card>
                <CardImg
                  top
                  width="100%"
                  src="/assets/318x180.svg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Sprint to do</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
              </Card>

              <Card>
                <CardImg
                  top
                  width="100%"
                  src="/assets/318x180.svg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>Graph</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
