import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DoctorThumb01 from '../../assets/img/doctors/doctor-thumb-01.jpg';
import DoctorThumb02 from '../../assets/img/doctors/doctor-thumb-02.jpg';
import DoctorThumb03 from '../../assets/img/doctors/doctor-thumb-03.jpg';
import DoctorThumb04 from '../../assets/img/doctors/doctor-thumb-04.jpg';
import DoctorThumb05 from '../../assets/img/doctors/doctor-thumb-05.jpg';
import DoctorThumb06 from '../../assets/img/doctors/doctor-thumb-06.jpg';
import DoctorThumb07 from '../../assets/img/doctors/doctor-thumb-07.jpg';
import DoctorThumb08 from '../../assets/img/doctors/doctor-thumb-08.jpg';
import DoctorThumb09 from '../../assets/img/doctors/doctor-thumb-09.jpg';
import DoctorThumb10 from '../../assets/img/doctors/doctor-thumb-10.jpg';

export class DoctorList extends Component {
  render() {
    const doctors = [
      {
        name: "Dr. Ruby Perrin",
        image: DoctorThumb01,
        speciality: "Dental",
        memberSince: "14 Jan 2019",
        time: "02.59 AM",
        earned: "$3100.00",
        status: true,
      },
      {
        name: "Dr. Darren Elder",
        image: DoctorThumb02,
        speciality: "Dental",
        memberSince: "11 Jun 2019",
        time: "4.50 AM",
        earned: "$5000.00",
        status: true,
      },
      {
        name: "Dr. Deborah Angel",
        image: DoctorThumb03,
        speciality: "Cardiology",
        memberSince: "4 Jan 2018",
        time: "9.40 AM",
        earned: "$3300.00",
        status: true,
      },
      {
        name: "Dr. Sofia Brient",
        image: DoctorThumb04,
        speciality: "Urology",
        memberSince: "5 Jul 2019",
        time: "12.59 AM",
        earned: "$3500.00",
        status: true,
      },
      {
        name: "Dr. Marvin Campbell",
        image: DoctorThumb05,
        speciality: "Orthopaedics",
        memberSince: "24 Jan 2019",
        time: "02.59 AM",
        earned: "$3700.00",
        status: true,
      },
      {
        name: "Dr. Katharine Berthold",
        image: DoctorThumb06,
        speciality: "Orthopaedics",
        memberSince: "23 Mar 2019",
        time: "02.50 PM",
        earned: "$4000.00",
        status: true,
      },
      {
        name: "Dr. Linda Tobin",
        image: DoctorThumb07,
        speciality: "Neurology",
        memberSince: "14 Dec 2018",
        time: "01.59 AM",
        earned: "$2000.00",
        status: true,
      },
      {
        name: "Dr. Paul Richard",
        image: DoctorThumb08,
        speciality: "Dermatology",
        memberSince: "11 Jan 2019",
        time: "02.59 AM",
        earned: "$3000.00",
        status: true,
      },
      {
        name: "Dr. John Gibbs",
        image: DoctorThumb09,
        speciality: "Dental",
        memberSince: "21 Apr 2018",
        time: "02.59 PM",
        earned: "$4100.00",
        status: true,
      },
      {
        name: "Dr. Olga Barlow",
        image: DoctorThumb10,
        speciality: "Dental",
        memberSince: "15 Feb 2018",
        time: "03.59 AM",
        earned: "$3500.00",
        status: true,
      },
    ];

    return (
      <>
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">List of Doctors</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/admin-dashboard" className='text-decoration-none'>Dashboard</Link></li>
                    <li className="breadcrumb-item"><a href="javascript:void(0);" className='text-decoration-none'>Users</a></li>
                    <li className="breadcrumb-item">Doctor</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}

            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="datatable table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>Doctor Name</th>
                            <th>Speciality</th>
                            <th>Member Since</th>
                            <th>Earned</th>
                            <th>Account Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {doctors.map((doctor, index) => (
                            <tr key={index}>
                              <td>
                                <h2 className="table-avatar">
                                  <Link to="/profile" className="avatar avatar-sm mr-2">
                                    <img className="avatar-img rounded-circle" src={doctor.image} alt="User" />
                                  </Link>
                                  <Link to="/profile">{doctor.name}</Link>
                                </h2>
                              </td>
                              <td>{doctor.speciality}</td>
                              <td>{doctor.memberSince} <br /><small>{doctor.time}</small></td>
                              <td>{doctor.earned}</td>
                              <td>
                                <div className="status-toggle">
                                  <input type="checkbox" id={`status_${index}`} className="check" checked={doctor.status} readOnly />
                                  <label htmlFor={`status_${index}`} className="checktoggle">checkbox</label>
                                </div>
                              </td>
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
    )
  }
}

export default DoctorList;
