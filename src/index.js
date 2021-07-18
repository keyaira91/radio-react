import React from 'react';
import ReactDOM from 'react-dom';

class Radio extends React.Component {
  chooseColor(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="container mt-5">
      <div className="card" onChange={this.chooseColor.bind(this)}>
        <form className="card-body">
        <h2>Select Color:</h2>
          <input type="radio" value="red" name="color"/>Red<br/>
          <input type="radio" value="green" name="color"/>Green<br/>
          <input type="radio" value="blue" name="color"/>Blue<br/>
          <input type="radio" value="orange" name="color"/>Orange<br/>
          <input type="radio" value="purple" name="color"/>Purple<br/>
          <h3></h3>
          <button className="btn btn-sm btn-primary mt-3 mb-3">Choose Color</button>
          <p></p>
        </form>
        </div>
      </div>
    )
  }
}








ReactDOM.render(<Radio/>, document.getElementById('root')
);