import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

function InputGroup({ label, id, name, value, type, className, onChange, placeholder, disabled = false }) {
   return (
      <Form.Group className="mb-3">
         <Form.Label htmlFor={id}>{label}</Form.Label>
         <Form.Control
            id={id}
            name={name}
            value={value === null ? '' : value}
            type={type}
            className={`shadow-none ${className}`}
            onChange={(e) => onChange(e)}
            placeholder={placeholder}
            disabled={disabled}
         />
      </Form.Group>
   )
}

InputGroup.propTypes = {
   label: PropTypes.string,
   id: PropTypes.string,
   name: PropTypes.string,
   value: PropTypes.any,
   type: PropTypes.string,
   className: PropTypes.string,
   placeholder: PropTypes.string,
   disabled: PropTypes.bool,
   onChange: PropTypes.func
}

export default InputGroup
