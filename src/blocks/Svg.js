import React from "react"
import "../styles/Svg.scss";
import SvgLibrary from "./SvgLibrary";

export default function Svg(props) {
    const hair = {
        fill: props.hairColor
      };

    const skin = {
        fill: props.skinColor
      };
      
    return (
        <React.Fragment>
            <SvgLibrary id={props.svgID}/>
            {/* <svg width="460px" height="460px" viewBox="0 0 460 460" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <title>Group</title>
                <desc>Created with Sketch.</desc>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="meditate">
                        <g id="Group">
                            <circle className="oval" fill="#46696b" cx="230" cy="230" r="230"></circle>
                            <path className="blob" d="M188,396.641129 C279.955411,396.641129 394.511719,302.954663 394.511719,214.865245 C394.511719,156.980709 328.921705,166.046865 266.921422,151.996094 C234.568892,144.664224 212.81955,102.308594 181.289063,102.308594 C89.3336517,102.308594 34.2148438,177.393004 34.2148438,265.482422 C34.2148438,353.571839 96.0445892,396.641129 188,396.641129 Z" id="Oval" fill="#78806B"></path>
                            <path className="blob blob-outline" d="M185.00743,389.808594 C87.2809189,389.808594 28.7148438,345.686161 28.7148438,265.427893 C28.7148438,223.583539 42.7929159,184.973738 68.4086991,156.831181 C95.2972037,127.29036 133.31544,110.808594 178.208892,110.808594 C191.48759,110.808594 202.430642,116.589055 219.937638,130.475265 C220.773473,131.138234 221.645031,131.834062 222.694814,132.675655 C223.31173,133.170227 225.494286,134.923062 225.454962,134.891499 C243.40805,149.301764 252.731314,155.144283 265.062414,157.749731 C268.218154,158.41651 271.468193,159.046133 274.843965,159.648119 C285.245284,161.502939 290.261682,162.192502 312.91861,165.084842 C343.783473,169.02499 357.895078,171.886114 370.49644,178.048123 C386.608531,185.926863 394.714844,198.338907 394.714844,217.619468 C394.714844,257.340751 368.123628,300.445609 324.856868,335.054981 C282.623873,368.837437 230.216763,389.808594 185.00743,389.808594 Z" id="oval-outline" stroke="#D4BB47"></path>
                            <path className="blob blob-outline" d="M189.792586,395.375 C92.1286505,395.375 33.625,351.299597 33.625,271.1193 C33.625,229.305241 47.6920779,190.725593 73.2862961,162.606729 C100.150892,133.092175 138.13547,116.625 182.994048,116.625 C196.235838,116.625 207.158991,122.394949 224.645115,136.264605 C225.480758,136.927421 226.352156,137.623121 227.401783,138.46459 C228.01865,138.959121 230.201159,140.71192 230.161873,140.680387 C248.130141,155.102836 257.464885,160.952549 269.82173,163.563437 C272.978807,164.230499 276.23014,164.860372 279.607176,165.462584 C290.011382,167.317919 295.028608,168.007596 317.687937,170.900242 C348.538376,174.838548 362.642301,177.698115 375.226685,183.851823 C391.29675,191.710012 399.375,204.079088 399.375,223.310874 C399.375,262.988478 372.803761,306.060954 329.563943,340.648775 C287.351831,374.414527 234.971417,395.375 189.792586,395.375 Z" id="oval-outline" stroke="#D4BB47" stroke-width="0.75"></path>
                            <path className="blob-outline" d="M194.792586,390.625 C97.0034998,390.625 38.375,346.455538 38.375,266.1193 C38.375,224.244648 52.4640664,185.604695 78.1014146,157.438447 C105.013828,127.871358 143.065722,111.375 187.994048,111.375 C201.309654,111.375 212.272606,117.165973 229.800473,131.068738 C230.6365,131.731859 231.508219,132.427815 232.558157,133.269533 C233.175124,133.764145 235.357725,135.517017 235.318364,135.485423 C253.256271,149.883503 262.568055,155.718829 274.873411,158.318838 C278.027814,158.985334 281.276558,159.614706 284.651065,160.216467 C295.049499,162.070772 300.065068,162.760221 322.719595,165.652254 C353.598883,169.594243 367.718168,172.456925 380.336507,178.627236 C396.490626,186.526527 404.625,198.981539 404.625,218.310874 C404.625,258.075837 378.013808,301.213077 334.720105,335.844001 C292.466229,369.643161 240.032421,390.625 194.792586,390.625 Z" id="oval-outline" stroke="#D4BB47" stroke-width="1.25" transform="translate(221.500000, 251.000000) rotate(-6.000000) translate(-221.500000, -251.000000) "></path>
                            <path d="M382.398983,176.022446 C388.062986,175.586507 393.0559,181.552978 393.550981,189.349121 C393.665907,191.158886 393.981271,193.917963 394.32697,197.093545 C395.302912,194.117365 396.163243,191.536435 396.640875,189.816143 C398.715918,182.342449 404.799737,177.76567 410.229464,179.59362 C415.659192,181.42157 418.378701,188.962042 416.303658,196.435736 C414.544421,202.771992 401.265733,218.653698 393.955857,222.227155 C393.585057,222.685193 393.135607,222.952764 392.596742,222.994262 C392.362431,223.012301 392.114885,222.987315 391.855565,222.92228 C391.424281,222.97548 391.036179,222.949336 390.697405,222.835286 C390.097008,222.633159 389.67669,222.163388 389.406771,221.477529 C383.014736,216.033043 373.456551,197.490635 373.039698,190.92849 C372.544777,183.132336 376.735006,176.458762 382.398983,176.022446 Z" id="Combined-Shape" fill="#CB6767"></path>
                            <path className="skin" style={skin} d="M244,262 C258.911688,262 271,241.405098 271,216 C271,190.594902 292.258003,175 244,170 C195.741997,165 217,190.594902 217,216 C217,241.405098 229.088312,262 244,262 Z" id="scalp"></path>
                            <path className="hair" style={hair} d="M240.783134,169.369227 C250.657658,169.369227 294.903666,164.224619 313.143994,187.224619 C331.384322,210.224619 330.758556,219.04348 351.780736,225.748056 C372.802916,232.452633 416.548032,270.978668 397.489226,294.487637 C378.43042,317.996605 417.876799,317.996605 417.876799,350.230469 C417.876799,382.464333 398.439552,366.270907 381.89052,374.59375 C296.898658,417.337881 215.075048,384.765625 181.511952,384.765625 C139.745766,384.765625 115.224372,377.523438 107.947769,363.039062 C83.7337584,358.792975 71.7101017,347.262379 71.876799,328.447275 C72.0458074,309.632171 84.0694642,291.478958 107.947769,273.987637 C118.641651,271.923796 123.988592,266.324502 123.988592,257.189756 C123.988592,243.487637 108.162819,221.060556 132.410156,204.142588 C156.657492,187.224619 154.954347,177.279306 165.515053,171.173838 C176.075759,165.068369 222.776842,161.05665 230.089297,171.173838 C237.401751,181.291025 233.093428,204.142588 237.401751,204.142588 C241.710075,204.142588 230.908609,169.369227 240.783134,169.369227 Z" fill="#000000"></path>
                            <g id="skin" className="skin"  style={skin} transform="translate(143.000000, 199.000000)">
                                <path d="M101,108.4375 C119.699877,108.4375 157,81.3507274 157,47.9375 C157,14.5242726 131.427946,0 100.5,0 C69.572054,0 45,14.5242726 45,47.9375 C45,81.3507274 82.3001233,108.4375 101,108.4375 Z" id="Oval"></path>
                                <path d="M85,102 L118,102 C115.705709,111.997396 114.518509,122.888021 114.438399,134.671875 C114.35829,146.455729 122.54549,158.654948 139,171.269531 L70,171.269531 C83.3333333,160.540365 89.6328127,148.341146 88.8984381,134.671875 C88.1640635,121.002604 86.8645841,110.111979 85,102 Z" id="Rectangle"></path>
                                <path d="M101,224 C156.78076,224 202,211.016258 202,195 C202,188.251473 193.971783,182.041339 180.507998,177.114021 C174.451506,174.897537 173.96299,177.515238 157.799929,177.114021 C141.636868,176.712804 141.636868,168.272555 131.679449,167.362084 C122.004229,166.477416 111.69629,166 101,166 C94.1183411,166 87.3974295,166.197614 80.902342,166.574156 C70.1049976,167.200115 64.5518521,180.266178 47.4768748,177.114021 C30.4018974,173.961864 30.4018974,173.961864 22.6083538,176.712804 C8.47316742,181.702196 0,188.066982 0,195 C0,211.016258 45.2192403,224 101,224 Z" id="Oval"></path>
                            </g>
                            <path d="M273,259.647461 C280.731986,259.647461 287,265.731986 287,258 C287,250.268014 280.731986,244 273,244 C265.268014,244 259,250.268014 259,258 C259,265.731986 265.268014,259.647461 273,259.647461 Z" id="cheek-right" fill="#E29191" opacity="0.285592831"></path>
                            <path d="M213,259.647461 C220.731986,259.647461 227,265.731986 227,258 C227,250.268014 220.731986,244 213,244 C205.268014,244 199,250.268014 199,258 C199,265.731986 205.268014,259.647461 213,259.647461 Z" id="cheek-left" fill="#E29191" opacity="0.285592831"></path>
                            <path d="M215.041221,226.316205 C218.463327,228.958516 220.743715,233.689933 220.743715,239.087116 C220.743715,247.371388 215.371132,254.087116 208.743715,254.087116 L208.777775,254.086728 C214.078576,252.324296 218.025282,245.583114 218.025282,237.536044 C218.025282,233.268389 216.915244,229.368024 215.081884,226.382795 Z" id="eye-left" fill="#000000" transform="translate(214.743715, 240.201661) rotate(74.000000) translate(-214.743715, -240.201661) "></path>
                            <path d="M249.075557,275.264184 C253.081443,276.071592 256.130032,280.177033 256.130032,285.120164 C256.130032,290.643011 252.324452,295.120164 247.630032,295.120164 C246.303504,295.120164 245.047949,294.762668 243.929179,294.125103 C247.094738,291.797309 249.337645,285.999514 249.337645,279.215633 C249.337645,277.934972 249.257713,276.689454 249.106727,275.495791 Z" id="mouth" fill="#000000" transform="translate(250.029605, 285.192274) rotate(52.000000) translate(-250.029605, -285.192274) "></path>
                            <path d="M270.297505,226 C273.719611,228.642311 276,233.373728 276,238.770911 C276,247.055182 270.627417,253.770911 264,253.770911 L264.03406,253.770523 C269.334861,252.008091 273.281566,245.266908 273.281566,237.219839 C273.281566,232.952184 272.171528,229.051818 270.338168,226.06659 Z" id="eye-right" fill="#000000" transform="translate(270.000000, 239.885456) scale(-1, 1) rotate(74.000000) translate(-270.000000, -239.885456) "></path>
                            <path d="M348.887433,240.105217 C352.491793,239.808279 355.669103,243.87056 355.984155,249.178577 C356.057287,250.41071 356.257961,252.289135 356.477941,254.451131 C357.099094,252.424809 357.646525,250.667734 357.950453,249.496549 C359.270935,244.408073 363.142458,241.291965 366.597742,242.536528 C370.053025,243.78109 371.783623,248.915033 370.46314,254.00351 C369.343637,258.317512 360.893732,269.130407 356.241957,271.563559 C356.006525,271.875105 355.720239,272.057687 355.376915,272.085979 C355.228164,272.09823 355.07103,272.081326 354.906437,272.03728 C354.630901,272.073145 354.383869,272.055353 354.168242,271.977686 C353.786825,271.840303 353.519612,271.521318 353.347812,271.055652 C349.280772,267.349484 343.196831,254.72229 342.931614,250.253885 C342.616562,244.945868 345.283073,240.402155 348.887433,240.105217 Z" id="small-heart" fill="#CB6767" transform="translate(356.906293, 256.089890) rotate(-20.000000) translate(-356.906293, -256.089890) "></path>
                            <path className="hair" style={hair} d="M166.732422,221.121067 C153.057943,220.173151 142.242839,224.79164 134.287109,234.976536 C129.572282,241.012442 124.44149,254.197546 119.935547,258.494879 C113.036599,265.074428 105.949844,259.785985 99.9550781,263.952059 C93.3483073,268.543448 93.3483073,279.391054 99.9550781,296.494879 C96.0957031,281.480966 97.406901,272.394148 103.888672,269.234425 C109.03463,266.725882 122.259719,266.405693 129.974609,258.179492 C136.836058,250.863296 141.082257,239.894508 145.052676,232.976536 C153.487362,218.280119 158.298828,229.976536 166.732422,229.976536 C172.354818,229.976536 172.354818,227.024713 166.732422,221.121067 Z" fill="#000000"></path>
                            <g id="peace" transform="translate(44.000000, 61.000000)">
                                <g id="peace-shadow" transform="translate(0.000000, 7.000000)" fill="#1A3A3B">
                                    <g id="e-copy" transform="translate(258.903394, 18.348571)">
                                        <path d="M87.7098044,26.9378555 C96.1317754,31.9752681 101.825791,41.6084867 101.825791,52.6644351 C101.825791,68.9315879 89.499009,82.1187208 74.2931534,82.1187208 C64.6298322,82.1187208 56.1292546,76.792962 51.2162047,68.7354672 C55.1871324,71.1086985 59.7621723,72.461578 64.632579,72.461578 C79.8384346,72.461578 92.1652161,59.2744451 92.1652161,43.0072923 C92.1652161,37.1511173 90.5676652,31.6941128 87.8133557,27.1078364 Z" id="Combined-Shape-Copy-2" transform="translate(76.520998, 54.528589) scale(-1, 1) rotate(24.000000) translate(-76.520998, -54.528589) "></path>
                                        <path d="M37.9047114,26.8848379 C44.6408447,31.888448 49.2078653,41.5868379 49.2078653,52.7306647 C49.2078653,68.9978175 39.4761957,82.1849504 27.4715728,82.1849504 C19.8795966,82.1849504 13.1967026,76.9106724 9.30950469,68.9186179 C12.4065026,71.2195968 15.9620654,72.5278075 19.7431133,72.5278075 C31.7477361,72.5278075 41.4794057,59.3406746 41.4794057,43.0735218 C41.4794057,37.2173468 40.2181814,31.7603424 38.0437265,27.174066 Z" id="Combined-Shape-Copy" transform="translate(29.258502, 54.535266) rotate(23.000000) translate(-29.258502, -54.535266) "></path>
                                        <path d="M50.8114936,21.4836587 C60.1169418,4.47303904 76.000385,-4.23494401 86.2881568,2.03383419 C96.5759286,8.30261238 97.3722592,27.1742931 88.0668109,44.1849127 C78.7613627,61.1955324 62.8779195,69.9035154 52.5901477,63.6347372 C42.3023759,57.365959 41.5060453,38.4942784 50.8114936,21.4836587 Z M57.1552461,30.9783733 C53.4509084,39.7594879 54.8467036,48.9449619 60.2728419,51.4947037 C65.6989802,54.0444455 73.1006934,48.9929198 76.8050311,40.2118052 C80.5093688,31.4306906 79.1135737,22.2452167 73.6874354,19.6954749 C68.2612971,17.1457331 60.8595838,22.1972588 57.1552461,30.9783733 Z" id="Combined-Shape"></path>
                                    </g>
                                    <g id="c" transform="translate(244.412533, 10.622857)">
                                        <path d="M37.2689,5.25592164 C53.2750638,5.25592164 66.2506232,23.6599871 66.2506232,46.3625524 C66.2506232,69.0651176 53.2750638,87.4691831 37.2689,87.4691831 C22.9203237,87.4691831 11.0071589,72.6795677 8.69360209,53.261775 C12.5883088,60.8499336 19.6476396,65.9205442 27.7098733,65.9205442 C39.9812656,65.9205442 49.9291945,54.1732684 49.9291945,39.6822693 C49.9291945,25.1912702 39.9812656,13.4439943 27.7098733,13.4439943 C23.9902333,13.4439943 20.4840697,14.5233171 17.403722,16.4312158 C22.5912219,9.50229891 29.5804347,5.25592164 37.2689,5.25592164 Z" id="Combined-Shape" transform="translate(37.472053, 46.362552) scale(-1, 1) rotate(-12.000000) translate(-37.472053, -46.362552) "></path>
                                    </g>
                                    <g id="a" transform="translate(169.060052, 2.897143)">
                                        <path d="M80.7626754,28.0053162 C87.4988086,33.0089263 92.0658292,42.7073162 92.0658292,53.851143 C92.0658292,70.1182958 82.3341596,83.3054287 70.3295368,83.3054287 C62.7375606,83.3054287 56.0546665,78.0311507 52.1674686,70.0390963 C55.2644666,72.3400752 58.8200294,73.6482859 62.6010772,73.6482859 C74.6057001,73.6482859 84.3373697,60.461153 84.3373697,44.1940002 C84.3373697,38.3378251 83.0761453,32.8808207 80.9016904,28.2945443 Z" id="Combined-Shape" transform="translate(72.116466, 55.655744) scale(-1, 1) translate(-72.116466, -55.655744) "></path>
                                        <path d="M66.0960857,51.1841766 C68.2526312,51.1841766 70.1599627,46.0113242 71.3799954,33.0141717 C72.6000282,20.0170193 74.4558713,0.964228819 66.1015786,0.965142356 C57.747286,0.966055893 59.8061403,20.0184183 61.1204212,33.0152936 C62.4347021,46.0121689 63.9395402,51.1841766 66.0960857,51.1841766 Z" id="Oval-Copy-4" transform="translate(66.175995, 26.074659) rotate(19.000000) translate(-66.175995, -26.074659) "></path>
                                        <path d="M8.1122935,27.8202877 C19.7441038,6.55701308 39.5984078,-4.32796573 52.4581225,3.50800702 C65.3178373,11.3439798 66.3132505,34.9335806 54.6814402,56.1968552 C43.0496299,77.4601298 23.1953259,88.3451086 10.3356112,80.5091358 C-2.52410359,72.6731631 -3.51951681,49.0835622 8.1122935,27.8202877 Z M16.0419842,39.688681 C11.4115621,50.6650742 13.156306,62.1469166 19.9389789,65.3340939 C26.7216517,68.5212711 35.9737933,62.206864 40.6042154,51.2304708 C45.2346375,40.2540776 43.4898936,28.7722351 36.7072207,25.5850579 C29.9245479,22.3978806 20.6724063,28.7122877 16.0419842,39.688681 Z" id="Combined-Shape-Copy-4"></path>
                                    </g>
                                    <g id="e" transform="translate(132.591322, 54.166665) rotate(-6.000000) translate(-132.591322, -54.166665) translate(83.091322, 8.666665)">
                                        <path d="M75.1510577,26.9378555 C83.5730287,31.9752681 89.2670438,41.6084867 89.2670438,52.6644351 C89.2670438,68.9315879 76.9402623,82.1187208 61.7344067,82.1187208 C52.0710855,82.1187208 43.5705078,76.792962 38.657458,68.7354672 C42.6283856,71.1086985 47.2034256,72.461578 52.0738323,72.461578 C67.2796879,72.461578 79.6064694,59.2744451 79.6064694,43.0072923 C79.6064694,37.1511173 78.0089185,31.6941128 75.254609,27.1078364 Z" id="Combined-Shape-Copy-2" transform="translate(63.962251, 54.528589) scale(-1, 1) rotate(24.000000) translate(-63.962251, -54.528589) "></path>
                                        <path d="M43.0859524,27.1676041 C49.8220856,32.1712142 54.3891062,41.8696042 54.3891062,53.013431 C54.3891062,69.2805838 44.6574366,82.4677167 32.6528138,82.4677167 C25.0608376,82.4677167 18.3779436,77.1934387 14.4907457,69.2013842 C17.5877436,71.5023631 21.1433064,72.8105738 24.9243543,72.8105738 C36.9289771,72.8105738 46.6606467,59.6234409 46.6606467,43.3562881 C46.6606467,37.5001131 45.3994223,32.0431087 43.2249674,27.4568323 Z" id="Combined-Shape-Copy" transform="translate(34.439743, 54.818032) rotate(56.000000) translate(-34.439743, -54.818032) "></path>
                                        <path d="M38.2527468,21.4836587 C47.5581951,4.47303904 63.4416382,-4.23494401 73.7294101,2.03383419 C84.0171819,8.30261238 84.8135124,27.1742931 75.5080642,44.1849127 C66.2026159,61.1955324 50.3191728,69.9035154 40.031401,63.6347372 C29.7436292,57.365959 28.9472986,38.4942784 38.2527468,21.4836587 Z M44.5964994,30.9783733 C40.8921617,39.7594879 42.2879569,48.9449619 47.7140951,51.4947037 C53.1402334,54.0444455 60.5419467,48.9929198 64.2462844,40.2118052 C67.9506221,31.4306906 66.5548269,22.2452167 61.1286886,19.6954749 C55.7025503,17.1457331 48.3008371,22.1972588 44.5964994,30.9783733 Z" id="Combined-Shape"></path>
                                    </g>
                                    <g id="p">
                                        <path d="M38.3361344,0 C60.0384638,0 53.8081481,19.0005101 53.8081481,65.6685714 C53.8081481,112.336633 43.9382917,169 38.3361344,169 C32.7339771,169 28.1925312,131.168061 28.1925312,84.5 C28.1925312,37.8319386 16.6338049,0 38.3361344,0 Z M37.2940354,16.4171429 C28.9394282,16.4171429 31.0004441,35.469013 32.3161962,48.4655427 C33.6319482,61.4620724 35.1374087,66.6342857 37.2940354,66.6342857 C39.4506622,66.6342857 41.3574997,61.4620724 42.5761567,48.4655427 C43.7948137,35.469013 45.6486426,16.4171429 37.2940354,16.4171429 Z" id="Combined-Shape"></path>
                                        <path d="M75.3524804,21.2457143 C91.3586442,21.2457143 104.334204,41.5668699 104.334204,66.6342857 C104.334204,91.7017015 91.3586442,112.022857 75.3524804,112.022857 C59.3463167,112.022857 46.3707572,91.7017015 46.3707572,66.6342857 C46.3707572,41.5668699 59.3463167,21.2457143 75.3524804,21.2457143 Z M70.0391645,37.6628571 C60.1686968,37.6628571 52.1671018,50.6338075 52.1671018,66.6342857 C52.1671018,82.6347639 60.1686968,95.6057143 70.0391645,95.6057143 C79.9096321,95.6057143 87.9112272,82.6347639 87.9112272,66.6342857 C87.9112272,50.6338075 79.9096321,37.6628571 70.0391645,37.6628571 Z" id="Combined-Shape"></path>
                                        <path d="M28.5951376,66.6338876 C35.3312708,71.6374977 39.8982914,81.3358876 39.8982914,92.4797144 C39.8982914,108.746867 30.1666218,121.934 18.161999,121.934 C10.5700228,121.934 3.88712875,116.659722 -6.91457226e-05,108.667668 C3.09692881,110.968647 6.6524916,112.276857 10.4335395,112.276857 C22.4381623,112.276857 32.1698319,99.0897244 32.1698319,82.8225716 C32.1698319,76.9663966 30.9086075,71.5093921 28.7341526,66.9231158 Z" id="Combined-Shape"></path>
                                    </g>
                                </g>
                                <g transform="translate(4.000000, 0.000000)" fill="#7DBDAB">
                                    <g id="e-copy" transform="translate(258.903394, 18.348571)">
                                        <path d="M87.7098044,26.9378555 C96.1317754,31.9752681 101.825791,41.6084867 101.825791,52.6644351 C101.825791,68.9315879 89.499009,82.1187208 74.2931534,82.1187208 C64.6298322,82.1187208 56.1292546,76.792962 51.2162047,68.7354672 C55.1871324,71.1086985 59.7621723,72.461578 64.632579,72.461578 C79.8384346,72.461578 92.1652161,59.2744451 92.1652161,43.0072923 C92.1652161,37.1511173 90.5676652,31.6941128 87.8133557,27.1078364 Z" id="Combined-Shape-Copy-2" transform="translate(76.520998, 54.528589) scale(-1, 1) rotate(24.000000) translate(-76.520998, -54.528589) "></path>
                                        <path d="M37.9047114,26.8848379 C44.6408447,31.888448 49.2078653,41.5868379 49.2078653,52.7306647 C49.2078653,68.9978175 39.4761957,82.1849504 27.4715728,82.1849504 C19.8795966,82.1849504 13.1967026,76.9106724 9.30950469,68.9186179 C12.4065026,71.2195968 15.9620654,72.5278075 19.7431133,72.5278075 C31.7477361,72.5278075 41.4794057,59.3406746 41.4794057,43.0735218 C41.4794057,37.2173468 40.2181814,31.7603424 38.0437265,27.174066 Z" id="Combined-Shape-Copy" transform="translate(29.258502, 54.535266) rotate(23.000000) translate(-29.258502, -54.535266) "></path>
                                        <path d="M50.8114936,21.4836587 C60.1169418,4.47303904 76.000385,-4.23494401 86.2881568,2.03383419 C96.5759286,8.30261238 97.3722592,27.1742931 88.0668109,44.1849127 C78.7613627,61.1955324 62.8779195,69.9035154 52.5901477,63.6347372 C42.3023759,57.365959 41.5060453,38.4942784 50.8114936,21.4836587 Z M57.1552461,30.9783733 C53.4509084,39.7594879 54.8467036,48.9449619 60.2728419,51.4947037 C65.6989802,54.0444455 73.1006934,48.9929198 76.8050311,40.2118052 C80.5093688,31.4306906 79.1135737,22.2452167 73.6874354,19.6954749 C68.2612971,17.1457331 60.8595838,22.1972588 57.1552461,30.9783733 Z" id="Combined-Shape"></path>
                                    </g>
                                    <g id="c" transform="translate(244.412533, 10.622857)">
                                        <path d="M37.2689,5.25592164 C53.2750638,5.25592164 66.2506232,23.6599871 66.2506232,46.3625524 C66.2506232,69.0651176 53.2750638,87.4691831 37.2689,87.4691831 C22.9203237,87.4691831 11.0071589,72.6795677 8.69360209,53.261775 C12.5883088,60.8499336 19.6476396,65.9205442 27.7098733,65.9205442 C39.9812656,65.9205442 49.9291945,54.1732684 49.9291945,39.6822693 C49.9291945,25.1912702 39.9812656,13.4439943 27.7098733,13.4439943 C23.9902333,13.4439943 20.4840697,14.5233171 17.403722,16.4312158 C22.5912219,9.50229891 29.5804347,5.25592164 37.2689,5.25592164 Z" id="Combined-Shape" transform="translate(37.472053, 46.362552) scale(-1, 1) rotate(-12.000000) translate(-37.472053, -46.362552) "></path>
                                    </g>
                                    <g id="a" transform="translate(169.060052, 2.897143)">
                                        <path d="M80.7626754,28.0053162 C87.4988086,33.0089263 92.0658292,42.7073162 92.0658292,53.851143 C92.0658292,70.1182958 82.3341596,83.3054287 70.3295368,83.3054287 C62.7375606,83.3054287 56.0546665,78.0311507 52.1674686,70.0390963 C55.2644666,72.3400752 58.8200294,73.6482859 62.6010772,73.6482859 C74.6057001,73.6482859 84.3373697,60.461153 84.3373697,44.1940002 C84.3373697,38.3378251 83.0761453,32.8808207 80.9016904,28.2945443 Z" id="Combined-Shape" transform="translate(72.116466, 55.655744) scale(-1, 1) translate(-72.116466, -55.655744) "></path>
                                        <path d="M66.0960857,51.1841766 C68.2526312,51.1841766 70.1599627,46.0113242 71.3799954,33.0141717 C72.6000282,20.0170193 74.4558713,0.964228819 66.1015786,0.965142356 C57.747286,0.966055893 59.8061403,20.0184183 61.1204212,33.0152936 C62.4347021,46.0121689 63.9395402,51.1841766 66.0960857,51.1841766 Z" id="Oval-Copy-4" transform="translate(66.175995, 26.074659) rotate(19.000000) translate(-66.175995, -26.074659) "></path>
                                        <path d="M8.1122935,27.8202877 C19.7441038,6.55701308 39.5984078,-4.32796573 52.4581225,3.50800702 C65.3178373,11.3439798 66.3132505,34.9335806 54.6814402,56.1968552 C43.0496299,77.4601298 23.1953259,88.3451086 10.3356112,80.5091358 C-2.52410359,72.6731631 -3.51951681,49.0835622 8.1122935,27.8202877 Z M16.0419842,39.688681 C11.4115621,50.6650742 13.156306,62.1469166 19.9389789,65.3340939 C26.7216517,68.5212711 35.9737933,62.206864 40.6042154,51.2304708 C45.2346375,40.2540776 43.4898936,28.7722351 36.7072207,25.5850579 C29.9245479,22.3978806 20.6724063,28.7122877 16.0419842,39.688681 Z" id="Combined-Shape-Copy-4"></path>
                                    </g>
                                    <g id="e" transform="translate(132.591322, 54.166665) rotate(-6.000000) translate(-132.591322, -54.166665) translate(83.091322, 8.666665)">
                                        <path d="M75.1510577,26.9378555 C83.5730287,31.9752681 89.2670438,41.6084867 89.2670438,52.6644351 C89.2670438,68.9315879 76.9402623,82.1187208 61.7344067,82.1187208 C52.0710855,82.1187208 43.5705078,76.792962 38.657458,68.7354672 C42.6283856,71.1086985 47.2034256,72.461578 52.0738323,72.461578 C67.2796879,72.461578 79.6064694,59.2744451 79.6064694,43.0072923 C79.6064694,37.1511173 78.0089185,31.6941128 75.254609,27.1078364 Z" id="Combined-Shape-Copy-2" transform="translate(63.962251, 54.528589) scale(-1, 1) rotate(24.000000) translate(-63.962251, -54.528589) "></path>
                                        <path d="M43.0859524,27.1676041 C49.8220856,32.1712142 54.3891062,41.8696042 54.3891062,53.013431 C54.3891062,69.2805838 44.6574366,82.4677167 32.6528138,82.4677167 C25.0608376,82.4677167 18.3779436,77.1934387 14.4907457,69.2013842 C17.5877436,71.5023631 21.1433064,72.8105738 24.9243543,72.8105738 C36.9289771,72.8105738 46.6606467,59.6234409 46.6606467,43.3562881 C46.6606467,37.5001131 45.3994223,32.0431087 43.2249674,27.4568323 Z" id="Combined-Shape-Copy" transform="translate(34.439743, 54.818032) rotate(56.000000) translate(-34.439743, -54.818032) "></path>
                                        <path d="M38.2527468,21.4836587 C47.5581951,4.47303904 63.4416382,-4.23494401 73.7294101,2.03383419 C84.0171819,8.30261238 84.8135124,27.1742931 75.5080642,44.1849127 C66.2026159,61.1955324 50.3191728,69.9035154 40.031401,63.6347372 C29.7436292,57.365959 28.9472986,38.4942784 38.2527468,21.4836587 Z M44.5964994,30.9783733 C40.8921617,39.7594879 42.2879569,48.9449619 47.7140951,51.4947037 C53.1402334,54.0444455 60.5419467,48.9929198 64.2462844,40.2118052 C67.9506221,31.4306906 66.5548269,22.2452167 61.1286886,19.6954749 C55.7025503,17.1457331 48.3008371,22.1972588 44.5964994,30.9783733 Z" id="Combined-Shape"></path>
                                    </g>
                                    <g id="p">
                                        <path d="M38.3361344,0 C60.0384638,0 53.8081481,19.0005101 53.8081481,65.6685714 C53.8081481,112.336633 43.9382917,169 38.3361344,169 C32.7339771,169 28.1925312,131.168061 28.1925312,84.5 C28.1925312,37.8319386 16.6338049,0 38.3361344,0 Z M37.2940354,16.4171429 C28.9394282,16.4171429 31.0004441,35.469013 32.3161962,48.4655427 C33.6319482,61.4620724 35.1374087,66.6342857 37.2940354,66.6342857 C39.4506622,66.6342857 41.3574997,61.4620724 42.5761567,48.4655427 C43.7948137,35.469013 45.6486426,16.4171429 37.2940354,16.4171429 Z" id="Combined-Shape"></path>
                                        <path d="M75.3524804,21.2457143 C91.3586442,21.2457143 104.334204,41.5668699 104.334204,66.6342857 C104.334204,91.7017015 91.3586442,112.022857 75.3524804,112.022857 C59.3463167,112.022857 46.3707572,91.7017015 46.3707572,66.6342857 C46.3707572,41.5668699 59.3463167,21.2457143 75.3524804,21.2457143 Z M70.0391645,37.6628571 C60.1686968,37.6628571 52.1671018,50.6338075 52.1671018,66.6342857 C52.1671018,82.6347639 60.1686968,95.6057143 70.0391645,95.6057143 C79.9096321,95.6057143 87.9112272,82.6347639 87.9112272,66.6342857 C87.9112272,50.6338075 79.9096321,37.6628571 70.0391645,37.6628571 Z" id="Combined-Shape"></path>
                                        <path d="M28.5951376,66.6338876 C35.3312708,71.6374977 39.8982914,81.3358876 39.8982914,92.4797144 C39.8982914,108.746867 30.1666218,121.934 18.161999,121.934 C10.5700228,121.934 3.88712875,116.659722 -6.91457226e-05,108.667668 C3.09692881,110.968647 6.6524916,112.276857 10.4335395,112.276857 C22.4381623,112.276857 32.1698319,99.0897244 32.1698319,82.8225716 C32.1698319,76.9663966 30.9086075,71.5093921 28.7341526,66.9231158 Z" id="Combined-Shape"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg> */}
        </React.Fragment>
    )
}

// Set default props
Svg.defaultProps = {
    hairColor: "#000000",
    skinColor: "#824836"
  };