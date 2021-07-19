import React from 'react'
import "./radio.css"

class Radio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: ""
        };

        this.onColorChoice = this.onColorChoice.bind(this);
        this.colorSumbit = this.colorSumbit.bind(this);
    }


  onColorChoice(event) {
      this.setState({
         selectedColor: event.target.value});
  }

  colorSumbit(event) {
   event.preventDefault();
   console.log(this.state.selectedColor)   
}

    render() {
        return (
        <div className="container mt-5">
            <div className="card mx-auto" style={{width: "25rem"}}>
                <div className="card-body">
                    <h2>Select Color:</h2>
                        <form onSubmit={this.colorSumbit}>
                            <input type="radio" value="red" name="color"
                            checked={this.state.selectedColor === "red"}
                            onChange={this.onColorChoice}/>
                            <label>Red</label><br/>

                            <input type="radio" value="green" name="color"
                            checked={this.state.selectedColor === "green"}
                            onChange={this.onColorChoice}/>
                            <label>Green</label><br/>

                            <input type="radio" value="blue" name="color"
                            checked={this.state.selectedColor === "blue"}
                            onChange={this.onColorChoice}/>
                            <label>Blue</label><br/>

                            <input type="radio" value="orange" name="color"
                            checked={this.state.selectedColor === "orange"}
                            onChange={this.onColorChoice}/>
                            <label>Orange</label><br/>

                            <input type="radio" value="purple" name="color"
                            checked={this.state.selectedColor === "purple"}
                            onChange={this.onColorChoice}/>
                            <label>Purple</label><br/>

                            <p id="hidden">You've chosen the color </p>

                            <button onClick={this.colorSumbit} className="btn btn-sm btn-outline-secondary mt-3 mb-3">Choose Color</button>
                        </form>
                </div>
            </div>
        </div>
     )
    
    }
}


export default Radio;