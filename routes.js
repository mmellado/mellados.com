// routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Store
import AppStore from './stores/AppStore';

// Main component
import App from './components/App';

// Pages
import Gallery from './components/Pages/Gallery';
import Blog from './components/Pages/Blog';
import BlogPost from './components/Pages/BlogPost';
import Lab from './components/Pages/Lab';
import Project from './components/Pages/Project';
import Contact from './components/Pages/Contact';
import Default from './components/Pages/Default';
import NoMatch from './components/Pages/NoMatch';

export default (
  <Route path="/" data={AppStore.data} component={App}>
    <IndexRoute component={Default}/>
    <Route path="labs" component={Gallery}/>
    <Route path="/labs/:slug" component={Lab}/>
    <Route path="projects" component={Gallery}/>
    <Route path="/projects/:slug" component={Project}/>
    <Route path="blog" component={Blog}/>
    <Route path="/blog/:slug" component={BlogPost}/>
    <Route path="contact" component={Contact}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)
