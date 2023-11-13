import * as Yup from 'yup';

const orderSchema = Yup.object().shape({
  name: Yup.string().required('Full Name is required'),
  phone: Yup.string()
    .matches(/^\d+$/, 'Phone number must only contain digits')
    .required('Phone Number is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  streetAddress: Yup.string().required('Street Address is required'),
});

export default orderSchema;
