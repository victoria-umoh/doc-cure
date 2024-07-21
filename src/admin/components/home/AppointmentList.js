import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Patient1 from '../../assets/img/patients/patient1.jpg';
import Patient2 from '../../assets/img/patients/patient2.jpg';
import Patient3 from '../../assets/img/patients/patient3.jpg';
import Doctor1 from '../../assets/img/doctors/doctor-thumb-01.jpg';
import Doctor2 from '../../assets/img/doctors/doctor-thumb-02.jpg';
import Doctor3 from '../../assets/img/doctors/doctor-thumb-03.jpg';

export class AppointmentList extends Component {
  render() {
    const appointments = [
      {
        doctorName: "Dr. Ruby Perrin",
        doctorImage: Doctor1,
        speciality: "Dental",
        patientName: "Charlene Reed",
        patientImage: Patient1,
        appointmentTime: "9 Nov 2019 11.00 AM - 11.15 AM",
        status: true,
        amount: "$200.00",
      },
      {
        doctorName: "Dr. Darren Elder",
        doctorImage: Doctor2,
        speciality: "Dental",
        patientName: "Travis Trimble",
        patientImage: Patient2,
        appointmentTime: "5 Nov 2019 11.00 AM - 11.35 AM",
        status: true,
        amount: "$300.00",
      },
      {
        doctorName: "Dr. Deborah Angel",
        doctorImage: Doctor3,
        speciality: "Cardiology",
        patientName: "Carl Kelly",
        patientImage: Patient3,
        appointmentTime: "11 Nov 2019 12.00 PM - 12.15 PM",
        status: true,
        amount: "$150.00",
      },
      // Add more appointments as needed
    ];

    return (
      <>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Appointments</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/admin-dashboard" className='text-decoration-none'>Dashboard</Link></li>
                    <li className="breadcrumb-item">Appointments</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="datatable table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>Doctor Name</th>
                            <th>Speciality</th>
                            <th>Patient Name</th>
                            <th>Appointment Time</th>
                            <th>Status</th>
                            <th className="text-right">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {appointments.map((appointment, index) => (
                            <tr key={index}>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="profile.html" className="avatar avatar-sm mr-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={appointment.doctorImage}
                                      alt="Doctor"
                                    />
                                  </a>
                                  <a href="profile.html">{appointment.doctorName}</a>
                                </h2>
                              </td>
                              <td>{appointment.speciality}</td>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="profile.html" className="avatar avatar-sm mr-2">
                                    <img
                                      className="avatar-img rounded-circle"
                                      src={appointment.patientImage}
                                      alt="Patient"
                                    />
                                  </a>
                                  <a href="profile.html">{appointment.patientName}</a>
                                </h2>
                              </td>
                              <td>
                                {appointment.appointmentTime.split(' ').slice(0, 3).join(' ')}
                                <span className="text-primary d-block">
                                  {appointment.appointmentTime.split(' ').slice(3).join(' ')}
                                </span>
                              </td>
                              <td>
                                <div className="status-toggle">
                                  <input
                                    type="checkbox"
                                    id={`status_${index}`}
                                    className="check"
                                    checked={appointment.status}
                                  />
                                  <label htmlFor={`status_${index}`} className="checktoggle">
                                    checkbox
                                  </label>
                                </div>
                              </td>
                              <td className="text-right">{appointment.amount}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>			
        </div>
      </>
    );
  }
}

export default AppointmentList;
