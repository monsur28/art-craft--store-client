import { Link, useLoaderData } from "react-router-dom";
// import { useLocation } from "react";

const AllArtItems = () => {
  const artData = useLoaderData();
  return (
    <div>
      <h2 className="text-center text-5xl font-bold">All Art & Craft Items</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image & Title Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Customization</th>
              <th>Stock Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {artData.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-full h-12">
                        <img src={item.photoURL} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.artName}</div>
                    </div>
                  </div>
                </td>
                <td>{item.subcategoryName}</td>
                <td>
                  <span>$ {item.price}</span>
                </td>
                <td>
                  <span className="flex gap-1">
                    <div>
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
                    </div>
                    <div>{item.rating}</div>
                  </span>
                </td>
                <td>
                  {item.customization === "Yes" ? (
                    <span className=" text-white bg-green-700 p-2 rounded-full">
                      {item.customization}
                    </span>
                  ) : (
                    <span className=" text-white bg-red-500 p-2 rounded-full">
                      {item.customization}
                    </span>
                  )}
                </td>
                <td>{item.stockStatus}</td>
                <th className="flex gap-2 mt-3">
                  <Link to={`/allartitems/${item._id}`}>
                    <button className="btn btn-success">View Details</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtItems;
