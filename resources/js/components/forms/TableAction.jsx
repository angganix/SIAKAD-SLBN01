import React from 'react'

function TableAction({ onEdit, onDelete }) {
   return (
      <div>
         {onDelete && (
            <button className="btn btn-sm shadow-none btn-light-danger me-1" type="button" onClick={() => onDelete()}>
               <i className="fas fa-trash fa-fw"></i>
            </button>
         )}
         {onEdit && (
            <button className="btn btn-sm shadow-none btn-light-primary" type="button" onClick={() => onEdit()}>
               <i className="fas fa-edit fa-fw"></i>
            </button>
         )}
      </div>
   )
}

export default TableAction
