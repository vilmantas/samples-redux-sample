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
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-bar></app-nav-bar>\r\n<router-outlet></router-outlet>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/list/components/list-input/list-input.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/list/components/list-input/list-input.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <mat-form-field>\n        <input [(ngModel)]=\"name\" matInput placeholder=\"Name\">\n    </mat-form-field>\n</div>\n<div>\n    <button mat-raised-button (keydown.enter)=\"onAdd()\" (click)=\"onAdd()\">Add</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/list/components/list-table/list-table.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/list/components/list-table/list-table.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table #listTable mat-table [dataSource]=\"entities\" class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"id\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let item\"> {{item.id}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let item\"> {{item.name}} </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"['id', 'name']\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: ['id', 'name'];\"></tr>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/list/components/list-total/list-total.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/list/components/list-total/list-total.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Users Count: {{entities?.length}}</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/list/list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/list/list.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <app-list-input></app-list-input><app-list-total></app-list-total>\r\n</div>\r\n<div class=\"container\">\r\n    <app-list-table></app-list-table>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/nav-bar/nav-bar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/nav-bar/nav-bar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\n    <span>\n        Amazing(ly simple) Logo\n    </span>\n    <div>\n        Amazing(ly simple) website\n    </div>\n\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/technologies-list/components/input/input.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/technologies-list/components/input/input.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>input works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/technologies-list/components/list/list.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/technologies-list/components/list/list.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table [@fadeIn] *ngIf=\"!state.loading\" #listTable mat-table [dataSource]=\"state.entities\" class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let item\"> {{item.name}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"rating\">\n        <th mat-header-cell *matHeaderCellDef> Rating </th>\n        <td mat-cell *matCellDef=\"let item\"> {{item.rating}} </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"['name', 'rating']\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: ['name', 'rating'];\"></tr>\n</table>\n\n<div *ngIf=\"state.loading\">\n    LOADING DATA\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/technologies-list/components/totals/totals.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/technologies-list/components/totals/totals.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>totals works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/technologies-list/technologies-list.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/technologies-list/technologies-list.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <app-totals></app-totals>\n</div>\n<div>\n    <app-input></app-input>\n</div>\n<div class=\"container\">\n    <app-list></app-list>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
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
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
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
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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
/* harmony import */ var _features_technologies_list_technologies_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/technologies-list/technologies-list.component */ "./src/app/features/technologies-list/technologies-list.component.ts");




