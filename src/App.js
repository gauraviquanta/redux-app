import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import Home from './Components/Home';
import MovieDetail  from './Components/MovieDetail';
import PageNotFound from './Components/PageNotFound';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' exact Component={<Home />}></Route>
          <Route path='/movie/:imdbID' Component={<MovieDetail />}></Route>
          <Route Component={PageNotFound}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
