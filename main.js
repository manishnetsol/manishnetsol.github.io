(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-word/add-word.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-word/add-word.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-word/add-word.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-word/add-word.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Add New Word</h1>\n    <form (ngSubmit)=\"userSubmit()\" #addform=\"ngForm\">\n    <div class=\"form-group col-md-6\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" [(ngModel)]=\"model.name\" name=\"name\" class=\"form-control\" id=\"name\" required #name=\"ngModel\">\n    </div>\n    <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\n    Name is required\n    </div>\n    <div class=\"form-group  col-md-6\">\n    <label for=\"meaning\">Meaning</label>\n    <input type=\"text\" [(ngModel)]=\"model.meaning\" name=\"meaning\" class=\"form-control\" id=\"meaning\" required #meaning=\"ngModel\">\n    </div>\n    <div [hidden]=\"meaning.valid || meaning.pristine\" class=\"alert alert-danger\">\n        Meaning is required\n    </div>\n    <button type=\"submit\" class=\"btn btn-default form-control  col-md-6\" [disabled]=\"!addform.form.valid\">Add Word</button>\n    </form>\n\n    <p>\n      Note: Please add the words and meaning wisely as currently, this will get permanently stored in firebase database. \n    </p>\n    </div>"

/***/ }),

/***/ "./src/app/add-word/add-word.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-word/add-word.component.ts ***!
  \************************************************/
/*! exports provided: AddWordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWordComponent", function() { return AddWordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _word_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../word.service */ "./src/app/word.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddWordComponent = /** @class */ (function () {
    function AddWordComponent(wordService) {
        this.wordService = wordService;
        this.model = { name: '', meaning: '' };
    }
    AddWordComponent.prototype.ngOnInit = function () {
    };
    AddWordComponent.prototype.userSubmit = function () {
        this.wordService.addWord(this.model);
        //this.model.firstname = ‘’;
        //this.model.lastname = ‘’;
        //this.model.mobile_no = ‘’;
    };
    AddWordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-word',
            template: __webpack_require__(/*! ./add-word.component.html */ "./src/app/add-word/add-word.component.html"),
            styles: [__webpack_require__(/*! ./add-word.component.css */ "./src/app/add-word/add-word.component.css")]
        }),
        __metadata("design:paramtypes", [_word_service__WEBPACK_IMPORTED_MODULE_1__["WordService"]])
    ], AddWordComponent);
    return AddWordComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _word_detail_word_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./word-detail/word-detail.component */ "./src/app/word-detail/word-detail.component.ts");
