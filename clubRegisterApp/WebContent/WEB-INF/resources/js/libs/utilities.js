(function(global) {
    
    var toolBox = function(log, logdepth) {
        // We're returning a toolBox.init which creates an object
        return new toolBox.init(log, logdepth);
    }

    
    // Set up the Prototype
    toolBox.prototype = {
        // In here go all the base functions you want available to your lib object
        // Each function will be a member of the object. Return 'this' if you want
        // the functions to be chainable.
        
        // Check if two objects are the same or different
    	difference: function(obj1, obj2) {
    		var diff = false;
    		var val, idx, array;
    		
    	    Object.getOwnPropertyNames(obj1).forEach(function(val, idx, array) {
    	    	  log.trace(val + ' -> ' + obj1[val]);
    	    	if( obj1[val] != obj2[val] )
    	    		  diff = true;
    	    });
    	        
    	    return diff;
        },
    
    	// Copy an object
	    clone: function(obj) {
		    if (null == obj || "object" != typeof obj) return obj;
		    var copy = obj.constructor();
		    for (var attr in obj) {
		        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
		    }
		    return copy;
		}
        
    };
        
    
    // Constructor function    
    toolBox.init = function(log, logdepth) {
        var self = this;
        self.log = log || ''; // Set a default if nothing is passed in
        self.logdepth = logdepth || '';
        self.loghdr = logdepth + "@@ ToolBox: ";
        self.log.debug(self.loghdr + "Initialised");
    }
    
    // Any objects created with the above constructor
    // should have my prototype as it's prototype, remember
    // any object created from a function constructor is given
    // the functions protopty as the prototype of the newly created
    // object. So, here we'll set the prototype of the function
    // to our prototype.
    toolBox.init.prototype = toolBox.prototype;
        
    // Make the lib available on the global environment and alias it
    global.toolBox = global.TB$ = toolBox;
    
}(window));