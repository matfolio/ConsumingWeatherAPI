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
              <p>Wind deg:{ wind.deg}</p>
              <p>Wind speed:{ wind.speed}km/h</p>
           </div>
      )
   }
}
module.exports = Wind