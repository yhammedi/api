import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Cards({car}) {
    let navigate=useNavigate()
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{car.name}</Card.Title>
      <Card.Title>{car.address.street}</Card.Title>
      <Card.Title>{car.address.zipcode}</Card.Title>
      <Card.Text>
        {car.email}
      </Card.Text>
      <Button variant="primary" onClick={()=>navigate(`/userList/profile/${car.id}`)} >Go somewhere</Button>
    </Card.Body>
  </Card>
  )
}

export default Cards