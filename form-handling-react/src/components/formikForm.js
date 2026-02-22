import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function formikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert("Registration successful! " + JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field
              id="username"
              name="username"
              placeholder="Hind..."
              type="text"
            />
            <ErrorMessage name="usename" component="div" className="error" />
          </div>
          <div>
            <Field
              id="email"
              name="email"
              placeholder="Hind@gmail.com"
              type="email"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <Field
              id="password"
              name="password"
              placeholder="password1234"
              type="password"
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
