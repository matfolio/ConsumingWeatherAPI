var React = require('react');
var ReactDOM = require('react-dom');

// Wind component
class Wind extends React.Component {
   constructor(){
       super();
   }
   render() {
      let wind = this.props
      return (
           <div>
              <h1>Wind</h1>
              <h3>Wind deg:{ wind.deg}</h3>
              <h3>Wind speed:{ wind.speed}km/h</h3>
           </div>
      )
   }
}
module.exports = Wind