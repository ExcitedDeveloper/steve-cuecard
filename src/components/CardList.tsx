import React, { useEffect } from "react"
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"
import useConvert from "../utils/useConvert"

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", hide: true },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
]

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 20, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 30, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 40, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 50, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 60, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 70, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 80, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 90, lastName: "Roxie", firstName: "Harvey", age: 65 },
]

export default function CardList() {
  const { isLoading, data, error } = useConvert(
    "C:\\Users\\Home\\Documents\\CueCard\\CSS.wcu"
  )

  useEffect(() => {
    if (error) {
      console.error("error", error)
    } else if (!isLoading) {
      console.log(`data`, data)
    }
  }, [isLoading, data, error])

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
    </div>
  )
}
