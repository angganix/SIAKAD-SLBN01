import { Table } from "react-bootstrap";
import PropTypes from 'prop-types';
import TableAction from "../forms/TableAction";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";

function TableList({
   loading, column, data, onEdit, onDelete, size, primaryKey,
   onSorting, withPagination = false, page, maxpage, onPaginate
}) {
   const search = useSelector(state => state.search.search);

   return (
      <div className="position-relative">
         <Table responsive size={size}>
            {typeof data !== 'undefined' && data.length ? (
               <thead>
                  <tr>
                     {column.map((col, idx) => (
                        <th
                           key={idx}
                           className={`${col.className ? col.className : ''} ${col.sortable ? 'cursor-pointer' : ''}`}
                           style={col.style}
                           onClick={() => onSorting && col.sortable ? onSorting(col.name) : null}
                        >
                           {col.title}
                        </th>
                     ))}
                  </tr>
               </thead>
            ) : null}
            <tbody>
               {
                  typeof data !== 'undefined' && data.length ? (
                     data.map((item, idx) => (
                        <tr key={idx}>
                           {column.map((col, idxCol) => (
                              !col.action ? (
                                 <td key={idxCol} className={col?.className}>
                                    {
                                       col.render
                                          ? <span dangerouslySetInnerHTML={{ __html: col.render(item) }}></span>
                                          : item[col.name]}
                                 </td>
                              ) : (
                                 <td key={idxCol} className={col?.className}>
                                    <TableAction
                                       onEdit={() => onEdit(item[primaryKey])}
                                       onDelete={() => onDelete(item[primaryKey])}
                                    />
                                 </td>
                              )
                           ))}
                        </tr>
                     ))
                  ) : (
                     !loading && (
                        <tr>
                           <td colSpan="100%" className="text-center border-bottom-0">
                              <div className="p-3 rounded py-5" style={{ border: '1px dashed #ddd' }}>
                                 <img src="/images/no-data.svg" alt="" className="img-fluid d-block mx-auto mb-3" style={{ width: 200 }} />
                                 <h4
                                    className="fw-light"
                                    style={{ fontSize: 20 }}
                                    dangerouslySetInnerHTML={{
                                       __html: search !== ''
                                          ? `Tidak ada data dengan kata kunci: <strong>${search}</strong>`
                                          : 'Tidak Ada Data'
                                    }}
                                 ></h4>
                              </div>
                           </td>
                        </tr>
                     )
                  )
               }
            </tbody>
         </Table>
         {loading && (
            <div className="position-absolute w-100 h-100 top-0 left-0 d-flex justify-content-center align-items-center list-loader">
               <div className="p-3 bg-white shadow-sm rounded-pill mb-3">
                  <span className="spinner-border spinner-border-sm text-primary me-1"></span> Memuat Data
               </div>
            </div>
         )}
         {withPagination && typeof data !== 'undefined' && data.length ? (
            <Pagination className="justify-content-center">
               <Pagination.First onClick={() => onPaginate(1)} />
               <Pagination.Prev onClick={() => onPaginate(page > 1 ? page - 1 : 1)} />
               <Pagination.Item>
                  Hal. <strong>{page}</strong> dari <strong>{maxpage}</strong>
               </Pagination.Item>
               <Pagination.Next onClick={() => onPaginate(page < maxpage ? page + 1 : maxpage)} />
               <Pagination.Last onClick={() => onPaginate(maxpage)} />
            </Pagination>
         ) : null}
      </div>
   )
}

TableList.propTypes = {
   primaryKey: PropTypes.string,
   size: PropTypes.string,
   loading: PropTypes.bool,
   column: PropTypes.array,
   data: PropTypes.array,
   withPagination: PropTypes.bool,
   page: PropTypes.number,
   maxpage: PropTypes.number,
   onEdit: PropTypes.func,
   onDelete: PropTypes.func,
   onSorting: PropTypes.func,
   onPaginate: PropTypes.func
}

export default TableList
