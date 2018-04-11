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
              <h4>Weather info for: { this.props.name}</h4>
              <p>Humidity: {overview.humidity}%</p>
              <p>pressure: { overview.pressure}</p>
              <p>Temp: { overview.temp } degree celcius</p>
           </div>
      )
   }
}

module.exports = Overview