import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import Swooper from "swiper";
import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { DEFAULT_TRANSITION } from "../consts";
import { GlobalContext } from "../state/GlobalState";

type GalleryProps = {};

export const Gallery = ({}: GalleryProps) => {
  const sliderRef = useRef<SwiperRef | null>(null);
  const [swiper, setSwiper] = useState<Swooper | null>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const { galleryImages, setGalleryImages, galleryIndex } =
    useContext(GlobalContext);

  useEffect(() => {
    if (galleryImages && galleryIndex !== null) {
      sliderRef.current?.swiper.slideNext();
      sliderRef.current?.swiper.slideNext();
      sliderRef.current?.swiper.slideNext();
    } else {
    }
  }, [galleryImages]);

  return (
    <AnimatePresence mode={"wait"}>
      {galleryImages && (
        <motion.div
          key={"gallery"}
          {...DEFAULT_TRANSITION}
          className="fixed w-screen h-screen top-0 left-0 z-[99]"
        >
          <div className="w-full h-full relative">
            <div className="absolute bg-black opacity-95 w-full h-full" />
            <div
              className="absolute w-full h-full flex justify-center items-center"
              onClick={(e) => {
                setGalleryImages(null);
              }}
            >
              <div className="w-3/4 h-3/4 relative">
                <Swiper
                  modules={[Navigation, A11y]}
                  spaceBetween={16}
                  slidesPerView={"auto"}
                  initialSlide={galleryIndex ?? 0}
                  onSlideChange={() => {}}
                  onSwiper={(swiper) => {
                    setSwiper(swiper);
                  }}
                  className="h-full"
                  ref={sliderRef}
                >
                  {galleryImages?.map((image) => {
                    return (
                      <SwiperSlide key={image.url} className="h-full !w-fit">
                        <div
                          className="h-[95%] !w-fit flex justify-start items-center flex-col"
                          onClick={() => {}}
                        >
                          <img
                            src={image.url}
                            className="max-h-full max-w-full"
                          />
                          <p className="h-[5%] w-full text-left">
                            © {image.credit}
                          </p>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <button
                  className="prev-arrow absolute w-4 h-4 bg-red-500 textoutline text-[36px] top-1/2 left-[-26px] z-10 bg-transparent"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                >
                  {"<"}
                </button>
                <button
                  className="next-arrow absolute w-4 h-4 bg-red-500 textoutline text-[36px] top-1/2 right-[-26px] z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                >
                  {">"}
                </button>
              </div>
              <button
                className="prev-arrow absolute w-4 h-4 bg-red-500 textoutline text-[36px] top-0 right-8 z-10 bg-transparent"
                onClick={() => {
                  setGalleryImages(null);
                }}
              >
                {"x"}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
