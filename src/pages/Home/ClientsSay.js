import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import reviews from "../../data/reviewData";
import { PaperClipIcon } from "@heroicons/react/24/outline";
import Review from "./Review";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

function ClientsSay() {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("http://localhost:5000/reviewers").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section id="review" className="py-32 px-10">
      <div className="flex justify-between">
        <img src="" alt="" />
        <div>
          <h2 className="text-3xl font-semibold">
            <span className="text-primary">What Our Clients</span> Say About Our
            Service
          </h2>
        </div>
        <div className="h-32 w-32 text-[#c18f59]/60">
          <PaperClipIcon />
        </div>
      </div>
      <div>
        <Swiper
          // spaceBetween={30}
          style={{
            "--swiper-navigation-color": "#c18e86",
            "--swiper-navigation-size": "35px",
            "--swiper-pagination-color": "#c18e86",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          {reviews.map((item) => (
            <SwiperSlide key={item._id} className="py-10">
              <Review key={item._id} reviewItem={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ClientsSay;
