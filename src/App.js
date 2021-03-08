import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
      <Route exact path="/">
          <Movies />
        </Route>
        <Route path="/movie/:id/">
          <MovieDetail />
        </Route>

      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
