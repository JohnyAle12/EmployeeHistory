/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/application/controllers/historico-controller.ts":
/*!*************************************************************!*\
  !*** ./src/application/controllers/historico-controller.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status-codes */ \"http-status-codes\");\n/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_domain_usecase_historico_usecase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/domain/usecase/historico-usecase */ \"./src/domain/usecase/historico-usecase.ts\");\n/* harmony import */ var _helpers_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/response */ \"./src/application/helpers/response.ts\");\n\n\n\nclass HistoricoController {\n    constructor() {\n        this.getHistoricoEmpleado = async (empleadoId) => {\n            let response;\n            try {\n                const result = await this.historyUseCase.getHistoricoEmpleado(empleadoId);\n                response = (0,_helpers_response__WEBPACK_IMPORTED_MODULE_2__.responseSuccess)({ data: result }, http_status_codes__WEBPACK_IMPORTED_MODULE_0__.StatusCodes.OK);\n            }\n            catch (error) {\n                response = (0,_helpers_response__WEBPACK_IMPORTED_MODULE_2__.responseFail)(error);\n            }\n            return response;\n        };\n        this.saveHistoricoEmpleado = async (empleadoId, sueldo) => {\n            let response;\n            try {\n                await this.historyUseCase.saveHistoricoEmpleado(empleadoId, sueldo);\n                response = (0,_helpers_response__WEBPACK_IMPORTED_MODULE_2__.responseSuccess)({ message: \"historico guardado\" }, http_status_codes__WEBPACK_IMPORTED_MODULE_0__.StatusCodes.CREATED);\n            }\n            catch (error) {\n                response = (0,_helpers_response__WEBPACK_IMPORTED_MODULE_2__.responseFail)(error);\n            }\n            return response;\n        };\n        this.historyUseCase = new src_domain_usecase_historico_usecase__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HistoricoController);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwbGljYXRpb24vY29udHJvbGxlcnMvaGlzdG9yaWNvLWNvbnRyb2xsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQkE7QUFDQTtBQTRCQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWstaGlzdG9yaWNvLWVtcGxlYWRvcy1hcGkvLi9zcmMvYXBwbGljYXRpb24vY29udHJvbGxlcnMvaGlzdG9yaWNvLWNvbnRyb2xsZXIudHM/MTg5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuaW1wb3J0IEhpc3Rvcmljb1VzZUNhc2UgZnJvbSBcInNyYy9kb21haW4vdXNlY2FzZS9oaXN0b3JpY28tdXNlY2FzZVwiO1xuaW1wb3J0IHsgcmVzcG9uc2VGYWlsLCByZXNwb25zZVN1Y2Nlc3MgfSBmcm9tIFwiLi4vaGVscGVycy9yZXNwb25zZVwiO1xuaW1wb3J0IHsgSUhpc3Rvcmljb0FwaSwgSVJlc3BvbnNlQXBpLCBJSGlzdG9yaWNvTWV0aG9kIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9yZXNwb25zZS1jb250cm9sbGVyLWludGVyZmFjZSc7XG5pbXBvcnQgeyBJSGlzdG9yaWNvU3VlbGRvcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2hpc3Rvcmljby1pbnRlcmZhY2VcIjtcblxuY2xhc3MgSGlzdG9yaWNvQ29udHJvbGxlciBpbXBsZW1lbnRzIElIaXN0b3JpY29BcGkge1xuXG4gICAgcHJpdmF0ZSBoaXN0b3J5VXNlQ2FzZTogSUhpc3Rvcmljb01ldGhvZDtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuaGlzdG9yeVVzZUNhc2UgPSBuZXcgSGlzdG9yaWNvVXNlQ2FzZSgpO1xuICAgIH1cblxuICAgIGdldEhpc3Rvcmljb0VtcGxlYWRvID0gYXN5bmMgKGVtcGxlYWRvSWQ6IG51bWJlcikgPT4ge1xuICAgICAgICBsZXQgcmVzcG9uc2U6IElSZXNwb25zZUFwaTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5oaXN0b3J5VXNlQ2FzZS5nZXRIaXN0b3JpY29FbXBsZWFkbyhlbXBsZWFkb0lkKVxuICAgICAgICAgICAgcmVzcG9uc2UgPSByZXNwb25zZVN1Y2Nlc3MoeyBkYXRhOnJlc3VsdCB9LCBTdGF0dXNDb2Rlcy5PSyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlRmFpbChlcnJvcik7ICAgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgXG4gICAgfVxuXG4gICAgc2F2ZUhpc3Rvcmljb0VtcGxlYWRvID1hc3luYyAoZW1wbGVhZG9JZDpudW1iZXIsIHN1ZWxkbzogSUhpc3Rvcmljb1N1ZWxkb3MpID0+IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlOiBJUmVzcG9uc2VBcGk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaGlzdG9yeVVzZUNhc2Uuc2F2ZUhpc3Rvcmljb0VtcGxlYWRvKGVtcGxlYWRvSWQsIHN1ZWxkbyk7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlU3VjY2Vzcyh7IG1lc3NhZ2U6IFwiaGlzdG9yaWNvIGd1YXJkYWRvXCIgfSwgU3RhdHVzQ29kZXMuQ1JFQVRFRCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IHJlc3BvbnNlRmFpbChlcnJvcilcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhpc3Rvcmljb0NvbnRyb2xsZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/application/controllers/historico-controller.ts\n");

