import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'

export const DeleteModal = ({ handleClose, show, currentItem, deleteItem }) => {
  return (
    <>
      <Modal centered size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h5><FontAwesomeIcon icon={faTrashAlt}/> {currentItem}</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete {currentItem}?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteItem}>
            Delete
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

DeleteModal.propTypes = {
  deleteItem: PropTypes.func,
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  currentItem: PropTypes.any
}
