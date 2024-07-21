import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class AdminBlank extends Component {
  render() {
    return (
      <>
        <div className="page-wrapper">
            <div className="content container-fluid">
                
                {/* Page Header */}
                <div className="page-header">
                <div className="row">
                    <div className="col-sm-12">
                    <h3 className="page-title">Blank Page</h3>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/admin-dashboard" className='text-decoration-none'>Dashboard</Link></li>
                        <li className="breadcrumb-item active">Blank Page</li>
                    </ul>
                    </div>
                </div>
                </div>
                {/* /Page Header */}
                
                <div className="row">
                <div className="col-sm-12">
                    Contents here
                </div>      
                </div>
                
            </div>      
        </div>


      </>
    )
  }
}

export default AdminBlank
