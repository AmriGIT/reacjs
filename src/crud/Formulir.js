import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const Formulir = ({nama, harga, deskripsi, handleSubmit, handleChange}) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h4>Tambah Data</h4>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                value={nama}
                onChange={(event) => handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="deskripsi"
                value={deskripsi}
                onChange={(event)=> handleChange(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                name="harga"
                value={harga}
                onChange={(event)=> handleChange(event)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submits
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
