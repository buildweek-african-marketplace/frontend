import React, { useState } from "react";


const SaleForm = () => {
    const [item, setItem] = useState({
        catergory: "", item: "", price: "", currency: "", description: ""
    });

    const handleChange = event => {
        setItem({ ...item, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(item.catergory);
        console.log(item.item);
        console.log(item.price);
        console.log(item.curency);
        console.log(item.description);
    };

    return (
        <div className="sell">
            <h1>Sell an Item</h1>
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Category:
                <input
                        type="text"
                        name="category"
                        value={item.category}
                        onChange={event => handleChange(event)}
                    />
                </label>
                <label>
                    Item:
                <input
                        type="text"
                        name="item"
                        value={item.item}
                        onChange={event => handleChange(event)}
                    />
                </label>
                <label>
                    Price:
                <input
                        type="text"
                        name="price"
                        value={item.price}
                        onChange={event => handleChange(event)}
                    />
                </label>
                <label>
                    Currency:
                <input
                        type="text"
                        name="currency"
                        value={item.currency}
                        onChange={event => handleChange(event)}
                    />
                </label>
                <label>
                    Description:
                <input
                        type="text"
                        name="description"
                        value={item.description}
                        onChange={event => handleChange(event)}
                    />
                </label>
                <button>Post!</button>
            </form>
        </div>
    )
}
export default SaleForm


/*
const withFormik = Formik({
  mapPropsToValues: () => ({ color: '' }),
  validationSchema: Yup.object().shape({
    color: Yup.string().required('Color is required!'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'BasicForm', // helps with React DevTools
});

const MyForm = props => {
  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" style={{ display: 'block' }}>
        Color
      </label>
      <select
        name="color"
        value={values.color}
        onChange={handleChange}
        onBlur={handleBlur}
        style={{ display: 'block' }}
      >
        <option value="" label="Select a color" />
        <option value="red" label="red" />
        <option value="blue" label="blue" />
        <option value="green" label="green" />
      </select>
      {errors.color &&
        touched.color &&
        <div className="input-feedback">
          {errors.color}
        </div>}

*/