/***/ }),

/***/ "./src/application/exceptions/http-error.ts":
/*!**************************************************!*\
  !*** ./src/application/exceptions/http-error.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HttpError)\n/* harmony export */ });\nclass HttpError extends Error {\n    constructor(message, statusCode) {\n        super(message);\n        this._statusCode = statusCode;\n    }\n    get statusCode() {\n        return this._statusCode;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwbGljYXRpb24vZXhjZXB0aW9ucy9odHRwLWVycm9yLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hay1oaXN0b3JpY28tZW1wbGVhZG9zLWFwaS8uL3NyYy9hcHBsaWNhdGlvbi9leGNlcHRpb25zL2h0dHAtZXJyb3IudHM/NjU2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0dXNDb2RlcyB9IGZyb20gXCJodHRwLXN0YXR1cy1jb2Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cbiAgICBwcml2YXRlIF9zdGF0dXNDb2RlOiBTdGF0dXNDb2RlcztcblxuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZywgc3RhdHVzQ29kZTogU3RhdHVzQ29kZXMpe1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5fc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG4gICAgfVxuXG4gICAgZ2V0IHN0YXR1c0NvZGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXR1c0NvZGU7XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/application/exceptions/http-error.ts\n");

/***/ }),

/***/ "./src/application/helpers/response.ts":
/*!*********************************************!*\
  !*** ./src/application/helpers/response.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"responseSuccess\": () => (/* binding */ responseSuccess),\n/* harmony export */   \"responseFail\": () => (/* binding */ responseFail)\n/* harmony export */ });\n/* harmony import */ var _exceptions_http_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exceptions/http-error */ \"./src/application/exceptions/http-error.ts\");\n\nconst responseSuccess = (body, statusCode = 200) => {\n    return {\n        success: true,\n        data: body.data,\n        message: body.message,\n        statusCode\n    };\n};\nconst responseFail = (error) => {\n    if (error instanceof _exceptions_http_error__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n        console.log(\"statuscodenonulo\", error);\n        return structureFail({ message: error.message }, error.statusCode);\n    }\n    else if (error && error.message != null) {\n        console.log(\"statuscodenulo\", error);\n        return structureFail({ message: \"Error inesperado\" });\n    }\n    else {\n        console.log(\"errornulo\", error);\n        return structureFail({ message: \"Error inesperado\" });\n    }\n};\nconst structureFail = (body, statusCode = 500) => {\n    return {\n        success: false,\n        data: body.data,\n        message: body.message,\n        statusCode\n    };\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwbGljYXRpb24vaGVscGVycy9yZXNwb25zZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWstaGlzdG9yaWNvLWVtcGxlYWRvcy1hcGkvLi9zcmMvYXBwbGljYXRpb24vaGVscGVycy9yZXNwb25zZS50cz84YTY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5pbXBvcnQgeyBJUmVzcG9uc2VBcGksIElSZXNwb25zZUJvZHkgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9yZXNwb25zZS1jb250cm9sbGVyLWludGVyZmFjZVwiO1xuaW1wb3J0IEh0dHBFcnJvciBmcm9tIFwiLi4vZXhjZXB0aW9ucy9odHRwLWVycm9yXCI7XG5cbmNvbnN0IHJlc3BvbnNlU3VjY2VzcyA9ICggYm9keTpJUmVzcG9uc2VCb2R5LCBzdGF0dXNDb2RlOiBTdGF0dXNDb2RlcyA9IDIwMCk6SVJlc3BvbnNlQXBpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICBkYXRhOiBib2R5LmRhdGEsXG4gICAgICAgIG1lc3NhZ2U6IGJvZHkubWVzc2FnZSxcbiAgICAgICAgc3RhdHVzQ29kZVxuICAgIH07XG59XG5cbmNvbnN0IHJlc3BvbnNlRmFpbCA9IChlcnJvcjogRXJyb3IpID0+IHtcbiAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXR1c2NvZGVub251bG9cIiwgZXJyb3IpXG4gICAgICAgIHJldHVybiBzdHJ1Y3R1cmVGYWlsKHsgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB9LCBlcnJvci5zdGF0dXNDb2RlKVxuICAgIH0gZWxzZSBpZiAoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSAhPSBudWxsKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGF0dXNjb2RlbnVsb1wiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIHN0cnVjdHVyZUZhaWwoeyBtZXNzYWdlOiBcIkVycm9yIGluZXNwZXJhZG9cIiB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9ybnVsb1wiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIHN0cnVjdHVyZUZhaWwoeyBtZXNzYWdlOiBcIkVycm9yIGluZXNwZXJhZG9cIiB9KTtcbiAgICB9XG59XG5cbmNvbnN0IHN0cnVjdHVyZUZhaWwgPSAoYm9keTpJUmVzcG9uc2VCb2R5LCBzdGF0dXNDb2RlOiBTdGF0dXNDb2RlcyA9IDUwMCk6IElSZXNwb25zZUFwaSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIGRhdGE6IGJvZHkuZGF0YSxcbiAgICAgICAgbWVzc2FnZTogYm9keS5tZXNzYWdlLFxuICAgICAgICBzdGF0dXNDb2RlXG4gICAgfTtcbn1cblxuZXhwb3J0IHtcbiAgICByZXNwb25zZVN1Y2Nlc3MsXG4gICAgcmVzcG9uc2VGYWlsXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/application/helpers/response.ts\n");

