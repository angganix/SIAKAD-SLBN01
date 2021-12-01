import { useDispatch, useSelector } from "react-redux";
import dataForm from "../data/dataForm";
import dataSlice from "../services/dataSlice";
import { useState, useEffect } from "react";
import { resetSearch } from "../services/searchSlice";

const useData = (moduleName, withPagination = false) => {
   const dispatch = useDispatch();
   const [showForm, setShowForm] = useState(false);
   const [firstMounted, setFirstMounted] = useState(true);
   const initForm = dataForm[moduleName];
   const { search } = useSelector(state => state.search);
   const { data: { list, sort, page, maxpage }, form, loading } = useSelector(state => state[moduleName]);
   const {
      fetchList, fetchData, saveData, deleteData,
      actions: { setForm, sorting, paginate, withPaging }
   } = dataSlice(moduleName);

   const dataActions = {
      openForm: () => {
         setShowForm(true);
      },
      closeForm: () => {
         dispatch(setForm(initForm));
         setShowForm(false);
         dataActions.fetchHandler();
      },
      fetchHandler: () => {
         dispatch(fetchList(search));
         setFirstMounted(false);
      },
      submitHandler: (e) => {
         e.preventDefault();
         dispatch(saveData()).then(res => {
            if (!res.error) dataActions.closeForm();
         })
      },
      setFormHandler: (e) => {
         const { name, value } = e.target;
         dispatch(setForm({ ...form, [name]: value }));
      },
      editHandler: (id) => {
         dispatch(fetchData(id));
         dataActions.openForm();
      },
      deleteHandler: (id) => {
         if (window.confirm('Yakin akan menghapus data ini ?')) {
            dispatch(deleteData(id));
            dispatch(resetSearch());
            if (page > 1) {
               dataActions.pageHandler(1);
            } else {
               dataActions.fetchHandler();
            }
         }
      },
      sortHandler: (by) => {
         dispatch(sorting(by));
      },
      pageHandler: (page) => {
         dispatch(paginate(page));
      }
   }

   useEffect(() => {
      dataActions.fetchHandler();
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: "auto"
      });
   }, [sort, page]);

   useEffect(() => {
      dispatch(withPaging(withPagination));
   }, []);

   useEffect(() => {
      if (page > 1) {
         dataActions.pageHandler(1);
      } else {
         if (!firstMounted) {
            dataActions.fetchHandler(search);
         }
      }
   }, [search]);

   return { list, form, loading, page, maxpage, showForm, dataActions }

}

export default useData;