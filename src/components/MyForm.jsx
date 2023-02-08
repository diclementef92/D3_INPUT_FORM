import { Component } from "react";
import { Row, Col, Form, FormControl, FormGroup } from "react-bootstrap";

class MyForm extends Component {
  state = {
    textToSearch: "",
  };
  saveTextToSerarch(value) {
    this.setState({ textToSearch: value });
  }

  gettextToSearch() {
    return this.state.textToSearch;
  }

  filterResults() {}

  render() {
    return (
      <Form onSubmit={this.filterResults}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <FormControl
                type="text"
                name="search"
                id="search"
                placeholder="Cerca libro"
                onChange={(e) => this.saveTextToSerarch(e.target.value)}
              ></FormControl>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default MyForm;
