import React, { useState } from 'react'
import Layouts from '../master/Layouts'
import { Rating } from 'react-simple-star-rating'
import { Accordion, Badge, ListGroup, Card } from "react-bootstrap";

function Detail() {
  const [rating,] = useState(4.0)

  return (
    <Layouts>
      <div className='container pb-5 pt-3'>

        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/courses">Courses</a></li>
            <li className="breadcrumb-item active" aria-current="page">
              Web Development Bootcamp 2025
            </li>
          </ol>
        </nav>

        <div className='row my-5'>
          {/* LEFT CONTENT */}
          <div className='col-lg-8'>
            <h2>Web Development Bootcamp 2025</h2>

            <div className='d-flex'>
              <div className='mt-1'>
                <span className="badge bg-success">Programming</span>
              </div>
              <div className='d-flex ps-3'>
                <div className="pe-2 pt-1">5.0</div>
                <Rating initialValue={rating} size={20} readonly />
              </div>
            </div>

            {/* Course Info */}
            <div className="row mt-4">
              <div className="col">
                <span className="text-muted d-block">Level</span>
                <span className="fw-bold">Advance</span>
              </div>
              <div className="col">
                <span className="text-muted d-block">Students</span>
                <span className="fw-bold">150,668</span>
              </div>
              <div className="col">
                <span className="text-muted d-block">Language</span>
                <span className="fw-bold">English</span>
              </div>
            </div>

            {/* Overview */}
            <div className='mt-4 border bg-white rounded-3 p-4'>
              <h4>Overview</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Vivamus tincidunt eros et libero posuere.</p>
            </div>

            {/* What you will learn */}
            <div className='mt-4 border bg-white rounded-3 p-4'>
              <h4>What you will learn</h4>
              <ul className="list-unstyled">
                <li>✔ Programming fundamentals</li>
                <li>✔ Build real projects</li>
                <li>✔ Modern web technologies</li>
              </ul>
            </div>

            {/* Requirements */}
            <div className='mt-4 border bg-white rounded-3 p-4'>
              <h4>Requirements</h4>
              <ul className="list-unstyled">
                <li>✔ PC or Laptop</li>
                <li>✔ Internet connection</li>
              </ul>
            </div>

            {/* Course Structure */}
            <div className='mt-4 border bg-white rounded-3 p-4'>
              <h4>Course Structure</h4>

              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Module 1: Introduction
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup>
                      <ListGroup.Item className="d-flex justify-content-between">
                        What is Web Development?
                        <Badge bg="primary">Preview</Badge>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Module 2: HTML & CSS
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup>
                      <ListGroup.Item>HTML Basics</ListGroup.Item>
                      <ListGroup.Item>CSS Basics</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            {/* Reviews */}
            <div className='mt-4 border bg-white rounded-3 p-4'>
              <h4>Reviews</h4>

              <div className="d-flex mt-3">
                <img src="https://placehold.co/50" className="rounded-circle me-3" />
                <div>
                  <h6>Mohit Singh</h6>
                  <Rating initialValue={rating} size={18} readonly />
                  <p>Very good course 🔥</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className='col-lg-4'>
            <Card className="shadow-sm">
              <Card.Body>
                <h3 className="fw-bold">$100</h3>
                <div className="text-muted text-decoration-line-through">$200</div>

                <button className="btn btn-primary w-100 mt-3">
                  Buy Now
                </button>
              </Card.Body>

              <Card.Footer className="bg-white">
                <h6>This course includes</h6>
                <ListGroup variant="flush">
                  <ListGroup.Item>✔ Lifetime access</ListGroup.Item>
                  <ListGroup.Item>✔ Mobile & TV access</ListGroup.Item>
                  <ListGroup.Item>✔ Certificate</ListGroup.Item>
                </ListGroup>
              </Card.Footer>
            </Card>
          </div>

        </div>
      </div>
    </Layouts>
  )
}

export default Detail
