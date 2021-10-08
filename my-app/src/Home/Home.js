import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Mexican Express</h1>
          <p>Food Catering Services </p>
          <form>
            <Button variant="btn btn-success" onClick={() => history.push('/Packages')}>Click button to view packages</Button>
          </form>
        </div>
      </div>
    );
  }
}