const routes = [
    {
        path: '',
        component: _features_technologies_list_technologies_list_component__WEBPACK_IMPORTED_MODULE_3__["TechnologiesListComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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
/* harmony default export */ __webpack_exports__["default"] = ("html {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFx2aWxtYW50YXNcXERlc2t0b3BcXE15IENvZGVcXHJlZHV4LXNhbXBsZVxcYXBwbGljYXRpb24vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59IiwiaHRtbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0iXX0= */");

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


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _features_list_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/list/list.module */ "./src/app/features/list/list.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _features_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/nav-bar/nav-bar.component */ "./src/app/features/nav-bar/nav-bar.component.ts");
/* harmony import */ var _features_technologies_list_technologies_list_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/technologies-list/technologies-list.module */ "./src/app/features/technologies-list/technologies-list.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _features_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _features_list_list_module__WEBPACK_IMPORTED_MODULE_6__["ListModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot({}),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument(),
            _features_technologies_list_technologies_list_module__WEBPACK_IMPORTED_MODULE_10__["TechnologiesListModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forRoot([])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/features/list/components/list-input/list-input.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/features/list/components/list-input/list-input.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  margin: auto;\n  display: flex;\n  justify-items: center;\n  align-items: center;\n}\n:host div {\n  margin: 0rem 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbGlzdC9jb21wb25lbnRzL2xpc3QtaW5wdXQvQzpcXFVzZXJzXFx2aWxtYW50YXNcXERlc2t0b3BcXE15IENvZGVcXHJlZHV4LXNhbXBsZVxcYXBwbGljYXRpb24vc3JjXFxhcHBcXGZlYXR1cmVzXFxsaXN0XFxjb21wb25lbnRzXFxsaXN0LWlucHV0XFxsaXN0LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9saXN0L2NvbXBvbmVudHMvbGlzdC1pbnB1dC9saXN0LWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURDSTtFQUNJLGlCQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9saXN0L2NvbXBvbmVudHMvbGlzdC1pbnB1dC9saXN0LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgICBtYXJnaW46IDByZW0gMXJlbTtcclxuICAgIH1cclxufSIsIjpob3N0IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCBkaXYge1xuICBtYXJnaW46IDByZW0gMXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/features/list/components/list-input/list-input.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/list/components/list-input/list-input.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListInputComponent", function() { return ListInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _state_actions_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/actions/list.actions */ "./src/app/features/list/state/actions/list.actions.ts");




let ListInputComponent = class ListInputComponent {
    constructor(store) {
        this.store = store;
        this.i = 0;
    }
    ngOnInit() {
    }
    onAdd() {
        this.store.dispatch(Object(_state_actions_list_actions__WEBPACK_IMPORTED_MODULE_3__["append"])({ item: { name: this.name, id: this.i++ } }));
        this.name = '';
    }
};
ListInputComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
ListInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-input',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/list/components/list-input/list-input.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-input.component.scss */ "./src/app/features/list/components/list-input/list-input.component.scss")).default]
    })
], ListInputComponent);



/***/ }),

/***/ "./src/app/features/list/components/list-table/list-table.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/features/list/components/list-table/list-table.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100%;\n}\n\ntable {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbGlzdC9jb21wb25lbnRzL2xpc3QtdGFibGUvQzpcXFVzZXJzXFx2aWxtYW50YXNcXERlc2t0b3BcXE15IENvZGVcXHJlZHV4LXNhbXBsZVxcYXBwbGljYXRpb24vc3JjXFxhcHBcXGZlYXR1cmVzXFxsaXN0XFxjb21wb25lbnRzXFxsaXN0LXRhYmxlXFxsaXN0LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9saXN0L2NvbXBvbmVudHMvbGlzdC10YWJsZS9saXN0LXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvbGlzdC9jb21wb25lbnRzL2xpc3QtdGFibGUvbGlzdC10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9IiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/features/list/components/list-table/list-table.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/list/components/list-table/list-table.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTableComponent", function() { return ListTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _state_list_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/list.state */ "./src/app/features/list/state/list.state.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");






let ListTableComponent = class ListTableComponent {
    constructor(store) {
        this.store = store;
        this.entities = [];
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    ngAfterViewInit() {
        this.store.select(_state_list_state__WEBPACK_IMPORTED_MODULE_3__["listEntitesSelector"]).pipe().subscribe(state => {
            this.entities = state;
            console.log(this);
            this.table.renderRows();
            console.log(this.table);
        });
    }
};
ListTableComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], { static: false })
], ListTableComponent.prototype, "table", void 0);
ListTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/list/components/list-table/list-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-table.component.scss */ "./src/app/features/list/components/list-table/list-table.component.scss")).default]
    })
], ListTableComponent);



/***/ }),

