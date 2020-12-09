import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100, headerAlign: "center", align: "center" },
  { field: 'firstName', headerName: 'First name', width: 200, headerAlign: "center", align: "center" },
  { field: 'lastName', headerName: 'Last name', width: 200, headerAlign: "center", align: "center" },
  { field: 'email', headerName: 'EMail', width: 200, headerAlign: "center", align: "center" },
  { field: 'username', headerName: 'Username', width: 200, headerAlign: "center", align: "center" },
  { field: 'gender', headerName: 'Gender', width: 200, headerAlign: "center", align: "center" }
];

export default function DataTable({ rows }) {
    const empList = rows.map((employee, index) => {
    const empObj = {};
    empObj.id = index + 1;
    empObj.firstName = employee.name.first;
    empObj.lastName = employee.name.last;
    empObj.email = employee.email;
    empObj.username = employee.login.username;
    empObj.gender = employee.gender
    return empObj;
}) 
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={empList} columns={columns} pageSize={5} autoHeight />
    </div>
  );
}

