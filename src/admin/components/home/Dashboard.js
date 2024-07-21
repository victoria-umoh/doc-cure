import React, { useState } from 'react';
import DoctorThumb1 from '../../assets/img/doctors/doctor-thumb-01.jpg';
import DoctorThumb2 from '../../assets/img/doctors/doctor-thumb-02.jpg';
import DoctorThumb3 from '../../assets/img/doctors/doctor-thumb-03.jpg';
import DoctorThumb4 from '../../assets/img/doctors/doctor-thumb-04.jpg';
import DoctorThumb5 from '../../assets/img/doctors/doctor-thumb-05.jpg';
import Patient1 from '../../assets/img/patients/patient1.jpg';
import Patient2 from '../../assets/img/patients/patient2.jpg';
import Patient3 from '../../assets/img/patients/patient3.jpg';
import Patient4 from '../../assets/img/patients/patient4.jpg';
import Patient5 from '../../assets/img/patients/patient5.jpg';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faUsers, faCreditCard, faMoneyBillWave, faFolder } from '@fortawesome/free-solid-svg-icons';
import Switch from 'react-switch';

import {  Line } from 'react-chartjs-2';
import 'chart.js/auto';


// Widget Component
const Widget = ({ className, icon, count, label, progressClass }) => (
    <div className={className}>
    <div className="card">
      <div className="card-body">
        <div className="dash-widget-header">
          <span className="dash-widget-icon">
            <FontAwesomeIcon icon={icon} />
          </span>
          <div className="dash-count">
            <h3>{count}</h3>
          </div>
        </div>
        <div className="dash-widget-info">
          <h6 className="text-muted">{label}</h6>
          <div className="progress progress-sm">
            <div className={`progress-bar ${progressClass}`}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ChartCard Component
const ChartCard = ({ className, title, chartData, chartType }) => (
    <div className={className}>
      <div className="card card-chart">
        <div className="card-header">
          <h4 className="card-title">{title}</h4>
        </div>
        <div className="card-body">
          {chartType === 'line' ? (
            <Line data={chartData} />
          ) : (
            <Line data={chartData} />
          )}
        </div>
      </div>
    </div>
  );

  const revenueData = {
    labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
    datasets: [
      {
        label: 'Revenue',
        data: [60, 100, 240, 120, 80, 100, 300],
        fill: true,
        backgroundColor: 'rgba(153, 183, 208, 0.7)',
        borderColor: 'rgb(27, 90, 144)',
        pointHitRadius: 5,
        borderWidth: 3,
        // pointStyle: 'circle',
        // borderCapStyle: 'butt',
        // borderJoinStyle: 'round',
        // spanGaps: 'true',
        cubicInterpolationMode: 'monotone',
      },
    ],
  };
  
//   const statusData = {
//     labels: ['2015', '2016', '2017', '2018', '2019'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };
  
const statusData = {
    labels: ['2015', '2016', '2017', '2018', '2019'],
    datasets: [
        {
            label: 'Patients',
            data: [30, 60, 120, 80, 150],
            borderColor: 'rgb(255, 202, 44)',
            backgroundColor: 'rgb(255, 202, 44)',
            borderWidth: 2,
            fill: false,
            cubicInterpolationMode: 'monotone',
        },
        {
            label: 'Doctors',
            data: [100, 20, 90, 50, 120],
            borderColor: 'rgb(27, 90, 144)',
            backgroundColor: 'rgb(27, 90, 144)',
            borderWidth: 2,
            fill: false,
            cubicInterpolationMode: 'monotone',
        }
    ],
};

    const options = {
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    };

// DataTableCard Component
const DataTableCard = ({ className, title, data, columns }) => (
  <div className={className}>
    <div className="card card-table flex-fill">
      <div className="card-header">
        <h4 className="card-title">{title}</h4>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover table-center mb-0">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

//Doctors List
const doctorsList = [
    [
      <div className="table-avatar">
        <Link to="/profile" className="avatar avatar-sm mr-2">
          <img
            className="avatar-img rounded-circle"
            src={DoctorThumb1}
            alt="User"
          />
        </Link>
        <Link to="/profile">Dr. Ruby Perrin</Link>
      </div>,
      "Dental",
      "$3200.00",
      <>
        <FontAwesomeIcon icon={solidStar} className="text-warning" />
        <FontAwesomeIcon icon={solidStar} className="text-warning" />
        <FontAwesomeIcon icon={solidStar} className="text-warning" />
        <FontAwesomeIcon icon={solidStar} className="text-warning" />
        <FontAwesomeIcon icon={regularStar} className="text-secondary" />
      </>,
    ],
    [
      <div className="table-avatar">
        <Link to="/profile" className="avatar avatar-sm mr-2">
          <img
            className="avatar-img rounded-circle"
            src={DoctorThumb2}
            alt="User"
          />
        </Link>
        <Link to="/profile">Dr. Darren Elder</Link>
      </div>,
      "Dental",
      "$3200.00",
      <>
        <FontAwesomeIcon icon={solidStar} className="text-warning" />
        <FontAwesomeIcon icon={solidStar} className="text-warning" />
        <FontAwesomeIcon icon={solidStar} className="text-warning" />
        <FontAwesomeIcon icon={solidStar} className="text-warning" />
        <FontAwesomeIcon icon={regularStar} className="text-secondary" />
      </>,
    ],
    [
      <div className="table-avatar">
        <Link to="/profile" className="avatar avatar-sm mr-2">
          <img
            className="avatar-img rounded-circle"
            src={DoctorThumb3}
            alt="User"
          />
        </Link>
        <Link to="/profile">Dr. Deborah Angel</Link>
      </div>,
      "Cardiology",
      "$3200.00",
      <>
        <FontAwesomeIcon icon={solidStar} className="text-warning" />
        <FontAwesomeIcon icon={solidStar} className="text-warning" />
        <FontAwesomeIcon icon={solidStar} className="text-warning" />
        <FontAwesomeIcon icon={solidStar} className="text-warning" />
        <FontAwesomeIcon icon={regularStar} className="text-secondary" />
      </>,
    ],
    [
      <div className="table-avatar">
        <Link to="/profile" className="avatar avatar-sm mr-2">
          <img
            className="avatar-img rounded-circle"
            src={DoctorThumb4}
            alt="User"
          />
        </Link>
        <Link to="/profile">Dr. Sofia Brient</Link>
      </div>,
      "Urology",
      "$3200.00",
      <>
        <FontAwesomeIcon icon={solidStar} className="text-warning" />
        <FontAwesomeIcon icon={solidStar} className="text-warning" />
        <FontAwesomeIcon icon={solidStar} className="text-warning" />
        <FontAwesomeIcon icon={solidStar} className="text-warning" />
        <FontAwesomeIcon icon={regularStar} className="text-secondary" />
      </>,
    ],
    [
      <div className="table-avatar">
        <Link to="/profile" className="avatar avatar-sm mr-2">
          <img
            className="avatar-img rounded-circle"
            src={DoctorThumb5}
            alt="User"
          />
        </Link>
        <Link to="/profile">Dr. Marvin Campbell</Link>
      </div>,
      "Orthopaedics",
      "$3200.00",
      <>
        <FontAwesomeIcon icon={solidStar} className="text-warning" />
        <FontAwesomeIcon icon={solidStar} className="text-warning" />
        <FontAwesomeIcon icon={solidStar} className="text-warning" />
        <FontAwesomeIcon icon={solidStar} className="text-warning" />
        <FontAwesomeIcon icon={regularStar} className="text-secondary" />
      </>,
    ],
  ];
  
  //patients List
  const patientsList = [
    [
      <div className="table-avatar">
        <Link to="/profile" className="avatar avatar-sm mr-2">
          <img
            className="avatar-img rounded-circle"
            src={Patient1}
            alt="User"
          />
        </Link>
        <Link to="/profile">Charlene Reed</Link>
      </div>,
      "8286329170",
      "20 Oct 2019",
      <span className="text-right">$100.00</span>,
    ],
    [
      <div className="table-avatar">
        <Link to="/profile" className="avatar avatar-sm mr-2">
          <img
            className="avatar-img rounded-circle"
            src={Patient2}
            alt="User"
          />
        </Link>
        <Link to="/profile">Travis Trimble</Link>
      </div>,
      "8286329170",
      "20 Oct 2019",
      <span className="text-right">$100.00</span>,
    ],
    [
      <div className="table-avatar">
        <Link to="/profile" className="avatar avatar-sm mr-2">
          <img
            className="avatar-img rounded-circle"
            src={Patient3}
            alt="User"
          />
        </Link>
        <Link to="/profile">Carl Kelly</Link>
      </div>,
      "8286329170",
      "20 Oct 2019",
      <span className="text-right">$100.00</span>,
    ],
    [
      <div className="table-avatar">
        <Link to="/profile" className="avatar avatar-sm mr-2">
          <img
            className="avatar-img rounded-circle"
            src={Patient4}
            alt="User"
          />
        </Link>
        <Link to="/profile"> Michelle Fairfax </Link>
      </div>,
      "8286329170",
      "20 Oct 2019",
      <span className="text-right">$100.00</span>,
    ],
    [
      <div className="table-avatar">
        <Link to="/profile" className="avatar avatar-sm mr-2">
          <img
            className="avatar-img rounded-circle"
            src={Patient5}
            alt="User"
          />
        </Link>
        <Link to="/profile"> Gina Moore </Link>
      </div>,
      "8286329170",
      "20 Oct 2019",
      <span className="text-right">$100.00</span>,
    ],
  ];

// Dashboard Component
const Dashboard = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, doctor: 'Dr. Ruby Perrin', specialty: 'Dental', patient: 'Charlene Reed', date: '9 Nov 2019 11.00 AM - 11.15 AM', fee: '$200.00', active: true },
    { id: 2, doctor: 'Dr. Darren Elder', specialty: 'Dental', patient: 'Travis Trimble', date: '9 Nov 2019 11.00 AM - 11.15 AM', fee: '$200.00', active: true },
    { id: 3, doctor: 'Dr. Deborah Angel', specialty: 'Cardiology', patient: 'Carl Kelly', date: '9 Nov 2019 11.00 AM - 11.15 AM', fee: '$200.00', active: true },
    { id: 4, doctor: 'Dr. Sofia Brient', specialty: 'Urology', patient: 'Michelle Fairfax', date: '9 Nov 2019 11.00 AM - 11.15 AM', fee: '$200.00', active: true },
    { id: 5, doctor: 'Dr. Marvin Campbell', specialty: 'Orthopaedics', patient: 'Gina Moore', date: '9 Nov 2019 11.00 AM - 11.15 AM', fee: '$200.00', active: true },
  ]);

  const toggleSwitch = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id ? { ...appointment, active: !appointment.active } : appointment
      )
    );
  };

  const appointmentsList = appointments.map((appointment) => [
    <div className="table-avatar">
      <Link to="/profile" className="avatar avatar-sm mr-2">
        <img className="avatar-img rounded-circle" src={DoctorThumb1} alt="User" />
      </Link>
      <Link to="/profile">{appointment.doctor}</Link>
    </div>,
    appointment.specialty,
    <div className="table-avatar">
      <Link to="/profile" className="avatar avatar-sm mr-2">
        <img className="avatar-img rounded-circle" src={Patient1} alt="User" />
      </Link>
      <Link to="/profile">{appointment.patient}</Link>
    </div>,
    appointment.date,
    <Switch onChange={() => toggleSwitch(appointment.id)} checked={appointment.active} />,
    <span className="text-right">{appointment.fee}</span>,
  ]);

  return (
    <Container className="content" fluid={true}>
      {/* Page Header */}
      <div className="page-header">
        <Row>
          <Col sm={12}>
            <h3 className="page-title">Welcome Admin!</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">Dashboard</li>
            </ul>
          </Col>
        </Row>
      </div>
      {/* /Page Header */}

      <Row>
        <Widget
          className="col-xl-3 col-sm-6 col-12"
          icon={faUsers}
          count="168"
          label="Doctors"
          progressClass="bg-primary w-50"
        />
        <Widget
          className="col-xl-3 col-sm-6 col-12"
          icon={faCreditCard}
          count="487"
          label="Patients"
          progressClass="bg-success w-50"
        />
        <Widget
          className="col-xl-3 col-sm-6 col-12"
          icon={faMoneyBillWave}
          count="485"
          label="Appointment"
          progressClass="bg-danger w-50"
        />
        <Widget
          className="col-xl-3 col-sm-6 col-12"
          icon={faFolder }
          count="$62523"
          label="Revenue"
          progressClass="bg-warning w-50"
        />
      </Row>

      <Row>
        <ChartCard
            className="col-md-12 col-lg-6"
            title="Revenue"
            chartData={revenueData}
            chartType="line"
            
        />
        <ChartCard
            className="col-md-12 col-lg-6"
            title="Status"
            chartData={statusData}
            options={options}
            chartType="line"
        />
      </Row>


      <Row>
        <DataTableCard
          className="col-md-6 d-flex"
          title="Doctors List"
          data={doctorsList}
          columns={['Doctor', 'Specialty', 'Earnings', 'Rating']}
        />
        <DataTableCard
          className="col-md-6 d-flex"
          title="Patients List"
          data={patientsList}
          columns={['Patient', 'Phone', 'Last Visit', 'Paid']}
        />
      </Row>

      <Row>
        <DataTableCard
          className="col-md-12 d-flex"
          title="Appointments List"
          data={appointmentsList}
          columns={['Doctor', 'Specialty', 'Patient', 'Appointment Time', 'Status', 'Paid']}
        />
      </Row>
    </Container>
  );
};

export default Dashboard;
