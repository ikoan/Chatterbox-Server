/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/

//array to store our messages
var messageArray = [];

var requestHandler = function(request, response) {
  // //log request
  // console.log('\n\n--------BEGIN REQUEST-----------------------------------');
  // console.dir(request);
  // console.log('\n\n--------END REQUEST-------------------------------------');

  //test data
  var testJSONContent = '{"results":[{"createdAt":"2015-12-15T02:20:38.302Z","objectId":"6erk30W6Zo","roomname":"lobby","text":"xcg","updatedAt":"2015-12-15T02:20:38.302Z","username":"Gabe 2"},{"createdAt":"2015-12-15T01:27:45.224Z","objectId":"W64Ne6vENn","roomname":"lobby","text":"hi!","updatedAt":"2015-12-15T01:27:45.224Z","username":"Gabe 2"},{"createdAt":"2015-12-15T01:27:03.908Z","objectId":"a1lm0oQPM9","roomname":"lobby","text":"again, a new post!","updatedAt":"2015-12-15T01:27:03.908Z","username":"Gabe 2"},{"createdAt":"2015-12-15T01:27:00.764Z","objectId":"KQL4CyfWr3","roomname":"lobby","text":"again, a new post!","updatedAt":"2015-12-15T01:27:00.764Z","username":"Gabe 2"},{"createdAt":"2015-12-15T01:23:16.273Z","objectId":"wCgPixcC4X","roomname":"lobby","text":"hello, new server!","updatedAt":"2015-12-15T01:23:16.273Z","username":"Gabe 2"},{"createdAt":"2015-12-15T00:01:53.382Z","objectId":"xP7P2eW6WD","roomname":"lobby","text":"HRRRRRRRRRR11","updatedAt":"2015-12-15T00:01:53.382Z","username":"Test"},{"createdAt":"2015-12-09T05:25:20.748Z","objectId":"R5Md4hi4Ke","roomname":"lobby","text":"hgfjf","updatedAt":"2015-12-09T05:25:20.748Z","username":"anonymous"}]}';


  // generic response function
  var sendResponse = function(statusCode, headers, responseData){
      //write headers with our status code
      response.writeHead(statusCode, headers);
      //send back our response
      response.end(responseData);
  };

  ////////////////////////////////////////////
  //  HANDLE DIFFERENT REQUEST TYPES BELOW  //
  ////////////////////////////////////////////

  //if method is OPTIONS
  if (request.method === 'OPTIONS') {
    sendResponse(200, defaultCorsHeaders, '{}');
  }


  //if method is a get send 200 status
  if (request.method === 'GET') {
    var responseCode = 200;

    //default response
    var responseData = '{"results":[]}';
    //room name
    var roomName = "";
    //room message array to take messages that match a given room name
    var roomMessageArray = [];
    //default headers
    var headers = defaultCorsHeaders;
    //set our content type to json
    headers['Content-Type'] = "application/json";


    console.log('sliced url result:',request.url.slice(0,9));

    //if our url is requesting all messages send them back
    if(request.url === '/classes/messages'){
      //set our response data
      responseData = JSON.stringify({results:messageArray});

      //if our request url has a valid path of classes check for rooms messages
    } else if (request.url.slice(0,9) === '/classes/'){
      //create our roomName from our url
      roomName = request.url.slice(9);
      //go through messageArray and create response to match room
      for(var i = 0; i < messageArray.length; i++){
        //check if the message object roomname is equal to the url roomname
        if(messageArray[i].roomname === roomName){
          //push the message object into the roomMessageArray
          roomMessageArray.push(messageArray[i]);
        }
      }
      //if we have room messages after our loop update our response data
      if(roomMessageArray.length > 0){
        //create responseData by stringifying roomMessageArrayMessageArray
        responseData =  JSON.stringify({results:roomMessageArray});
      }
      //for all other requests send a 404 error
    } else {
      //set response code to 404
      responseCode = 404;
      //send back an empty json object
      responseData = '{}';
    }
    //send our response
    sendResponse(responseCode,headers,responseData);
  }


  //if method is a post send back 201 status and add data to array
  if (request.method === 'POST') {
    //add an event handler for data coming through
    request.on('data', function(data) {
      //default headers
      var headers = defaultCorsHeaders;
      //convert data to correct data type
      data = JSON.parse(data.toString('utf8'));
      //add unique id to new messages
      data.objectId = 'id' + messageArray.length;
      //log the data for testing
      console.log(data);
      //add the data to our message array
      messageArray.push(data);
      //set our content type to json
      headers['Content-Type'] = "application/json";
      //set our response data
      responseData = JSON.stringify(data);
      //send our response
      sendResponse(201,headers,responseData);
    });
  }


  console.log("Serving request type " + request.method + " for url " + request.url);

  // Request and Response come from node's http module.
  //
  // They include information about both the incoming request, such as
  // headers and URL, and about the outgoing response, such as its status
  // and content.
  //
  // Documentation for both request and response can be found in the HTTP section at
  // http://nodejs.org/documentation/api/

  // Do some basic logging.
  //
  // Adding more logging to your server can be an easy way to get passive
  // debugging help, but you should always be careful about leaving stray
  // console.logs in your code.

  // // The outgoing status.
  // // The outgoing status.
  // var statusCode = 200;
  // // See the note below about CORS headers.
  // var headers = defaultCorsHeaders;
  //
  // // See the note below about CORS headers.
  // var headers = defaultCorsHeaders;
  // // Tell the client we are sending them plain text.
  // //
  // // You will need to change this if you are sending something
  // // other than plain text, like JSON or HTML.
  // headers['Content-Type'] = "application/json";
  //
  // // .writeHead() writes to the request line and headers of the response,
  // // which includes the status and all headers.
  // response.writeHead(statusCode, headers);
  //
  // // Make sure to always call response.end() - Node may not send
  // // anything back to the client until you do. The string you pass to
  // // response.end() will be the body of the response - i.e. what shows
  // // up in the browser.
  // //
  // // Calling .end "flushes" the response's internal buffer, forcing
  // // node to actually send all the data over to the client.
  // response.end('responseContent','application/json');

  // //log response
  // console.log('\n\n<<<<<<<<<<<<<<<<<<<<<<<<BEGIN RESPONSE>>>>>>>>>>>>>>>>>>>>>>>');
  // console.dir(response);
  // console.log('\n\n<<<<<<<<<<<<<<<<<<<<<<<<END RESPONSE>>>>>>>>>>>>>>>>>>>>>>>>>');
};

// These headers will allow Cross-Origin Resource Sharing (CORS).
// This code allows this server to talk to websites that
// are on different domains, for instance, your chat client.
//
// Your chat client is running from a url like file://your/chat/client/index.html,
// which is considered a different domain.
//
// Another way to get around this restriction is to serve you chat
// client from this domain by setting up static file serving.
var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

//sending a ref of function to export
exports.requestHandler = requestHandler;
//send ref of CORS handler
exports.defaultCorsHeaders = defaultCorsHeaders;