/***/ }),

/***/ "./src/application/model-adapters/historico-adapter.ts":
/*!*************************************************************!*\
  !*** ./src/application/model-adapters/historico-adapter.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var src_infraestruture_repositories_historico_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/infraestruture/repositories/historico-query */ \"./src/infraestruture/repositories/historico-query.ts\");\n\nclass HistoricoAdapter {\n    constructor() {\n        this.historyQuery = new src_infraestruture_repositories_historico_query__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n    async getHistoricoEmpleado(empleadoId) {\n        const query = await this.historyQuery.getHistoricoEmpleado(empleadoId);\n        if (!query.Item) {\n            return null;\n        }\n        return query.Item.history.L.map(item => {\n            const { fechaActualizacion, sueldoAnterior, sueldoNuevo } = item.M;\n            return {\n                fechaActualizacion: new Date(fechaActualizacion.S),\n                sueldoAnterior: +sueldoAnterior.N,\n                sueldoNuevo: +sueldoNuevo.N\n            };\n        });\n    }\n    async saveHistoricoEmpleado(empleadoId, sueldos) {\n        return this.historyQuery.saveHistoricoEmpleado(empleadoId, sueldos);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HistoricoAdapter);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwbGljYXRpb24vbW9kZWwtYWRhcHRlcnMvaGlzdG9yaWNvLWFkYXB0ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hay1oaXN0b3JpY28tZW1wbGVhZG9zLWFwaS8uL3NyYy9hcHBsaWNhdGlvbi9tb2RlbC1hZGFwdGVycy9oaXN0b3JpY28tYWRhcHRlci50cz9iMDlmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSUhpc3Rvcmljb1F1ZXJ5IH0gZnJvbSAnc3JjL2luZnJhZXN0cnV0dXJlL2ludGVyZmFjZXMvcmVzcG9zZS1xdWVyeSc7XG5pbXBvcnQgSGlzdG9yaWNvUXVlcnkgZnJvbSAnc3JjL2luZnJhZXN0cnV0dXJlL3JlcG9zaXRvcmllcy9oaXN0b3JpY28tcXVlcnknO1xuaW1wb3J0IHsgSUhpc3Rvcmljb1N1ZWxkb3MgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2hpc3Rvcmljby1pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSUhpc3Rvcmljb01ldGhvZCB9IGZyb20gJy4uL2ludGVyZmFjZXMvcmVzcG9uc2UtY29udHJvbGxlci1pbnRlcmZhY2UnO1xuXG5jbGFzcyBIaXN0b3JpY29BZGFwdGVyIGltcGxlbWVudHMgSUhpc3Rvcmljb01ldGhvZCB7XG5cbiAgICBwcml2YXRlIGhpc3RvcnlRdWVyeTogSUhpc3Rvcmljb1F1ZXJ5O1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuaGlzdG9yeVF1ZXJ5ID0gbmV3IEhpc3Rvcmljb1F1ZXJ5KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldEhpc3Rvcmljb0VtcGxlYWRvKGVtcGxlYWRvSWQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBxdWVyeSA9IGF3YWl0IHRoaXMuaGlzdG9yeVF1ZXJ5LmdldEhpc3Rvcmljb0VtcGxlYWRvKGVtcGxlYWRvSWQpO1xuXG4gICAgICAgIGlmKCFxdWVyeS5JdGVtKXtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHF1ZXJ5Lkl0ZW0uaGlzdG9yeS5MLm1hcCggaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgZmVjaGFBY3R1YWxpemFjaW9uLFxuICAgICAgICAgICAgICAgIHN1ZWxkb0FudGVyaW9yLFxuICAgICAgICAgICAgICAgIHN1ZWxkb051ZXZvXG4gICAgICAgICAgICB9ID0gaXRlbS5NXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmVjaGFBY3R1YWxpemFjaW9uOiBuZXcgRGF0ZShmZWNoYUFjdHVhbGl6YWNpb24uUyksXG4gICAgICAgICAgICAgICAgc3VlbGRvQW50ZXJpb3I6ICtzdWVsZG9BbnRlcmlvci5OLFxuICAgICAgICAgICAgICAgIHN1ZWxkb051ZXZvOiArc3VlbGRvTnVldm8uTlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2F2ZUhpc3Rvcmljb0VtcGxlYWRvKGVtcGxlYWRvSWQ6IG51bWJlciwgc3VlbGRvczogSUhpc3Rvcmljb1N1ZWxkb3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlzdG9yeVF1ZXJ5LnNhdmVIaXN0b3JpY29FbXBsZWFkbyhlbXBsZWFkb0lkLCBzdWVsZG9zKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGlzdG9yaWNvQWRhcHRlciJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/application/model-adapters/historico-adapter.ts\n");

