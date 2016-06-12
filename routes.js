import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './App';
import Home from './src/containers/Home';
import Photos from './src/containers/Photos';
import Rebates from './src/containers/Rebates';
import Articles from './src/containers/Articles';
import Profile from './src/containers/Profile';
import PhotosDetails from './src/containers/PhotoDetails.js';

function setPageTitle(nextState) {
  let pageTitle = '';
  let pathName = nextState.location.pathname || '';
  pathName = pathName.replace('/','');
  switch (pathName) {
    case 'photos':
      pageTitle = 'Get Inspired';
      break;
    case 'rebates':
      pageTitle = 'Start Saving';
      break;
    case 'articles':
      pageTitle = 'Expert Insight';
      break;
    case 'profile':
     pageTitle = 'Your Rise Profile';
     break; 
  }

  if (document) {
    document.title = `Rise ${pageTitle} | Your Home, Built With Purpose`;
  }
}

function onPageEnter(nextState) {
  setPageTitle(nextState);
}

export default  (
  <Route path="/" component={App} >
    <IndexRoute component={Home} onEnter = {onPageEnter} />
    <Route path="photos" onEnter = {onPageEnter} >
      <IndexRoute component={Photos} onEnter = {onPageEnter} />
      <Route path=":photoId" component={PhotosDetails} />
    </Route>
    <Route path="rebates" component={Rebates} onEnter = {onPageEnter} />
    <Route path="articles" component={Articles} onEnter = {onPageEnter} />
    <Route path="profile" component={Profile} onEnter = {onPageEnter} />
  </Route>
)
