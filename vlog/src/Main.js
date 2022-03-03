import React from "react";
import Nav from './component/Nav';
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "@material-ui/core";
import './Main.css';
// import mainImg from './image/main.jpg';

function Main() {
    return (
        <Router>
            <Container className="background-image" fluid={true}>
                <Nav />
            </Container>
        </Router>
    );
}

export default Main;
