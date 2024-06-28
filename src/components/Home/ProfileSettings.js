import React, { Component } from 'react'
import Patient from '../../assets/img/patients/patient.jpg'

export class ProfileSettings extends Component {
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
									<li className="breadcrumb-item active" aria-current="page">Profile Settings</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Profile Settings</h2>
						</div>
					</div>
				</div>
			</div>
			 {/* /Breadcrumb  */}
			
			 {/* Page Content  */}
			<div className="content">
				<div className="container-fluid">
					<div className="row">
					
						 {/* Profile Sidebar  */}
						<div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
							<div className="profile-sidebar">
								<div className="widget-profile pro-widget-content">
									<div className="profile-info-widget">
										<a href="#" className="booking-doc-img">
											<img src={Patient} alt="User Image" />
										</a>
										<div className="profile-det-info">
											<h3>Richard Wilson</h3>
											<div className="patient-details">
												<h5><i className="fas fa-birthday-cake"></i> 24 Jul 1983, 38 years</h5>
												<h5 className="mb-0"><i className="fas fa-map-marker-alt"></i> Newyork, USA</h5>
											</div>
										</div>
									</div>
								</div>
								<div className="dashboard-widget">
									<nav className="dashboard-menu">
										<ul>
											<li>
												<a href="#">
													<i className="fas fa-columns"></i>
													<span>Dashboard</span>
												</a>
											</li>
											<li>
												<a href="favourites.html">
													<i className="fas fa-bookmark"></i>
													<span>Favourites</span>
												</a>
											</li>
											<li>
												<a href="chat.html">
													<i className="fas fa-comments"></i>
													<span>Message</span>
													<small className="unread-msg">23</small>
												</a>
											</li>
											<li className="active">
												<a href="profile-settings.html">
													<i className="fas fa-user-cog"></i>
													<span>Profile Settings</span>
												</a>
											</li>
											<li>
												<a href="change-password.html">
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
						</div>
						 {/* /Profile Sidebar  */}
						
						<div className="col-md-7 col-lg-8 col-xl-9">
							<div className="card">
								<div className="card-body">
									
									 {/* Profile Settings Form  */}
									<form>
										<div className="row form-row">
											<div className="col-12 col-md-12">
												<div className="form-group">
													<div className="change-avatar">
														<div className="profile-img">
															<img src={Patient} alt="User Image" />
														</div>
														<div className="upload-img">
															<div className="change-photo-btn">
																<span><i className="fa fa-upload"></i> Upload Photo</span>
																<input type="file" className="upload" />
															</div>
															<small className="form-text text-muted">Allowed JPG, GIF or PNG. Max size of 2MB</small>
														</div>
													</div>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>First Name</label>
													<input type="text" className="form-control" value="Richard" />
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>Last Name</label>
													<input type="text" className="form-control" value="Wilson" />
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>Date of Birth</label>
													<div className="cal-icon">
														<input type="text" className="form-control datetimepicker" value="24-07-1983" />
													</div>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>Blood Group</label>
													<select className="form-control select">
														<option>A-</option>
														<option>A+</option>
														<option>B-</option>
														<option>B+</option>
														<option>AB-</option>
														<option>AB+</option>
														<option>O-</option>
														<option>O+</option>
													</select>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>Email ID</label>
													<input type="email" className="form-control" value="richard@example.com" />
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>Mobile</label>
													<input type="text" value="+1 202-555-0125" className="form-control" />
												</div>
											</div>
											<div className="col-12">
												<div className="form-group">
												<label>Address</label>
													<input type="text" className="form-control" value="806 Twin Willow Lane" />
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>City</label>
													<input type="text" className="form-control" value="Old Forge" />
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>State</label>
													<input type="text" className="form-control" value="Newyork" />
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>Zip Code</label>
													<input type="text" className="form-control" value="13420" />
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>Country</label>
													<input type="text" className="form-control" value="United States" />
												</div>
											</div>
										</div>
										<div className="submit-section">
											<button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
										</div>
									</form>
									 {/* /Profile Settings Form  */}
									
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

export default ProfileSettings
