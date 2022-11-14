import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Search from './pages/Search/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import './styles/index.css';

export const basePath = "/trybetunes"

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Login exact path={basePath} />
          <Route exact path={`${basePath}/search`} render={() => <Search />} />
          <Route
            path={`${basePath}/album/:id`}
            render={({ match }) => <Album {...match.params} />}
          />
          <Route exact path={`${basePath}/favorites`} render={() => <Favorites />} />
          <Route exact path={`${basePath}/profile`} render={() => <Profile />} />
          <ProfileEdit exact path={`${basePath}/profile/edit`} />
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
