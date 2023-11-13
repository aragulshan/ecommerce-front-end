import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { LoginSchema } from "../validation/LoginSchema";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/slices/authenticationSlice";
// import { login } from "../../redux/slices/authenticationSlice";

const Login = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleSubmit = (values) => {
    dispatch(loginUser(values));
    console.log("login as", values);
  };
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-[100%]">
          <label
            className="block text-gray-700 text-sm font-bold pt-2 pb-1"
            htmlFor="email"
          >
            Email
          </label>
          <Field
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            id="email"
            name="email"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm"
          />
          <label
            className="block text-gray-700 text-sm font-bold pt-2 pb-1"
            htmlFor="password"
          >
            Password
          </label>
          <Field
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            id="password"
            name="password"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="text-red-500 text-sm"
          />
          <div>
            <button
              type="submit"
              className="mt-8 bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </Form>
      </Formik>
      {error && <div className="text-red-500">{error}</div>}
    </>
  );
};

export default Login;