/* harmony import */ var _add_word_add_word_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-word/add-word.component */ "./src/app/add-word/add-word.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'word-detail/:name', component: _word_detail_word_detail_component__WEBPACK_IMPORTED_MODULE_3__["WordDetailComponent"] },
    { path: 'add', component: _add_word_add_word_component__WEBPACK_IMPORTED_MODULE_4__["AddWordComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" type=\"text/css\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\">\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" ></script>\n\n<app-header></app-header>\n<app-sidebar></app-sidebar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'World of words';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _word_detail_word_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./word-detail/word-detail.component */ "./src/app/word-detail/word-detail.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _synonym_synonym_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./synonym/synonym.component */ "./src/app/synonym/synonym.component.ts");
/* harmony import */ var _fetch_vowels_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fetch-vowels.pipe */ "./src/app/fetch-vowels.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _directives_search_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/search.directive */ "./src/app/directives/search.directive.ts");
/* harmony import */ var _add_word_add_word_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./add-word/add-word.component */ "./src/app/add-word/add-word.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _word_detail_word_detail_component__WEBPACK_IMPORTED_MODULE_12__["WordDetailComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
                _synonym_synonym_component__WEBPACK_IMPORTED_MODULE_14__["SynonymComponent"],
                _fetch_vowels_pipe__WEBPACK_IMPORTED_MODULE_15__["FetchVowelsPipe"],
                _directives_search_directive__WEBPACK_IMPORTED_MODULE_18__["SearchDirective"],
                _add_word_add_word_component__WEBPACK_IMPORTED_MODULE_19__["AddWordComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebase),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/search.directive.ts":
/*!************************************************!*\
  !*** ./src/app/directives/search.directive.ts ***!
  \************************************************/
/*! exports provided: SearchDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDirective", function() { return SearchDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _word_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../word.service */ "./src/app/word.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchDirective = /** @class */ (function () {
    function SearchDirective(elRef, templateRef, viewContainer, wordService, renderer) {
        this.elRef = elRef;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.wordService = wordService;
        this.renderer = renderer;
        //console.log(viewContainer);
        this.element = elRef.nativeElement;
    }
    SearchDirective.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.searchName != '' && typeof this.searchName != 'undefined') {
            // Make first character upper case in order to search in the database. 
            var searchName = this.searchName;
            searchName = searchName.charAt(0).toUpperCase() + searchName.slice(1);
            // Word service to query it to the database. 
            this.wordService.getSearchWord(searchName).subscribe(function (data) {
                _this.viewContainer.clear();
                for (var i = 0; i < data.length; i++) {
                    var e1 = _this.viewContainer.createEmbeddedView(_this.templateRef, {
                        $implicit: data[i].name
                    });
                    _this.e1 = e1;
                    _this.renderer.listen(e1.rootNodes[0], 'click', _this.clearSearch.bind(_this));
                }
            });
        }
        else {
            this.viewContainer.clear();
        }
    };
    SearchDirective.prototype.clearSearch = function (event) {
        this.viewContainer.clear();
        this.e1._view.component.searchkey = '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("appSearch"),
        __metadata("design:type", String)
    ], SearchDirective.prototype, "searchName", void 0);
    SearchDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appSearch]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _word_service__WEBPACK_IMPORTED_MODULE_1__["WordService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], SearchDirective);
    return SearchDirective;
}());



/***/ }),

/***/ "./src/app/fetch-vowels.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/fetch-vowels.pipe.ts ***!
  \**************************************/
