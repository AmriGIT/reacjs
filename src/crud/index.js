import React, { Component } from "react";
import { NavbarComponent } from "./NavbarComponent";
import { Tabel } from "./Tabel";
import { Formulir } from "./Formulir";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makanan: [],
      nama: "",
      deskripsi: "",
      harga: 0,
      id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.id !== "") {
      const dataMakanan = this.state.makanan
        .filter((x) => x.id !== this.state.id)
        .map((x) => x);
      console.log("dapat data yang mau edit", dataMakanan);
      this.setState({
        makanan: [
          ...dataMakanan,
          {
            id: this.state.id,
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
          },
        ],
      });
    } else {
      this.setState({
        makanan: [
          ...this.state.makanan,
          {
            id: this.state.makanan.length + 1,
            nama: this.state.nama,
            harga: this.state.harga,
            deskripsi: this.state.deskripsi,
          },
        ],
      });
    }
    this.setState({
      id : "",
      nama: "",
      harga: "",
      deskripsi: "",
    });
  };

  editData = (id) => {
    const dataMakanan = this.state.makanan
      .filter((idx) => idx.id === id)
      .map((xc) => xc);
    console.log("data yang mau diedit", dataMakanan);

    this.setState({
      id: dataMakanan[0].id,
      nama: dataMakanan[0].nama,
      harga: dataMakanan[0].harga,
      deskripsi: dataMakanan[0].deskripsi,
    });
  };

  render() {
    return (
      <div>
        <NavbarComponent />
        <div className="container mt-4">
          <Tabel makanan={this.state.makanan} editData={this.editData} />
          <Formulir
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
