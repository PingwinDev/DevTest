import React from 'react';
import FieldInput from '../FieldInput/FieldInput';

// Component for creating rowInputs
const rowInput = (props) => {
	switch (props.row.type) {
		case 'FreeText':
			return <div dangerouslySetInnerHTML={{ __html: props.row.content }} />;
		case 'HR':
			return <hr />;
		case 'Row':
            return( <div className='form-inline'>
                    {props.row.fields.map((field) => {
				return <FieldInput field={field} />
					
				
			})}
            </div>)
            
		default:
			return null;
	}
};
export default rowInput;
