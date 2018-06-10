import React from 'react';
import AboutMepage from './AboutMePage';
import Home from './Home';
import { Switch , Route} from 'react-router-dom'

const Main = () => {
  return(
   <Switch>
       <Route path="/aboutme" component= {AboutMepage} />
       <Route path="/" component= {Home} />
   </Switch>
  )
}
export default Main;
