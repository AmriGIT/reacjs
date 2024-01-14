import React, { Component } from 'react'
import SubLifecycle from './SubLifecycle'

export default class Lifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         makanan: "Bakso",
         data: {},
         tampilHalaman: false
      }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        this.setState({
            data:json
        })
      })
    }
    

    // ubahMakanan=(value)=>{ //Arrow Function
    //   this.setState({
    //     makanan:value
    //   })
    // }

    ubahMakanan(value){ //funct standar
      this.setState({
        makanan:value
      })
    }

  render() {
    console.log("data", this.state.data)
    return (
      <div>
        <p>Hasil Enpoint</p>
        {this.state.makanan}  

        {

        this.state.tampilHalaman && 
        // <SubLifecycle ubahMakanan={this.ubahMakanan }/> //Apabila menggunakan arrow function cukup memanggil object

        <SubLifecycle ubahMakanan={(x)=>this.ubahMakanan(x)}/> //apabila object funct standar maka memanggila menggunakan arrow func
        
        }
        <button onClick={()=>this.setState({tampilHalaman: !this.state.tampilHalaman})}>Halaman SubCycle</button>
       </div>
    )
  }
}
