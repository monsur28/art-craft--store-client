import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
const Category = () => {
  return (
    <div>
      <div className="text-center text-4xl">
        <h1
          style={{
            paddingBottom: "2rem",
            margin: "auto 0",
            fontWeight: "normal",
          }}
        >
          We Have Painting of{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>
            <Typewriter
              words={[
                "Landscape Painting",
                "Portrait Drawing",
                "Watercolour Painting",
                "Oil Painting",
              ]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Link to="/allartitems?subcategoryName=Landscape Painting">
          <div className="card bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://i.ibb.co/Tm02Vss/The-Starry-Night-1200x630-1.jpg"
                alt="Landscape Painting"
              />
            </figure>
            <div className="card-body flex justify-center items-center">
              <h2 className="card-title">Landscape Painting</h2>
            </div>
          </div>
        </Link>
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://i.ibb.co/2S3HpJb/Rod-Luff-006.jpg" alt="Shoes" />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title">Portrait Drawing</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a39f2b2a-6368-44ed-bddd-634d02fd9378/dgn91kg-282ed38f-5509-4e76-9bcb-6f5a8b15fcad.png/v1/fill/w_1280,h_718,q_80,strp/ethereal_dawn___fiery_landscape_art_print_by_mitoarts_dgn91kg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzE4IiwicGF0aCI6IlwvZlwvYTM5ZjJiMmEtNjM2OC00NGVkLWJkZGQtNjM0ZDAyZmQ5Mzc4XC9kZ245MWtnLTI4MmVkMzhmLTU1MDktNGU3Ni05YmNiLTZmNWE4YjE1ZmNhZC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0qR4r9LY041J7-2M2S5tAqd8oZs4bOFYiJwnHwMzDDU"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title">Oil Painting</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl image-full ">
          <figure>
            <img
              src="https://www.rileystreet.com/cdn/shop/articles/shutterstock_410271079_1024x1024.jpg?v=1624398205"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title">Watercolour Painting:</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://blog.daisie.com/content/images/size/w2000/2023/03/birmingham-museums-trust-gHkgqZhHPbM-unsplash.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title">Charcoal Sketching</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://cooldrawingidea.com/wp-content/uploads/2020/05/Doraemon-Drawing.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title">Cartoon Drawing</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
