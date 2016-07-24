import { Dispatcher } from 'flux';
import { getStore,
         getPageData,
         getMoreItems,
         updateNavStatus,
         updateContactStatus,
         updateBgColor } from '../actions/actions';

const AppDispatcher = new Dispatcher();

// Register callback with AppDispatcher
AppDispatcher.register((payload) => {

  let action = payload.action

  switch(action) {

    case 'get-app-store':
      getStore();
      break;

    case 'get-page-data':
      getPageData(payload.page_slug, payload.post_slug);
      break;

    case 'get-more-items':
      getMoreItems();
      break;

    case 'update-nav-status':
      updateNavStatus();
      break;

    case 'update-contact-status':
      updateContactStatus();
      break;

    case 'update-bg-color':
      updateBgColor();
      break;

    default:
      return true;

  }

  return true;

});

export default AppDispatcher;
