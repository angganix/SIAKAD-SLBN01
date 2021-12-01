import InputGroup from '../../components/forms/InputGroup';
import SubmitButton from '../../components/forms/SubmitButton';
import { Form } from "react-bootstrap";

function FormJenisPTK({ loading, form, setForm, onSubmit }) {
   return (
      <Form method="POST" onSubmit={(e) => onSubmit(e)}>
         <InputGroup
            name="nama"
            id="nama"
            label="Nama PTK"
            type="text"
            value={form.nama}
            onChange={setForm}
            placeholder="Contoh: Guru Kelas"
         />
         <Form.Group className="mb-3">
            <Form.Label htmlFor="keterangan">Keterangan</Form.Label>
            <Form.Control
               id="keterangan"
               name="keterangan"
               value={form.keterangan}
               as="textarea"
               style={{ height: '100px' }}
               className="shadow-none"
               onChange={(e) => setForm(e)}
            />
         </Form.Group>
         <SubmitButton loading={loading} className='d-block w-100' />
      </Form>
   )
}

export default FormJenisPTK
