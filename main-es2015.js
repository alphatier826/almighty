(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-admin/ahm-admin.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-admin/ahm-admin.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Main Navigation-->\n<header>\n    <!-- Sidebar -->\n    <nav id=\"sidebarMenu\" class=\"collapse d-lg-block sidebar collapse bg-white\">\n      <div class=\"position-sticky\">\n        <div class=\"list-group list-group-flush mt-4\">\n          <a class=\"list-group-item list-group-item-action py-2 ripple\" aria-current=\"true\" (click)=\"launchWebPortal()\">\n            <i class=\"fa fa-rocket fa-fw me-3\"></i><span>Launch Almighty</span>\n          </a>\n          <a class=\"list-group-item list-group-item-action py-2 ripple\" routerLink=\"/admin\"[ngClass]=\"{'active': isSelected === 'news'}\" (click)=\"isSelected='news';\">\n            <i class=\"fa fa-newspaper-o fa-fw me-3\"></i><span>News</span></a>\n          <a class=\"list-group-item list-group-item-action py-2 ripple\" routerLink=\"/admin/pricing\" [ngClass]=\"{'active': isSelected === 'Pricing'}\" (click)=\"isSelected='Pricing';\">\n            <i class=\"fa fa-inr fa-fw me-3\"></i><span>Pricing</span></a>\n          <a class=\"list-group-item list-group-item-action py-2 ripple\" [ngClass]=\"{'active': isSelected === 'Calendar'}\" (click)=\"isSelected='Calendar';\">\n            <i class=\"fa fa-calendar fa-fw me-3\"></i><span>Calendar</span></a>\n          <a class=\"list-group-item list-group-item-action py-2 ripple\" [ngClass]=\"{'active': isSelected === 'Users'}\" (click)=\"isSelected='Users';\">\n              <i class=\"fa fa-users fa-fw me-3\"></i><span>Users</span></a>\n        </div>\n      </div>\n    </nav>\n    <!-- Sidebar -->\n  \n    <!-- Navbar -->\n    <nav id=\"main-navbar\" class=\"navbar navbar-expand-lg navbar-light bg-white fixed-top m-0 p-0\">\n      <!-- Container wrapper -->\n      <div class=\"container-fluid\">\n        <!-- Toggle button -->\n        <button class=\"navbar-toggler\" type=\"button\" data-mdb-toggle=\"collapse\" data-mdb-target=\"#sidebarMenu\"\n          aria-controls=\"sidebarMenu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <i class=\"fa fa-bars\"></i>\n        </button>\n  \n        <!-- Brand -->\n        <a class=\"navbar-brand\" href=\"#\">\n          <img src=\"https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp\" height=\"25\" alt=\"MDB Logo\"\n            loading=\"lazy\" />\n        </a>\n        <!-- Search form \n        <form class=\"d-none d-md-flex input-group w-auto my-auto\">\n          <input autocomplete=\"off\" type=\"search\" class=\"form-control rounded\"\n            placeholder='Search (ctrl + \"/\" to focus)' style=\"min-width: 225px;\" />\n          <span class=\"input-group-text border-0\"><i class=\"fa fa-search\"></i></span>\n        </form>-->\n  \n        <!-- Right links -->\n        <ul class=\"navbar-nav ms-auto d-flex flex-row\">\n          <!-- Notification dropdown -->\n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow\" id=\"navbarDropdownMenuLink\"\n              role=\"button\" data-mdb-toggle=\"dropdown\" aria-expanded=\"false\">\n              <i class=\"fa fa-bell\"></i>\n              <span class=\"badge rounded-pill badge-notification bg-danger\">1</span>\n            </a>\n            <ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"navbarDropdownMenuLink\">\n              <li>\n                <a class=\"dropdown-item\" href=\"#\">Some news</a>\n              </li>\n              <li>\n                <a class=\"dropdown-item\" href=\"#\">Another news</a>\n              </li>\n              <li>\n                <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n              </li>\n            </ul>\n          </li>\n  \n          <!-- Icon -->\n          <li class=\"nav-item\">\n            <a class=\"nav-link me-3 me-lg-0\" href=\"#\">\n              <i class=\"fa fa-fill-drip\"></i>\n            </a>\n          </li>\n          <!-- Icon -->\n          <li class=\"nav-item me-3 me-lg-0\">\n            <a class=\"nav-link\" href=\"#\">\n              <i class=\"fab fa-github\"></i>\n            </a>\n          </li>\n  \n          <!-- Icon dropdown -->\n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow\" id=\"navbarDropdown\"\n              role=\"button\" data-mdb-toggle=\"dropdown\" aria-expanded=\"false\">\n              <i class=\"united kingdom flag m-0\"></i>\n            </a>\n            <ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"navbarDropdown\">\n              <li>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"united kingdom flag\"></i>English\n                  <i class=\"fa fa-check text-success ms-2\"></i></a>\n              </li>\n              <li>\n                <hr class=\"dropdown-divider\" />\n              </li>\n              <li>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"flag-poland flag\"></i>Polski</a>\n              </li>\n              <li>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"flag-china flag\"></i>中文</a>\n              </li>\n              <li>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"flag-japan flag\"></i>日本語</a>\n              </li>\n              <li>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"flag-germany flag\"></i>Deutsch</a>\n              </li>\n              <li>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"flag-france flag\"></i>Français</a>\n              </li>\n              <li>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"flag-spain flag\"></i>Español</a>\n              </li>\n              <li>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"flag-russia flag\"></i>Русский</a>\n              </li>\n              <li>\n                <a class=\"dropdown-item\" href=\"#\"><i class=\"flag-portugal flag\"></i>Português</a>\n              </li>\n            </ul>\n          </li>\n  \n          <!-- Avatar -->\n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle hidden-arrow d-flex align-items-center\" href=\"#\"\n              id=\"navbarDropdownMenuLink\" role=\"button\" data-mdb-toggle=\"dropdown\" aria-expanded=\"false\">\n              <img src=\"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp\" class=\"rounded-circle\"\n                height=\"22\" alt=\"Avatar\" loading=\"lazy\" />\n            </a>\n            <ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"navbarDropdownMenuLink\">\n              <li>\n                <a class=\"dropdown-item\" href=\"#\">My profile</a>\n              </li>\n              <li>\n                <a class=\"dropdown-item\" href=\"#\">Settings</a>\n              </li>\n              <li>\n                <a class=\"dropdown-item\" href=\"#\">Logout</a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n      <!-- Container wrapper -->\n    </nav>\n    <!-- Navbar -->\n  </header>\n  <!--Main Navigation-->\n  \n  <!--Main layout-->\n  <main style=\"margin-top: 58px;\">\n    <div class=\"container pt-4\">\n        <router-outlet></router-outlet>\n    </div>\n  </main>\n  <!--Main layout-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-admin/ahm-news/ahm-news.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-admin/ahm-news/ahm-news.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper-div p-3\" style=\"background-color: rgba(188, 187, 187, 0.37);\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <h3>News</h3>\n        </div>\n    </div>\n    <div class=\"row mt-1\">\n        <div class=\"col-12\">\n            <span class=\"title-sub\">Add your own custom news items.</span>\n        </div>\n    </div>\n    <div class=\"col-12\">\n        <div class=\"row\">\n            <div class=\"col-8\">\n                <div class=\"form-group\">\n                    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" (input)=\"onValueChangeUpdateNews($event, 'add')\">{{newContent}}</textarea>\n                  </div>\n            </div>\n            <div class=\"col-2\">\n                <button type=\"button add-btn\" class=\"btn btn-info btn-sm add-btn\" (click)=\"addNews()\"><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i> Add more</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-12 mt-4 d-flex\" >\n        <button *ngIf=\"isSelected != -1\" type=\"button\" class=\"btn btn-secondary btn-sm\" data-bs-toggle=\"modal\" data-bs-target=\"#editModal\" (click)=\"editNewsFeed()\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Edit</button>\n        <button *ngIf=\"isSelected != -1\" type=\"button\" class=\"btn btn-danger btn-sm ml-1\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</button>\n        <button  type=\"button\" class=\"btn btn-primary btn-sm ml-1 news-save-btn\"><i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i> Save</button>\n    </div>\n    <div class=\"col-12 mt-1\">\n        <div class=\"row\">\n            <div class=\"p-3 news-wrap\" *ngFor=\"let newsItem of news; let i = index\" [ngClass]=\"{'news-active': isSelected === i, 'news-not-saved': newsItem.notSaved}\"(click)=\"call(i)\">\n                <div class=\"form-group\">\n                    <p class=\"preview-newsfeed\">{{newsItem.feed}}</p>\n                  </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"editModal\" data-bs-backdrop=\"static\" data-bs-keyboard=\"false\" tabindex=\"-1\" aria-labelledby=\"editModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"editModalLabel\">Edit News Feed</h5>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"form-group\">\n                <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" (input)=\"onValueChangeUpdateNews($event, 'update')\">{{editNewsFeedContent}}</textarea>\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary btn-sm\" data-bs-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary btn-sm\" >Update</button>\n        </div>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-admin/ahm-pricing/ahm-pricing.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-admin/ahm-pricing/ahm-pricing.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper-div p-3\" style=\"background-color: rgba(188, 187, 187, 0.37);\">\n    <p>ahm-pricing works!</p>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-about/ahm-about.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-about/ahm-about.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"about\" class=\"about\">\n    <div class=\"container\">\n\n      <div class=\"row\">\n        <div class=\"col-lg-6 order-1 order-lg-2\" data-aos=\"fade-left\">\n          <!-- <img src=\"https://firebasestorage.googleapis.com/v0/b/fir-project-9afa6.appspot.com/o/Almighty%20Algo%2Fstock-img.gif?alt=media&token=1997897f-2d9c-4e72-9689-8a5559db2b7e\" class=\"img-fluid story-img\" alt=\"\"> -->\n        </div>\n        <div class=\"col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content\" data-aos=\"fade-right\">\n          <h2>Our Success Story</h2>\n          <p class=\"fst-italic\">\n            Being Strategic, Our developer is sufficiently skilled to trick the software and have the necessary programming and well back testing capacity.\n\nWe aimed to furnish consistent access to market participants with secure and straightforward innovation solutions. We are capable with the trading software and programming of strategies. We execute our work with professional staff who  \n          </p>\n          <ul>\n            <li><i class=\"bi bi-check-circle\"></i> Automated Trading</li>\n            <li><i class=\"bi bi-check-circle\"></i> Strategy development</li>\n            <li><i class=\"bi bi-check-circle\"></i> MQL Development</li>\n          </ul>\n        </div>\n      </div>\n\n      \n\n    </div>\n  </section>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-contact/ahm-contact.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-contact/ahm-contact.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"contact\" class=\"contact\">\n    <div class=\"container\">\n\n      <div class=\"section-title\">\n        <span>Contact</span>\n        <h2>Contact</h2>\n      </div>\n\n      <div class=\"row\" data-aos=\"fade-up\">\n        <div class=\"col-lg-6\">\n          <div class=\"info-box mb-4\">\n            <i class=\"bx bx-map\"></i>\n            <h3>Our Address</h3>\n            <p>NEAR ASARFI HOSPITAL, DHANBAD, JH, 826001</p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"info-box  mb-4\">\n            <i class=\"bx bx-envelope\"></i>\n            <h3>Email Us</h3>\n            <p>support@almightyalgo.com</p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"info-box  mb-4\">\n            <i class=\"bx bx-phone-call\"></i>\n            <h3>Call Us</h3>\n            <p>+91 8797 074449</p>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"row\" data-aos=\"fade-up\">\n\n        <div class=\"col-lg-6 \">\n          <!-- <iframe class=\"mb-4 mb-lg-0\" src=\"https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" style=\"border:0; width: 100%; height: 384px;\" allowfullscreen></iframe> -->\n          <img class=\"img-contact\" src=\"https://5.imimg.com/data5/SELLER/Default/2022/9/OL/IV/WY/1600630/call-center-solutions-500x500.jpg\" style=\" height: 23rem; \"/>\n        </div>\n\n        <div class=\"col-lg-6\">\n          <form action=\"forms/contact.php\" method=\"post\" role=\"form\" class=\"php-email-form\">\n            <div class=\"row\">\n              <div class=\"col-md-6 form-group\">\n                <input type=\"text\" name=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Your Name\" required>\n              </div>\n              <div class=\"col-md-6 form-group mt-3 mt-md-0\">\n                <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"Your Email\" required>\n              </div>\n            </div>\n            <div class=\"form-group mt-3\">\n              <input type=\"text\" class=\"form-control\" name=\"subject\" id=\"subject\" placeholder=\"Subject\" required>\n            </div>\n            <div class=\"form-group mt-3\">\n              <textarea class=\"form-control\" name=\"message\" rows=\"5\" placeholder=\"Message\" required></textarea>\n            </div>\n            <div class=\"my-3\">\n              <div class=\"loading\">Loading</div>\n              <div class=\"error-message\"></div>\n              <div class=\"sent-message\">Your message has been sent. Thank you!</div>\n            </div>\n            <div class=\"text-center\"><button type=\"submit\">Send Message</button></div>\n          </form>\n        </div>\n\n      </div>\n\n    </div>\n  </section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-home.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-home.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n \n  <!-- ======= Top Bar ======= -->\n  <section id=\"topbar\" class=\"d-flex align-items-center\">\n    <div class=\"container d-flex justify-content-center justify-content-md-between\">\n      <div class=\"contact-info d-flex align-items-center\">\n        <i class=\"bi bi-envelope-fill\"></i><a href=\"mailto:support@almightyalgo.com\">support@almightyalgo.com</a>\n        <i class=\"bi bi-phone-fill phone-icon\"></i> +91 8797 074449\n      </div>\n      <div class=\"social-links d-none d-md-block\">\n        <a href=\"#\" class=\"twitter\"><i class=\"bi bi-twitter\"></i></a>\n        <a href=\"#\" class=\"facebook\"><i class=\"bi bi-facebook\"></i></a>\n        <a href=\"#\" class=\"instagram\"><i class=\"bi bi-instagram\"></i></a>\n        <a href=\"#\" class=\"linkedin\"><i class=\"bi bi-linkedin\"></i></a>\n      </div>\n    </div>\n  </section>\n\n  <!-- ======= Header ======= -->\n  <header id=\"header\" class=\"d-flex align-items-center\">\n    <div class=\"container d-flex align-items-center justify-content-between\">\n      <!-- <img class=\"head-logo\" src=\"https://firebasestorage.googleapis.com/v0/b/fir-project-9afa6.appspot.com/o/Almighty%20Algo%2FAALogo-removebg-preview.png?alt=media&token=d0f8459b-e641-4680-81ae-1e8f88c14184\"> -->\n      <!-- Uncomment below if you prefer to use an image logo -->\n      <!-- <a href=\"index.html\" class=\"logo\"><img src=\"assets/img/logo.png\" alt=\"\" class=\"img-fluid\"></a>-->\n\n      <nav id=\"navbar\" class=\"navbar\">\n        <ul>\n          <li><a class=\"nav-link scrollto active\" href=\"#home\">Home</a></li>\n          <li><a class=\"nav-link scrollto\" href=\"#about\">About Us</a></li>\n          <li><a class=\"nav-link scrollto\" href=\"#why-us\">Why Us</a></li>\n          <li><a class=\"nav-link scrollto\" href=\"#services\">Services</a></li>\n          <li><a class=\"nav-link scrollto\" href=\"#pricing\">Pricing</a></li>\n          \n          <!-- <li><a class=\"nav-link scrollto \" href=\"#portfolio\">Portfolio</a></li> -->\n          <!-- <li><a class=\"nav-link scrollto\" href=\"#team\">Team</a></li> -->\n          <!-- <li class=\"dropdown\"><a href=\"#\"><span>Drop Down</span> <i class=\"bi bi-chevron-down\"></i></a>\n            <ul>\n              <li><a href=\"#\">Drop Down 1</a></li>\n              <li class=\"dropdown\"><a href=\"#\"><span>Deep Drop Down</span> <i class=\"bi bi-chevron-right\"></i></a>\n                <ul>\n                  <li><a href=\"#\">Deep Drop Down 1</a></li>\n                  <li><a href=\"#\">Deep Drop Down 2</a></li>\n                  <li><a href=\"#\">Deep Drop Down 3</a></li>\n                  <li><a href=\"#\">Deep Drop Down 4</a></li>\n                  <li><a href=\"#\">Deep Drop Down 5</a></li>\n                </ul>\n              </li>\n              <li><a href=\"#\">Drop Down 2</a></li>\n              <li><a href=\"#\">Drop Down 3</a></li>\n              <li><a href=\"#\">Drop Down 4</a></li>\n            </ul>\n          </li> -->\n          <li><a class=\"nav-link scrollto\" href=\"#contact\">Contact Us</a></li>\n        </ul>\n        <i class=\"bi bi-list mobile-nav-toggle\"></i>\n      </nav><!-- .navbar -->\n\n    </div>\n  </header><!-- End Header -->\n\n  <!-- ======= Hero Section ======= -->\n  <section id=\"home\" class=\"d-flex align-items-center\">\n    <div class=\"container position-relative\" data-aos=\"fade-up\" data-aos-delay=\"500\">\n      <div id=\"carouselExampleInterval\" class=\"carousel slide carousel-fade\" data-bs-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\" data-bs-interval=\"100\">\n            <div class=\"item\">\n              <!-- <h5 class=\"line-head\">\n                <span class=\"line before\"></span>\n                10+ running projects\n                <span class=\"line  after\"></span>\n              </h5> -->\n              <h1 class=\"banner-head  mt-xs-20 mb-xs-30\" > 100% Automated Trading</h1>\n              <div class=\"banner-content\">\n                <p style=\"color:#fff; margin:0; padding-bottom:10px; padding-top:10px; \">Custom Algorithm Development</p>\n                <p style=\"color:#fff; margin:0; padding-bottom:10px; \"> Fully Automated API Based Trading System</p>\n                <p style=\"color:#fff; margin:0; padding-bottom:10px;\"> Custom Sentiment Indicators</p>\n                <p style=\"color:#fff; margin:0; padding-bottom:10px;\"> Software Deployed on AWS Servers</p>\n                <p style=\"color:#fff; margin:0; padding-bottom:10px;\"> Automated Trade Monitoring</p>\n                <p style=\"color:#fff; margin:0; padding-bottom:10px;\"> Excellent Risk Management</p>\n                <div class=\"dream-btn-group fadeInUp\" data-wow-delay=\"0.4s\" style=\"padding-top:30px;\">\n                  <a href=\"https://api.whatsapp.com/send?phone=919092645080&amp;text=Welcome to Start Algo\" class=\"btn dream-btn\"><i class=\"fa fa-whatsapp\" style=\"color:#25D366; font-size: 20px; margin-right: 10px; \" aria-hidden=\"true\"></i>Whatapp Us</a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"carousel-item\" data-bs-interval=\"2000\">\n            <div class=\"item\">\n              <!-- <h5 class=\"line-head\">\n                <span class=\"line before\"></span>\n                50+ IMPLEMENTATION\n                <span class=\"line  after\"></span>\n              </h5> -->\n              <h1 class=\"banner-head mt-xs-20 mb-xs-30\" style=\"padding-bottom:30px;width: 58%;\"> The Right People For Your Investment</h1>\n              <div class=\"banner-content\">\n                <div class=\"dream-btn-group fadeInUp\" data-wow-delay=\"0.4s\" style=\"padding-top:30px;\">\n                  <a href=\"https://api.whatsapp.com/send?phone=919821512513&amp;text=Welcome to Start Algo\" class=\"btn dream-btn\"><i class=\"fa fa-whatsapp\" style=\"color:#25D366; font-size: 20px; margin-right: 10px; \" aria-hidden=\"true\"></i>Whatapp Us</a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <div class=\"item\">\n              <!-- <h5 class=\"line-head\">\n                <span class=\"line before\"></span>\n                5430+ running projects\n                <span class=\"line  after\"></span>\n              </h5> -->\n              <h1 class=\"banner-head  mt-xs-20 mb-xs-30\"> 100% Automated Trading</h1>\n              <div class=\"banner-content\">\n                <p style=\"color:#fff; margin:0; padding-bottom:10px; padding-top:10px; \">Custom Algorithm Development</p>\n                <p style=\"color:#fff; margin:0; padding-bottom:10px; \"> Fully Automated API Based Trading System</p>\n                <p style=\"color:#fff; margin:0; padding-bottom:10px;\"> Custom Sentiment Indicators</p>\n                <p style=\"color:#fff; margin:0; padding-bottom:10px;\"> Software Deployed on AWS Servers</p>\n                <p style=\"color:#fff; margin:0; padding-bottom:10px;\"> Automated Trade Monitoring</p>\n                <p style=\"color:#fff; margin:0; padding-bottom:10px;\"> Excellent Risk Management</p>\n                <div class=\"dream-btn-group fadeInUp\" data-wow-delay=\"0.4s\" style=\"padding-top:30px;\">\n                  <a href=\"https://api.whatsapp.com/send?phone=919821512513&amp;text=Welcome to Start Algo\" class=\"btn dream-btn\"><i class=\"fa fa-whatsapp\" style=\"color:#25D366; font-size: 20px; margin-right: 10px; \" aria-hidden=\"true\"></i>Whatapp Us</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section><!-- End Hero -->\n\n  <main id=\"main\">\n\n    <!-- ======= About Section ======= -->\n    <app-ahm-about></app-ahm-about>\n    <!-- End About Section -->\n\n    <!-- ======= Why Us Section ======= -->\n    <app-ahm-why-us></app-ahm-why-us>\n    <!-- End Why Us Section -->\n\n    <!-- ======= Clients Section ======= -->\n    <section id=\"clients\" class=\"clients\">\n      <div class=\"container\" data-aos=\"zoom-in\">\n\n        <div class=\"row d-flex align-items-center\">\n\n          <div class=\"col-lg-4 col-md-4 col-12  d-flex flex-column flex-lg-row align-items-center\">\n            <div class=\"\">\n              <img src=\"assets/img/icon/icon1.png\" style=\"width: 75%;\" class=\"img-fluid\" alt=\"\">\n            </div>\n            <div class=\"contenet\">\n              <h5>Support Team</h5>\n              <p>Our Support Team Always Ready To Help You.</p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-4 col-12  d-flex flex-column flex-lg-row align-items-center\">\n            <div class=\"\">\n              <img src=\"assets/img/icon/icon2.png\" style=\"width: 75%;\" class=\"img-fluid\" alt=\"\">\n            </div>\n            <div class=\"contenet\">\n              <h5>Quality Services</h5>\n              <p>Fully Automated Mechanical Functionally.</p>\n            </div>\n          </div>\n\n          <div class=\"col-lg-4 col-md-4 col-12  d-flex flex-column flex-lg-row align-items-center\">\n            <div class=\"\">\n              <img src=\"assets/img/icon/icon3.png\" style=\"width: 75%;\" class=\"img-fluid\" alt=\"\">\n            </div>\n            <div class=\"contenet\">\n              <h5>Budget Friendly</h5>\n              <p>Trades executed at the best possible price</p>\n            </div>\n          </div>\n\n\n        </div>\n\n      </div>\n    </section><!-- End Clients Section -->\n\n    <!-- ======= Services Section ======= -->\n    <app-ahm-services></app-ahm-services>\n   <!-- End Services Section -->\n\n    <!-- ======= Cta Section ======= -->\n    <section id=\"cta\" class=\"cta\">\n      <div class=\"container\" data-aos=\"zoom-in\">\n\n        <div class=\"text-center\">\n          <h3>Call To Action</h3>\n          <p>Talk to the premium executives at the company for better pricing and planning. The premium executives will help you skyrocket your investment.</p>\n          <a class=\"cta-btn\" href=\"#\">Call To Action</a>\n        </div>\n\n      </div>\n    </section><!-- End Cta Section -->\n\n    <!-- ======= Portfolio Section ======= -->\n    <!-- <app-ahm-portfolio></app-ahm-portfolio> -->\n    <!-- End Portfolio Section -->\n\n    <!-- ======= Pricing Section ======= -->\n      <app-ahm-pricing></app-ahm-pricing>\n    <!-- End Pricing Section -->\n\n    <!-- ======= Team Section ======= -->\n      <!-- <app-ahm-team></app-ahm-team> -->\n    <!-- End Team Section -->\n\n    <!-- ======= Contact Section ======= -->\n      <app-ahm-contact></app-ahm-contact>\n    <!-- End Contact Section -->\n\n  </main><!-- End #main -->\n\n  <!-- ======= Footer ======= -->\n  <footer id=\"footer\">\n    <div class=\"footer-top\">\n      <div class=\"container\">\n        <div class=\"row\">\n\n          <div class=\"col-lg-4 col-md-6\">\n            <div class=\"footer-info\">\n              <h3>ALMIGHTY ALGO</h3>\n              <p>\n                NEAR ASARFI HOSPITAL, DHANBAD, <br>\n                JHARKHAND, 826001<br><br>\n                <strong>Phone:</strong> +91 8797 074449<br>\n                <strong>Email:</strong> info@almightyalgo.com<br>\n              </p>\n              <div class=\"social-links mt-3\">\n                <a href=\"#\" class=\"twitter\"><i class=\"bx bxl-twitter\"></i></a>\n                <a href=\"#\" class=\"facebook\"><i class=\"bx bxl-facebook\"></i></a>\n                <a href=\"#\" class=\"instagram\"><i class=\"bx bxl-instagram\"></i></a>\n                <a href=\"#\" class=\"google-plus\"><i class=\"bx bxl-skype\"></i></a>\n                <a href=\"#\" class=\"linkedin\"><i class=\"bx bxl-linkedin\"></i></a>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-2 col-md-6 footer-links\">\n            <h6>Useful Links</h6>\n            <ul>\n              <li><i class=\"bx bx-chevron-right\"></i> <a href=\"#home\">Home</a></li>\n              <li><i class=\"bx bx-chevron-right\"></i> <a href=\"#about\">About us</a></li>\n              <li><i class=\"bx bx-chevron-right\"></i> <a href=\"#services\">Services</a></li>\n              <li><i class=\"bx bx-chevron-right\"></i> <a href=\"#pricing\">Pricing</a></li>\n            </ul>\n          </div>\n          <!-- <div class=\"col-lg-2 col-md-6 footer-links\">\n            <h6>Our Services</h6>\n            <ul>\n              <li><i class=\"bx bx-chevron-right\"></i> <a href=\"#\">Web Design</a></li>\n              <li><i class=\"bx bx-chevron-right\"></i> <a href=\"#\">Web Development</a></li>\n              <li><i class=\"bx bx-chevron-right\"></i> <a href=\"#\">Product Management</a></li>\n              <li><i class=\"bx bx-chevron-right\"></i> <a href=\"#\">Marketing</a></li>\n              <li><i class=\"bx bx-chevron-right\"></i> <a href=\"#\">Graphic Design</a></li>\n            </ul>\n          </div> -->\n\n          <div class=\"col-lg-6 col-md-6 footer-newsletter\">\n            <h6>Our Newsletter</h6>\n            <div class=\"slider\">\n              <div class=\"slide-track\" >\n                <div class=\"wrapper\" *ngFor=\"let newsContent of newsContents\">\n                <div class=\"slide\">\n                  <span>{{newsContent}}</span>\n                </div>\n                <div class=\"vl\"></div>\n                </div>\n              </div>\n            </div>\n            <form action=\"\" method=\"post\">\n              <input type=\"email\" name=\"email\"><input type=\"submit\" value=\"Subscribe\">\n            </form>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container\">\n      <div class=\"copyright\">\n        &copy; Copyright <strong><span>ALMIGHTY ALGO</span></strong>. All Rights Reserved\n      </div>\n      <div class=\"credits\">\n        <!-- All the links in the footer should remain intact. -->\n        <!-- You can delete the links only if you purchased the pro version. -->\n        <!-- Licensing information: https://bootstrapmade.com/license/ -->\n        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/day-multipurpose-html-template-for-free/ -->\n        <!-- Designed by <a href=\"https://bootstrapmade.com/\">BootstrapMade</a> -->\n      </div>\n    </div>\n  </footer><!-- End Footer -->\n\n  <a href=\"#\" class=\"back-to-top d-flex align-items-center justify-content-center\"><i class=\"bi bi-arrow-up-short\"></i></a>\n  <div id=\"preloader\" *ngIf=\"isLoad\"></div>\n  \n\n  <!-- Vendor JS Files -->\n \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-portfolio/ahm-portfolio.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-portfolio/ahm-portfolio.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"portfolio\" class=\"portfolio\">\n    <div class=\"container\">\n\n      <div class=\"section-title\">\n        <span>Portfolio</span>\n        <h2>Portfolio</h2>\n        <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>\n      </div>\n\n      <div class=\"row\" data-aos=\"fade-up\">\n        <div class=\"col-lg-12 d-flex justify-content-center\">\n          <ul id=\"portfolio-flters\">\n            <li data-filter=\"*\" class=\"filter-active\">All</li>\n            <li data-filter=\".filter-app\">App</li>\n            <li data-filter=\".filter-card\">Card</li>\n            <li data-filter=\".filter-web\">Web</li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"row portfolio-container\" data-aos=\"fade-up\" data-aos-delay=\"150\">\n\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-app\">\n          <img src=\"assets/img/portfolio/portfolio-1.jpg\" class=\"img-fluid\" alt=\"\">\n          <div class=\"portfolio-info\">\n            <h4>App 1</h4>\n            <p>App</p>\n            <a href=\"assets/img/portfolio/portfolio-1.jpg\" data-gallery=\"portfolioGallery\" class=\"portfolio-lightbox preview-link\" title=\"App 1\"><i class=\"bx bx-plus\"></i></a>\n            <a href=\"portfolio-details.html\" class=\"details-link\" title=\"More Details\"><i class=\"bx bx-link\"></i></a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-web\">\n          <img src=\"assets/img/portfolio/portfolio-2.jpg\" class=\"img-fluid\" alt=\"\">\n          <div class=\"portfolio-info\">\n            <h4>Web 3</h4>\n            <p>Web</p>\n            <a href=\"assets/img/portfolio/portfolio-2.jpg\" data-gallery=\"portfolioGallery\" class=\"portfolio-lightbox preview-link\" title=\"Web 3\"><i class=\"bx bx-plus\"></i></a>\n            <a href=\"portfolio-details.html\" class=\"details-link\" title=\"More Details\"><i class=\"bx bx-link\"></i></a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-app\">\n          <img src=\"assets/img/portfolio/portfolio-3.jpg\" class=\"img-fluid\" alt=\"\">\n          <div class=\"portfolio-info\">\n            <h4>App 2</h4>\n            <p>App</p>\n            <a href=\"assets/img/portfolio/portfolio-3.jpg\" data-gallery=\"portfolioGallery\" class=\"portfolio-lightbox preview-link\" title=\"App 2\"><i class=\"bx bx-plus\"></i></a>\n            <a href=\"portfolio-details.html\" class=\"details-link\" title=\"More Details\"><i class=\"bx bx-link\"></i></a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-card\">\n          <img src=\"assets/img/portfolio/portfolio-4.jpg\" class=\"img-fluid\" alt=\"\">\n          <div class=\"portfolio-info\">\n            <h4>Card 2</h4>\n            <p>Card</p>\n            <a href=\"assets/img/portfolio/portfolio-4.jpg\" data-gallery=\"portfolioGallery\" class=\"portfolio-lightbox preview-link\" title=\"Card 2\"><i class=\"bx bx-plus\"></i></a>\n            <a href=\"portfolio-details.html\" class=\"details-link\" title=\"More Details\"><i class=\"bx bx-link\"></i></a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-web\">\n          <img src=\"assets/img/portfolio/portfolio-5.jpg\" class=\"img-fluid\" alt=\"\">\n          <div class=\"portfolio-info\">\n            <h4>Web 2</h4>\n            <p>Web</p>\n            <a href=\"assets/img/portfolio/portfolio-5.jpg\" data-gallery=\"portfolioGallery\" class=\"portfolio-lightbox preview-link\" title=\"Web 2\"><i class=\"bx bx-plus\"></i></a>\n            <a href=\"portfolio-details.html\" class=\"details-link\" title=\"More Details\"><i class=\"bx bx-link\"></i></a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-app\">\n          <img src=\"assets/img/portfolio/portfolio-6.jpg\" class=\"img-fluid\" alt=\"\">\n          <div class=\"portfolio-info\">\n            <h4>App 3</h4>\n            <p>App</p>\n            <a href=\"assets/img/portfolio/portfolio-6.jpg\" data-gallery=\"portfolioGallery\" class=\"portfolio-lightbox preview-link\" title=\"App 3\"><i class=\"bx bx-plus\"></i></a>\n            <a href=\"portfolio-details.html\" class=\"details-link\" title=\"More Details\"><i class=\"bx bx-link\"></i></a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-card\">\n          <img src=\"assets/img/portfolio/portfolio-7.jpg\" class=\"img-fluid\" alt=\"\">\n          <div class=\"portfolio-info\">\n            <h4>Card 1</h4>\n            <p>Card</p>\n            <a href=\"assets/img/portfolio/portfolio-7.jpg\" data-gallery=\"portfolioGallery\" class=\"portfolio-lightbox preview-link\" title=\"Card 1\"><i class=\"bx bx-plus\"></i></a>\n            <a href=\"portfolio-details.html\" class=\"details-link\" title=\"More Details\"><i class=\"bx bx-link\"></i></a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-card\">\n          <img src=\"assets/img/portfolio/portfolio-8.jpg\" class=\"img-fluid\" alt=\"\">\n          <div class=\"portfolio-info\">\n            <h4>Card 3</h4>\n            <p>Card</p>\n            <a href=\"assets/img/portfolio/portfolio-8.jpg\" data-gallery=\"portfolioGallery\" class=\"portfolio-lightbox preview-link\" title=\"Card 3\"><i class=\"bx bx-plus\"></i></a>\n            <a href=\"portfolio-details.html\" class=\"details-link\" title=\"More Details\"><i class=\"bx bx-link\"></i></a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 portfolio-item filter-web\">\n          <img src=\"assets/img/portfolio/portfolio-9.jpg\" class=\"img-fluid\" alt=\"\">\n          <div class=\"portfolio-info\">\n            <h4>Web 3</h4>\n            <p>Web</p>\n            <a href=\"assets/img/portfolio/portfolio-9.jpg\" data-gallery=\"portfolioGallery\" class=\"portfolio-lightbox preview-link\" title=\"Web 3\"><i class=\"bx bx-plus\"></i></a>\n            <a href=\"portfolio-details.html\" class=\"details-link\" title=\"More Details\"><i class=\"bx bx-link\"></i></a>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-pricing/ahm-pricing.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-pricing/ahm-pricing.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"pricing\" class=\"pricing\">\n    <div class=\"container\">\n\n      <div class=\"section-title\">\n        <span>Pricing</span>\n        <h2>Pricing</h2>\n        <!-- <p>Free equity investments and flat ₹20 intraday and F&O trades</p> -->\n      </div>\n\n      <div class=\"row\">\n\n        <div class=\"col-lg-3 col-md-6 pricing-wrapper\" data-aos=\"zoom-in\" data-aos-delay=\"150\" *ngFor=\"let price of prices\">\n          <div class=\"box\">\n            <h3 class=\"title\">{{price.title}}</h3>\n            <h4 class=\"amount\"><sup>&#x20B9; {{price.amount}}</sup></h4>\n            <!-- <h4><sup>&#x20B9;</sup>0<span> / month</span></h4> -->\n            <ul>\n              <li *ngFor=\"let feature of price.features\">{{feature}}</li>\n              \n            </ul>\n            <div class=\"btn-wrap\">\n              <a class=\"btn-buy\">Buy Now <i class=\"fa fa-shopping-cart cart-icon-hover\"></i></a>\n            </div>\n          </div>\n        </div>\n\n        <!-- <div class=\"col-lg-4 col-md-6 mt-4 mt-md-0\" data-aos=\"zoom-in\">\n          <div class=\"box featured\">\n            <h3>Business</h3>\n            <h4><sup>$</sup>19<span> / month</span></h4>\n            <ul>\n              <li>Aida dere</li>\n              <li>Nec feugiat nisl</li>\n              <li>Nulla at volutpat dola</li>\n              <li>Pharetra massa</li>\n              <li class=\"na\">Massa ultricies mi</li>\n            </ul>\n            <div class=\"btn-wrap\">\n              <a href=\"#\" class=\"btn-buy\">Buy Now</a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 mt-4 mt-lg-0\" data-aos=\"zoom-in\" data-aos-delay=\"150\">\n          <div class=\"box\">\n            <h3>Developer</h3>\n            <h4><sup>$</sup>29<span> / month</span></h4>\n            <ul>\n              <li>Aida dere</li>\n              <li>Nec feugiat nisl</li>\n              <li>Nulla at volutpat dola</li>\n              <li>Pharetra massa</li>\n              <li>Massa ultricies mi</li>\n            </ul>\n            <div class=\"btn-wrap\">\n              <a href=\"#\" class=\"btn-buy\">Buy Now</a>\n            </div>\n          </div>\n        </div> -->\n\n      </div>\n\n    </div>\n  </section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-services/ahm-services.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-services/ahm-services.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"services\" class=\"services\">\n    <div class=\"container\">\n\n      <div class=\"section-title\">\n        <span>Services</span>\n        <h2>Services</h2>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-6 d-flex align-items-stretch\" data-aos=\"fade-up\">\n          <div class=\"icon-box\">\n            <div class=\"icon\">\n              <img src=\"./assets/img/serviceIcon/algoTrading.png\" class=\"service-img\" />\n            </div>\n            <h4><a href=\"\">Algo Trading</a></h4>\n            <p>We will provide you the best platform for doing Auto Trading with your own \n              Intra day and positional based strategies which will save your money and time\n               Controlling your\n            </p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0\" data-aos=\"fade-up\" data-aos-delay=\"150\">\n          <div class=\"icon-box\">\n            <div class=\"icon\">\n              <img src=\"./assets/img/serviceIcon/autoBuySell.png\" class=\"service-img\" />\n            </div>\n            <h4><a href=\"\">Auto Buy Sell Signal</a></h4>\n            <p>You could know precisely when to purchase, hold or sell stocks or commodities. \n              We are providing 100% exact programmed software.Our items have been given Complete Artificial.</p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0\" data-aos=\"fade-up\" data-aos-delay=\"300\">\n          <div class=\"icon-box\">\n            <div class=\"icon\">\n              <img src=\"./assets/img/serviceIcon/mqlDev.png\" class=\"service-img\" />\n            </div>\n            <h4><a href=\"\">MQL Developments</a></h4>\n            <p>We use MetaTrader Software to make automated trading softwares and financial market indicators.If you are growing.</p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-3 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0\" data-aos=\"fade-up\" data-aos-delay=\"300\">\n          <div class=\"icon-box\">\n            <div class=\"icon\">\n              <img src=\"./assets/img/serviceIcon/apiBridge.png\" class=\"service-img\" />\n            </div>\n            <h4><a href=\"\">API Bridge</a></h4>\n            <p>API Bridge is a set of programming interface, pincode and Places is first programming interface. \n              APIBridge permits you to algo trade with various stages like MT4. </p>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-team/ahm-team.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-team/ahm-team.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"team\" class=\"team\">\n    <div class=\"container\">\n\n      <div class=\"section-title\">\n        <span>Team</span>\n        <h2>Team</h2>\n        <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-6 d-flex align-items-stretch\" data-aos=\"zoom-in\">\n          <div class=\"member\">\n            <img src=\"assets/img/team/team-1.jpg\" alt=\"\">\n            <h4>Walter White</h4>\n            <span>Chief Executive Officer</span>\n            <p>\n              Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut\n            </p>\n            <div class=\"social\">\n              <a href=\"\"><i class=\"bi bi-twitter\"></i></a>\n              <a href=\"\"><i class=\"bi bi-facebook\"></i></a>\n              <a href=\"\"><i class=\"bi bi-instagram\"></i></a>\n              <a href=\"\"><i class=\"bi bi-linkedin\"></i></a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 d-flex align-items-stretch\" data-aos=\"zoom-in\">\n          <div class=\"member\">\n            <img src=\"assets/img/team/team-2.jpg\" alt=\"\">\n            <h4>Sarah Jhinson</h4>\n            <span>Product Manager</span>\n            <p>\n              Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus\n            </p>\n            <div class=\"social\">\n              <a href=\"\"><i class=\"bi bi-twitter\"></i></a>\n              <a href=\"\"><i class=\"bi bi-facebook\"></i></a>\n              <a href=\"\"><i class=\"bi bi-instagram\"></i></a>\n              <a href=\"\"><i class=\"bi bi-linkedin\"></i></a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 col-md-6 d-flex align-items-stretch\" data-aos=\"zoom-in\">\n          <div class=\"member\">\n            <img src=\"assets/img/team/team-3.jpg\" alt=\"\">\n            <h4>William Anderson</h4>\n            <span>CTO</span>\n            <p>\n              Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara\n            </p>\n            <div class=\"social\">\n              <a href=\"\"><i class=\"bi bi-twitter\"></i></a>\n              <a href=\"\"><i class=\"bi bi-facebook\"></i></a>\n              <a href=\"\"><i class=\"bi bi-instagram\"></i></a>\n              <a href=\"\"><i class=\"bi bi-linkedin\"></i></a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-why-us/ahm-why-us.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-why-us/ahm-why-us.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"why-us\" class=\"why-us\">\n    <div class=\"container\">\n      <div class=\"section-title\">\n        <span>Why Us?</span>\n        <h2>Why Us?</h2>\n      </div>\n      <div class=\"row\">\n\n        <div class=\"col-lg-4\" data-aos=\"fade-up\">\n          <div class=\"box\">\n            <span>Automated Trading</span>\n            <p>We can turn exact passage, exit, and cash the rules into computerized exchanging frameworks that permit PCs to execute and screen the exchanges to perform back testing, Improving Order Entry Speed and Diversify Trading.</p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 mt-4 mt-lg-0\" data-aos=\"fade-up\" data-aos-delay=\"150\">\n          <div class=\"box\">\n            <span>Strategy Development</span>\n            <p><i class=\"bi bi-check-circle\"></i> Having strong goals and objectives will assist with knowing when you should be happy with the trading algo.</p>\n            <p><i class=\"bi bi-check-circle\"></i> Know about the market you want to trade.</p>\n            <p><i class=\"bi bi-check-circle\"></i> The yearly return and draw down you want.</p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 mt-4 mt-lg-0\" data-aos=\"fade-up\" data-aos-delay=\"300\">\n          <div class=\"box\">\n            <span>Auto Buy / Sell signals</span>\n            <p>Lets trade quicker and Profitable, Get auto buy and sell signals with best entry and exit levels without any delay. On the basis of moving averages.\n\n\n            </p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 mt-4 mt-lg-3\" data-aos=\"fade-up\" data-aos-delay=\"150\">\n          <div class=\"box\">\n            <span>MQL Development</span>\n            <p>We use MetaTrader Software to make automated trading softwares and financial market indicators.</p>\n            <p><i class=\"bi bi-check-circle\"></i> Create a custom technical indicator.</p>\n            <p><i class=\"bi bi-check-circle\"></i> Get high quality leads with MQL.</p>\n            <p><i class=\"bi bi-check-circle\"></i> Tweak an existing indicator.</p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-4 mt-4 mt-lg-3\" data-aos=\"fade-up\" data-aos-delay=\"300\">\n          <div class=\"box\">\n            <span>API Bridge</span>\n            <p>API Bridge is a set of programming interface, pincode and Places is first programming interface right now. APIBridge permits you to algo trade with various stages like Amibroker, MT4, TradingView, Python, Excel, NinjaTrader and so on.</p>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  </section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-login/ahm-login.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-login/ahm-login.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper-div\">\n    <div class=\"d-flex justify-content-center h-100 user-card-wrapper\">\n        <div class=\"user_card demo\">\n            <div class=\"d-flex justify-content-center\">\n                <div class=\"brand_logo_container d-flex\">\n                    <!-- <img src=\"https://firebasestorage.googleapis.com/v0/b/fir-project-9afa6.appspot.com/o/Almighty%20Algo%2Ffavicon2.png?alt=media&token=1e1327f6-34bc-471d-abd8-d3ef0f995a13\" class=\"brand_logo\" alt=\"Logo\"> -->\n                </div>\n            </div>\n            <div class=\"d-flex justify-content-center form_container\">\n                <form>\n                    <div class=\"input-group mb-3\">\n                        <div class=\"input-group-append\">\n                            <span class=\"input-group-text\"><i class=\"fa fa-user\"></i></span>\n                        </div>\n                        <input type=\"text\" name=\"\" class=\"form-control input_user\" value=\"\" placeholder=\"Username\">\n                    </div>\n                    <div class=\"input-group mb-2\">\n                        <div class=\"input-group-append\">\n                            <span class=\"input-group-text\"><i class=\"fa fa-key\"></i></span>\n                        </div>\n                        <input type=\"password\" name=\"\" class=\"form-control input_pass\" value=\"\" placeholder=\"Password\">\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"custom-control custom-checkbox\">\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlInline\">\n                            <label class=\"custom-control-label\" for=\"customControlInline\">Remember me</label>\n                        </div>\n                    </div>\n                        <div class=\"d-flex justify-content-center mt-3 login_container\">\n                 <button type=\"button\" name=\"button\" class=\"btn login_btn\" (click)=\"userLogin()\">Login</button>\n               </div>\n                </form>\n            </div>\n    \n            <!-- <div class=\"mt-4\">\n                <div class=\"d-flex justify-content-center links\">\n                    Don't have an account? <a href=\"#\" class=\"ml-2\">Sign Up</a>\n                </div>\n                <div class=\"d-flex justify-content-center links\">\n                    <a href=\"#\">Forgot your password?</a>\n                </div>\n            </div> -->\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_ahm_admin_ahm_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ahm-admin/ahm-admin-routing.module */ "./src/app/components/ahm-admin/ahm-admin-routing.module.ts");
/* harmony import */ var _components_ahm_admin_ahm_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ahm-admin/ahm-admin.component */ "./src/app/components/ahm-admin/ahm-admin.component.ts");
/* harmony import */ var _components_ahm_home_ahm_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ahm-home/ahm-home.component */ "./src/app/components/ahm-home/ahm-home.component.ts");
/* harmony import */ var _components_ahm_login_ahm_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ahm-login/ahm-login.component */ "./src/app/components/ahm-login/ahm-login.component.ts");







