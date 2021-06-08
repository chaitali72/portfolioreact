import React from 'react';
import About from './Page/About/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Works from './Page/Work/Works';
import ScrollToTop from './app/utils/ScrollToTop';

import Experience from './Page/Experience/Experience';
import Social from './components/social';

const  App=()=> {

  return (

     <BrowserRouter>
 
     <ScrollToTop>
   <Switch>
     <Route exact path= '/' component={About}/>
     <Route  exact path = '/work' component={Works}/>
     <Route exact path = '/experience' component={Experience}/>
   </Switch>
  </ScrollToTop>
  <Social/>
 
   </BrowserRouter> 
  
  );
}

export default App;
