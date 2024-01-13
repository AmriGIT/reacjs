// import React, { Component } from 'react'

// export default class Operan extends Component {
//     gantiMakanan(makanan){
//         this.setState({
//             makanan: makanan
//         })
//     }
//   render() {
//     return (
//       <div>
//         <h2>Operan Makanan State Menjadi Props : {this.props.makanan}</h2>
//         <h2>Operan State Minuman Menjadi Props : {this.props.minuman}</h2>

//         <button onClick={()=>this.props.gantiMakanan("Soto Besars")}>ganti maem</button>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'

export default class Operan extends Component {
  render() {
    return (
      <div>
        <p>Opera Mau Menu Makanan ini {this.props.makanan}</p>

        <button onClick={()=>this.props.gantiMakanan("Gorengan")}>Opera Juga Mau Ganti Menu Makanan</button>
      </div>
    )
  }
}