const routes = [
    { path: '', component: _components_ahm_home_ahm_home_component__WEBPACK_IMPORTED_MODULE_5__["AhmHomeComponent"] },
    { path: 'login', component: _components_ahm_login_ahm_login_component__WEBPACK_IMPORTED_MODULE_6__["AhmLoginComponent"] },
    { path: 'admin', component: _components_ahm_admin_ahm_admin_component__WEBPACK_IMPORTED_MODULE_4__["AhmAdminComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _components_ahm_admin_ahm_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AhmAdminRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.navbar-mobile {\n  position: fixed;\n  overflow: hidden;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.9);\n  transition: 0.3s;\n  z-index: 999;\n}\n.bi-x::before {\n  content: \"\";\n}\n.bi::before, [class^=bi-]::before, [class*=\" bi-\"]::before {\n  display: inline-block;\n  font-family: bootstrap-icons !important;\n  font-style: normal;\n  font-weight: normal !important;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  vertical-align: -0.125em;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\n.vl {\n  border-left: 1px solid #cdea9a;\n  height: 80px;\n  margin-top: 10px;\n}\n.wrapper {\n  display: flex;\n}\n@-webkit-keyframes scroll {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(calc(-250px * 10));\n  }\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(calc(-250px * 10));\n  }\n}\n.slider {\n  background: #191919;\n  border-bottom: 2px solid #b41111;\n  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);\n  height: 100px;\n  overflow: hidden;\n  position: relative;\n}\n.slider::before, .slider::after {\n  content: \"\";\n  height: 100px;\n  position: absolute;\n  width: 200px;\n  z-index: 2;\n}\n.slider::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.slider::before {\n  left: 0;\n  top: 0;\n}\n.slider .slide-track {\n  -webkit-animation: scroll 40s linear infinite;\n          animation: scroll 40s linear infinite;\n  display: flex;\n  width: calc(250px * 14);\n}\n.slider .slide {\n  height: 100px;\n  width: 250px;\n  padding: 5px;\n}\n.slider .slide span {\n  font-size: 14px;\n  color: #fff;\n  font-family: \"Raleway\", sans-serif;\n}\n/* ....................................\n4. Slider\n.......................................*/\n/*****Slider type 1*****/\n.slider-area {\n  background-size: cover;\n  min-height: 730px;\n}\n.slide-div {\n  padding-top: 273px;\n  position: relative;\n}\n.line-head {\n  font-size: 15px;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  font-weight: 500;\n  position: relative;\n  display: inline-block;\n  line-height: 13px;\n  margin-bottom: 50px;\n  color: #38b7ff;\n  margin-left: 15%;\n}\n.line-head .line {\n  position: absolute;\n  width: 100px;\n  height: 1px;\n}\n.line-head .line.before {\n  left: -119px;\n  top: 50%;\n}\n.line-head .line.after {\n  right: -119px;\n  top: 50%;\n}\n.banner-head {\n  font-size: 46px;\n  color: #fff;\n  line-height: 66px;\n  font-weight: 700;\n}\n.slide-div .owl-nav button {\n  position: absolute;\n  top: 43%;\n}\n.slide-div .owl-nav button i {\n  font-size: 24px;\n  opacity: 0.5;\n  transition: all 0.4s;\n  color: #fff;\n}\n.slide-div .owl-nav button:hover i {\n  opacity: 1;\n  transition: all 0.4s;\n}\n.slide-div .owl-nav .owl-prev {\n  left: -190px;\n}\n.slide-div .owl-nav .owl-next {\n  right: -190px;\n}\n.slide-div .owl-dots .owl-dot {\n  height: 2px;\n  width: 25px;\n  margin-top: -80px;\n  margin-right: 8px;\n  margin-left: 8px;\n  opacity: 0.3;\n  background-color: #fff;\n}\n.slide-div .owl-dots .owl-dot.active {\n  opacity: 1;\n}\n.slide-div .owl-dots {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: -100px;\n  line-height: 0;\n}\n/*****Slider type 2*****/\n.silder-img {\n  background-size: cover;\n  min-height: 694px;\n}\n.slider-content {\n  padding-top: 178px;\n}\n.banner-head-2 {\n  font-size: 48px;\n  color: #fff;\n  line-height: 1.4;\n}\n.dots-slider .owl-dot {\n  height: 2px;\n  width: 25px;\n  margin: 0px;\n  margin-right: 15px;\n  opacity: 0.3;\n  background-color: #fff;\n  border: none;\n}\n.dots-slider {\n  line-height: 0;\n}\n.dots-slider .owl-dot.active {\n  opacity: 1;\n}\n.slider-btn {\n  width: 90px;\n  height: 50px;\n  border: 1px solid #fff;\n  color: #fff;\n}\n.slider-control {\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 60px;\n}\n.slider-btn:hover {\n  background-color: #fff;\n}\n.slide-social {\n  width: 52px;\n  position: relative;\n  text-align: right;\n  float: right;\n}\n.slide-social-outer {\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n.slide-social ul > li {\n  display: block;\n}\n.slide-social li a {\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n  display: inline-block;\n  text-align: center;\n  margin-bottom: 15px;\n  font-size: 14px;\n  border-radius: 50%;\n}\n.slide-social li {\n  margin-bottom: 15px;\n}\n/*****Slider type 3*****/\n.slider-content-3 {\n  padding-top: 229px;\n}\n.slider-control.type-3 {\n  bottom: 25px;\n}\n.slider-control.type-3 .dots-slider .owl-dot {\n  opacity: 0.3;\n}\n.slider-control.type-3 .dots-slider .owl-dot.active {\n  opacity: 1;\n}\n.bg-green, .btn-round, .shop-icon .count, .main-menu li:after, .line-head .line, .blob.green, .btn-square, .slide-div .owl-dots .owl-dot.active, .callback-area[data-overlay]::before, .service-box:hover, .service-box:hover .service-icon-bg, .plus-btn, .arrow-navigation .nav-slide, .btn-round-blue:hover, .price-each.active, .price-tabs .nav-link.active, .testimonial-slider .arrow-btn:hover, .btn-square-green, .btn-square-white:hover, .each-blog:hover .blog-date, .contact-area:before, .social-links li a:hover, .links-list a:before, .scroll-btn, .dots-slider .owl-dot.active, .slide-social li a:hover, .team-green-head[data-overlay]::before, .career-box[data-overlay]::before, .mobile-menu-2.mean-container .meanmenu-reveal, .btn-square-border:hover, .slider-control.type-3 .dots-slider .owl-dot.active, .service-list-3:hover, .team-detail-3 h5:before, .each-team-3:hover .team-detail-3[data-overlay]::before, .btn-square-blue:hover, .btn-blue:hover, .price-each-2.active, .testimonial-3-slide .owl-dot.active span, .fancy-2:after, .right-box-head h4:after, .social-profile-box:hover, .block-quote-by:before, .tag-link:hover, .categories li a span, .slider-type-blog.owl-carousel .owl-nav button.owl-next, .slider-type-blog.owl-carousel .owl-nav button.owl-prev, .pagination-type1 ul li a:hover, .pagination-type1 ul li.active a, .portfolio-overlay:before, .line-right:after, .experience li:after {\n  background: red;\n}\n.bg-green, .btn-round, .shop-icon .count, .main-menu li:after, .line-head .line, .blob.green, .btn-square, .slide-div .owl-dots .owl-dot.active, .callback-area[data-overlay]::before, .service-box:hover, .service-box:hover .service-icon-bg, .plus-btn, .arrow-navigation .nav-slide, .btn-round-blue:hover, .price-each.active, .price-tabs .nav-link.active, .testimonial-slider .arrow-btn:hover, .btn-square-green, .btn-square-white:hover, .each-blog:hover .blog-date, .contact-area:before, .social-links li a:hover, .links-list a:before, .scroll-btn, .dots-slider .owl-dot.active, .slide-social li a:hover, .team-green-head[data-overlay]::before, .career-box[data-overlay]::before, .mobile-menu-2.mean-container .meanmenu-reveal, .btn-square-border:hover, .slider-control.type-3 .dots-slider .owl-dot.active, .service-list-3:hover, .team-detail-3 h5:before, .each-team-3:hover .team-detail-3[data-overlay]::before, .btn-square-blue:hover, .btn-blue:hover, .price-each-2.active, .testimonial-3-slide .owl-dot.active span, .fancy-2:after, .right-box-head h4:after, .social-profile-box:hover, .block-quote-by:before, .tag-link:hover, .categories li a span, .slider-type-blog.owl-carousel .owl-nav button.owl-next, .slider-type-blog.owl-carousel .owl-nav button.owl-prev, .pagination-type1 ul li a:hover, .pagination-type1 ul li.active a, .portfolio-overlay:before, .line-right:after, .experience li:after {\n  background: red;\n}\n.dream-btn-group a {\n  color: white;\n  background: #656565;\n}\n.dream-btn-group :hover {\n  background: #38b7ff !important;\n}\n.outer-dom {\n  display: flex;\n}\n.contenet h5 {\n  color: #38b7ff !important;\n  left: 0 !important;\n  display: flex !important;\n}\n.loading {\n  position: fixed;\n  float: left;\n  top: 50%;\n  left: 50%;\n  height: 120px;\n  padding: 0px;\n  width: 160px;\n  margin-top: -50px;\n  margin-left: -70px;\n  padding: 10px;\n  box-sizing: border-box;\n}\n@-webkit-keyframes loading {\n  0% {\n    background-color: #cd0a00;\n  }\n  30% {\n    background-color: #fa8a00;\n  }\n  50% {\n    height: 100px;\n    margin-top: 0px;\n  }\n  80% {\n    background-color: #91d700;\n  }\n  100% {\n    background-color: #cd0a00;\n  }\n}\n@keyframes loading {\n  0% {\n    background-color: #cd0a00;\n  }\n  30% {\n    background-color: #fa8a00;\n  }\n  50% {\n    height: 100px;\n    margin-top: 0px;\n  }\n  80% {\n    background-color: #91d700;\n  }\n  100% {\n    background-color: #cd0a00;\n  }\n}\n.loading .loading-1 {\n  height: 10px;\n  width: 30px;\n  background-color: #fff;\n  display: inline-block;\n  margin-top: 90px;\n  -webkit-animation: loading 2.5s infinite;\n  animation: loading 2.5s infinite;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  -webkit-animation-delay: 0.25s;\n  animation-delay: 0.25s;\n}\n.loading .loading-2 {\n  height: 10px;\n  width: 30px;\n  background-color: #fff;\n  display: inline-block;\n  margin-top: 90px;\n  -webkit-animation: loading 2.5s infinite;\n  animation: loading 2.5s infinite;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  -webkit-animation-delay: 0.5s;\n  animation-delay: 0.5s;\n}\n.loading .loading-3 {\n  height: 10px;\n  width: 30px;\n  background-color: #fff;\n  display: inline-block;\n  margin-top: 90px;\n  -webkit-animation: loading 2.5s infinite;\n  animation: loading 2.5s infinite;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  -webkit-animation-delay: 0.75s;\n  animation-delay: 0.75s;\n}\n.loading .loading-4 {\n  height: 10px;\n  width: 30px;\n  background-color: #fff;\n  display: inline-block;\n  margin-top: 90px;\n  -webkit-animation: loading 2.5s infinite;\n  animation: loading 2.5s infinite;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  -webkit-animation-delay: 1s;\n  animation-delay: 1s;\n}\n.loading .loading-5 {\n  height: 10px;\n  width: 30px;\n  background-color: #fff;\n  display: inline-block;\n  margin-top: 90px;\n  -webkit-animation: loading 2.5s infinite;\n  animation: loading 2.5s infinite;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  -webkit-animation-delay: 1.25s;\n  animation-delay: 1.25s;\n}\n.loading .loading-6 {\n  height: 10px;\n  width: 30px;\n  background-color: #fff;\n  display: inline-block;\n  margin-top: 90px;\n  -webkit-animation: loading 2.5s infinite;\n  animation: loading 2.5s infinite;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  -webkit-animation-delay: 1.5s;\n  animation-delay: 1.5s;\n}\n.loading .loading-7 {\n  height: 10px;\n  width: 30px;\n  background-color: #fff;\n  display: inline-block;\n  margin-top: 90px;\n  -webkit-animation: loading 2.5s infinite;\n  animation: loading 2.5s infinite;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  -webkit-animation-delay: 1.75s;\n  animation-delay: 1.75s;\n}\n.loading .loading-8 {\n  height: 10px;\n  width: 30px;\n  background-color: #fff;\n  display: inline-block;\n  margin-top: 90px;\n  -webkit-animation: loading 2.5s infinite;\n  animation: loading 2.5s infinite;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  -webkit-animation-delay: 2s;\n  animation-delay: 2s;\n}\n.loading .loading-9 {\n  height: 10px;\n  width: 30px;\n  background-color: #fff;\n  display: inline-block;\n  margin-top: 90px;\n  -webkit-animation: loading 2.5s infinite;\n  animation: loading 2.5s infinite;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  -webkit-animation-delay: 2.25s;\n  animation-delay: 2.25s;\n}\n.loading .loading-10 {\n  height: 10px;\n  width: 30px;\n  background-color: #fff;\n  display: inline-block;\n  margin-top: 90px;\n  -webkit-animation: loading 2.5s infinite;\n  animation: loading 2.5s infinite;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  -webkit-animation-delay: 2.5s;\n  animation-delay: 2.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL25pdGlzaC9Eb2N1bWVudHMvQW5ndWxhci1Qcm9qZWN0cy9BSE12Mi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QURFSjtBQ0NBO0VBQ0ksWUFBQTtBREVKO0FDQUE7RUFDSSxxQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FER0o7QUNEQTtFQUNJLHNCQUFBO0FESUo7QUNFQTtFQUNDLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEQ0Q7QUNFRTtFQUNELGFBQUE7QURDRDtBQ0NBO0VBQ0M7SUFBSyx3QkFBQTtFREdKO0VDRkQ7SUFBTyx3Q0FBQTtFREtOO0FBQ0Y7QUNSQTtFQUNDO0lBQUssd0JBQUE7RURHSjtFQ0ZEO0lBQU8sd0NBQUE7RURLTjtBQUNGO0FDRkE7RUFDQyxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaURBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRElEO0FDRkM7RUFFQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QURHRjtBQ0FDO0VBQ0MsUUFBQTtFQUNBLE1BQUE7RUFDQSwwQkFBQTtBREVGO0FDQ0M7RUFDQyxPQUFBO0VBQ0EsTUFBQTtBRENGO0FDRUM7RUFDQyw2Q0FBQTtVQUFBLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FEQUY7QUNHQztFQUNDLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRERGO0FDRUU7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0FEQUg7QUNLQTs7d0NBQUE7QUFLQSx3QkFBQTtBQUVBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtBRExKO0FDUUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FETEo7QUNRQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNILGNBQUE7RUFDQSxnQkFBQTtBRExEO0FDUUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FETEo7QUNRQTtFQUNJLFlBQUE7RUFDQSxRQUFBO0FETEo7QUNRQTtFQUNJLGFBQUE7RUFDQSxRQUFBO0FETEo7QUNRQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRExKO0FDUUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QURMSjtBQ1FBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFFQSxvQkFBQTtFQUNBLFdBQUE7QURMSjtBQ1FBO0VBQ0ksVUFBQTtFQUVBLG9CQUFBO0FETEo7QUNRQTtFQUNJLFlBQUE7QURMSjtBQ1FBO0VBQ0ksYUFBQTtBRExKO0FDUUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBRExKO0FDUUE7RUFDSSxVQUFBO0FETEo7QUNRQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUVBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QURMSjtBQ1NBLHdCQUFBO0FBRUE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0FEUEo7QUNVQTtFQUNJLGtCQUFBO0FEUEo7QUNVQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QURQSjtBQ1VBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FEUEo7QUNVQTtFQUNJLGNBQUE7QURQSjtBQ1VBO0VBQ0ksVUFBQTtBRFBKO0FDVUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBRFBKO0FDVUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtBRFBKO0FDVUE7RUFDSSxzQkFBQTtBRFBKO0FDVUE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QURQSjtBQ1VBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBRFBKO0FDVUE7RUFDSSxjQUFBO0FEUEo7QUNVQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QURQSjtBQ1VBO0VBQ0ksbUJBQUE7QURQSjtBQ1dBLHdCQUFBO0FBRUE7RUFDSSxrQkFBQTtBRFRKO0FDWUE7RUFDSSxZQUFBO0FEVEo7QUNZQTtFQUNJLFlBQUE7QURUSjtBQ1lBO0VBQ0ksVUFBQTtBRFRKO0FDYUE7RUFDQyxlQUFBO0FEVkQ7QUNZQTtFQUNDLGVBQUE7QURURDtBQ2NDO0VBQ0MsWUFBQTtFQUNHLG1CQUFBO0FEWEw7QUNZRTtFQUNBLDhCQUFBO0FEVkY7QUNjQTtFQUNJLGFBQUE7QURYSjtBQ2FBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FEVko7QUNhQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FEVko7QUNZRTtFQUNFO0lBQUsseUJBQUE7RURSUDtFQ1VFO0lBQU0seUJBQUE7RURQUjtFQ1FFO0lBQU0sYUFBQTtJQUFlLGVBQUE7RURKdkI7RUNLRTtJQUFNLHlCQUFBO0VERlI7RUNHRTtJQUFPLHlCQUFBO0VEQVQ7QUFDRjtBQ1BFO0VBQ0U7SUFBSyx5QkFBQTtFRFJQO0VDVUU7SUFBTSx5QkFBQTtFRFBSO0VDUUU7SUFBTSxhQUFBO0lBQWUsZUFBQTtFREp2QjtFQ0tFO0lBQU0seUJBQUE7RURGUjtFQ0dFO0lBQU8seUJBQUE7RURBVDtBQUNGO0FDaUJVO0VBZk4sWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUdBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUt5Qyw4QkFBQTtFQUFpQyxzQkFBQTtBREY5RTtBQ0VVO0VBZk4sWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUdBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUt5Qyw2QkFBQTtFQUFpQyxxQkFBQTtBRGE5RTtBQ2JVO0VBZk4sWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUdBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUt5Qyw4QkFBQTtFQUFpQyxzQkFBQTtBRDRCOUU7QUM1QlU7RUFmTixZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBR0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBS3lDLDJCQUFBO0VBQWlDLG1CQUFBO0FEMkM5RTtBQzNDVTtFQWZOLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFHQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFLeUMsOEJBQUE7RUFBaUMsc0JBQUE7QUQwRDlFO0FDMURVO0VBZk4sWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUdBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUt5Qyw2QkFBQTtFQUFpQyxxQkFBQTtBRHlFOUU7QUN6RVU7RUFmTixZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBR0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBS3lDLDhCQUFBO0VBQWlDLHNCQUFBO0FEd0Y5RTtBQ3hGVTtFQWZOLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFHQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFLeUMsMkJBQUE7RUFBaUMsbUJBQUE7QUR1RzlFO0FDdkdVO0VBZk4sWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUdBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUt5Qyw4QkFBQTtFQUFpQyxzQkFBQTtBRHNIOUU7QUN0SFU7RUFmTixZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBR0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBS3lDLDZCQUFBO0VBQWlDLHFCQUFBO0FEcUk5RSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5uYXZiYXItbW9iaWxlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgei1pbmRleDogOTk5O1xufVxuXG4uYmkteDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvmKpcIjtcbn1cblxuLmJpOjpiZWZvcmUsIFtjbGFzc149YmktXTo6YmVmb3JlLCBbY2xhc3MqPVwiIGJpLVwiXTo6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LWZhbWlseTogYm9vdHN0cmFwLWljb25zICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB2ZXJ0aWNhbC1hbGlnbjogLTAuMTI1ZW07XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4qLCA6OmFmdGVyLCA6OmJlZm9yZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi52bCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NkZWE5YTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbkBrZXlmcmFtZXMgc2Nyb2xsIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygtMjUwcHggKiAxMCkpO1xuICB9XG59XG4uc2xpZGVyIHtcbiAgYmFja2dyb3VuZDogIzE5MTkxOTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiNDExMTE7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIGhlaWdodDogMTAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zbGlkZXI6OmJlZm9yZSwgLnNsaWRlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMDBweDtcbiAgei1pbmRleDogMjtcbn1cbi5zbGlkZXI6OmFmdGVyIHtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZyk7XG59XG4uc2xpZGVyOjpiZWZvcmUge1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG4uc2xpZGVyIC5zbGlkZS10cmFjayB7XG4gIGFuaW1hdGlvbjogc2Nyb2xsIDQwcyBsaW5lYXIgaW5maW5pdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBjYWxjKDI1MHB4ICogMTQpO1xufVxuLnNsaWRlciAuc2xpZGUge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5zbGlkZXIgLnNsaWRlIHNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG59XG5cbi8qIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuNC4gU2xpZGVyXG4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4qL1xuLyoqKioqU2xpZGVyIHR5cGUgMSoqKioqL1xuLnNsaWRlci1hcmVhIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLWhlaWdodDogNzMwcHg7XG59XG5cbi5zbGlkZS1kaXYge1xuICBwYWRkaW5nLXRvcDogMjczcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxpbmUtaGVhZCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGNvbG9yOiAjMzhiN2ZmO1xuICBtYXJnaW4tbGVmdDogMTUlO1xufVxuXG4ubGluZS1oZWFkIC5saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMXB4O1xufVxuXG4ubGluZS1oZWFkIC5saW5lLmJlZm9yZSB7XG4gIGxlZnQ6IC0xMTlweDtcbiAgdG9wOiA1MCU7XG59XG5cbi5saW5lLWhlYWQgLmxpbmUuYWZ0ZXIge1xuICByaWdodDogLTExOXB4O1xuICB0b3A6IDUwJTtcbn1cblxuLmJhbm5lci1oZWFkIHtcbiAgZm9udC1zaXplOiA0NnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDY2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zbGlkZS1kaXYgLm93bC1uYXYgYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQzJTtcbn1cblxuLnNsaWRlLWRpdiAub3dsLW5hdiBidXR0b24gaSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgb3BhY2l0eTogMC41O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zbGlkZS1kaXYgLm93bC1uYXYgYnV0dG9uOmhvdmVyIGkge1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuLnNsaWRlLWRpdiAub3dsLW5hdiAub3dsLXByZXYge1xuICBsZWZ0OiAtMTkwcHg7XG59XG5cbi5zbGlkZS1kaXYgLm93bC1uYXYgLm93bC1uZXh0IHtcbiAgcmlnaHQ6IC0xOTBweDtcbn1cblxuLnNsaWRlLWRpdiAub3dsLWRvdHMgLm93bC1kb3Qge1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDI1cHg7XG4gIG1hcmdpbi10b3A6IC04MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgb3BhY2l0eTogMC4zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uc2xpZGUtZGl2IC5vd2wtZG90cyAub3dsLWRvdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2xpZGUtZGl2IC5vd2wtZG90cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBib3R0b206IC0xMDBweDtcbiAgbGluZS1oZWlnaHQ6IDA7XG59XG5cbi8qKioqKlNsaWRlciB0eXBlIDIqKioqKi9cbi5zaWxkZXItaW1nIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLWhlaWdodDogNjk0cHg7XG59XG5cbi5zbGlkZXItY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAxNzhweDtcbn1cblxuLmJhbm5lci1oZWFkLTIge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4uZG90cy1zbGlkZXIgLm93bC1kb3Qge1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDI1cHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG9wYWNpdHk6IDAuMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZG90cy1zbGlkZXIge1xuICBsaW5lLWhlaWdodDogMDtcbn1cblxuLmRvdHMtc2xpZGVyIC5vd2wtZG90LmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zbGlkZXItYnRuIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zbGlkZXItY29udHJvbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogNjBweDtcbn1cblxuLnNsaWRlci1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uc2xpZGUtc29jaWFsIHtcbiAgd2lkdGg6IDUycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnNsaWRlLXNvY2lhbC1vdXRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5zbGlkZS1zb2NpYWwgdWwgPiBsaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2xpZGUtc29jaWFsIGxpIGEge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc2xpZGUtc29jaWFsIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLyoqKioqU2xpZGVyIHR5cGUgMyoqKioqL1xuLnNsaWRlci1jb250ZW50LTMge1xuICBwYWRkaW5nLXRvcDogMjI5cHg7XG59XG5cbi5zbGlkZXItY29udHJvbC50eXBlLTMge1xuICBib3R0b206IDI1cHg7XG59XG5cbi5zbGlkZXItY29udHJvbC50eXBlLTMgLmRvdHMtc2xpZGVyIC5vd2wtZG90IHtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4uc2xpZGVyLWNvbnRyb2wudHlwZS0zIC5kb3RzLXNsaWRlciAub3dsLWRvdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uYmctZ3JlZW4sIC5idG4tcm91bmQsIC5zaG9wLWljb24gLmNvdW50LCAubWFpbi1tZW51IGxpOmFmdGVyLCAubGluZS1oZWFkIC5saW5lLCAuYmxvYi5ncmVlbiwgLmJ0bi1zcXVhcmUsIC5zbGlkZS1kaXYgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSwgLmNhbGxiYWNrLWFyZWFbZGF0YS1vdmVybGF5XTo6YmVmb3JlLCAuc2VydmljZS1ib3g6aG92ZXIsIC5zZXJ2aWNlLWJveDpob3ZlciAuc2VydmljZS1pY29uLWJnLCAucGx1cy1idG4sIC5hcnJvdy1uYXZpZ2F0aW9uIC5uYXYtc2xpZGUsIC5idG4tcm91bmQtYmx1ZTpob3ZlciwgLnByaWNlLWVhY2guYWN0aXZlLCAucHJpY2UtdGFicyAubmF2LWxpbmsuYWN0aXZlLCAudGVzdGltb25pYWwtc2xpZGVyIC5hcnJvdy1idG46aG92ZXIsIC5idG4tc3F1YXJlLWdyZWVuLCAuYnRuLXNxdWFyZS13aGl0ZTpob3ZlciwgLmVhY2gtYmxvZzpob3ZlciAuYmxvZy1kYXRlLCAuY29udGFjdC1hcmVhOmJlZm9yZSwgLnNvY2lhbC1saW5rcyBsaSBhOmhvdmVyLCAubGlua3MtbGlzdCBhOmJlZm9yZSwgLnNjcm9sbC1idG4sIC5kb3RzLXNsaWRlciAub3dsLWRvdC5hY3RpdmUsIC5zbGlkZS1zb2NpYWwgbGkgYTpob3ZlciwgLnRlYW0tZ3JlZW4taGVhZFtkYXRhLW92ZXJsYXldOjpiZWZvcmUsIC5jYXJlZXItYm94W2RhdGEtb3ZlcmxheV06OmJlZm9yZSwgLm1vYmlsZS1tZW51LTIubWVhbi1jb250YWluZXIgLm1lYW5tZW51LXJldmVhbCwgLmJ0bi1zcXVhcmUtYm9yZGVyOmhvdmVyLCAuc2xpZGVyLWNvbnRyb2wudHlwZS0zIC5kb3RzLXNsaWRlciAub3dsLWRvdC5hY3RpdmUsIC5zZXJ2aWNlLWxpc3QtMzpob3ZlciwgLnRlYW0tZGV0YWlsLTMgaDU6YmVmb3JlLCAuZWFjaC10ZWFtLTM6aG92ZXIgLnRlYW0tZGV0YWlsLTNbZGF0YS1vdmVybGF5XTo6YmVmb3JlLCAuYnRuLXNxdWFyZS1ibHVlOmhvdmVyLCAuYnRuLWJsdWU6aG92ZXIsIC5wcmljZS1lYWNoLTIuYWN0aXZlLCAudGVzdGltb25pYWwtMy1zbGlkZSAub3dsLWRvdC5hY3RpdmUgc3BhbiwgLmZhbmN5LTI6YWZ0ZXIsIC5yaWdodC1ib3gtaGVhZCBoNDphZnRlciwgLnNvY2lhbC1wcm9maWxlLWJveDpob3ZlciwgLmJsb2NrLXF1b3RlLWJ5OmJlZm9yZSwgLnRhZy1saW5rOmhvdmVyLCAuY2F0ZWdvcmllcyBsaSBhIHNwYW4sIC5zbGlkZXItdHlwZS1ibG9nLm93bC1jYXJvdXNlbCAub3dsLW5hdiBidXR0b24ub3dsLW5leHQsIC5zbGlkZXItdHlwZS1ibG9nLm93bC1jYXJvdXNlbCAub3dsLW5hdiBidXR0b24ub3dsLXByZXYsIC5wYWdpbmF0aW9uLXR5cGUxIHVsIGxpIGE6aG92ZXIsIC5wYWdpbmF0aW9uLXR5cGUxIHVsIGxpLmFjdGl2ZSBhLCAucG9ydGZvbGlvLW92ZXJsYXk6YmVmb3JlLCAubGluZS1yaWdodDphZnRlciwgLmV4cGVyaWVuY2UgbGk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5iZy1ncmVlbiwgLmJ0bi1yb3VuZCwgLnNob3AtaWNvbiAuY291bnQsIC5tYWluLW1lbnUgbGk6YWZ0ZXIsIC5saW5lLWhlYWQgLmxpbmUsIC5ibG9iLmdyZWVuLCAuYnRuLXNxdWFyZSwgLnNsaWRlLWRpdiAub3dsLWRvdHMgLm93bC1kb3QuYWN0aXZlLCAuY2FsbGJhY2stYXJlYVtkYXRhLW92ZXJsYXldOjpiZWZvcmUsIC5zZXJ2aWNlLWJveDpob3ZlciwgLnNlcnZpY2UtYm94OmhvdmVyIC5zZXJ2aWNlLWljb24tYmcsIC5wbHVzLWJ0biwgLmFycm93LW5hdmlnYXRpb24gLm5hdi1zbGlkZSwgLmJ0bi1yb3VuZC1ibHVlOmhvdmVyLCAucHJpY2UtZWFjaC5hY3RpdmUsIC5wcmljZS10YWJzIC5uYXYtbGluay5hY3RpdmUsIC50ZXN0aW1vbmlhbC1zbGlkZXIgLmFycm93LWJ0bjpob3ZlciwgLmJ0bi1zcXVhcmUtZ3JlZW4sIC5idG4tc3F1YXJlLXdoaXRlOmhvdmVyLCAuZWFjaC1ibG9nOmhvdmVyIC5ibG9nLWRhdGUsIC5jb250YWN0LWFyZWE6YmVmb3JlLCAuc29jaWFsLWxpbmtzIGxpIGE6aG92ZXIsIC5saW5rcy1saXN0IGE6YmVmb3JlLCAuc2Nyb2xsLWJ0biwgLmRvdHMtc2xpZGVyIC5vd2wtZG90LmFjdGl2ZSwgLnNsaWRlLXNvY2lhbCBsaSBhOmhvdmVyLCAudGVhbS1ncmVlbi1oZWFkW2RhdGEtb3ZlcmxheV06OmJlZm9yZSwgLmNhcmVlci1ib3hbZGF0YS1vdmVybGF5XTo6YmVmb3JlLCAubW9iaWxlLW1lbnUtMi5tZWFuLWNvbnRhaW5lciAubWVhbm1lbnUtcmV2ZWFsLCAuYnRuLXNxdWFyZS1ib3JkZXI6aG92ZXIsIC5zbGlkZXItY29udHJvbC50eXBlLTMgLmRvdHMtc2xpZGVyIC5vd2wtZG90LmFjdGl2ZSwgLnNlcnZpY2UtbGlzdC0zOmhvdmVyLCAudGVhbS1kZXRhaWwtMyBoNTpiZWZvcmUsIC5lYWNoLXRlYW0tMzpob3ZlciAudGVhbS1kZXRhaWwtM1tkYXRhLW92ZXJsYXldOjpiZWZvcmUsIC5idG4tc3F1YXJlLWJsdWU6aG92ZXIsIC5idG4tYmx1ZTpob3ZlciwgLnByaWNlLWVhY2gtMi5hY3RpdmUsIC50ZXN0aW1vbmlhbC0zLXNsaWRlIC5vd2wtZG90LmFjdGl2ZSBzcGFuLCAuZmFuY3ktMjphZnRlciwgLnJpZ2h0LWJveC1oZWFkIGg0OmFmdGVyLCAuc29jaWFsLXByb2ZpbGUtYm94OmhvdmVyLCAuYmxvY2stcXVvdGUtYnk6YmVmb3JlLCAudGFnLWxpbms6aG92ZXIsIC5jYXRlZ29yaWVzIGxpIGEgc3BhbiwgLnNsaWRlci10eXBlLWJsb2cub3dsLWNhcm91c2VsIC5vd2wtbmF2IGJ1dHRvbi5vd2wtbmV4dCwgLnNsaWRlci10eXBlLWJsb2cub3dsLWNhcm91c2VsIC5vd2wtbmF2IGJ1dHRvbi5vd2wtcHJldiwgLnBhZ2luYXRpb24tdHlwZTEgdWwgbGkgYTpob3ZlciwgLnBhZ2luYXRpb24tdHlwZTEgdWwgbGkuYWN0aXZlIGEsIC5wb3J0Zm9saW8tb3ZlcmxheTpiZWZvcmUsIC5saW5lLXJpZ2h0OmFmdGVyLCAuZXhwZXJpZW5jZSBsaTphZnRlciB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuLmRyZWFtLWJ0bi1ncm91cCBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjNjU2NTY1O1xufVxuLmRyZWFtLWJ0bi1ncm91cCA6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzhiN2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5vdXRlci1kb20ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29udGVuZXQgaDUge1xuICBjb2xvcjogIzM4YjdmZiAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cblxuLmxvYWRpbmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGZsb2F0OiBsZWZ0O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxNjBweDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtNzBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZDBhMDA7XG4gIH1cbiAgMzAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmE4YTAwO1xuICB9XG4gIDUwJSB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gIH1cbiAgODAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTFkNzAwO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZDBhMDA7XG4gIH1cbn1cbi5sb2FkaW5nIC5sb2FkaW5nLTEge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDkwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkaW5nIDIuNXMgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBsb2FkaW5nIDIuNXMgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogbG9hZGluZyAyLjVzIGluZmluaXRlO1xuICBhbmltYXRpb246IGxvYWRpbmcgMi41cyBpbmZpbml0ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC4yNXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4yNXM7XG59XG4ubG9hZGluZyAubG9hZGluZy0yIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA5MHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGluZyAyLjVzIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogbG9hZGluZyAyLjVzIGluZmluaXRlO1xuICAtby1hbmltYXRpb246IGxvYWRpbmcgMi41cyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nIDIuNXMgaW5maW5pdGU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC41cztcbn1cbi5sb2FkaW5nIC5sb2FkaW5nLTMge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDkwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkaW5nIDIuNXMgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBsb2FkaW5nIDIuNXMgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogbG9hZGluZyAyLjVzIGluZmluaXRlO1xuICBhbmltYXRpb246IGxvYWRpbmcgMi41cyBpbmZpbml0ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC43NXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC43NXM7XG59XG4ubG9hZGluZyAubG9hZGluZy00IHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA5MHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGluZyAyLjVzIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogbG9hZGluZyAyLjVzIGluZmluaXRlO1xuICAtby1hbmltYXRpb246IGxvYWRpbmcgMi41cyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nIDIuNXMgaW5maW5pdGU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xufVxuLmxvYWRpbmcgLmxvYWRpbmctNSB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogOTBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRpbmcgMi41cyBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGxvYWRpbmcgMi41cyBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiBsb2FkaW5nIDIuNXMgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogbG9hZGluZyAyLjVzIGluZmluaXRlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjI1cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjI1cztcbn1cbi5sb2FkaW5nIC5sb2FkaW5nLTYge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDkwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkaW5nIDIuNXMgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBsb2FkaW5nIDIuNXMgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogbG9hZGluZyAyLjVzIGluZmluaXRlO1xuICBhbmltYXRpb246IGxvYWRpbmcgMi41cyBpbmZpbml0ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS41cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjVzO1xufVxuLmxvYWRpbmcgLmxvYWRpbmctNyB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogOTBweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRpbmcgMi41cyBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGxvYWRpbmcgMi41cyBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiBsb2FkaW5nIDIuNXMgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogbG9hZGluZyAyLjVzIGluZmluaXRlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxLjc1cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjc1cztcbn1cbi5sb2FkaW5nIC5sb2FkaW5nLTgge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDkwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkaW5nIDIuNXMgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBsb2FkaW5nIDIuNXMgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogbG9hZGluZyAyLjVzIGluZmluaXRlO1xuICBhbmltYXRpb246IGxvYWRpbmcgMi41cyBpbmZpbml0ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XG59XG4ubG9hZGluZyAubG9hZGluZy05IHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA5MHB4O1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGluZyAyLjVzIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogbG9hZGluZyAyLjVzIGluZmluaXRlO1xuICAtby1hbmltYXRpb246IGxvYWRpbmcgMi41cyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBsb2FkaW5nIDIuNXMgaW5maW5pdGU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDJweDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDIuMjVzO1xuICBhbmltYXRpb24tZGVsYXk6IDIuMjVzO1xufVxuLmxvYWRpbmcgLmxvYWRpbmctMTAge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDkwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkaW5nIDIuNXMgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBsb2FkaW5nIDIuNXMgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogbG9hZGluZyAyLjVzIGluZmluaXRlO1xuICBhbmltYXRpb246IGxvYWRpbmcgMi41cyBpbmZpbml0ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMnB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMi41cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjVzO1xufSIsIi5uYXZiYXItbW9iaWxle1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cbi5iaS14OjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXFxmNjJhXCI7XG59XG4uYmk6OmJlZm9yZSwgW2NsYXNzXj1cImJpLVwiXTo6YmVmb3JlLCBbY2xhc3MqPVwiIGJpLVwiXTo6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IGJvb3RzdHJhcC1pY29ucyAhaW1wb3J0YW50O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgdmVydGljYWwtYWxpZ246IC0wLjEyNWVtO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG4qLCA6OmFmdGVyLCA6OmJlZm9yZSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuXG4kYW5pbWF0aW9uU3BlZWQ6IDQwcztcblxuLnZsIHtcblx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2RlYTlhO1xuXHRoZWlnaHQ6IDgwcHg7XG5cdG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAud3JhcHBlcntcblx0ZGlzcGxheTogZmxleDtcbiAgfVxuQGtleWZyYW1lcyBzY3JvbGwge1xuXHQwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuXHQxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoLTI1MHB4ICogMTApKX1cbn1cblxuLy8gU3R5bGluZ1xuLnNsaWRlciB7XG5cdGJhY2tncm91bmQ6ICMxOTE5MTk7XG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYjQxMTExO1xuXHRib3gtc2hhZG93OiAwIDEwcHggMjBweCAtNXB4IHJnYmEoMCwgMCwgMCwgLjEyNSk7XG5cdGhlaWdodDogMTAwcHg7XG5cdG92ZXJmbG93OmhpZGRlbjtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcblx0Jjo6YmVmb3JlLFxuXHQmOjphZnRlciB7XG5cdFx0Y29udGVudDogXCJcIjtcblx0XHRoZWlnaHQ6IDEwMHB4O1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR3aWR0aDogMjAwcHg7XG5cdFx0ei1pbmRleDogMjtcblx0fVxuXHRcblx0Jjo6YWZ0ZXIge1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHRvcDogMDtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKTtcblx0fVxuXG5cdCY6OmJlZm9yZSB7XG5cdFx0bGVmdDogMDtcblx0XHR0b3A6IDA7XG5cdH1cblx0XG5cdC5zbGlkZS10cmFjayB7XG5cdFx0YW5pbWF0aW9uOiBzY3JvbGwgJGFuaW1hdGlvblNwZWVkIGxpbmVhciBpbmZpbml0ZTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdHdpZHRoOiBjYWxjKDI1MHB4ICogMTQpO1xuXHR9XG5cdFxuXHQuc2xpZGUge1xuXHRcdGhlaWdodDogMTAwcHg7XG5cdFx0d2lkdGg6IDI1MHB4O1xuXHRcdHBhZGRpbmc6IDVweDtcblx0XHRzcGFue1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG5cdFx0fVxuXHR9XG59XG5cbi8qIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxuNC4gU2xpZGVyXG4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4qL1xuXG5cbi8qKioqKlNsaWRlciB0eXBlIDEqKioqKi9cblxuLnNsaWRlci1hcmVhIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1pbi1oZWlnaHQ6IDczMHB4O1xufVxuXG4uc2xpZGUtZGl2IHtcbiAgICBwYWRkaW5nLXRvcDogMjczcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGluZS1oZWFkIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogLjhweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xuXHRjb2xvcjogIzM4YjdmZjtcblx0bWFyZ2luLWxlZnQ6IDE1JTtcbn1cblxuLmxpbmUtaGVhZCAubGluZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDFweDtcbn1cblxuLmxpbmUtaGVhZCAubGluZS5iZWZvcmUge1xuICAgIGxlZnQ6IC0xMTlweDtcbiAgICB0b3A6IDUwJTtcbn1cblxuLmxpbmUtaGVhZCAubGluZS5hZnRlciB7XG4gICAgcmlnaHQ6IC0xMTlweDtcbiAgICB0b3A6IDUwJTtcbn1cblxuLmJhbm5lci1oZWFkIHtcbiAgICBmb250LXNpemU6IDQ2cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbGluZS1oZWlnaHQ6IDY2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNsaWRlLWRpdiAub3dsLW5hdiBidXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQzJTtcbn1cblxuLnNsaWRlLWRpdiAub3dsLW5hdiBidXR0b24gaSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG9wYWNpdHk6IC41O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC40cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uc2xpZGUtZGl2IC5vd2wtbmF2IGJ1dHRvbjpob3ZlciBpIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC40cztcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xufVxuXG4uc2xpZGUtZGl2IC5vd2wtbmF2IC5vd2wtcHJldiB7XG4gICAgbGVmdDogLTE5MHB4O1xufVxuXG4uc2xpZGUtZGl2IC5vd2wtbmF2IC5vd2wtbmV4dCB7XG4gICAgcmlnaHQ6IC0xOTBweDtcbn1cblxuLnNsaWRlLWRpdiAub3dsLWRvdHMgLm93bC1kb3Qge1xuICAgIGhlaWdodDogMnB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIG1hcmdpbi10b3A6LTgwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OjhweDtcbiAgICBtYXJnaW4tbGVmdDo4cHg7XG4gICAgb3BhY2l0eTogLjM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnNsaWRlLWRpdiAub3dsLWRvdHMgLm93bC1kb3QuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2xpZGUtZGl2IC5vd2wtZG90cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgYm90dG9tOiAtMTAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG59XG5cblxuLyoqKioqU2xpZGVyIHR5cGUgMioqKioqL1xuXG4uc2lsZGVyLWltZyB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtaW4taGVpZ2h0OiA2OTRweDtcbn1cblxuLnNsaWRlci1jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMTc4cHg7XG59XG5cbi5iYW5uZXItaGVhZC0yIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLmRvdHMtc2xpZGVyIC5vd2wtZG90IHtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgb3BhY2l0eTogLjM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5kb3RzLXNsaWRlciB7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG59XG5cbi5kb3RzLXNsaWRlciAub3dsLWRvdC5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5zbGlkZXItYnRuIHtcbiAgICB3aWR0aDogOTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLnNsaWRlci1jb250cm9sIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDYwcHg7XG59XG5cbi5zbGlkZXItYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uc2xpZGUtc29jaWFsIHtcbiAgICB3aWR0aDogNTJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc2xpZGUtc29jaWFsLW91dGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbn1cblxuLnNsaWRlLXNvY2lhbCB1bCA+IGxpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNsaWRlLXNvY2lhbCBsaSBhIHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5zbGlkZS1zb2NpYWwgbGkge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cblxuLyoqKioqU2xpZGVyIHR5cGUgMyoqKioqL1xuXG4uc2xpZGVyLWNvbnRlbnQtMyB7XG4gICAgcGFkZGluZy10b3A6IDIyOXB4O1xufVxuXG4uc2xpZGVyLWNvbnRyb2wudHlwZS0zIHtcbiAgICBib3R0b206IDI1cHg7XG59XG5cbi5zbGlkZXItY29udHJvbC50eXBlLTMgLmRvdHMtc2xpZGVyIC5vd2wtZG90IHtcbiAgICBvcGFjaXR5OiAuMztcbn1cblxuLnNsaWRlci1jb250cm9sLnR5cGUtMyAuZG90cy1zbGlkZXIgLm93bC1kb3QuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG5cbi5iZy1ncmVlbiwgLmJ0bi1yb3VuZCwgLnNob3AtaWNvbiAuY291bnQsIC5tYWluLW1lbnUgbGk6YWZ0ZXIsIC5saW5lLWhlYWQgLmxpbmUsIC5ibG9iLmdyZWVuLCAuYnRuLXNxdWFyZSwgLnNsaWRlLWRpdiAub3dsLWRvdHMgLm93bC1kb3QuYWN0aXZlLCAuY2FsbGJhY2stYXJlYVtkYXRhLW92ZXJsYXldOjpiZWZvcmUsIC5zZXJ2aWNlLWJveDpob3ZlciwgLnNlcnZpY2UtYm94OmhvdmVyIC5zZXJ2aWNlLWljb24tYmcsIC5wbHVzLWJ0biwgLmFycm93LW5hdmlnYXRpb24gLm5hdi1zbGlkZSwgLmJ0bi1yb3VuZC1ibHVlOmhvdmVyLCAucHJpY2UtZWFjaC5hY3RpdmUsIC5wcmljZS10YWJzIC5uYXYtbGluay5hY3RpdmUsIC50ZXN0aW1vbmlhbC1zbGlkZXIgLmFycm93LWJ0bjpob3ZlciwgLmJ0bi1zcXVhcmUtZ3JlZW4sIC5idG4tc3F1YXJlLXdoaXRlOmhvdmVyLCAuZWFjaC1ibG9nOmhvdmVyIC5ibG9nLWRhdGUsIC5jb250YWN0LWFyZWE6YmVmb3JlLCAuc29jaWFsLWxpbmtzIGxpIGE6aG92ZXIsIC5saW5rcy1saXN0IGE6YmVmb3JlLCAuc2Nyb2xsLWJ0biwgLmRvdHMtc2xpZGVyIC5vd2wtZG90LmFjdGl2ZSwgLnNsaWRlLXNvY2lhbCBsaSBhOmhvdmVyLCAudGVhbS1ncmVlbi1oZWFkW2RhdGEtb3ZlcmxheV06OmJlZm9yZSwgLmNhcmVlci1ib3hbZGF0YS1vdmVybGF5XTo6YmVmb3JlLCAubW9iaWxlLW1lbnUtMi5tZWFuLWNvbnRhaW5lciAubWVhbm1lbnUtcmV2ZWFsLCAuYnRuLXNxdWFyZS1ib3JkZXI6aG92ZXIsIC5zbGlkZXItY29udHJvbC50eXBlLTMgLmRvdHMtc2xpZGVyIC5vd2wtZG90LmFjdGl2ZSwgLnNlcnZpY2UtbGlzdC0zOmhvdmVyLCAudGVhbS1kZXRhaWwtMyBoNTpiZWZvcmUsIC5lYWNoLXRlYW0tMzpob3ZlciAudGVhbS1kZXRhaWwtM1tkYXRhLW92ZXJsYXldOjpiZWZvcmUsIC5idG4tc3F1YXJlLWJsdWU6aG92ZXIsIC5idG4tYmx1ZTpob3ZlciwgLnByaWNlLWVhY2gtMi5hY3RpdmUsIC50ZXN0aW1vbmlhbC0zLXNsaWRlIC5vd2wtZG90LmFjdGl2ZSBzcGFuLCAuZmFuY3ktMjphZnRlciwgLnJpZ2h0LWJveC1oZWFkIGg0OmFmdGVyLCAuc29jaWFsLXByb2ZpbGUtYm94OmhvdmVyLCAuYmxvY2stcXVvdGUtYnk6YmVmb3JlLCAudGFnLWxpbms6aG92ZXIsIC5jYXRlZ29yaWVzIGxpIGEgc3BhbiwgLnNsaWRlci10eXBlLWJsb2cub3dsLWNhcm91c2VsIC5vd2wtbmF2IGJ1dHRvbi5vd2wtbmV4dCwgLnNsaWRlci10eXBlLWJsb2cub3dsLWNhcm91c2VsIC5vd2wtbmF2IGJ1dHRvbi5vd2wtcHJldiwgLnBhZ2luYXRpb24tdHlwZTEgdWwgbGkgYTpob3ZlciwgLnBhZ2luYXRpb24tdHlwZTEgdWwgbGkuYWN0aXZlIGEsIC5wb3J0Zm9saW8tb3ZlcmxheTpiZWZvcmUsIC5saW5lLXJpZ2h0OmFmdGVyLCAuZXhwZXJpZW5jZSBsaTphZnRlcntcblx0YmFja2dyb3VuZDogcmVkO1xufVxuLmJnLWdyZWVuLCAuYnRuLXJvdW5kLCAuc2hvcC1pY29uIC5jb3VudCwgLm1haW4tbWVudSBsaTphZnRlciwgLmxpbmUtaGVhZCAubGluZSwgLmJsb2IuZ3JlZW4sIC5idG4tc3F1YXJlLCAuc2xpZGUtZGl2IC5vd2wtZG90cyAub3dsLWRvdC5hY3RpdmUsIC5jYWxsYmFjay1hcmVhW2RhdGEtb3ZlcmxheV06OmJlZm9yZSwgLnNlcnZpY2UtYm94OmhvdmVyLCAuc2VydmljZS1ib3g6aG92ZXIgLnNlcnZpY2UtaWNvbi1iZywgLnBsdXMtYnRuLCAuYXJyb3ctbmF2aWdhdGlvbiAubmF2LXNsaWRlLCAuYnRuLXJvdW5kLWJsdWU6aG92ZXIsIC5wcmljZS1lYWNoLmFjdGl2ZSwgLnByaWNlLXRhYnMgLm5hdi1saW5rLmFjdGl2ZSwgLnRlc3RpbW9uaWFsLXNsaWRlciAuYXJyb3ctYnRuOmhvdmVyLCAuYnRuLXNxdWFyZS1ncmVlbiwgLmJ0bi1zcXVhcmUtd2hpdGU6aG92ZXIsIC5lYWNoLWJsb2c6aG92ZXIgLmJsb2ctZGF0ZSwgLmNvbnRhY3QtYXJlYTpiZWZvcmUsIC5zb2NpYWwtbGlua3MgbGkgYTpob3ZlciwgLmxpbmtzLWxpc3QgYTpiZWZvcmUsIC5zY3JvbGwtYnRuLCAuZG90cy1zbGlkZXIgLm93bC1kb3QuYWN0aXZlLCAuc2xpZGUtc29jaWFsIGxpIGE6aG92ZXIsIC50ZWFtLWdyZWVuLWhlYWRbZGF0YS1vdmVybGF5XTo6YmVmb3JlLCAuY2FyZWVyLWJveFtkYXRhLW92ZXJsYXldOjpiZWZvcmUsIC5tb2JpbGUtbWVudS0yLm1lYW4tY29udGFpbmVyIC5tZWFubWVudS1yZXZlYWwsIC5idG4tc3F1YXJlLWJvcmRlcjpob3ZlciwgLnNsaWRlci1jb250cm9sLnR5cGUtMyAuZG90cy1zbGlkZXIgLm93bC1kb3QuYWN0aXZlLCAuc2VydmljZS1saXN0LTM6aG92ZXIsIC50ZWFtLWRldGFpbC0zIGg1OmJlZm9yZSwgLmVhY2gtdGVhbS0zOmhvdmVyIC50ZWFtLWRldGFpbC0zW2RhdGEtb3ZlcmxheV06OmJlZm9yZSwgLmJ0bi1zcXVhcmUtYmx1ZTpob3ZlciwgLmJ0bi1ibHVlOmhvdmVyLCAucHJpY2UtZWFjaC0yLmFjdGl2ZSwgLnRlc3RpbW9uaWFsLTMtc2xpZGUgLm93bC1kb3QuYWN0aXZlIHNwYW4sIC5mYW5jeS0yOmFmdGVyLCAucmlnaHQtYm94LWhlYWQgaDQ6YWZ0ZXIsIC5zb2NpYWwtcHJvZmlsZS1ib3g6aG92ZXIsIC5ibG9jay1xdW90ZS1ieTpiZWZvcmUsIC50YWctbGluazpob3ZlciwgLmNhdGVnb3JpZXMgbGkgYSBzcGFuLCAuc2xpZGVyLXR5cGUtYmxvZy5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgYnV0dG9uLm93bC1uZXh0LCAuc2xpZGVyLXR5cGUtYmxvZy5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgYnV0dG9uLm93bC1wcmV2LCAucGFnaW5hdGlvbi10eXBlMSB1bCBsaSBhOmhvdmVyLCAucGFnaW5hdGlvbi10eXBlMSB1bCBsaS5hY3RpdmUgYSwgLnBvcnRmb2xpby1vdmVybGF5OmJlZm9yZSwgLmxpbmUtcmlnaHQ6YWZ0ZXIsIC5leHBlcmllbmNlIGxpOmFmdGVye1xuXHRiYWNrZ3JvdW5kOiByZWQ7XG59XG5cblxuLmRyZWFtLWJ0bi1ncm91cHtcblx0YXtcblx0XHRjb2xvcjogd2hpdGU7XG4gICAgXHRiYWNrZ3JvdW5kOiAjNjU2NTY1O1xuXHR9OmhvdmVye1xuXHRcdGJhY2tncm91bmQ6ICMzOGI3ZmYgIWltcG9ydGFudDtcblx0fVxufVxuXG4ub3V0ZXItZG9te1xuICAgIGRpc3BsYXk6IGZsZXg7XG59IFxuLmNvbnRlbmV0IGg1e1xuICAgIGNvbG9yOiAgIzM4YjdmZiAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59XG5cbi5sb2FkaW5nIHsgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB3aWR0aDogMTYwcHg7XG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC03MHB4O1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG4gIH1cbiAgQGtleWZyYW1lcyBsb2FkaW5nIHtcbiAgICAwJSB7IGJhY2tncm91bmQtY29sb3I6ICNjZDBhMDA7IH1cbiAgXG4gICAgMzAlIHsgYmFja2dyb3VuZC1jb2xvcjogI2ZhOGEwMDsgfVxuICAgIDUwJSB7IGhlaWdodDogMTAwcHg7IG1hcmdpbi10b3A6IDBweDsgfVxuICAgIDgwJSB7IGJhY2tncm91bmQtY29sb3I6ICM5MWQ3MDA7ICB9XG4gICAgMTAwJSB7IGJhY2tncm91bmQtY29sb3I6ICNjZDBhMDA7IH1cbiAgfVxuICBAbWl4aW4gaW5uZXIoKSB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRpbmcgMi41cyBpbmZpbml0ZTtcbiAgICAtbW96LWFuaW1hdGlvbjogbG9hZGluZyAyLjVzIGluZmluaXRlO1xuICAgIC1vLWFuaW1hdGlvbjogbG9hZGluZyAyLjVzIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogbG9hZGluZyAyLjVzIGluZmluaXRlO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICAgXG4gIH1cbiAgQG1peGluIGxvYWRpbmcoKSB7XG4gICAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDEwIHtcbiAgICAgICAgICAubG9hZGluZy0jeyRpfSB7IEBpbmNsdWRlIGlubmVyKCk7IC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkaS80K3M7IGFuaW1hdGlvbi1kZWxheTogJGkvNCtzOyB9XG4gICAgICB9XG4gIH1cbiAgLmxvYWRpbmcgeyBAaW5jbHVkZSBsb2FkaW5nKCk7IH0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'AHMv2';
        this.isLoad = false;
        this.newsContents = [];
    }
    ngOnInit() {
        this.isLoad = true;
        setInterval(() => {
            this.isLoad = false;
        }, 2000);
        for (let index = 0; index < 10; index++) {
            this.newsContents.push(index + 1 + ' - Do we Media Vultures Perpetuate Mass Shootings?');
        }
        this.listResources;
    }
    listResources() {
        const obj = { name: 'nik' };
        return obj;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_ahm_home_ahm_home_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ahm-home/ahm-home.module */ "./src/app/components/ahm-home/ahm-home.module.ts");
/* harmony import */ var _components_ahm_login_ahm_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ahm-login/ahm-login.component */ "./src/app/components/ahm-login/ahm-login.component.ts");
/* harmony import */ var _components_ahm_admin_ahm_admin_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ahm-admin/ahm-admin.module */ "./src/app/components/ahm-admin/ahm-admin.module.ts");









