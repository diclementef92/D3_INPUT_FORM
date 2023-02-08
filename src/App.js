import "./App.css";
import { Container } from "react-bootstrap";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import scifiBooks from "./books/scifi.json";
import BookList from "./components/BookList";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <MyNav items={["Home", "About", "Browse"]} />
      <Container>
        <Welcome text="Francesco" />
        <div className="d-flex flex-wrap justify-content-between">
          <BookList books={scifiBooks} />
        </div>
      </Container>
      <MyFooter />
    </div>
  );
}

export default App;
