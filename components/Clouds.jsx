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
              <h1>Clouds</h1>
              <h3>cloud: { cloud.all}</h3>
           </div>
      )
   }
}

module.exports = Cloud