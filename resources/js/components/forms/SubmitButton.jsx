import PropTypes from 'prop-types';

function SubmitButton({ loading, text = 'Simpan', className }) {
   return (
      <button type="submit" className={`btn btn-primary py-2 ${className}`} disabled={loading}>
         {loading ? (
            <span className="d-flex justify-content-center align-items-center">
               <span className="spinner-border spinner-border-sm me-2"></span> Menyimpan
            </span>
         ) : (
            <span>{text}</span>
         )}
      </button>
   )
}

SubmitButton.propTypes = {
   loading: PropTypes.bool,
   text: PropTypes.string,
   className: PropTypes.string
}

export default SubmitButton
