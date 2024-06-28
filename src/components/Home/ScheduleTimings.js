import React, { Component } from 'react'
import DoctorThumb02 from '../../assets/img/doctors/doctor-thumb-02.jpg'

export class ScheduleTimings extends Component {
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
									<li className="breadcrumb-item active" aria-current="page">Schedule Timings</li>
								</ol>
							</nav>
							<h2 className="breadcrumb-title">Schedule Timings</h2>
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
											<li className="active">
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
							 {/* /Profile Sidebar  */}
							
						</div>
						
						<div className="col-md-7 col-lg-8 col-xl-9">
						 
							<div className="row">
								<div className="col-sm-12">
									<div className="card">
										<div className="card-body">
											<h4 className="card-title">Schedule Timings</h4>
											<div className="profile-box">
												<div className="row">

													<div className="col-lg-4">
														<div className="form-group">               
															<label>Timing Slot Duration</label>
															<select className="select form-control">
																<option>-</option>
																<option>15 mins</option>
																<option selected="selected">30 mins</option>  
																<option>45 mins</option>
																<option>1 Hour</option>
															</select>
														</div>
													</div>

												</div>     
												<div className="row">
													<div className="col-md-12">
														<div className="card schedule-widget mb-0">
														
															 {/* Schedule Header  */}
															<div className="schedule-header">
															
																 {/* Schedule Nav  */}
																<div className="schedule-nav">
																	<ul className="nav nav-tabs nav-justified">
																		<li className="nav-item">
																			<a className="nav-link" data-toggle="tab" href="#slot_sunday">Sunday</a>
																		</li>
																		<li className="nav-item">
																			<a className="nav-link active" data-toggle="tab" href="#slot_monday">Monday</a>
																		</li>
																		<li className="nav-item">
																			<a className="nav-link" data-toggle="tab" href="#slot_tuesday">Tuesday</a>
																		</li>
																		<li className="nav-item">
																			<a className="nav-link" data-toggle="tab" href="#slot_wednesday">Wednesday</a>
																		</li>
																		<li className="nav-item">
																			<a className="nav-link" data-toggle="tab" href="#slot_thursday">Thursday</a>
																		</li>
																		<li className="nav-item">
																			<a className="nav-link" data-toggle="tab" href="#slot_friday">Friday</a>
																		</li>
																		<li className="nav-item">
																			<a className="nav-link" data-toggle="tab" href="#slot_saturday">Saturday</a>
																		</li>
																	</ul>
																</div>
																 {/* /Schedule Nav  */}
																
															</div>
															 {/* /Schedule Header  */}
															
															 {/* Schedule Content  */}
															<div className="tab-content schedule-cont">
															
																 {/* Sunday Slot  */}
																<div id="slot_sunday" className="tab-pane fade">
																	<h4 className="card-title d-flex justify-content-between">
																		<span>Time Slots</span> 
																		<a className="edit-link" data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle"></i> Add Slot</a>
																	</h4>
																	<p className="text-muted mb-0">Not Available</p>
																</div>
																 {/* /Sunday Slot  */}

																 {/* Monday Slot  */}
																<div id="slot_monday" className="tab-pane fade show active">
																	<h4 className="card-title d-flex justify-content-between">
																		<span>Time Slots</span> 
																		<a className="edit-link" data-toggle="modal" href="#edit_time_slot"><i className="fa fa-edit mr-1"></i>Edit</a>
																	</h4>
																	
																	 {/* Slot List  */}
																	<div className="doc-times">
																		<div className="doc-slot-list">
																			8:00 pm - 11:30 pm
																			<a href="javascript:void(0)" className="delete_schedule">
																				<i className="fa fa-times"></i>
																			</a>
																		</div>
																		<div className="doc-slot-list">
																			11:30 pm - 1:30 pm
																			<a href="javascript:void(0)" className="delete_schedule">
																				<i className="fa fa-times"></i>
																			</a>
																		</div>
																		<div className="doc-slot-list">
																			3:00 pm - 5:00 pm
																			<a href="javascript:void(0)" className="delete_schedule">
																				<i className="fa fa-times"></i>
																			</a>
																		</div>
																		<div className="doc-slot-list">
																			6:00 pm - 11:00 pm
																			<a href="javascript:void(0)" className="delete_schedule">
																				<i className="fa fa-times"></i>
																			</a>
																		</div>
																	</div>
																	 {/* /Slot List  */}
																	
																</div>
																 {/* /Monday Slot  */}

																 {/* Tuesday Slot  */}
																<div id="slot_tuesday" className="tab-pane fade">
																	<h4 className="card-title d-flex justify-content-between">
																		<span>Time Slots</span> 
																		<a className="edit-link" data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle"></i> Add Slot</a>
																	</h4>
																	<p className="text-muted mb-0">Not Available</p>
																</div>
																 {/* /Tuesday Slot  */}

																 {/* Wednesday Slot  */}
																<div id="slot_wednesday" className="tab-pane fade">
																	<h4 className="card-title d-flex justify-content-between">
																		<span>Time Slots</span> 
																		<a className="edit-link" data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle"></i> Add Slot</a>
																	</h4>
																	<p className="text-muted mb-0">Not Available</p>
																</div>
																 {/* /Wednesday Slot  */}

