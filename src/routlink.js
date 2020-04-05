src/App.js
import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
 
import HomePageComponent from './components/home'
import ContactsPageComponent from './components/contact'
 
function AppComponent() {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/contacts">Contacts</Link>
                </nav>
 
                <Route path="/home" component={HomePageComponent}></Route>
                <Route path="/contacts" component={ContactsPageComponent}></Route>
            </div>
        </BrowserRouter>
    )
}
 
export default AppComponent

