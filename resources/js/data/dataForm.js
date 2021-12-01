import moment from "moment";

const dataForm = {
   agama: {
      nama: ''
   },
   golongan: {
      nama: '',
      keterangan: ''
   },
   jenis_ptk: {
      nama: '',
      keterangan: ''
   },
   ketunaan: {
      kode: '',
      nama: '',
      keterangan: ''
   },
   kurikulum: {
      nama: '',
      keterangan: ''
   },
   status_pegawai: {
      status_pegawai: '',
      keterangan: ''
   },
   tahun_akademik: {
      tahun: moment().format("YYYY"),
      semester: '',
      tahun_ajaran: ''
   },
   kelas: {
      nama: '',
      ketunaan_id: ''
   },
   role: {
      role_name: '',
      role_modules: []
   }
};

export default dataForm;