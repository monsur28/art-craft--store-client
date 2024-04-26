/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./banner.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div className="container">
      <div className="App"></div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen rounded-3xl"
            style={{
              backgroundImage:
                "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a39f2b2a-6368-44ed-bddd-634d02fd9378/dgn91kg-282ed38f-5509-4e76-9bcb-6f5a8b15fcad.png/v1/fill/w_1280,h_718,q_80,strp/ethereal_dawn___fiery_landscape_art_print_by_mitoarts_dgn91kg-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzE4IiwicGF0aCI6IlwvZlwvYTM5ZjJiMmEtNjM2OC00NGVkLWJkZGQtNjM0ZDAyZmQ5Mzc4XC9kZ245MWtnLTI4MmVkMzhmLTU1MDktNGU3Ni05YmNiLTZmNWE4YjE1ZmNhZC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0qR4r9LY041J7-2M2S5tAqd8oZs4bOFYiJwnHwMzDDU)",
            }}
          >
            <div className="hero-overlay bg-opacity-30 rounded-3xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Ethereal Dawn</h1>
                <p className="mb-5">
                  The painting "Ethereal Dawn" captures the essence of a
                  pristine morning in a secluded forest. The scene unfolds with
                  a delicate blend of soft pastel hues and gentle contrasts. At
                  the heart of the composition lies a serene woodland, its
                  towering trees adorned with a subtle morning mist that hangs
                  in the air like a veil of whispers.
                </p>
                <button className="btn btn-primary">Explore Our Art</button>
              </div>
            </div>
          </div>
          {/* <img
            src="https://images.unsplash.com/photo-1597423244037-519742d0a9f0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="slide_image"
          /> */}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGFydHxlbnwwfHwwfHx8MA%3D%3D"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1548081087-a8a3bc4ff088?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGFydHxlbnwwfHwwfHx8MA%3D%3D"
            alt="slide_image"
          />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
