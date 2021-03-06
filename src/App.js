import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './parts/Header/Header';
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import Projects from './pages/Projects/Projects'
import Resume from './pages/Resume/Resume'
import Footer from './parts/Footer/Footer'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/blog">
              <Blog />
          </Route>
          <Route exact path="/projects">
              <Projects />
          </Route>
          <Route exact path="/resume">
              <Resume />
          </Route>

        </Switch>
        <Footer />
  
      </div>
    </Router>
  );
}

export default App;
