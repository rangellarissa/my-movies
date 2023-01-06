import { BrowserRouter as Router, 
  Switch,
  Route,
} from 'react-router-dom'; 
import { Header } from './components/Header';

import './App.css';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { MovieDetail } from './pages/MovieDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/movie/:id">
            <MovieDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
