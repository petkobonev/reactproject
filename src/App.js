import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from "./components/Home";
import { AddUser} from "./components/AddUser";
import { EditUser } from "./components/EditUser";
import { GlobalProvider } from "./context/GlobalState";
import 'bootstrap/dist/css/bootstrap.min.css'
import GoogleAuth from "./components/GoogleAuth";

const App = () => {
    return (
        <div>
            <GlobalProvider>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                     <Route path="/add" exact component={AddUser}/>
                    <Route path="/edit/:id" exact component={EditUser}/>
                </Switch>
            </Router>
            </GlobalProvider>
        </div>
    )
}

export default App;
