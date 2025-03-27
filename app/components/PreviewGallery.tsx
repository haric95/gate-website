import { useCallback, useContext, useRef } from "react";
import { A11y, Navigation } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { GlobalContext } from "../state/GlobalState";

type PreviewGalleryProps = {
  imageUrls: { url: string; credit: string; alt: string }[];
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
    imageUrls.length > 0 && (
      <div className="w-full h-full relative">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={8}
          slidesPerView={"auto"}
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
          className="h-full"
          ref={sliderRef}
        >
          {imageUrls.map((image, index) => {
            return (
              <SwiperSlide key={image.url} className="h-full !w-fit">
                <button
                  className="h-full !w-fit"
                  onClick={() => {
                    setGalleryImages(imageUrls);
                    setGalleryIndex(index);
                  }}
                >
                  <Image
                    src={image.url}
                    className="h-full"
                    alt={image.alt}
                    height={128}
                    width={128}
                    style={{ width: "auto", height: "128px" }}
                  />
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className="prev-arrow absolute w-4 h-4 bg-red-500 textoutline text-xl top-[58px] left-[-16px] z-10 bg-transparent md:opacity-100 opacity-0"
          onClick={handlePrev}
        >
          {"<"}
        </button>
        <button
          className="next-arrow absolute w-4 h-4 bg-red-500 textoutline text-xl top-[58px] right-[-18px] z-10 md:opacity-100 opacity-0"
          onClick={handleNext}
        >
          {">"}
        </button>
      </div>
    )
  );
};
