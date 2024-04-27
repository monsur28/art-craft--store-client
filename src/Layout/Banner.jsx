/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";

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
            <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
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
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen rounded-3xl"
            style={{
              backgroundImage:
                "url(https://rs.wescover.com/c_limit,f_auto,q_auto,w_2000/v1/wescover-user-uploaded/p0xvjan0mn2mzvdruwr3)",
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Mountain view canvas
                </h1>
                <p className="mb-5">
                  "Mountain Majesty" invites viewers to embark on a visual
                  journey through the rugged grandeur of a majestic mountain
                  landscape. The canvas is dominated by the towering presence of
                  a snow-capped peak, its craggy silhouette rising proudly
                  against a vast expanse of azure sky.
                </p>
                <button className="btn btn-primary">Explore Our Art</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen rounded-3xl"
            style={{
              backgroundImage:
                "url(https://cdn11.bigcommerce.com/s-ekl27muf8u/images/stencil/608x608/products/426/429/Silent_Forest_I_Landscape_Oil_Painting__93490.1559147275.jpg?c=2)",
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Silent Forest I - Landscape Oil Painting
                </h1>
                <p className="mb-5">
                  A beautiful moment in time is captured in this painting of
                  thick woods warmed my the sun. Julia and her husband were
                  4-wheeling while in the northern Pennsylvania mountains and
                  came upon a young deer, who was startled long enough for Julia
                  to photograph him. Back in her studio, Julia captured that
                  moment in the forest with the glowing sun behind the trees and
                  shining on the back of the deer. The rich, lavender highlights
                  on the trees against the lush green foliage add an
                  impressionistic feel to this quiet scene.
                </p>
                <button className="btn btn-primary">Explore Our Art</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen rounded-3xl"
            style={{
              backgroundImage:
                "url(https://cdn11.bigcommerce.com/s-ekl27muf8u/images/stencil/608x608/products/155/158/Fall_Forest_Landscape_Oil_Painting__38961.1557942145.jpg?c=2)",
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Fall Forest - Landscape Oil Painting
                </h1>
                <p className="mb-5">
                  This is oil painting is a scene from early Fall at the edge of
                  the deep woods in Northern Pennsylvania. Some of the trees are
                  still green, but the many already turning red have caught
                  Julia's attention. The way she composes these elements with a
                  rich, autumn-hued palette is a sensitive interpretation of
                  nature's handiwork.
                </p>
                <button className="btn btn-primary">Explore Our Art</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen rounded-3xl"
            style={{
              backgroundImage:
                "url(https://cdn11.bigcommerce.com/s-ekl27muf8u/images/stencil/608x608/products/696/874/Summer-Bouquet-4__69936.1617314784.jpg?c=2)",
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Summer Bouquet 4 - flower watercolor painting
                </h1>
                <p className="mb-5">
                  An impressionistic watercolor & Ink painting of a bouquet of
                  flowers painted on canvas by Julia Swartz.
                </p>
                <button className="btn btn-primary">Explore Our Art</button>
              </div>
            </div>
          </div>
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
