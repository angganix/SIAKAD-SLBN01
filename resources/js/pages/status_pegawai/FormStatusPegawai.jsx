import InputGroup from '../../components/forms/InputGroup';
import SubmitButton from '../../components/forms/SubmitButton';
import { Form } from "react-bootstrap";

function FormStatusPegawai({ loading, form, setForm, onSubmit }) {
   return (
      <Form method="POST" onSubmit={(e) => onSubmit(e)}>
         <InputGroup
            name="status_pegawai"
            id="status_pegawai"
            label="Status Pegawai"
            type="text"
            value={form.status_pegawai}
            onChange={setForm}
            placeholder='Contoh: CPNS'
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

export default FormStatusPegawai