let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_ahm_login_ahm_login_component__WEBPACK_IMPORTED_MODULE_7__["AhmLoginComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _components_ahm_admin_ahm_admin_module__WEBPACK_IMPORTED_MODULE_8__["AhmAdminModule"],
            _components_ahm_home_ahm_home_module__WEBPACK_IMPORTED_MODULE_6__["AhmHomeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/ahm-admin/ahm-admin-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/ahm-admin/ahm-admin-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: AhmAdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AhmAdminRoutingModule", function() { return AhmAdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ahm_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ahm-admin.component */ "./src/app/components/ahm-admin/ahm-admin.component.ts");
/* harmony import */ var _ahm_news_ahm_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ahm-news/ahm-news.component */ "./src/app/components/ahm-admin/ahm-news/ahm-news.component.ts");
/* harmony import */ var _ahm_pricing_ahm_pricing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ahm-pricing/ahm-pricing.component */ "./src/app/components/ahm-admin/ahm-pricing/ahm-pricing.component.ts");






const routes = [
    {
        path: 'admin', component: _ahm_admin_component__WEBPACK_IMPORTED_MODULE_3__["AhmAdminComponent"],
        children: [
            { path: '', component: _ahm_news_ahm_news_component__WEBPACK_IMPORTED_MODULE_4__["AhmNewsComponent"], pathMatch: 'full' },
            { path: 'pricing', component: _ahm_pricing_ahm_pricing_component__WEBPACK_IMPORTED_MODULE_5__["AhmPricingComponent"] }
        ]
    }
];
let AhmAdminRoutingModule = class AhmAdminRoutingModule {
};
AhmAdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AhmAdminRoutingModule);



