import React from "react";
import { Table, Dimmer, Loader } from "semantic-ui-react";

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    let aux = this.props.children;
    let children = aux ? (aux instanceof Array ? aux : new Array(aux)) : [];
    this.state = { children: children };
    console.log(children);
  }
  componentDidMount() {}

  getHeaderCells() {
    let headerCells = [];
    let propHeaders = this.state.children;
    for (let i = 0; i < propHeaders.length; i++) {
      let columnName = propHeaders[i].props.headerName;
      headerCells.push(
        <Table.HeaderCell>
          {columnName ? columnName : "Column" + i}
        </Table.HeaderCell>
      );
    }
    return headerCells;

    //   return this.state.children.map(child => (
    //     <Table.HeaderCell> {child.props.headerName}</Table.HeaderCell>
    //   ));
  }

  getRows() {
    let values = this.props.value;
    let columns = this.state.children;

    if (values) {
      return values.map(function(val) {
        return (
          <Table.Row>
            {columns.map(function(child) {
              return (
                <Table.Cell>
                  {val[child.props.var]
                    ? val[child.props.var]
                    : "No property '" + child.props.var + "'"}
                </Table.Cell>
              );
            })}
          </Table.Row>
        );
      });
    } else {
      return (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }
  }

  render() {
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>{this.getHeaderCells()}</Table.Row>
          </Table.Header>
          <Table.Body>{this.getRows()}</Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell
                colSpan={this.state.children ? this.state.children.length : 0}
              >
                Rows: {this.props.value ? this.props.value.length : 0}
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }
}

export default DataTable;