/***/ "./src/app/features/list/components/list-total/list-total.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/features/list/components/list-total/list-total.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbGlzdC9jb21wb25lbnRzL2xpc3QtdG90YWwvQzpcXFVzZXJzXFx2aWxtYW50YXNcXERlc2t0b3BcXE15IENvZGVcXHJlZHV4LXNhbXBsZVxcYXBwbGljYXRpb24vc3JjXFxhcHBcXGZlYXR1cmVzXFxsaXN0XFxjb21wb25lbnRzXFxsaXN0LXRvdGFsXFxsaXN0LXRvdGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9saXN0L2NvbXBvbmVudHMvbGlzdC10b3RhbC9saXN0LXRvdGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvbGlzdC9jb21wb25lbnRzL2xpc3QtdG90YWwvbGlzdC10b3RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxufSIsIjpob3N0IHtcbiAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/features/list/components/list-total/list-total.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/features/list/components/list-total/list-total.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListTotalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTotalComponent", function() { return ListTotalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _state_list_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../state/list.state */ "./src/app/features/list/state/list.state.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let ListTotalComponent = class ListTotalComponent {
    constructor(store) {
        this.store = store;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        this.store.select(_state_list_state__WEBPACK_IMPORTED_MODULE_2__["listEntitesSelector"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.ngUnsubscribe)).subscribe(entities => this.entities = entities);
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
};
ListTotalComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
ListTotalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-total',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-total.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/list/components/list-total/list-total.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-total.component.scss */ "./src/app/features/list/components/list-total/list-total.component.scss")).default]
    })
], ListTotalComponent);



/***/ }),

/***/ "./src/app/features/list/list.component.scss":
/*!***************************************************!*\
  !*** ./src/app/features/list/list.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  display: flex;\n  flex-direction: row;\n  justify-items: center;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n\n.container {\n  margin: 0 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbGlzdC9DOlxcVXNlcnNcXHZpbG1hbnRhc1xcRGVza3RvcFxcTXkgQ29kZVxccmVkdXgtc2FtcGxlXFxhcHBsaWNhdGlvbi9zcmNcXGFwcFxcZmVhdHVyZXNcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAwIDVyZW07XHJcbn0iLCJkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW46IDAgNXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/features/list/list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/list/list.component.ts ***!
  \*************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListComponent = class ListComponent {
    constructor() {
    }
};
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-component',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/list/list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.scss */ "./src/app/features/list/list.component.scss")).default]
    })
], ListComponent);



/***/ }),

/***/ "./src/app/features/list/list.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/list/list.module.ts ***!
  \**********************************************/
/*! exports provided: ListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModule", function() { return ListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.component */ "./src/app/features/list/list.component.ts");
/* harmony import */ var _components_list_input_list_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/list-input/list-input.component */ "./src/app/features/list/components/list-input/list-input.component.ts");
/* harmony import */ var _components_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/list-table/list-table.component */ "./src/app/features/list/components/list-table/list-table.component.ts");
/* harmony import */ var _components_list_total_list_total_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/list-total/list-total.component */ "./src/app/features/list/components/list-total/list-total.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _state_reducers_list_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/reducers/list.reducer */ "./src/app/features/list/state/reducers/list.reducer.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");













let ListModule = class ListModule {
};
ListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"],
            _components_list_input_list_input_component__WEBPACK_IMPORTED_MODULE_3__["ListInputComponent"],
            _components_list_table_list_table_component__WEBPACK_IMPORTED_MODULE_4__["ListTableComponent"],
            _components_list_total_list_total_component__WEBPACK_IMPORTED_MODULE_5__["ListTotalComponent"]
        ],
        imports: [
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature('list-state', _state_reducers_list_reducer__WEBPACK_IMPORTED_MODULE_7__["ListReducer"], { initialState: _state_reducers_list_reducer__WEBPACK_IMPORTED_MODULE_7__["listInitialState"] }),
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
        ]
    })
], ListModule);



/***/ }),

/***/ "./src/app/features/list/state/actions/list.actions.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/list/state/actions/list.actions.ts ***!
  \*************************************************************/
/*! exports provided: append, load, setError, clearNewest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "append", function() { return append; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setError", function() { return setError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearNewest", function() { return clearNewest; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const append = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[App.List] Append', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const load = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[App.List] Load');
const setError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[App.List] SetError', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const clearNewest = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[App.List] ClearNewest');


/***/ }),

/***/ "./src/app/features/list/state/list.state.ts":
/*!***************************************************!*\
  !*** ./src/app/features/list/state/list.state.ts ***!
  \***************************************************/
