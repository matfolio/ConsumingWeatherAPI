var React = require('react');
var ReactDOM = require('react-dom');
var Wind = require('../components/Wind.jsx');
var Clouds = require('../components/Clouds.jsx');
var Overview = require('../components/Overview.jsx');
const styles = require('./inlinestyle.js');

class Weather extends React.Component {
  constructor(){
  	super();
    this.state = {
      res:{},
      city:""
    }
    this.handleFetch = this.handleFetch.bind(this);
    this.getCityName = this.getCityName.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount(){
  }

  // using the ES6 async feauture to asynchronously fetch data from the API.

  async handleFetch(){
    if(this.state.city.length != 0){
      let result = await this.fetchData();
      this.setState({res:result});
    }
    
  }

  getCityName(e){
    this.setState({city:e.target.value});
  }

  fetchData(){
    let output = fetch(`http://localhost:3000/city/${this.state.city}`).then(function(response){
        return response.json();
      }).then(function(result){
        return result;

      }.bind(this));

      return output;
  }
  render() {
    let {main,wind,clouds,name} = this.state.res;
    return (
      <div className= "container">
        <div className="row">
          <div className="col-sm-8">
              <input type ="text" style={styles.input} placeholder="Enter city name" onChange={this.getCityName}/>
          </div>
        </div>
        <button className="btn btn-success" style={styles.button}  onClick={this.handleFetch}>Get Weather Info</button>
        <div className="row">
          <div className="col-sm-3" style={styles.content}>
            <Overview {...main} name= {this.state.res.name}/>
          </div>
          <div className="col-sm-3" style={styles.content}>
            <Clouds {...clouds}/>
          </div>
          <div className="col-sm-3" style={styles.content}>
            <Wind {...wind}/>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
    <Weather/> , document.getElementById("demo"));

//module.exports = Weather