/***/ }),

/***/ "./src/app/components/ahm-admin/ahm-admin.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/ahm-admin/ahm-admin.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n    background-color: #fbfbfb;\n    }\n    @media (min-width: 991.98px) {\n    main {\n    padding-left: 240px;\n    }\n    }\n    /* Sidebar */\n    .sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    padding: 58px 0 0; /* Height of navbar */\n    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%);\n    width: 240px;\n    z-index: 600;\n    }\n    @media (max-width: 991.98px) {\n    .sidebar {\n    width: 100%;\n    }\n    }\n    .sidebar .active {\n    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);\n    }\n    .sidebar-sticky {\n    position: relative;\n    top: 0;\n    height: calc(100vh - 48px);\n    padding-top: 0.5rem;\n    overflow-x: hidden;\n    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\n    }\n    #main-navbar{\n    background-color: #cc1616 !important;\n}\n    .list-group-flush a{\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9haG0tYWRtaW4vYWhtLWFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekI7SUFDQTtJQUNBO0lBQ0EsbUJBQW1CO0lBQ25CO0lBQ0E7SUFFQSxZQUFZO0lBQ1o7SUFDQSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsaUJBQWlCLEVBQUUscUJBQXFCO0lBQ3hDLHFFQUFxRTtJQUNyRSxZQUFZO0lBQ1osWUFBWTtJQUNaO0lBR0E7SUFDQTtJQUNBLFdBQVc7SUFDWDtJQUNBO0lBQ0E7SUFDQSx1RUFBdUU7SUFDdkU7SUFFQTtJQUNBLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUUsNkRBQTZEO0lBQy9FO0lBRUo7SUFDSSxvQ0FBb0M7QUFDeEM7SUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FobS1hZG1pbi9haG0tYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTEuOThweCkge1xuICAgIG1haW4ge1xuICAgIHBhZGRpbmctbGVmdDogMjQwcHg7XG4gICAgfVxuICAgIH1cbiAgICBcbiAgICAvKiBTaWRlYmFyICovXG4gICAgLnNpZGViYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcGFkZGluZzogNThweCAwIDA7IC8qIEhlaWdodCBvZiBuYXZiYXIgKi9cbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2IoMCAwIDAgLyA1JSksIDAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyA1JSk7XG4gICAgd2lkdGg6IDI0MHB4O1xuICAgIHotaW5kZXg6IDYwMDtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gICAgLnNpZGViYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICB9XG4gICAgLnNpZGViYXIgLmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiKDAgMCAwIC8gMTYlKSwgMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDEyJSk7XG4gICAgfVxuICAgIFxuICAgIC5zaWRlYmFyLXN0aWNreSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvOyAvKiBTY3JvbGxhYmxlIGNvbnRlbnRzIGlmIHZpZXdwb3J0IGlzIHNob3J0ZXIgdGhhbiBjb250ZW50LiAqL1xuICAgIH1cblxuI21haW4tbmF2YmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYzE2MTYgIWltcG9ydGFudDtcbn1cblxuLmxpc3QtZ3JvdXAtZmx1c2ggYXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/ahm-admin/ahm-admin.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/ahm-admin/ahm-admin.component.ts ***!
  \*************************************************************/
