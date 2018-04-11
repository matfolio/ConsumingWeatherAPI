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
              <h4>Wind</h4>
              <h5>Wind deg:{ wind.deg}</h5>
              <h5>Wind speed:{ wind.speed}km/h</h5>
           </div>
      )
   }
}
module.exports = Wind