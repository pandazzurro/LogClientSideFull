webpackJsonp([0,3],{

/***/ 1236:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1236;


/***/ },

/***/ 1237:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(624);


/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = (function () {
    function UserService() {
    }
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/user.service.js.map

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PaginationData; });
var PaginationData = (function () {
    function PaginationData(data, totalItems) {
        this.data = data;
        this.totalItems = totalItems;
    }
    return PaginationData;
}());
//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/PaginationData.js.map

/***/ },

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HttpSpinnerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HttpSpinnerComponent = (function () {
    function HttpSpinnerComponent() {
    }
    HttpSpinnerComponent.prototype.ngOnInit = function () {
    };
    HttpSpinnerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-http-spinner',
            template: __webpack_require__(981),
            styles: [__webpack_require__(976)]
        }), 
        __metadata('design:paramtypes', [])
    ], HttpSpinnerComponent);
    return HttpSpinnerComponent;
}());
//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/http-spinner.component.js.map

/***/ },

/***/ 485:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsnlog__ = __webpack_require__(945);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsnlog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsnlog__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return JSLoggerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JSLoggerService = (function () {
    function JSLoggerService() {
        // Remap EndPoint
        this.logger = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_jsnlog__["JL"])();
    }
    JSLoggerService.prototype.Debug = function (logObject) {
        this.logger.debug(logObject);
    };
    JSLoggerService.prototype.Info = function (logObject) {
        this.logger.info(logObject);
    };
    JSLoggerService.prototype.Error = function (logObject) {
        this.logger.error(logObject);
    };
    JSLoggerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], JSLoggerService);
    return JSLoggerService;
}());
//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/jslogger.service.js.map

/***/ },

/***/ 486:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Models_PaginationData__ = __webpack_require__(483);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.productUrl = 'api/products';
    }
    ProductService.prototype.getProducts = function (skip, take) {
        return this.http.get(this.productUrl + "/" + skip + "/" + take)
            .map(this.createPaginationData)
            .catch(this.handleError);
    };
    ProductService.prototype.getProduct = function (productId) {
    };
    ProductService.prototype.createPaginationData = function (res) {
        var body = res.json();
        var paginationData = new __WEBPACK_IMPORTED_MODULE_5__Models_PaginationData__["a" /* PaginationData */](body.data, body.totalItems);
        return paginationData || {};
    };
    ProductService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    ProductService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], ProductService);
    return ProductService;
    var _a;
}());
//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/product.service.js.map

/***/ },

/***/ 623:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 623;


/***/ },

/***/ 624:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(788);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(784);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/main.js.map

/***/ },

/***/ 783:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(979),
            styles: [__webpack_require__(974)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/app.component.js.map

/***/ },

