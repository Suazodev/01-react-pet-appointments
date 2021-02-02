import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ createAppointment }) => {
  const [appointment, setAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptoms: '',
  });
  const [error, setError] = useState(false);
  const handleState = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };
  const { pet, owner, date, time, symptoms } = appointment;
  const submitAppointment = (e) => {
    e.preventDefault();
    if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    appointment.id = uuidv4();
    createAppointment(appointment);
    setAppointment({
      pet: '',
      owner: '',
      date: '',
      time: '',
      symptoms: '',
    });
  };
  return (
    <>
      <h2>Crear cita</h2>
      {error ? <p className="alerta-error">Todos los cambios son obligatorios</p> : null}
      <form onSubmit={submitAppointment}>
        <label>Nombre mascota</label>
        <input type="text" name="pet" className="u-full-width" placeholder="pet name" onChange={handleState} value={pet} />
        <label>Nombre dueño</label>
        <input type="text" name="owner" className="u-full-width" placeholder="pet owner name" onChange={handleState} value={owner} />
        <label>Fecha</label>
        <input type="date" name="date" className="u-full-width" onChange={handleState} value={date} />
        <label>Hora</label>
        <input type="time" name="time" className="u-full-width" onChange={handleState} value={time} />
        <label>Síntomas</label>
        <textarea className="u-full-width" name="symptoms" onChange={handleState} value={symptoms}></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </>
  );
};

export default Form;
