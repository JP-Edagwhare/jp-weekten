import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="headerContainer">
          <Link to="/"  activeClassName="selected" className='nav'>Home</Link>
          <Link to="/about"  activeClassName="selected" className='nav'>About</Link>
          <Link to="/contact"  activeClassName="selected" className='nav'>Contact</Link>
          <Link to="/login"  activeClassName="selected" className='nav'>Login</Link>
        </nav>

        <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
          <Route path="/about">
              <About />
          </Route>
          <Route path="/contact">
              <Contact />
          </Route>
          <Route path="/login">
              <Login />
          </Route>
        </Switch>
      </div>
        </Router >
  )
}

export default App
