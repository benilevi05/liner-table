import React, { useEffect } from 'react'
import { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material'
import LinerList from './companies.json'

const tableHeaderCellStyle = { textAlign: "center", fontWeight: "bold", textDecoration: "underline" }

const LinerTable = () => {
  const [data, setData] = useState('')
  const getData = (val) => {
    setData(val.target.value)
  }

  const [filteredList, setFilteredList] = useState([]);
  // const filteredList = []
  const filterData = () => {
    // LinerList.forEach((item) => {
    //   if (data === '') {
    //     filteredList.push(item);
    //   } else if (item.name.toLowerCase().trim().includes(data.trim().toLowerCase())) {

    //     filteredList.push(item);
    //   }
    // })
    return (data === '') ? LinerList : LinerList.filter((item) => item.name.toLowerCase().includes(data.trim().toLowerCase()))

  }


  useEffect(() => {
    // filterData();
    setFilteredList(filterData());
  }, [data])

  useEffect(() => {
    console.log(data)
  }, [data], filterData)

  return (
    <div>
      <Box sx={{ alignItems: "right" }}>
        <input type="text" id="test4" onChange={getData}></input>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#66bb6a" }}>
              <TableCell sx={tableHeaderCellStyle}>Rank</TableCell>
              <TableCell id="test3" sx={tableHeaderCellStyle}>Logo</TableCell>
              <TableCell sx={tableHeaderCellStyle}>Name</TableCell>
              <TableCell sx={tableHeaderCellStyle}>Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>


            {filteredList.map((liner) => (
              <TableRow key={liner.id}>
                <TableCell sx={{ textAlign: "center" }}>{liner.id}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>{<img alt={liner.name} style={{ objectFit: 'scale-down', height: 60, width: 60 }} src={liner.logo} />}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>{liner.name}</TableCell>
                <TableCell sx={{ textAlign: "center" }}><a href={liner.siteLink} target="_blank" rel='noreferrer'>{liner.fullName}</a></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default LinerTable