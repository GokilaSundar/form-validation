import React from "react";
import { Formik, Form, Field} from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  place: Yup.string().required("Please fill out this field"),
  description: Yup.string().required("Please fill out this field"),
  file: Yup.string().required("Please fill out this field"),
});
const places = [
  { key: "1", name: "Coimbatore" },
  { key: "2", name: "Tirupur" },
  { key: "3", name: "Erode" },
  { key: "4", name: "Ooty" },
];
const FormComponent = () => (
  <div>
    <Formik
      initialValues={{
        place: "",
        description: "",
        file: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values,{resetForm}) => {
        console.log(values);
       resetForm()
      }}
    >
      {({ errors, touched }) => (
        <div className="grid gap-y-5 justify-center">
          <h1 className="font-semibold text-gray-600 text-3xl">ADD DETAILS</h1>
          <Form className="border-2 border-white shadow-lg w-[500px] p-10 bg-white rounded-lg grid gap-y-6">
            <div className="flex flex-col items-start ">
              <label className="font-semibold mb-2">Place</label>

              <Field
                as="select"
                name="place"
                className="border-[1.5px] pl-2 h-10 w-full rounded-md border-zinc-300"
              >
                <option value="" disabled>
                  Select a place
                </option>
                {places.map((place) => (
                  <option key={place.key} value={place.name}>
                    {place.name}
                  </option>
                ))}
              </Field>
              {errors.place && touched.place ? (
                <div className="text-red-500 text-xs">{errors.place}</div>
              ) : null}
            </div>

            <div className="flex flex-col items-start">
              <label className="font-semibold mb-2">Description</label>
              <Field
                as="textarea"
                placeholder="Decribe the details about Image"
                name="description"
                type="text"
                className="border-[1.5px] pl-2   h-28 w-full rounded-md border-zinc-300"
              />
              {errors.description && touched.description ? (
                <div className="text-red-500 text-xs">{errors.description}</div>
              ) : null}
            </div>
            <div className="flex flex-col items-start">
              <label className="font-semibold mb-2">Image</label>
              <Field type="file" name="file" />
              {errors.file && touched.file ? (
                <div className="text-red-500 text-xs">{errors.file}</div>
              ) : null}
              {/* <ErrorMessage name="file"/> */}
            </div>

            <button
              className="flex justify-center p-2 font-medium border w-20 border-blue-700 rounded-md bg-blue-700 text-white"
              type="submit"
            >
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  </div>
);
export default FormComponent;
