import React from 'react'
import { withFormik, Form, Field } from "formik";

const SaleForm = () => {
    return (
      <Form className = "selllogin">
          <label className ="signlabel">Post New Item
          <select className="box" name="category"> 
            <option value ="category" label = "Select Category" /> 
            <option value = "produce" label ="produce" />
            <option value = "clothing" label = "clothing" />
            <option value = "household" label = "household" />
            </select> 
            </label>
          <Field className="box" type="Item" name="item" Placeholder="Item" />
          <select className="box" name="location"> 
            <option value ="location" label = "Select Location" /> 
            <option value = "south africa" label ="South Africa" />
            <option value = "north africa" label = "Northern Africa" />
            <option value = "west africa" label = "Western Africa" />
            <option value = "middle africa" label = "Central Africa" />
            <option value = "east africa" label = "Eastern Africa" />
            </select>
          <Field className="box" type="Price" name="price" Placeholder="Price" />
          <select className="box" name="currency"> 
            <option value ="currency" label = "Select Currency" /> 
            <option value = "dinar" label ="dinar" />
            <option value = "franc" label = "franc" />
            <option value = "shilling" label = "shilling" />
            <option value = "rupee" label = "rupee" />
            <option value = "dollar" label = "dollar" />
            <option value = "pound" label = "pound" />
            <option value = "rand" label = "rand" />
            </select>
          <Field className="descrbox" type="Description" name="description" Placeholder="Describe your item..." />
          <button className = "submit">Post!</button>
      </Form>
    );
 }
 const PostForm = withFormik({
    mapPropsToValues({ category, item, location, price, currency, description }) {
        return {
            category: category || "",
            item: item || "",
            location: location || "",
            price: price || "",
            currency: currency || "",
            description: description || ""
        };
    },
    handleSubmit(values) {
        console.log(values);
    }
 })(SaleForm)
 export default PostForm;

