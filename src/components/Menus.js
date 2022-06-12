import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { numberWithCommas } from "../utils/util";
const Menus = ({ menu }) => {
    return (
        <Col className='mb-4' md={4} xs={6}>
            <Card className='shadow'>
                <Card.Img variant="top" src={"assets/images/" + menu.category.nama.toLowerCase()+"/"+menu.gambar} />
                {console.log}
                <Card.Body>
                    <Card.Title>{menu.nama}</Card.Title>
                    <Card.Text>
                        Rp. {numberWithCommas(menu.harga)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Menus