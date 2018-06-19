import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Row, Col, Card, CardTitle, CardFooter, Navbar,  NavbarBrand,  NavItem,  NavLink, Nav } from 'reactstrap';

const Home = () => (
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

const About = () => (
<div className="App">
    <div className="LoginBox">
      <h1>test</h1>
    </div>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const BasicExample = () => (
  <Router>

        <Navbar color="light" light expand="lg" style={{width:'100%'}}>
                         <NavbarBrand href="/">Home</NavbarBrand>
                                       <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about/">About</NavLink>
              </NavItem>


      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
                    </Nav>
                    </Navbar>

  </Router>
);
export default BasicExample;
