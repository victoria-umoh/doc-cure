import React, { Component } from 'react'
import DoctorThumb02 from '../../assets/img/doctors/doctor-thumb-02.jpg'

export class DoctorChangePassword extends Component {
  render() {
	return (
	  <>
		 {/* Breadcrumb  */}
			<div className="breadcrumb-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-12 col-12">
							<nav aria-label="breadcrumb" className="page-breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
									<li className="breadcrumb-item active" aria-current="page">Change Password</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Change Password</h2>
						</div>
					</div>
				</div>
			</div>
			 {/* /Breadcrumb  */}
			
			 {/* Page Content  */}
			<div className="content">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
						
							 {/* Profile Sidebar  */}
							<div className="profile-sidebar">
								<div className="widget-profile pro-widget-content">
									<div className="profile-info-widget">
										<a href="#" className="booking-doc-img">
											<img src={DoctorThumb02} alt="User Image" />
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
											<li>
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
											<li className="active">
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
							 {/* /Profile Sidebar  */}
							
						</div>
						<div className="col-md-7 col-lg-8 col-xl-9">
							<div className="card">
								<div className="card-body">
									<div className="row">
										<div className="col-md-12 col-lg-6">
										
											 {/* Change Password Form  */}
											<form>
												<div className="form-group">
													<label>Old Password</label>
													<input type="password" className="form-control" />
												</div>
												<div className="form-group">
													<label>New Password</label>
													<input type="password" className="form-control" />
												</div>
												<div className="form-group">
													<label>Confirm Password</label>
													<input type="password" className="form-control" />
												</div>
												<div className="submit-section">
													<button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
												</div>
											</form>
											 {/* /Change Password Form  */}
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>		
			 {/* /Page Content  */}
   
	  </>
	)
  }
}

export default DoctorChangePassword
