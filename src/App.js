import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './containers/Home'
import { TodoList } from './containers/TodoList'
import theme from './theme'
import Home2  from './containers/Home2'
import Home3 from './containers/Home3'
import Home4 from './containers/Home4'

const userName = null

const App = () => (
  <BrowserRouter basename="/Seidy-Castillo">
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {!!userName ? <Home name={userName} /> : <Home name="stranger" />}
            </Route>
            <Route path="/contact-info.com" component={Home2}/>
            <Route path="/Extracurriculars.com" component={Home3} /> 
            <Route path="/Key-Club.com" component={Home4} />
            <Route path="/list" component={TodoList}/>
        </Switch>
      </div>
    </ThemeProvider>
  </BrowserRouter>
)

export default App
