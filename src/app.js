// JSX - JavaScript XML
var app = {
  title: 'Indecision App',
  subtitle: 'This is some info'
}

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Robin',
  age: 20,
  location: 'Chandigarh'
}

function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'Unknown';
  }
}

var templateTwo = (
  <div>
    <h1>{user.name.toUpperCase()}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
