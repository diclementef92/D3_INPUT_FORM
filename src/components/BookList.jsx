import SingleBook from "./SingleBook";
import { Component } from "react";
import { Row, Col, Form, FormControl, FormGroup } from "react-bootstrap";

class BookList extends Component {
  state = {
    textToSearch: "",
  };
  saveTextToSearch(value) {
    this.setState({ textToSearch: value });
  }

  handleChange() {}

  render() {
    return (
      <>
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <FormControl
                  type="text"
                  name="search"
                  id="search"
                  value={this.state.textToSearch} // evita worning in console
                  placeholder="Cerca libro"
                  onChange={(e) => this.saveTextToSearch(e.target.value)}
                ></FormControl>
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col className="d-flex flex-wrap justify-content-between">
            {this.props.books
              .filter((book) =>
                book.title
                  .toLowerCase()
                  .includes(this.state.textToSearch.toLowerCase())
              )
              .map((elem) => {
                return <SingleBook book={elem} key={`book-${elem.asin}`} />;
              })}
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
