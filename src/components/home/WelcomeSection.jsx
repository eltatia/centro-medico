// src/components/WelcomeSection.jsx
import React, { useRef } from "react";
import "../../styles/home/WelcomeSection.css";
import { Link } from "react-router-dom";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

export default function WelcomeSection() {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  const heroImageUrl =
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

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