																 {/* Thursday Slot  */}
																<div id="slot_thursday" className="tab-pane fade">
																	<h4 className="card-title d-flex justify-content-between">
																		<span>Time Slots</span> 
																		<a className="edit-link" data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle"></i> Add Slot</a>
																	</h4>
																	<p className="text-muted mb-0">Not Available</p>
																</div>
																 {/* /Thursday Slot  */}

																 {/* Friday Slot  */}
																<div id="slot_friday" className="tab-pane fade">
																	<h4 className="card-title d-flex justify-content-between">
																		<span>Time Slots</span> 
																		<a className="edit-link" data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle"></i> Add Slot</a>
																	</h4>
																	<p className="text-muted mb-0">Not Available</p>
																</div>
																 {/* /Friday Slot  */}

																 {/* Saturday Slot  */}
																<div id="slot_saturday" className="tab-pane fade">
																	<h4 className="card-title d-flex justify-content-between">
																		<span>Time Slots</span> 
																		<a className="edit-link" data-toggle="modal" href="#add_time_slot"><i className="fa fa-plus-circle"></i> Add Slot</a>
																	</h4>
																	<p className="text-muted mb-0">Not Available</p>
																</div>
																 {/* /Saturday Slot  */}

															</div>
															 {/* /Schedule Content  */}
															
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
								
						</div>
					</div>

				</div>

			</div>		
			 {/* /Page Content  */}
   
			 {/* Footer  */}
			
			 {/* /Footer  */}
		   
		 {/* /Main Wrapper  */}
		
		 {/* Add Time Slot Modal  */}
		<div className="modal fade custom-modal" id="add_time_slot">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Add Time Slots</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<form>
							<div className="hours-info">
								<div className="row form-row hours-cont">
									<div className="col-12 col-md-10">
										<div className="row form-row">
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>Start Time</label>
													<select className="form-control">
														<option>-</option>
														<option>12.00 am</option>
														<option>12.30 am</option>  
														<option>1.00 am</option>
														<option>1.30 am</option>
													</select>
												</div> 
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>End Time</label>
													<select className="form-control">
														<option>-</option>
														<option>12.00 am</option>
														<option>12.30 am</option>  
														<option>1.00 am</option>
														<option>1.30 am</option>
													</select>
												</div> 
											</div>
										</div>
									</div>
								</div>
							</div>
							
							<div className="add-more mb-3">
								<a href="javascript:void(0);" className="add-hours"><i className="fa fa-plus-circle"></i> Add More</a>
							</div>
							<div className="submit-section text-center">
								<button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		 {/* /Add Time Slot Modal  */}
		
		 {/* Edit Time Slot Modal  */}
		<div className="modal fade custom-modal" id="edit_time_slot">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Edit Time Slots</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<form>
							<div className="hours-info">
								<div className="row form-row hours-cont">
									<div className="col-12 col-md-10">
										<div className="row form-row">
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>Start Time</label>
													<select className="form-control">
														<option>-</option>
														<option selected>12.00 am</option>
														<option>12.30 am</option>  
														<option>1.00 am</option>
														<option>1.30 am</option>
													</select>
												</div> 
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>End Time</label>
													<select className="form-control">
														<option>-</option>
														<option>12.00 am</option>
														<option selected>12.30 am</option>  
														<option>1.00 am</option>
														<option>1.30 am</option>
													</select>
												</div> 
											</div>
										</div>
									</div>
								</div>
								
								<div className="row form-row hours-cont">
									<div className="col-12 col-md-10">
										<div className="row form-row">
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>Start Time</label>
													<select className="form-control">
														<option>-</option>
														<option>12.00 am</option>
														<option selected>12.30 am</option>
														<option>1.00 am</option>
														<option>1.30 am</option>
													</select>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>End Time</label>
													<select className="form-control">
														<option>-</option>
														<option>12.00 am</option>
														<option>12.30 am</option>
														<option selected>1.00 am</option>
														<option>1.30 am</option>
													</select>
												</div>
											</div>
										</div>
									</div>
									<div className="col-12 col-md-2"><label className="d-md-block d-sm-none d-none">&nbsp;</label><a href="#" className="btn btn-danger trash"><i className="far fa-trash-alt"></i></a></div>
								</div>
								
								<div className="row form-row hours-cont">
									<div className="col-12 col-md-10">
										<div className="row form-row">
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>Start Time</label>
													<select className="form-control">
														<option>-</option>
														<option>12.00 am</option>
														<option>12.30 am</option>
														<option selected>1.00 am</option>
														<option>1.30 am</option>
													</select>
												</div>
											</div>
											<div className="col-12 col-md-6">
												<div className="form-group">
													<label>End Time</label>
													<select className="form-control">
														<option>-</option>
														<option>12.00 am</option>
														<option>12.30 am</option>
														<option>1.00 am</option>
														<option selected>1.30 am</option>
													</select>
												</div>
											</div>
										</div>
									</div>
									<div className="col-12 col-md-2"><label className="d-md-block d-sm-none d-none">&nbsp;</label><a href="#" className="btn btn-danger trash"><i className="far fa-trash-alt"></i></a></div>
								</div>

							</div>
							
							<div className="add-more mb-3">
								<a href="javascript:void(0);" className="add-hours"><i className="fa fa-plus-circle"></i> Add More</a>
							</div>
							<div className="submit-section text-center">
								<button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		 {/* /Edit Time Slot Modal  */}
	  </>
	)
  }
}

export default ScheduleTimings