/***/ 784:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__ = __webpack_require__(954);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_serverpagination_datatable__ = __webpack_require__(790);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_serverpagination_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_serverpagination_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__application_insight_application_insight_component__ = __webpack_require__(785);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__jsnlog_jsnlog_component__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__jslogger_service__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_service__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_service__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__http_spinner_http_spinner_component__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_file_upload__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_user_component__ = __webpack_require__(787);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var appRoutes = [
    { path: 'application-insight', component: __WEBPACK_IMPORTED_MODULE_9__application_insight_application_insight_component__["a" /* ApplicationInsightComponent */] },
    { path: 'jsnlog', component: __WEBPACK_IMPORTED_MODULE_10__jsnlog_jsnlog_component__["a" /* JSNlogComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__application_insight_application_insight_component__["a" /* ApplicationInsightComponent */],
                __WEBPACK_IMPORTED_MODULE_10__jsnlog_jsnlog_component__["a" /* JSNlogComponent */],
                __WEBPACK_IMPORTED_MODULE_14__http_spinner_http_spinner_component__["a" /* HttpSpinnerComponent */],
                __WEBPACK_IMPORTED_MODULE_15_ng2_file_upload__["FileDropDirective"],
                __WEBPACK_IMPORTED_MODULE_16__user_user_component__["a" /* UserComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_14__http_spinner_http_spinner_component__["a" /* HttpSpinnerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["e" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_6_ng2_bootstrap__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_angular2_serverpagination_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["MaterialModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__jslogger_service__["a" /* JSLoggerService */], __WEBPACK_IMPORTED_MODULE_12__product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_13__user_service__["a" /* UserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/app.module.js.map

/***/ },

/***/ 785:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_applicationinsights_js__ = __webpack_require__(792);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_applicationinsights_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_applicationinsights_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(189);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ApplicationInsightComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApplicationInsightComponent = (function () {
    function ApplicationInsightComponent(snackBar) {
        this.snackBar = snackBar;
        this.counterException = 1;
        /* Call downloadAndSetup to download full ApplicationInsights script from CDN and initialize it with instrumentation key */
        __WEBPACK_IMPORTED_MODULE_1_applicationinsights_js__["AppInsights"].downloadAndSetup({ instrumentationKey: "3e88c674-ebeb-468a-8435-bc768a67aa17" });
    }
    ApplicationInsightComponent.prototype.ngOnInit = function () {
    };
    ///Inserisce l'evento di pagina visualizzata
    ApplicationInsightComponent.prototype.pageView = function () {
        __WEBPACK_IMPORTED_MODULE_1_applicationinsights_js__["AppInsights"].trackPageView("Componente di esempio", /* (optional) nome della pagina */ null, /* (optional) url della pagina */ { nomeFunzione: "pageView", nomeComponents: "ApplicationInsightComponent" }, /* (optional) propriet� evento */ { numeroEccezioniSessioneCorrente: this.counterException }, /* (optional) dizionario di metriche */ 2345 /* durata caricamento pagina in millisecondi */);
        //Per vederla subito su portale
        __WEBPACK_IMPORTED_MODULE_1_applicationinsights_js__["AppInsights"].flush();
        this.snackBar.open("pageView", "pageView", { duration: 2000 });
    };
    /// Inserisce una informazione di tracciatura
    ApplicationInsightComponent.prototype.sendTrace = function () {
        var proprietaTraccia = { nomeFunzione: "tracciaEvento", nomeComponents: "ApplicationInsightComponent" };
        __WEBPACK_IMPORTED_MODULE_1_applicationinsights_js__["AppInsights"].trackTrace("Traccia", proprietaTraccia);
        //Per vederla subito su portale
        __WEBPACK_IMPORTED_MODULE_1_applicationinsights_js__["AppInsights"].flush();
        this.snackBar.open("sendTrace", "sendTrace", { duration: 2000 });
    };
    ///Inserisce un evento generico
    ApplicationInsightComponent.prototype.sendEvent = function () {
        __WEBPACK_IMPORTED_MODULE_1_applicationinsights_js__["AppInsights"].trackEvent("Evento di test", { prop1: "prop1", prop2: "prop2" }, { measurement1: 100 });
        //Per vederla subito su portale
        __WEBPACK_IMPORTED_MODULE_1_applicationinsights_js__["AppInsights"].flush();
        this.snackBar.open("sendEvent", "sendEvent", { duration: 2000 });
    };
    ///Inserisce una eccezione
    ApplicationInsightComponent.prototype.sendException = function () {
        this.counterException = this.counterException + 1;
        __WEBPACK_IMPORTED_MODULE_1_applicationinsights_js__["AppInsights"].startTrackEvent("Eccezione" + this.counterException);
        __WEBPACK_IMPORTED_MODULE_1_applicationinsights_js__["AppInsights"].trackException(new Error("Messaggio di errore" + this.counterException));
        __WEBPACK_IMPORTED_MODULE_1_applicationinsights_js__["AppInsights"].stopTrackEvent("Eccezione" + this.counterException.toString(), { numeroEccezioniSessioneCorrente: this.counterException.toString() });
        //Per vederla subito su portale
        __WEBPACK_IMPORTED_MODULE_1_applicationinsights_js__["AppInsights"].flush();
        this.snackBar.open("sendException", "sendException", { duration: 2000 });
    };
    ApplicationInsightComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-application-insight',
            template: __webpack_require__(980),
            styles: [__webpack_require__(975)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdSnackBar"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdSnackBar"]) === 'function' && _a) || Object])
    ], ApplicationInsightComponent);
    return ApplicationInsightComponent;
    var _a;
}());
//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/application-insight.component.js.map

/***/ },

