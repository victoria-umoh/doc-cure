import React, { Component } from 'react';
import DoctorThumb from '../../assets/img/doctors/doctor-thumb-02.jpg'
import Patient from '../../assets/img/patients/patient.jpg'
import Patient1 from '../../assets/img/patients/patient1.jpg'
import Patient2 from '../../assets/img/patients/patient2.png'
import Patient3 from '../../assets/img/patients/patient3.jpg'
import Patient4 from '../../assets/img/patients/patient4.png'
import Patient5 from '../../assets/img/patients/patient5.jpg'
import Patient6 from '../../assets/img/patients/patient6.png'
import Patient7 from '../../assets/img/patients/patient7.jpg'
import Patient8 from '../../assets/img/patients/patient8.png'
import Patient9 from '../../assets/img/patients/patient9.png'
import Patient10 from '../../assets/img/patients/patient10.jpg'
import Patient11 from '../../assets/img/patients/patient11.png'
class Appointments extends Component {
	render() {
		return (
			<div>
				{/* <!-- Breadcrumb --> */}
			<div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
									<li className="breadcrumb-item active" aria-current="page">Appointments</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Appointments</h2>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- /Breadcrumb --> */}
			
			{/* <!-- Page Content --> */}
			<div className="content">
				<div className="container-fluid">

					<div className="row">
						<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
						
							{/* <!-- Profile Sidebar --> */}
							<div className="profile-sidebar">
								<div className="widget-profile pro-widget-content">
									<div className="profile-info-widget">
										<a href="#" className="booking-doc-img">
											<img src={DoctorThumb} alt="User Image"/>
										</a>
										<div className="profile-det-info">
											<h3>Dr. Darren Elder</h3>
											
											<div className="patient-details">
												<h5 className="mb-0">BDS, MDS - Oral & Maxillofacial Surgery</h5>
											</div>
										</div>
									</div>
								</div>
								<div className="dashboard-widget">
									<nav className="dashboard-menu">
										<ul>
											<li>
												<a href="doctor-dashboard.html">
													<i className="fas fa-columns"></i>
													<span>Dashboard</span>
												</a>
											</li>
											<li className="active">
												<a href="appointments.html">
													<i className="fas fa-calendar-check"></i>
													<span>Appointments</span>
												</a>
											</li>
											<li>
												<a href="my-patients.html">
													<i className="fas fa-user-injured"></i>
													<span>My Patients</span>
												</a>
											</li>
											<li>
												<a href="schedule-timings.html">
													<i className="fas fa-hourglass-start"></i>
													<span>Schedule Timings</span>
												</a>
											</li>
											<li>
												<a href="invoices.html">
													<i className="fas fa-file-invoice"></i>
													<span>Invoices</span>
												</a>
											</li>
											<li>
												<a href="reviews.html">
													<i className="fas fa-star"></i>
													<span>Reviews</span>
												</a>
											</li>
											<li>
												<a href="chat-doctor.html">
													<i className="fas fa-comments"></i>
													<span>Message</span>
													<small className="unread-msg">23</small>
												</a>
											</li>
											<li>
												<a href="doctor-profile-settings.html">
													<i className="fas fa-user-cog"></i>
													<span>Profile Settings</span>
												</a>
											</li>
											<li>
												<a href="social-media.html">
													<i className="fas fa-share-alt"></i>
													<span>Social Media</span>
												</a>
											</li>
											<li>
												<a href="doctor-change-password.html">
													<i className="fas fa-lock"></i>
													<span>Change Password</span>
												</a>
											</li>
											<li>
												<a href="index-2.html">
													<i className="fas fa-sign-out-alt"></i>
													<span>Logout</span>
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
							{/* <!-- /Profile Sidebar --> */}
							
						</div>
						
						<div className="col-md-7 col-lg-8 col-xl-9">
							<div className="appointments">
							
								{/* <!-- Appointment List --> */}
								<div className="appointment-list">
									<div className="profile-info-widget">
										<a href="patient-profile.html" className="booking-doc-img">
											<img src={Patient} alt="User Image"/>
										</a>
										<div className="profile-det-info">
											<h3><a href="patient-profile.html">Richard Wilson</a></h3>
											<div className="patient-details">
												<h5><i className="far fa-clock"></i> 14 Nov 2019, 10.00 AM</h5>
												<h5><i className="fas fa-map-marker-alt"></i> Newyork, United States</h5>
												<h5><i className="fas fa-envelope"></i> richard@example.com</h5>
												<h5 className="mb-0"><i className="fas fa-phone"></i> +1 923 782 4575</h5>
											</div>
										</div>
									</div>
									<div className="appointment-action">
										<a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
											<i className="far fa-eye"></i> View
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-success-light">
											<i className="fas fa-check"></i> Accept
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
											<i className="fas fa-times"></i> Cancel
										</a>
									</div>
								</div>
								{/* <!-- /Appointment List --> */}
							
								{/* <!-- Appointment List --> */}
								<div className="appointment-list">
									<div className="profile-info-widget">
										<a href="patient-profile.html" className="booking-doc-img">
											<img src={Patient1} alt="User Image"/>
										</a>
										<div className="profile-det-info">
											<h3><a href="patient-profile.html">Charlene Reed </a></h3>
											<div className="patient-details">
												<h5><i className="far fa-clock"></i> 12 Nov 2019, 5.00 PM</h5>
												<h5><i className="fas fa-map-marker-alt"></i> North Carolina, United States</h5>
												<h5><i className="fas fa-envelope"></i> charlenereed@example.com</h5>
												<h5 className="mb-0"><i className="fas fa-phone"></i> +1 828 632 9170</h5>
											</div>
										</div>
									</div>
									<div className="appointment-action">
										<a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
											<i className="far fa-eye"></i> View
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-success-light">
											<i className="fas fa-check"></i> Accept
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
											<i className="fas fa-times"></i> Cancel
										</a>
									</div>
								</div>
								{/* <!-- /Appointment List --> */}
								
								{/* <!-- Appointment List --> */}
								<div className="appointment-list">
									<div className="profile-info-widget">
										<a href="patient-profile.html" className="booking-doc-img">
											<img src={Patient2} alt="User Image"/>
										</a>
										<div className="profile-det-info">
											<h3><a href="patient-profile.html">Travis Trimble</a></h3>
											
											<div className="patient-details">
												<h5><i className="far fa-clock"></i> 11 Nov 2019, 8.00 PM</h5>
												<h5><i className="fas fa-map-marker-alt"></i> Maine, United States</h5>
												<h5><i className="fas fa-envelope"></i> travistrimble@example.com</h5>
												<h5 className="mb-0"><i className="fas fa-phone"></i> +1 207 729 9974</h5>
											</div>
										</div>
									</div>
									<div className="appointment-action">
										<a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
											<i className="far fa-eye"></i> View
										</a>
										
										<a href="javascript:void(0);" className="btn btn-sm bg-success-light">
											<i className="fas fa-check"></i> Accept
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
											<i className="fas fa-times"></i> Cancel
										</a>
									</div>
								</div>
								{/* <!-- /Appointment List --> */}
								
								{/* <!-- Appointment List --> */}
								<div className="appointment-list">
									<div className="profile-info-widget">
										<a href="patient-profile.html" className="booking-doc-img">
											<img src={Patient3} alt="User Image"/>
										</a>
										<div className="profile-det-info">
											<h3><a href="patient-profile.html">Carl Kelly</a></h3>
											<div className="patient-details">
												<h5><i className="far fa-clock"></i> 9 Nov 2019, 9.00 AM</h5>
												<h5><i className="fas fa-map-marker-alt"></i> Newyork, United States</h5>
												<h5><i className="fas fa-envelope"></i> carlkelly@example.com</h5>
												<h5 className="mb-0"><i className="fas fa-phone"></i> +1 260 724 7769</h5>
											</div>
										</div>
									</div>
									<div className="appointment-action">
										<a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
											<i className="far fa-eye"></i> View
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-success-light">
											<i className="fas fa-check"></i> Accept
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
											<i className="fas fa-times"></i> Cancel
										</a>
									</div>
								</div>
								{/* <!-- /Appointment List --> */}
								
								{/* <!-- Appointment List --> */}
								<div className="appointment-list">
									<div className="profile-info-widget">
										<a href="patient-profile.html" className="booking-doc-img">
											<img src={Patient4} alt="User Image"/>
										</a>
										<div className="profile-det-info">
											<h3><a href="patient-profile.html">Michelle Fairfax</a></h3>
											<div className="patient-details">
												<h5><i className="far fa-clock"></i> 9 Nov 2019, 1.00 PM</h5>
												<h5><i className="fas fa-map-marker-alt"></i> Indiana, United States</h5>
												<h5><i className="fas fa-envelope"></i> michellefairfax@example.com</h5>
												<h5 className="mb-0"><i className="fas fa-phone"></i> +1 504 368 6874</h5>
											</div>
										</div>
									</div>
									<div className="appointment-action">
										<a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
											<i className="far fa-eye"></i> View
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-success-light">
											<i className="fas fa-check"></i> Accept
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
											<i className="fas fa-times"></i> Cancel
										</a>
									</div>
								</div>
								{/* <!-- /Appointment List --> */}
								
								{/* <!-- Appointment List --> */}
								<div className="appointment-list">
									<div className="profile-info-widget">
										<a href="patient-profile.html" className="booking-doc-img">
											<img src={Patient5} alt="User Image"/>
										</a>
										<div className="profile-det-info">
											<h3><a href="patient-profile.html">Gina Moore</a></h3>
											<div className="patient-details">
												<h5><i className="far fa-clock"></i> 8 Nov 2019, 3.00 PM</h5>
												<h5><i className="fas fa-map-marker-alt"></i> Florida, United States</h5>
												<h5><i className="fas fa-envelope"></i> ginamoore@example.com</h5>
												<h5 className="mb-0"><i className="fas fa-phone"></i> +1 954 820 7887</h5>
											</div>
										</div>
									</div>
									<div className="appointment-action">
										<a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
											<i className="far fa-eye"></i> View
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-success-light">
											<i className="fas fa-check"></i> Accept
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
											<i className="fas fa-times"></i> Cancel
										</a>
									</div>
								</div>
								{/* <!-- /Appointment List --> */}
								
								{/* <!-- Appointment List --> */}
								<div className="appointment-list">
									<div className="profile-info-widget">
										<a href="patient-profile.html" className="booking-doc-img">
											<img src={Patient6} alt="User Image"/>
										</a>
										<div className="profile-det-info">
											<h3><a href="patient-profile.html">Elsie Gilley</a></h3>
											<div className="patient-details">
												<h5><i className="far fa-clock"></i> 6 Nov 2019, 9.00 AM</h5>
												<h5><i className="fas fa-map-marker-alt"></i> Kentucky, United States</h5>
												<h5><i className="fas fa-envelope"></i> elsiegilley@example.com</h5>
												<h5 className="mb-0"><i className="fas fa-phone"></i> +1 315 384 4562</h5>
											</div>
										</div>
									</div>
									<div className="appointment-action">
										<a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
											<i className="far fa-eye"></i> View
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-success-light">
											<i className="fas fa-check"></i> Accept
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
											<i className="fas fa-times"></i> Cancel
										</a>
									</div>
								</div>
								{/* <!-- /Appointment List --> */}
								
								{/* <!-- Appointment List --> */}
								<div className="appointment-list">
									<div className="profile-info-widget">
										<a href="patient-profile.html" className="booking-doc-img">
											<img src={Patient7} alt="User Image"/>
										</a>
										<div className="profile-det-info">
											<h3><a href="patient-profile.html">Joan Gardner</a></h3>
											<div className="patient-details">
												<h5><i className="far fa-clock"></i> 5 Nov 2019, 12.00 PM</h5>
												<h5><i className="fas fa-map-marker-alt"></i> California, United States</h5>
												<h5><i className="fas fa-envelope"></i> joangardner@example.com</h5>
												<h5 className="mb-0"><i className="fas fa-phone"></i> +1 707 2202 603</h5>
											</div>
										</div>
									</div>
									<div className="appointment-action">
										<a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
											<i className="far fa-eye"></i> View
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-success-light">
											<i className="fas fa-check"></i> Accept
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
											<i className="fas fa-times"></i> Cancel
										</a>
									</div>
								</div>
								{/* <!-- /Appointment List --> */}
								
								{/* <!-- Appointment List --> */}
								<div className="appointment-list">
									<div className="profile-info-widget">
										<a href="patient-profile.html" className="booking-doc-img">
											<img src={Patient8} alt="User Image"/>
										</a>
										<div className="profile-det-info">
											<h3><a href="patient-profile.html">Daniel Griffing</a></h3>
											<div className="patient-details">
												<h5><i className="far fa-clock"></i> 5 Nov 2019, 7.00 PM</h5>
												<h5><i className="fas fa-map-marker-alt"></i> New Jersey, United States</h5>
												<h5><i className="fas fa-envelope"></i> danielgriffing@example.com</h5>
												<h5 className="mb-0"><i className="fas fa-phone"></i> +1 973 773 9497</h5>
											</div>
										</div>
									</div>
									<div className="appointment-action">
										<a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
											<i className="far fa-eye"></i> View
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-success-light">
											<i className="fas fa-check"></i> Accept
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
											<i className="fas fa-times"></i> Cancel
										</a>
									</div>
								</div>
								{/* <!-- /Appointment List --> */}
								
								{/* <!-- Appointment List --> */}
								<div className="appointment-list">
									<div className="profile-info-widget">
										<a href="patient-profile.html" className="booking-doc-img">
											<img src={Patient9} alt="User Image"/>
										</a>
										<div className="profile-det-info">
											<h3><a href="patient-profile.html">Walter Roberson</a></h3>
											<div className="patient-details">
												<h5><i className="far fa-clock"></i> 4 Nov 2019, 10.00 AM</h5>
												<h5><i className="fas fa-map-marker-alt"></i> Florida, United States</h5>
												<h5><i className="fas fa-envelope"></i> walterroberson@example.com</h5>
												<h5 className="mb-0"><i className="fas fa-phone"></i> +1 850 358 4445</h5>
											</div>
										</div>
									</div>
									<div className="appointment-action">
										<a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
											<i className="far fa-eye"></i> View
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-success-light">
											<i className="fas fa-check"></i> Accept
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
											<i className="fas fa-times"></i> Cancel
										</a>
									</div>
								</div>
								{/* <!-- /Appointment List --> */}
								
								{/* <!-- Appointment List --> */}
								<div className="appointment-list">
									<div className="profile-info-widget">
										<a href="patient-profile.html" className="booking-doc-img">
											<img src={Patient10} alt="User Image"/>
										</a>
										<div className="profile-det-info">
											<h3><a href="patient-profile.html">Robert Rhodes</a></h3>
											<div className="patient-details">
												<h5><i className="far fa-clock"></i> 4 Nov 2019, 11.00 AM</h5>
												<h5><i className="fas fa-map-marker-alt"></i> California, United States</h5>
												<h5><i className="fas fa-envelope"></i> robertrhodes@example.com</h5>
												<h5 className="mb-0"><i className="fas fa-phone"></i> +1 858 259 5285</h5>
											</div>
										</div>
									</div>
									<div className="appointment-action">
										<a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
											<i className="far fa-eye"></i> View
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-success-light">
											<i className="fas fa-check"></i> Accept
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
											<i className="fas fa-times"></i> Cancel
										</a>
									</div>
								</div>
								{/* <!-- /Appointment List --> */}
								
								{/* <!-- Appointment List --> */}
								<div className="appointment-list">
									<div className="profile-info-widget">
										<a href="patient-profile.html" className="booking-doc-img">
											<img src={Patient11} alt="User Image"/>
										</a>
										<div className="profile-det-info">
											<h3><a href="patient-profile.html">Harry Williams</a></h3>
											<div className="patient-details">
												<h5><i className="far fa-clock"></i> 3 Nov 2019, 6.00 PM</h5>
												<h5><i className="fas fa-map-marker-alt"></i> Colorado, United States</h5>
												<h5><i className="fas fa-envelope"></i> harrywilliams@example.com</h5>
												<h5 className="mb-0"><i className="fas fa-phone"></i> +1 303 607 7075</h5>
											</div>
										</div>
									</div>
									<div className="appointment-action">
										<a href="#" className="btn btn-sm bg-info-light" data-toggle="modal" data-target="#appt_details">
											<i className="far fa-eye"></i> View
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-success-light">
											<i className="fas fa-check"></i> Accept
										</a>
										<a href="javascript:void(0);" className="btn btn-sm bg-danger-light">
											<i className="fas fa-times"></i> Cancel
										</a>
									</div>
								</div>
								{/* <!-- /Appointment List --> */}
								
							</div>
						</div>
					</div>

				</div>

			</div>		
			{/* <!-- /Page Content --> */}
   
			
		   
		</div>
		{/* <!-- /Main Wrapper --> */}
		
		{/* <!-- Appointment Details Modal --> */}
		<div className="modal fade custom-modal" id="appt_details">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Appointment Details</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<ul className="info-details">
							<li>
								<div className="details-header">
									<div className="row">
										<div className="col-md-6">
											<span className="title">#APT0001</span>
											<span className="text">21 Oct 2019 10:00 AM</span>
										</div>
										<div className="col-md-6">
											<div className="text-right">
												<button type="button" className="btn bg-success-light btn-sm" id="topup_status">Completed</button>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li>
								<span className="title">Status:</span>
								<span className="text">Completed</span>
							</li>
							<li>
								<span className="title">Confirm Date:</span>
								<span className="text">29 Jun 2019</span>
							</li>
							<li>
								<span className="title">Paid Amount</span>
								<span className="text">$450</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		{/* <!-- /Appointment Details Modal --> */}
			</div>
		);
	}
}

export default Appointments;