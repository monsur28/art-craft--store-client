import PropTypes from "prop-types";
import { FaRegStar, FaCommentsDollar } from "react-icons/fa";

const SingleArtItems = ({ item }) => {
  const { artName, photoURL, subcategoryName, description, price, rating } =
    item;
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
              <FaRegStar /> {rating}
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
          <button className="btn btn-block bg-green-400 dark:text-black">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

SingleArtItems.propTypes = {
  item: PropTypes.object,
};

export default SingleArtItems;
