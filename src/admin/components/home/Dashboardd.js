import React, { Component } from 'react';
import DoctorThumb1 from '../../assets/img/doctors/doctor-thumb-01.jpg'
import DoctorThumb2 from '../../assets/img/doctors/doctor-thumb-02.jpg'
import DoctorThumb3 from '../../assets/img/doctors/doctor-thumb-03.jpg'
import DoctorThumb4 from '../../assets/img/doctors/doctor-thumb-04.jpg'
import DoctorThumb5 from '../../assets/img/doctors/doctor-thumb-05.jpg'
import Patient1 from '../../assets/img/patients/patient1.jpg'
import Patient2 from '../../assets/img/patients/patient2.jpg'
import Patient3 from '../../assets/img/patients/patient3.jpg'
import Patient4 from '../../assets/img/patients/patient4.jpg'
import Patient5 from '../../assets/img/patients/patient5.jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import Switch from "react-switch";


// Widget Component
const Widget = ({ className, iconClass, count, label, progressClass }) => (
  <div className={className}>
    <div className="card">
      <div className="card-body">
        <div className="dash-widget-header">
          <span className={`dash-widget-icon ${iconClass}`}></span>
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
const ChartCard = ({ className, title, chartId }) => (
  <div className={className}>
    <div className="card card-chart">
      <div className="card-header">
        <h4 className="card-title">{title}</h4>
      </div>
      <div className="card-body">
        <div id={chartId}></div>
      </div>
    </div>
  </div>
);

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
          src={DoctorThumb1}
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


// appointments List
const appointmentsList = [
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
    "9 Nov 2019 11.00 AM - 11.15 AM",
    <Switch onChange={() => {}} checked={true} />,
    <span className="text-right">$200.00</span>,
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
    "9 Nov 2019 11.00 AM - 11.15 AM",
    <Switch onChange={() => {}} checked={true} />,
    <span className="text-right">$200.00</span>,
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
    "9 Nov 2019 11.00 AM - 11.15 AM",
    <Switch onChange={() => {}} checked={true} />,
    <span className="text-right">$200.00</span>,
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
    <div className="table-avatar">
      <Link to="/profile" className="avatar avatar-sm mr-2">
        <img
          className="avatar-img rounded-circle"
          src={Patient4}
          alt="User"
        />
      </Link>
      <Link to="/profile">Michelle Fairfax</Link>
    </div>,
    "9 Nov 2019 11.00 AM - 11.15 AM",
    <Switch onChange={() => {}} checked={true} />,
    <span className="text-right">$200.00</span>,
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
    <div className="table-avatar">
      <Link to="/profile" className="avatar avatar-sm mr-2">
        <img
          className="avatar-img rounded-circle"
          src={Patient5}
          alt="User"
        />
      </Link>
      <Link to="/profile">Gina Moore</Link>
    </div>,
    "9 Nov 2019 11.00 AM - 11.15 AM",
    <Switch onChange={() => {}} checked={true} />,
    <span className="text-right">$200.00</span>,
  ],
];

// Dashboard Component
class Dashboard extends Component {
  
  render() {
    return (
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Welcome Admin!</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item active">Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}

        <div className="row">
          <Widget
            className="col-xl-3 col-sm-6 col-12"
            iconClass="fe fe-users"
            count="168"
            label="Doctors"
            progressClass="bg-primary w-50"
          />
          <Widget
            className="col-xl-3 col-sm-6 col-12"
            iconClass="fe fe-credit-card"
            count="487"
            label="Patients"
            progressClass="bg-success w-50"
          />
          <Widget
            className="col-xl-3 col-sm-6 col-12"
            iconClass="fe fe-money"
            count="485"
            label="Appointment"
            progressClass="bg-danger w-50"
          />
          <Widget
            className="col-xl-3 col-sm-6 col-12"
            iconClass="fe fe-folder"
            count="$62523"
            label="Revenue"
            progressClass="bg-warning w-50"
          />
        </div>

        <div className="row">
          <ChartCard
            className="col-md-12 col-lg-6"
            title="Revenue"
            chartId="morrisArea"
          />
          <ChartCard
            className="col-md-12 col-lg-6"
            title="Status"
            chartId="morrisLine"
          />
        </div>

        <div className="row">
          <DataTableCard
            className="col-md-6 d-flex"
            title="Doctors List"
            data={doctorsList}
            columns={["Doctor Name", "Speciality", "Earned", "Reviews"]}
          />
          <DataTableCard
            className="col-md-6 d-flex"
            title="Patients List"
            data={patientsList}
            columns={["Patient Name", "Phone", "Last Visit", "Paid"]}
          />
        </div>

        <div className="row">
          <DataTableCard
            className="col-md-12"
            title="Appointment List"
            data={appointmentsList}
            columns={["Doctor Name", "Speciality", "Patient Name", "Appointment Time", "Status", "Amount"]}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
