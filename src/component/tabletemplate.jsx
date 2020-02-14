import React, { Component } from "react";
import Table from "react-bootstrap/Table";

class TableTemplate extends Component {

  renderRows(jira, index) {
    return (
      <tr>
          <td>{index + 1}</td>
          <td>{jira.jiraNumber}</td>
          <td>{jira.jiraTitle}</td>
          <td>{jira.status}</td>
      </tr>
    )
  }



  render() { 
    return (

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Jira Number</th>
            <th>Jira Tilte</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {this.props.value.map(this.renderRows)}
        </tbody>
      </Table>
    );
  }
}

export default TableTemplate;