/*! exports provided: FetchVowelsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchVowelsPipe", function() { return FetchVowelsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FetchVowelsPipe = /** @class */ (function () {
    function FetchVowelsPipe() {
    }
    FetchVowelsPipe.prototype.transform = function (value) {
        var newStrArr = [];
        var vowels = ['a', 'e', 'i', 'o', 'u'];
        if (typeof value != "undefined") {
            for (var i = 0; i < value.length; i++) {
                if (vowels.some(function (x) { return x == value.charAt(i); })) {
                    newStrArr.push(value.charAt(i));
                }
            }
            newStrArr = Array.from(new Set(newStrArr));
            return newStrArr.join(', ');
        }
        else
            return '';
    };
    FetchVowelsPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'fetchVowels'
        })
    ], FetchVowelsPipe);
    return FetchVowelsPipe;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: #b0c4de;\r\n    color: white;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <p>Copyright © 2018 Net Solutions. All Rights Reserved.</p>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Style the header with a grey background and some padding */\r\n.header {\r\n    overflow: hidden;\r\n    background-color: #b0c4de;\r\n    padding: 20px 10px;\r\n  }\r\n/* Style the header links */\r\n.header a {\r\n    float: left;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 12px;\r\n    text-decoration: none;\r\n    font-size: 18px; \r\n    line-height: 25px;\r\n    border-radius: 4px;\r\n  }\r\n/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */\r\n.header a.logo {\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n  }\r\n/* Change the background color on mouse-over */\r\n.header a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n/* Style the active/current link*/\r\n.header a.active {\r\n    background-color: dodgerblue;\r\n    color: white;\r\n  }\r\n/* Float the link section to the right */\r\n.header-right {\r\n    float: right;\r\n  }\r\n/* Add media queries for responsiveness - when the screen is 500px wide or less, stack the links on top of each other */\r\n@media screen and (max-width: 500px) {\r\n    .header a {\r\n      float: none;\r\n      display: block;\r\n      text-align: left;\r\n    }\r\n    .header-right {\r\n      float: none;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <a routerLink=\"/home\" class=\"logo\">Net Solutions</a>\n  <div class=\"header-right\">\n    \n    \n    <div>\n      <input  [ngStyle]=\"{'height':'30px'}\" (keyup)=\"searchFunction($event)\" type=\"text\" [(ngModel)]=\"searchkey\" placeholder=\"Search\"/>\n      <ul class=\"word-search-list\">\n        <li *appSearch=\"searchkey; let searchResult;\" >\n            <a routerLink=\"/word-detail/{{searchResult}}\" >{{searchResult}}</a>\n        </li> \n       </ul> \n    </div>\n    \n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.searchFunction = function (event) {
        // redirect to the word-detail
        if (event.keyCode == '13') {
            this.searchkey = this.searchkey.charAt(0).toUpperCase() + this.searchkey.slice(1);
            this.router.navigate(['/word-detail/' + this.searchkey]);
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-word-grids{list-style-type: none;display:table;}\r\n.home-word-grids li{    border: 1px solid #ccc;\r\n    margin: 10px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    float: left;background: #DCDCDC}\r\n.home-word-grids li a {    height: 100px;\r\n    width: 100px;display: table-cell;\r\n    vertical-align: middle;}\r\n.centered{margin-left:21%;}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centered\">\n    <h1>Welcome to the World of Words!</h1>\n<div *ngIf=\"words\" >\n    \n            <ul class=\"home-word-grids\">\n          <li *ngFor=\"let word of words\">\n              \n              <a routerLink=\"/word-detail/{{ word.name}}\">{{ word.name |titlecase }}</a>\n          </li>\n        </ul>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _word_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../word.service */ "./src/app/word.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(wordService) {
        this.wordService = wordService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getWords();
    };
    HomeComponent.prototype.getWords = function () {
        var _this = this;
        this.wordService.getWords().subscribe(function (data) {
            //showing the data randomly on the home screen. 
            _this.words = data.sort(function () {
                return .5 - Math.random();
            }).slice(0, 20);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_word_service__WEBPACK_IMPORTED_MODULE_1__["WordService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  search works!\n</p>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\r\n     float:left;\r\n\twidth:20%;\r\n    background-color: #b0c4de;\r\n    margin:10px 10px 10px 0;            \r\n    display: table-cell;\r\n\r\n\r\n}\r\n\r\n\r\n.sidenav a {\r\n    padding: 6px 8px 6px 16px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: #2196F3;\r\n    display: block;\r\n}\r\n\r\n\r\n.sidenav a:hover {\r\n    color: #064579;\r\n}\r\n\r\n\r\n.main {\r\n    margin-left: 140px; /* Same width as the sidebar + left position in px */\r\n    font-size: 28px; /* Increased text to enable scrolling */\r\n    padding: 0px 10px;\r\n}\r\n\r\n\r\n.sidebar-words{\r\n    height: 685px;\r\n    overflow-y: scroll;\r\n}\r\n\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav\" [ngStyle]=\" { color: '#b0c4de'  } \">\n    <a routerLink=\"/home\" >Home</a>\n    <a routerLink=\"/add\" >Add new word</a>\n    \n  <div class=\"sidebar-words\" *ngIf=\"words\" >\n    <ul>\n      <li *ngFor=\"let word of words| async\">\n          <a routerLink=\"/word-detail/{{ word.name}}\">{{ k }}{{ word.name |titlecase }}</a>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _word_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../word.service */ "./src/app/word.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(wordService) {
        this.wordService = wordService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.getWords();
    };
    SidebarComponent.prototype.getWords = function () {
        this.words = this.wordService.getWords();
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_word_service__WEBPACK_IMPORTED_MODULE_1__["WordService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/synonym/synonym.component.css":
/*!***********************************************!*\
  !*** ./src/app/synonym/synonym.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/synonym/synonym.component.html":
/*!************************************************!*\
  !*** ./src/app/synonym/synonym.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  synonym works!\n</p>\n"

/***/ }),

/***/ "./src/app/synonym/synonym.component.ts":
/*!**********************************************!*\
  !*** ./src/app/synonym/synonym.component.ts ***!
  \**********************************************/
/*! exports provided: SynonymComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SynonymComponent", function() { return SynonymComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SynonymComponent = /** @class */ (function () {
    function SynonymComponent() {
    }
    SynonymComponent.prototype.ngOnInit = function () {
    };
    SynonymComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-synonym',
            template: __webpack_require__(/*! ./synonym.component.html */ "./src/app/synonym/synonym.component.html"),
            styles: [__webpack_require__(/*! ./synonym.component.css */ "./src/app/synonym/synonym.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SynonymComponent);
    return SynonymComponent;
}());



/***/ }),

/***/ "./src/app/word-detail/word-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/word-detail/word-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered{margin-left:21%;}\r\nword-detail{padding: 10px;}"

/***/ }),

/***/ "./src/app/word-detail/word-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/word-detail/word-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div *ngIf=\"word\">\n<h2>{{word.name | uppercase}} Details</h2>\n<div \n  \n  ><span [ngStyle]=\" { 'font-size': '24px',\n  'font-weight': 'bold'  } \">name: </span>{{word.name}}</div>\n<div><span [ngStyle]=\" { 'font-size': '24px',\n  'font-weight': 'bold'  } \">vowels (from name): </span>{{word.name | fetchVowels}}</div>\n<div><span [ngStyle]=\" { 'font-size': '24px',\n  'font-weight': 'bold'  } \">meaning: </span>{{word.meaning}}</div>\n</div>-->\n\n<div *ngIf=\"word;then content else not_found\">here is ignored</div>    \n\n<ng-template #content>\n    <div class=\"centered word-detail\">\n      <h2>{{word.name | uppercase}} Details</h2>\n      <div><span [ngStyle]=\" { 'font-size': '24px',\n        'font-weight': 'bold'  } \">name: </span>{{word.name}}</div>\n      <div><span [ngStyle]=\" { 'font-size': '24px',\n        'font-weight': 'bold'  } \">vowels (from name): </span>{{word.name | fetchVowels}}</div>\n      <div><span [ngStyle]=\" { 'font-size': '24px',\n        'font-weight': 'bold'  } \">meaning: </span>{{word.meaning}}</div>\n  </div>\n</ng-template>\n\n<ng-template #not_found>\n    <div class=\"centered\">\n        <h1> 404 </h1>\n        <hr> \n        <img src=\"assets/images/404.png\"/>\n        <hr> \n        <h1> You Seems Lost </h1>\n        <hr> \n        <h2> Return to <a routerLink=\"/home\"> Home Page </a> </h2>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/word-detail/word-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/word-detail/word-detail.component.ts ***!
  \******************************************************/
/*! exports provided: WordDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordDetailComponent", function() { return WordDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _word__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../word */ "./src/app/word.ts");
/* harmony import */ var _word_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../word.service */ "./src/app/word.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WordDetailComponent = /** @class */ (function () {
    function WordDetailComponent(route, wordService) {
        this.route = route;
        this.wordService = wordService;
    }
    WordDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .params
            .subscribe(function (params) {
            _this.getWord();
        });
        this.getWord();
    };
    WordDetailComponent.prototype.getWord = function () {
        var _this = this;
        // get the name from the route snapshot. 
        var name = this.route.snapshot.paramMap.get('name');
        this.wordService.getWord(name)
            .subscribe(function (word) {
            _this.word = word[0];
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _word__WEBPACK_IMPORTED_MODULE_2__["Word"])
    ], WordDetailComponent.prototype, "word", void 0);
    WordDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-word-detail',
            template: __webpack_require__(/*! ./word-detail.component.html */ "./src/app/word-detail/word-detail.component.html"),
            styles: [__webpack_require__(/*! ./word-detail.component.css */ "./src/app/word-detail/word-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _word_service__WEBPACK_IMPORTED_MODULE_3__["WordService"]])
    ], WordDetailComponent);
    return WordDetailComponent;
}());