/*! exports provided: AhmAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AhmAdminComponent", function() { return AhmAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AhmAdminComponent = class AhmAdminComponent {
    constructor() {
        this.isSelected = 'news';
    }
    ngOnInit() {
    }
    launchWebPortal() {
        window.open(window.location.origin, '_blank');
    }
};
AhmAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ahm-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ahm-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-admin/ahm-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ahm-admin.component.css */ "./src/app/components/ahm-admin/ahm-admin.component.css")).default]
    })
], AhmAdminComponent);



/***/ }),

/***/ "./src/app/components/ahm-admin/ahm-admin.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/ahm-admin/ahm-admin.module.ts ***!
  \**********************************************************/
/*! exports provided: AhmAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AhmAdminModule", function() { return AhmAdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ahm_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ahm-admin.component */ "./src/app/components/ahm-admin/ahm-admin.component.ts");
/* harmony import */ var _ahm_news_ahm_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ahm-news/ahm-news.component */ "./src/app/components/ahm-admin/ahm-news/ahm-news.component.ts");
/* harmony import */ var _ahm_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ahm-admin-routing.module */ "./src/app/components/ahm-admin/ahm-admin-routing.module.ts");
/* harmony import */ var _ahm_pricing_ahm_pricing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ahm-pricing/ahm-pricing.component */ "./src/app/components/ahm-admin/ahm-pricing/ahm-pricing.component.ts");







let AhmAdminModule = class AhmAdminModule {
};
AhmAdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ahm_admin_component__WEBPACK_IMPORTED_MODULE_3__["AhmAdminComponent"], _ahm_news_ahm_news_component__WEBPACK_IMPORTED_MODULE_4__["AhmNewsComponent"], _ahm_pricing_ahm_pricing_component__WEBPACK_IMPORTED_MODULE_6__["AhmPricingComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ahm_admin_routing_module__WEBPACK_IMPORTED_MODULE_5__["AhmAdminRoutingModule"]
        ]
    })
], AhmAdminModule);



/***/ }),

/***/ "./src/app/components/ahm-admin/ahm-news/ahm-news.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/ahm-admin/ahm-news/ahm-news.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title-sub{\n    color: grey;\n}\n.news-label{\n    display: flex;\n    flex-direction: row-reverse;\n    margin-top: 2rem;\n}\n.add-btn{\n    margin-top: 2rem;\n}\n.news-wrap{\n    margin-left: 5px;\n    margin-right: 5px;\n    margin-bottom: 5px;\n    flex: 0 0 auto;\n    width: 32.333333%;\n    cursor: pointer;\n    background-color: #f0f0f0;\n}\n.preview-newsfeed{\n    font-size: 12px;\n    line-height: 1.2;\n}\n.news-active{\n    box-shadow: rgb(4 247 57 / 35%) 0px 5px 15px;\n}\n.news-not-saved{\n    box-shadow: rgba(255, 3, 3, 0.35) 0px 5px 15px;\n}\n.news-wrap:hover {\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n}\n.ml-1{\n    margin-left: 1rem;\n}\n.news-save-btn{\n    right: 27px;\n    position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9haG0tYWRtaW4vYWhtLW5ld3MvYWhtLW5ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7QUFDQTtJQUNJLDhDQUE4QztBQUNsRDtBQUNBO0lBQ0ksNENBQTRDO0FBQ2hEO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FobS1hZG1pbi9haG0tbmV3cy9haG0tbmV3cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLXN1YntcbiAgICBjb2xvcjogZ3JleTtcbn1cbi5uZXdzLWxhYmVse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5hZGQtYnRue1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5uZXdzLXdyYXB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgd2lkdGg6IDMyLjMzMzMzMyU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG5cbi5wcmV2aWV3LW5ld3NmZWVke1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4ubmV3cy1hY3RpdmV7XG4gICAgYm94LXNoYWRvdzogcmdiKDQgMjQ3IDU3IC8gMzUlKSAwcHggNXB4IDE1cHg7XG59XG4ubmV3cy1ub3Qtc2F2ZWR7XG4gICAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDMsIDMsIDAuMzUpIDBweCA1cHggMTVweDtcbn1cbi5uZXdzLXdyYXA6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xufVxuXG4ubWwtMXtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLm5ld3Mtc2F2ZS1idG57XG4gICAgcmlnaHQ6IDI3cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/ahm-admin/ahm-news/ahm-news.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/ahm-admin/ahm-news/ahm-news.component.ts ***!
  \*********************************************************************/
