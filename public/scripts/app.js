'use strict';

// JSX - JavaScript XML
var app = {
  title: 'Indecision App',
  subtitle: 'This is some info'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

var user = {
  name: 'Robin',
  age: 20,
  location: 'Chandigarh'
};

function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'Unknown';
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name.toUpperCase()
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    getLocation(user.location)
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
