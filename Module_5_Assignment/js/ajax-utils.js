(function (global) {

// Set up a namespace for our utility
let ajaxUtils = {};

// Returns an HTTP request object
function getRequestObject() {
  if (window.XMLHttpRequest) {
    return (new XMLHttpRequest());
  }
}

// Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest = function(requestUrl, responseHandler, isJsonResponse) {
    let request = getRequestObject();
    request.open("GET", requestUrl, true);
    request.send();
    request.onreadystatechange = function() {
        handleResponse(request, responseHandler, isJsonResponse);
      };
  };

// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
function handleResponse(request, responseHandler, isJsonResponse) {
  if ((request.readyState === 4) && (request.status === 200)) {
    // Default to isJsonResponse = true
    if (isJsonResponse === undefined) {
      isJsonResponse = true;
    }

    if (isJsonResponse) {
      responseHandler(JSON.parse(request.responseText));
    }
    else {
      responseHandler(request.responseText);
    }
  }
}

// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;
})(window);
