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
              <h5>Humidity: {overview.humidity}%</h5>
              <h5>pressure: { overview.pressure}</h5>
              <h5>Temp: { overview.temp } degree celcius</h5>
           </div>
      )
   }
}

module.exports = Overview