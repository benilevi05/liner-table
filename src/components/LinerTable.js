import React, { useEffect } from 'react'
import { useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from '@mui/material'
import LinerList from './companies.json'
import Button from './Button'

const tableHeaderCellStyle = { textAlign: "center", fontWeight: "bold", textDecoration: "underline" }



// const [linerNameArray, setlinerName] = useState([])

const LinerTable = () => {
  const [globalList, setGlobalList] = useState(LinerList)
  const [filteredList, setFilteredList] = useState(LinerList)
  const [orderedList, setOrderedList] = useState(LinerList)
  const [search, setSearch] = useState('')
  const [input, setInput] = useState('')

  useEffect(() => {
    setFilteredList((search === '') ? LinerList : LinerList.filter((item) => item.name.toLowerCase().includes(search.trim().toLowerCase())))
    setInput('filter')
  }, [search])

  const order = () => {
    setOrderedList(globalList.sort((a, b) => (a.name > b.name ? 1 : -1)))
    setInput('order')

  }
  // useReducer()
  useEffect(() => {
    if (input === 'order') {
      setGlobalList(orderedList)
    }
  }, [orderedList])
  useEffect(() => {
    if (input === 'filter') {
      setGlobalList(filteredList)
    }
  }, [filteredList])

  return (
    <div>
      <div>
        <Button text="Sort by Name" onClick={order} />
        <Box sx={{ textAlign: "right" }}>
          <input type="text" id="test4" onChange={(event) => { setSearch(event.target.value); }}></input>
        </Box>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table" id="root">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#66bb6a" }}>
              <TableCell sx={tableHeaderCellStyle}>Rank</TableCell>
              <TableCell id="test3" sx={tableHeaderCellStyle}>Logo</TableCell>
              <TableCell sx={tableHeaderCellStyle}>Name</TableCell>
              <TableCell sx={tableHeaderCellStyle}>Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>


            {globalList.map((liner) => (
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