import React, { Component, ChangeEvent } from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Results from "../components/Results";
import Row from "react-bootstrap/Row";

interface HeaderState {
  query: String;
  result: any[];
}

class SearchComponent extends Component<{}, HeaderState> {
  state = {
    query: "",
    result: [],
  };

  catchInput = (e: ChangeEvent<HTMLInputElement>) => {
    let query = e.currentTarget.value;
    this.setState({ query });
  };
  fillQuery = async () => {
    let response = await fetch(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + this.state.query,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key":
            "dc428aeb3dmshb072b11435b2a9fp126ba5jsnfb0d8dd5e710",
        },
      }
    );
    let parsed = await response.json();
    this.setState({ result: parsed.data });
  };
  render() {
    return (
      <Row className="justify-content-center mt-4">
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={this.catchInput}
          />
          <Button variant="outline-success" onClick={this.fillQuery}>
            Search
          </Button>
        </Form>
        {this.state.result && <Results data={this.state.result} />}
      </Row>
    );
  }
}

export default SearchComponent;
