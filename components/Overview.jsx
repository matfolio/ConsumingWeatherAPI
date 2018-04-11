var React = require('react');
var ReactDOM = require('react-dom');

// Declaring the component for the main Weather features.
class Overview extends React.Component {
   constructor(){
       super();
   }
   render() {
      let overview = this.props;
      return (
           <div>
              <h1>Weather info for: { this.props.name}</h1>
              <h3>Humidity: {overview.humidity}%</h3>
              <h3>pressure: { overview.pressure}</h3>
              <h3>Temp: { overview.temp } degree celcius</h3>
           </div>
      )
   }
}

module.exports = Overview