/*! exports provided: AhmNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AhmNewsComponent", function() { return AhmNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AhmNewsComponent = class AhmNewsComponent {
    constructor() {
        this.news = [{ id: 0, feed: 'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries' },
            { id: 1, feed: 'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries' },
            { id: 2, feed: 'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries' },
            { id: 3, feed: 'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries' },
            { id: 4, feed: 'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries' },
            { id: 5, feed: 'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries' },
            { id: 6, feed: 'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries' },
            { id: 7, feed: 'Deepak Nitrite To Invest Upto $14.4 Million In Deepak Oman Industries' },
        ];
        this.newContent = '';
        this.isSelected = -1;
    }
    ngOnInit() {
    }
    call(count) {
        this.isSelected = count;
    }
    addNews() {
        this.news.push({ id: this.news.length, feed: this.newContent, notSaved: true });
        this.newContent = '';
    }
    editNewsFeed() {
        const selectedNews = this.news.filter(newsList => newsList.id === this.isSelected)[0];
        this.editNewsFeedContent = selectedNews.feed;
    }
    onValueChangeUpdateNews(event, action) {
        const value = event.target.value;
        if (action === 'add') {
            this.newContent = value;
        }
        else {
            this.editNewsFeedContent = value;
        }
    }
};
AhmNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ahm-news',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ahm-news.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-admin/ahm-news/ahm-news.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ahm-news.component.css */ "./src/app/components/ahm-admin/ahm-news/ahm-news.component.css")).default]
    })
], AhmNewsComponent);



/***/ }),

/***/ "./src/app/components/ahm-admin/ahm-pricing/ahm-pricing.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/ahm-admin/ahm-pricing/ahm-pricing.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWhtLWFkbWluL2FobS1wcmljaW5nL2FobS1wcmljaW5nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/ahm-admin/ahm-pricing/ahm-pricing.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/ahm-admin/ahm-pricing/ahm-pricing.component.ts ***!
  \***************************************************************************/
/*! exports provided: AhmPricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AhmPricingComponent", function() { return AhmPricingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AhmPricingComponent = class AhmPricingComponent {
    constructor() { }
    ngOnInit() {
    }
};
AhmPricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ahm-pricing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ahm-pricing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-admin/ahm-pricing/ahm-pricing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ahm-pricing.component.css */ "./src/app/components/ahm-admin/ahm-pricing/ahm-pricing.component.css")).default]
    })
], AhmPricingComponent);



/***/ }),

/***/ "./src/app/components/ahm-home/ahm-about/ahm-about.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/ahm-home/ahm-about/ahm-about.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".story-img{\n    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9haG0taG9tZS9haG0tYWJvdXQvYWhtLWFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvREFBb0Q7QUFDeEQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FobS1ob21lL2FobS1hYm91dC9haG0tYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9yeS1pbWd7XG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMzUlKSAwcHggNXB4IDE1cHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/ahm-home/ahm-about/ahm-about.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/ahm-home/ahm-about/ahm-about.component.ts ***!
  \**********************************************************************/
/*! exports provided: AhmAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AhmAboutComponent", function() { return AhmAboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AhmAboutComponent = class AhmAboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AhmAboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ahm-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ahm-about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-about/ahm-about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ahm-about.component.css */ "./src/app/components/ahm-home/ahm-about/ahm-about.component.css")).default]
    })
], AhmAboutComponent);



/***/ }),

/***/ "./src/app/components/ahm-home/ahm-contact/ahm-contact.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/ahm-home/ahm-contact/ahm-contact.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/* For extremely small screen devices (595px and below) */\n@media only screen and (max-width: 595px) {\n    .img-contact{\n        margin-left: 0rem;\n    }\n}\n/* Small screen devices (600px and above) */\n@media only screen and (min-width: 600px) {\n    .img-contact{\n        margin-left: 0rem;\n    }\n}\n/* Medium screen devices (768px and above) */\n@media only screen and (min-width: 768px) {\n    .img-contact{\n        margin-left: 0rem;\n    }\n}\n/* Big screen devices (889px and above) */\n@media only screen and (min-width: 889px) {\n    .img-contact{\n        margin-left: 6rem;\n    }\n}\n/* Extra big screen devices (1200px and above) */\n@media only screen and (min-width: 1200px) {\n    .img-contact{\n        margin-left: 6rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9haG0taG9tZS9haG0tY29udGFjdC9haG0tY29udGFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx5REFBeUQ7QUFDekQ7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKO0FBRUEsMkNBQTJDO0FBQzNDO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjtBQUVBLDRDQUE0QztBQUM1QztJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7QUFFQSx5Q0FBeUM7QUFDekM7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKO0FBRUEsZ0RBQWdEO0FBQ2hEO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWhtLWhvbWUvYWhtLWNvbnRhY3QvYWhtLWNvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogRm9yIGV4dHJlbWVseSBzbWFsbCBzY3JlZW4gZGV2aWNlcyAoNTk1cHggYW5kIGJlbG93KSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTVweCkge1xuICAgIC5pbWctY29udGFjdHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gICAgfVxufVxuIFxuLyogU21hbGwgc2NyZWVuIGRldmljZXMgKDYwMHB4IGFuZCBhYm92ZSkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAuaW1nLWNvbnRhY3R7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcmVtO1xuICAgIH1cbn1cbiBcbi8qIE1lZGl1bSBzY3JlZW4gZGV2aWNlcyAoNzY4cHggYW5kIGFib3ZlKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5pbWctY29udGFjdHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDByZW07XG4gICAgfVxufVxuIFxuLyogQmlnIHNjcmVlbiBkZXZpY2VzICg4ODlweCBhbmQgYWJvdmUpICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg4OXB4KSB7XG4gICAgLmltZy1jb250YWN0e1xuICAgICAgICBtYXJnaW4tbGVmdDogNnJlbTtcbiAgICB9XG59XG4gXG4vKiBFeHRyYSBiaWcgc2NyZWVuIGRldmljZXMgKDEyMDBweCBhbmQgYWJvdmUpICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIC5pbWctY29udGFjdHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDZyZW07XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/ahm-home/ahm-contact/ahm-contact.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/ahm-home/ahm-contact/ahm-contact.component.ts ***!
  \**************************************************************************/
/*! exports provided: AhmContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AhmContactComponent", function() { return AhmContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AhmContactComponent = class AhmContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
AhmContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ahm-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ahm-contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-contact/ahm-contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ahm-contact.component.css */ "./src/app/components/ahm-home/ahm-contact/ahm-contact.component.css")).default]
    })
], AhmContactComponent);



/***/ }),

