import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Row, Col, Card, CardTitle, CardFooter } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="LoginBox">
          <div className="CenterLogin">
            <Card
              body
              inverse
              style={{
                backgroundColor: 'rgb(51, 51, 51, .6)',
                borderColor: 'rgb(51, 51, 51, .6)'
              }}
            >
              <CardTitle
                style={{ color: '#dfdfdf', MarginBottom: '50px !important' }}
              >
                Strength
              </CardTitle>
              <Row>
                <Col md="6" style={{ borderRight: '1px solid' }}>
                  <h5 style={{ color: '#ff5656' }}>Register</h5>
                  <Row>
                    <Col sm="12">
                      <input
                        type="text"
                        name="email"
                        class="question"
                        id="nme"
                        required
                        autocomplete="off"
                      />
                      <label for="nme">
                        <span>First Name</span>
                      </label>
                    </Col>
                    <Col sm="12">
                      <input
                        type="text"
                        name="email"
                        class="question"
                        id="nme"
                        required
                        autocomplete="off"
                      />
                      <label for="nme">
                        <span>Last Name</span>
                      </label>
                    </Col>
                    <Col sm="12">
                      <input
                        type="text"
                        name="email"
                        class="question"
                        id="nme"
                        required
                        autocomplete="off"
                      />
                      <label for="nme">
                        <span>Email</span>
                      </label>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="12">
                      <input
                        type="text"
                        name="email"
                        class="question"
                        id="nme"
                        required
                        autocomplete="off"
                      />
                      <label for="nme">
                        <span>Password</span>
                      </label>
                    </Col>
                  </Row>
                </Col>

                <Col md="6">
                  <form>
                    <h5 style={{ color: '#ff5656' }}>Login</h5>
                    <Row>
                      <Col sm="12">
                        <input
                          type="text"
                          name="email"
                          class="question"
                          id="nme"
                          required
                          autocomplete="off"
                        />
                        <label for="nme">
                          <span>Email</span>
                        </label>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm="12">
                        <input
                          type="password"
                          name="email"
                          class="question"
                          id="nme"
                          required
                          autocomplete="off"
                        />
                        <label for="nme">
                          <span>Password</span>
                        </label>
                      </Col>
                    </Row>
                    <Row />
                  </form>
                </Col>
              </Row>
              <CardFooter style={{ marginTop: '20px' }}>
                <Col sm="12">
                  <Button
                    style={{
                      width: '100%',
                      backgroundColor: '#ff5656',
                      borderColor: '#ff5656'
                    }}
                    type="submit"
                  >
                    Login
                  </Button>
                </Col>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
