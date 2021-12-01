import { useEffect } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";
import { useForm, useEdit } from '../hooks/useCrud';
import services from "../services/identitas-sekolah";
import InputGroup from "../components/forms/InputGroup";
import SubmitButton from "../components/forms/SubmitButton";

function IdentitasSekolah() {
   const { form, loading, setForm, saveForm } = useForm('');
   const { editData } = useEdit();
   const { save, get } = services;

   const getData = () => {
      editData(get(), (result) => setForm(result));
   }

   useEffect(() => {
      getData();
   }, []);

   if (form !== '') {
      return (
         <Card className="shadow-card border-0">
            <Card.Body className="p-lg-4">
               <Form onSubmit={(e) => saveForm(e, save(form), getData)} method="POST">
                  <div className="mb-4 d-block">
                     <h5>Data Sekolah</h5>
                     <Row>
                        <Col xs={12} lg={6}>
                           <InputGroup
                              id="nama_sekolah"
                              name="nama_sekolah"
                              label="Nama Sekolah"
                              type="text"
                              value={form.nama_sekolah}
                              onChange={setForm}
                           />
                        </Col>
                        <Col xs={12} lg={6}>
                           <InputGroup
                              id="npsn"
                              name="npsn"
                              label="NPSN"
                              type="text"
                              value={form.npsn}
                              onChange={setForm}
                           />
                        </Col>
                     </Row>
                  </div>
                  <div className="separator"></div>
                  <div className="mb-5 d-block">
                     <h5>Data Alamat</h5>
                     <Row>
                        <Col xs={12} lg={8}>
                           <InputGroup
                              id="provinsi"
                              name="provinsi"
                              label="Provinsi"
                              type="text"
                              value={form.provinsi}
                              onChange={setForm}
                           />
                        </Col>
                        <Col xs={12} lg={4}>
                           <InputGroup
                              id="kabupaten_kota"
                              name="kabupaten_kota"
                              label="Kabupaten / Kota"
                              type="text"
                              value={form.kabupaten_kota}
                              onChange={setForm}
                           />
                        </Col>
                     </Row>
                     <Row>
                        <Col xs={12} lg={4}>
                           <InputGroup
                              id="kecamatan"
                              name="kecamatan"
                              label="Kecamatan"
                              type="text"
                              value={form.kecamatan}
                              onChange={setForm}
                           />
                        </Col>
                        <Col xs={12} lg={4}>
                           <InputGroup
                              id="kelurahan"
                              name="kelurahan"
                              label="Kelurahan"
                              type="text"
                              value={form.kelurahan}
                              onChange={setForm}
                           />
                        </Col>
                        <Col xs={12} lg={4}>
                           <InputGroup
                              id="kode_pos"
                              name="kode_pos"
                              label="Kode POS"
                              type="number"
                              value={form.kode_pos}
                              onChange={setForm}
                           />
                        </Col>
                     </Row>
                     <InputGroup
                        id="alamat"
                        name="alamat"
                        label="Alamat"
                        type="text"
                        value={form.alamat}
                        onChange={setForm}
                     />
                  </div>
                  <div className="separator"></div>
                  <div className="d-block mb-2">
                     <h5>Data Kontak</h5>
                     <Row>
                        <Col xs={12} lg={4}>
                           <InputGroup
                              id="no_telpon"
                              name="no_telpon"
                              label="No. Telpon"
                              type="text"
                              value={form.no_telpon}
                              onChange={setForm}
                           />
                        </Col>
                        <Col xs={12} lg={4}>
                           <InputGroup
                              id="email"
                              name="email"
                              label="Email"
                              type="email"
                              value={form.email}
                              onChange={setForm}
                           />
                        </Col>
                        <Col xs={12} lg={4}>
                           <InputGroup
                              id="website"
                              name="website"
                              label="Website"
                              type="text"
                              value={form.website}
                              onChange={setForm}
                           />
                        </Col>
                     </Row>
                  </div>
                  <div className="d-flex justify-content-end align-items-center">
                     <SubmitButton loading={loading} />
                  </div>
               </Form>
            </Card.Body>
         </Card >
      )
   } else {
      return null;
   }

}

export default IdentitasSekolah
