import PropTypes from "prop-types";
import { useContext } from "react";
import { FaCommentsDollar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const SingleArtItems = ({ item }) => {
  const { user } = useContext(AuthContext);

  const hadleUser = () => {
    if (user) {
      return item;
    } else {
      return MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Login to See the details",
      });
    }
  };
  const {
    _id,
    artName,
    photoURL,
    subcategoryName,
    description,
    price,
    rating,
  } = item;
  return (
    <div>
      <div className="p-4 shadow-md h-full  dark:bg-gray-50 dark:text-gray-800 rounded-lg border border-black ">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a className="mb-0 capitalize dark:text-gray-800">
              Sub-Category Name: {subcategoryName}
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={photoURL}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
          </div>
          <div className="flex justify-between text-lg">
            <div className="flex gap-2 items-center">
              <FaCommentsDollar /> {price}$
            </div>
            <div className="flex gap-2 items-center">
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
              {rating}
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-600">
                {artName}
              </h3>
            </a>
            <p className="leading-snug dark:text-gray-600">
              {description.slice(0, 150)} read more...
            </p>
          </div>
          <Link onClick={hadleUser} to={`/allartitems/${_id}`}>
            <button className="btn btn-block bg-green-400 dark:text-black">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

SingleArtItems.propTypes = {
  item: PropTypes.object,
};

export default SingleArtItems;
