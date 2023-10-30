import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const ProjectDetail = ({ project, onClose }) => {
  const projectDetailStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "999", 
  };

  const detailContainerStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    maxWidth: "80%",
    position: "relative",
    overflowY: "auto",
    textAlign: "center",
  };

  const closeButtonStyle = {
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  };

  const closeButtonHoverStyle = {
    backgroundColor: "#555",
  };

  return (
    <div className="project-detail" style={projectDetailStyle}>
      <div style={detailContainerStyle}>
        <button
          onClick={onClose}
          style={Object.assign(
            {},
            closeButtonStyle,
            closeButtonHoverStyle
          )}
        >
          Close
        </button>
        <hr/>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          interval={3000} 
          infiniteLoop={true}
          stopOnHover={false} 
        >
          {project.images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`${project.title} - Imagen ${index + 1}`}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProjectDetail;
