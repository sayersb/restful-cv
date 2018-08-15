import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import ProjectsIndex from './components/projects/Index';
import ProjectsShow from './components/projects/Show';
import ProjectsNew from './components/projects/New';
import ProjectsEdit from './components/projects/Edit';
import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';
import ProtectedRoute from './components/common/ProtectedRoute';
import Navbar from './components/common/Navbar';
import FlashMessages from './components/common/FlashMessages';

import 'bulma';
// import 'react-select';
import './scss/style.scss';
// import 'react-select/dist/react-select.css';


class App extends React.Component {
  render() {
    console.log('These are my components, new, edit, show, index', ProjectsNew, ProjectsEdit, ProjectsShow, ProjectsIndex);
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <FlashMessages />
          <Route exact path="/" component={Home} />
          <section className="section">
            <div className="container">
              <Switch>
                <ProtectedRoute path="/projects/new" component={ProjectsNew} />
                <ProtectedRoute path="/projects/:id/edit" component={ProjectsEdit} />
                <Route path="/projects/:id" component={ProjectsShow} />
                <Route path="/projects" component={ProjectsIndex} />
                <Route path="/login" component={AuthLogin} />
                <Route path="/register" component={AuthRegister} />
                <Route exact path="/" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </section>
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