/*! exports provided: selectListState, listEntitesSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectListState", function() { return selectListState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listEntitesSelector", function() { return listEntitesSelector; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const selectListState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('list-state');
const listEntitesSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectListState, listState => listState.entities);


/***/ }),

/***/ "./src/app/features/list/state/reducers/list.reducer.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/list/state/reducers/list.reducer.ts ***!
  \**************************************************************/
/*! exports provided: listInitialState, ListReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listInitialState", function() { return listInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListReducer", function() { return ListReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_list_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/list.actions */ "./src/app/features/list/state/actions/list.actions.ts");



const listInitialState = {
    newestAdded: null,
    entities: [],
    loading: false,
    error: null
};
const listReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(listInitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_list_actions__WEBPACK_IMPORTED_MODULE_2__["load"], state => (Object.assign({}, state, { loading: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_list_actions__WEBPACK_IMPORTED_MODULE_2__["setError"], (state, { error }) => (Object.assign({}, state, { loading: false, error }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_list_actions__WEBPACK_IMPORTED_MODULE_2__["append"], (state, { item }) => {
    const entities = state.entities;
    entities.push(item);
    return Object.assign({}, state, { newestAdded: item.name, entities: [...entities] });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_list_actions__WEBPACK_IMPORTED_MODULE_2__["clearNewest"], (state) => {
    return Object.assign({}, state, { newestAdded: '' });
}));
function ListReducer(state, action) {
    return listReducer(state, action);
}


/***/ }),

/***/ "./src/app/features/nav-bar/nav-bar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/features/nav-bar/nav-bar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav {\n  height: 20vh;\n  display: flex;\n  background: url(https://escado.github.io/img/bg.jpeg);\n  background-color: #575761;\n  -webkit-filter: drop-shadow(0.1rem 0.1rem 0.1rem black);\n          filter: drop-shadow(0.1rem 0.1rem 0.1rem black);\n}\nnav div {\n  margin: auto;\n}\nnav span {\n  margin: auto 0 auto 10vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbmF2LWJhci9DOlxcVXNlcnNcXHZpbG1hbnRhc1xcRGVza3RvcFxcTXkgQ29kZVxccmVkdXgtc2FtcGxlXFxhcHBsaWNhdGlvbi9zcmNcXGFwcFxcZmVhdHVyZXNcXG5hdi1iYXJcXG5hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EscURBQUE7RUFDQSx5QkFBQTtFQUNBLHVEQUFBO1VBQUEsK0NBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtBQ0NKO0FERUU7RUFDSSx3QkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICBoZWlnaHQ6IDIwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9lc2NhZG8uZ2l0aHViLmlvL2ltZy9iZy5qcGVnKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc1NzYxO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMC4xcmVtIDAuMXJlbSAwLjFyZW0gYmxhY2spO1xyXG5cclxuICAmIGRpdiB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuICAmIHNwYW4ge1xyXG4gICAgICBtYXJnaW46IGF1dG8gMCBhdXRvIDEwdnc7XHJcbiAgfVxyXG59XHJcbiIsIm5hdiB7XG4gIGhlaWdodDogMjB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vZXNjYWRvLmdpdGh1Yi5pby9pbWcvYmcuanBlZyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NzU3NjE7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMC4xcmVtIDAuMXJlbSAwLjFyZW0gYmxhY2spO1xufVxubmF2IGRpdiB7XG4gIG1hcmdpbjogYXV0bztcbn1cbm5hdiBzcGFuIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byAxMHZ3O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/features/nav-bar/nav-bar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/nav-bar/nav-bar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavBarComponent = class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/nav-bar/nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/features/nav-bar/nav-bar.component.scss")).default]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/features/technologies-list/components/input/input.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/features/technologies-list/components/input/input.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvdGVjaG5vbG9naWVzLWxpc3QvY29tcG9uZW50cy9pbnB1dC9DOlxcVXNlcnNcXHZpbG1hbnRhc1xcRGVza3RvcFxcTXkgQ29kZVxccmVkdXgtc2FtcGxlXFxhcHBsaWNhdGlvbi9zcmNcXGFwcFxcZmVhdHVyZXNcXHRlY2hub2xvZ2llcy1saXN0XFxjb21wb25lbnRzXFxpbnB1dFxcaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL3RlY2hub2xvZ2llcy1saXN0L2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy90ZWNobm9sb2dpZXMtbGlzdC9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iLCI6aG9zdCB7XG4gIG1hcmdpbjogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/features/technologies-list/components/input/input.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/features/technologies-list/components/input/input.component.ts ***!
  \********************************************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InputComponent = class InputComponent {
    constructor() { }
    ngOnInit() {
    }
};
InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/technologies-list/components/input/input.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./input.component.scss */ "./src/app/features/technologies-list/components/input/input.component.scss")).default]
    })
], InputComponent);



