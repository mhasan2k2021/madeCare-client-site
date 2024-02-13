import { useContext, useEffect, useState } from "react";
import "./MyAppointment.css";
import { AuthProvider } from "../../Context/AuthContexts";
import { FaPen, FaUser, FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";

const MyAppointment = () => {
  const { user } = useContext(AuthProvider);
  console.log(user);
  const [appointments, setAppointments] = useState();
  useEffect(() => {
    axios
      .get(
        `https://made-care-server.vercel.app/my-appointment?email=${user?.email}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setAppointments(res.data);
      });
    //
  }, []);

  const handleDelete = (id) => {
    const deleteConfirm = confirm("Are you sure to delete?");
    if (deleteConfirm === true) {
      fetch(`https://made-care-server.vercel.app/my-appointment/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remain = appointments.filter(
            (appointment) => appointment._id !== id
          );
          setAppointments(remain);
        });
    } else {
      return;
    }
  };
  return (
    <div className="my_appointment">
      <div className="my_appointment_table">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>About</th>
              <th>Department</th>
              <th>Time</th>
              <th>Age</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {appointments?.map((appointment) => (
              <tr key={appointment._id}>
                <td>
                  {user?.photoURL ? (
                    <div className="user_img_container">
                      <img className="user_img" src={`${user?.photoURL}`}></img>
                    </div>
                  ) : (
                    <div className="user_img_container">
                      <FaUser className="user_icon"></FaUser>
                    </div>
                  )}
                </td>
                <td className="about">
                  <h6>{appointment?.patient_name}</h6>
                  <p>{appointment?.email}</p>
                  <p>{appointment?.patient_address}</p>
                </td>
                <td className="dta">
                  <p>{appointment?.department}</p>
                </td>
                <td className="dta">
                  <p>{appointment?.time}</p>
                </td>
                <td className="dta">
                  <p>{appointment?.age}</p>
                </td>
                <td>
                  {appointment?.status === true ? (
                    <p className="green status">Approved</p>
                  ) : (
                    <p className="red status">Pending</p>
                  )}
                </td>

                <td>
                  <button className="delete_btn">
                    <FaX onClick={() => handleDelete(appointment._id)}></FaX>
                  </button>{" "}
                  <Link to={`/update-appointment/${appointment._id}`}>
                    <FaPen className="edit_btn"></FaPen>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
