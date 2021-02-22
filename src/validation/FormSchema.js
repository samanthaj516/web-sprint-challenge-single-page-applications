import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
    size: Yup.string().oneOf(['small', 'medium', 'large'], 'Size is required'),
    sauce: Yup.string().required('Please choose a sauce, or select No Sauce'),
    pepperoni: Yup.boolean(),
    sausage: Yup.boolean(),
    onions: Yup.boolean(),
    greenPepper: Yup.boolean(),
    dicedTomatoes: Yup.boolean(),
    instructions: Yup.string(),
});

export default FormSchema;