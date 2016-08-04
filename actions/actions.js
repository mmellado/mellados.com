import config from '../config';
import contentful from 'contentful';
import _ from 'lodash';
import { Router, browserHistory } from 'react-router';

// AppStore
import AppStore from '../stores/AppStore';

let api_client = contentful.createClient({
  space: process.env.SPACE,
  accessToken: process.env.ACCESS_TOKEN
});

export function getStore(callback) {

  api_client.getEntries()
    .then(data => {
      // Globals
      let globals = AppStore.data.globals;

      globals.nav_items = config.nav_items;
      globals.footer_items = config.footer_items;

      AppStore.data.globals = globals;


      // Pages
      let entries = data.items;

      let blogPosts = _.filter(entries, e =>  e.sys.contentType.sys.id == 'blog');
      blogPosts.map((post, i) => {
        post.slug = post.fields.title.replace(/\s+/g, '-').toLowerCase();
      });

      let labs = _.filter(entries, e => e.sys.contentType.sys.id == 'lab');
      labs.map((lab, i) => {
        lab.slug = lab.fields.name.replace(/\s+/g, '-').toLowerCase();
      });


      let projects =  _.filter(entries, e => e.sys.contentType.sys.id == 'project');
      projects.map((project, i) => {
        project.slug = project.fields.name.replace(/\s+/g, '-').toLowerCase();
      });

      // Add the data to the AppStore
      AppStore.data.blog = blogPosts;
      AppStore.data.labs = labs;
      AppStore.data.projects = projects;

      // Emit change
      AppStore.data.ready = true;
      setTitleColor();
      AppStore.emitChange();

      // Trigger callback (from server)
      if (callback) {
        callback(false, AppStore);
      }
    })
    .catch(err => console.log(err));
}


export function getPageData(page_slug, post_slug) {

  let pageTitle;

  if (!page_slug) {
    pageTitle = 'Page not found!';
  } else if (page_slug == 'hello') {
    pageTitle = 'Hello!'
  } else {
    pageTitle = page_slug.charAt(0).toUpperCase() + page_slug.slice(1);
  }

  // Get page info
  const data = AppStore.data
  let page = data[page_slug] || {};

  if (post_slug) {
    const post = _.find(page, { slug: post_slug });
    if (post) {
      /**
       * If hitting an individual post, we save it in its own store variable.
       * This is to prevent the page from being repainted to blank when
       * transitioning out
       *
       * TODO: Figure out why components repaint on transition out
      */
      AppStore.data.activePost = post;
      page.title = post.fields.title || post.fields.name;
    } else {
      page = {
        title: 'Page not found!'
      }
    }
  } else {
    page.title = pageTitle;
  }

  AppStore.data.pageTitle = pageTitle;
  AppStore.data.page = page;
  AppStore.emitChange();
}

export function getMoreItems() {

  AppStore.data.loading = true;
  AppStore.emitChange();

  setTimeout(function() {
    let data = AppStore.data;
    let displayed_items = data.displayed_items + data.num_items;
    AppStore.data.displayed_items = displayed_items;
    AppStore.data.loading = false;
    AppStore.emitChange();
  }, 300);
}

export function updateNavStatus() {
  AppStore.data.isNavOpen = !AppStore.data.isNavOpen;
  AppStore.emitChange();
}

export function setTitleColor() {
  const colorClasses = ['yellow', 'blue', 'pink', 'orange'];
  let index = Math.floor(Math.random() * colorClasses.length);
  let titleColor = colorClasses[index];

  AppStore.data.titleColor = titleColor + '-title';
}
