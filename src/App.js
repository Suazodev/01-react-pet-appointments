import { useEffect, useState } from 'react';
import Appointment from './components/Appointment';
import Form from './components/Form';
import PropTypes from 'prop-types'

function App() {
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!initialAppointments) {
    initialAppointments = [];
  }
  const [appointments, setAppointments] = useState(initialAppointments);
  useEffect(() => {
    if (initialAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments, initialAppointments]);
  const createAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };
  const removeAppointment = (id) => {
    setAppointments(appointments.filter((appointment) => appointment.id !== id));
  };
  const title = !appointments.length ? 'No hay citas' : null;
  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>
          <div className="one-half column">
            <h2>citas</h2>
            <h2>{title}</h2>
            {appointments.map((appointment) => (
              <Appointment appointment={appointment} key={appointment.id} removeAppointment={removeAppointment} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

Form.propTypes = {
  createAppointment: PropTypes.func.isRequired
}
Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  removeAppointment: PropTypes.func.isRequired
}

export default App;
