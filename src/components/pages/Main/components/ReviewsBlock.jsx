import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

import { fetchReviews } from "../../../../store/reducers/ActionCreators";
import ReviewBlock from "../../../ReviewBlock/ReviewBlock";
import SVGCombine from "../../../SVG/SVGCombine/SVGCombine";

function ReviewsBlock() {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviewReducer);
  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  const counReview = () => {
    if (window.innerWidth <= 830) return 1;
    return 2;
  };

  return (
    <div className="reviews">
      <div className="reviews__blockHeader blockHeader">
        <div className="blockHeader__title">Отзывы</div>
        <div className="blockHeader__subtitle rewLink">
          Посмотреть все отзывы о нас можно тут!
          <a
            target="blank"
            href="https://www.avito.ru/moskva/predlozheniya_uslug/ustanovka_vn.bloka._prodazha_konditsionerov_2431678456?utm_campaign=native&utm_medium=item_page_android&utm_source=soc_sharing"
          >
            <SVGCombine avito />
          </a>
        </div>
      </div>
      {
        <Swiper
          className="reviews__body bodyReviews"
          pagination={true}
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={counReview()}
        >
          {reviews.rows &&
            reviews?.rows.map((e) => (
              <SwiperSlide key={e.id} className="bodyReviews__element">
                <ReviewBlock
                  info={{
                    service: e.service,
                    name: e.name_person,
                    text: e.text,
                  }}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      }
    </div>
  );
}

export default ReviewsBlock;
