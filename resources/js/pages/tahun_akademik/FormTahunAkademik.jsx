import InputGroup from '../../components/forms/InputGroup';
import SubmitButton from '../../components/forms/SubmitButton';
import { Form } from "react-bootstrap";

function FormTahunAkademik({ loading, form, setForm, onSubmit }) {
   return (
      <Form method="POST" onSubmit={(e) => onSubmit(e)}>
         <InputGroup
            name="tahun"
            id="tahun"
            label="Tahun"
            type="number"
            value={form.tahun}
            onChange={setForm}
         />
         <InputGroup
            name="semester"
            id="semester"
            label="Semester"
            type="text"
            value={form.semester}
            onChange={setForm}
            placeholder='Contoh: Semester 1'
         />
         <InputGroup
            name="tahun_ajaran"
            id="tahun_ajaran"
            label="Tahun Ajaran"
            type="text"
            value={form.tahun_ajaran}
            onChange={setForm}
            placeholder='Contoh: 2021/2022'
         />
         <SubmitButton loading={loading} className='d-block w-100' />
      </Form>
   )
}

export default FormTahunAkademik
