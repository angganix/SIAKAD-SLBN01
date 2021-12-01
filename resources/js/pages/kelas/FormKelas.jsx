import InputGroup from '../../components/forms/InputGroup';
import SubmitButton from '../../components/forms/SubmitButton';
import { Form } from "react-bootstrap";
import { useSelector } from 'react-redux';
import useData from '../../hooks/useData';

function FormKelas({ loading, form, setForm, onSubmit }) {
   useData('ketunaan');
   const ketunaan = useSelector(state => state.ketunaan.data.list);

   return (
      <Form method="POST" onSubmit={(e) => onSubmit(e)}>
         <InputGroup
            name="nama"
            id="nama"
            label="Nama Kelas"
            type="text"
            value={form.nama}
            onChange={setForm}
            placeholder='Contoh: IX'
         />
         <Form.Group className="mb-3">
            <Form.Label htmlFor="ketunaan_id">Ketunaan</Form.Label>
            <Form.Select
               id="ketunaan_id"
               name="ketunaan_id"
               value={form.ketunaan_id}
               className="shadow-none"
               onChange={(e) => setForm(e)}
            >
               <option value="">- Pilih Ketunaan -</option>
               {ketunaan.map((item, idx) => (
                  <option key={idx} value={item.id}>[{item.kode}] {item.nama}</option>
               ))}
            </Form.Select>
         </Form.Group>
         <SubmitButton loading={loading} className='d-block w-100' />
      </Form>
   )
}

export default FormKelas
