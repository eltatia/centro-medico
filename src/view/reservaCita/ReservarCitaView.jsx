import { useState } from "react";
import StepPaciente from "../../components/reservarCita/StepPaciente";
import StepCalendario from "../../components/reservarCita/StepCalendario";
import HorariosDisponibles from "../../components/reservarCita/HorariosDisponibles";
import ResumenCita from "../../components/reservarCita/ResumenCita";

import "../../styles/reservarCita/ReservarCitaView.css";

export default function ReservarCitaView() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  const [paciente, setPaciente] = useState("");
  const [tipoCita, setTipoCita] = useState("adulto");
  const [telefono, setTelefono] = useState("");
  const [sintomas, setSintomas] = useState("");

  const steps = [
    {
      id: 1,
      label: "Datos del paciente",
      completed: paciente.trim() !== "" && telefono.length === 9 && sintomas.trim() !== "",
    },
    {
      id: 2,
      label: "Fecha seleccionada",
      completed: !!selectedDay,
    },
    {
      id: 3,
      label: "Horario reservado",
      completed: !!selectedHour,
    },
  ];

  const activeIndex = steps.findIndex((step) => !step.completed);
  const currentStep = activeIndex === -1 ? steps.length : activeIndex + 1;

  return (
    <div className="container reservar-container py-5">

      {/* CABECERA PRINCIPAL */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5 text-dark">
          Agenda tu Cita Médica
        </h1>
        <h2 className="text-secondary fs-5 mt-2">
          Sigue los pasos para encontrar un horario que te convenga.
        </h2>
      </div>

      <div className="progress-stepper mb-5">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`step-item ${step.completed ? "is-complete" : ""} ${currentStep === step.id ? "is-active" : ""}`}
          >
            <div className="step-circle">{step.completed ? "✓" : step.id}</div>
            <p className="step-label">{step.label}</p>
            {index < steps.length - 1 && <span className="step-connector" />}
          </div>
        ))}
      </div>

      {/* CONTENEDOR DE PASOS */}
      <div className="row g-4">

        {/* IZQUIERDA */}
        <div className="col-lg-6 d-flex flex-column gap-4">
          <StepPaciente
            paciente={paciente}
            setPaciente={setPaciente}
            telefono={telefono}
            setTelefono={setTelefono}
            sintomas={sintomas}
            setSintomas={setSintomas}
            tipoCita={tipoCita}
            setTipoCita={setTipoCita}
          />

          <StepCalendario
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
        </div>

        {/* DERECHA */}
        <div className="col-lg-6 d-flex flex-column gap-4">
          <HorariosDisponibles
            selectedHour={selectedHour}
            setSelectedHour={setSelectedHour}
          />

          <ResumenCita
            paciente={paciente}
            telefono={telefono}
            sintomas={sintomas}
            fecha={selectedDay}
            hora={selectedHour}
            tipoCita={tipoCita}
          />
        </div>

      </div>
    </div>
  );
}
