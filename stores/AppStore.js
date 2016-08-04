import { EventEmitter } from 'events';
import _ from 'lodash';
import config from '../config';

export default _.extend({}, EventEmitter.prototype, {

  // Initial data
  data: {
    ready: false,
    globals: {},
    page: [],
    isNavOpen: false,
    num_items: config.blog.num_items,
    displayed_items: config.blog.num_items,
    animation_timeout: config.animations.timeout
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback)
  }

})
