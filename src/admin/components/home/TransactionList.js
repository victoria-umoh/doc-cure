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

export class TransactionList extends Component {
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
								<h3 className="page-title">Transactions</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item">
										<Link to="/admin-dashboard" className='text-decoration-none'>Dashboard</Link></li>
									<li className="breadcrumb-item">Transactions</li>
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
													<th>Invoice Number</th>
													<th>Patient ID</th>
													<th>Patient Name</th>
													<th>Total Amount</th>
													<th className="text-center">Status</th>
													<th className="text-right">Actions</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td><Link to="/invoice">#IN0001</Link></td>
													<td>#PT001</td>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Patient1} alt="User" /></Link>
															<Link to="/profile">Charlene Reed </Link>
														</h2>
													</td>
													<td>$100.00</td>
													<td className="text-center">
														<span className="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
													<td className="text-right">
														<div className="actions">
															<a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i className="fe fe-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td><Link to="/invoice">#IN0002</Link></td>
													<td>#PT002</td>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Patient2} alt="User" /></Link>
															<Link to="/profile">Travis Trimble </Link>
														</h2>
													</td>
													<td>$200.00</td>
													<td className="text-center">
														<span className="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
													<td className="text-right">
														<div className="actions">
															<a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i className="fe fe-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td><Link to="/invoice">#IN0003</Link></td>
													<td>#PT003</td>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Patient3} alt="User" /></Link>
															<Link to="/profile">Carl Kelly</Link>
														</h2>
													</td>
													<td>$250.00</td>
													<td className="text-center">
														<span className="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
													<td className="text-right">
														<div className="actions">
															<a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i className="fe fe-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td><Link to="/invoice">#IN0004</Link></td>
													<td>#PT004</td>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Patient4} alt="User" /></Link>
															<Link to="/profile"> Michelle Fairfax</Link>
														</h2>
													</td>
													<td>$150.00</td>
													<td className="text-center">
														<span className="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
													<td className="text-right">
														<div className="actions">
															<a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i className="fe fe-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td><Link to="/invoice">#IN0005</Link></td>
													<td>#PT005</td>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Patient5} alt="User" /></Link>
															<Link to="/profile">Gina Moore</Link>
														</h2>
													</td>
													<td>$350.00</td>
													<td className="text-center">
														<span className="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
													<td className="text-right">
														<div className="actions">
															<a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i className="fe fe-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td><Link to="/invoice">#IN0006</Link></td>
													<td>#PT006</td>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Patient6} alt="User" /></Link>
															<Link to="/profile">Elsie Gilley</Link>
														</h2>
													</td>
													<td>$300.00</td>
													<td className="text-center">
														<span className="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
													<td className="text-right">
														<div className="actions">
															<a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i className="fe fe-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td><Link to="/invoice">#IN0007</Link></td>
													<td>#PT007</td>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Patient7} alt="User" /></Link>
															<Link to="/profile"> Joan Gardner</Link>
														</h2>
													</td>
													<td>$250.00</td>
													<td className="text-center">
														<span className="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
													<td className="text-right">
														<div className="actions">
															<a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i className="fe fe-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td><Link to="/invoice">#IN0008</Link></td>
													<td>#PT008</td>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Patient8} alt="User" /></Link>
															<Link to="/profile"> Daniel Griffing</Link>
														</h2>
													</td>
													<td>$150.00</td>
													<td className="text-center">
														<span className="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
													<td className="text-right">
														<div className="actions">
															<a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i className="fe fe-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td><Link to="/invoice">#IN0009</Link></td>
													<td>#PT009</td>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Patient9} alt="User" /></Link>
															<Link to="/profile">Walter Roberson</Link>
														</h2>
													</td>
													<td>$100.00</td>
													<td className="text-center">
														<span className="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
													<td className="text-right">
														<div className="actions">
															<a className="btn btn-sm bg-danger-light" data-toggle="modal" href="#delete_modal">
																<i className="fe fe-trash"></i> Delete
															</a>
														</div>
													</td>
												</tr>
												<tr>
													<td><Link to="/invoice">#IN0010</Link></td>
													<td>#PT010</td>
													<td>
														<h2 className="table-avatar">
															<Link to="/profile" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={Patient10} alt="User" /></Link>
															<Link to="/profile">Robert Rhodes </Link>
														</h2>
													</td>
													<td>$120.00</td>
													<td className="text-center">
														<span className="badge badge-pill bg-success inv-badge">Paid</span>
													</td>
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

export default TransactionList
