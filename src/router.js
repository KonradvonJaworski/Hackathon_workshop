
import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
 
import AppComponent from './components/App'
import VComponent from './components/V'

 
function FirstRoute () {
    return (
        <BrowserRouter>
            <div>
            <nav>
                    <Link to="/Dci">Home</Link>
                    <Link to="/contacts">Contacts</Link>
            </nav>
                <h1>pierwszy rout!</h1>
 
                <Route path="/dCi" component={AppComponent}></Route>
                <Route path="/V" component={VComponent}></Route>
            
            </div>
        </BrowserRouter>
    )
}
 
export default FirstRoute