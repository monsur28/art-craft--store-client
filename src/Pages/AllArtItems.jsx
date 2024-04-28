import { useLoaderData } from "react-router-dom";
import SingleArtItems from "../Layout/SingleArtItems";

const AllArtItems = () => {
  const artData = useLoaderData();
  return (
    <div>
      <h2 className="text-center text-5xl font-bold">All Art & Craft Items</h2>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {artData.map((item) => (
          <SingleArtItems key={item._id} item={item}></SingleArtItems>
        ))}
      </div>
    </div>
  );
};

export default AllArtItems;
