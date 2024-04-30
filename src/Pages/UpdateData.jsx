import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const UpdateData = () => {
  const handleUpdateProduct = (e) => {
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
    };
    console.log(newArtItem);

    fetch(`http://localhost:5000/art/${_id}`, {
      method: "PUT",
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
            text: "Art Details Updated Succesfully",
            icon: "success",
          });
          e.form.reset();
        }
      });
  };

  const artData = useLoaderData();
  const {
    _id,
    artName,
    photoURL,
    subcategoryName,
    customization,
    price,
    rating,
    processingTime,
    stockStatus,
    description,
  } = artData;
  return (
    <div>
      <h2 className="text-center text-4xl font-bold">Update Your Data</h2>
      <form
        onSubmit={handleUpdateProduct}
        className="container flex flex-col space-y-12 dark:bg-gray-200"
      >
        <fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm ">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 items-center">
            <div className="col-span-full sm:col-span-3 ">
              <label className="text-sm">Art Name</label>
              <input
                id="name"
                name="name"
                defaultValue={artName}
                type="text"
                required
                placeholder="Art Name"
                className="w-full mt-2 rounded-md dark:text-gray-400 focus:ring p-4 focus:ring-opacity-75  focus:dark:ring-violet-600 border border-black dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Art PhotURL
              </label>
              <input
                id="photoURL"
                name="photoURL"
                defaultValue={photoURL}
                type="text"
                required
                placeholder="Art PhotURL"
                className="w-full mt-2  rounded-md p-4 focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 border border-black dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label>SubCatagory Name</label>
              <select
                required
                name="subcategory"
                defaultValue={subcategoryName}
                className="w-full p-4 mt-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 border border-black dark:border-gray-300"
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
                defaultValue={customization}
                required
                className="w-full p-4 mt-2 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 border border-black dark:border-gray-300"
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
                defaultValue={price}
                type="text"
                required
                placeholder="$"
                className="w-full mt-2 rounded-md p-4 focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 border border-black dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Rating</label>
              <input
                id="rating"
                name="rating"
                defaultValue={rating}
                type="text"
                required
                placeholder="*"
                className="w-full mt-2 rounded-md p-4 focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 border border-black dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Processing Time</label>
              <input
                id="processing_time"
                name="processing_time"
                defaultValue={processingTime}
                type="text"
                placeholder="*"
                required
                className="w-full mt-2 rounded-md p-4 focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 border border-black dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-sm">Stock Status</label>
              <select
                name="stockStatus"
                defaultValue={stockStatus}
                required
                className="w-full p-4 mt-2 text-slate-400 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-500 border border-black focus:dark:ring-violet-600 dark:border-gray-300"
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
                defaultValue={description}
                id=""
                cols="20"
                rows="5"
                required
                className="w-full mt-2 border border-black rounded-md p-10 focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300"
              ></textarea>
              <button className="btn btn-block col-span-6 bg-teal-500">
                Update Art Details
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default UpdateData;
