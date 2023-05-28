// dependencies
import { Formik, Form, Field, ErrorMessage } from "formik"; // Formik helps with forms
import * as Yup from "yup"; // Yup helps with data form validation
import axios from "axios";

const CreatePost = () => {
  // initial values for the Formik form
  const intialValues = {
    title: "",
    text: "",
    username: "",
  };

  // using Yup to validate form data
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("The Title is a required field!"),
    text: Yup.string().required("The Post is a required field!"),
    username: Yup.string()
      .min(3)
      .max(15)
      .required("The Username is a required field!"),
  });

  // sending validated data to the backend API
  const formSubmit = async (data: {}) => {
    console.log(data);
    const response = await axios.post("http://localhost:5000/posts", data);
    console.log(response);
  };

  return (
    <div className="flex justify-center my-5">
      <Formik
        initialValues={intialValues}
        onSubmit={formSubmit}
        validationSchema={validationSchema}
      >
        <Form className="w-3/4 p-6 border-2 border-blue-600 rounded-md">
          <label className="block mb-2 font-bold">Title:</label>
          <ErrorMessage
            name="title"
            className="text-red-500"
            component="span"
          />
          <Field
            id="inputCreatePost"
            name="title"
            className="w-full p-2 mb-4 border-2 border-blue-600 rounded-md"
            placeholder="Title"
            autoComplete="off"
          />

          <label className="block mb-2 font-bold">Post:</label>
          <ErrorMessage name="text" className="text-red-500" component="span" />
          <Field
            id="inputCreatePost"
            name="text"
            className="w-full p-2 mb-4 border-2 border-blue-600 rounded-md"
            placeholder="Post"
            autoComplete="off"
          />

          <label className="block mb-2 font-bold">Username:</label>
          <ErrorMessage
            name="username"
            className="text-red-500"
            component="span"
          />
          <Field
            id="inputCreatePost"
            name="username"
            className="w-full p-2 mb-4 border-2 border-blue-600 rounded-md"
            placeholder="Username"
            autoComplete="off"
          />

          <button
            type="submit"
            className="w-full p-2 text-white bg-blue-600 rounded-md"
          >
            Create Post
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default CreatePost;
