import React from 'react'
import { Button,Stack} from '@mui/material'

const Muibuttons = () => {

    //this is a comment
  return (
    <div>
    <Stack spacing={4} direction ='row'>
        <Button variant='text' href = ''>this is a text</Button>
        <Button variant='contained'>this is a contained button</Button>
        <Button variant='outlined'>this is a outlined button</Button>
    </Stack>

    <Stack spacing={2} direction ='row'>
        <Button variant='contained' color = 'primary'>primary</Button>
        <Button variant='contained' color = 'secondary'>secondary</Button>
        <Button variant='contained' color = 'info'>Info</Button>
        <Button variant='contained' color = 'success'>Success</Button>
    </Stack>



    <Stack display='block' spacing = {2} direction = 'row' padding = {4}>
        <Button variant='contained' size = 'small'>small button</Button>
        <Button variant='contained' color = 'error' size = 'medium'>medium button</Button>
        <Button variant='contained' color = 'warning' size = 'large'>large button</Button>

    </Stack>
    </div>
  )
}

export default Muibuttons