import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Admin = ({ onBookSubmit, editingBook, onEditSubmit }) => {
  const initialValues = {
    title: editingBook ? editingBook.title : "",
    author: editingBook ? editingBook.author : "",
    isbn: editingBook ? editingBook.isbn : "",
    publicationDate: editingBook ? editingBook.publicationDate : "",
    authorBirthDate: editingBook ? editingBook.authorBirthDate : "",
    biography: editingBook ? editingBook.biography : "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    isbn: Yup.string().required("ISBN is required"),
    publicationDate: Yup.date().required("Publication Date is required"),
    authorBirthDate: Yup.date().required("Author Birth Date is required"),
    biography: Yup.string().required("Biography is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    if (editingBook) {
      onEditSubmit({ ...editingBook, ...values });
    } else {
      onBookSubmit(values);
    }
    resetForm();
  };

  return (
    <div>
      <h2 >Admin Panel</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values }) => (
          <Form className="container">
            <div className="form-container form">
              <label  htmlFor="title"> Book Title:</label>
              <Field type="text" id="title" name="title" value={values.title} />
              <ErrorMessage name="title" component="div" className="error" />
           </div> 
           <div className="form-container form">
              <label htmlFor="author">Author Name:</label>
              <Field type="text" id="author" name="author" value={values.author} />
              <ErrorMessage name="author" component="div" className="error" />
           </div> 
           <div className="form-container form">
              <label htmlFor="isbn">ISBN:</label>
              <Field type="number" id="isbn" name="isbn" value={values.isbn} />
              <ErrorMessage name="isbn" component="div" className="error" />
           </div> 
           <div className="form-container form">
              <label htmlFor="publicationDate">Publication Date:</label>
              <Field type="date" id="publicationDate" name="publicationDate" value={values.publicationDate} />
              <ErrorMessage name="publicationDate" component="div" className="error" />
           </div>
           <div className="form-container form">
              <label htmlFor="authorBirthDate">Author Birth Date:</label>
              <Field type="date" id="authorBirthDate" name="authorBirthDate" value={values.authorBirthDate} />
              <ErrorMessage name="authorBirthDate" component="div" className="error" />
           </div> 
           <div className="form-container form">
              <label htmlFor="biography">Biography of Auther:</label>
              <Field type="text" id="biography" name="biography" value={values.biography} />
              <ErrorMessage name="biography" component="div" className="error" />
           </div> 
           <div>
              <button className="ad-button" type="submit">
                {editingBook ? "Update" : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Admin;
