import React from 'react'
import { Card } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';


function ItemsList({ theItems }) {

  return (
    <>

      <Zoom>
        {
          theItems && (theItems.map(item => {
            return (<Card className='mb-3 d-flex flex-md-row ' key={item.id}>
              <Card.Img variant="top" src={item.img} className='' />
              <Card.Body>
                <Card.Title className='d-flex justify-content-between'>
                  <h3 className='item-title'>{item.title}</h3>
                  <span className='text-info fw-bold'>{item.price}</span>
                </Card.Title>
                <Card.Text className='text-black-50 mt-4 lh-base'>
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>)
          })
          )
        }
      </Zoom>






    </>
  )
}

export default ItemsList