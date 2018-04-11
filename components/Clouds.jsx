var React = require('react');
var ReactDOM = require('react-dom');


// declaring the component for the cloud info.
class Cloud extends React.Component {
   constructor(){
       super();
   }
   render() { 
      let cloud = this.props;  
      return (
           <div>
              <h4>Clouds</h4>
              <h5>cloud: { cloud.all}</h5>
           </div>
      )
   }
}

module.exports = Cloud