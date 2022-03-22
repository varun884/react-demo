import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import API from './API';
import Books from "./Books";
import Book from "./Book";
import Effect from './Effect';
import Form from './Form';
import Navbar from "./Navbar";
import State from './State';
import TextInput from './TextInput';
import Todo from './Todo';


function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="todo" element={<Todo />} />
      <Route path="form" element={<Form />} />
      <Route path="api" element={<API />} />
      <Route path="books" element={<Books />}>
          <Route path=":id" element={<Book />} />
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