/***/ "./src/app/components/ahm-home/ahm-home.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/ahm-home/ahm-home.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.navbar-mobile {\n  position: fixed;\n  overflow: hidden;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.9);\n  transition: 0.3s;\n  z-index: 999;\n}\n.bi-x::before {\n  content: \"\";\n}\n.bi::before, [class^=bi-]::before, [class*=\" bi-\"]::before {\n  display: inline-block;\n  font-family: bootstrap-icons !important;\n  font-style: normal;\n  font-weight: normal !important;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  vertical-align: -0.125em;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n*, ::after, ::before {\n  box-sizing: border-box;\n}\n.vl {\n  border-left: 1px solid #cdea9a;\n  height: 80px;\n  margin-top: 10px;\n}\n.wrapper {\n  display: flex;\n}\n@-webkit-keyframes scroll {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(calc(-250px * 10));\n  }\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(calc(-250px * 10));\n  }\n}\n.slider {\n  background: #191919;\n  border-bottom: 2px solid #b41111;\n  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);\n  height: 100px;\n  overflow: hidden;\n  position: relative;\n}\n.slider::before, .slider::after {\n  content: \"\";\n  height: 100px;\n  position: absolute;\n  width: 200px;\n  z-index: 2;\n}\n.slider::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.slider::before {\n  left: 0;\n  top: 0;\n}\n.slider .slide-track {\n  -webkit-animation: scroll 40s linear infinite;\n          animation: scroll 40s linear infinite;\n  display: flex;\n  width: calc(250px * 14);\n}\n.slider .slide {\n  height: 100px;\n  width: 250px;\n  padding: 5px;\n}\n.slider .slide span {\n  font-size: 14px;\n  color: #fff;\n  font-family: \"Raleway\", sans-serif;\n}\n/* ....................................\n4. Slider\n.......................................*/\n/*****Slider type 1*****/\n.slider-area {\n  background-size: cover;\n  min-height: 730px;\n}\n.slide-div {\n  padding-top: 273px;\n  position: relative;\n}\n.line-head {\n  font-size: 15px;\n  text-transform: uppercase;\n  letter-spacing: 0.8px;\n  font-weight: 500;\n  position: relative;\n  display: inline-block;\n  line-height: 13px;\n  margin-bottom: 50px;\n  color: #38b7ff;\n  margin-left: 15%;\n}\n.line-head .line {\n  position: absolute;\n  width: 100px;\n  height: 1px;\n}\n.line-head .line.before {\n  left: -119px;\n  top: 50%;\n}\n.line-head .line.after {\n  right: -119px;\n  top: 50%;\n}\n.banner-head {\n  font-size: 46px;\n  color: #fff;\n  line-height: 66px;\n  font-weight: 700;\n}\n.slide-div .owl-nav button {\n  position: absolute;\n  top: 43%;\n}\n.slide-div .owl-nav button i {\n  font-size: 24px;\n  opacity: 0.5;\n  transition: all 0.4s;\n  color: #fff;\n}\n.slide-div .owl-nav button:hover i {\n  opacity: 1;\n  transition: all 0.4s;\n}\n.slide-div .owl-nav .owl-prev {\n  left: -190px;\n}\n.slide-div .owl-nav .owl-next {\n  right: -190px;\n}\n.slide-div .owl-dots .owl-dot {\n  height: 2px;\n  width: 25px;\n  margin-top: -80px;\n  margin-right: 8px;\n  margin-left: 8px;\n  opacity: 0.3;\n  background-color: #fff;\n}\n.slide-div .owl-dots .owl-dot.active {\n  opacity: 1;\n}\n.slide-div .owl-dots {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: -100px;\n  line-height: 0;\n}\n/*****Slider type 2*****/\n.silder-img {\n  background-size: cover;\n  min-height: 694px;\n}\n.slider-content {\n  padding-top: 178px;\n}\n.banner-head-2 {\n  font-size: 48px;\n  color: #fff;\n  line-height: 1.4;\n}\n.dots-slider .owl-dot {\n  height: 2px;\n  width: 25px;\n  margin: 0px;\n  margin-right: 15px;\n  opacity: 0.3;\n  background-color: #fff;\n  border: none;\n}\n.dots-slider {\n  line-height: 0;\n}\n.dots-slider .owl-dot.active {\n  opacity: 1;\n}\n.slider-btn {\n  width: 90px;\n  height: 50px;\n  border: 1px solid #fff;\n  color: #fff;\n}\n.slider-control {\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 60px;\n}\n.slider-btn:hover {\n  background-color: #fff;\n}\n.slide-social {\n  width: 52px;\n  position: relative;\n  text-align: right;\n  float: right;\n}\n.slide-social-outer {\n  position: absolute;\n  left: 0;\n  right: 0;\n}\n.slide-social ul > li {\n  display: block;\n}\n.slide-social li a {\n  width: 32px;\n  height: 32px;\n  line-height: 32px;\n  display: inline-block;\n  text-align: center;\n  margin-bottom: 15px;\n  font-size: 14px;\n  border-radius: 50%;\n}\n.slide-social li {\n  margin-bottom: 15px;\n}\n/*****Slider type 3*****/\n.slider-content-3 {\n  padding-top: 229px;\n}\n.slider-control.type-3 {\n  bottom: 25px;\n}\n.slider-control.type-3 .dots-slider .owl-dot {\n  opacity: 0.3;\n}\n.slider-control.type-3 .dots-slider .owl-dot.active {\n  opacity: 1;\n}\n.bg-green, .btn-round, .shop-icon .count, .main-menu li:after, .line-head .line, .blob.green, .btn-square, .slide-div .owl-dots .owl-dot.active, .callback-area[data-overlay]::before, .service-box:hover, .service-box:hover .service-icon-bg, .plus-btn, .arrow-navigation .nav-slide, .btn-round-blue:hover, .price-each.active, .price-tabs .nav-link.active, .testimonial-slider .arrow-btn:hover, .btn-square-green, .btn-square-white:hover, .each-blog:hover .blog-date, .contact-area:before, .social-links li a:hover, .links-list a:before, .scroll-btn, .dots-slider .owl-dot.active, .slide-social li a:hover, .team-green-head[data-overlay]::before, .career-box[data-overlay]::before, .mobile-menu-2.mean-container .meanmenu-reveal, .btn-square-border:hover, .slider-control.type-3 .dots-slider .owl-dot.active, .service-list-3:hover, .team-detail-3 h5:before, .each-team-3:hover .team-detail-3[data-overlay]::before, .btn-square-blue:hover, .btn-blue:hover, .price-each-2.active, .testimonial-3-slide .owl-dot.active span, .fancy-2:after, .right-box-head h4:after, .social-profile-box:hover, .block-quote-by:before, .tag-link:hover, .categories li a span, .slider-type-blog.owl-carousel .owl-nav button.owl-next, .slider-type-blog.owl-carousel .owl-nav button.owl-prev, .pagination-type1 ul li a:hover, .pagination-type1 ul li.active a, .portfolio-overlay:before, .line-right:after, .experience li:after {\n  background: red;\n}\n.bg-green, .btn-round, .shop-icon .count, .main-menu li:after, .line-head .line, .blob.green, .btn-square, .slide-div .owl-dots .owl-dot.active, .callback-area[data-overlay]::before, .service-box:hover, .service-box:hover .service-icon-bg, .plus-btn, .arrow-navigation .nav-slide, .btn-round-blue:hover, .price-each.active, .price-tabs .nav-link.active, .testimonial-slider .arrow-btn:hover, .btn-square-green, .btn-square-white:hover, .each-blog:hover .blog-date, .contact-area:before, .social-links li a:hover, .links-list a:before, .scroll-btn, .dots-slider .owl-dot.active, .slide-social li a:hover, .team-green-head[data-overlay]::before, .career-box[data-overlay]::before, .mobile-menu-2.mean-container .meanmenu-reveal, .btn-square-border:hover, .slider-control.type-3 .dots-slider .owl-dot.active, .service-list-3:hover, .team-detail-3 h5:before, .each-team-3:hover .team-detail-3[data-overlay]::before, .btn-square-blue:hover, .btn-blue:hover, .price-each-2.active, .testimonial-3-slide .owl-dot.active span, .fancy-2:after, .right-box-head h4:after, .social-profile-box:hover, .block-quote-by:before, .tag-link:hover, .categories li a span, .slider-type-blog.owl-carousel .owl-nav button.owl-next, .slider-type-blog.owl-carousel .owl-nav button.owl-prev, .pagination-type1 ul li a:hover, .pagination-type1 ul li.active a, .portfolio-overlay:before, .line-right:after, .experience li:after {\n  background: red;\n}\n.dream-btn-group a {\n  color: white;\n  background: #656565;\n}\n.dream-btn-group :hover {\n  background: #38b7ff !important;\n}\n.outer-dom {\n  display: flex;\n}\n.contenet h5 {\n  color: #38b7ff !important;\n  left: 0 !important;\n  display: flex !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9haG0taG9tZS9haG0taG9tZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9uaXRpc2gvRG9jdW1lbnRzL0FuZ3VsYXItUHJvamVjdHMvQUhNdjIvc3JjL2FwcC9jb21wb25lbnRzL2FobS1ob21lL2FobS1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBREVKO0FDQ0E7RUFDSSxZQUFBO0FERUo7QUNBQTtFQUNJLHFCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QURHSjtBQ0RBO0VBQ0ksc0JBQUE7QURJSjtBQ0VBO0VBQ0MsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QURDRDtBQ0VFO0VBQ0QsYUFBQTtBRENEO0FDQ0E7RUFDQztJQUFLLHdCQUFBO0VER0o7RUNGRDtJQUFPLHdDQUFBO0VES047QUFDRjtBQ1JBO0VBQ0M7SUFBSyx3QkFBQTtFREdKO0VDRkQ7SUFBTyx3Q0FBQTtFREtOO0FBQ0Y7QUNGQTtFQUNDLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpREFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FESUQ7QUNGQztFQUVDLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBREdGO0FDQUM7RUFDQyxRQUFBO0VBQ0EsTUFBQTtFQUNBLDBCQUFBO0FERUY7QUNDQztFQUNDLE9BQUE7RUFDQSxNQUFBO0FEQ0Y7QUNFQztFQUNDLDZDQUFBO1VBQUEscUNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QURBRjtBQ0dDO0VBQ0MsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEREY7QUNFRTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7QURBSDtBQ0tBOzt3Q0FBQTtBQUtBLHdCQUFBO0FBRUE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0FETEo7QUNRQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QURMSjtBQ1FBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0gsY0FBQTtFQUNBLGdCQUFBO0FETEQ7QUNRQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURMSjtBQ1FBO0VBQ0ksWUFBQTtFQUNBLFFBQUE7QURMSjtBQ1FBO0VBQ0ksYUFBQTtFQUNBLFFBQUE7QURMSjtBQ1FBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FETEo7QUNRQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBRExKO0FDUUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUVBLG9CQUFBO0VBQ0EsV0FBQTtBRExKO0FDUUE7RUFDSSxVQUFBO0VBRUEsb0JBQUE7QURMSjtBQ1FBO0VBQ0ksWUFBQTtBRExKO0FDUUE7RUFDSSxhQUFBO0FETEo7QUNRQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FETEo7QUNRQTtFQUNJLFVBQUE7QURMSjtBQ1FBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBRUEsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBRExKO0FDU0Esd0JBQUE7QUFFQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7QURQSjtBQ1VBO0VBQ0ksa0JBQUE7QURQSjtBQ1VBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBRFBKO0FDVUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QURQSjtBQ1VBO0VBQ0ksY0FBQTtBRFBKO0FDVUE7RUFDSSxVQUFBO0FEUEo7QUNVQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FEUEo7QUNVQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FEUEo7QUNVQTtFQUNJLHNCQUFBO0FEUEo7QUNVQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBRFBKO0FDVUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FEUEo7QUNVQTtFQUNJLGNBQUE7QURQSjtBQ1VBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBRFBKO0FDVUE7RUFDSSxtQkFBQTtBRFBKO0FDV0Esd0JBQUE7QUFFQTtFQUNJLGtCQUFBO0FEVEo7QUNZQTtFQUNJLFlBQUE7QURUSjtBQ1lBO0VBQ0ksWUFBQTtBRFRKO0FDWUE7RUFDSSxVQUFBO0FEVEo7QUNhQTtFQUNDLGVBQUE7QURWRDtBQ1lBO0VBQ0MsZUFBQTtBRFREO0FDY0M7RUFDQyxZQUFBO0VBQ0csbUJBQUE7QURYTDtBQ1lFO0VBQ0EsOEJBQUE7QURWRjtBQ2NBO0VBQ0ksYUFBQTtBRFhKO0FDYUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7QURWSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWhtLWhvbWUvYWhtLWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ubmF2YmFyLW1vYmlsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmJpLXg6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi75iqXCI7XG59XG5cbi5iaTo6YmVmb3JlLCBbY2xhc3NePWJpLV06OmJlZm9yZSwgW2NsYXNzKj1cIiBiaS1cIl06OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IGJvb3RzdHJhcC1pY29ucyAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdmVydGljYWwtYWxpZ246IC0wLjEyNWVtO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuKiwgOjphZnRlciwgOjpiZWZvcmUge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udmwge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjZGVhOWE7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5Aa2V5ZnJhbWVzIHNjcm9sbCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoLTI1MHB4ICogMTApKTtcbiAgfVxufVxuLnNsaWRlciB7XG4gIGJhY2tncm91bmQ6ICMxOTE5MTk7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYjQxMTExO1xuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2xpZGVyOjpiZWZvcmUsIC5zbGlkZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjAwcHg7XG4gIHotaW5kZXg6IDI7XG59XG4uc2xpZGVyOjphZnRlciB7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpO1xufVxuLnNsaWRlcjo6YmVmb3JlIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuLnNsaWRlciAuc2xpZGUtdHJhY2sge1xuICBhbmltYXRpb246IHNjcm9sbCA0MHMgbGluZWFyIGluZmluaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogY2FsYygyNTBweCAqIDE0KTtcbn1cbi5zbGlkZXIgLnNsaWRlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uc2xpZGVyIC5zbGlkZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xufVxuXG4vKiAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cbjQuIFNsaWRlclxuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uKi9cbi8qKioqKlNsaWRlciB0eXBlIDEqKioqKi9cbi5zbGlkZXItYXJlYSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi1oZWlnaHQ6IDczMHB4O1xufVxuXG4uc2xpZGUtZGl2IHtcbiAgcGFkZGluZy10b3A6IDI3M3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5saW5lLWhlYWQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBjb2xvcjogIzM4YjdmZjtcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcbn1cblxuLmxpbmUtaGVhZCAubGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDFweDtcbn1cblxuLmxpbmUtaGVhZCAubGluZS5iZWZvcmUge1xuICBsZWZ0OiAtMTE5cHg7XG4gIHRvcDogNTAlO1xufVxuXG4ubGluZS1oZWFkIC5saW5lLmFmdGVyIHtcbiAgcmlnaHQ6IC0xMTlweDtcbiAgdG9wOiA1MCU7XG59XG5cbi5iYW5uZXItaGVhZCB7XG4gIGZvbnQtc2l6ZTogNDZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiA2NnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc2xpZGUtZGl2IC5vd2wtbmF2IGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MyU7XG59XG5cbi5zbGlkZS1kaXYgLm93bC1uYXYgYnV0dG9uIGkge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG9wYWNpdHk6IDAuNTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2xpZGUtZGl2IC5vd2wtbmF2IGJ1dHRvbjpob3ZlciBpIHtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG5cbi5zbGlkZS1kaXYgLm93bC1uYXYgLm93bC1wcmV2IHtcbiAgbGVmdDogLTE5MHB4O1xufVxuXG4uc2xpZGUtZGl2IC5vd2wtbmF2IC5vd2wtbmV4dCB7XG4gIHJpZ2h0OiAtMTkwcHg7XG59XG5cbi5zbGlkZS1kaXYgLm93bC1kb3RzIC5vd2wtZG90IHtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAtODBweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG9wYWNpdHk6IDAuMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnNsaWRlLWRpdiAub3dsLWRvdHMgLm93bC1kb3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNsaWRlLWRpdiAub3dsLWRvdHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgYm90dG9tOiAtMTAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAwO1xufVxuXG4vKioqKipTbGlkZXIgdHlwZSAyKioqKiovXG4uc2lsZGVyLWltZyB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi1oZWlnaHQ6IDY5NHB4O1xufVxuXG4uc2xpZGVyLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMTc4cHg7XG59XG5cbi5iYW5uZXItaGVhZC0yIHtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cblxuLmRvdHMtc2xpZGVyIC5vd2wtZG90IHtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAyNXB4O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBvcGFjaXR5OiAwLjM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmRvdHMtc2xpZGVyIHtcbiAgbGluZS1oZWlnaHQ6IDA7XG59XG5cbi5kb3RzLXNsaWRlciAub3dsLWRvdC5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2xpZGVyLWJ0biB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2xpZGVyLWNvbnRyb2wge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDYwcHg7XG59XG5cbi5zbGlkZXItYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnNsaWRlLXNvY2lhbCB7XG4gIHdpZHRoOiA1MnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zbGlkZS1zb2NpYWwtb3V0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uc2xpZGUtc29jaWFsIHVsID4gbGkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNsaWRlLXNvY2lhbCBsaSBhIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnNsaWRlLXNvY2lhbCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi8qKioqKlNsaWRlciB0eXBlIDMqKioqKi9cbi5zbGlkZXItY29udGVudC0zIHtcbiAgcGFkZGluZy10b3A6IDIyOXB4O1xufVxuXG4uc2xpZGVyLWNvbnRyb2wudHlwZS0zIHtcbiAgYm90dG9tOiAyNXB4O1xufVxuXG4uc2xpZGVyLWNvbnRyb2wudHlwZS0zIC5kb3RzLXNsaWRlciAub3dsLWRvdCB7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLnNsaWRlci1jb250cm9sLnR5cGUtMyAuZG90cy1zbGlkZXIgLm93bC1kb3QuYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmJnLWdyZWVuLCAuYnRuLXJvdW5kLCAuc2hvcC1pY29uIC5jb3VudCwgLm1haW4tbWVudSBsaTphZnRlciwgLmxpbmUtaGVhZCAubGluZSwgLmJsb2IuZ3JlZW4sIC5idG4tc3F1YXJlLCAuc2xpZGUtZGl2IC5vd2wtZG90cyAub3dsLWRvdC5hY3RpdmUsIC5jYWxsYmFjay1hcmVhW2RhdGEtb3ZlcmxheV06OmJlZm9yZSwgLnNlcnZpY2UtYm94OmhvdmVyLCAuc2VydmljZS1ib3g6aG92ZXIgLnNlcnZpY2UtaWNvbi1iZywgLnBsdXMtYnRuLCAuYXJyb3ctbmF2aWdhdGlvbiAubmF2LXNsaWRlLCAuYnRuLXJvdW5kLWJsdWU6aG92ZXIsIC5wcmljZS1lYWNoLmFjdGl2ZSwgLnByaWNlLXRhYnMgLm5hdi1saW5rLmFjdGl2ZSwgLnRlc3RpbW9uaWFsLXNsaWRlciAuYXJyb3ctYnRuOmhvdmVyLCAuYnRuLXNxdWFyZS1ncmVlbiwgLmJ0bi1zcXVhcmUtd2hpdGU6aG92ZXIsIC5lYWNoLWJsb2c6aG92ZXIgLmJsb2ctZGF0ZSwgLmNvbnRhY3QtYXJlYTpiZWZvcmUsIC5zb2NpYWwtbGlua3MgbGkgYTpob3ZlciwgLmxpbmtzLWxpc3QgYTpiZWZvcmUsIC5zY3JvbGwtYnRuLCAuZG90cy1zbGlkZXIgLm93bC1kb3QuYWN0aXZlLCAuc2xpZGUtc29jaWFsIGxpIGE6aG92ZXIsIC50ZWFtLWdyZWVuLWhlYWRbZGF0YS1vdmVybGF5XTo6YmVmb3JlLCAuY2FyZWVyLWJveFtkYXRhLW92ZXJsYXldOjpiZWZvcmUsIC5tb2JpbGUtbWVudS0yLm1lYW4tY29udGFpbmVyIC5tZWFubWVudS1yZXZlYWwsIC5idG4tc3F1YXJlLWJvcmRlcjpob3ZlciwgLnNsaWRlci1jb250cm9sLnR5cGUtMyAuZG90cy1zbGlkZXIgLm93bC1kb3QuYWN0aXZlLCAuc2VydmljZS1saXN0LTM6aG92ZXIsIC50ZWFtLWRldGFpbC0zIGg1OmJlZm9yZSwgLmVhY2gtdGVhbS0zOmhvdmVyIC50ZWFtLWRldGFpbC0zW2RhdGEtb3ZlcmxheV06OmJlZm9yZSwgLmJ0bi1zcXVhcmUtYmx1ZTpob3ZlciwgLmJ0bi1ibHVlOmhvdmVyLCAucHJpY2UtZWFjaC0yLmFjdGl2ZSwgLnRlc3RpbW9uaWFsLTMtc2xpZGUgLm93bC1kb3QuYWN0aXZlIHNwYW4sIC5mYW5jeS0yOmFmdGVyLCAucmlnaHQtYm94LWhlYWQgaDQ6YWZ0ZXIsIC5zb2NpYWwtcHJvZmlsZS1ib3g6aG92ZXIsIC5ibG9jay1xdW90ZS1ieTpiZWZvcmUsIC50YWctbGluazpob3ZlciwgLmNhdGVnb3JpZXMgbGkgYSBzcGFuLCAuc2xpZGVyLXR5cGUtYmxvZy5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgYnV0dG9uLm93bC1uZXh0LCAuc2xpZGVyLXR5cGUtYmxvZy5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgYnV0dG9uLm93bC1wcmV2LCAucGFnaW5hdGlvbi10eXBlMSB1bCBsaSBhOmhvdmVyLCAucGFnaW5hdGlvbi10eXBlMSB1bCBsaS5hY3RpdmUgYSwgLnBvcnRmb2xpby1vdmVybGF5OmJlZm9yZSwgLmxpbmUtcmlnaHQ6YWZ0ZXIsIC5leHBlcmllbmNlIGxpOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuXG4uYmctZ3JlZW4sIC5idG4tcm91bmQsIC5zaG9wLWljb24gLmNvdW50LCAubWFpbi1tZW51IGxpOmFmdGVyLCAubGluZS1oZWFkIC5saW5lLCAuYmxvYi5ncmVlbiwgLmJ0bi1zcXVhcmUsIC5zbGlkZS1kaXYgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSwgLmNhbGxiYWNrLWFyZWFbZGF0YS1vdmVybGF5XTo6YmVmb3JlLCAuc2VydmljZS1ib3g6aG92ZXIsIC5zZXJ2aWNlLWJveDpob3ZlciAuc2VydmljZS1pY29uLWJnLCAucGx1cy1idG4sIC5hcnJvdy1uYXZpZ2F0aW9uIC5uYXYtc2xpZGUsIC5idG4tcm91bmQtYmx1ZTpob3ZlciwgLnByaWNlLWVhY2guYWN0aXZlLCAucHJpY2UtdGFicyAubmF2LWxpbmsuYWN0aXZlLCAudGVzdGltb25pYWwtc2xpZGVyIC5hcnJvdy1idG46aG92ZXIsIC5idG4tc3F1YXJlLWdyZWVuLCAuYnRuLXNxdWFyZS13aGl0ZTpob3ZlciwgLmVhY2gtYmxvZzpob3ZlciAuYmxvZy1kYXRlLCAuY29udGFjdC1hcmVhOmJlZm9yZSwgLnNvY2lhbC1saW5rcyBsaSBhOmhvdmVyLCAubGlua3MtbGlzdCBhOmJlZm9yZSwgLnNjcm9sbC1idG4sIC5kb3RzLXNsaWRlciAub3dsLWRvdC5hY3RpdmUsIC5zbGlkZS1zb2NpYWwgbGkgYTpob3ZlciwgLnRlYW0tZ3JlZW4taGVhZFtkYXRhLW92ZXJsYXldOjpiZWZvcmUsIC5jYXJlZXItYm94W2RhdGEtb3ZlcmxheV06OmJlZm9yZSwgLm1vYmlsZS1tZW51LTIubWVhbi1jb250YWluZXIgLm1lYW5tZW51LXJldmVhbCwgLmJ0bi1zcXVhcmUtYm9yZGVyOmhvdmVyLCAuc2xpZGVyLWNvbnRyb2wudHlwZS0zIC5kb3RzLXNsaWRlciAub3dsLWRvdC5hY3RpdmUsIC5zZXJ2aWNlLWxpc3QtMzpob3ZlciwgLnRlYW0tZGV0YWlsLTMgaDU6YmVmb3JlLCAuZWFjaC10ZWFtLTM6aG92ZXIgLnRlYW0tZGV0YWlsLTNbZGF0YS1vdmVybGF5XTo6YmVmb3JlLCAuYnRuLXNxdWFyZS1ibHVlOmhvdmVyLCAuYnRuLWJsdWU6aG92ZXIsIC5wcmljZS1lYWNoLTIuYWN0aXZlLCAudGVzdGltb25pYWwtMy1zbGlkZSAub3dsLWRvdC5hY3RpdmUgc3BhbiwgLmZhbmN5LTI6YWZ0ZXIsIC5yaWdodC1ib3gtaGVhZCBoNDphZnRlciwgLnNvY2lhbC1wcm9maWxlLWJveDpob3ZlciwgLmJsb2NrLXF1b3RlLWJ5OmJlZm9yZSwgLnRhZy1saW5rOmhvdmVyLCAuY2F0ZWdvcmllcyBsaSBhIHNwYW4sIC5zbGlkZXItdHlwZS1ibG9nLm93bC1jYXJvdXNlbCAub3dsLW5hdiBidXR0b24ub3dsLW5leHQsIC5zbGlkZXItdHlwZS1ibG9nLm93bC1jYXJvdXNlbCAub3dsLW5hdiBidXR0b24ub3dsLXByZXYsIC5wYWdpbmF0aW9uLXR5cGUxIHVsIGxpIGE6aG92ZXIsIC5wYWdpbmF0aW9uLXR5cGUxIHVsIGxpLmFjdGl2ZSBhLCAucG9ydGZvbGlvLW92ZXJsYXk6YmVmb3JlLCAubGluZS1yaWdodDphZnRlciwgLmV4cGVyaWVuY2UgbGk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5kcmVhbS1idG4tZ3JvdXAgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzY1NjU2NTtcbn1cbi5kcmVhbS1idG4tZ3JvdXAgOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzM4YjdmZiAhaW1wb3J0YW50O1xufVxuXG4ub3V0ZXItZG9tIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNvbnRlbmV0IGg1IHtcbiAgY29sb3I6ICMzOGI3ZmYgIWltcG9ydGFudDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59IiwiLm5hdmJhci1tb2JpbGV7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIHotaW5kZXg6IDk5OTtcbn1cblxuLmJpLXg6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXGY2MmFcIjtcbn1cbi5iaTo6YmVmb3JlLCBbY2xhc3NePVwiYmktXCJdOjpiZWZvcmUsIFtjbGFzcyo9XCIgYmktXCJdOjpiZWZvcmUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LWZhbWlseTogYm9vdHN0cmFwLWljb25zICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogLTAuMTI1ZW07XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cbiosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5cbiRhbmltYXRpb25TcGVlZDogNDBzO1xuXG4udmwge1xuXHRib3JkZXItbGVmdDogMXB4IHNvbGlkICNjZGVhOWE7XG5cdGhlaWdodDogODBweDtcblx0bWFyZ2luLXRvcDogMTBweDtcbiAgfVxuXG4gIC53cmFwcGVye1xuXHRkaXNwbGF5OiBmbGV4O1xuICB9XG5Aa2V5ZnJhbWVzIHNjcm9sbCB7XG5cdDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG5cdDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygtMjUwcHggKiAxMCkpfVxufVxuXG4vLyBTdHlsaW5nXG4uc2xpZGVyIHtcblx0YmFja2dyb3VuZDogIzE5MTkxOTtcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiNDExMTE7XG5cdGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IC01cHggcmdiYSgwLCAwLCAwLCAuMTI1KTtcblx0aGVpZ2h0OiAxMDBweDtcblx0b3ZlcmZsb3c6aGlkZGVuO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFxuXHQmOjpiZWZvcmUsXG5cdCY6OmFmdGVyIHtcblx0XHRjb250ZW50OiBcIlwiO1xuXHRcdGhlaWdodDogMTAwcHg7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHdpZHRoOiAyMDBweDtcblx0XHR6LWluZGV4OiAyO1xuXHR9XG5cdFxuXHQmOjphZnRlciB7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0dG9wOiAwO1xuXHRcdHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpO1xuXHR9XG5cblx0Jjo6YmVmb3JlIHtcblx0XHRsZWZ0OiAwO1xuXHRcdHRvcDogMDtcblx0fVxuXHRcblx0LnNsaWRlLXRyYWNrIHtcblx0XHRhbmltYXRpb246IHNjcm9sbCAkYW5pbWF0aW9uU3BlZWQgbGluZWFyIGluZmluaXRlO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0d2lkdGg6IGNhbGMoMjUwcHggKiAxNCk7XG5cdH1cblx0XG5cdC5zbGlkZSB7XG5cdFx0aGVpZ2h0OiAxMDBweDtcblx0XHR3aWR0aDogMjUwcHg7XG5cdFx0cGFkZGluZzogNXB4O1xuXHRcdHNwYW57XG5cdFx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcblx0XHR9XG5cdH1cbn1cblxuLyogLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXG40LiBTbGlkZXJcbi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLiovXG5cblxuLyoqKioqU2xpZGVyIHR5cGUgMSoqKioqL1xuXG4uc2xpZGVyLWFyZWEge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWluLWhlaWdodDogNzMwcHg7XG59XG5cbi5zbGlkZS1kaXYge1xuICAgIHBhZGRpbmctdG9wOiAyNzNweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5saW5lLWhlYWQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAuOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMTNweDtcbiAgICBtYXJnaW4tYm90dG9tOjUwcHg7XG5cdGNvbG9yOiAjMzhiN2ZmO1xuXHRtYXJnaW4tbGVmdDogMTUlO1xufVxuXG4ubGluZS1oZWFkIC5saW5lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMXB4O1xufVxuXG4ubGluZS1oZWFkIC5saW5lLmJlZm9yZSB7XG4gICAgbGVmdDogLTExOXB4O1xuICAgIHRvcDogNTAlO1xufVxuXG4ubGluZS1oZWFkIC5saW5lLmFmdGVyIHtcbiAgICByaWdodDogLTExOXB4O1xuICAgIHRvcDogNTAlO1xufVxuXG4uYmFubmVyLWhlYWQge1xuICAgIGZvbnQtc2l6ZTogNDZweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsaW5lLWhlaWdodDogNjZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc2xpZGUtZGl2IC5vd2wtbmF2IGJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDMlO1xufVxuXG4uc2xpZGUtZGl2IC5vd2wtbmF2IGJ1dHRvbiBpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgb3BhY2l0eTogLjU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjRzO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5zbGlkZS1kaXYgLm93bC1uYXYgYnV0dG9uOmhvdmVyIGkge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjRzO1xuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XG59XG5cbi5zbGlkZS1kaXYgLm93bC1uYXYgLm93bC1wcmV2IHtcbiAgICBsZWZ0OiAtMTkwcHg7XG59XG5cbi5zbGlkZS1kaXYgLm93bC1uYXYgLm93bC1uZXh0IHtcbiAgICByaWdodDogLTE5MHB4O1xufVxuXG4uc2xpZGUtZGl2IC5vd2wtZG90cyAub3dsLWRvdCB7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgbWFyZ2luLXRvcDotODBweDtcbiAgICBtYXJnaW4tcmlnaHQ6OHB4O1xuICAgIG1hcmdpbi1sZWZ0OjhweDtcbiAgICBvcGFjaXR5OiAuMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uc2xpZGUtZGl2IC5vd2wtZG90cyAub3dsLWRvdC5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5zbGlkZS1kaXYgLm93bC1kb3RzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBib3R0b206IC0xMDBweDtcbiAgICBsaW5lLWhlaWdodDogMDtcbn1cblxuXG4vKioqKipTbGlkZXIgdHlwZSAyKioqKiovXG5cbi5zaWxkZXItaW1nIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1pbi1oZWlnaHQ6IDY5NHB4O1xufVxuXG4uc2xpZGVyLWNvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAxNzhweDtcbn1cblxuLmJhbm5lci1oZWFkLTIge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsaW5lLWhlaWdodDogMS40O1xufVxuXG4uZG90cy1zbGlkZXIgLm93bC1kb3Qge1xuICAgIGhlaWdodDogMnB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBvcGFjaXR5OiAuMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmRvdHMtc2xpZGVyIHtcbiAgICBsaW5lLWhlaWdodDogMDtcbn1cblxuLmRvdHMtc2xpZGVyIC5vd2wtZG90LmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNsaWRlci1idG4ge1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uc2xpZGVyLWNvbnRyb2wge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogNjBweDtcbn1cblxuLnNsaWRlci1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5zbGlkZS1zb2NpYWwge1xuICAgIHdpZHRoOiA1MnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zbGlkZS1zb2NpYWwtb3V0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuXG4uc2xpZGUtc29jaWFsIHVsID4gbGkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc2xpZGUtc29jaWFsIGxpIGEge1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnNsaWRlLXNvY2lhbCBsaSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuXG4vKioqKipTbGlkZXIgdHlwZSAzKioqKiovXG5cbi5zbGlkZXItY29udGVudC0zIHtcbiAgICBwYWRkaW5nLXRvcDogMjI5cHg7XG59XG5cbi5zbGlkZXItY29udHJvbC50eXBlLTMge1xuICAgIGJvdHRvbTogMjVweDtcbn1cblxuLnNsaWRlci1jb250cm9sLnR5cGUtMyAuZG90cy1zbGlkZXIgLm93bC1kb3Qge1xuICAgIG9wYWNpdHk6IC4zO1xufVxuXG4uc2xpZGVyLWNvbnRyb2wudHlwZS0zIC5kb3RzLXNsaWRlciAub3dsLWRvdC5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cblxuLmJnLWdyZWVuLCAuYnRuLXJvdW5kLCAuc2hvcC1pY29uIC5jb3VudCwgLm1haW4tbWVudSBsaTphZnRlciwgLmxpbmUtaGVhZCAubGluZSwgLmJsb2IuZ3JlZW4sIC5idG4tc3F1YXJlLCAuc2xpZGUtZGl2IC5vd2wtZG90cyAub3dsLWRvdC5hY3RpdmUsIC5jYWxsYmFjay1hcmVhW2RhdGEtb3ZlcmxheV06OmJlZm9yZSwgLnNlcnZpY2UtYm94OmhvdmVyLCAuc2VydmljZS1ib3g6aG92ZXIgLnNlcnZpY2UtaWNvbi1iZywgLnBsdXMtYnRuLCAuYXJyb3ctbmF2aWdhdGlvbiAubmF2LXNsaWRlLCAuYnRuLXJvdW5kLWJsdWU6aG92ZXIsIC5wcmljZS1lYWNoLmFjdGl2ZSwgLnByaWNlLXRhYnMgLm5hdi1saW5rLmFjdGl2ZSwgLnRlc3RpbW9uaWFsLXNsaWRlciAuYXJyb3ctYnRuOmhvdmVyLCAuYnRuLXNxdWFyZS1ncmVlbiwgLmJ0bi1zcXVhcmUtd2hpdGU6aG92ZXIsIC5lYWNoLWJsb2c6aG92ZXIgLmJsb2ctZGF0ZSwgLmNvbnRhY3QtYXJlYTpiZWZvcmUsIC5zb2NpYWwtbGlua3MgbGkgYTpob3ZlciwgLmxpbmtzLWxpc3QgYTpiZWZvcmUsIC5zY3JvbGwtYnRuLCAuZG90cy1zbGlkZXIgLm93bC1kb3QuYWN0aXZlLCAuc2xpZGUtc29jaWFsIGxpIGE6aG92ZXIsIC50ZWFtLWdyZWVuLWhlYWRbZGF0YS1vdmVybGF5XTo6YmVmb3JlLCAuY2FyZWVyLWJveFtkYXRhLW92ZXJsYXldOjpiZWZvcmUsIC5tb2JpbGUtbWVudS0yLm1lYW4tY29udGFpbmVyIC5tZWFubWVudS1yZXZlYWwsIC5idG4tc3F1YXJlLWJvcmRlcjpob3ZlciwgLnNsaWRlci1jb250cm9sLnR5cGUtMyAuZG90cy1zbGlkZXIgLm93bC1kb3QuYWN0aXZlLCAuc2VydmljZS1saXN0LTM6aG92ZXIsIC50ZWFtLWRldGFpbC0zIGg1OmJlZm9yZSwgLmVhY2gtdGVhbS0zOmhvdmVyIC50ZWFtLWRldGFpbC0zW2RhdGEtb3ZlcmxheV06OmJlZm9yZSwgLmJ0bi1zcXVhcmUtYmx1ZTpob3ZlciwgLmJ0bi1ibHVlOmhvdmVyLCAucHJpY2UtZWFjaC0yLmFjdGl2ZSwgLnRlc3RpbW9uaWFsLTMtc2xpZGUgLm93bC1kb3QuYWN0aXZlIHNwYW4sIC5mYW5jeS0yOmFmdGVyLCAucmlnaHQtYm94LWhlYWQgaDQ6YWZ0ZXIsIC5zb2NpYWwtcHJvZmlsZS1ib3g6aG92ZXIsIC5ibG9jay1xdW90ZS1ieTpiZWZvcmUsIC50YWctbGluazpob3ZlciwgLmNhdGVnb3JpZXMgbGkgYSBzcGFuLCAuc2xpZGVyLXR5cGUtYmxvZy5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgYnV0dG9uLm93bC1uZXh0LCAuc2xpZGVyLXR5cGUtYmxvZy5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgYnV0dG9uLm93bC1wcmV2LCAucGFnaW5hdGlvbi10eXBlMSB1bCBsaSBhOmhvdmVyLCAucGFnaW5hdGlvbi10eXBlMSB1bCBsaS5hY3RpdmUgYSwgLnBvcnRmb2xpby1vdmVybGF5OmJlZm9yZSwgLmxpbmUtcmlnaHQ6YWZ0ZXIsIC5leHBlcmllbmNlIGxpOmFmdGVye1xuXHRiYWNrZ3JvdW5kOiByZWQ7XG59XG4uYmctZ3JlZW4sIC5idG4tcm91bmQsIC5zaG9wLWljb24gLmNvdW50LCAubWFpbi1tZW51IGxpOmFmdGVyLCAubGluZS1oZWFkIC5saW5lLCAuYmxvYi5ncmVlbiwgLmJ0bi1zcXVhcmUsIC5zbGlkZS1kaXYgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSwgLmNhbGxiYWNrLWFyZWFbZGF0YS1vdmVybGF5XTo6YmVmb3JlLCAuc2VydmljZS1ib3g6aG92ZXIsIC5zZXJ2aWNlLWJveDpob3ZlciAuc2VydmljZS1pY29uLWJnLCAucGx1cy1idG4sIC5hcnJvdy1uYXZpZ2F0aW9uIC5uYXYtc2xpZGUsIC5idG4tcm91bmQtYmx1ZTpob3ZlciwgLnByaWNlLWVhY2guYWN0aXZlLCAucHJpY2UtdGFicyAubmF2LWxpbmsuYWN0aXZlLCAudGVzdGltb25pYWwtc2xpZGVyIC5hcnJvdy1idG46aG92ZXIsIC5idG4tc3F1YXJlLWdyZWVuLCAuYnRuLXNxdWFyZS13aGl0ZTpob3ZlciwgLmVhY2gtYmxvZzpob3ZlciAuYmxvZy1kYXRlLCAuY29udGFjdC1hcmVhOmJlZm9yZSwgLnNvY2lhbC1saW5rcyBsaSBhOmhvdmVyLCAubGlua3MtbGlzdCBhOmJlZm9yZSwgLnNjcm9sbC1idG4sIC5kb3RzLXNsaWRlciAub3dsLWRvdC5hY3RpdmUsIC5zbGlkZS1zb2NpYWwgbGkgYTpob3ZlciwgLnRlYW0tZ3JlZW4taGVhZFtkYXRhLW92ZXJsYXldOjpiZWZvcmUsIC5jYXJlZXItYm94W2RhdGEtb3ZlcmxheV06OmJlZm9yZSwgLm1vYmlsZS1tZW51LTIubWVhbi1jb250YWluZXIgLm1lYW5tZW51LXJldmVhbCwgLmJ0bi1zcXVhcmUtYm9yZGVyOmhvdmVyLCAuc2xpZGVyLWNvbnRyb2wudHlwZS0zIC5kb3RzLXNsaWRlciAub3dsLWRvdC5hY3RpdmUsIC5zZXJ2aWNlLWxpc3QtMzpob3ZlciwgLnRlYW0tZGV0YWlsLTMgaDU6YmVmb3JlLCAuZWFjaC10ZWFtLTM6aG92ZXIgLnRlYW0tZGV0YWlsLTNbZGF0YS1vdmVybGF5XTo6YmVmb3JlLCAuYnRuLXNxdWFyZS1ibHVlOmhvdmVyLCAuYnRuLWJsdWU6aG92ZXIsIC5wcmljZS1lYWNoLTIuYWN0aXZlLCAudGVzdGltb25pYWwtMy1zbGlkZSAub3dsLWRvdC5hY3RpdmUgc3BhbiwgLmZhbmN5LTI6YWZ0ZXIsIC5yaWdodC1ib3gtaGVhZCBoNDphZnRlciwgLnNvY2lhbC1wcm9maWxlLWJveDpob3ZlciwgLmJsb2NrLXF1b3RlLWJ5OmJlZm9yZSwgLnRhZy1saW5rOmhvdmVyLCAuY2F0ZWdvcmllcyBsaSBhIHNwYW4sIC5zbGlkZXItdHlwZS1ibG9nLm93bC1jYXJvdXNlbCAub3dsLW5hdiBidXR0b24ub3dsLW5leHQsIC5zbGlkZXItdHlwZS1ibG9nLm93bC1jYXJvdXNlbCAub3dsLW5hdiBidXR0b24ub3dsLXByZXYsIC5wYWdpbmF0aW9uLXR5cGUxIHVsIGxpIGE6aG92ZXIsIC5wYWdpbmF0aW9uLXR5cGUxIHVsIGxpLmFjdGl2ZSBhLCAucG9ydGZvbGlvLW92ZXJsYXk6YmVmb3JlLCAubGluZS1yaWdodDphZnRlciwgLmV4cGVyaWVuY2UgbGk6YWZ0ZXJ7XG5cdGJhY2tncm91bmQ6IHJlZDtcbn1cblxuXG4uZHJlYW0tYnRuLWdyb3Vwe1xuXHRhe1xuXHRcdGNvbG9yOiB3aGl0ZTtcbiAgICBcdGJhY2tncm91bmQ6ICM2NTY1NjU7XG5cdH06aG92ZXJ7XG5cdFx0YmFja2dyb3VuZDogIzM4YjdmZiAhaW1wb3J0YW50O1xuXHR9XG59XG5cbi5vdXRlci1kb217XG4gICAgZGlzcGxheTogZmxleDtcbn0gXG4uY29udGVuZXQgaDV7XG4gICAgY29sb3I6ICAjMzhiN2ZmICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/ahm-home/ahm-home.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/ahm-home/ahm-home.component.ts ***!
  \***********************************************************/