/***/ }),

/***/ "./src/domain/usecase/historico-usecase.ts":
/*!*************************************************!*\
  !*** ./src/domain/usecase/historico-usecase.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HistoricoUseCase)\n/* harmony export */ });\n/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http-status-codes */ \"http-status-codes\");\n/* harmony import */ var http_status_codes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http_status_codes__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var src_application_model_adapters_historico_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/application/model-adapters/historico-adapter */ \"./src/application/model-adapters/historico-adapter.ts\");\n/* harmony import */ var _application_exceptions_http_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../application/exceptions/http-error */ \"./src/application/exceptions/http-error.ts\");\n\n\n\nclass HistoricoUseCase {\n    constructor() {\n        this.historyAdapter = new src_application_model_adapters_historico_adapter__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    }\n    async getHistoricoEmpleado(empleadoId) {\n        const result = await this.historyAdapter.getHistoricoEmpleado(empleadoId);\n        if (result == null || result.length == 0) {\n            throw new _application_exceptions_http_error__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('el historico del empleado no existe', http_status_codes__WEBPACK_IMPORTED_MODULE_0__.StatusCodes.NOT_FOUND);\n        }\n        return result;\n    }\n    async saveHistoricoEmpleado(empleadoId, sueldos) {\n        await this.historyAdapter.saveHistoricoEmpleado(empleadoId, sueldos);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZG9tYWluL3VzZWNhc2UvaGlzdG9yaWNvLXVzZWNhc2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hay1oaXN0b3JpY28tZW1wbGVhZG9zLWFwaS8uL3NyYy9kb21haW4vdXNlY2FzZS9oaXN0b3JpY28tdXNlY2FzZS50cz9lMTZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXR1c0NvZGVzIH0gZnJvbSBcImh0dHAtc3RhdHVzLWNvZGVzXCI7XG5pbXBvcnQgeyBJSGlzdG9yaWNvU3VlbGRvcyB9IGZyb20gXCJzcmMvYXBwbGljYXRpb24vaW50ZXJmYWNlcy9oaXN0b3JpY28taW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBJSGlzdG9yaWNvTWV0aG9kIH0gZnJvbSBcInNyYy9hcHBsaWNhdGlvbi9pbnRlcmZhY2VzL3Jlc3BvbnNlLWNvbnRyb2xsZXItaW50ZXJmYWNlXCI7XG5pbXBvcnQgSGlzdG9yaWNvQWRhcHRlciBmcm9tIFwic3JjL2FwcGxpY2F0aW9uL21vZGVsLWFkYXB0ZXJzL2hpc3Rvcmljby1hZGFwdGVyXCI7XG5pbXBvcnQgSHR0cEVycm9yIGZyb20gJy4uLy4uL2FwcGxpY2F0aW9uL2V4Y2VwdGlvbnMvaHR0cC1lcnJvcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhpc3Rvcmljb1VzZUNhc2UgaW1wbGVtZW50cyBJSGlzdG9yaWNvTWV0aG9kIHtcblxuICAgIHByaXZhdGUgaGlzdG9yeUFkYXB0ZXI6IElIaXN0b3JpY29NZXRob2Q7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5oaXN0b3J5QWRhcHRlciA9IG5ldyBIaXN0b3JpY29BZGFwdGVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldEhpc3Rvcmljb0VtcGxlYWRvIChlbXBsZWFkb0lkOiBudW1iZXIpe1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmhpc3RvcnlBZGFwdGVyLmdldEhpc3Rvcmljb0VtcGxlYWRvKGVtcGxlYWRvSWQpO1xuXG4gICAgICAgIGlmKHJlc3VsdCA9PSBudWxsIHx8IHJlc3VsdC5sZW5ndGggPT0gMCl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgSHR0cEVycm9yKCdlbCBoaXN0b3JpY28gZGVsIGVtcGxlYWRvIG5vIGV4aXN0ZScsIFN0YXR1c0NvZGVzLk5PVF9GT1VORCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzYXZlSGlzdG9yaWNvRW1wbGVhZG8oZW1wbGVhZG9JZDogbnVtYmVyLCBzdWVsZG9zOiBJSGlzdG9yaWNvU3VlbGRvcykge1xuICAgICAgICBhd2FpdCB0aGlzLmhpc3RvcnlBZGFwdGVyLnNhdmVIaXN0b3JpY29FbXBsZWFkbyhlbXBsZWFkb0lkLCBzdWVsZG9zKTtcbiAgICB9XG5cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/domain/usecase/historico-usecase.ts\n");

