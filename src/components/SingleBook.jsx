const SingleBook = (props) => {
  console.log(props.book);
  return (
    <div className="card m-2">
      <img
        className="card-img-top h-50"
        src={props.book.img}
        alt="cover-libro"
      />
      <div className="card-body">
        <h5 className="card-title">{props.book.title}</h5>
        <p className="card-text">{props.book.price}€</p>
        <a href="#" className="btn btn-primary">
          Dettagli
        </a>
      </div>
    </div>
  );
};

export default SingleBook;