/***/ }),

/***/ "./src/app/features/technologies-list/components/list/list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/features/technologies-list/components/list/list.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  width: 100%;\n  display: flex;\n}\n\ntable {\n  width: 100%;\n}\n\ndiv {\n  margin: 10vh auto;\n  font-weight: bold;\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvdGVjaG5vbG9naWVzLWxpc3QvY29tcG9uZW50cy9saXN0L0M6XFxVc2Vyc1xcdmlsbWFudGFzXFxEZXNrdG9wXFxNeSBDb2RlXFxyZWR1eC1zYW1wbGVcXGFwcGxpY2F0aW9uL3NyY1xcYXBwXFxmZWF0dXJlc1xcdGVjaG5vbG9naWVzLWxpc3RcXGNvbXBvbmVudHNcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL3RlY2hub2xvZ2llcy1saXN0L2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy90ZWNobm9sb2dpZXMtbGlzdC9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgbWFyZ2luOiAxMHZoIGF1dG87XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59IiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuZGl2IHtcbiAgbWFyZ2luOiAxMHZoIGF1dG87XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDJyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/features/technologies-list/components/list/list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/technologies-list/components/list/list.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _state_technologies_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../state/technologies.state */ "./src/app/features/technologies-list/state/technologies.state.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");






let ListComponent = class ListComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.select(_state_technologies_state__WEBPACK_IMPORTED_MODULE_3__["technologiesStateSelector"]).subscribe(state => {
            this.state = state;
        });
    }
};
ListComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], { static: false })
], ListComponent.prototype, "table", void 0);
ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/technologies-list/components/list/list.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('fadeIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(600)
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ opacity: 0 })))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list.component.scss */ "./src/app/features/technologies-list/components/list/list.component.scss")).default]
    })
], ListComponent);



/***/ }),

/***/ "./src/app/features/technologies-list/components/totals/totals.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/features/technologies-list/components/totals/totals.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvdGVjaG5vbG9naWVzLWxpc3QvY29tcG9uZW50cy90b3RhbHMvQzpcXFVzZXJzXFx2aWxtYW50YXNcXERlc2t0b3BcXE15IENvZGVcXHJlZHV4LXNhbXBsZVxcYXBwbGljYXRpb24vc3JjXFxhcHBcXGZlYXR1cmVzXFx0ZWNobm9sb2dpZXMtbGlzdFxcY29tcG9uZW50c1xcdG90YWxzXFx0b3RhbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL3RlY2hub2xvZ2llcy1saXN0L2NvbXBvbmVudHMvdG90YWxzL3RvdGFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3RlY2hub2xvZ2llcy1saXN0L2NvbXBvbmVudHMvdG90YWxzL3RvdGFscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuIiwiOmhvc3Qge1xuICBtYXJnaW46IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/features/technologies-list/components/totals/totals.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/features/technologies-list/components/totals/totals.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TotalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalsComponent", function() { return TotalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TotalsComponent = class TotalsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TotalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-totals',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./totals.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/technologies-list/components/totals/totals.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./totals.component.scss */ "./src/app/features/technologies-list/components/totals/totals.component.scss")).default]
    })
], TotalsComponent);



