
import './App.css';

import React, {  useState } from 'react';

import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'


import { BrowserRouter as Router, Switch,Route} from "react-router-dom";

const App = ()=> {
 
  
 const  [progress,setProgress]=useState(0)
  
  
  
  
  

    
    return (
      <div>
        <Router>
        <LoadingBar
        color='rgb(201 38 54)'
        progress={progress}
        
      />
 
          <NavBar />
          
          <Switch>
          <Route exact path="/" > <News  setProgress={setProgress}   key="general.1" category="general" country="in" /> </Route>
          
         
            <Route exact path="/business">
              <News setProgress={setProgress}   key="business.2" category="business" country="in" />
            </Route>
            <Route exact path="/entertainment">
              <News setProgress={setProgress}  key="entertainment.3" category="entertainment" country="in" />
            </Route>
           
            <Route exact path="/health">
              <News setProgress={setProgress}   key="health.4" category="health" country="in" />   
            </Route>
            <Route exact path="/science">
              <News setProgress={setProgress}   key="science.5" category="science" country="in" />
            </Route>
            <Route exact path="/sports">
              <News setProgress={setProgress}   key="sports" category="sports" country="in" />
            </Route>
            <Route exact path="/technology">
              <News setProgress={setProgress}  key="technology" category="technology" country="in" />
            </Route>
          </Switch>


        </Router>
      </div>
    )
  }

export default App;