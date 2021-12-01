import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export const useList = (initList) => {
   const mounted = useRef(false);
   const [data, setData] = useState(initList);
   const [isFetching, setIsFetching] = useState(false);
   const [sort, setSort] = useState({ sortby: 'id', sortdir: 'desc' });

   const fetchList = (fetcher) => {
      setIsFetching(true);
      fetcher.then(result => {
         setData(result);
      }).catch(error => {
         toast.error(error);
      }).finally(() => {
         setTimeout(() => {
            if (mounted.current) setIsFetching(false);
         }, 1000);
      })
   }

   const sorting = (by) => {
      setSort(prevState => {
         return {
            ...prevState,
            sortby: by,
            sortdir: prevState.sortdir === 'desc' ? 'asc' : 'desc'
         }
      });
   }

   useEffect(() => {
      mounted.current = true;
      return () => mounted.current = false;
   }, []);

   return { list: data, sort, isFetching, sorting, fetchList };
}

export const useForm = (initForm) => {
   const mounted = useRef(false);
   const [loading, setLoading] = useState(false);
   const [form, setData] = useState(initForm);

   const setForm = (e) => {
      if (e?.target) {
         const { name, value } = e.target;
         setData(prevState => ({
            ...prevState,
            [name]: value
         }));
      } else {
         setData(e);
      }
   }

   const saveForm = (e, action, callback) => {
      e.preventDefault();
      setLoading(true);

      action.then(status => {
         if (status) toast.success('Data berhasil disimpan');
         if (callback) callback();
      }).catch(err => {
         toast.error(err);
      }).finally(() => {
         setTimeout(() => {
            if (mounted.current) setLoading(false);
         }, 1000);
      });
   }

   useEffect(() => {
      mounted.current = true;
      return () => mounted.current = false;
   }, []);

   return { form, loading, setForm, saveForm };
}

export const useEdit = () => {
   const editData = (action, callback) => {
      action.then(result => {
         if (result) {
            if (callback) callback(result);
         }
      }).catch(error => {
         toast.error(error);
      });
   }

   return { editData };
}

export const useDelete = () => {
   const deleteData = (url, id, action, callback) => {
      let confirmation = window.confirm('Yakin akan menghapus data ini?');
      if (confirmation) {
         action(url, id).then(status => {
            if (status) {
               toast.success('Data berhasil dihapus');
               if (callback) callback();
            }
         }).catch(error => {
            toast.error(error);
         });
      }
   }

   return { deleteData };
}