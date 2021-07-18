import React from 'react';



 function Radio(){
    const afterClick = () => {
        alert("Hi")
    }


    return (
        <div className="container mt-5">
            <div className="card mx-auto" style={{width: "25rem"}}>
                <div className="card-body">
                    <h2>Select Color:</h2>
                        <form>
                            <input type="radio" value="red" name="color"/>Red<br/>
                            <input type="radio" value="green" name="color"/>Green<br/>
                            <input type="radio" value="blue" name="color"/>Blue<br/>
                            <input type="radio" value="orange" name="color"/>Orange<br/>
                            <input type="radio" value="purple" name="color"/>Purple<br/>
                            <button onClick={afterClick} className="btn btn-sm btn-outline-secondary mt-3 mb-3" type="sumbit">Choose Color</button>
                        </form>
                </div>
            </div>
        </div>
     )
    
}



export default Radio;
    
//chooseColor(e) {
//       console.log(e.target.value);
//     }
  
//     render() {
//       return (
//         <div className="container mt-5">
//         <div className="card">
//           <form>
//          
//             <input type="radio" value="red" name="color"/>Red<br/>
//             <input type="radio" value="green" name="color"/>Green<br/>
//             <input type="radio" value="blue" name="color"/>Blue<br/>
//             <input type="radio" value="orange" name="color"/>Orange<br/>
//             <input type="radio" value="purple" name="color"/>Purple<br/>
//             <h3></h3>
//             <button className="btn btn-sm btn-outline-secondary mt-3 mb-3" type="sumbit">Choose Color</button>
//             <p></p>
//           </form>
//           </div>
//         </div>
//       )
//     }