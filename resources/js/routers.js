import loadable from '@loadable/component';

const router = [
   {
      path: "/",
      title: "Home",
      component: loadable(() => import('./pages/Home')),
      exact: true
   },
   {
      path: "/identitas-sekolah",
      title: "Identitas Sekolah",
      component: loadable(() => import('./pages/IdentitasSekolah')),
   },
   {
      path: "/agama",
      title: "Data Agama",
      component: loadable(() => import('./pages/agama/Agama'))
   },
   {
      path: "/kurikulum",
      title: "Data Kurikulum",
      component: loadable(() => import('./pages/kurikulum/Kurikulum'))
   },
   {
      path: "/tahun-akademik",
      title: "Tahun Akademik",
      component: loadable(() => import('./pages/tahun_akademik/TahunAkademik'))
   },
   {
      path: "/ketunaan",
      title: "Data Ketunaan",
      component: loadable(() => import('./pages/ketunaan/Ketunaan'))
   },
   {
      path: "/golongan",
      title: "Data Golongan",
      component: loadable(() => import('./pages/golongan/Golongan'))
   },
   {
      path: "/status-pegawai",
      title: "Status Pegawai",
      component: loadable(() => import('./pages/status_pegawai/StatusPegawai'))
   },
   {
      path: "/jenis-ptk",
      title: "Jenis PTK",
      component: loadable(() => import('./pages/jenis_ptk/JenisPTK'))
   },
   {
      path: "/kelas",
      title: "Kelas",
      component: loadable(() => import('./pages/kelas/Kelas'))
   }
];

export default router;