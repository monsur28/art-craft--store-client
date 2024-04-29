import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
const LandscapPainting = () => {
  const allArtAndCraft = useLoaderData();
  const subCategory = "Landscape Painting";

  const filteredArtAndCraft = allArtAndCraft.filter(
    (item) => item.subCategory === subCategory
  );
  return (
    <>
      <Fade>
        <div className="bg-[#E5E2DB] p-2">
          <Helmet>
            <title>Ranga-Watercolour-Painting</title>
          </Helmet>
          <div className="flex justify-center text-center">
            <div className="bg-[#ffffff] rounded-md p-5 md:p-10 my-[100px] max-w-[9000px] shadow">
              <h1 className="text-[30px] font-mono">Watercolour Painting</h1>
              <p className="max-w-[600px] m-auto mt-2">
                Introducing our latest essentials for watercolor painting! Dive
                into a world of vibrant hues and delicate washes with our
                selection of high-quality paints, brushes, and papers. Let your
                creativity flow with our newest supplies.
              </p>
              <div className="dropdown dropdown-hover py-5"></div>
              <div className="md:mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredArtAndCraft.map((item) => (
                  <div
                    key={item.id}
                    className="card bg-[#E5E2DB] card-compact shadow-xl rounded-none"
                  >
                    <figure>
                      <img
                        className="h-[250px] rounded-md w-full object-cover"
                        src={item.photoURL}
                        alt="image"
                      />
                    </figure>
                    <div className="p-5 text-left">
                      <h2 className="card-title">{item.itemName}</h2>
                      <div className="flex gap-3">
                        <p className="text-[20px] flex items-center gap-1">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                          </span>
                          {item.price}
                        </p>
                        <p className="text-[20px] flex items-center gap-1">
                          <span className="">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                              />
                            </svg>
                          </span>
                          {item.rating}
                        </p>
                      </div>
                      <p className="text-[16px]">
                        <span className="font-semibold">
                          Sub Category Name :
                        </span>{" "}
                        {item.subCategory}
                      </p>
                      <p className="text-[16px]">
                        <span className="font-semibold">Processing Time :</span>{" "}
                        {item.processingTime}
                      </p>
                      <p className="text-[16px] max-w-[400px]">
                        <span className="font-semibold">Details:</span>{" "}
                        {item.details.substring(0, 65)}...
                      </p>
                      <Link to={`/DetailsArtAndCraft/${item._id}`}>
                        <button className="bg-transparent py-2 mt-5 border-black border text-black px-5 rounded-full hover:bg-black hover:text-white mb-2">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default LandscapPainting;
