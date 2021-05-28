import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {baseUrl} from './baseUrl';
class Dashboard extends Component {
    constructor(props){
      super(props);
      this.state={
        Upcoming :0,
        Completed :0,
        revenue:0,
        rating : 0,
        consultation:[]
      }

    }
  //   componentDidMount(){
  //   console.log('componentDidMount');
  //     const requestOptions = {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json',
  //       "Authorization":"Bearer "+localStorage.getItem("jwt")} 
	// };
	// fetch(`${baseUrl}getDashboardDetails`,requestOptions)
	// .then(res=>res.json())
	// .then(data=>{
	// if(data.error){			
	// 	console.log(data.error);
	// }	
	// else{
  //   console.log(data);
  //   // const rev=data.consultation
	// 	this.setState({
	// 	  Upcoming : data.upcoming,
  //     Completed: data.completed,
  //     rating : data.rating,
  //     consultation:data.consultation
	// 		})
	// 	}
	// })

  //   }
    render() { 
       let revenue=0;
      this.state.consultation.map((fee)=>{
        return(
            revenue=revenue+(fee.fee)
        )
      })

        console.log(revenue);
     
        return ( 
            <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">store</i>
                      </div>
                      <p className="card-category">Total Supplies</p>
                      <h3 className="card-title">{this.state.Upcoming}
                        
                      </h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                      <i className="material-icons">date_range</i>
                        <Link to="bookings">Check Here</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-success card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">cloud_done</i>
                      </div>
                      <p className="card-category">Supplied</p>
        <h3 className="card-title">{revenue}{"Rs"}</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">date_range</i> Last 24 Hours
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-danger card-header-icon">
                      <div className="card-icon">
                        <i className="material-icons">content_copy</i>
                      </div>
                      <p className="card-category">Requirement</p>
        <h3 className="card-title">{this.state.Completed}</h3>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                      <i className="material-icons">date_range</i> Last 24 Hours
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="card card-stats">
                    <div className="card-header card-header-warning card-header-icon">
                      <div className="card-icon">
                        <i className="fa fa-star"></i>
                      </div>
                      <p className="card-category">In Process</p>
        <h3 className="card-title">{this.state.rating}{"%"}</h3>
                      
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">update</i> By users
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-4">
                  <div className="card card-chart">
                    <div className="card-header card-header-success">
                      <div className="ct-chart" id="dailySalesChart"></div>
                      
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">Oxygen Supplied</h4>
                      <p className="card-category">
                        <span className="text-success"><i className="fa fa-long-arrow-up"></i> 55% </span> in the last month.</p>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">access_time</i> updated 4 minutes ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-chart">
                    <div className="card-header card-header-warning">
                      <div className="ct-chart" id="websiteViewsChart"></div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">Oxygen Consumed</h4>
                      <p className="card-category">Per State in 24 Hours</p>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">access_time</i> campaign sent 2 days ago
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card card-chart">
                    <div className="card-header card-header-danger">
                      <div className="ct-chart" id="completedTasksChart"></div>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">Deaths Due to Oxygen Shortage</h4>
                      <p className="card-category">In the last month</p>
                    </div>
                    <div className="card-footer">
                      <div className="stats">
                        <i className="material-icons">access_time</i> campaign sent 2 days ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header card-header-tabs card-header-primary">
                      <div className="nav-tabs-navigation">
                        <div className="nav-tabs-wrapper">
                          <span className="nav-tabs-title">Tasks:</span>
                          <ul className="nav nav-tabs" data-tabs="tabs">
                            <li className="nav-item">
                              <a className="nav-link active" href="#profile" data-toggle="tab">
                                <i className="material-icons">bug_report</i> Bugs
                                <div className="ripple-container"></div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#messages" data-toggle="tab">
                                <i className="material-icons">code</i> Website
                                <div className="ripple-container"></div>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#settings" data-toggle="tab">
                                <i className="material-icons">cloud</i> Server
                                <div className="ripple-container"></div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="tab-content">
                        <div className="tab-pane active" id="profile">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" value="" checked="checked" />
                                      <span className="form-check-sign">
                                        <span className="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>Sign contract for "What are conference organizers afraid of?"</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" value="" />
                                      <span className="form-check-sign">
                                        <span className="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" value="" />
                                      <span className="form-check-sign">
                                        <span className="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                                </td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" value="" checked="checked" />
                                      <span className="form-check-sign">
                                        <span className="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>Create 4 Invisible User Experiences you Never Knew About</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="tab-pane" id="messages">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" value="" checked="checked" />
                                      <span className="form-check-sign">
                                        <span className="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                                </td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" value="" />
                                      <span className="form-check-sign">
                                        <span className="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>Sign contract for "What are conference organizers afraid of?"</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="tab-pane" id="settings">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" value="" />
                                      <span className="form-check-sign">
                                        <span className="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" value="" checked="checked" />
                                      <span className="form-check-sign">
                                        <span className="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                                </td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check">
                                    <label className="form-check-label">
                                      <input className="form-check-input" type="checkbox" value="" checked="checked" />
                                      <span className="form-check-sign">
                                        <span className="check"></span>
                                      </span>
                                    </label>
                                  </div>
                                </td>
                                <td>Sign contract for "What are conference organizers afraid of?"</td>
                                <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                                    <i className="material-icons">edit</i>
                                  </button>
                                  <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                                    <i className="material-icons">close</i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="card">
                    <div className="card-header card-header-warning">
                      <h4 className="card-title">Employees Stats</h4>
                      <p className="card-category">New employees on 15th September, 2016</p>
                    </div>
                    <div className="card-body table-responsive">
                      <table className="table table-hover">
                        <thead className="text-warning">
                          <th>ID</th>
                          <th>Name</th>
                          <th>Salary</th>
                          <th>Country</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Dakota Rice</td>
                            <td>$36,738</td>
                            <td>Niger</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Minerva Hooper</td>
                            <td>$23,789</td>
                            <td>Curaçao</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Sage Rodriguez</td>
                            <td>$56,142</td>
                            <td>Netherlands</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Philip Chaney</td>
                            <td>$38,735</td>
                            <td>Korea, South</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
         );
           
    }
}
 
export default Dashboard;