/***/ }),

/***/ "./src/infraestruture/handlers/functions/getHistoricoEmpleado/handler.ts":
/*!*******************************************************************************!*\
  !*** ./src/infraestruture/handlers/functions/getHistoricoEmpleado/handler.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/apiGateway */ \"./src/infraestruture/handlers/libs/apiGateway.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/lambda */ \"./src/infraestruture/handlers/libs/lambda.ts\");\n/* harmony import */ var _application_controllers_historico_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../application/controllers/historico-controller */ \"./src/application/controllers/historico-controller.ts\");\n\n\n\n\nconst historyController = new _application_controllers_historico_controller__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\nconst getHistoricoEmpleado = async (event) => {\n    const response = await historyController.getHistoricoEmpleado(+event.pathParameters.empleadoId);\n    return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)(response.statusCode, response);\n};\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_2__.middyfy)(getHistoricoEmpleado);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5mcmFlc3RydXR1cmUvaGFuZGxlcnMvZnVuY3Rpb25zL2dldEhpc3Rvcmljb0VtcGxlYWRvL2hhbmRsZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hay1oaXN0b3JpY28tZW1wbGVhZG9zLWFwaS8uL3NyYy9pbmZyYWVzdHJ1dHVyZS9oYW5kbGVycy9mdW5jdGlvbnMvZ2V0SGlzdG9yaWNvRW1wbGVhZG8vaGFuZGxlci50cz8wMjQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcblxuaW1wb3J0IHR5cGUgeyBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50IH0gZnJvbSAnLi4vLi4vbGlicy9hcGlHYXRld2F5JztcbmltcG9ydCB7IGZvcm1hdEpTT05SZXNwb25zZSB9IGZyb20gJy4uLy4uL2xpYnMvYXBpR2F0ZXdheSc7XG5pbXBvcnQgeyBtaWRkeWZ5IH0gZnJvbSAnLi4vLi4vbGlicy9sYW1iZGEnO1xuaW1wb3J0IHsgSVJlc3BvbnNlQXBpIH0gZnJvbSAnc3JjL2FwcGxpY2F0aW9uL2ludGVyZmFjZXMvcmVzcG9uc2UtY29udHJvbGxlci1pbnRlcmZhY2UnO1xuaW1wb3J0IEhpc3Rvcmljb0NvbnRyb2xsZXIgZnJvbSAnLi4vLi4vLi4vLi4vYXBwbGljYXRpb24vY29udHJvbGxlcnMvaGlzdG9yaWNvLWNvbnRyb2xsZXInO1xuXG5jb25zdCBoaXN0b3J5Q29udHJvbGxlciA9IG5ldyBIaXN0b3JpY29Db250cm9sbGVyKCk7XG5cbmNvbnN0IGdldEhpc3Rvcmljb0VtcGxlYWRvOiBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50PGFueT4gPSBhc3luYyAoZXZlbnQpID0+IHtcblxuICBjb25zdCByZXNwb25zZTogSVJlc3BvbnNlQXBpID0gYXdhaXQgaGlzdG9yeUNvbnRyb2xsZXIuZ2V0SGlzdG9yaWNvRW1wbGVhZG8oK2V2ZW50LnBhdGhQYXJhbWV0ZXJzLmVtcGxlYWRvSWQpO1xuICByZXR1cm4gZm9ybWF0SlNPTlJlc3BvbnNlKHJlc3BvbnNlLnN0YXR1c0NvZGUsIHJlc3BvbnNlKTtcbn1cblxuZXhwb3J0IGNvbnN0IG1haW4gPSBtaWRkeWZ5KGdldEhpc3Rvcmljb0VtcGxlYWRvKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/infraestruture/handlers/functions/getHistoricoEmpleado/handler.ts\n");

