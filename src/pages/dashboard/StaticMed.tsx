import "./StaticMed.css";
import "./StaticMed.override.css";

export default function StaticMed() {return(




  <div>
   
    <div>
      <div className="tailwind css-uwf2km css-10v5rb">
        <div className=" bg_basepy-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-3 mt-12">
                <svg className="lucide lucide-activity text-blue-600" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                </svg>
                <h1 className="text-4xl font-bold text-gray-900 ">
                  Статистика вашого медичного університету
                </h1>
              </div>
              <p className="text-gray-600 text-lg">
                Аналітика навчального процесу та показники успішності
              </p>
            </div>
           
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="lucide lucide-users text-purple-600" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <h2 className="text-xl font-semibold text-gray-800">
                    Розподіл студентів по факультетах
                  </h2>
                </div>
                <div className="recharts-responsive-container parent-of-chart" style={{ 'width': '100%', 'height': '300px', 'minWidth': '0px' }}>
                  <div className="recharts-wrapper" style={{ 'position': 'relative', 'cursor': 'default', 'width': '100%', 'height': '100%', 'maxHeight': '300px', 'maxWidth': '580px' }}>
                    <svg className="recharts-surface" cx="50%" cy="50%" height="300" style={{ 'width': '100%', 'height': '100%' }} viewBox="0 0 580 300" width="580">
                      <title />
                      <desc />
                      <defs>
                        <clipPath id="recharts11-clip">
                          <rect height="242" width="570" x="5" y="5" />
                        </clipPath>
                      </defs>
                      <g className="recharts-layer recharts-pie" tabIndex={0}>
                        <g className="recharts-layer recharts-pie-sector" tabIndex={-1}>
                          <path className="recharts-sector" cx="290" cy="126" d="M 370,126
    A 80,80,0,
    0,0,
    223.35742919693965,81.74203171451398
  L 290,126 Z" fill="#3b82f6" name="Медичний факультет" role="img" stroke="#fff" tabIndex={-1} />
                        </g>
                        <g className="recharts-layer recharts-pie-sector" tabIndex={-1}>
                          <path className="recharts-sector" cx="290" cy="126" d="M 223.35742919693965,81.74203171451398
    A 80,80,0,
    0,0,
    212.5977686928352,146.22114212086336
  L 290,126 Z" fill="#10b981" name="Стоматологічний" role="img" stroke="#fff" tabIndex={-1} />
                        </g>
                        <g className="recharts-layer recharts-pie-sector" tabIndex={-1}>
                          <path className="recharts-sector" cx="290" cy="126" d="M 212.5977686928352,146.22114212086336
    A 80,80,0,
    0,0,
    269.19769695232196,203.24806915329705
  L 290,126 Z" fill="#f59e0b" name="Фармацевтичний" role="img" stroke="#fff" tabIndex={-1} />
                        </g>
                        <g className="recharts-layer recharts-pie-sector" tabIndex={-1}>
                          <path className="recharts-sector" cx="290" cy="126" d="M 269.19769695232196,203.24806915329705
    A 80,80,0,
    0,0,
    357.3002826264945,169.2512653964478
  L 290,126 Z" fill="#ef4444" name="Педіатричний" role="img" stroke="#fff" tabIndex={-1} />
                        </g>
                        <g className="recharts-layer recharts-pie-sector" tabIndex={-1}>
                          <path className="recharts-sector" cx="290" cy="126" d="M 357.3002826264945,169.2512653964478
    A 80,80,0,
    0,0,
    370,125.99999999999994
  L 290,126 Z" fill="#8b5cf6" name="Медсестринський" role="img" stroke="#fff" tabIndex={-1} />
                        </g>
                        <g className="recharts-layer recharts-pie-labels">
                          <g className="recharts-layer">
                            <text alignmentBaseline="middle" className="recharts-text recharts-pie-label-text" cx="290" cy="126" fill="#3b82f6" name="Медичний факультет" stroke="none" textAnchor="start" x="318.8935862227022" y="30.2651543313968">
                              <tspan dy="0em" x="318.8935862227022">
                                Медичний факультет: 41%
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-layer">
                            <text alignmentBaseline="middle" className="recharts-text recharts-pie-label-text" cx="290" cy="126" fill="#10b981" name="Стоматологічний" stroke="none" textAnchor="end" x="191.36386965972775" y="109.54054097192665">
                              <tspan dy="0em" x="191.36386965972775">
                                Стоматологічний: 13%
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-layer">
                            <text alignmentBaseline="middle" className="recharts-text recharts-pie-label-text" cx="290" cy="126" fill="#f59e0b" name="Фармацевтичний" stroke="none" textAnchor="end" x="219.02409912013368" y="196.44445680315374">
                              <tspan dy="0em" x="219.02409912013368">
                                Фармацевтичний: 17%
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-layer">
                            <text alignmentBaseline="middle" className="recharts-text recharts-pie-label-text" cx="290" cy="126" fill="#ef4444" name="Педіатричний" stroke="none" textAnchor="start" x="326.00045990696765" y="219.29505285108536">
                              <tspan dy="0em" x="326.00045990696765">
                                Педіатричний: 20%
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-layer">
                            <text alignmentBaseline="middle" className="recharts-text recharts-pie-label-text" cx="290" cy="126" fill="#8b5cf6" name="Медсестринський" stroke="none" textAnchor="start" x="385.9492973614498" y="154.1732556841429">
                              <tspan dy="0em" x="385.9492973614498">
                                Медсестринський: 9%
                              </tspan>
                            </text>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <div className="recharts-legend-wrapper" style={{ 'position': 'absolute', 'width': '570px', 'height': 'auto', 'left': '5px', 'bottom': '5px' }}>
                      <ul className="recharts-default-legend" style={{ 'padding': '0px', 'margin': '0px', 'textAlign': 'center' }}>
                        <li className="recharts-legend-item legend-item-0" style={{ 'display': 'inline-block', 'marginRight': '10px' }}>
                          <svg className="recharts-surface" height="14" style={{ 'display': 'inline-block', 'verticalAlign': 'middle', 'marginRight': '4px' }} viewBox="0 0 32 32" width="14">
                            <title />
                            <desc />
                            <path className="recharts-legend-icon" d="M0,4h32v24h-32z" fill="#3b82f6" stroke="none" />
                          </svg>
                          <span className="recharts-legend-item-text" style={{ 'color': 'rgb(59, 130, 246)' }}>
                            Медичний факультет
                          </span>
                        </li>
                        <li className="recharts-legend-item legend-item-1" style={{ 'display': 'inline-block', 'marginRight': '10px' }}>
                          <svg className="recharts-surface" height="14" style={{ 'display': 'inline-block', 'verticalAlign': 'middle', 'marginRight': '4px' }} viewBox="0 0 32 32" width="14">
                            <title />
                            <desc />
                            <path className="recharts-legend-icon" d="M0,4h32v24h-32z" fill="#10b981" stroke="none" />
                          </svg>
                          <span className="recharts-legend-item-text" style={{ 'color': 'rgb(16, 185, 129)' }}>
                            Стоматологічний
                          </span>
                        </li>
                        <li className="recharts-legend-item legend-item-2" style={{ 'display': 'inline-block', 'marginRight': '10px' }}>
                          <svg className="recharts-surface" height="14" style={{ 'display': 'inline-block', 'verticalAlign': 'middle', 'marginRight': '4px' }} viewBox="0 0 32 32" width="14">
                            <title />
                            <desc />
                            <path className="recharts-legend-icon" d="M0,4h32v24h-32z" fill="#f59e0b" stroke="none" />
                          </svg>
                          <span className="recharts-legend-item-text" style={{ 'color': 'rgb(245, 158, 11)' }}>
                            Фармацевтичний
                          </span>
                        </li>
                        <li className="recharts-legend-item legend-item-3" style={{ 'display': 'inline-block', 'marginRight': '10px' }}>
                          <svg className="recharts-surface" height="14" style={{ 'display': 'inline-block', 'verticalAlign': 'middle', 'marginRight': '4px' }} viewBox="0 0 32 32" width="14">
                            <title />
                            <desc />
                            <path className="recharts-legend-icon" d="M0,4h32v24h-32z" fill="#ef4444" stroke="none" />
                          </svg>
                          <span className="recharts-legend-item-text" style={{ 'color': 'rgb(239, 68, 68)' }}>
                            Педіатричний
                          </span>
                        </li>
                        <li className="recharts-legend-item legend-item-4" style={{ 'display': 'inline-block', 'marginRight': '10px' }}>
                          <svg className="recharts-surface" height="14" style={{ 'display': 'inline-block', 'verticalAlign': 'middle', 'marginRight': '4px' }} viewBox="0 0 32 32" width="14">
                            <title />
                            <desc />
                            <path className="recharts-legend-icon" d="M0,4h32v24h-32z" fill="#8b5cf6" stroke="none" />
                          </svg>
                          <span className="recharts-legend-item-text" style={{ 'color': 'rgb(139, 92, 246)' }}>
                            Медсестринський
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-bottom" style={{ 'visibility': 'hidden', 'pointerEvents': 'none', 'position': 'absolute', 'top': '0px', 'left': '0px' }} tabIndex={-1}>
                      <div className="recharts-default-tooltip" style={{ 'margin': '0px', 'padding': '10px', 'backgroundColor': 'rgb(255, 255, 255)', 'border': '1px solid rgb(204, 204, 204)', 'whiteSpace': 'nowrap' }}>
                        <p className="recharts-tooltip-label" style={{ 'margin': '0px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="lucide lucide-calendar-days text-orange-600" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect height="18" rx="2" width="18" x="3" y="4" />
                    <path d="M3 10h18" />
                    <path d="M8 14h.01" />
                    <path d="M12 14h.01" />
                    <path d="M16 14h.01" />
                    <path d="M8 18h.01" />
                    <path d="M12 18h.01" />
                    <path d="M16 18h.01" />
                  </svg>
                  <h2 className="text-xl font-semibold text-gray-800">
                    Динаміка вступу по роках
                  </h2>
                </div>
                <div className="recharts-responsive-container parent-of-chart" style={{ 'width': '100%', 'height': '300px', 'minWidth': '0px' }}>
                  <div className="recharts-wrapper" style={{ 'position': 'relative', 'cursor': 'default', 'width': '100%', 'height': '100%', 'maxHeight': '300px', 'maxWidth': '580px' }}>
                    <svg className="recharts-surface" height="300" style={{ 'width': '100%', 'height': '100%' }} viewBox="0 0 580 300" width="580">
                      <title />
                      <desc />
                      <defs>
                        <clipPath id="recharts13-clip">
                          <rect height="236" width="510" x="65" y="5" />
                        </clipPath>
                      </defs>
                      <g className="recharts-cartesian-grid">
                        <g className="recharts-cartesian-grid-horizontal">
                          <line fill="none" height="236" stroke="#ccc" strokeDasharray="3 3" width="510" x="65" x1="65" x2="575" y="5" y1="241" y2="241" />
                          <line fill="none" height="236" stroke="#ccc" strokeDasharray="3 3" width="510" x="65" x1="65" x2="575" y="5" y1="182" y2="182" />
                          <line fill="none" height="236" stroke="#ccc" strokeDasharray="3 3" width="510" x="65" x1="65" x2="575" y="5" y1="123" y2="123" />
                          <line fill="none" height="236" stroke="#ccc" strokeDasharray="3 3" width="510" x="65" x1="65" x2="575" y="5" y1="64" y2="64" />
                          <line fill="none" height="236" stroke="#ccc" strokeDasharray="3 3" width="510" x="65" x1="65" x2="575" y="5" y1="5" y2="5" />
                        </g>
                        <g className="recharts-cartesian-grid-vertical">
                          <line fill="none" height="236" stroke="#ccc" strokeDasharray="3 3" width="510" x="65" x1="65" x2="65" y="5" y1="5" y2="241" />
                          <line fill="none" height="236" stroke="#ccc" strokeDasharray="3 3" width="510" x="65" x1="150" x2="150" y="5" y1="5" y2="241" />
                          <line fill="none" height="236" stroke="#ccc" strokeDasharray="3 3" width="510" x="65" x1="235" x2="235" y="5" y1="5" y2="241" />
                          <line fill="none" height="236" stroke="#ccc" strokeDasharray="3 3" width="510" x="65" x1="320" x2="320" y="5" y1="5" y2="241" />
                          <line fill="none" height="236" stroke="#ccc" strokeDasharray="3 3" width="510" x="65" x1="405" x2="405" y="5" y1="5" y2="241" />
                          <line fill="none" height="236" stroke="#ccc" strokeDasharray="3 3" width="510" x="65" x1="490" x2="490" y="5" y1="5" y2="241" />
                          <line fill="none" height="236" stroke="#ccc" strokeDasharray="3 3" width="510" x="65" x1="575" x2="575" y="5" y1="5" y2="241" />
                        </g>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                        <line className="recharts-cartesian-axis-line" fill="none" height="30" orientation="bottom" stroke="#666" width="510" x="65" x1="65" x2="575" y="241" y1="241" y2="241" />
                        <g className="recharts-cartesian-axis-ticks">
                          <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line className="recharts-cartesian-axis-tick-line" fill="none" height="30" orientation="bottom" stroke="#666" width="510" x="65" x1="65" x2="65" y="241" y1="247" y2="241" />
                            <text className="recharts-text recharts-cartesian-axis-tick-value" fill="#666" height="30" orientation="bottom" stroke="none" textAnchor="middle" width="510" x="65" y="249">
                              <tspan dy="0.71em" x="65">
                                2019
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line className="recharts-cartesian-axis-tick-line" fill="none" height="30" orientation="bottom" stroke="#666" width="510" x="65" x1="150" x2="150" y="241" y1="247" y2="241" />
                            <text className="recharts-text recharts-cartesian-axis-tick-value" fill="#666" height="30" orientation="bottom" stroke="none" textAnchor="middle" width="510" x="150" y="249">
                              <tspan dy="0.71em" x="150">
                                2020
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line className="recharts-cartesian-axis-tick-line" fill="none" height="30" orientation="bottom" stroke="#666" width="510" x="65" x1="235" x2="235" y="241" y1="247" y2="241" />
                            <text className="recharts-text recharts-cartesian-axis-tick-value" fill="#666" height="30" orientation="bottom" stroke="none" textAnchor="middle" width="510" x="235" y="249">
                              <tspan dy="0.71em" x="235">
                                2021
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line className="recharts-cartesian-axis-tick-line" fill="none" height="30" orientation="bottom" stroke="#666" width="510" x="65" x1="320" x2="320" y="241" y1="247" y2="241" />
                            <text className="recharts-text recharts-cartesian-axis-tick-value" fill="#666" height="30" orientation="bottom" stroke="none" textAnchor="middle" width="510" x="320" y="249">
                              <tspan dy="0.71em" x="320">
                                2022
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line className="recharts-cartesian-axis-tick-line" fill="none" height="30" orientation="bottom" stroke="#666" width="510" x="65" x1="405" x2="405" y="241" y1="247" y2="241" />
                            <text className="recharts-text recharts-cartesian-axis-tick-value" fill="#666" height="30" orientation="bottom" stroke="none" textAnchor="middle" width="510" x="405" y="249">
                              <tspan dy="0.71em" x="405">
                                2023
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line className="recharts-cartesian-axis-tick-line" fill="none" height="30" orientation="bottom" stroke="#666" width="510" x="65" x1="490" x2="490" y="241" y1="247" y2="241" />
                            <text className="recharts-text recharts-cartesian-axis-tick-value" fill="#666" height="30" orientation="bottom" stroke="none" textAnchor="middle" width="510" x="490" y="249">
                              <tspan dy="0.71em" x="490">
                                2024
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line className="recharts-cartesian-axis-tick-line" fill="none" height="30" orientation="bottom" stroke="#666" width="510" x="65" x1="575" x2="575" y="241" y1="247" y2="241" />
                            <text className="recharts-text recharts-cartesian-axis-tick-value" fill="#666" height="30" orientation="bottom" stroke="none" textAnchor="middle" width="510" x="562.75" y="249">
                              <tspan dy="0.71em" x="562.75">
                                2025
                              </tspan>
                            </text>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                        <line className="recharts-cartesian-axis-line" fill="none" height="236" orientation="left" stroke="#666" width="60" x="5" x1="65" x2="65" y="5" y1="5" y2="241" />
                        <g className="recharts-cartesian-axis-ticks">
                          <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line className="recharts-cartesian-axis-tick-line" fill="none" height="236" orientation="left" stroke="#666" width="60" x="5" x1="59" x2="65" y="5" y1="241" y2="241" />
                            <text className="recharts-text recharts-cartesian-axis-tick-value" fill="#666" height="236" orientation="left" stroke="none" textAnchor="end" width="60" x="57" y="241">
                              <tspan dy="0.355em" x="57">
                                0
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line className="recharts-cartesian-axis-tick-line" fill="none" height="236" orientation="left" stroke="#666" width="60" x="5" x1="59" x2="65" y="5" y1="182" y2="182" />
                            <text className="recharts-text recharts-cartesian-axis-tick-value" fill="#666" height="236" orientation="left" stroke="none" textAnchor="end" width="60" x="57" y="182">
                              <tspan dy="0.355em" x="57">
                                350
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line className="recharts-cartesian-axis-tick-line" fill="none" height="236" orientation="left" stroke="#666" width="60" x="5" x1="59" x2="65" y="5" y1="123" y2="123" />
                            <text className="recharts-text recharts-cartesian-axis-tick-value" fill="#666" height="236" orientation="left" stroke="none" textAnchor="end" width="60" x="57" y="123">
                              <tspan dy="0.355em" x="57">
                                700
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line className="recharts-cartesian-axis-tick-line" fill="none" height="236" orientation="left" stroke="#666" width="60" x="5" x1="59" x2="65" y="5" y1="64" y2="64" />
                            <text className="recharts-text recharts-cartesian-axis-tick-value" fill="#666" height="236" orientation="left" stroke="none" textAnchor="end" width="60" x="57" y="64">
                              <tspan dy="0.355em" x="57">
                                1050
                              </tspan>
                            </text>
                          </g>
                          <g className="recharts-layer recharts-cartesian-axis-tick">
                            <line className="recharts-cartesian-axis-tick-line" fill="none" height="236" orientation="left" stroke="#666" width="60" x="5" x1="59" x2="65" y="5" y1="5" y2="5" />
                            <text className="recharts-text recharts-cartesian-axis-tick-value" fill="#666" height="236" orientation="left" stroke="none" textAnchor="end" width="60" x="57" y="12">
                              <tspan dy="0.355em" x="57">
                                1400
                              </tspan>
                            </text>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-layer recharts-area">
                        <g className="recharts-layer">
                          <defs>
                            <clipPath id="animationClipPath-recharts-area-14">
                              <rect height="242" width="510" x="65" y="0" />
                            </clipPath>
                          </defs>
                          <g className="recharts-layer" clip-path="url(#animationClipPath-recharts-area-14)">
                            <g className="recharts-layer">
                              <path className="recharts-curve recharts-area-area" d="M65,153.343C93.333,151.657,121.667,149.971,150,148.286C178.333,146.6,206.667,144.914,235,143.229C263.333,141.543,291.667,139.998,320,138.171C348.333,136.345,376.667,134.238,405,132.271C433.333,130.305,461.667,128.198,490,126.371C518.333,124.545,546.667,122.93,575,121.314L575,241C546.667,241,518.333,241,490,241C461.667,241,433.333,241,405,241C376.667,241,348.333,241,320,241C291.667,241,263.333,241,235,241C206.667,241,178.333,241,150,241C121.667,241,93.333,241,65,241Z" fill="#3b82f6" fill-opacity="0.6" height="236" name="Бюджет" stroke="none" width="510" />
                              <path className="recharts-curve recharts-area-curve" d="M65,153.343C93.333,151.657,121.667,149.971,150,148.286C178.333,146.6,206.667,144.914,235,143.229C263.333,141.543,291.667,139.998,320,138.171C348.333,136.345,376.667,134.238,405,132.271C433.333,130.305,461.667,128.198,490,126.371C518.333,124.545,546.667,122.93,575,121.314" fill="none" fill-opacity="0.6" height="236" name="Бюджет" stroke="#3b82f6" width="510" />
                            </g>
                          </g>
                        </g>
                      </g>
                      <g className="recharts-layer recharts-area">
                        <g className="recharts-layer">
                          <defs>
                            <clipPath id="animationClipPath-recharts-area-15">
                              <rect height="154" width="510" x="65" y="0" />
                            </clipPath>
                          </defs>
                          <g className="recharts-layer" clip-path="url(#animationClipPath-recharts-area-15)">
                            <g className="recharts-layer">
                              <path className="recharts-curve recharts-area-area" d="M65,89.286C93.333,85.212,121.667,81.138,150,77.486C178.333,73.833,206.667,71.024,235,67.371C263.333,63.719,291.667,59.364,320,55.571C348.333,51.779,376.667,48.548,405,44.614C433.333,40.681,461.667,35.764,490,31.971C518.333,28.179,546.667,25.018,575,21.857L575,121.314C546.667,122.93,518.333,124.545,490,126.371C461.667,128.198,433.333,130.305,405,132.271C376.667,134.238,348.333,136.345,320,138.171C291.667,139.998,263.333,141.543,235,143.229C206.667,144.914,178.333,146.6,150,148.286C121.667,149.971,93.333,151.657,65,153.343Z" fill="#f59e0b" fill-opacity="0.6" height="236" name="Контракт" stroke="none" width="510" />
                              <path className="recharts-curve recharts-area-curve" d="M65,89.286C93.333,85.212,121.667,81.138,150,77.486C178.333,73.833,206.667,71.024,235,67.371C263.333,63.719,291.667,59.364,320,55.571C348.333,51.779,376.667,48.548,405,44.614C433.333,40.681,461.667,35.764,490,31.971C518.333,28.179,546.667,25.018,575,21.857" fill="none" fill-opacity="0.6" height="236" name="Контракт" stroke="#f59e0b" width="510" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <div className="recharts-legend-wrapper" style={{ 'position': 'absolute', 'width': '570px', 'height': 'auto', 'left': '5px', 'bottom': '5px' }}>
                      <ul className="recharts-default-legend" style={{ 'padding': '0px', 'margin': '0px', 'textAlign': 'center' }}>
                        <li className="recharts-legend-item legend-item-0" style={{ 'display': 'inline-block', 'marginRight': '10px' }}>
                          <svg className="recharts-surface" height="14" style={{ 'display': 'inline-block', 'verticalAlign': 'middle', 'marginRight': '4px' }} viewBox="0 0 32 32" width="14">
                            <title />
                            <desc />
                            <path className="recharts-legend-icon" d="M0,16h10.666666666666666
            A5.333333333333333,5.333333333333333,0,1,1,21.333333333333332,16
            H32M21.333333333333332,16
            A5.333333333333333,5.333333333333333,0,1,1,10.666666666666666,16" fill="none" stroke="#3b82f6" strokeWidth="4" />
                          </svg>
                          <span className="recharts-legend-item-text" style={{ 'color': 'rgb(59, 130, 246)' }}>
                            Бюджет
                          </span>
                        </li>
                        <li className="recharts-legend-item legend-item-1" style={{ 'display': 'inline-block', 'marginRight': '10px' }}>
                          <svg className="recharts-surface" height="14" style={{ 'display': 'inline-block', 'verticalAlign': 'middle', 'marginRight': '4px' }} viewBox="0 0 32 32" width="14">
                            <title />
                            <desc />
                            <path className="recharts-legend-icon" d="M0,16h10.666666666666666
            A5.333333333333333,5.333333333333333,0,1,1,21.333333333333332,16
            H32M21.333333333333332,16
            A5.333333333333333,5.333333333333333,0,1,1,10.666666666666666,16" fill="none" stroke="#f59e0b" strokeWidth="4" />
                          </svg>
                          <span className="recharts-legend-item-text" style={{ 'color': 'rgb(245, 158, 11)' }}>
                            Контракт
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="recharts-tooltip-wrapper recharts-tooltip-wrapper-left recharts-tooltip-wrapper-top" style={{ 'visibility': 'hidden', 'pointerEvents': 'none', 'position': 'absolute', 'top': '0px', 'left': '0px' }} tabIndex={-1}>
                      <div className="recharts-default-tooltip" style={{ 'margin': '0px', 'padding': '10px', 'backgroundColor': 'rgb(255, 255, 255)', 'border': '1px solid rgb(204, 204, 204)', 'whiteSpace': 'nowrap' }}>
                        <p className="recharts-tooltip-label" style={{ 'margin': '0px' }}>
                          2024
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-blue-600">
                  2,090
                </div>
                <div className="text-gray-600 mt-1">
                  Всього студентів
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-green-600">
                  94.5%
                </div>
                <div className="text-gray-600 mt-1">
                  Середня успішність
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-orange-600">
                  1,300
                </div>
                <div className="text-gray-600 mt-1">
                  Зарахованих у 2025
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-purple-600">
                  1,265
                </div>
                <div className="text-gray-600 mt-1">
                  Випускників
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>






) }