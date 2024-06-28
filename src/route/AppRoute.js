import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SearchPage from '../pages/SearchPage';
import RegisterPage from '../pages/RegisterPage';
import BookingPage from '../pages/BookingPage';
import BlankPage from '../pages/BlankPage';
import PatientDashboardPage from '../pages/PatientDashboardPage';
import PatientProfilePage from '../pages/PatientProfilePage';
import CheckoutPage from '../pages/CheckoutPage';
import DoctorRegisterPage from '../pages/DoctorRegisterPage';
import AppointmentPage from '../pages/AppointmentPage';
import DoctorDashboardPage from '../pages/DoctorDashboardPage';
import ChatPage from '../pages/ChatPage';
import ScheduleTimingPage from '../pages/ScheduleTimingPage';
import MyPatientPage from '../pages/MyPatientPage';
import ChatDoctorPage from '../pages/ChatDoctorPage';
import DoctorProfilePage from '../pages/DoctorProfilePage';
import DoctorProfileSettingsPage from '../pages/DoctorProfileSettingPage';
import VoiceCallPage from '../pages/VoiceCallPage';
import VideoCallPage from '../pages/VideoCallPage';
import FavouritesPage from '../pages/FavouritePage';
import ChangePasswordPage from '../pages/ChangePasswordPage';
import BookingSuccessPage from '../pages/BookingSuccessPage';
import ProfileSettingsPage from '../pages/ProfileSettingsPage';
import ComponentsPage from '../pages/ComponentsPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import InvoiceViewPage from '../pages/InvoiceViewPage';
import InvoicesPage from '../pages/InvoicesPage';
import CalendarPage from '../pages/CalendarPage';
import ReviewsPage from '../pages/ReviewsPage';


import DashboardPage from '../admin/pages/DashboardPage'
import AppointmentListPage from '../admin/pages/AppointmentListPage'
import AdminSpecialtyPage from '../admin/pages/AdminSpecialtyPage';
import DoctorListPage from '../admin/pages/DoctorListPage';
import PatientListPage from '../admin/pages/PatientListPage';
import AdminReviewPage from '../admin/pages/AdminReviewPage';
import TransactionListPage from '../admin/pages/TransactionListPage';
import AdminSettingsPage from '../admin/pages/AdminSettingsPage';
import AdminProfilePage from '../admin/pages/AdminProfilePage';
import AdminLoginPage from '../admin/pages/AdminLoginPage';
import AdminRegisterPage from '../admin/pages/AdminRegisterPage';
import AdminForgotPasswordPage from '../admin/pages/AdminForgotPasswordPage';
import LockScreenPage from '../admin/pages/LockScreenPage';
import Error404Page from '../admin/pages/Error404Page';
import Error500Page from '../admin/pages/Error500Page';
import AdminBlankPage from '../admin/pages/AdminBlankPage';
import FormBasicInputPage from '../admin/pages/FormBasicInputPage';
import FormInputGroupPage from '../admin/pages/FormInputGroupPage';
import FormHorizontalPage from '../admin/pages/FormHorizontalPage';
import FormVerticalPage from '../admin/pages/FormVerticalPage';
import FormMaskPage from '../admin/pages/FormMaskPage';
import FormValidationPage from '../admin/pages/FormValidationPage';
import TableBasicPage from '../admin/pages/TableBasicPage';
import DataTablePage from '../admin/pages/DataTablePage';
import InvoiceReportPage from '../admin/pages/InvoiceReportPage';
import AdminInvoicePage from '../admin/pages/AdminInvoicePage';

class AppRoute extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                         {/* User Routes */}
                    <Route exact path="/" element={<HomePage/>} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/booking" element={<BookingPage />} />
                    <Route path="/blank-page" element={<BlankPage />} />
                    <Route path="/patient-dashboard" element={<PatientDashboardPage />} />
                    <Route path="/appointments" element={<AppointmentPage />} />
                    <Route path="/doctor-register" element={<DoctorRegisterPage />} />
                    <Route path="/doctor-dashboard" element={<DoctorDashboardPage />} />
                    <Route path="/chat" element={<ChatPage />} />
                    <Route path="/schedule-timings" element={<ScheduleTimingPage />} />
                    <Route path="/my-patients" element={<MyPatientPage />} />
                    <Route path="/patient-profile" element={<PatientProfilePage />} />
                    <Route path="/chat-doctor" element={<ChatDoctorPage />} />
                    <Route path="/doctor-profile-settings" element={<DoctorProfileSettingsPage />} />
                    <Route path="/doctor-profile" element={<DoctorProfilePage />} />
                    <Route path="/voice-call" element={<VoiceCallPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/video-call" element={<VideoCallPage />} />
                    <Route path="/favourites" element={<FavouritesPage />} />
                    <Route path="/change-password" element={<ChangePasswordPage />} />
                    <Route path="/booking-success" element={<BookingSuccessPage />} />
                    <Route path="/profile-settings" element={<ProfileSettingsPage />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                    <Route path="/components" element={<ComponentsPage />} />
                    <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                    <Route path="/invoice-view" element={<InvoiceViewPage />} />
                    <Route path="/invoices" element={<InvoicesPage />} />
                    <Route path="/reviews" element={<ReviewsPage />} />

                    
                    {/* Admin Routes */}
                  <Route path="/admin-dashboard" element={<DashboardPage />} />
                  <Route path="/appointment-list" element={<AppointmentListPage />} />
                  <Route path="/specialities" element={<AdminSpecialtyPage />} />
                  <Route path="/doctor-list" element={<DoctorListPage />} />
                  <Route path="/patient-list" element={<PatientListPage />} />
                  <Route path="/review" element={<AdminReviewPage />} />
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
        );
    }
}

export default AppRoute;