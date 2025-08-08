import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import FilmCard from "@/app/components/FilmCard";

type Film = {
    id: string
    title: string
    opening_crawl: string
}

type FilmSwiperProps = {
    films: Film[]
}

export default function FilmSwiper ({films}: FilmSwiperProps){
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{clickable:true}}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            >
            {films.map((film) => (
                <SwiperSlide key={film.id}>
                    <FilmCard title={film.title} opening_crawl={film.opening_crawl}/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}