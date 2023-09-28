import React, { Component } from 'react';
import {ProductConsumer} from './Context';
import { Table,Button} from 'react-bootstrap' 

export default class Home extends Component {
  render(){
    return (
      <div className="container">
        <h3>Bikes List </h3>
        <ProductConsumer>
          {(Value) => {
            return (
              <Table size="sm" variant="dark" striped bordered hover>
                <tbody>
                  <tr>
                    <th>Tittle</th>
                    <th>Information</th>
                    <th>Company</th>
                    <th>Model</th>
                    </tr>
                    {value.Alldata.map(product => {
                   return(
                     <tr>
                       <td>{product.tittle}</td>
                       <td>{product.info}</td>
                       <td>{product.Price}</td>
                       <td>{product.Company}</td>
                       </tr>
                   )
                    })}
                    </tbody>
                    </Table>
            )
          
          </ProductConsumer>
          </div>
    )
  }
  }