function TableRow(props) {
  return (
    <tr>
        <td>{props.numList}</td>
      <td>{props.datar && props.datar.name.first}</td>
        <td>{props.datar && props.datar.name.last}</td>
        <td>{props.datar && props.datar.phone}</td>
        <td>{props.datar && props.datar.email}</td>
        <td>{props.datar && props.datar.dob.age}</td>
        <td>{props.datar && props.datar.gender}</td>
        <td>{props.datar && props.datar.location.country}</td>
        <td>{props.datar && props.datar.location.city}</td>
     
    </tr>
  );
}
export default TableRow;