/***/ }),

/***/ "./src/app/word.service.ts":
/*!*********************************!*\
  !*** ./src/app/word.service.ts ***!
  \*********************************/
/*! exports provided: WordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordService", function() { return WordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/* const WORDS: Word[] =  [
    { name: 'abase', meaning: 'Cause to feel shame; hurt the pride of' },
    { name: 'acme', meaning: 'The highest level or degree attainable; the highest stage of development' },
    { name: 'anonymous', meaning: 'Having no known name, identity or known source' },
    { name: 'abate', meaning: 'Make less active or intense' },
    { name: 'adamant', meaning: 'Impervious to pleas, persuasion, requests, reason' },
    { name: 'antipathy', meaning: 'A feeling of intense dislike' },
    { name: 'adorable', meaning: 'Lovable especially in a childlike or naive way' },
    { name: 'asinine', meaning: 'Showing a lack of intelligence or thought; stupid and silly' },
    { name: 'aberrant', meaning: 'Markedly different from an accepted norm' },
    { name: 'aegis', meaning: 'Kindly endorsement and guidance' },
    { name: 'assuage', meaning: 'Cause to be more favorably inclined; gain the good will of' },
    { name: 'agape', meaning: 'With the mouth wide open as in wonder or awe' },
    { name: 'avarice', meaning: 'Reprehensible acquisitiveness; insatiable desire for wealth (personified as one of the deadly sins)' },
    { name: 'agnostic', meaning: 'Someone who is doubtful or noncommittal about something' },
    { name: 'abscission', meaning: 'Shedding of flowers and leaves and fruit following formation of scar tissue in a plant' }
  ]; */
