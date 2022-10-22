import React, { useState } from 'react'
// import { toast } from 'react-toastify'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCircleXmark } from '@fortawesome/free-solid-svg-icons'
// import http from '../utils/http'

const DeleteProject = () => {
  const [show, setShow] = useState(false)

  // const notify = () => toast.success(`Created project - ${projectName}`)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // const newProject = () => {
  //   handleClose()
  //   http('project', 'post', {
  //     databaseName: projectName,
  //     databaseDescription: projectDescription
  //   })
  //     .then(response => {
  //       notify()
  //       console.log(response.data)
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  return (
    <>
      <span onClick={handleShow}><FontAwesomeIcon icon={faFileCircleXmark} /> Delete Project</span>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><FontAwesomeIcon icon={faFileCircleXmark} /> Delete Project</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default DeleteProject
