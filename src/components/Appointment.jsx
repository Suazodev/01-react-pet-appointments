const Appointment = ({ appointment, removeAppointment }) => {
  const { pet, owner, date, time, symptoms, id } = appointment;
  return (
    <div className="cita">
      <p>
        Mascota: <span>{pet}</span>
      </p>
      <p>
        Dueño: <span>{owner}</span>
      </p>
      <p>
        Fecha: <span>{date}</span>
      </p>
      <p>
        Hora: <span>{time}</span>
      </p>
      <p>
        Síntomas: <span>{symptoms}</span>
      </p>
      <button className="button eliminar u-full-width" onClick={() => removeAppointment(id)}>
          Eliminar cita &times;
      </button>
    </div>
  );
};

export default Appointment;