/***/ }),

/***/ "./src/app/features/technologies-list/services/techologies.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/technologies-list/services/techologies.service.ts ***!
  \****************************************************************************/
/*! exports provided: TechnologiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologiesService", function() { return TechnologiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let TechnologiesService = class TechnologiesService {
    constructor(http) {
        this.http = http;
    }
    getTechnologies() {
        return this.http.get('https://i3ovudx37a.execute-api.eu-north-1.amazonaws.com/default/app-personal').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(x => x.technologies));
    }
};
TechnologiesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TechnologiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TechnologiesService);



/***/ }),

/***/ "./src/app/features/technologies-list/state/actions/technologies.actions.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/features/technologies-list/state/actions/technologies.actions.ts ***!
  \**********************************************************************************/
/*! exports provided: TechnologiesActionTypes, load, setError, set */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologiesActionTypes", function() { return TechnologiesActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setError", function() { return setError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


var TechnologiesActionTypes;
(function (TechnologiesActionTypes) {
    TechnologiesActionTypes["LOAD"] = "[Technologies] LOAD";
    TechnologiesActionTypes["SET_ERROR"] = "[Technologies] SET_ERROR";
    TechnologiesActionTypes["SET"] = "[Technologies] SET";
})(TechnologiesActionTypes || (TechnologiesActionTypes = {}));
const load = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(TechnologiesActionTypes.LOAD);
const setError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(TechnologiesActionTypes.SET_ERROR, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const set = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(TechnologiesActionTypes.SET, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());


/***/ }),

/***/ "./src/app/features/technologies-list/state/effects/technologies.effects.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/features/technologies-list/state/effects/technologies.effects.ts ***!
  \**********************************************************************************/
/*! exports provided: TechnologiesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologiesEffects", function() { return TechnologiesEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _actions_technologies_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/technologies.actions */ "./src/app/features/technologies-list/state/actions/technologies.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_techologies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/techologies.service */ "./src/app/features/technologies-list/services/techologies.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let TechnologiesEffects = class TechnologiesEffects {
    constructor(actions$, service) {
        this.actions$ = actions$;
        this.service = service;
        this.loadTechnologies = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_technologies_actions__WEBPACK_IMPORTED_MODULE_3__["load"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(() => this.service.getTechnologies()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(technologies => Object(_actions_technologies_actions__WEBPACK_IMPORTED_MODULE_3__["set"])({ technologies })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(Object(_actions_technologies_actions__WEBPACK_IMPORTED_MODULE_3__["setError"])({ error })))))));
    }
};
TechnologiesEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _services_techologies_service__WEBPACK_IMPORTED_MODULE_5__["TechnologiesService"] }
];
TechnologiesEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TechnologiesEffects);



/***/ }),

/***/ "./src/app/features/technologies-list/state/reducers/technologies.reducer.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/features/technologies-list/state/reducers/technologies.reducer.ts ***!
  \***********************************************************************************/
/*! exports provided: technologiesInitialState, technologiesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "technologiesInitialState", function() { return technologiesInitialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "technologiesReducer", function() { return technologiesReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_technologies_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/technologies.actions */ "./src/app/features/technologies-list/state/actions/technologies.actions.ts");



