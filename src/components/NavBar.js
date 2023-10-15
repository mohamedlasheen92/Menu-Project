import React, { useState } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'

export default function NavBar({ searchFilter }) {

  const [searchWord, setSearchWord] = useState("");
  const onSearch = () => {
    searchFilter(searchWord);
    setSearchWord("");
  }
  return (
    <>

      <Navbar expand="md" className="bg-dark"  >
        <Container >
          <Navbar.Brand className='main-color fw-bold'>NewRestaurant</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className='shadow-none toggle-nav' />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex" onSubmit={(event) => event.preventDefault()}>
              <Form.Control
                type="search"
                placeholder="ex. Lunch Meal"
                className="me-3 shadow-none"
                aria-label="Search"
                value={searchWord}
                onChange={(event) => setSearchWord(event.target.value)}
              />
              <Button onClick={() => onSearch()} variant="outline-info main-color">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  )
}
