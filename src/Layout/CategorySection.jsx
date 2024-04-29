/* eslint-disable react/prop-types */
const CategorySection = ({ item }) => {
  const { photoURL, subcategoryName } = item;
  return (
    <Link to={`${subcategoryName}`}>
      <div className="cursor-pointer border rounded-md">
        <div
          className="p-5 flex justify-center bg-cover rounded-md"
          style={{ backgroundImage: `url('${photoURL}')` }}
        >
          <h2 className="card-title my-10 text-[14px] border bg-[#FFFFFF] px-[10px] py-2 rounded-md">
            {subcategoryName}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default CategorySection;
