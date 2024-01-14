import React from 'react'


const makanan =[
    {
        nama: "Soto",
        harga: 10000
    },
    {
        nama: "Martabak",
        harga: 11000
    },
    {
        nama: "Mie Ayam",
        harga: 8000
    },
    {
        nama: "Bakso",
        harga: 11000
    },
    {
        nama: "Batagor",
        harga: 6000
    }
]
export const Map = () => {
  return (
    <div>
        <h2>Map Sederhana</h2>

        <ul>
            {
                makanan.map(
                    (name, i)=>(
                        <li>{i+1} {name.nama} {name.harga}</li>
                    )
                )
            }
        </ul>

        <h2> Menu Makanan diatas harga 6000</h2>
        <ul>
            {
                makanan.filter((name)=> name.harga > 6000)
                .map(
                    (name, i)=>(
                        <li>{i+1} {name.nama} {name.harga}</li>
                    )
                )
            }

            <h5>Total Harganya = 
                {makanan.filter((x)=>x.harga >6000).reduce((i, harga)=> harga.harga+i,0)}</h5>
        </ul>
    </div>
  )
}
