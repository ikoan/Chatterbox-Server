/*************************************************************

You should implement your request handler function in this file.

requestHandler is already getting passed to http.createServer()
in basic-server.js, but it won't work as is.

You'll have to figure out a way to export this function from
this file and include it in basic-server.js so that it actually works.

*Hint* Check out the node module documentation at http://nodejs.org/api/modules.html.

**************************************************************/

var requestHandler = function(request, response) {
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

  console.log("Serving request type " + request.method + " for url " + request.url);

  // The outgoing status.
  var statusCode = 200;

  // See the note below about CORS headers.
  var headers = defaultCorsHeaders;

  var responseContent = "";

  //check if the url matches
  if(request.url === '/classes/chatterbox?order=-createdAt'){
    responseContent = '{"results":[{"createdAt":"2015-12-15T02:20:38.302Z","objectId":"6erk30W6Zo","roomname":"lobby","text":"xcg","updatedAt":"2015-12-15T02:20:38.302Z","username":"Gabe 2"},{"createdAt":"2015-12-15T01:27:45.224Z","objectId":"W64Ne6vENn","roomname":"lobby","text":"hi!","updatedAt":"2015-12-15T01:27:45.224Z","username":"Gabe 2"},{"createdAt":"2015-12-15T01:27:03.908Z","objectId":"a1lm0oQPM9","roomname":"lobby","text":"again, a new post!","updatedAt":"2015-12-15T01:27:03.908Z","username":"Gabe 2"},{"createdAt":"2015-12-15T01:27:00.764Z","objectId":"KQL4CyfWr3","roomname":"lobby","text":"again, a new post!","updatedAt":"2015-12-15T01:27:00.764Z","username":"Gabe 2"},{"createdAt":"2015-12-15T01:23:16.273Z","objectId":"wCgPixcC4X","roomname":"lobby","text":"hello, new server!","updatedAt":"2015-12-15T01:23:16.273Z","username":"Gabe 2"},{"createdAt":"2015-12-15T00:01:53.382Z","objectId":"xP7P2eW6WD","roomname":"lobby","text":"HRRRRRRRRRR11","updatedAt":"2015-12-15T00:01:53.382Z","username":"Test"},{"createdAt":"2015-12-14T23:51:28.515Z","objectId":"xPk0yolAiD","roomname":"lobby","text":"dfas","updatedAt":"2015-12-14T23:51:28.515Z","username":"anonymous"},{"createdAt":"2015-12-14T23:51:24.853Z","objectId":"OIW7DlShPB","roomname":"lobby","text":"cv","updatedAt":"2015-12-14T23:51:24.853Z","username":"anonymous"},{"createdAt":"2015-12-14T23:51:22.837Z","objectId":"qNZRGGh1jO","roomname":"lobby","text":"cv","updatedAt":"2015-12-14T23:51:22.837Z","username":"anonymous"},{"createdAt":"2015-12-14T23:49:15.141Z","objectId":"beqSCUFqL7","roomname":"lobby","text":"fsda","updatedAt":"2015-12-14T23:49:15.141Z","username":"anonymous"},{"createdAt":"2015-12-14T23:21:40.071Z","objectId":"yNKfVI24WQ","roomname":"lobby","text":"Hello world","updatedAt":"2015-12-14T23:21:40.071Z","username":"song"},{"createdAt":"2015-12-14T23:10:43.099Z","objectId":"1i0MCe26uK","roomname":"lobby","text":"fshfg","updatedAt":"2015-12-14T23:10:43.099Z","username":"anonymous"},{"createdAt":"2015-12-14T22:57:49.435Z","objectId":"1aWGb24snl","roomname":"lobby","text":"This is a new message!","updatedAt":"2015-12-14T22:57:49.435Z","username":"Gabe 2"},{"createdAt":"2015-12-14T22:07:18.510Z","objectId":"hZTAFYjfNm","roomname":"lobby","text":"It\'s real sunny outside","updatedAt":"2015-12-14T22:07:18.510Z","username":"me"},{"createdAt":"2015-12-14T21:42:15.452Z","objectId":"bH92prrbgg","roomname":"lobby","text":"teting esting","updatedAt":"2015-12-14T21:42:15.452Z","username":"Vincent"},{"createdAt":"2015-12-14T21:42:06.448Z","objectId":"OPNvi21ZCC","roomname":"lobby","text":"yo","updatedAt":"2015-12-14T21:42:06.448Z","username":"Vincent"},{"createdAt":"2015-12-14T20:31:08.738Z","objectId":"m8Dazwy1Ls","roomname":"lobby","text":"this ain\'t it","updatedAt":"2015-12-14T20:31:08.738Z","username":"p"},{"createdAt":"2015-12-14T19:48:07.620Z","objectId":"DdOnOhME39","roomname":"lobby","text":"another test","updatedAt":"2015-12-14T19:48:07.620Z","username":"Zac"},{"createdAt":"2015-12-14T19:41:04.703Z","objectId":"qbFjEegCFr","roomname":"lobby","text":"test","updatedAt":"2015-12-14T19:41:04.703Z","username":"Zac"},{"createdAt":"2015-12-14T17:16:37.748Z","objectId":"v8CYM45cYm","roomname":"lobby","text":"asdfads","updatedAt":"2015-12-14T17:16:37.748Z","username":"becky"},{"createdAt":"2015-12-13T05:26:04.428Z","objectId":"w1cxtfbw8D","roomname":"lobby","text":"kkkk","updatedAt":"2015-12-13T05:26:04.428Z","username":"R1"},{"createdAt":"2015-12-13T03:59:13.821Z","objectId":"HwSjGyXskH","roomname":"lobby","text":"","updatedAt":"2015-12-13T03:59:13.821Z","username":"R1"},{"createdAt":"2015-12-13T03:51:27.676Z","objectId":"nTxydRFI96","roomname":"lobby","updatedAt":"2015-12-13T03:51:27.676Z","username":"R1"},{"createdAt":"2015-12-13T03:48:10.159Z","objectId":"cfETwAZhxq","roomname":"lobby","text":"asdf","updatedAt":"2015-12-13T03:48:10.159Z","username":"R1"},{"createdAt":"2015-12-13T03:41:03.551Z","objectId":"W85SIppPfU","roomname":"lobby","text":"","updatedAt":"2015-12-13T03:41:03.551Z","username":"R1"},{"createdAt":"2015-12-13T03:41:02.898Z","objectId":"XMm0ABtAaR","roomname":"lobby","text":"","updatedAt":"2015-12-13T03:41:02.898Z","username":"R1"},{"createdAt":"2015-12-13T03:22:22.225Z","objectId":"rYRQrTwrnf","roomname":"lobby","text":"jfipjeipqfjealf;d","updatedAt":"2015-12-13T03:22:22.225Z","username":"Kristen"},{"createdAt":"2015-12-13T02:36:04.824Z","objectId":"HjGqUzeO2j","roomname":"lobby","text":"HEROOO","updatedAt":"2015-12-13T02:36:04.824Z","username":"Kristen"},{"createdAt":"2015-12-13T02:31:09.919Z","objectId":"V6P0dvFDw4","roomname":"lobby","text":"j;fjk;lafd","updatedAt":"2015-12-13T02:31:09.919Z","username":"Kristen"},{"createdAt":"2015-12-13T02:16:48.065Z","objectId":"xeqI75HrLz","roomname":"lobby","text":"what\'s up","updatedAt":"2015-12-13T02:16:48.065Z","username":"Kristen"},{"createdAt":"2015-12-13T02:16:16.156Z","objectId":"ACW8jgiUrb","roomname":"lobby","text":"helloooo","updatedAt":"2015-12-13T02:16:16.156Z","username":"Kristen"},{"createdAt":"2015-12-13T00:35:17.468Z","objectId":"btP85XnTmp","roomname":"lobby","text":"adsf","updatedAt":"2015-12-13T00:35:17.468Z","username":"R1"},{"createdAt":"2015-12-13T00:34:17.788Z","objectId":"CSmYg0yU0r","roomname":"lobby","text":"","updatedAt":"2015-12-13T00:34:17.788Z","username":"R1"},{"createdAt":"2015-12-13T00:21:10.583Z","objectId":"sYYr5nZIE9","roomname":"lobby","text":"asdf","updatedAt":"2015-12-13T00:21:10.583Z","username":"R1"},{"createdAt":"2015-12-13T00:09:40.644Z","objectId":"VHk6sQddxH","roomname":"lobby","text":"","updatedAt":"2015-12-13T00:09:40.644Z","username":"R1"},{"createdAt":"2015-12-13T00:09:37.608Z","objectId":"4UmRca2V5q","roomname":"lobby","text":"","updatedAt":"2015-12-13T00:09:37.608Z","username":"R1"},{"createdAt":"2015-12-13T00:09:26.477Z","objectId":"9sxa5xJK3C","roomname":"lobby","text":"55555","updatedAt":"2015-12-13T00:09:26.477Z","username":"R1"},{"createdAt":"2015-12-13T00:08:25.022Z","objectId":"kgxue18jfK","roomname":"lobby","text":"0000","updatedAt":"2015-12-13T00:08:25.022Z","username":"R1"},{"createdAt":"2015-12-13T00:08:17.009Z","objectId":"6fNmydlXYr","roomname":"lobby","text":"asdf","updatedAt":"2015-12-13T00:08:17.009Z","username":"R1"},{"createdAt":"2015-12-13T00:06:29.739Z","objectId":"7h5vjq32pk","roomname":"lobby","text":"12345","updatedAt":"2015-12-13T00:06:29.739Z","username":"R1"},{"createdAt":"2015-12-13T00:06:20.210Z","objectId":"WTm2OWspgj","roomname":"lobby","text":"12345","updatedAt":"2015-12-13T00:06:20.210Z","username":"R1"},{"createdAt":"2015-12-13T00:06:15.436Z","objectId":"gDL7ur3bvp","roomname":"lobby","text":"asdfasdfasdf","updatedAt":"2015-12-13T00:06:15.436Z","username":"R1"},{"createdAt":"2015-12-13T00:06:11.303Z","objectId":"jCguM9rcrQ","roomname":"lobby","text":"asdfasdfasdf","updatedAt":"2015-12-13T00:06:11.303Z","username":"R1"},{"createdAt":"2015-12-13T00:05:40.164Z","objectId":"v2bIPCOpbS","roomname":"lobby","text":"asdf","updatedAt":"2015-12-13T00:05:40.164Z","username":"R1"},{"createdAt":"2015-12-13T00:04:15.763Z","objectId":"u5YwgLsuwh","roomname":"lobby","text":"asdfasdfadsf","updatedAt":"2015-12-13T00:04:15.763Z","username":"R1"},{"createdAt":"2015-12-13T00:04:07.904Z","objectId":"96uE79R4jn","roomname":"lobby","text":"asdfasdfadsf","updatedAt":"2015-12-13T00:04:07.904Z","username":"R1"},{"createdAt":"2015-12-13T00:04:00.316Z","objectId":"kYFjYa0AtH","roomname":"lobby","text":"erwerewwe","updatedAt":"2015-12-13T00:04:00.316Z","username":"R1"},{"createdAt":"2015-12-13T00:03:54.666Z","objectId":"McCklKPxeE","roomname":"lobby","text":"","updatedAt":"2015-12-13T00:03:54.666Z","username":"R1"},{"createdAt":"2015-12-13T00:01:58.124Z","objectId":"SfTvnxsC6q","roomname":"lobby","text":"asdfadf","updatedAt":"2015-12-13T00:01:58.124Z","username":"R2"},{"createdAt":"2015-12-13T00:01:50.615Z","objectId":"MrfADchLiD","roomname":"lobby","text":"adsfadsf","updatedAt":"2015-12-13T00:01:50.615Z","username":"R2"},{"createdAt":"2015-12-13T00:01:40.256Z","objectId":"H0LirrDDiM","roomname":"lobby","text":"  ","updatedAt":"2015-12-13T00:01:40.256Z","username":"R2"},{"createdAt":"2015-12-13T00:01:34.426Z","objectId":"JyzFkeXQj5","roomname":"lobby","text":"asdf","updatedAt":"2015-12-13T00:01:34.426Z","username":"R2"},{"createdAt":"2015-12-12T23:25:17.002Z","objectId":"VUh57ugDpK","roomname":"lobby","text":"hey there it\'s delphine","updatedAt":"2015-12-12T23:25:17.002Z","username":"Delphine"},{"createdAt":"2015-12-12T22:31:07.674Z","objectId":"sW6Vrx0FOk","roomname":"lobby","text":"ad","updatedAt":"2015-12-12T22:31:07.674Z","username":"d"},{"createdAt":"2015-12-12T22:21:11.391Z","objectId":"Lrjt4KqOJw","roomname":"lobby","text":"a","updatedAt":"2015-12-12T22:21:11.391Z","username":"d"},{"createdAt":"2015-12-12T22:19:35.423Z","objectId":"Fxs7F2EtZt","roomname":"lobby","text":"test","updatedAt":"2015-12-12T22:19:35.423Z","username":"d"},{"createdAt":"2015-12-12T22:18:22.668Z","objectId":"XSy5k4WPjE","roomname":"lobby","text":"aaa","updatedAt":"2015-12-12T22:18:22.668Z","username":"d"},{"createdAt":"2015-12-12T22:18:09.669Z","objectId":"5zSur7VlO8","roomname":"lobby","text":"ddd","updatedAt":"2015-12-12T22:18:09.669Z","username":"d"},{"createdAt":"2015-12-12T20:03:03.620Z","objectId":"PigUf6H6aT","roomname":"lobby","text":"ask the monkey :)","updatedAt":"2015-12-12T20:03:03.620Z","username":"d"},{"createdAt":"2015-12-12T19:59:14.845Z","objectId":"5tZ8zyhw3W","roomname":"lobby","text":"dd","updatedAt":"2015-12-12T19:59:14.845Z","username":"d"},{"createdAt":"2015-12-12T19:58:25.864Z","objectId":"kVZ385XVY0","roomname":"lobby","text":"ss","updatedAt":"2015-12-12T19:58:25.864Z","username":"d"},{"createdAt":"2015-12-12T19:41:39.338Z","objectId":"NG0c6mwgb5","roomname":"lobby","text":"who is Goku?","updatedAt":"2015-12-12T19:41:39.338Z","username":"d"},{"createdAt":"2015-12-12T19:41:25.380Z","objectId":"F9rq85sT9j","roomname":"lobby","text":"D is D","updatedAt":"2015-12-12T19:41:25.380Z","username":"d"},{"createdAt":"2015-12-12T19:41:15.060Z","objectId":"rYWOX14qpg","roomname":"lobby","text":"sss","updatedAt":"2015-12-12T19:41:15.060Z","username":"d"},{"createdAt":"2015-12-12T19:41:11.790Z","objectId":"768fJcshPT","roomname":"lobby","text":"dd","updatedAt":"2015-12-12T19:41:11.790Z","username":"d"},{"createdAt":"2015-12-12T19:40:34.520Z","objectId":"eWAFupYy0j","roomname":"lobby","text":"","updatedAt":"2015-12-12T19:40:34.520Z","username":"d"},{"createdAt":"2015-12-12T19:37:28.899Z","objectId":"Fn1spF3CZL","roomname":"lobby","text":"sss","updatedAt":"2015-12-12T19:37:28.899Z","username":"d"},{"createdAt":"2015-12-12T19:36:10.946Z","objectId":"nJqU144G92","roomname":"lobby","text":"testing","updatedAt":"2015-12-12T19:36:10.946Z","username":"d"},{"createdAt":"2015-12-12T19:35:27.370Z","objectId":"gOct8IoeTd","roomname":"lobby","text":"d","updatedAt":"2015-12-12T19:35:27.370Z","username":"d"},{"createdAt":"2015-12-12T19:35:20.888Z","objectId":"E2O0SBZZ4C","roomname":"lobby","text":"a","updatedAt":"2015-12-12T19:35:20.888Z","username":"d"},{"createdAt":"2015-12-12T19:35:06.093Z","objectId":"pEW1h851BK","roomname":"lobby","text":"alls","updatedAt":"2015-12-12T19:35:06.093Z","username":"d"},{"createdAt":"2015-12-12T19:25:32.731Z","objectId":"rYGr3ElXnr","roomname":"lobby","text":"R","updatedAt":"2015-12-12T19:25:32.731Z","username":"d"},{"createdAt":"2015-12-12T19:24:27.529Z","objectId":"7FY8nqfV2R","roomname":"lobby","text":"ss","updatedAt":"2015-12-12T19:24:27.529Z","username":"d"},{"createdAt":"2015-12-12T19:16:02.044Z","objectId":"NNtywLD4sT","roomname":"lobby","text":"alsl","updatedAt":"2015-12-12T19:16:02.044Z","username":"d"},{"createdAt":"2015-12-12T19:15:22.405Z","objectId":"evpwVIDTyf","roomname":"lobby","text":"hello","updatedAt":"2015-12-12T19:15:22.405Z","username":"d"},{"createdAt":"2015-12-12T18:50:38.746Z","objectId":"6rfCEyxSlk","roomname":"lobby","text":"munge","updatedAt":"2015-12-12T18:50:38.746Z","username":"Auggie"},{"createdAt":"2015-12-12T15:57:48.785Z","objectId":"qvDkH1fD2F","roomname":"lobby","text":"How much wood could a wood chuck chuck if a wood chuck could chuck wood?","updatedAt":"2015-12-12T15:57:48.785Z","username":"Auggie"},{"createdAt":"2015-12-12T15:04:54.492Z","objectId":"fqsroipVB5","roomname":"lobby","text":"","updatedAt":"2015-12-12T15:04:54.492Z","username":"TheBagelMAster"},{"createdAt":"2015-12-12T15:04:50.492Z","objectId":"sNWFqhWRsP","roomname":"lobby","text":"","updatedAt":"2015-12-12T15:04:50.492Z","username":"TheBagelMAster"},{"createdAt":"2015-12-12T15:00:09.723Z","objectId":"JYaq1rqxoA","roomname":"lobby","text":"","updatedAt":"2015-12-12T15:00:09.723Z","username":"Mad%20Max"},{"createdAt":"2015-12-12T05:56:06.431Z","objectId":"kLPUzawtx9","roomname":"lobby","text":"Slingin","updatedAt":"2015-12-12T05:56:06.431Z","username":"Spidy"},{"createdAt":"2015-12-12T05:54:44.946Z","objectId":"6AISij6SuY","roomname":"lobby","text":"Slingin","updatedAt":"2015-12-12T05:54:44.946Z","username":"anonymous"},{"createdAt":"2015-12-12T05:51:20.251Z","objectId":"drA2EenANz","roomname":"lobby","text":"Woohoo","updatedAt":"2015-12-12T05:51:20.251Z","username":"anonymous"},{"createdAt":"2015-12-12T05:48:37.382Z","objectId":"0vDJKnYpmR","roomname":"lobby","text":"But I\'m not gonna let em catch me, no.","updatedAt":"2015-12-12T05:48:37.382Z"},{"createdAt":"2015-12-11T21:56:57.609Z","objectId":"p1ORDiKMpt","roomname":"lobby","text":"WELCOME TO THE PARTY PEOPLE! ","updatedAt":"2015-12-11T21:56:57.609Z","username":"Goku"},{"createdAt":"2015-12-11T19:45:59.974Z","objectId":"lg09VkZsoT","roomname":"lobby","text":"If you see this that means my message function works!","updatedAt":"2015-12-11T19:45:59.974Z","username":"Auggie"},{"createdAt":"2015-12-09T07:33:12.408Z","objectId":"rvbXah2ScH","roomname":"lobby","text":"it sure is late","updatedAt":"2015-12-09T07:33:12.408Z","username":"Billy Bob"},{"createdAt":"2015-12-09T07:32:39.182Z","objectId":"EmcAEmwb32","roomname":"lobby","text":"Oh man it\'s late","updatedAt":"2015-12-09T07:32:39.182Z","username":"Billy Bob"},{"createdAt":"2015-12-09T06:57:51.899Z","objectId":"52fA3t5gg2","roomname":"lobby","text":"Hi There","updatedAt":"2015-12-09T06:57:51.899Z","username":"Still Testing"},{"createdAt":"2015-12-09T06:09:47.178Z","objectId":"5MxNWLINZO","roomname":"lobby","text":"d","updatedAt":"2015-12-09T06:09:47.178Z","username":"Chris"},{"createdAt":"2015-12-09T06:06:09.009Z","objectId":"ZUn5LR1Bff","roomname":"lobby","text":"xd","updatedAt":"2015-12-09T06:06:09.009Z","username":"Chris"},{"createdAt":"2015-12-09T05:46:53.132Z","objectId":"filc0vEwrV","roomname":"lobby","text":"","updatedAt":"2015-12-09T05:46:53.132Z","username":"anonymous"},{"createdAt":"2015-12-09T05:40:19.102Z","objectId":"jnYnLTXUNu","roomname":"lobby","text":"d","updatedAt":"2015-12-09T05:40:19.102Z","username":"Chris"},{"createdAt":"2015-12-09T05:39:33.209Z","objectId":"AbnMqaDH5h","roomname":"lobby","text":"","updatedAt":"2015-12-09T05:39:33.209Z","username":"Chris"},{"createdAt":"2015-12-09T05:39:29.079Z","objectId":"H8PQyTid8X","roomname":"lobby","text":"","updatedAt":"2015-12-09T05:39:29.079Z","username":"anonymous"},{"createdAt":"2015-12-09T05:36:32.631Z","objectId":"Ha2Jdzkbf5","roomname":"lobby","text":"d","updatedAt":"2015-12-09T05:36:32.631Z","username":"Chris"},{"createdAt":"2015-12-09T05:34:05.140Z","objectId":"bQyuNlygZL","roomname":"lobby","text":"","updatedAt":"2015-12-09T05:34:05.140Z","username":"anonymous"},{"createdAt":"2015-12-09T05:31:41.370Z","objectId":"WtcTkJOFJz","roomname":"lobby","text":"","updatedAt":"2015-12-09T05:31:41.370Z","username":"anonymous"},{"createdAt":"2015-12-09T05:28:59.370Z","objectId":"hWvzGorpVD","roomname":"lobby","text":"","updatedAt":"2015-12-09T05:28:59.370Z","username":"anonymous"},{"createdAt":"2015-12-09T05:25:20.748Z","objectId":"R5Md4hi4Ke","roomname":"lobby","text":"hgfjf","updatedAt":"2015-12-09T05:25:20.748Z","username":"anonymous"}]}';
  }


  // Tell the client we are sending them plain text.
  //
  // You will need to change this if you are sending something
  // other than plain text, like JSON or HTML.
  headers['Content-Type'] = "application/json";

  // .writeHead() writes to the request line and headers of the response,
  // which includes the status and all headers.
  response.writeHead(statusCode, headers);

  // Make sure to always call response.end() - Node may not send
  // anything back to the client until you do. The string you pass to
  // response.end() will be the body of the response - i.e. what shows
  // up in the browser.
  //
  // Calling .end "flushes" the response's internal buffer, forcing
  // node to actually send all the data over to the client.
  response.end(responseContent,'application/json');
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