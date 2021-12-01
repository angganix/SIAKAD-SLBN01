const column = [
   {
      name: 'kode',
      title: 'Kode',
      sortable: true,
      style: { width: '10%' },
      className: 'text-center'
   },
   {
      name: 'nama',
      title: 'Nama',
      sortable: true,
   },
   {
      name: 'keterangan',
      title: 'Keterangan',
      sortable: true
   },
   {
      name: 'kelas',
      title: 'Jml. Kelas',
      style: { width: '12%' },
      className: 'text-center',
      render: (data) => {
         if (data.kelas.length) {
            return `<span class="badge bg-primary rounded-pill" style="min-width:30px">${data.kelas.length}</span>`;
         } else {
            return `<span class="badge bg-danger rounded-pill" style="min-width:30px">0</span>`;
         }
      }
   },
   {
      action: true,
      className: 'text-center',
      style: { width: '10%' },
      title: 'Aksi'
   }
];

export default column;