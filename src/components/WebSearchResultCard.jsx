import React from 'react';
import Card from 'react-bootstrap/Card';


function WebSearchResultCard({ page }) {
  console.log(page);

  return (
    <>
      {/* <p>hi</p> */}
      <a href={page.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none"  >
        <Card className="col-12 d-flex flex-row align-items-center mb-3 shadow-sm">
          <Card.Img className="p-3" variant="top" src={page.imgUrl} style={{ "width": "200px" }} alt="Search result related image" />
          <Card.Body>
            <Card.Title className="text-primary">{page.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted text-primary-emphasis">{page.name}</Card.Subtitle>
            <Card.Text>
              {page.snippet}
            </Card.Text>
          </Card.Body>
        </Card>
      </a>
    </>
  );
}

export default WebSearchResultCard;