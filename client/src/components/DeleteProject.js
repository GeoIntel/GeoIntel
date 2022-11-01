import React, { useState, useMemo } from 'react'
import propTypes from 'prop-types'
import { toast } from 'react-toastify'
import { Button } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCircleXmark, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import DataTable from 'react-data-table-component'
import FilterComponent from './FilterComponent'
import { DeleteModal } from './DeleteModal'
import http from '../utils/http'

const DeleteProject = (props) => {
  const [show, setShow] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [currentProject, setCurrentProject] = useState()
  const [filterText, setFilterText] = useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false)

  const { projects, onProjectsChange } = props

  const notify = (projectName) => toast.success(`Deleted project - ${projectName}`)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleModalClose = () => setShowModal(false)
  const deleteButtonHandler = (projectName) => {
    setCurrentProject(projectName)
    setShowModal(true)
  }

  const deleteProject = () => {
    handleClose()
    handleModalClose()
    http('project', 'delete', {
      databaseName: currentProject
    })
      .then(response => {
        notify(currentProject)
        console.log(response.data)
        onProjectsChange()
      })
      .catch(error => {
        console.log(error)
      })
  }

  const filteredItems = projects.filter(
    item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
  )

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText('')
      }
    }

    return (
      <FilterComponent
        onFilter={(e) => {
          setFilterText(e.target.value)
        }} onClear={handleClear} filterText={filterText} />
    )
  }, [filterText, resetPaginationToggle])

  const center = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }

  const customStyles = {
    subHeader: {
      style: {
        padding: 0
      }
    },
    cells: {
      style: {
        fontSize: 16
      }
    }
  }

  const columns = [
    {
      selector: row => row.name,
      id: 'projectName'
    },
    {
      selector: row => row.comment,
      id: 'projectComment'
    },
    {
      selector: row => (
        <Button
          variant="link"
          className='delete-button'
          onClick={() => deleteButtonHandler(row.name)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      ),
      id: 'delete',
      style: center
    }
  ]

  return (
    <>
      <span onClick={handleShow}><FontAwesomeIcon icon={faFileCircleXmark} /> Delete Project</span>
      <Offcanvas show={show} onHide={handleClose} placement="end" style={{ width: 600 }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><FontAwesomeIcon icon={faFileCircleXmark} /> Delete Project</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <DataTable
            customStyles={customStyles}
            columns={columns}
            data={filteredItems}
            pagination
            paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
          />
        </Offcanvas.Body>
      </Offcanvas>
      <DeleteModal
        deleteItem={deleteProject}
        handleClose={handleModalClose}
        currentItem={currentProject}
        show={showModal}
      />
    </>
  )
}

DeleteProject.propTypes = {
  projects: propTypes.any,
  onProjectsChange: propTypes.func
}

export default DeleteProject
