import React from "react";

// Swiper (carousel)
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import your images from src/assets/whisky/
import whisky1 from "./assets/whisky/whisky1.png";
import whisky2 from "./assets/whisky/whisky2.png";
import whisky3 from "./assets/whisky/whisky3.png";
import whisky4 from "./assets/whisky/whisky4.png";
import whisky5 from "./assets/whisky/whisky5.png";
import whisky6 from "./assets/whisky/whisky6.png";


const IMAGES = [
  { src: whisky1, alt: "Whisky the Samoyed smiling" },
  { src: whisky2, alt: "Whisky being fluffy and majestic" },
  { src: whisky3, alt: "Whisky on an adventure walk" },
  { src: whisky4, alt: "Whisky enjoying pets" },
  { src: whisky5, alt: "Whisky being adorable" },
  { src: whisky6, alt: "Whisky living his best life" },
];


export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <div className="badge" aria-hidden="true">
            🐾
          </div>
          <div>
            <h1>Whisky</h1>
            <p className="subtitle">Samoyed • Professional Floof • Friendly Greeter</p>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="card intro">
          <h2>Meet Whisky</h2>
          <p>
            Hi! I’m <strong>Whisky</strong>, a Samoyed with maximum fluff and a very serious love
            for fun. If you’re looking for a smiling cloud on four paws — that’s me.
          </p>

          <div className="traits">
            <h3>Things I love</h3>
            <ul>
              <li>Snow zoomies and chilly adventures</li>
              <li>Belly rubs (the longer, the better)</li>
              <li>Meeting new people and collecting compliments</li>
              <li>Playing tug, chasing toys, and being dramatic about it</li>
              <li>Supervising snacks and kitchen activity</li>
            </ul>
          </div>
        </section>

        <section className="card gallery">
          <div className="galleryHeader">
            <h2>Whisky’s Photo Carousel</h2>
            <p className="muted">
              Use the arrows, swipe, or press <kbd>←</kbd>/<kbd>→</kbd>.
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Keyboard, A11y]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            a11y={{ enabled: true }}
            className="swiperWrap"
          >
            {IMAGES.map((img) => (
              <SwiperSlide key={img.src}>
                <figure className="slide">
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          <p className="hint">
            Tip: add more photos by importing them and adding to <code>IMAGES</code>.
          </p>
        </section>

        <footer className="footer">
          <p>
            Made with ❤️ for Whisky.
          </p>
        </footer>
      </main>
    </div>
  );
}
