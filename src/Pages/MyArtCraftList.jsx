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
  const [sort, setSort] = useState("");
  const userEmail = user ? user.email : null;

  useEffect(() => {
    fetch(
      `https://b9a9-art-craft-store-server.vercel.app/myartlist/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyItem(data);
      });
  }, [user]);

  const handleDelete = (_id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b9a9-art-craft-store-server.vercel.app/art/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              MySwal.fire({
                title: "Deleted!",
                text: "Your Art has been deleted.",
                icon: "success",
              });
              const remainData = myitem.filter((item) => item._id !== _id);
              setMyItem(remainData);
            }
          });
      }
    });
  };

  const handleSort = (customization) => {
    setSort(customization);
  };

  const filteredArtAndCraft = userEmail
    ? myitem.filter((artAndCraft) => artAndCraft.email === userEmail)
    : [];

  const uniqueCustomize = filteredArtAndCraft.filter(
    (customize, index, self) =>
      index ===
      self.findIndex((t) => t.customization === customize.customization)
  );

  const sortedItems = sort
    ? filteredArtAndCraft.filter(
        (artAndCraft) => artAndCraft.customization === sort
      )
    : filteredArtAndCraft;

  return (
    <Fade>
      <div className="dropdown dropdown-hover py-5 flex items-center justify-center">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-neutral text-white hover:bg-neutral"
        >
          Customization
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[160px] border"
        >
          {uniqueCustomize.map((item, index) => (
            <li key={index}>
              <a onClick={() => handleSort(item.customization)}>
                {item.customization}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
        {sortedItems?.map((item) => (
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
                  <Link
                    to={`/allartitems/${item._id}`}
                    className="bg-transparent w-full text-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  >
                    <button>View Details</button>
                  </Link>
                  <Link
                    // onClick={hadleUser}
                    to={`/updateData/${item._id}`}
                    className="bg-transparent w-full text-center hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  >
                    <button>Update</button>
                  </Link>
                  <Link
                    onClick={() => handleDelete(item._id)}
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
