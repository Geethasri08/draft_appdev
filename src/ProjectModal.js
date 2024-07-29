
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddProjectModal = ({ show, handleClose, handleSave }) => {
  const [project, setProject] = useState({
    title: '',
    description: '',
    staffName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevProject) => ({
      ...prevProject,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    handleSave(project);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="projectTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={project.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="projectDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={project.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="staffName">
            <Form.Label>Staff Name</Form.Label>
            <Form.Control
              type="text"
              name="staffName"
              value={project.staffName}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProjectModal;
