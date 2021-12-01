import InputGroup from '../../components/forms/InputGroup';
import SubmitButton from '../../components/forms/SubmitButton';
import { Form } from "react-bootstrap";

function FormAgama({ loading, form, setForm, onSubmit }) {
   return (
      <Form method="POST" onSubmit={(e) => onSubmit(e)}>
         <InputGroup
            name="nama"
            id="nama"
            label="Nama Agama"
            type="text"
            value={form.nama}
            onChange={setForm}
         />
         <SubmitButton loading={loading} className='d-block w-100' />
      </Form>
   )
}

export default FormAgama
