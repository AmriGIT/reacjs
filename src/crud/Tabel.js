import React from "react";
import { Table } from "react-bootstrap";

export const Tabel = ({makanan, editData}) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama Makanan</th>
          <th>Deskripsi</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
          {
            makanan.map((makanan, index)=>{
              return(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{makanan.nama}</td>
                  <td>{makanan.deskripsi}</td>
                  <td>{makanan.harga}</td>
                  <td>
                    <button className="btn btn-warning" onClick={()=>editData(makanan.id)}>Edit</button>
                  </td>
                </tr>
              )
            })
          }
      </tbody>
    </Table>
  );
};