var WordService = /** @class */ (function () {
    function WordService(http, afauth, db) {
        this.http = http;
        this.afauth = afauth;
        this.db = db;
    }
    /** GET heroes from the server */
    WordService.prototype.getWords = function () {
        return this.db.collection('words').valueChanges();
    };
    WordService.prototype.getWord = function (name) {
        return this.db.collection('words', function (ref) { return ref.where('name', '==', name); }).valueChanges();
    };
    WordService.prototype.getSearchWord = function (name) {
        //return this.db.collection<Word>('words', ref => ref.where('name', '==', 'A')).valueChanges();
        return this.db.collection('words', function (ref) { return ref.orderBy('name').startAt(name).endAt(name + '\uf8ff'); }).valueChanges();
        // return this.db.collection<Word>('words', ref => ref.orderBy('name').limit(5).startAt(start).endAt(end));
        // return this.db.collection<Word>('words').valueChanges();
    };
    WordService.prototype.addWord = function (word) {
        word.name = word.name.charAt(0).toUpperCase() + word.name.slice(1);
        return this.db.collection('words').add(word);
        //console.log(word);
        //return this.db.collection<Word>('words', ref => ref.where('name', '==', name)).valueChanges();
    };
    WordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], WordService);
    return WordService;
}());



/***/ }),

/***/ "./src/app/word.ts":
/*!*************************!*\
  !*** ./src/app/word.ts ***!
  \*************************/
/*! exports provided: Word */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Word", function() { return Word; });
var Word = /** @class */ (function () {
    function Word() {
    }
    return Word;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyApG8w7MhSoESutAKNfvepWLFxPlOVyRyo",
        authDomain: "worldofwords-e5932.firebaseapp.com",
        databaseURL: "https://worldofwords-e5932.firebaseio.com",
        projectId: "worldofwords-e5932",
        storageBucket: "worldofwords-e5932.appspot.com",
        messagingSenderId: "914580400704"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angularProject\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map