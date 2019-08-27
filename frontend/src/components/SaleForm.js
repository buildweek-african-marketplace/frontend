import React from 'react'
import { withFormik, Form, Feild } from "formik";

const SaleForm = () => {
    return (
      <Form>
          <Field type="Category" name="category" Placeholder="Select Category" />

          <Field type="Item" name="item" Placeholder="Select Item" />

          <Field type="Location" name="location" Placeholder="Location" />

          <Field type="Price" name="price" Placeholder="Price" />

          <Field type="Curency" name="curency" Placeholder="Curency" />

          <Field type="Description" name="description" Placeholder="Describe your item..." />
          <button>Post!</button>
      </Form> 
    );
}

const PostForm = withFormik({
    mapPropsToValues({ category, item, location, price, curency, description }) {
        return {
            category: 
            item: 
            location: 
            price: price || "",
            description: description || ""
        };
    },
    handleSubmit(values) {
        console.log(values);
    }
})(SaleForm)

export default SaleForm
 export default PostForm
