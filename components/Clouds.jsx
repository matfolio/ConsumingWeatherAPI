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
              <p>cloud: { cloud.all}</p>
           </div>
      )
   }
}

module.exports = Cloud