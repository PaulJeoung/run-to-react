import React, { Component } from "react";
import { Table } from "reactstrap";

class R054_ReactstrapTable extends Component {
    render() {
        return (
            <Table dark bordered striped hover borderless size="lg">
                <thead>
                    <tr>
                        <th>number</th>
                        <th>Book Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>React 100</td>
                        <td>10,000원</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>React 200</td>
                        <td>20,000원</td>
                    </tr>
                </tbody>
            </Table>
        )
    }
}

export default R054_ReactstrapTable;