import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Button, ButtonGroup, Dropdown, DropdownButton, SplitButton, ProgressBar} from 'react-bootstrap/';
import Avatar2 from "../../assets/img/profiles/avatar-02.jpg";
import Avatar3 from "../../assets/img/profiles/avatar-03.jpg";
import Avatar4 from "../../assets/img/profiles/avatar-04.jpg";
import Img01 from "../../assets/img/img-01.jpg";

export class ComponentSection extends Component {
  render() {
    const alertTypes = [
        { variant: 'primary', heading: 'Holy guacamole!', message: 'You should check in on some of those fields below.' },
        { variant: 'secondary', heading: 'Holy guacamole!', message: 'You should check in on some of those fields below.' },
        { variant: 'warning', heading: 'Warning!', message: 'There was a problem with your ' },
        { variant: 'danger', heading: 'Error!', message: 'A problem has occurred while submitting your data.' },
        { variant: 'success', heading: 'Success!', message: 'Your message has been sent successfully.' },
        { variant: 'info', heading: 'Note!', message: 'Please read the comments carefully.' },
        { variant: 'light', heading: 'Holy guacamole!', message: 'You should check in on some of those fields below.' },
        { variant: 'dark', heading: 'Holy guacamole!', message: 'You should check in on some of those fields below.' },
      ];
     
    return (
      <>
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col">
                  <h3 className="page-title">Components</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admin-dashboard" className='text-decoration-none'>Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item" active>Components</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="comp-sec-wrapper">
              {/* Avatar */}
              <section className="comp-section">
                <div className="section-header">
                  <h3 className="section-title">Avatar</h3>
                  <div className="line" />
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Sizing</h4>
                      </div>
                      <div className="card-body">
                        <div className="avatar avatar-xxl">
                          <img className="avatar-img rounded-circle" alt="User" src={Avatar2} />
                        </div>
                        <div className="avatar avatar-xl">
                          <img className="avatar-img rounded-circle" alt="User" src={Avatar2} />
                        </div>
                        <div className="avatar avatar-lg">
                          <img className="avatar-img rounded-circle" alt="User" src={Avatar2} />
                        </div>
                        <div className="avatar">
                          <img className="avatar-img rounded-circle" alt="User" src={Avatar2} />
                        </div>
                        <div className="avatar avatar-sm">
                          <img className="avatar-img rounded-circle" alt="User" src={Avatar2} />
                        </div>
                        <div className="avatar avatar-xs">
                          <img className="avatar-img rounded-circle" alt="User" src={Avatar2} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Avatar With Status</h4>
                      </div>
                      <div className="card-body">
                        <div className="avatar avatar-online">
                          <img className="avatar-img rounded-circle" alt="User" src={Avatar2} />
                        </div>
                        <div className="avatar avatar-offline">
                          <img className="avatar-img rounded-circle" alt="User" src={Avatar2} />
                        </div>
                        <div className="avatar avatar-away">
                          <img className="avatar-img rounded-circle" alt="User" src={Avatar2} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Shape</h4>
                      </div>
                      <div className="card-body">
                        <div className="avatar">
                          <img className="avatar-img rounded" alt="User" src={Avatar2} />
                        </div>
                        <div className="avatar">
                          <img className="avatar-img rounded-circle" alt="User" src={Avatar2} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-header">
                        <h4 className="card-title">Group</h4>
                      </div>
                      <div className="card-body">
                        <div className="avatar-group">
                          <div className="avatar">
                            <img className="avatar-img rounded-circle border border-white" alt="User" src={Avatar2} />
                          </div>
                          <div className="avatar">
                            <img className="avatar-img rounded-circle border border-white" alt="User" src={Avatar3} />
                          </div>
                          <div className="avatar">
                            <img className="avatar-img rounded-circle border border-white" alt="User" src={Avatar4} />
                          </div>
                          <div className="avatar">
                            <span className="avatar-title rounded-circle border border-white">CF</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* /Avatar */}
                    {/* Alerts */}
                    <section className="comp-section">
                        <div className="section-header">
                            <h3 className="section-title">Alerts</h3>
                            <div className="line" />
                        </div>
                        <Container>
                            {alertTypes.map((alert, index) => (
                            <Alert key={index} variant={alert.variant} dismissible>
                                <Alert.Heading>{alert.heading}</Alert.Heading>
                                <p>
                                {alert.message}
                                {alert.variant === 'warning' && <a href="#" className="alert-link">network connection</a>}
                                {alert.variant === 'danger' && <a href="#" className="alert-link">problem</a>}
                                {alert.variant === 'success' && <a href="#" className="alert-link">message</a>}
                                {alert.variant === 'info' && <a href="#" className="alert-link">comments</a>}
                                </p>
                            </Alert>
                            ))}
                        </Container>
                    </section>
                    {/* /Alerts */}
                    {/* Breadcrumbs */}
                    <section className="comp-section">
                    <div className="section-header">
                        <h3 className="section-title">Breadcrumbs</h3>
                        <div className="line" />
                    </div>
                    <div className="card">
                        <div className="card-body">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                Home
                            </li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                Products
                            </li>
                            </ol>
                        </nav>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="#">Products</a>
                            </li>
                            <li
                                className="breadcrumb-item active"
                                aria-current="page"
                            >
                                Accessories
                            </li>
                            </ol>
                        </nav>
                        </div>
                    </div>
                    </section>
                    {/* /Breadcrumbs */}
                    {/* Buttons */}
                    <section className="comp-section comp-buttons">
                    <div className="section-header">
                        <h3 className="section-title">Buttons</h3>
                        <div className="line" />
                    </div>
                    <div className="card">
                        <div className="card-body">
                        <h4 className="card-title">Default Button</h4>
                        <Button variant="primary">Primary</Button>{' '}
                        <Button variant="secondary">Secondary</Button>{' '}
                        <Button variant="success">Success</Button>{' '}
                        <Button variant="warning">Warning</Button>{' '}
                        <Button variant="danger">Danger</Button>{' '}
                        <Button variant="info">Info</Button>{' '}
                        <Button variant="light">Light</Button>{' '}
                        <Button variant="dark">Dark</Button>
                        <Button variant="link">Link</Button>
                        <hr />
                        <h4 className="card-title">Button Sizes</h4>
                        <p>
                        <Button variant="primary" size="lg">Primary</Button>{' '}
                        <Button variant="secondary" size="lg">Secondary</Button>{' '}
                        <Button variant="success" size="lg">Success</Button>{' '}
                        <Button variant="danger" size="lg">Danger </Button>{' '}
                        <Button variant="warning" size="lg">Warning</Button>{' '}
                        <Button variant="info" size="lg">Info</Button>{' '}
                        <Button variant="light" size="lg">Light</Button>{' '}
                        <Button variant="dark" size="lg">Dark </Button>
                        </p>
                        <p>
                        <Button variant="primary">Primary</Button>{' '}
                        <Button variant="secondary">Secondary</Button>{' '}
                        <Button variant="success">Success</Button>{' '}
                        <Button variant="danger">Danger </Button>{' '}
                        <Button variant="warning">Warning</Button>{' '}
                        <Button variant="info">Info</Button>{' '}
                        <Button variant="light">Light</Button>{' '}
                        <Button variant="dark">Dark </Button>
                        </p>
                        <p>
                        <Button variant="primary" size="sm">Primary</Button>{' '}
                        <Button variant="secondary" size="sm">Secondary</Button>{' '}
                        <Button variant="success" size="sm">Success</Button>{' '}
                        <Button variant="danger" size="sm">Danger </Button>{' '}
                        <Button variant="warning" size="sm">Warning</Button>{' '}
                        <Button variant="info" size="sm">Info</Button>{' '}
                        <Button variant="light" size="sm">Light</Button>{' '}
                        <Button variant="dark" size="sm">Dark </Button>
                        </p>

                        <hr />
                        
                        <h4 className="card-title">Button Groups</h4>
                        <ButtonGroup size="lg" className="mb-2">
                            <Button>Left</Button>
                            <Button>Middle</Button>
                            <Button>Right</Button>
                        </ButtonGroup>
                        <br />
                        <ButtonGroup className="mb-2">
                            <Button>Left</Button>
                            <Button>Middle</Button>
                            <Button>Right</Button>
                        </ButtonGroup>
                        <br />
                        <ButtonGroup size="sm">
                            <Button>Left</Button>
                            <Button>Middle</Button>
                            <Button>Right</Button>
                        </ButtonGroup>
                    </div>
                    
                    {/* Rounded Button */}
                    <div className="card">
                        <div className="card-header">
                        <h4 className="card-title">Rounded Button</h4>
                        <p className="card-text">
                            use <code>.btn-rounded</code> in class <code>.btn</code>
                            {" "}
                            class to get Rounded button
                        </p>
                        </div>
                        <div className="card-body">
                        <Button variant="primary" className="rounded">Primary</Button>{' '}
                        <Button variant="secondary">Secondary</Button>{' '}
                        <Button variant="success">Success</Button>{' '}
                        <Button variant="danger">Danger </Button>{' '}
                        <Button variant="warning">Warning</Button>{' '}
                        <Button variant="info">Info</Button>{' '}
                        <Button variant="light">Light</Button>{' '}
                        <Button variant="dark">Dark </Button>
                        <hr />
                        <p>
                            use <code>.btn-rounded</code> 
                            in class{" "}
                            <code>.btn-outline-*</code> class to get Rounded Outline
                            button
                        </p>
                        <Button variant="outline-primary">Primary</Button>{' '}
                        <Button variant="outline-secondary">Secondary</Button>{' '}
                        <Button variant="outline-success">Success</Button>{' '}
                        <Button variant="outline-warning">Warning</Button>{' '}
                        <Button variant="outline-danger">Danger</Button>{' '}
                        <Button variant="outline-info">Info</Button>{' '}
                        <Button variant="outline-light">Light</Button>{' '}
                        <Button variant="outline-dark">Dark</Button>
                        </div>
                    </div>
                    {/* /Rounded Button */}
                    {/* Outline Buttons */}
                    <div className="card">
                        <div className="card-header">
                        <h4 className="card-title">Outline Buttons</h4>
                        <p className="card-text">
                            Use <code>.btn-outline-*</code> class for outline
                            buttons.
                        </p>
                        </div>
                        <div className="card-body">
                        <div className="row row-sm align-items-center">
                            <div className="col-12 col-xl mb-3 mb-xl-0">Normal</div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                            <button
                                type="button"
                                className="btn btn-block btn-outline-primary"
                            >
                                Primary
                            </button>
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                            <button
                                type="button"
                                className="btn btn-block btn-outline-secondary"
                            >
                                Secondary
                            </button>
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                            <button
                                type="button"
                                className="btn btn-block btn-outline-success"
                            >
                                Success
                            </button>
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                            <button
                                type="button"
                                className="btn btn-block btn-outline-warning"
                            >
                                Warning
                            </button>
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                            <button
                                type="button"
                                className="btn btn-block btn-outline-danger"
                            >
                                Danger
                            </button>
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                            <button
                                type="button"
                                className="btn btn-block btn-outline-info"
                            >
                                Info
                            </button>
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                            <button
                                type="button"
                                className="btn btn-block btn-outline-light"
                            >
                                Light
                            </button>
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                            <button
                                type="button"
                                className="btn btn-block btn-outline-dark"
                            >
                                Dark
                            </button>
                            </div>
                        </div>
                        <div className="row row-sm align-items-center mt-3">
                            <div className="col-12 col-xl mb-3 mb-xl-0">Active</div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                            <Button variant="outline-primary" active>Primary  </Button>{' '}
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                            <Button variant="outline-secondary" active> Secondary </Button>{' '}
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                             <Button variant="outline-success" active> Success </Button>{' '}
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                <Button variant="outline-warning" active> Warning </Button>{' '}
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                <Button variant="outline-danger" active> Danger </Button>{' '}
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                <Button variant="outline-info" active> Info </Button>{' '}
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                <Button variant="outline-light" active> Light </Button>{' '}
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                <Button variant="outline-dark" active> Dark </Button>{' '}
                            </div>
                        </div>
                        <div className="row row-sm align-items-center mt-3">
                            <div className="col-12 col-xl mb-3 mb-xl-0"> Disabled </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                <Button variant="outline-primary" disabled>Primary  </Button>{' '}
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                <Button variant="outline-secondary" disabled> Secondary </Button>{' '}
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                <Button variant="outline-success" disabled> Success </Button>{' '}
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                <Button variant="outline-warning" disabled> Warning </Button>{' '}
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                <Button variant="outline-danger" disabled> Danger </Button>{' '}
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                <Button variant="outline-info" disabled> Info </Button>{' '}
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                <Button variant="outline-light" disabled> Light </Button>{' '}
                            </div>
                            <div className="col-6 col-sm-4 col-md-2 col-xl mb-3 mb-xl-0">
                                <Button variant="outline-dark" disabled> Dark </Button>{' '}
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* /Outline Buttons */}
                    {/* Progress Button */}
                    <div className="card mb-4">
                        <div className="card-header">
                        <h4 className="card-title">Progress Button</h4>
                        </div>
                        <div className="card-body">
                        <Button variant="primary">
                            <span
                            className="spinner-border spinner-border-sm mr-2"
                            role="status"
                            />
                            Primary
                        </Button>
                        <Button variant="secondary">
                            <span
                            className="spinner-border spinner-border-sm mr-2"
                            role="status"
                            />
                            Secondary
                        </Button>
                        <Button variant="success">
                            <span
                            className="spinner-border spinner-border-sm mr-2"
                            role="status"
                            />
                            Success
                        </Button>
                        <Button variant="danger">
                            <span
                            className="spinner-border spinner-border-sm mr-2"
                            role="status"
                            />
                            Danger
                        </Button>
                        <Button variant="warning">
                            <span
                            className="spinner-border spinner-border-sm mr-2"
                            role="status"
                            />
                            Warning
                        </Button>
                        <Button variant="info">
                            <span
                            className="spinner-border spinner-border-sm mr-2"
                            role="status"
                            />
                            Info
                        </Button>
                        <Button variant="dark">
                            <span
                            className="spinner-border spinner-border-sm mr-2"
                            role="status"
                            />
                            Dark
                        </Button>
                        </div>
                    </div>
                    </div>
                    {/* /Progress Button */}
                    </section>
                    {/* Buttons */}
                    {/* Cards */}
                    <section className="comp-section comp-cards">
                    <div className="section-header">
                        <h3 className="section-title">Cards</h3>
                        <div className="line" />
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 d-flex">
                        <div className="card flex-fill">
                            <img alt="Card" src={Img01} className="card-img-top" />
                            <div className="card-header">
                            <h5 className="card-title mb-0">
                                Card with and links
                            </h5>
                            </div>
                            <div className="card-body">
                            <p className="card-text">
                                Some quick example text to build on the card title
                                and make up the bulk of the card's content.
                            </p>
                            <a className="card-link" href="#">
                                Card link
                            </a>
                            <a className="card-link" href="#">
                                Another link
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 d-flex">
                        <div className="card flex-fill">
                            <img alt="Card" src={Img01} className="card-img-top" />
                            <div className="card-header">
                            <h5 className="card-title mb-0">
                                Card with and button
                            </h5>
                            </div>
                            <div className="card-body">
                            <p className="card-text">
                                Some quick example text to build on the card title
                                and make up the bulk of the card's content.
                            </p>
                            <a className="btn btn-primary" href="#">
                                Go somewhere
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 d-flex">
                        <div className="card flex-fill">
                            <img alt="Card" src={Img01} className="card-img-top" />
                            <div className="card-header">
                            <h5 className="card-title mb-0">
                                Card with and list
                            </h5>
                            </div>
                            <ul className="list-group list-group-flush">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">
                                Dapibus ac facilisis in
                            </li>
                            <li className="list-group-item">
                                Vestibulum at eros
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                            <h5 className="card-title mb-0">Card with links</h5>
                            </div>
                            <div className="card-body">
                            <p className="card-text">
                                Some quick example text to build on the card title
                                and make up the bulk of the card's content.
                            </p>
                            <a className="card-link" href="#">
                                Card link
                            </a>
                            <a className="card-link" href="#">
                                Another link
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                            <h5 className="card-title mb-0">Card with button</h5>
                            </div>
                            <div className="card-body">
                            <p className="card-text">
                                Some quick example text to build on the card title
                                and make up the bulk of the card's content.
                            </p>
                            <a className="btn btn-primary" href="#">
                                Go somewhere
                            </a>
                            </div>
                        </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                            <h5 className="card-title mb-0">Card with list</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                            <li className="list-group-item">Cras justo odio</li>
                            <li className="list-group-item">
                                Dapibus ac facilisis in
                            </li>
                            <li className="list-group-item">
                                Vestibulum at eros
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">This is my header</div>
                            <div className="card-body">
                            <h5 className="card-title">
                                Special title treatment
                            </h5>
                            <p className="card-text">
                                Some quick example text to build on the card title
                                and make up the bulk of the card's content.
                            </p>
                            </div>
                            <div className="card-footer text-muted">
                            This is my footer
                            </div>
                        </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                            <ul
                                role="tablist"
                                className="nav nav-tabs card-header-tabs float-right"
                            >
                                <li className="nav-item">
                                <a
                                    href="#tab-1"
                                    data-toggle="tab"
                                    className="nav-link active"
                                >
                                    Active
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    href="#tab-2"
                                    data-toggle="tab"
                                    className="nav-link"
                                >
                                    Link
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    href="#tab-3"
                                    data-toggle="tab"
                                    className="nav-link disabled"
                                >
                                    Disabled
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="card-body">
                            <div className="tab-content pt-0">
                                <div
                                role="tabpanel"
                                id="tab-1"
                                className="tab-pane fade show active"
                                >
                                <h5 className="card-title">Card with tabs</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <a className="btn btn-primary" href="#">
                                    Go somewhere
                                </a>
                                </div>
                                <div
                                role="tabpanel"
                                id="tab-2"
                                className="tab-pane fade text-center"
                                >
                                <h5 className="card-title">Card with tabs</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <a className="btn btn-primary" href="#">
                                    Go somewhere
                                </a>
                                </div>
                                <div
                                role="tabpanel"
                                id="tab-3"
                                className="tab-pane fade"
                                >
                                <h5 className="card-title">Card with tabs</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <a className="btn btn-primary" href="#">
                                    Go somewhere
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                            <ul
                                role="tablist"
                                className="nav nav-pills card-header-pills float-right"
                            >
                                <li className="nav-item">
                                <a
                                    href="#tab-4"
                                    data-toggle="tab"
                                    className="nav-link active"
                                >
                                    Active
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    href="#tab-5"
                                    data-toggle="tab"
                                    className="nav-link"
                                >
                                    Link
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    href="#tab-6"
                                    data-toggle="tab"
                                    className="nav-link disabled"
                                >
                                    Disabled
                                </a>
                                </li>
                            </ul>
                            </div>
                            <div className="card-body">
                            <div className="tab-content pt-0">
                                <div
                                role="tabpanel"
                                id="tab-4"
                                className="tab-pane fade show active"
                                >
                                <h5 className="card-title">Card with pills</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <a className="btn btn-primary" href="#">
                                    Go somewhere
                                </a>
                                </div>
                                <div
                                role="tabpanel"
                                id="tab-5"
                                className="tab-pane fade text-center"
                                >
                                <h5 className="card-title">Card with pills</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <a className="btn btn-primary" href="#">
                                    Go somewhere
                                </a>
                                </div>
                                <div
                                role="tabpanel"
                                id="tab-6"
                                className="tab-pane fade"
                                >
                                <h5 className="card-title">Card with pills</h5>
                                <p className="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </p>
                                <a className="btn btn-primary" href="#">
                                    Go somewhere
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    {/* /Cards */}
                    {/* Dropdowns */}
                    <section className="comp-section comp-dropdowns">
                    <div className="section-header">
                        <h3 className="section-title">Dropdowns</h3>
                        <div className="line" />
                    </div>
                    <div className="card">
                        <div className="card-body">
                        <h4 className="card-title">Dropdowns within Text</h4>
                        <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                Dropdown
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <hr />
                        <h4 className="card-title">Dropdowns within Buttons</h4>
                        {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
                            (variant) => (
                            <DropdownButton
                                as={ButtonGroup}
                                key={variant}
                                id={`dropdown-variants-${variant}`}
                                variant={variant.toLowerCase()}
                                title={variant}
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3" active>
                                Active Item
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </DropdownButton>
                            ),
                        )}
                        <hr />
                        <h4 className="card-title">Split button dropdowns</h4>
                        {['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Danger'].map(
                            (variant) => (
                            <SplitButton
                                key={variant}
                                id={`dropdown-split-variants-${variant}`}
                                variant={variant.toLowerCase()}
                                title={variant}
                            >
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3" active>
                                Active Item
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                            </SplitButton>
                            ),
                        )}
                        
                        </div>
                    </div>
                    </section>
                    {/* /Dropdowns */}
                    {/* Pagination */}
                    <section className="comp-section">
                    <div className="section-header">
                        <h3 className="section-title">Pagination</h3>
                        <div className="line" />
                    </div>
                    
                    <div className="card">
                        <div className="card-body">
                        <div>
                            <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex={-1}>
                                Previous
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                1
                                </a>
                            </li>
                            <li className="page-item" active>
                                <a className="page-link" href="#">
                                2 <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                Next
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="pagination">
                            <li className="page-item">
                                <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                                >
                                <span aria-hidden="true">«</span>
                                <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                1
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                2
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">»</span>
                                <span className="sr-only">Next</span>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="pagination pagination-lg">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex={-1}>
                                Previous
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                1
                                </a>
                            </li>
                            <li className="page-item" active>
                                <a className="page-link" href="#">
                                2 <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                Next
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="pagination pagination-sm mb-0">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabIndex={-1}>
                                Previous
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                1
                                </a>
                            </li>
                            <li className="page-item" active>
                                <a className="page-link" href="#">
                                2 <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">
                                Next
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </section>
                    {/* /Pagination */}
                    {/* Progress */}
                    <section className="comp-section">
                    <div className="section-header">
                        <h3 className="section-title">Progress</h3>
                        <div className="line" />
                    </div>
                    <div className="progress-example card">
                        <div className="card-header">
                        <h4 className="card-title">Large Progress Bars</h4>
                        </div>
                        <div className="card-body pb-0">
                        <div className="row">
                            <div className="col-md-6">
                            <div>
                                <div className="progress progress-lg">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "10%" }}
                                    aria-valuenow={75}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                                <div className="progress progress-lg">
                                <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "25%" }}
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                                <div className="progress progress-lg">
                                <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuenow={50}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                                <div className="progress progress-lg">
                                <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{ width: "75%" }}
                                    aria-valuenow={75}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                                <div className="progress progress-lg">
                                <div
                                    className="progress-bar bg-danger"
                                    role="progressbar"
                                    style={{ width: "100%" }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="progress progress-lg">
                                <div
                                className="progress-bar progress-bar-striped"
                                role="progressbar"
                                style={{ width: "10%" }}
                                aria-valuenow={10}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            <div className="progress progress-lg">
                                <div
                                className="progress-bar progress-bar-striped bg-success"
                                role="progressbar"
                                style={{ width: "25%" }}
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            <div className="progress progress-lg">
                                <div
                                className="progress-bar progress-bar-striped bg-info"
                                role="progressbar"
                                style={{ width: "50%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            <div className="progress progress-lg">
                                <div
                                className="progress-bar progress-bar-striped bg-warning"
                                role="progressbar"
                                style={{ width: "75%" }}
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            <div className="progress progress-lg">
                                <div
                                className="progress-bar progress-bar-striped bg-danger"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow={100}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="progress-example card">
                        <div className="card-header">
                        <h4 className="card-title">Default Progress Bars</h4>
                        </div>
                        <div className="card-body pb-0">
                        <div className="row">
                            <div className="col-md-6">
                            <ProgressBar now={75} variant="primary" />
                            <ProgressBar now={25} variant="success" />
                            <ProgressBar now={50} variant="info" />
                            <ProgressBar now={75} variant="primary" />
                            <ProgressBar now={100} variant="danger" />
                            </div>

                            <div className="col-md-6">
                            <ProgressBar striped variant="primary" now={75} />
                            <ProgressBar striped variant="success" now={25} />
                            <ProgressBar striped variant="info" now={50} />
                            <ProgressBar striped variant="primary" now={75} />
                            <ProgressBar striped variant="danger" now={100} />
                           
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="progress-example card">
                        <div className="card-header">
                        <h4 className="card-title">Medium Progress Bars</h4>
                        </div>
                        <div className="card-body pb-0">
                        <div className="row">
                            <div className="col-md-6">
                            <div>
                                <div className="progress progress-md">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "10%" }}
                                    aria-valuenow={75}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                                <div className="progress progress-md">
                                <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "25%" }}
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                                <div className="progress progress-md">
                                <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuenow={50}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                                <div className="progress progress-md">
                                <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{ width: "75%" }}
                                    aria-valuenow={75}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                                <div className="progress progress-md">
                                <div
                                    className="progress-bar bg-danger"
                                    role="progressbar"
                                    style={{ width: "100%" }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="progress progress-md">
                                <div
                                className="progress-bar progress-bar-striped"
                                role="progressbar"
                                style={{ width: "10%" }}
                                aria-valuenow={10}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            <div className="progress progress-md">
                                <div
                                className="progress-bar progress-bar-striped bg-success"
                                role="progressbar"
                                style={{ width: "25%" }}
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            <div className="progress progress-md">
                                <div
                                className="progress-bar progress-bar-striped bg-info"
                                role="progressbar"
                                style={{ width: "50%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            <div className="progress progress-md">
                                <div
                                className="progress-bar progress-bar-striped bg-warning"
                                role="progressbar"
                                style={{ width: "75%" }}
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            <div className="progress progress-md">
                                <div
                                className="progress-bar progress-bar-striped bg-danger"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow={100}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="progress-example card">
                        <div className="card-header">
                        <h4 className="card-title">Small Progress Bars</h4>
                        </div>
                        <div className="card-body pb-0">
                        <div className="row">
                            <div className="col-md-6">
                            <div>
                                <div className="progress progress-sm">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "10%" }}
                                    aria-valuenow={75}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                                <div className="progress progress-sm">
                                <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "25%" }}
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                                <div className="progress progress-sm">
                                <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuenow={50}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                                <div className="progress progress-sm">
                                <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{ width: "75%" }}
                                    aria-valuenow={75}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                                <div className="progress progress-sm">
                                <div
                                    className="progress-bar bg-danger"
                                    role="progressbar"
                                    style={{ width: "100%" }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="progress progress-sm">
                                <div
                                className="progress-bar progress-bar-striped"
                                role="progressbar"
                                style={{ width: "10%" }}
                                aria-valuenow={10}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            <div className="progress progress-sm">
                                <div
                                className="progress-bar progress-bar-striped bg-success"
                                role="progressbar"
                                style={{ width: "25%" }}
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            <div className="progress progress-sm">
                                <div
                                className="progress-bar progress-bar-striped bg-info"
                                role="progressbar"
                                style={{ width: "50%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            <div className="progress progress-sm">
                                <div
                                className="progress-bar progress-bar-striped bg-warning"
                                role="progressbar"
                                style={{ width: "75%" }}
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            <div className="progress progress-sm">
                                <div
                                className="progress-bar progress-bar-striped bg-danger"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow={100}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="progress-example card">
                        <div className="card-header">
                        <h4 className="card-title">Extra Small Progress Bars</h4>
                        </div>
                        <div className="card-body pb-0">
                        <div className="row">
                            <div className="col-md-6">
                            <div>
                                <div className="progress progress-xs">
                                <div
                                    className="progress-bar w-75"
                                    role="progressbar"
                                    style={{ width: "10%" }}
                                    aria-valuenow={75}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                                <div className="progress progress-xs">
                                <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "25%" }}
                                    aria-valuenow={25}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                                <div className="progress progress-xs">
                                <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuenow={50}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                                <div className="progress progress-xs">
                                <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    style={{ width: "75%" }}
                                    aria-valuenow={75}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                                <div className="progress progress-xs">
                                <div
                                    className="progress-bar bg-danger"
                                    role="progressbar"
                                    style={{ width: "100%" }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                                </div>
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div className="progress progress-xs">
                                <div
                                className="progress-bar progress-bar-striped"
                                role="progressbar"
                                style={{ width: "10%" }}
                                aria-valuenow={10}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            <div className="progress progress-xs">
                                <div
                                className="progress-bar progress-bar-striped bg-success"
                                role="progressbar"
                                style={{ width: "25%" }}
                                aria-valuenow={25}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            <div className="progress progress-xs">
                                <div
                                className="progress-bar progress-bar-striped bg-info"
                                role="progressbar"
                                style={{ width: "50%" }}
                                aria-valuenow={50}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            <div className="progress progress-xs">
                                <div
                                className="progress-bar progress-bar-striped bg-warning"
                                role="progressbar"
                                style={{ width: "75%" }}
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            <div className="progress progress-xs">
                                <div
                                className="progress-bar progress-bar-striped bg-danger"
                                role="progressbar"
                                style={{ width: "100%" }}
                                aria-valuenow={100}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    {/* /Progress */}
                    {/* Tabs */}
                    <section className="comp-section">
                    <div className="section-header">
                        <h3 className="section-title">Tabs</h3>
                        <div className="line" />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                            <h4 className="card-title">Basic tabs</h4>
                            </div>
                            <div className="card-body">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="#basictab1"
                                    data-toggle="tab"
                                >
                                    Home
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#basictab2"
                                    data-toggle="tab"
                                >
                                    Profile
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#basictab3"
                                    data-toggle="tab"
                                >
                                    Messages
                                </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div
                                className="tab-pane show active"
                                id="basictab1"
                                >
                                Tab content 1
                                </div>
                                <div className="tab-pane" id="basictab2">
                                Tab content 2
                                </div>
                                <div className="tab-pane" id="basictab3">
                                Tab content 3
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                            <h4 className="card-title">Basic justified tabs</h4>
                            </div>
                            <div className="card-body">
                            <ul className="nav nav-tabs nav-justified">
                                <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="#basic-justified-tab1"
                                    data-toggle="tab"
                                >
                                    Home
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#basic-justified-tab2"
                                    data-toggle="tab"
                                >
                                    Profile
                                </a>
                                </li>
                                <li className="nav-item dropdown">
                                <a
                                    href="#"
                                    className="dropdown-toggle nav-link"
                                    data-toggle="dropdown"
                                >
                                    Dropdown
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a
                                    className="dropdown-item"
                                    href="#basic-justified-tab3"
                                    data-toggle="tab"
                                    >
                                    Dropdown 1
                                    </a>
                                    <a
                                    className="dropdown-item"
                                    href="#basic-justified-tab4"
                                    data-toggle="tab"
                                    >
                                    Dropdown 2
                                    </a>
                                </div>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div
                                className="tab-pane show active"
                                id="basic-justified-tab1"
                                >
                                Tab content 1
                                </div>
                                <div className="tab-pane" id="basic-justified-tab2">
                                Tab content 2
                                </div>
                                <div className="tab-pane" id="basic-justified-tab3">
                                Tab content 3
                                </div>
                                <div className="tab-pane" id="basic-justified-tab4">
                                Tab content 4
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                            <h4 className="card-title">Top line tabs</h4>
                            </div>
                            <div className="card-body">
                            <ul className="nav nav-tabs nav-tabs-top">
                                <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="#top-tab1"
                                    data-toggle="tab"
                                >
                                    Home
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#top-tab2"
                                    data-toggle="tab"
                                >
                                    Profile
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#top-tab3"
                                    data-toggle="tab"
                                >
                                    Messages
                                </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane show active" id="top-tab1">
                                Tab content 1
                                </div>
                                <div className="tab-pane" id="top-tab2">
                                Tab content 2
                                </div>
                                <div className="tab-pane" id="top-tab3">
                                Tab content 3
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                            <h4 className="card-title">Top line justified</h4>
                            </div>
                            <div className="card-body">
                            <ul className="nav nav-tabs nav-tabs-top nav-justified">
                                <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="#top-justified-tab1"
                                    data-toggle="tab"
                                >
                                    Home
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#top-justified-tab2"
                                    data-toggle="tab"
                                >
                                    Profile
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#top-justified-tab3"
                                    data-toggle="tab"
                                >
                                    Messages
                                </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div
                                className="tab-pane show active"
                                id="top-justified-tab1"
                                >
                                Tab content 1
                                </div>
                                <div className="tab-pane" id="top-justified-tab2">
                                Tab content 2
                                </div>
                                <div className="tab-pane" id="top-justified-tab3">
                                Tab content 3
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                            <h4 className="card-title">Bottom line tabs</h4>
                            </div>
                            <div className="card-body">
                            <ul className="nav nav-tabs nav-tabs-bottom">
                                <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="#bottom-tab1"
                                    data-toggle="tab"
                                >
                                    Home
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#bottom-tab2"
                                    data-toggle="tab"
                                >
                                    Profile
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#bottom-tab3"
                                    data-toggle="tab"
                                >
                                    Messages
                                </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div
                                className="tab-pane show active"
                                id="bottom-tab1"
                                >
                                Tab content 1
                                </div>
                                <div className="tab-pane" id="bottom-tab2">
                                Tab content 2
                                </div>
                                <div className="tab-pane" id="bottom-tab3">
                                Tab content 3
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                            <h4 className="card-title">Bottom line justified</h4>
                            </div>
                            <div className="card-body">
                            <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                                <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="#bottom-justified-tab1"
                                    data-toggle="tab"
                                >
                                    Home
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#bottom-justified-tab2"
                                    data-toggle="tab"
                                >
                                    Profile
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#bottom-justified-tab3"
                                    data-toggle="tab"
                                >
                                    Messages
                                </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div
                                className="tab-pane show active"
                                id="bottom-justified-tab1"
                                >
                                Tab content 1
                                </div>
                                <div
                                className="tab-pane"
                                id="bottom-justified-tab2"
                                >
                                Tab content 2
                                </div>
                                <div
                                className="tab-pane"
                                id="bottom-justified-tab3"
                                >
                                Tab content 3
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                            <h4 className="card-title">Solid tabs</h4>
                            </div>
                            <div className="card-body">
                            <ul className="nav nav-tabs nav-tabs-solid">
                                <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="#solid-tab1"
                                    data-toggle="tab"
                                >
                                    Home
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#solid-tab2"
                                    data-toggle="tab"
                                >
                                    Profile
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#solid-tab3"
                                    data-toggle="tab"
                                >
                                    Messages
                                </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div
                                className="tab-pane show active"
                                id="solid-tab1"
                                >
                                Tab content 1
                                </div>
                                <div className="tab-pane" id="solid-tab2">
                                Tab content 2
                                </div>
                                <div className="tab-pane" id="solid-tab3">
                                Tab content 3
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                            <h4 className="card-title">Solid justified</h4>
                            </div>
                            <div className="card-body">
                            <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                                <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="#solid-justified-tab1"
                                    data-toggle="tab"
                                >
                                    Home
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#solid-justified-tab2"
                                    data-toggle="tab"
                                >
                                    Profile
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#solid-justified-tab3"
                                    data-toggle="tab"
                                >
                                    Messages
                                </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div
                                className="tab-pane show active"
                                id="solid-justified-tab1"
                                >
                                Tab content 1
                                </div>
                                <div className="tab-pane" id="solid-justified-tab2">
                                Tab content 2
                                </div>
                                <div className="tab-pane" id="solid-justified-tab3">
                                Tab content 3
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                            <h4 className="card-title">Solid Rounded</h4>
                            </div>
                            <div className="card-body">
                            <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded">
                                <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="#solid-rounded-tab1"
                                    data-toggle="tab"
                                >
                                    Home
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#solid-rounded-tab2"
                                    data-toggle="tab"
                                >
                                    Profile
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#solid-rounded-tab3"
                                    data-toggle="tab"
                                >
                                    Messages
                                </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div
                                className="tab-pane show active"
                                id="solid-rounded-tab1"
                                >
                                Tab content 1
                                </div>
                                <div className="tab-pane" id="solid-rounded-tab2">
                                Tab content 2
                                </div>
                                <div className="tab-pane" id="solid-rounded-tab3">
                                Tab content 3
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                            <h4 className="card-title">Rounded justified</h4>
                            </div>
                            <div className="card-body">
                            <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified">
                                <li className="nav-item">
                                <a
                                    className="nav-link active"
                                    href="#solid-rounded-justified-tab1"
                                    data-toggle="tab"
                                >
                                    Home
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#solid-rounded-justified-tab2"
                                    data-toggle="tab"
                                >
                                    Profile
                                </a>
                                </li>
                                <li className="nav-item">
                                <a
                                    className="nav-link"
                                    href="#solid-rounded-justified-tab3"
                                    data-toggle="tab"
                                >
                                    Messages
                                </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div
                                className="tab-pane show active"
                                id="solid-rounded-justified-tab1"
                                >
                                Tab content 1
                                </div>
                                <div
                                className="tab-pane"
                                id="solid-rounded-justified-tab2"
                                >
                                Tab content 2
                                </div>
                                <div
                                className="tab-pane"
                                id="solid-rounded-justified-tab3"
                                >
                                Tab content 3
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    {/* /Tabs */}
                    {/* Typography */}
                    <section className="comp-section">
                    <div className="section-header">
                        <h3 className="section-title">Typography</h3>
                        <div className="line" />
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                            <h4 className="card-title">Headings</h4>
                            </div>
                            <div className="card-body">
                            <h1>h1. Bootstrap heading</h1>
                            <h2>h2. Bootstrap heading</h2>
                            <h3>h3. Bootstrap heading</h3>
                            <h4>h4. Bootstrap heading</h4>
                            <h5>h5. Bootstrap heading</h5>
                            <h6>h6. Bootstrap heading</h6>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                            <h4 className="card-title">Blockquotes</h4>
                            </div>
                            <div className="card-body">
                            <blockquote>
                                <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Integer posuere erat a ante.
                                </p>
                            </blockquote>
                            <blockquote className="blockquote mb-0">
                                <p className="mb-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Integer posuere erat a ante.
                                </p>
                            </blockquote>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                            <h4 className="card-title">Text element</h4>
                            </div>
                            <div className="card-body">
                            {/* <p>
                                You can use the mark tag to <mark>highlight</mark>{" "}
                                text.
                            </p> */}
                            <p>
                                <del>
                                This line of text is meant to be treated as
                                deleted text.
                                </del>
                            </p>
                            <p>
                                <s>
                                This line of text is meant to be treated as no
                                longer accurate.
                                </s>
                            </p>
                            <p>
                                <ins>
                                This line of text is meant to be treated as an
                                addition to the document.
                                </ins>
                            </p>
                            <p>
                                <u>This line of text will render as underlined</u>
                            </p>
                            <p>
                                <small>
                                This line of text is meant to be treated as fine
                                print.
                                </small>
                            </p>
                            <p>
                                <strong>This line rendered as bold text.</strong>
                            </p>
                            <p>
                                <em>This line rendered as italicized text.</em>
                            </p>
                            <p className="text-monospace mb-0">
                                This is in monospace
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                            <h4 className="card-title">Coloured Link</h4>
                            </div>
                            <div className="card-body">
                            <p className="text-primary">.text-primary</p>
                            <p className="text-secondary">.text-secondary</p>
                            <p className="text-success">.text-success</p>
                            <p className="text-danger">.text-danger</p>
                            <p className="text-warning">.text-warning</p>
                            <p className="text-info">.text-info</p>
                            <p className="text-light bg-dark">.text-light</p>
                            <p className="text-dark">.text-dark</p>
                            <p className="text-muted">.text-muted</p>
                            <p className="text-white bg-dark mb-0">.text-white</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                            <h4 className="card-title">Coloured text</h4>
                            </div>
                            <div className="card-body">
                            <p>
                                <a href="#" className="text-primary">
                                Primary link
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-secondary">
                                Secondary link
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-success">
                                Success link
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-danger">
                                Danger link
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-warning">
                                Warning link
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-info">
                                Info link
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-light bg-dark">
                                Light link
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-dark">
                                Dark link
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-muted">
                                Muted link
                                </a>
                            </p>
                            <p>
                                <a href="#" className="text-white bg-dark mb-0">
                                White link
                                </a>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                            <h4 className="card-title">Bullet Lists</h4>
                            </div>
                            <div className="card-body">
                            <ul className="mb-0">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Integer molestie lorem at massa</li>
                                <li>Facilisis in pretium nisl aliquet</li>
                                <li>
                                Nulla volutpat aliquam velit
                                <ul>
                                    <li>Phasellus iaculis neque</li>
                                    <li>Purus sodales ultricies</li>
                                    <li>Vestibulum laoreet porttitor sem</li>
                                    <li>Ac tristique libero volutpat at</li>
                                </ul>
                                </li>
                                <li>Faucibus porta lacus fringilla vel</li>
                                <li>Aenean sit amet erat nunc</li>
                                <li>Eget porttitor lorem</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                            <h4 className="card-title">Bullet Lists</h4>
                            </div>
                            <div className="card-body">
                            <ol className="mb-0">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Integer molestie lorem at massa</li>
                                <li>Facilisis in pretium nisl aliquet</li>
                                <li>
                                Nulla volutpat aliquam velit
                                <ul>
                                    <li>Phasellus iaculis neque</li>
                                    <li>Purus sodales ultricies</li>
                                    <li>Vestibulum laoreet porttitor sem</li>
                                    <li>Ac tristique libero volutpat at</li>
                                </ul>
                                </li>
                                <li>Faucibus porta lacus fringilla vel</li>
                                <li>Aenean sit amet erat nunc</li>
                                <li>Eget porttitor lorem</li>
                            </ol>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4 d-flex">
                        <div className="card flex-fill">
                            <div className="card-header">
                            <h4 className="card-title">Unstyled Lists</h4>
                            </div>
                            <div className="card-body">
                            <ul className="list-unstyled mb-0">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Integer molestie lorem at massa</li>
                                <li>Facilisis in pretium nisl aliquet</li>
                                <li>
                                Nulla volutpat aliquam velit
                                <ul>
                                    <li>Phasellus iaculis neque</li>
                                    <li>Purus sodales ultricies</li>
                                    <li>Vestibulum laoreet porttitor sem</li>
                                    <li>Ac tristique libero volutpat at</li>
                                </ul>
                                </li>
                                <li>Faucibus porta lacus fringilla vel</li>
                                <li>Aenean sit amet erat nunc</li>
                                <li>Eget porttitor lorem</li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    {/* /Typography */}
                </div>
                </div>
            </div>
            {/* /Page Wrapper */}
        </>
    );
  }
}

export default ComponentSection;
