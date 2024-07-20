import React from 'react';

export default function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-2 mt-4">
              <a href="#" className="list-group-item list-group-item-action py-2 ripple active" aria-current="true">
                <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Engineering</span>
              </a>
              <a href="#" className="list-group-item list-group-item-action py-2 ripple ">
                <i className="fas fa-chart-area fa-fw me-3"></i><span>Pharmacy</span>
              </a>
              <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-lock fa-fw me-3"></i><span>11 th</span>
              </a>
              <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-chart-line fa-fw me-3"></i><span>12 th</span>
              </a>
              <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-chart-pie fa-fw me-3"></i><span>10 th</span>
              </a>
              <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-chart-bar fa-fw me-3"></i><span>fashion</span>
              </a>
              <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-globe fa-fw me-3"></i><span>forensic</span>
              </a>
              <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-building fa-fw me-3"></i><span>BCS</span>
              </a>
              <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-calendar fa-fw me-3"></i><span>BCA</span>
              </a>
              <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-users fa-fw me-3"></i><span>MBA</span>
              </a>
              <a href="#" className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-money-bill fa-fw me-3"></i><span>LLB</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
