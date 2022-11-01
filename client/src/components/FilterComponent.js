import React from 'react'
import propTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const FilterComponent = (props) => {
  const { filterText, onFilter, onClear } = props

  return (
    <div className='input-group shadow-none mt-3'>
      <input
        id="search"
        className='form-control shadow-none'
        type="text"
        placeholder="Filter By Name"
        aria-label="Search Input"
        value={filterText}
        onChange={onFilter}
      />
      <button className='btn btn-secondary shadow-none' type="button" onClick={onClear}>
        <FontAwesomeIcon icon={faClose}/>
      </button>
    </div>
  )
}

FilterComponent.propTypes = {
  filterText: propTypes.string,
  onFilter: propTypes.func,
  onClear: propTypes.func
}
export default FilterComponent
