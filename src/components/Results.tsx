import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";

interface props {
  data: any[];
}
class result extends Component<props> {
  render() {
    return (
      <Container>
        <ListGroup className="mt-4">
          {this.props.data.map((song) => (
            <ListGroup.Item>{song.title}</ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

export default result;
