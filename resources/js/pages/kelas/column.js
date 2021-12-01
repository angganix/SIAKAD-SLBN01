const column = [
   {
      name: 'ketunaan',
      title: 'Ketunaan',
      style: { width: '20%' },
      render: (data) => {
         return `[${data.ketunaan.kode}] ${data.ketunaan.nama}`
      }
   },
   {
      name: 'nama',
      title: 'Kelas',
      sortable: true,
   },
   {
      action: true,
      className: 'text-center',
      style: { width: '10%' },
      title: 'Aksi'
   }
];

export default column;