/***/ 786:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jslogger_service__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_service__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models_PaginationData__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_spinner_http_spinner_component__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_service__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return JSNlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var JSNlogComponent = (function () {
    function JSNlogComponent(log, _productService, _userService, snackBar, dialog) {
        this.log = log;
        this._productService = _productService;
        this._userService = _userService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.products = new __WEBPACK_IMPORTED_MODULE_4__Models_PaginationData__["a" /* PaginationData */](new Array(), 0);
        this.rowsOnPage = 10;
        this.activePage = 1;
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload__["FileUploader"]({ url: "/api/upload", disableMultipart: false });
        this.uploader.onAfterAddingFile = this.onAfterAddingFile.bind(this);
        this.uploader.onBeforeUploadItem = this.onBeforeUploadItem.bind(this);
        this.uploader.onErrorItem = this.onErrorItem.bind(this);
        this.uploader.onCompleteItem = this.onCompleteItem.bind(this);
    }
    JSNlogComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    JSNlogComponent.prototype.getProducts = function () {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__http_spinner_http_spinner_component__["a" /* HttpSpinnerComponent */]);
        var skip = this.rowsOnPage * (this.activePage - 1);
        this._productService.getProducts(skip, this.rowsOnPage)
            .subscribe(function (products) {
            _this.products = products;
            _this.dialog.closeAll();
        }, function (error) { return _this.errorMessage = error; });
    };
    JSNlogComponent.prototype.onPageChange = function (event) {
        this.rowsOnPage = event.rowsOnPage;
        this.activePage = event.activePage;
        this.getProducts();
    };
    JSNlogComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    JSNlogComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    JSNlogComponent.prototype.onAfterAddingFile = function (fileItem) {
        debugger;
        this.log.Debug({ msg: "Adding File", file: fileItem.file });
    };
    JSNlogComponent.prototype.onBeforeUploadItem = function (fileItem) {
        debugger;
        this.log.Debug({ msg: "Before File", file: fileItem.file });
    };
    JSNlogComponent.prototype.onCompleteItem = function (fileItem) {
        debugger;
        this.log.Debug({ msg: "Complete File", file: fileItem.file });
    };
    JSNlogComponent.prototype.onErrorItem = function (item, response, status, headers) {
        debugger;
        this.log.Debug({ msg: "Error File", file: item.file });
    };
    JSNlogComponent.prototype.coreDebug = function () {
        this.log.Debug("asp net core Debug");
        this.snackBar.open("asp net core Debug", "coreDebug", { duration: 2000 });
    };
    JSNlogComponent.prototype.coreInfo = function () {
        this.log.Info("asp net core Info");
        this.snackBar.open("asp net core Info", "coreInfo", { duration: 2000 });
    };
    JSNlogComponent.prototype.coreError = function () {
        this.log.Error("asp net core Error");
        this.snackBar.open("asp net core Error", "coreError", { duration: 2000 });
    };
    JSNlogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-jsnlog',
            template: __webpack_require__(982),
            styles: [__webpack_require__(977)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__jslogger_service__["a" /* JSLoggerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__jslogger_service__["a" /* JSLoggerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__product_service__["a" /* ProductService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__user_service__["a" /* UserService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdSnackBar"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdSnackBar"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdDialog"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_material__["MdDialog"]) === 'function' && _e) || Object])
    ], JSNlogComponent);
    return JSNlogComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/jsnlog.component.js.map

/***/ },

/***/ 787:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__(288);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserComponent = (function () {
    function UserComponent(UserService) {
        this.UserService = UserService;
        UserService.SexType = true;
        UserService.Username = "Andrea";
        this.Sesso = "maschio";
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.changeSexType = function () {
        this.UserService.SexType = !this.UserService.SexType;
        if (this.UserService.SexType)
            this.Sesso = "maschio";
        else
            this.Sesso = "femmina";
    };
    UserComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(983),
            styles: [__webpack_require__(978)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === 'function' && _a) || Object])
    ], UserComponent);
    return UserComponent;
    var _a;
}());
//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/user.component.js.map

/***/ },

/***/ 788:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/environment.js.map

/***/ },

/***/ 789:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(795);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(794);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(793);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(804);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs_hammer__ = __webpack_require__(944);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_hammerjs_hammer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_hammerjs_hammer__);

















//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/polyfills.js.map

/***/ },

/***/ 974:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 975:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 976:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 977:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 978:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 979:
/***/ function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n    <md-menu #appMenu=\"mdMenu\">\n        <button md-menu-item routerLink=\"/application-insight\" routerLinkActive=\"active\"><md-icon>trending_up</md-icon> Application Insight</button>\n        <button md-menu-item routerLink=\"/jsnlog\" routerLinkActive=\"active\"><md-icon>line_style</md-icon> JSNLog</button>\n    </md-menu>\n    <button md-icon-button [mdMenuTriggerFor]=\"appMenu\">\n        <md-icon>more_vert</md-icon>\n    </button>\n</md-toolbar>\n<app-user></app-user>\n\n<router-outlet></router-outlet>"

/***/ },

/***/ 980:
/***/ function(module, exports) {

module.exports = "<h3>\n  Application Insight\n</h3>\n\n<button md-raised-button color=\"primary\" (click)=\"pageView()\">pageView</button>\r\n<button md-raised-button color=\"accent\" (click)=\"sendEvent()\">Send Event</button>\n<button md-button color=\"primary\" (click)=\"sendTrace()\">Send Trace</button>\n<button md-fab color=\"warn\" (click)=\"sendException()\">Ex</button>\n"

/***/ },

