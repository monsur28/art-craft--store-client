import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Fade } from "react-awesome-reveal";
import { FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const MyArtCraftList = () => {
  const { user } = useContext(AuthContext) || {};
  const [myitem, setMyItem] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myartlist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyItem(data);
      });
  }, [user]);

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
    <Fade>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {myitem?.map((item) => (
          <>
            <div className="mt-4 card card-compact h-full bg-base-100 shadow-xl border border-black dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600">
              <figure className="relative">
                <img className="w-full h-64" src={item.photoURL} alt="Shoes" />
                {item.stockStatus === "Sale" ? (
                  <div className="absolute bg-green-400 p-2 rounded-full top-1 ml-[330px]">
                    <h2 className=" text-black ">{item.stockStatus}</h2>
                  </div>
                ) : (
                  <div className="absolute bg-cyan-400 p-2 rounded-full top-1 ml-[330px]">
                    <h2 className=" text-black">{item.stockStatus}</h2>
                  </div>
                )}
              </figure>
              <div className="card-body">
                <h2 className="card-title font-semibold">{item.artName}</h2>
                <p className="text-left">{item.description}</p>
                <div className="flex justify-between">
                  <div className="flex items-center text-lg gap-2">
                    <FaDollarSign className="" />
                    {item.price}
                  </div>
                  <div className="flex items-center text-lg gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="-mt-0.5 h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item.rating}
                  </div>
                </div>
                <div className="card-actions justify-end">
                  {/* <Link
                    // onClick={hadleUser}
                    // to={`/allartitems/${item._id}`}
                    className="bg-transparent w-full text-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  >
                    Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn bg-transparent w-full text-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent round "
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    Upadate
                  </button>
                  <dialog id="my_modal_1" className="modal">
                    <div className="modal-box max-w-full">
                      <h3 className="font-bold text-lg">
                        Update Your Product Details
                      </h3>
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
                                type="text"
                                defaultValue={item.artName}
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
                                type="text"
                                defaultValue={item.photoURL}
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
                                defaultValue={item.subcategoryName}
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
                                defaultValue={item.customization}
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
                                defaultValue={item.price}
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
                                defaultValue={item.rating}
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
                                defaultValue={item.processingTime}
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
                                defaultValue={item.stockStatus}
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
                                id=""
                                cols="20"
                                defaultValue={item.description}
                                rows="5"
                                required
                                className="w-full mt-2 border border-black rounded-md p-10 focus:ring focus:ring-opacity-75 dark:text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300"
                              ></textarea>
                            </div>
                            <button className="btn btn-block col-span-6 bg-teal-500">
                              Update Art Details
                            </button>
                          </div>
                        </fieldset>
                      </form>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
                  {/* </Link> */}
                  <Link
                    // onClick={hadleUser}
                    // to={`allartitems/${_id}`}
                    className="bg-transparent w-full text-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  >
                    <button>Delete</button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </Fade>
  );
};

export default MyArtCraftList;
