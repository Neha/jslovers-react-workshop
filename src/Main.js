import React from 'react';
import AboutMepage from './pages/AboutMePage';
import Home from './Home';
import PortfolioPage from './pages/PortfolioPage';
import { Switch , Route} from 'react-router-dom'

const Main = () => {
  return(
   <Switch>
        <Route path="/portfolio" component= {PortfolioPage} />
        <Route path="/aboutme" component= {AboutMepage} />
        <Route path="/" component= {Home} />
   </Switch>
  )
}
export default Main;