/*! exports provided: AhmHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AhmHomeComponent", function() { return AhmHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AhmHomeComponent = class AhmHomeComponent {
    constructor() {
        this.title = 'AHMv2';
        this.isLoad = false;
        this.newsContents = [];
    }
    ngOnInit() {
        this.isLoad = true;
        setInterval(() => {
            this.isLoad = false;
        }, 2000);
        for (let index = 0; index < 10; index++) {
            this.newsContents.push(index + 1 + ' - Do we Media Vultures Perpetuate Mass Shootings?');
        }
        this.listResources;
    }
    listResources() {
        const obj = { name: 'nik' };
        return obj;
    }
};
AhmHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ahm-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ahm-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ahm-home.component.scss */ "./src/app/components/ahm-home/ahm-home.component.scss")).default]
    })
], AhmHomeComponent);



/***/ }),

/***/ "./src/app/components/ahm-home/ahm-home.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/ahm-home/ahm-home.module.ts ***!
  \********************************************************/
/*! exports provided: AhmHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AhmHomeModule", function() { return AhmHomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ahm_services_ahm_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ahm-services/ahm-services.component */ "./src/app/components/ahm-home/ahm-services/ahm-services.component.ts");
/* harmony import */ var _ahm_about_ahm_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ahm-about/ahm-about.component */ "./src/app/components/ahm-home/ahm-about/ahm-about.component.ts");
/* harmony import */ var _ahm_why_us_ahm_why_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ahm-why-us/ahm-why-us.component */ "./src/app/components/ahm-home/ahm-why-us/ahm-why-us.component.ts");
/* harmony import */ var _ahm_portfolio_ahm_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ahm-portfolio/ahm-portfolio.component */ "./src/app/components/ahm-home/ahm-portfolio/ahm-portfolio.component.ts");
/* harmony import */ var _ahm_pricing_ahm_pricing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ahm-pricing/ahm-pricing.component */ "./src/app/components/ahm-home/ahm-pricing/ahm-pricing.component.ts");
/* harmony import */ var _ahm_team_ahm_team_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ahm-team/ahm-team.component */ "./src/app/components/ahm-home/ahm-team/ahm-team.component.ts");
/* harmony import */ var _ahm_contact_ahm_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ahm-contact/ahm-contact.component */ "./src/app/components/ahm-home/ahm-contact/ahm-contact.component.ts");
/* harmony import */ var _ahm_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ahm-home.component */ "./src/app/components/ahm-home/ahm-home.component.ts");











let AhmHomeModule = class AhmHomeModule {
};
AhmHomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ahm_services_ahm_services_component__WEBPACK_IMPORTED_MODULE_3__["AhmServicesComponent"],
            _ahm_home_component__WEBPACK_IMPORTED_MODULE_10__["AhmHomeComponent"],
            _ahm_about_ahm_about_component__WEBPACK_IMPORTED_MODULE_4__["AhmAboutComponent"],
            _ahm_why_us_ahm_why_us_component__WEBPACK_IMPORTED_MODULE_5__["AhmWhyUsComponent"],
            _ahm_portfolio_ahm_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["AhmPortfolioComponent"],
            _ahm_pricing_ahm_pricing_component__WEBPACK_IMPORTED_MODULE_7__["AhmPricingComponent"],
            _ahm_team_ahm_team_component__WEBPACK_IMPORTED_MODULE_8__["AhmTeamComponent"],
            _ahm_contact_ahm_contact_component__WEBPACK_IMPORTED_MODULE_9__["AhmContactComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], AhmHomeModule);



/***/ }),

/***/ "./src/app/components/ahm-home/ahm-portfolio/ahm-portfolio.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/ahm-home/ahm-portfolio/ahm-portfolio.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWhtLWhvbWUvYWhtLXBvcnRmb2xpby9haG0tcG9ydGZvbGlvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/ahm-home/ahm-portfolio/ahm-portfolio.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/ahm-home/ahm-portfolio/ahm-portfolio.component.ts ***!
  \******************************************************************************/
/*! exports provided: AhmPortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AhmPortfolioComponent", function() { return AhmPortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AhmPortfolioComponent = class AhmPortfolioComponent {
    constructor() { }
    ngOnInit() {
    }
};
AhmPortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ahm-portfolio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ahm-portfolio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-portfolio/ahm-portfolio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ahm-portfolio.component.css */ "./src/app/components/ahm-home/ahm-portfolio/ahm-portfolio.component.css")).default]
    })
], AhmPortfolioComponent);



/***/ }),

/***/ "./src/app/components/ahm-home/ahm-pricing/ahm-pricing.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/ahm-home/ahm-pricing/ahm-pricing.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box:hover + h3{\n    transform: scale(1);\n}\n\n.pricing .box .btn-buy:hover > .cart-icon-hover  {\n    background: #e82d2d;\n    opacity: 1;\n  transition: all 0.6s;\n  }\n\n.cart-icon-hover{\n    margin-left: 5px;\n    opacity: 0;\n}\n\n.pricing-wrapper{\n    margin-bottom: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9haG0taG9tZS9haG0tcHJpY2luZy9haG0tcHJpY2luZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7RUFDWixvQkFBb0I7RUFDcEI7O0FBRUY7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUdBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9haG0taG9tZS9haG0tcHJpY2luZy9haG0tcHJpY2luZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveDpob3ZlciArIGgze1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5wcmljaW5nIC5ib3ggLmJ0bi1idXk6aG92ZXIgPiAuY2FydC1pY29uLWhvdmVyICB7XG4gICAgYmFja2dyb3VuZDogI2U4MmQyZDtcbiAgICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cztcbiAgfVxuXG4uY2FydC1pY29uLWhvdmVye1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuXG4ucHJpY2luZy13cmFwcGVye1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/ahm-home/ahm-pricing/ahm-pricing.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/ahm-home/ahm-pricing/ahm-pricing.component.ts ***!
  \**************************************************************************/
/*! exports provided: AhmPricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AhmPricingComponent", function() { return AhmPricingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_almight_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/almight.service */ "./src/app/service/almight.service.ts");



let AhmPricingComponent = class AhmPricingComponent {
    constructor(almightyService) {
        this.almightyService = almightyService;
        this.prices = [];
    }
    ngOnInit() {
        const price = [{
                title: 'MONTHLY',
                amount: '11,500',
                features: ['Completely Automated', 'Trades Indices', 'WhatsApp Support', 'Remote Support', '1 Strategy', '1000 Rs.Maintenance Charges For Every Month'],
                isActive: false
            }, {
                title: 'QUARTERLY',
                amount: '28,000',
                features: ['Completely Automated', 'Trades Indices', 'WhatsApp Support', 'Remote Support', '3-4 Strategy', '1000 Rs.Maintenance Charges For Every Month'],
                isActive: false
            }, {
                title: 'HALF YEARLY',
                amount: '48,000',
                features: ['Completely Automated', 'Trades Indices', 'WhatsApp Support', 'Remote Support', '10 - 15 Strategy', '1000 Rs.Maintenance Charges For Every Month'],
                isActive: false
            }, {
                title: 'YEARLY',
                amount: '88,000',
                features: ['Completely Automated', 'Trades Indices', 'WhatsApp Support', 'Remote Support', '20 - 25 Strategy', '1000 Rs.Maintenance Charges For Every Month'],
                isActive: false
            }];
        this.prices = price;
        // this.almightyService.getNews().subscribe(
        //   (data: any) => {
        //     console.log(data)
        //     if(data && data.id){
        //     }
        //   },
        //   (err: any) => {
        //     console.error(err);
        //    }
        // );
    }
};
AhmPricingComponent.ctorParameters = () => [
    { type: _service_almight_service__WEBPACK_IMPORTED_MODULE_2__["AlmightyService"] }
];
AhmPricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ahm-pricing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ahm-pricing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-pricing/ahm-pricing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ahm-pricing.component.css */ "./src/app/components/ahm-home/ahm-pricing/ahm-pricing.component.css")).default]
    })
], AhmPricingComponent);



/***/ }),

/***/ "./src/app/components/ahm-home/ahm-services/ahm-services.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/ahm-home/ahm-services/ahm-services.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".service-img{\n    height: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9haG0taG9tZS9haG0tc2VydmljZXMvYWhtLXNlcnZpY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9haG0taG9tZS9haG0tc2VydmljZXMvYWhtLXNlcnZpY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VydmljZS1pbWd7XG4gICAgaGVpZ2h0OiAzcmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/ahm-home/ahm-services/ahm-services.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/ahm-home/ahm-services/ahm-services.component.ts ***!
  \****************************************************************************/
/*! exports provided: AhmServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AhmServicesComponent", function() { return AhmServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AhmServicesComponent = class AhmServicesComponent {
    constructor() { }
    ngOnInit() {
    }
};
AhmServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ahm-services',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ahm-services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-services/ahm-services.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ahm-services.component.css */ "./src/app/components/ahm-home/ahm-services/ahm-services.component.css")).default]
    })
], AhmServicesComponent);



/***/ }),

/***/ "./src/app/components/ahm-home/ahm-team/ahm-team.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/ahm-home/ahm-team/ahm-team.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWhtLWhvbWUvYWhtLXRlYW0vYWhtLXRlYW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/components/ahm-home/ahm-team/ahm-team.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/ahm-home/ahm-team/ahm-team.component.ts ***!
  \********************************************************************/
/*! exports provided: AhmTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AhmTeamComponent", function() { return AhmTeamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AhmTeamComponent = class AhmTeamComponent {
    constructor() { }
    ngOnInit() {
    }
};
AhmTeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ahm-team',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ahm-team.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-team/ahm-team.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ahm-team.component.css */ "./src/app/components/ahm-home/ahm-team/ahm-team.component.css")).default]
    })
], AhmTeamComponent);



/***/ }),

/***/ "./src/app/components/ahm-home/ahm-why-us/ahm-why-us.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/ahm-home/ahm-why-us/ahm-why-us.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWhtLWhvbWUvYWhtLXdoeS11cy9haG0td2h5LXVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/ahm-home/ahm-why-us/ahm-why-us.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/ahm-home/ahm-why-us/ahm-why-us.component.ts ***!
  \************************************************************************/
/*! exports provided: AhmWhyUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AhmWhyUsComponent", function() { return AhmWhyUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AhmWhyUsComponent = class AhmWhyUsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AhmWhyUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ahm-why-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ahm-why-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-home/ahm-why-us/ahm-why-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ahm-why-us.component.css */ "./src/app/components/ahm-home/ahm-why-us/ahm-why-us.component.css")).default]
    })
], AhmWhyUsComponent);



/***/ }),

/***/ "./src/app/components/ahm-login/ahm-login.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/ahm-login/ahm-login.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper-div{\n    background-image: linear-gradient(to right bottom, #cc1616, #e22476, #c762c7, #8693f7, #38b7ff);\n}\n.user_card {\n    height: 400px;\n    width: 25rem;\n    margin-top: auto;\n    margin-bottom: auto;\n    background: #f39c12;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    padding: 10px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    border-radius: 5px;\n\n}\n.brand_logo_container {\n    position: absolute;\n    height: 170px;\n    width: 170px;\n    top: -75px;\n    border-radius: 50%;\n    background-color: #c0392b;\n    padding: 10px;\n    text-align: center;\n}\n.brand_logo {\n    -o-object-fit: cover;\n       object-fit: cover;\n    height: 7rem;\n    margin-top: 1rem;\n    margin-left: 1rem;\n}\n.form_container {\n    margin-top: 100px;\n}\n.login_btn {\n    width: 100%;\n    background: #c0392b !important;\n    color: white !important;\n}\n.login_btn:focus {\n    box-shadow: none !important;\n    outline: 0px !important;\n}\n.login_container {\n    padding: 0 2rem;\n    margin-top: 3rem !important;\n}\n.input-group-text {\n    background: #c0392b !important;\n    color: white !important;\n    border: 0 !important;\n    border-radius: 0.25rem 0 0 0.25rem !important;\n}\n.input_user,\n.input_pass:focus {\n    box-shadow: none !important;\n    outline: 0px !important;\n}\n.custom-checkbox .custom-control-input:checked~.custom-control-label::before {\n    background-color: #c0392b !important;\n}\n.fa{\n    font-size: 27px !important;\n}\n#customControlInline{\n    margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9haG0tbG9naW4vYWhtLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrRkFBK0Y7QUFDbkc7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiw0RUFBNEU7SUFDNUUsb0ZBQW9GO0lBQ3BGLGlGQUFpRjtJQUNqRixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQiw2Q0FBNkM7QUFDakQ7QUFDQTs7SUFFSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFFQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9haG0tbG9naW4vYWhtLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlci1kaXZ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IGJvdHRvbSwgI2NjMTYxNiwgI2UyMjQ3NiwgI2M3NjJjNywgIzg2OTNmNywgIzM4YjdmZik7XG59XG4udXNlcl9jYXJkIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiAyNXJlbTtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgYmFja2dyb3VuZDogI2YzOWMxMjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxufVxuLmJyYW5kX2xvZ29fY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxNzBweDtcbiAgICB3aWR0aDogMTcwcHg7XG4gICAgdG9wOiAtNzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5icmFuZF9sb2dvIHtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBoZWlnaHQ6IDdyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cbi5mb3JtX2NvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG4ubG9naW5fYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjYzAzOTJiICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG4ubG9naW5fYnRuOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XG59XG4ubG9naW5fY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDJyZW07XG4gICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xufVxuLmlucHV0LWdyb3VwLXRleHQge1xuICAgIGJhY2tncm91bmQ6ICNjMDM5MmIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAgMCAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG4uaW5wdXRfdXNlcixcbi5pbnB1dF9wYXNzOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2Vkfi5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzAzOTJiICFpbXBvcnRhbnQ7XG59XG5cbi5mYXtcbiAgICBmb250LXNpemU6IDI3cHggIWltcG9ydGFudDtcbn1cblxuI2N1c3RvbUNvbnRyb2xJbmxpbmV7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/ahm-login/ahm-login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/ahm-login/ahm-login.component.ts ***!
  \*************************************************************/
/*! exports provided: AhmLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AhmLoginComponent", function() { return AhmLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AhmLoginComponent = class AhmLoginComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    userLogin() {
        this.router.navigate(['admin']);
    }
};
AhmLoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AhmLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ahm-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ahm-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ahm-login/ahm-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ahm-login.component.css */ "./src/app/components/ahm-login/ahm-login.component.css")).default]
    })
], AhmLoginComponent);



/***/ }),

/***/ "./src/app/service/almight.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/almight.service.ts ***!
  \********************************************/
/*! exports provided: AlmightyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmightyService", function() { return AlmightyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api.service */ "./src/app/service/api.service.ts");



let AlmightyService = class AlmightyService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    /* get list of news */
    getNews() {
        return this.apiService.invokeAPI(`/news`, 'GET');
    }
};
AlmightyService.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
AlmightyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlmightyService);



/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.wqmEndpoint = ("https://cute-pantsuit-crab.cyclic.app" || false);
    }
    getDefaultHeaders() {
        const defaultHeader = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/json;charset=UTF-8',
        };
        return defaultHeader;
    }
    invokeAPI(path, method, request, requestHeader) {
        const url = this.wqmEndpoint + path;
        return this.getHttpService(url, method, requestHeader, request);
    }
    getHttpService(url, method, requestHeader, requestData) {
        const newHttpHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](Object.assign(requestHeader || {}, this.getDefaultHeaders()));
        const httpOptions = (requestHeader instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]) ? requestHeader : newHttpHeader;
        const newHTTPParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ encoder: new CustomHttpParamEncoder(), fromObject: requestData });
        switch (method) {
            case 'GET': return this.http.get(url, { observe: 'response', params: newHTTPParams, headers: httpOptions });
            case 'POST': return this.http.post(url, requestData, { observe: 'response', headers: httpOptions });
            case 'PUT': return this.http.put(url, requestData, { observe: 'response', headers: httpOptions });
            case 'PATCH': return this.http.patch(url, requestData, { observe: 'response', headers: httpOptions });
            case 'DELETE': return this.http.delete(url, { observe: 'response', params: newHTTPParams, headers: httpOptions });
            default: throw new Error('Invalid Method');
        }
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);

class CustomHttpParamEncoder {
    encodeKey(key) {
        return encodeURIComponent(key);
    }
    encodeValue(value) {
        return encodeURIComponent(value);
    }
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nitish/Documents/Angular-Projects/AHMv2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map