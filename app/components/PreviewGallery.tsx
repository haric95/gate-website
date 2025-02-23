import React, { useCallback, useContext, useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { GlobalContext } from "../state/GlobalState";

type PreviewGalleryProps = {
  imageUrls: string[];
};

export const PreviewGallery = ({ imageUrls }: PreviewGalleryProps) => {
  const { setGalleryImages, setGalleryIndex } = useContext(GlobalContext);

  const sliderRef = useRef<SwiperRef | null>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="w-full h-full relative">
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={16}
        slidesPerView={"auto"}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
        className="h-full"
        ref={sliderRef}
      >
        {imageUrls.map((url, index) => {
          return (
            <SwiperSlide key={url} className="h-full !w-fit">
              <button
                className="h-full !w-fit"
                onClick={() => {
                  setGalleryImages(imageUrls);
                  setGalleryIndex(index);
                }}
              >
                <img
                  src={url}
                  className="h-full
            "
                />
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        className="prev-arrow absolute w-4 h-4 bg-red-500 strokeme text-xl top-[58px] left-[-16px] z-10 bg-transparent md:opacity-100 opacity-0"
        onClick={handlePrev}
      >
        {"<"}
      </button>
      <button
        className="next-arrow absolute w-4 h-4 bg-red-500 strokeme text-xl top-[58px] right-[-18px] z-10 md:opacity-100 opacity-0"
        onClick={handleNext}
      >
        {">"}
      </button>
    </div>
  );
};
