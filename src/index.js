import React from "react";
import ReactDOM from "react-dom";
import DataTable from "./dataTable.js";

import "semantic-ui-css/semantic.min.css";

import { Container, Segment } from "semantic-ui-react";

var people = [
  { id: "1", name: "Michael", age: "26", gender: "Male" },
  { id: "2", name: "Maria", age: "32", gender: "Female" },
  { id: "3", name: "Jongku", age: "35", gender: "Male" }
];

function App() {
  return (
    <Container text style={{ marginTop: "4em" }}>
      <Segment>
        <DataTable value={people} var="person">
          <dataTableColumn headerName="Id" var="id" />
          <dataTableColumn headerName="Name" var="name" />
          <dataTableColumn headerName="Age" var="age" />
          <dataTableColumn headerName="Gender" var="gender" />
          <dataTableColumn var="Purposeful error" />
        </DataTable>
      </Segment>
    </Container>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
