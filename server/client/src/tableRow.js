import React  from 'react';


function TableRow(props) {
  return (
    <tr>
        <td>{props.numList}</td>
      <td>{props.datar && props.datar.first}</td>
        <td>{props.datar && props.datar.last}</td>
        <td>{props.datar && props.datar.phone}</td>
        <td>{props.datar && props.datar.email}</td>
        <td>{props.datar && props.datar.age}</td>
        <td>{props.datar && props.datar.gender}</td>
        <td>{props.datar && props.datar.country}</td>
        <td>{props.datar && props.datar.city}</td>
     
    </tr>
  );
}
export default TableRow;
