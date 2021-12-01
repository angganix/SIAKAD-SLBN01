import { Form, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, resetSearch } from '../../services/searchSlice';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';

function DataSearch({ closeSearch }) {
   const dispatch = useDispatch();
   const { search: textSearch } = useSelector(state => state.search);

   const onSearch = debounce((e) => {
      dispatch(setSearch(e.target.value));
      closeSearch();
   }, 600);

   const clearSearch = () => {
      dispatch(resetSearch());
      closeSearch();
   }

   return (
      <InputGroup style={{ overflow: 'hidden' }} className="search-input">
         <Form.Control
            type='text'
            className='shadow-none'
            placeholder='Pencarian data'
            defaultValue={textSearch}
            onChange={(e) => onSearch(e)}
            size="lg"
         />
         <InputGroup.Text onClick={() => clearSearch()} className="cursor-pointer">
            <span className="fas fa-times fa-fw"></span>
         </InputGroup.Text>
      </InputGroup>
   )
}

DataSearch.propTypes = {
   closeSearch: PropTypes.func
}

export default DataSearch
