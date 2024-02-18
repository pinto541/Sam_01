import React, { useEffect, useState } from "react";

import "./Project2.css";
import Modal from "react-bootstrap/Modal";


import image002 from "../../Assets/c2.jpeg";
import image003 from "../../Assets/c13.jpeg";

import image004 from "../../Assets/c14.jpeg";
import image005 from "../../Assets/c15.jpeg";
import image006 from "../../Assets/c16.jpeg";

import image007 from "../../Assets/c17.jpeg";
import image008 from "../../Assets/c18.jpeg";
import image009 from "../../Assets/c19.jpeg";
import image010 from "../../Assets/pr5.jpg";

import { Button } from "react-bootstrap";

 const Project2 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  const images1 = [
   
    image002,
    image003,
    image004,
    image005,
    image006,
    image007,
    image008,
    image009,
    image010
  ];

  

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [view, setview] = useState({});
  console.log("view", view);
  return (
    <>
    <div className='c-banner'>
        <h1>Our Projects</h1>
       </div>
    <br/>
    <br/>
      

     

      <div className="md:pl-8 py-14 mt-20 md:mt-0 bg-blue-100">
        <div className="row justify-content-center">
          {images1.map((item, i) => {
            return (
              <div className=" hello col-md-4 mt-4">
                <img
                  style={{
                    width: "100%",
                    height: "300px",
                   
                    padding: "5px",
                    border:'1px solid white',
                    boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 0.3)",
                  }}
                  className="productss"
                  src={item}
                  alt={`Image ${i + 1}`}
                  onClick={() => {
                    handleShow();
                    setview(item);
                  }}
                />

              </div>
            );
          })}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        contentLabel="Image Modal"
        style={{
          content: {
            width: "20%", // Adjust the percentage as needed
           
            height: "30%",
            
          
          },
        }}
      >
        
        {selectedImage && (
          <img
            style={{
              display: "block",
              margin: "50px auto", // Center the image horizontally
              width: "100%",
              height: "700px", // Make the image fill the modal width
            }}
            src={selectedImage}
            alt="Zoomed Image"
          />
        )}
        <br />
        
      </Modal>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <img
            style={{
              display: "block",
              margin: "50px auto", // Center the image horizontally
              width: "100%",
              height: "100%", // Make the image fill the modal width
            }}
            src={view}
            alt="Zoomed Image"
          />
          <Button variant="secondary"  onClick={handleClose}>
            Close
          </Button>
        </Modal.Body>
        
      </Modal>
    </>
  );
};

export default Project2;