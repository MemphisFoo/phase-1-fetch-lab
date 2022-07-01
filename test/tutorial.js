
fetch("string representing a URL to a data source")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // Use the data from the response to do DOM manipulation
  });

//   Here we are calling `fetch()` and passing a URL to a data source as the
//   argument. The function call returns a Promise object that represents what the data
//   source sent back. It does *not* return the actual content. (More about this
//   later.)

fetch("string representing a URL to a data source")


//     Next, we call the `then()` method on the Promise object returned by calling
//     `fetch()`. `then()` takes one argument: a callback function. 
//     (More on Promises later!)

//     Inside the callback function, we do whatever processing we need on the
//     object, in this case, converting it from JSON using the built-in `json()`
//     method. (Another commonly-used method is `text()`, which will convert the
//     response into plain text.) The `json()` method returns a Promise, which we
//     return from our callback function.

//     Note that we *have to return* the content that we've gotten out of the
//     response and converted from JSON in order to use the data in the next then()
//     method call.

//     This first callback function is usually only one line: returning the 
//     content from the response after converting it into the format we need.
//   
  .then(function (response) {
    return response.json();
  })
//   
//     This time, the `then()` method is receiving the object that we returned from the
//     first call to `then()` (our parsed JSON object). We capture the object in the
//     parameter `data` and pass it into a second callback function, where we will
//     write code to do DOM manipulation using the data returned from the server
//   
  .then(function (data) {
    // Use the actual data to do DOM manipulation
  });

// Top Tip: As always, we can name the parameters being used in our callback functions anything we like, 
// but you will often see response (or resp) and data used.

// Filling Out the Example
// Let's fill out our base skeleton.

// First, we'll provide a String argument to fetch(). 
// As it happens, http://api.open-notify.org/astros.json will provide a list of the humans in space. 
// You can paste this URL into a browser tab and see that the data uses a JSON structure.

// JSON is a way to send a collection of data in the internet, formatted as a String. 
// It just so happens that this string is written in a way that would be valid JavaScript syntax for an Object instance. 
// Thus the name "JavaScript Object Notation", or JSON ("jay-sawn"). 
// Programmers find it very easy to think about JavaScript Objects, so they often send "stringified" versions of Objects as responses.

// The then() method takes a callback function as an argument. 
// Here is where you tell JavaScript to parse the network response, which is formatted as a special JSON string, into actual JavaScript objects. 
// When you first start using fetch(), most of your first then()s are going have a callback function that looks like this:

function(response) {
  /* take the response, which is a JSON-formatted **string**,
   and parse it into an actual JavaScript **object***/
  return response.json();
}

// The final then() is when you actually get some data (the parsed object returned from the first then()) passed in. 
// You can then do something with that data. 
// The easiest options are:

// *** alert() the data
// *** console.log() the data
// *** hand the data off to another function.

// We'll go for the console.log() approach:

function(data) {
  console.log(data)
}
// STRETCH: But you should be able to imagine that you could do some DOM manipulation instead.

// Here's a completed example:

fetch("http://api.open-notify.org/astros.json")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

//   Let's perform a demonstration. 
//   Navigate to http://open-notify.org (Links to an external site.) in an incognito tab. 
//   We need to go incognito to make sure that none of your browsing history interferes with this experiment.

//   Open up DevTools and paste the following into the console:
  
  fetch("http://api.open-notify.org/astros.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(`Holy cow! There are ${data["number"]} humans in space.`);
    });
  
//   You might notice in the DevTools console that this chained method call returned a Promise. 
//   We'll cover that later.

fetch("http://api.open-notify.org/astros.json")
.then(function (response) {
    return response.json();
})
.then(function(data){
    console.log(data)
});