/***/ }),

/***/ "./src/infraestruture/handlers/libs/apiGateway.ts":
/*!********************************************************!*\
  !*** ./src/infraestruture/handlers/libs/apiGateway.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst formatJSONResponse = (statusCode = 200, body) => {\n    return {\n        statusCode,\n        body: JSON.stringify(body)\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5mcmFlc3RydXR1cmUvaGFuZGxlcnMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hay1oaXN0b3JpY28tZW1wbGVhZG9zLWFwaS8uL3NyYy9pbmZyYWVzdHJ1dHVyZS9oYW5kbGVycy9saWJzL2FwaUdhdGV3YXkudHM/NGU0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFQSUdhdGV3YXlQcm94eUV2ZW50LCBBUElHYXRld2F5UHJveHlSZXN1bHQsIEhhbmRsZXIgfSBmcm9tIFwiYXdzLWxhbWJkYVwiXG5pbXBvcnQgdHlwZSB7IEZyb21TY2hlbWEgfSBmcm9tIFwianNvbi1zY2hlbWEtdG8tdHNcIjtcbmltcG9ydCB7IElSZXNwb25zZSB9IGZyb20gXCJzcmMvaW5mcmFlc3RydXR1cmUvaW50ZXJmYWNlcy9yZXNwb25zZS1oYW5kbGVyLWludGVyZmFjZVwiO1xuXG50eXBlIFZhbGlkYXRlZEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gT21pdDxBUElHYXRld2F5UHJveHlFdmVudCwgJ2JvZHknPiAmIHsgYm9keTogRnJvbVNjaGVtYTxTPiB9XG5leHBvcnQgdHlwZSBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gSGFuZGxlcjxWYWxpZGF0ZWRBUElHYXRld2F5UHJveHlFdmVudDxTPiwgQVBJR2F0ZXdheVByb3h5UmVzdWx0PlxuXG5leHBvcnQgY29uc3QgZm9ybWF0SlNPTlJlc3BvbnNlID0gKHN0YXR1c0NvZGU6IG51bWJlciA9IDIwMCwgYm9keTogSVJlc3BvbnNlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/infraestruture/handlers/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/infraestruture/handlers/libs/lambda.ts":
/*!****************************************************!*\
  !*** ./src/infraestruture/handlers/libs/lambda.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst middyfy = (handler) => {\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler).use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5mcmFlc3RydXR1cmUvaGFuZGxlcnMvbGlicy9sYW1iZGEudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWstaGlzdG9yaWNvLWVtcGxlYWRvcy1hcGkvLi9zcmMvaW5mcmFlc3RydXR1cmUvaGFuZGxlcnMvbGlicy9sYW1iZGEudHM/MzI5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWlkZHkgZnJvbSBcIkBtaWRkeS9jb3JlXCJcbmltcG9ydCBtaWRkeUpzb25Cb2R5UGFyc2VyIGZyb20gXCJAbWlkZHkvaHR0cC1qc29uLWJvZHktcGFyc2VyXCJcblxuZXhwb3J0IGNvbnN0IG1pZGR5ZnkgPSAoaGFuZGxlcikgPT4ge1xuICByZXR1cm4gbWlkZHkoaGFuZGxlcikudXNlKG1pZGR5SnNvbkJvZHlQYXJzZXIoKSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/infraestruture/handlers/libs/lambda.ts\n");

/***/ }),

