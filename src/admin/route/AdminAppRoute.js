import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/Dashboard'
import AdminSpecialty from '../pages/AdminSpecialty';
import DoctorListPage from '../pages/DoctorListPage';
import PatientListPage from '../pages/PatientListPage';
import AdminReviewPage from '../pages/AdminReviewPage';
import TransactionListPage from '../pages/TransactionListPage';
import AdminSettingsPage from '../pages/AdminSettingsPage';
import InvoiceReportPage from '../pages/InvoiceReportPage';
import AdminProfilePage from '../pages/AdminProfilePage';
import AdminLoginPage from '../pages/AdminLoginPage';
import AdminRegisterPage from '../pages/AdminRegisterPage';
import AdminForgotPasswordPage from '../pages/AdminForgotPasswordPage';
import LockScreenPage from '../pages/LockScreenPage';
import Error404Page from '../pages/Error404Page';
import Error500Page from '../pages/Error500Page';
import AdminBlankPage from '../pages/AdminBlankPage';
import FormBasicInputPage from '../pages/FormBasicInputPage';
import FormInputGroupPage from '../pages/FormInputGroupPage';
import FormHorizontalPage from '../pages/FormHorizontalPage';
import FormVerticalPage from '../pages/FormVerticalPage';
import FormMaskPage from '../pages/FormMaskPage';
import FormValidationPage from '../pages/FormValidationPage';
import TableBasicPage from '../pages/TableBasicPage';
import DataTablePage from '../pages/DataTablePage';
import InvoiceReportPage from '../pages/InvoiceReportPage';
import AdminInvoicePage from '../pages/AdminInvoicePage';


export class AdminAppRoute extends Component {
  render() {
    return (
        <BrowserRouter>
            <Routes>
                  {/* Admin Routes */}
                  <Route path="/dashboard" element={<DashboardPage />} />
                  <Route path="/appointment-list" element={<AppointmentListPage />} />
                  <Route path="/specialities" element={<AdminSpecialty />} />
                  <Route path="/doctor-list" element={<DoctorListPage />} />
                  <Route path="/patient-list" element={<PatientListPage />} />
                  <Route path="/reviews" element={<AdminReviewPage />} />
                  <Route path="/transactions-list" element={<TransactionListPage />} />
                  <Route path="/settings" element={<AdminSettingsPage />} />
                  <Route path="/invoice-report" element={<InvoiceReportPage />} />
                  <Route path="/profile" element={<AdminProfilePage />} />
                  <Route path="/login" element={<AdminLoginPage />} />
                  <Route path="/register" element={<AdminRegisterPage />} />
                  <Route path="/forgot-password" element={<AdminForgotPasswordPage />} />
                  <Route path="/lock-screen" element={<LockScreenPage />} />
                  <Route path="/error-404" element={<Error404Page />} />
                  <Route path="/error-500" element={<Error500Page />} />
                  <Route path="/blank-page" element={<AdminBlankPage />} />
                  <Route path="/form-basic-inputs" element={<FormBasicInputPage />} />
                  <Route path="/form-input-groups" element={<FormInputGroupPage />} />
                  <Route path="/form-horizontal" element={<FormHorizontalPage />} />
                  <Route path="/form-vertical" element={<FormVerticalPage />} />
                  <Route path="/form-mask" element={<FormMaskPage />} />
                  <Route path="/form-validation" element={<FormValidationPage />} />
                  <Route path="/tables-basic" element={<TableBasicPage />} />
                  <Route path="/data-tables" element={<DataTablePage />} />
                  <Route path="/invoice-report" element={<InvoiceReportPage />} />
                  <Route path="/invoice" element={<AdminInvoicePage />} />
                </Routes>
            </BrowserRouter>
    )
  }
}

export default AdminAppRoute
