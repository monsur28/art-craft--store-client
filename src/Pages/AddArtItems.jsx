import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const AddArtItems = () => {
  const { user } = useContext(AuthContext);

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const artName = form.name.value;
    const photoURL = form.photoURL.value;
    const subcategoryName = form.subcategory.value;
    const customization = form.customization.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processingTime = form.processing_time.value;
    const stockStatus = form.stockStatus.value;
    const description = form.description.value;
    const email = user.email;
    const userName = user.displayName;
    console.log(artName);

    const newArtItem = {
      artName,
      photoURL,
      subcategoryName,
      customization,
      price,
      rating,
      processingTime,
      stockStatus,
      description,
      email,
      userName,
    };
    console.log(newArtItem);

    fetch("http://localhost:5000/art", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newArtItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          MySwal.fire({
            title: "Good job!",
            text: "Art Added Succesfully",
            icon: "success",
          });
          e.form.reset();
        }
      });
  };
  return (
    <div>
      <h2 className="text-center lg:text-6xl text-2xl">
        Add Art & Craft Items
      </h2>
      <section className="p-6 dark:text-gray-900">
        <form
          onSubmit={handleAddProduct}
          className="container flex flex-col space-y-12 dark:bg-gray-200"
        >
          <fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm ">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 items-center">
              <div className="col-span-full sm:col-span-3 ">
                <label className="text-sm">Art Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Art Name"
                  className="w-full mt-2 rounded-md dark:text-gray-400 focus:ring p-4 focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Art PhotURL
                </label>
                <input
                  id="photoURL"
                  name="photoURL"
                  type="text"
                  placeholder="Art PhotURL"
                  className="w-full mt-2  rounded-md p-4 focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label>SubCatagory Name</label>
                <select
                  required
                  name="subcategory"
                  className="w-full p-4 mt-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300"
                >
                  <option>Select One</option>
                  <option>Landscape Painting</option>
                  <option>Portrait Drawing</option>
                  <option>Watercolour Painting</option>
                  <option>Oil Painting</option>
                  <option>Charcoal Sketching</option>
                  <option>Cartoon Drawing</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Customization</label>
                <select
                  name="customization"
                  className="w-full p-4 mt-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300"
                >
                  <option>Select One</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Price</label>
                <input
                  id="price"
                  name="price"
                  type="text"
                  placeholder="$"
                  className="w-full mt-2 rounded-md p-4 focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Rating</label>
                <input
                  id="rating"
                  name="rating"
                  type="text"
                  placeholder="*"
                  className="w-full mt-2 rounded-md p-4 focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Processing Time</label>
                <input
                  id="processing_time"
                  name="processing_time"
                  type="text"
                  placeholder="*"
                  className="w-full mt-2 rounded-md p-4 focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Stock Status</label>
                <select
                  name="stockStatus"
                  className="w-full p-4 mt-2 text-slate-400 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300"
                >
                  <option>Select One</option>
                  <option>In stock</option>
                  <option>Made to Order</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-3">
                <div className="col-span-full sm:col-span-3"></div>
              </div>
              <div className="col-span-full ">
                <label className="text-sm">Description</label>
                <textarea
                  name="description"
                  id=""
                  cols="20"
                  rows="5"
                  className="w-full mt-2 rounded-md p-10 focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300"
                ></textarea>
                <div className="flex mt-5 items-center lg:w-[880px] w-full pt-4 space-x-1 justify-center border-[5px]">
                  <div className="flex-8 h-px lg:w-96 sm:w-16 text-center dark:bg-gray-300"></div>
                  <p className="px-3 text-lg dark:text-gray-500 ">
                    User Details
                  </p>
                  <div className="flex-8 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
              </div>
              <div className="col-span-full sm:col-span-3 ">
                <label className="text-slate-900 dark:text-slate-500">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  defaultValue={user.email}
                  type="email"
                  disabled
                  placeholder="email"
                  className="w-full border border-black mt-2 rounded-md focus:ring p-4 focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  UserName
                </label>
                <input
                  id="username"
                  defaultValue={user.displayName}
                  name="username"
                  type="text"
                  disabled
                  placeholder="username"
                  className="w-full mt-2 rounded-md p-4 focus:ring focus:ring-opacity-75 dark:text-gray-500 border border-black focus:dark:ring-violet-600 dark:border-gray-300"
                />
              </div>
              <button className="btn btn-block col-span-6">Add Product</button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddArtItems;