/***/ "./src/infraestruture/repositories/dynamo-connection.ts":
/*!**************************************************************!*\
  !*** ./src/infraestruture/repositories/dynamo-connection.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-dynamodb */ \"@aws-sdk/client-dynamodb\");\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    region: process.env.AWS_REGION\n};\nconst client = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.DynamoDBClient(config);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5mcmFlc3RydXR1cmUvcmVwb3NpdG9yaWVzL2R5bmFtby1jb25uZWN0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FrLWhpc3Rvcmljby1lbXBsZWFkb3MtYXBpLy4vc3JjL2luZnJhZXN0cnV0dXJlL3JlcG9zaXRvcmllcy9keW5hbW8tY29ubmVjdGlvbi50cz9jNjYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtb0RCQ2xpZW50LCBEeW5hbW9EQkNsaWVudENvbmZpZyB9IGZyb20gXCJAYXdzLXNkay9jbGllbnQtZHluYW1vZGJcIjtcblxuY29uc3QgY29uZmlnOiBEeW5hbW9EQkNsaWVudENvbmZpZyA9IHtcbiAgICByZWdpb246IHByb2Nlc3MuZW52LkFXU19SRUdJT05cbn1cblxuY29uc3QgY2xpZW50ID0gbmV3IER5bmFtb0RCQ2xpZW50KGNvbmZpZyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/infraestruture/repositories/dynamo-connection.ts\n");

/***/ }),

