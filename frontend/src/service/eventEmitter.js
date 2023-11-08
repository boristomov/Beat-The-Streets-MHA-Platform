
export const EventEmitter = {
  _events: {},
  create: function(event) {
    if (this._events[event]) {
      return "CREATE FAIL: EVENT ALREADY EXISTS";
    }
    this._events[event] = [];
  },
  dispatch: function (event, data) {        
    if (!this._events[event]) {
      return "DISPATCH FAIL: EVENT DOES NOT EXIST";
    };
    this._events[event].forEach(callback => callback(data))    
  },    
  subscribe: function (event, callback) {      
    if (!this._events[event]) {
      return "SUBSCRIBE FAIL: EVENT DOES NOT EXIST";
    };
    this._events[event].push(callback); 
  },
}
