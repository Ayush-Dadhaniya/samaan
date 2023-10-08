import React from "react";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import productDetails from "../context/productDetails";
import AuthContext from "../context/Auth";
const DOD = () => {
  const [swiper, setSwiper] = React.useState(null);
  const { authTokens } = React.useContext(AuthContext);
  const product_data = React.useContext(productDetails);
  const [data, setdata] = React.useState();
  const fetchdata = async () => {
    if (authTokens) {
      console.log("catogary with authtoken");
      await fetch(
        `https://api-krudra9125-gmailcom.vercel.app/api/products/chocolate`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens["access"]}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setdata(data);
        })
        .catch((err) => console.log(err));
    } else {
      await fetch(
        `https://api-krudra9125-gmailcom.vercel.app/api/products/chocolate`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setdata(data);
        })
        .catch((err) => console.log(err));
    }
  };
  // const handleSlideChangeTransitionEnd = () => {
  //   if (swiper) {
  //     swiper.autoplay.start();
  //   }
  // };
  React.useLayoutEffect(() => {
    fetchdata();
  }, [product_data]);

  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
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
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 6,
    },
  };

  return (
    <Swiper
      pagination={{ clickable: true }}
      rewind={false}
      breakpoints={breakpoints}
      slidesPerView={6}
      autoplay={true}
      // onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
      onSlideChange={() => console.log("slide change")}
      onSwiper={setSwiper}
    >
      {data?.map((item, id) => {
        return (
          <SwiperSlide key={id} className="flex justify-center ">
            <ProductCard
              key={id}
              name={item.name}
              price={item.price}
              imgSrc={item.img_path}
              weight={item.weight}
              category={item.category}
              className="mx-auto "
              productId={item.id}
              cartquantity={item.quantity}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default DOD;
