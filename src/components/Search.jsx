import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import img from '../assets/logo.jpeg';
import SearchResults from './SearchResults';


function Search() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const baseUrl = "https://api.bing.microsoft.com/";
  const path = `/v7.0/search?q='${searchText}'`;
  const options = {
    method: "GET",
    headers: { "Ocp-Apim-Subscription-Key": process.env.REACT_APP_API_KEY }
  }

  function handleInput(event) {
    setSearchText(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch(`${baseUrl}${path}`, options);
    const data = await response.json();
    setSearchResults(data);

    event.target.reset();
  }

  return (
    <div className='mt-5'>
      <div className='mb-3 text-center'>
        <img src={img} alt="mega man" className='mx-auto' style={{ "width": "500px" }} />
      </div>
      <Card className='col-12 shadow mb-5'>
        <Card.Body>
          <Card.Title>Artech Search | Powered by Bing</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" onChange={handleInput} placeholder="What would you like to search for?" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Card.Body>
      </Card>
      {searchResults ? <SearchResults searchResults={searchResults} /> : null}
    </div>
  );
}

export default Search;