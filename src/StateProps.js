// import React, { Component } from 'react'
// import Operan from './Operan';

// export default class StateProps extends Component {
//     constructor(props){
//         super(props);
//         this.state ={
//             makanan : 'Bakso',
//             minuman : 'susu'
//         }
//     }

//     gantiMakanan =(makanan)=>{
//         this.setState({
//             makanan : makanan
//         })
//     }
//   render() {
//     return (
//         <div>
//             <h2>{this.state.makanan}</h2>
//             <button onClick={()=> this.gantiMakanan("Soto")}>Ganti Makanan</button>
//             <Operan
//             makanan={this.state.makanan}
//             minuman={this.state.minuman}
//             gantiMakanan={this.gantiMakanan}/>
//         </div>
//     )
//   }
// }


import React, { Component } from 'react'
import Operan from './Operan'

export default class StateProps extends Component {
    constructor(props){
        super(props)
        this.state=({
            makanan: 'Bakso'
        })
    }

    gantiMakanan=(maem)=>{
        this.setState({
            makanan:maem
        })
    }

  render() {
    return (
      <div>
        <p>
            Ini Menu Makanan Kita {this.state.makanan}
            <button onClick={()=>this.gantiMakanan("superMie")}>Ganti Maem</button>
        </p>
        <Operan
        makanan={this.state.makanan}
        gantiMakanan={this.gantiMakanan}
        />
      </div>
    )
  }
}



