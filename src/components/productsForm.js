// components/ProductForm.js
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/slices/uploadProductSlice";
// import { addProduct } from "../redux/productSlice";

const ProductForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
      discountPercentage: "",
      rating: "",
      stock: "",
      brand: "",
      category: "",
      thumbnail: null,
      images: "", // For simplicity, assuming you upload multiple image URLs as a comma-separated string
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      price: Yup.number()
        .required("Price is required")
        .positive("Price must be positive"),
      discountPercentage: Yup.number()
        .required("Discount Percentage is required")
        .max(100, "Discount Percentage must be between 0 and 100"),
      rating: Yup.number()
        .required("Rating is required")
        .min(0, "Rating must be between 0 and 5")
        .max(5, "Rating must be between 0 and 5"),
      stock: Yup.number()
        .required("Stock is required")
        .integer("Stock must be an integer")
        .min(0, "Stock must be 0 or greater"),
      brand: Yup.string().required("Brand is required"),
      category: Yup.string().required("Category is required"),
      thumbnail: Yup.mixed().required("Thumbnail is required"), // Use Yup.mixed() for file input
      //   thumbnail: Yup.string().required("Thumbnail URL is required"),
      images: Yup.string().required("Images URLs are required"),
    }),
    onSubmit: (values) => {
      // Convert the comma-separated images string to an array
      values.images = values.images.split(",").map((image) => image.trim());

      dispatch(addProduct(values));
      formik.resetForm();
    },
  });

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
        {/* Form fields go here */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            //   className="w-full border rounded-md py-2 px-3"
          />
          {formik.touched.title && formik.errors.title && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.title}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            //   className="w-full border rounded-md py-2 px-3"
          />
          {formik.touched.description && formik.errors.description && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.description}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            //   className="w-full border rounded-md py-2 px-3"
          />
          {formik.touched.price && formik.errors.price && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.price}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="stock" className="block text-gray-700 font-bold mb-2">
            Stock
          </label>
          <input
            type="text"
            id="stock"
            name="stock"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.stock}
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            //   className="w-full border rounded-md py-2 px-3"
          />
          {formik.touched.stock && formik.errors.stock && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.stock}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="brand" className="block text-gray-700 font-bold mb-2">
            Brand
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.brand}
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            //   className="w-full border rounded-md py-2 px-3"
          />
          {formik.touched.brand && formik.errors.brand && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.brand}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 font-bold mb-2"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            //   className="w-full border rounded-md py-2 px-3"
          />
          {formik.touched.category && formik.errors.category && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.category}
            </div>
          )}
        </div>
        {/* <div className="mb-4">
          <label
            htmlFor="thumbnail"
            className="block text-gray-700 font-bold mb-2"
          >
            Thumbnail
          </label>
          <input
            type="text"
            id="thumbnail"
            name="thumbnail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.thumbnail}
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            //   className="w-full border rounded-md py-2 px-3"
          />
          {formik.touched.thumbnail && formik.errors.thumbnail && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.thumbnail}
            </div>
          )}
        </div> */}
        {/* <div className="mb-4">
          <label
            htmlFor="images"
            className="block text-gray-700 font-bold mb-2"
          >
            Images
          </label>
          <input
            type="file"
            name="digital_signature"
            className="form-control"
            onChange={formik.handleChange}
          />
          <p className="image-size-ratio">
            Image Size Ratio: 400 * 200 px (PNG Format)
          </p>
          {/* <input
            type="text"
            id="images"
            name="images"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.images}
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            //   className="w-full border rounded-md py-2 px-3"
          /> */}
        {/* {formik.touched.images && formik.errors.images && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.images}
            </div>
          )}
        </div> */}
        <div className="mb-4">
          <label
            htmlFor="thumbnail"
            className="block text-gray-700 font-bold mb-2"
          >
            Thumbnail Image
            {/* Thumbnail URL */}
          </label>
          <input
            type="file"
            id="thumbnail"
            name="thumbnail"
            className="form-control"
            // onChange={formik.handleChange}
            onChange={(event) => {
              // Set the file in formik state
              formik.setFieldValue("thumbnail", event.currentTarget.files[0]);
            }}
          />
          <p className="image-size-ratio">
            Image Size Ratio: 400 * 200 px (PNG Format)
          </p>
          {/* <input
            type="text"
            id="thumbnail"
            name="thumbnail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.thumbnail}
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            //   className="w-full border rounded-md py-2 px-3"
          /> */}
          {formik.touched.thumbnail && formik.errors.thumbnail && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.thumbnail}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="images"
            className="block text-gray-700 font-bold mb-2"
          >
            Images URLs (comma-separated)
          </label>
          <input
            type="text"
            id="images"
            name="images"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.images}
            className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            //   className="w-full border rounded-md py-2 px-3"
          />
          {formik.touched.images && formik.errors.images && (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.images}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-[#3E8AAD] text-white px-4 py-2 rounded-md"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
