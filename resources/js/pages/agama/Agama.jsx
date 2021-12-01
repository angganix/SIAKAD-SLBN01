import { Button, Card, Modal } from 'react-bootstrap';
import TableList from '../../components/widgets/TableList';
import column from './column';
import FormAgama from './FormAgama';
import useData from '../../hooks/useData';

function Agama() {
   const {
      list, form, loading, showForm, dataActions: {
         openForm, closeForm, deleteHandler, sortHandler,
         submitHandler, editHandler, setFormHandler
      }
   } = useData('agama');

   return (
      <div>
         <Card className="shadow-card border-0">
            <Card.Header>
               <h4 className="card-title mb-0 flex-grow-1">List</h4>
               <span className="card-tools">
                  <Button variant="default" className="btn-light-primary" onClick={openForm}>
                     <i className="fas fa-plus faf"></i> Tambah
                  </Button>
               </span>
            </Card.Header>
            <Card.Body>
               <TableList
                  column={column}
                  data={list}
                  loading={loading}
                  onEdit={editHandler}
                  onDelete={deleteHandler}
                  onSorting={sortHandler}
                  primaryKey='id'
               />
            </Card.Body>
         </Card>
         <Modal show={showForm} onHide={closeForm} size='sm'>
            <Modal.Header>
               <Modal.Title>Form Agama</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <FormAgama
                  form={form}
                  loading={loading}
                  setForm={setFormHandler}
                  onSubmit={submitHandler}
               />
            </Modal.Body>
         </Modal>
      </div>
   )
}

export default Agama
