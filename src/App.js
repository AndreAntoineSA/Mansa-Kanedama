import React from "react"
import { Navbar, Home, Profile, Account } from "./components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import GlobalStyle from "./globalStyles"

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/account" exact component={Profile} />
          <Route path="/account/:account_id" exact component={Account} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
