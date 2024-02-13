import { useContext, useState } from "react";
import "./Appointment.css";
import { AuthProvider } from "../../Context/AuthContexts";
import { useLoaderData, useNavigate } from "react-router-dom";

const Appointment = () => {
  const { user } = useContext(AuthProvider);
  const [doctors, setDoctors] = useState([]);
  const departments = useLoaderData();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleAppointment = (event) => {
    event.preventDefault();
    const form = event.target;
    const patient_name = user.displayName;
    const email = user.email;
    const age = form.age.value;
    const patient_address = form.address.value;
    const department = form.department.value;
    const doctor = form.doctor.value;
    const date = form.date.value;
    const time = form.time.value;
    const status = false;
    const patient_appointment = {
      patient_name,
      email,
      patient_address,
      department,
      doctor,
      date,
      time,
      status,
      age,
    };
    if (department !== "0" && doctor !== "0") {
      fetch("https://made-care-server.vercel.app/appointment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(patient_appointment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert("successfully requested for appointment.  Thank you.");
          form.reset();
          navigate("/my-appointment");
        });
    } else {
      setError(true);
      console.log(error);
    }
  };

  const handleDepartments = (event) => {
    const value = event.target.value;

    if (value !== "0") {
      const getDep = departments.find(
        (department) => department.name === value
      );
      setDoctors(getDep.doctors);
    } else {
      setDoctors([]);
    }
  };

  return (
    <div className="appointment_container_page">
      <div className="appointment_grid">
        <div className="form_container">
          <div className="form_heading">
            <h3>Appointment</h3>
            <h2>Apply For Free Now</h2>
          </div>
          <form onSubmit={handleAppointment} className="appointment_form">
            <input
              type="text"
              defaultValue={`${user?.displayName}`}
              readOnly
              required
            />
            <input type="text" name="age" placeholder="Age*" required />
            <input type="text" name="address" placeholder="Address*" />
            <select name="department" onChange={handleDepartments}>
              <option value="0">Select Option</option>
              {departments?.map((department) => (
                <option key={department._id} value={department.name}>
                  {department.name}
                </option>
              ))}
            </select>
            <select name="doctor">
              <option value="0">Select Doctor</option>
              {doctors?.map((doctor, ind) => (
                <option key={ind}>{doctor}</option>
              ))}
            </select>
            <input type="date" name="date" placeholder="Date" />
            <select
              type="text"
              name="time"
              placeholder="Time"
              defaultValue={""}
            >
              <option>--Select Time--</option>
              <option value="12pm-4pm">12pm-4pm</option>
              <option value="10am-11am">10am-11am</option>
              <option value="3pm-6pm">3pm-6pm</option>
              <option value="8am-10am">8am-10am</option>
            </select>

            <button>Book Appointment</button>
          </form>
        </div>
        <div className="img_container">
          <img
            src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1705491352/madeCare/doctor-image/resize_glmakk.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