const technologiesInitialState = {
    entities: [],
    error: '',
    loading: false
};
const technologiesReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(technologiesInitialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_technologies_actions__WEBPACK_IMPORTED_MODULE_2__["load"], state => {
    return Object.assign({}, state, { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_technologies_actions__WEBPACK_IMPORTED_MODULE_2__["setError"], (state, action) => {
    return Object.assign({}, state, { error: action.error, loading: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_technologies_actions__WEBPACK_IMPORTED_MODULE_2__["set"], (state, action) => {
    return Object.assign({}, state, { entities: [...action.technologies], loading: false });
}));


/***/ }),

/***/ "./src/app/features/technologies-list/state/technologies.state.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/technologies-list/state/technologies.state.ts ***!
  \************************************************************************/
/*! exports provided: technologiesStateSelector, technologiesEntitiesSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "technologiesStateSelector", function() { return technologiesStateSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "technologiesEntitiesSelector", function() { return technologiesEntitiesSelector; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const technologiesStateSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('technologies-list');
const technologiesEntitiesSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(technologiesStateSelector, (state) => state.entities);


/***/ }),

/***/ "./src/app/features/technologies-list/technologies-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/features/technologies-list/technologies-list.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  display: flex;\n  flex-direction: row;\n  justify-items: center;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n\n.container {\n  margin: 0 5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvdGVjaG5vbG9naWVzLWxpc3QvQzpcXFVzZXJzXFx2aWxtYW50YXNcXERlc2t0b3BcXE15IENvZGVcXHJlZHV4LXNhbXBsZVxcYXBwbGljYXRpb24vc3JjXFxhcHBcXGZlYXR1cmVzXFx0ZWNobm9sb2dpZXMtbGlzdFxcdGVjaG5vbG9naWVzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL3RlY2hub2xvZ2llcy1saXN0L3RlY2hub2xvZ2llcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy90ZWNobm9sb2dpZXMtbGlzdC90ZWNobm9sb2dpZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMCA1cmVtO1xyXG59IiwiZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwIDVyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/features/technologies-list/technologies-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/technologies-list/technologies-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: TechnologiesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologiesListComponent", function() { return TechnologiesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _state_actions_technologies_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/actions/technologies.actions */ "./src/app/features/technologies-list/state/actions/technologies.actions.ts");




let TechnologiesListComponent = class TechnologiesListComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(Object(_state_actions_technologies_actions__WEBPACK_IMPORTED_MODULE_3__["load"])());
    }
};
TechnologiesListComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
TechnologiesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-technologies-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./technologies-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/technologies-list/technologies-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./technologies-list.component.scss */ "./src/app/features/technologies-list/technologies-list.component.scss")).default]
    })
], TechnologiesListComponent);



/***/ }),

/***/ "./src/app/features/technologies-list/technologies-list.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/technologies-list/technologies-list.module.ts ***!
  \************************************************************************/
/*! exports provided: TechnologiesListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologiesListModule", function() { return TechnologiesListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _technologies_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./technologies-list.component */ "./src/app/features/technologies-list/technologies-list.component.ts");
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/input/input.component */ "./src/app/features/technologies-list/components/input/input.component.ts");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/features/technologies-list/components/list/list.component.ts");
/* harmony import */ var _components_totals_totals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/totals/totals.component */ "./src/app/features/technologies-list/components/totals/totals.component.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _state_effects_technologies_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state/effects/technologies.effects */ "./src/app/features/technologies-list/state/effects/technologies.effects.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _state_reducers_technologies_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state/reducers/technologies.reducer */ "./src/app/features/technologies-list/state/reducers/technologies.reducer.ts");















let TechnologiesListModule = class TechnologiesListModule {
};
TechnologiesListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _technologies_list_component__WEBPACK_IMPORTED_MODULE_3__["TechnologiesListComponent"],
            _components_input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"],
            _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
            _components_totals_totals_component__WEBPACK_IMPORTED_MODULE_6__["TotalsComponent"],
        ],
        imports: [
            _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forFeature('technologies-list', _state_reducers_technologies_reducer__WEBPACK_IMPORTED_MODULE_14__["technologiesReducer"]),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_state_effects_technologies_effects__WEBPACK_IMPORTED_MODULE_8__["TechnologiesEffects"]]),
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
        ],
    })
], TechnologiesListModule);



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

module.exports = __webpack_require__(/*! C:\Users\vilmantas\Desktop\My Code\redux-sample\application\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map