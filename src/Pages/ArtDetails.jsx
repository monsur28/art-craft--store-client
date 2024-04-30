import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
import { FaCommentsDollar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { GiAutoRepair } from "react-icons/gi";

const ArtDetails = () => {
  const artData = useLoaderData();
  const handleBooked = () => {
    MySwal.fire({
      title: "Good job!",
      text: "This Art Is Now Yours",
      icon: "success",
    });
  };
  const {
    artName,
    photoURL,
    subcategoryName,
    description,
    price,
    rating,
    stockStatus,
    processingTime,
    customization,
  } = artData;
  return (
    <div>
      <Card className="w-full mt-5 shadow-lg">
        <CardHeader floated={false} color="blue-gray">
          <img src={photoURL} className="w-full" />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          <IconButton
            size="sm"
            variant="text"
            className="!absolute font-bold top-4 right-4 rounded-full p-10 bg-green-500"
          >
            {stockStatus}
          </IconButton>
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-bold text-2xl"
            >
              {artName}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <FaCommentsDollar /> ${price}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
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
            </Typography>
          </div>
          <hr className="my-3" />
          <Typography color="gray">{description}</Typography>
        </CardBody>
        <hr className="my-2" />
        <CardFooter className="pt-3">
          <div className="mb-3 flex items-center justify-between ">
            <Typography variant="h5" color="blue-gray" className="font-bold">
              Catagory Name: {subcategoryName}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <IoMdTime className="text-2xl" /> Processing Time:{" "}
              {processingTime}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <GiAutoRepair className="text-2xl" /> Customization:{" "}
              {customization}
            </Typography>
          </div>
          <Button
            onClick={handleBooked}
            className="mt-4"
            size="lg"
            fullWidth={true}
          >
            Buy Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ArtDetails;
