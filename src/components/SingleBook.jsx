import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  bookClicked(event) {
    console.log(event.target.parentNode);
    if (this.state.selected) {
      this.setState({
        selected: false,
      });
    } else {
      this.setState({
        selected: true,
      });
    }
  }

  render() {
    console.log(this.state.selected);
    return (
      <div className="card m-2" style={{ borderColor: "red" }}>
        <img
          className="card-img-top h-50"
          src={this.props.book.img}
          alt="cover-libro"
          onClick={(e) => this.bookClicked(e)}
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.book.title}</h5>
          <p className="card-text">{this.props.book.price}€</p>
          <a href="#" className="btn btn-primary">
            Dettagli
          </a>
        </div>
      </div>
    );
  }
}

export default SingleBook;
