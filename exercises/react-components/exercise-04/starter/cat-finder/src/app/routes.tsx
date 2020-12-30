import React from 'react';
import { Switch, Route } from "react-router-dom";
import CardsView from './views/CardsView/CardsView';

const routes = () => (
  <Switch>
    {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
    <Route path="/" render={() => <CardsView />} />
  </Switch>
)

export default routes;