/***/ 981:
/***/ function(module, exports) {

module.exports = "<md-progress-circle [mode]=\"indeterminate\"></md-progress-circle>"

/***/ },

/***/ 982:
/***/ function(module, exports) {

module.exports = "<style>\r\n    .my-drop-zone {\r\n        border: dotted 3px lightgray;\r\n    }\r\n    \r\n    .nv-file-over {\r\n        border: dotted 3px red;\r\n    }\r\n    /* Default class applied to drop zones on over */\r\n    \r\n    .another-file-over-class {\r\n        border: dotted 3px green;\r\n    }\r\n    \r\n    html,\r\n    body {\r\n        height: 100%;\r\n    }\r\n</style>\r\n\r\n<div layout=\"row\" layout-align=\"center center\">\r\n    <h3>JSNlog</h3>\r\n\r\n\r\n    <md-card>\r\n        <md-card-title>Asp Net Core</md-card-title>\r\n        <md-card-content>\r\n            <button md-raised-button color=\"primary\" (click)=\"coreDebug()\">Debug</button>\r\n            <button md-raised-button color=\"accent\" (click)=\"coreInfo()\">Information</button>\r\n            <button md-button color=\"primary\" (click)=\"coreError()\">Error</button>\r\n        </md-card-content>\r\n    </md-card>\r\n\r\n    <br>\r\n     <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n            <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\"\r\n                class=\"well my-drop-zone\">\r\n                Carica singolo file\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-9\" style=\"margin-bottom: 40px\">\r\n            <p>Elementi in coda: {{ uploader?.queue?.length }}</p>\r\n            <table class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th width=\"50%\">Name</th>\r\n                        <th>Size</th>\r\n                        <th>Progress</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of uploader.queue\">\r\n                        <td><strong>{{ item?.file?.name }}</strong></td>\r\n                        <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n                        <td *ngIf=\"uploader.isHTML5\">\r\n                            <div class=\"progress\" style=\"margin-bottom: 0;\">\r\n                                <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\r\n                            </div>\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                            <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\r\n                            <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\r\n                            <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\r\n                        </td>\r\n                        <td nowrap>\r\n                            <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\r\n                                    <span class=\"glyphicon glyphicon-upload\"></span> Upload\r\n                                </button>\r\n                            <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\r\n                                    <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\r\n                                </button>\r\n                            <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"item.remove()\">\r\n                                    <span class=\"glyphicon glyphicon-trash\"></span> Remove\r\n                                </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                    <tr>\r\n                        <td colspan=\"3\">\r\n                             Progresso della coda:\r\n                            <div class=\"progress\">\r\n                                <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n     </div>\r\n\r\n    <br>\r\n\r\n    <md-card>\r\n        <md-card-title>Products</md-card-title>\r\n        <md-card-content>\r\n            <table class=\"table table-striped\" [mfData]=\"products.data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [mfActivePage]=\"activePage\"\r\n                [(mfAmountOfRows)]=\"products.totalItems\" (mfOnPageChange)=\"onPageChange($event)\">\r\n                <thead>\r\n                    <tr>\r\n                        <th style=\"width: 25%\">\r\n                            <mfDefaultSorter by=\"name\">Name</mfDefaultSorter>\r\n                        </th>\r\n                        <th style=\"width: 40%\">\r\n                            <mfDefaultSorter by=\"description\">Description</mfDefaultSorter>\r\n                        </th>\r\n                        <th style=\"width: 10%\">\r\n                            <mfDefaultSorter by=\"price\">Price</mfDefaultSorter>\r\n                        </th>\r\n                        <th style=\"width: 25%\">\r\n                            <mfDefaultSorter by=\"available\">Available</mfDefaultSorter>\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let item of mf.data\">\r\n                        <td>{{item.name}}</td>\r\n                        <td>{{item.description}}</td>\r\n                        <td>{{item.price}}</td>\r\n                        <td>\r\n                            <md-checkbox [(ngModel)]=\"item.available\"></md-checkbox>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                    <tr>\r\n                        <td colspan=\"4\">\r\n                            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,15]\"></mfBootstrapPaginator>\r\n                        </td>\r\n                    </tr>\r\n                </tfoot>\r\n                </table>\r\n        </md-card-content>\r\n    </md-card>\r\n</div>"

/***/ },

/***/ 983:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n      <md-input-container>\n        <input md-input placeholder=\"Username\" [(ngModel)]=\"UserService.Username\">\n      </md-input-container>\n  </div>\n  <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n      <md-slide-toggle ng-checked=\"UserService.SexType\" (change)=\"changeSexType()\">{{Sesso}}</md-slide-toggle>        \n  </div>\n</div>"

/***/ }

},[1237]);
//# sourceMappingURL=main.bundle.map