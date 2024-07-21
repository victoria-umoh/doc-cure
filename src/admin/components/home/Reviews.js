import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Patient1 from '../../assets/img/patients/patient1.jpg'
import Patient2 from '../../assets/img/patients/patient2.jpg'
import Patient3 from '../../assets/img/patients/patient3.jpg'
import Patient4 from '../../assets/img/patients/patient4.jpg'
import Patient5 from '../../assets/img/patients/patient5.jpg'
import Patient6 from '../../assets/img/patients/patient6.jpg'
import Patient7 from '../../assets/img/patients/patient7.jpg'
import Patient8 from '../../assets/img/patients/patient8.jpg'
import Patient9 from '../../assets/img/patients/patient9.jpg'
import Patient10 from '../../assets/img/patients/patient10.jpg'
import DoctorThumb01 from '../../assets/img/doctors/doctor-thumb-01.jpg'
import DoctorThumb02 from '../../assets/img/doctors/doctor-thumb-02.jpg'
import DoctorThumb03 from '../../assets/img/doctors/doctor-thumb-03.jpg'
import DoctorThumb04 from '../../assets/img/doctors/doctor-thumb-04.jpg'
import DoctorThumb05 from '../../assets/img/doctors/doctor-thumb-05.jpg'
import DoctorThumb06 from '../../assets/img/doctors/doctor-thumb-06.jpg'
import DoctorThumb07 from '../../assets/img/doctors/doctor-thumb-07.jpg'
import DoctorThumb08 from '../../assets/img/doctors/doctor-thumb-08.jpg'
import DoctorThumb09 from '../../assets/img/doctors/doctor-thumb-09.jpg'
import DoctorThumb10 from '../../assets/img/doctors/doctor-thumb-10.jpg'

export class Reviews extends Component {
  render() {
    return (
      <>
         {/* Page Wrapper  */}
            <div className="page-wrapper">
                <div className="content container-fluid">
				
					 {/* Page Header  */}
					<div className="page-header">
						<div className="row">
							<div className="col-sm-12">
								<h3 className="page-title">Reviews</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item">
										<Link to="/admin-dashboard" className='text-decoration-none'>Dashboard</Link></li>
									<li className="breadcrumb-item">Reviews</li>
								</ul>
							</div>
						</div>
					</div>
					 {/* /Page Header  */}
					
					<div className="row">
						<div className="col-sm-12">
							<div className="card">
								<div className="card-body">
									<div className="table-responsive">
										<table className="datatable table table-hover table-center mb-0">
											<thead>
												<tr>
													<th>Patient Name</th>
													<th>Doctor Name</th>
													<th>Ratings</th>
													<th>Description</th>
													<th>Date</th>
													<th className="text-right">Actions</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Patient1} alt="User" /></Link>
															<Link to="/profile">Charlene Reed </Link>
														</h2>
													</td>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={DoctorThumb01} alt="User" /></Link>
															<Link to="/profile">Dr. Ruby Perrin</Link>
														</h2>
													</td>
													
													<td>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star-o text-secondary"></i>
													</td>
													
													<td>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit
													</td>
														<td>3 Nov 2019 <br /><small>09.59 AM</small></td>
													<td className="text-right">
														<div className="actions">
															<a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i className="fe fe-trash"></i> Delete
															</a>
															
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Patient2} alt="User" /></Link>
															<Link to="/profile">Travis Trimble </Link>
														</h2>
													</td>
													
												
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={DoctorThumb02} alt="User" /></Link>
															<Link to="/profile">Dr. Darren Elder</Link>
														</h2>
													</td>
													
													<td>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star-o text-secondary"></i>
													</td>
													