/***/ "./src/infraestruture/repositories/historico-query.ts":
/*!************************************************************!*\
  !*** ./src/infraestruture/repositories/historico-query.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-dynamodb */ \"@aws-sdk/client-dynamodb\");\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dynamo_connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamo-connection */ \"./src/infraestruture/repositories/dynamo-connection.ts\");\n\n\nconst TableName = 'employee-history';\nclass HistoricoQuery {\n    async getHistoricoEmpleado(empleadoId) {\n        const inputParams = {\n            TableName,\n            Key: {\n                employeeId: {\n                    N: \"\" + empleadoId\n                }\n            }\n        };\n        const command = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.GetItemCommand(inputParams);\n        const result = await _dynamo_connection__WEBPACK_IMPORTED_MODULE_1__[\"default\"].send(command);\n        return result;\n    }\n    async saveHistoricoEmpleado(empleadoId, sueldos) {\n        const newInput = {\n            M: {\n                fechaActualizacion: {\n                    S: (new Date()).toString()\n                },\n                sueldoAnterior: {\n                    N: \"\" + sueldos.sueldoAnterior\n                },\n                sueldoNuevo: {\n                    N: \"\" + sueldos.sueldoNuevo\n                }\n            }\n        };\n        const query = await this.getHistoricoEmpleado(empleadoId);\n        let history = query.Item ? query.Item.history.L : [];\n        history.push(newInput);\n        const itemCommand = {\n            TableName,\n            Item: {\n                employeeId: {\n                    N: \"\" + empleadoId\n                },\n                history: {\n                    L: history\n                }\n            }\n        };\n        const command = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.PutItemCommand(itemCommand);\n        await _dynamo_connection__WEBPACK_IMPORTED_MODULE_1__[\"default\"].send(command);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HistoricoQuery);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5mcmFlc3RydXR1cmUvcmVwb3NpdG9yaWVzL2hpc3Rvcmljby1xdWVyeS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFHQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FrLWhpc3Rvcmljby1lbXBsZWFkb3MtYXBpLy4vc3JjL2luZnJhZXN0cnV0dXJlL3JlcG9zaXRvcmllcy9oaXN0b3JpY28tcXVlcnkudHM/YTY3OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdHRyaWJ1dGVWYWx1ZSwgR2V0SXRlbUNvbW1hbmQsIEdldEl0ZW1Db21tYW5kSW5wdXQsIEdldEl0ZW1Db21tYW5kT3V0cHV0LCBQdXRJdGVtQ29tbWFuZCwgUHV0SXRlbUNvbW1hbmRJbnB1dCB9IGZyb20gXCJAYXdzLXNkay9jbGllbnQtZHluYW1vZGJcIjtcbmltcG9ydCB7IElIaXN0b3JpY29TdWVsZG9zIH0gZnJvbSBcInNyYy9hcHBsaWNhdGlvbi9pbnRlcmZhY2VzL2hpc3Rvcmljby1pbnRlcmZhY2VcIjtcbmltcG9ydCB7IElIaXN0b3JpY29RdWVyeSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3Jlc3Bvc2UtcXVlcnlcIjtcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4vZHluYW1vLWNvbm5lY3Rpb25cIjtcblxuY29uc3QgVGFibGVOYW1lID0gJ2VtcGxveWVlLWhpc3RvcnknO1xuXG5jbGFzcyBIaXN0b3JpY29RdWVyeSBpbXBsZW1lbnRzIElIaXN0b3JpY29RdWVyeSB7XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0SGlzdG9yaWNvRW1wbGVhZG8gKGVtcGxlYWRvSWQ6IG51bWJlcik6IFByb21pc2U8R2V0SXRlbUNvbW1hbmRPdXRwdXQ+XG4gICAge1xuICAgICAgICBjb25zdCBpbnB1dFBhcmFtczogR2V0SXRlbUNvbW1hbmRJbnB1dCA9IHtcbiAgICAgICAgICAgIFRhYmxlTmFtZSxcbiAgICAgICAgICAgIEtleToge1xuICAgICAgICAgICAgICAgIGVtcGxveWVlSWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgTjogXCJcIitlbXBsZWFkb0lkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tbWFuZCA9IG5ldyBHZXRJdGVtQ29tbWFuZChpbnB1dFBhcmFtcyk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNsaWVudC5zZW5kKGNvbW1hbmQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzYXZlSGlzdG9yaWNvRW1wbGVhZG8gKGVtcGxlYWRvSWQ6IG51bWJlciwgc3VlbGRvczogSUhpc3Rvcmljb1N1ZWxkb3MpOiBQcm9taXNlPHZvaWQ+XG4gICAge1xuICAgICAgICBjb25zdCBuZXdJbnB1dDogQXR0cmlidXRlVmFsdWUgPSB7XG4gICAgICAgICAgICBNOiB7XG4gICAgICAgICAgICAgICAgZmVjaGFBY3R1YWxpemFjaW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIFM6IChuZXcgRGF0ZSgpKS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWVsZG9BbnRlcmlvcjoge1xuICAgICAgICAgICAgICAgICAgICBOOiBcIlwiK3N1ZWxkb3Muc3VlbGRvQW50ZXJpb3JcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1ZWxkb051ZXZvOiB7XG4gICAgICAgICAgICAgICAgICAgIE46IFwiXCIrc3VlbGRvcy5zdWVsZG9OdWV2b1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gYXdhaXQgdGhpcy5nZXRIaXN0b3JpY29FbXBsZWFkbyhlbXBsZWFkb0lkKTtcbiAgICAgICAgbGV0IGhpc3RvcnkgPSBxdWVyeS5JdGVtID8gcXVlcnkuSXRlbS5oaXN0b3J5LkwgOiBbXTtcbiAgICAgICAgaGlzdG9yeS5wdXNoKG5ld0lucHV0KTtcblxuICAgICAgICBjb25zdCBpdGVtQ29tbWFuZDogUHV0SXRlbUNvbW1hbmRJbnB1dCA9IHtcbiAgICAgICAgICAgIFRhYmxlTmFtZSxcbiAgICAgICAgICAgIEl0ZW06IHtcbiAgICAgICAgICAgICAgICBlbXBsb3llZUlkOiB7XG4gICAgICAgICAgICAgICAgICAgIE46IFwiXCIrZW1wbGVhZG9JZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGlzdG9yeToge1xuICAgICAgICAgICAgICAgICAgICBMOiBoaXN0b3J5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IG5ldyBQdXRJdGVtQ29tbWFuZChpdGVtQ29tbWFuZClcbiAgICAgICAgYXdhaXQgY2xpZW50LnNlbmQoY29tbWFuZCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhpc3Rvcmljb1F1ZXJ5OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/infraestruture/repositories/historico-query.ts\n");

/***/ }),

/***/ "@aws-sdk/client-dynamodb":
/*!*******************************************!*\
  !*** external "@aws-sdk/client-dynamodb" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-dynamodb");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");

/***/ }),

/***/ "http-status-codes":
/*!************************************!*\
  !*** external "http-status-codes" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("http-status-codes");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/infraestruture/handlers/functions/getHistoricoEmpleado/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;