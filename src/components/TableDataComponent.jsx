import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DataTable from "react-data-table-component";
import "./DataTableWrapper.css";

const customStyles = {
  rows: {
    style: {
      minHeight: "55px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      textSize: "80px",
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Director",
    selector: (row) => row.director,
    sortable: true,
  },
  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
  {
    name: "Director",
    selector: (row) => row.director,
    sortable: true,
  },
  {
    name: "Director",
    selector: (row) => row.director,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    director: "Tim Burton",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    director: "Ivan Re",
    year: "1984",
  },
  {
    id: 1,
    title: "Beetlejuice",
    director: "Tim Burton",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    director: "Ivan Re",
    year: "1984",
  },
  {
    id: 1,
    title: "Beetlejuice",
    director: "Tim Burton",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    director: "Ivan Re",
    year: "1984",
  },
  {
    id: 1,
    title: "Beetlejuice",
    director: "Tim Burton",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    director: "Ivan Re",
    year: "1984",
  },
  {
    id: 1,
    title: "Beetlejuice",
    director: "Tim Burton",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    director: "Ivan Re",
    year: "1984",
  },
  {
    id: 1,
    title: "Beetlejuice",
    director: "Tim Burton",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    director: "Ivan Re",
    year: "1984",
  },
  {
    id: 1,
    title: "Beetlejuice",
    director: "Tim Burton",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    director: "Ivan Re",
    year: "1984",
  },
  {
    id: 1,
    title: "Beetlejuice",
    director: "Tim Burton",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    director: "Ivan Re",
    year: "1984",
  },
  {
    id: 1,
    title: "Beetlejuice",
    director: "Tim Burton",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    director: "Ivan Re",
    year: "1984",
  },
  {
    id: 1,
    title: "Beetlejuice",
    director: "Tim Burton",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    director: "Ivan Re",
    year: "1984",
  },
  {
    id: 1,
    title: "Beetlejuice",
    director: "Tim Burton",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    director: "Ivan Re",
    year: "1984",
  },
  {
    id: 1,
    title: "Beetlejuice",
    director: "Tim Burton",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    director: "Ivan Re",
    year: "1984",
  },
  {
    id: 1,
    title: "Beetlejuice",
    director: "Tim Burton",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    director: "Ivan Re",
    year: "1984",
  },
  {
    id: 1,
    title: "Beetlejuice",
    director: "Tim Burton",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    director: "Ivan Re",
    year: "1984",
  },
  {
    id: 1,
    title: "Beetlejuice",
    director: "Tim Burton",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    director: "Ivan Re",
    year: "1984",
  },
];

// data provides access to your row data
const ExpandedComponent = ({ data }) => {
  //   return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return (
    // <div>
    //     <p>Expanded Component</p>
    //     <pre>{data.title}</pre>
    // </div>
    <Container style={{paddingLeft: "3rem"}}>
      {/* <Row>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row> */}
      <Row>
        <Col>
          <div style={{display: "flex", padding: "10px"}}>
            <h6>Id:</h6>
            <h6 style={{paddingLeft: "5px"}}>{data.id}</h6>
          </div>
        </Col>
        <Col>
          <div style={{display: "flex", padding: "10px"}}>
            <h6>Title:</h6>
            <h6 style={{paddingLeft: "5px"}}>{data.title}</h6>
          </div>
        </Col>
        <Col>
          <div style={{display: "flex", padding: "10px"}}>
            <h6>Director:</h6>
            <h6 style={{paddingLeft: "5px"}}>{data.director}</h6>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div style={{display: "flex", padding: "10px"}}>
            <h6>Year:</h6>
            <h6 style={{paddingLeft: "5px"}}>{data.year}</h6>
          </div>
        </Col>
        <Col>
          <div style={{display: "flex", padding: "10px"}}>
            <h6>Title:</h6>
            <h6 style={{paddingLeft: "5px"}}>{data.title}</h6>
          </div>
        </Col>
        <Col>
          <div style={{display: "flex", padding: "10px"}}>
            <h6>Title:</h6>
            <h6 style={{paddingLeft: "5px"}}>{data.title}</h6>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export const TableDataComponent = () => {
  return (
    <DataTable
      className="dataTables_wrapper"
      title="Adjustments Table"
      columns={columns}
      data={data}
      expandableRows
      expandableRowsComponent={ExpandedComponent}
      customStyles={customStyles}
      pagination
    />
  );
};
