import React from 'react';

import FeatImage01 from '../../../images/features-03-image-01.png';
import FeatImage02 from '../../../images/features-03-image-02.png';
import FeatImage03 from '../../../images/features-03-image-03.png';

function FAQ() {
  return (
    <section className="faq" id="faq">
        {/* <!-- FAQ Header --> */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-content">
                <h2 className="header">
                  Frequently <br /> Asked Questions
                </h2>
                <p className="text">
                  Perpetual sincerity out suspected necessary one but provision satisfied. Respect nothing use
                  set
                  waiting pursuit nay you looking.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- FAQ Content --> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="faq-collapse">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button className="btn icon btn-link btn-block text-left" type="button"
                          data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                          aria-controls="collapseOne">
                          On am we offices expense thought ?
                        </button>
                      </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                      data-parent="#accordionExample">
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore agna aliqua. Quis ipsum suspendisse ultrices
                        gravida.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button"
                          data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                          aria-controls="collapseTwo">
                          Entire any had depend and figure winter ?
                        </button>
                      </h2>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                      data-parent="#accordionExample">
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        agna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button"
                          data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                          aria-controls="collapseThree">
                          Companions shy had solicitude own ?
                        </button>
                      </h2>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                      data-parent="#accordionExample">
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore agna aliqua. Quis ipsum suspendisse ultrices
                        gravida.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingfour">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left" type="button"
                          data-toggle="collapse" data-target="#collapsefour" aria-expanded="false"
                          aria-controls="collapsefour">
                          Its estimating are motionless day ?
                        </button>
                      </h2>
                    </div>

                    <div id="collapsefour" className="collapse" aria-labelledby="headingfour"
                      data-parent="#accordionExample">
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        agna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-collapse">
                <div className="accordion" id="accordionExample-2">

                  <div className="card">
                    <div className="card-header" id="headingfive">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button"
                          data-toggle="collapse" data-target="#collapsefive" aria-expanded="true"
                          aria-controls="collapsefive">
                          Exquisite no my attention extensive ?
                        </button>
                      </h2>
                    </div>
                    <div id="collapsefive" className="collapse show" aria-labelledby="headingfive"
                      data-parent="#accordionExample-2">
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        agna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingsix">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button"
                          data-toggle="collapse" data-target="#collapsesix" aria-expanded="false"
                          aria-controls="collapsesix">
                          Sitting so totally forbade hundred to ?
                        </button>
                      </h2>
                    </div>
                    <div id="collapsesix" className="collapse" aria-labelledby="headingsix"
                      data-parent="#accordionExample-2">
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        agna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingseven">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button"
                          data-toggle="collapse" data-target="#collapseven" aria-expanded="false"
                          aria-controls="collapseven">
                          Still court no small think death so wrote ?
                        </button>
                      </h2>
                    </div>
                    <div id="collapseven" className="collapse" aria-labelledby="headingseven"
                      data-parent="#accordionExample-2">
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        agna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingeight">
                      <h2 className="mb-0">
                        <button className="btn btn-link btn-block text-left collapsed" type="button"
                          data-toggle="collapse" data-target="#collapseight" aria-expanded="false"
                          aria-controls="collapseight">
                          Far curiosity incommode allowance ?
                        </button>
                      </h2>
                    </div>
                    <div id="collapseight" className="collapse" aria-labelledby="headingeight"
                      data-parent="#accordionExample-2">
                      <div className="card-body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        agna aliqua. Quis ipsum suspendisse ultrices gravida.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
  );
}

export default FAQ;