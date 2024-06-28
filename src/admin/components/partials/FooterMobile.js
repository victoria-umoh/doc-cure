import React, { Component } from 'react'

export class FooterMobile extends Component {
  render() {
    return (
      <>
        {/* jQuery  */}
        <script src="assets/js/jquery-3.2.1.min.js"></script>

        {/* Bootstrap Core JS  */}
        <script src="assets/js/popper.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        
        {/* Slimscroll JS  */}
        <script src="assets/plugins/slimscroll/jquery.slimscroll.min.js"></script>
        
        {/* Datatables JS  */}
        <script src="assets/plugins/datatables/jquery.dataTables.min.js"></script>
        <script src="assets/plugins/datatables/datatables.min.js"></script>
        
        {/* Custom JS  */}
        <script  src="assets/js/script.js"></script>
      </>
    )
  }
}

export default FooterMobile
