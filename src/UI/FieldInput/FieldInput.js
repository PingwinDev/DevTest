import React from 'react';

const fieldInput = (props) => {
	let inputType = null;

	// switch statement to find the input type
	switch (props.field.type) {
		case 'FormText':
			inputType = 'text';
			break;
		case 'FormTextarea': // could be a typo in the readme, written as FormTextarea a might be caps
			inputType = 'textarea';
			break;
		case 'FormRadio':
			inputType = 'radio';
			break;
		case 'FormCheckbox':
			return (
				<div className="col-sm">
					{props.field.options.map((option) => {
						return(
						<div className='form-check form-check-inline'>
							<input type="checkbox" className='check' name={option.name} />
							<label className='checkbox-label' for={option.name}>{option.name}</label>
						</div>
						)
					})}
				</div>
			);

		case 'FormFile':
			inputType = 'file';
			break;
		case 'FormEmail':
			inputType = 'email';
			break;
		case 'FormDate':
			inputType = 'date';
			break;
		case 'FormPhone':
			inputType = 'tel';
			break;
		case 'FormSelect':
			return (
				<div className="col-sm ">
					<label>{props.field.label}</label>
					<select className='customSelect' name={props.field.label}>
					<option value="" disabled>{props.field.placeholder}</option>
						{props.field.options.map((option) => {
							return <option value={option.name}>{option.name}</option>;
						})}
					</select>
				</div>
			);
		default:
			inputType = 'text';
			break;
	}

	return (
		<div className="col-sm">
			<label>{props.field.label}</label>
			<input {...props.field} type={inputType} />
		</div>
	);
};

export default fieldInput;
