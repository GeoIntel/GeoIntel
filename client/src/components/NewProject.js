import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'

const NewProject = () => {
  const [show, setShow] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [valid, setValid] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleChange = (e) => {
    const inputValue = e.target.value
    const regex = /^[a-zA-Z_][0-9a-zA-Z_]*$/g
    const isValid = regex.test(inputValue)
    if (!isValid) {
      setValid(false)
      setErrorMessage('Please use only a-z, A-Z, 0-9, and underscore (_) symbol.')
    }
    if (isValid) {
      setValid(true)
      setErrorMessage('')
    }
    setProjectName(inputValue)
  }

  const newProject = () => {

  }

  return (
    <>
      <span onClick={handleShow}><FontAwesomeIcon icon={faFileCirclePlus} /> New Project</span>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><FontAwesomeIcon icon={faFileCirclePlus} /> New Project</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <FloatingLabel
              controlId="newProject.ProjectName"
              label="Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="All_The_Intel"
                autoFocus
                value={projectName}
                onChange={handleChange}
              />
            </FloatingLabel>
            <div className='validation-field text-danger my-1'>
              <small>{errorMessage}</small>
            </div>
          </Form>
          <Button
            variant="primary"
            type="submit"
            disabled={!valid}
            onClick={newProject}
          >
            Submit
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default NewProject