													<td>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit
													</td>
														<td>2 Nov 2019<br /> <small>08.50 AM</small></td>
													<td className="text-right">
														<div className="actions">
															<a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i className="fe fe-trash"></i> Delete
															</a>
															
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Patient3} alt="User" /></Link>
															<Link to="/profile">Carl Kelly</Link>
														</h2>
													</td>
												
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={DoctorThumb03} alt="User" /></Link>
															<Link to="/profile">Dr. Deborah Angel</Link>
														</h2>
													</td>
													
													<td>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star-o text-secondary"></i>
													</td>
													
													<td>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit
													</td>
														<td>1 Nov 2019<br /> <small>02.59 PM</small></td>
													<td className="text-right">
														<div className="actions">
															<a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i className="fe fe-trash"></i> Delete
															</a>
															
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Patient4} alt="User" /></Link>
															<Link to="/profile"> Michelle Fairfax</Link>
														</h2>
													</td>
													
												
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={DoctorThumb04} alt="User" /></Link>
															<Link to="/profile">Dr. Sofia Brient</Link>
														</h2>
													</td>
													
													<td>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star-o text-secondary"></i>
													</td>
													
													<td>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit
													</td>
														<td>27 Sep 2019 <br /><small>03.40 PM</small></td>
													<td className="text-right">
														<div className="actions">
															<a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i className="fe fe-trash"></i> Delete
															</a>
															
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Patient5} alt="User" /></Link>
															<Link to="/profile">Gina Moore</Link>
														</h2>
													</td>
													
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={DoctorThumb05} alt="User" /></Link>
															<Link to="/profile">Dr. Marvin Campbell</Link>
														</h2>
													</td>
													
													<td>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star-o text-secondary"></i>
													</td>
													
													<td>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit
													</td>
														<td>24 Sep 2019 <br /><small>04.38 PM</small></td>
													<td className="text-right">
														<div className="actions">
															<a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i className="fe fe-trash"></i> Delete
															</a>
															
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Patient6} alt="User" /></Link>
															<Link to="/profile">Elsie Gilley</Link>
														</h2>
													</td>
													
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={DoctorThumb06} alt="User" /></Link>
															<Link to="/profile">Dr. Katharine Berthold</Link>
														</h2>
													</td>
													<td>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star-o text-secondary"></i>
													</td>
													
													<td>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit
													</td>
														<td>22 Aug 2019 <br /><small>01.50 PM</small></td>
													<td className="text-right">
														<div className="actions">
															<a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i className="fe fe-trash"></i> Delete
															</a>
															
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle"src={Patient7} alt="User" /></Link>
															<Link to="/profile">Joan Gardner</Link>
														</h2>
													</td>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={DoctorThumb07} alt="User" /></Link>
															<Link to="/profile">Dr. Linda Tobin</Link>
														</h2>
													</td>
													
													<td>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star-o text-secondary"></i>
													</td>
													
													<td>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit
													</td>
														<td>21 Jul 2019 <br /><small>05.50 PM</small></td>
													<td className="text-right">
														<div className="actions">
															<a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i className="fe fe-trash"></i> Delete
															</a>
															
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Patient8} alt="User" /></Link>
															<Link to="/profile">Daniel Griffing</Link>
														</h2>
													</td>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={DoctorThumb08} alt="User" /></Link>
															<Link to="/profile">Dr. Paul Richard</Link>
														</h2>
													</td>
													<td>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star-o text-secondary"></i>
													</td>
													
													<td>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit
													</td>
														<td>16 Jun 2019 <br /><small>04.50 PM</small></td>
													<td className="text-right">
														<div className="actions">
															<a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i className="fe fe-trash"></i> Delete
															</a>
															
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Patient9} alt="User" /></Link>
															<Link to="/profile">Walter Roberson</Link>
														</h2>
													</td>
													
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={DoctorThumb09} alt="User" /></Link>
															<Link to="/profile">Dr. John Gibbs</Link>
														</h2>
													</td>
													<td>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star-o text-secondary"></i>
													</td>
													
													<td>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit
													</td>
														<td>11 Mar 2019 <br/><small>05.55 PM</small></td>
													<td className="text-right">
														<div className="actions">
															<a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i className="fe fe-trash"></i> Delete
															</a>
															
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Patient10} alt="User" /></Link>
															<Link to="/profile">Harry Williams</Link>
														</h2>
													</td>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={DoctorThumb10} alt="User" /></Link>
															<Link to="/profile">Dr. Olga Barlow</Link>
														</h2>
													</td>
													
													<td>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star text-warning"></i>
														<i className="fe fe-star-o text-secondary"></i>
													</td>
													
													<td>
														Lorem ipsum dolor sit amet, consectetur adipiscing elit
													</td>
														<td>15 Feb 2019 <br /><small>07.30 PM</small></td>
													<td className="text-right">
														<div className="actions">
															<a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i className="fe fe-trash"></i> Delete
															</a>
															
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>			
					</div>
					
				</div>			
			</div>
			 {/* /Page Wrapper  */}
			
			 {/* Delete Modal  */}
			<div className="modal fade" id="delete_modal" aria-hidden="true" role="dialog">
				<div className="modal-dialog modal-dialog-centered" role="document" >
					<div className="modal-content">
						{/* <div className="modal-header">
							<h5 className="modal-title">Delete</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div> */}
						<div className="modal-body">
							<div className="form-content p-2">
								<h4 className="modal-title">Delete</h4>
								<p className="mb-4">Are you sure want to delete?</p>
								<button type="button" className="btn btn-primary">Save </button>
								<button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			 {/* /Delete Modal  */}
      </>
    )
  }
}

export default Reviews
