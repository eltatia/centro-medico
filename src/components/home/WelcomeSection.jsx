// src/components/WelcomeSection.jsx
import React, { useRef } from "react";
import "../../styles/home/WelcomeSection.css";
import { Link } from "react-router-dom";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

export default function WelcomeSection() {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  const heroImageUrl =
    "https://images.unsplash.com/photo-1527610276290-a3f39e87a8e0?auto=format&fit=crop&w=1200&q=80";

  return (
    <section ref={sectionRef} className="py-5 welcome-text-white welcome-section">
      <div className="container">

        <div className="row align-items-center g-5">

          {/* Texto */}
          <div className="col-lg-6">
            <h2 className="fw-bold display-6">Bienvenido a Centro Médico Santa Rosa</h2>

            <p className="mt-3">
              Nuestra misión es proporcionar atención médica de alta calidad en un ambiente cálido.
              Nos dedicamos a la prevención, diagnóstico y tratamiento con tecnología moderna.
            </p>

            <Link className="btn btn-primary px-4 py-2 fw-bold mt-3 btn-cta-soft" to="/sobre_nosotros">
              Conoce más de nosotros
            </Link>
          </div>

          {/* Imagen */}
          <div className="col-lg-6">
            <img
              src={heroImageUrl}
              className="img-fluid rounded-3 shadow"
              alt="Doctora sonriendo"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
