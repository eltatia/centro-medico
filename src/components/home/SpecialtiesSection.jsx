// src/components/SpecialtiesSection.jsx
import React, { useRef } from "react";
import {
  MdFavorite,
  MdChildCare,
  MdPregnantWoman,
  MdFaceRetouchingNatural
} from "react-icons/md";
import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";
import "../../styles/home/SpecialtiesSection.css";

export default function SpecialtiesSection() {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  const specialties = [
    {
      icon: <MdFavorite size={50} className="text-primary" />,
      title: "Cardiología",
      desc: "Cuidado integral del corazón y sistema circulatorio."
    },
    {
      icon: <MdChildCare size={50} className="text-primary" />,
      title: "Pediatría",
      desc: "Atención médica para niños y adolescentes."
    },
    {
      icon: <MdPregnantWoman size={50} className="text-primary" />,
      title: "Ginecología",
      desc: "Salud femenina en todas las etapas de la vida."
    },
    {
      icon: <MdFaceRetouchingNatural size={50} className="text-primary" />,
      title: "Dermatología",
      desc: "Diagnóstico y tratamiento de enfermedades de la piel."
    }
  ];

  return (
    <section ref={sectionRef} className="py-5 bg-light specialties-section">
      <div className="container">

        {/* Título */}
        <div className="text-center mb-5 section-header">
          <h2 className="fw-bold text-dark">Nuestras Especialidades</h2>
          <p className="text-muted fs-5">
            Servicios médicos para cubrir todas tus necesidades de salud.
          </p>
        </div>

        {/* Grid */}
        <div className="row g-4">
          {specialties.map((s) => (
            <div key={s.title} className="col-12 col-sm-6 col-lg-3">
              <div className="p-4 border rounded shadow-sm bg-white h-100 text-center specialty-card">

                {/* Ícono */}
                <div className="mb-3 specialty-icon">
                  {s.icon}
                </div>

                <h5 className="fw-bold">{s.title}</h5>
                <p className="text-muted small">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

