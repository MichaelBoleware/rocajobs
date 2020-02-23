webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/Footer */ "./components/layout/Footer.js");
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/Header */ "./components/layout/Header/index.js");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









const mainCls = false ? undefined : {
  name: "1ndgivl-mainCls",
  styles: "max-width:1000px;display:flex;flex-direction:row;margin:0 auto;margin-top:50px;color:#fff;.title{color:#ffffff;font-size:85px;font-weight:bold;max-width:480px;line-height:1;}.subtitle{color:#ffffff;font-size:14px;margin-top:20px;line-height:18px;}.price{color:#ffffff;font-size:28px;margin-top:10px;}.overview{color:#ffffff;max-width:427px;margin-top:10px;font-size:14px;font-weight:300;line-height:18px;}.action{margin-top:20px;.ant-btn{margin-right:20px;}}.content{display:flex;width:100%;flex-direction:column;justify-content:center;}img{height:500px;cursor:pointer;}@media (max-width:992px){padding:20px;}@media (max-width:768px){flex-direction:column-reverse;padding:20px;margin-top:0;img{width:100%;height:auto;}.content{margin-top:20px;}.title{font-size:60px;}};label:mainCls;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccm9jYWpvYnNcXHBhZ2VzXFxob21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNtQiIsImZpbGUiOiJDOlxcVXNlcnNcXEFudG9uaW9cXHJvY2Fqb2JzXFxwYWdlc1xcaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3Rlcic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvaW5kZXgnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlcic7XHJcblxyXG5jb25zdCBtYWluQ2xzID0gY3NzYFxyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIC50aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogODVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWF4LXdpZHRoOiA0ODBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIH1cclxuICAuc3VidGl0bGUge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgfVxyXG4gIC5wcmljZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG4gIC5vdmVydmlldyB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1heC13aWR0aDogNDI3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIH1cclxuICAuYWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAuYW50LWJ0biB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBiYW5uZXJDb25maWcgPSB7XHJcbiAgaWQ6IDI3ODkyNyxcclxuICBvcmlnaW5hbF90aXRsZTogJ1RoZSBKdW5nbGUgQm9vaycsXHJcbiAgb3ZlcnZpZXc6XHJcbiAgICAnQWZ0ZXIgYSB0aHJlYXQgZnJvbSB0aGUgdGlnZXIgU2hlcmUgS2hhbiBmb3JjZXMgaGltIHRvIGZsZWUgdGhlIGp1bmdsZSwgYSBtYW4tY3ViIG5hbWVkIE1vd2dsaSBlbWJhcmtzIG9uIGEgam91cm5leSBvZiBzZWxmIGRpc2NvdmVyeSB3aXRoIHRoZSBoZWxwIG9mIHBhbnRoZXIsIEJhZ2hlZXJhLCBhbmQgZnJlZSBzcGlyaXRlZCBiZWFyLCBCYWxvby4nLFxyXG4gIHBvc3Rlcl9wYXRoOiAnL3ZPaXBlMm15aTI2VUR3UDk3OGhzWU9yblVXQy5qcGcnLFxyXG4gIHJlbGVhc2VfeWVhcjogMjAxNixcclxuICBnZW5yZXNfZGF0YTogWydGYW1pbHknLCAnQWR2ZW50dXJlJywgJ0RyYW1hJywgJ0ZhbnRhc3knXSxcclxuICBwcmljZTogMzA1LFxyXG59O1xyXG5cclxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiAoXHJcbiAgPENvbnRhaW5lcj5cclxuICAgIDxIZWFkZXIgLz5cclxuICAgIDxDb250ZW50PlxyXG4gICAgICA8ZGl2IGNzcz17bWFpbkNsc30ganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e2Jhbm5lckNvbmZpZy5vcmlnaW5hbF90aXRsZX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cclxuICAgICAgICAgICAge2AyMDE2IHwgJHtiYW5uZXJDb25maWcuZ2VucmVzX2RhdGEudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csICcsICcpfWB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcnZpZXdcIj57YmFubmVyQ29uZmlnLm92ZXJ2aWV3fTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZVwiPntgJCR7YmFubmVyQ29uZmlnLnByaWNlfWB9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvblwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uPlB1cmNoYXNlPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9NW1rbTIyeU8tYnMmdD0xc1wiPldhdGNoIFRyYWlsZXI8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke2Jhbm5lckNvbmZpZy5pZH1gfT5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMCR7YmFubmVyQ29uZmlnLnBvc3Rlcl9wYXRofWB9XHJcbiAgICAgICAgICAgIGFsdD17YmFubmVyQ29uZmlnLm9yaWdpbmFsX3RpdGxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250ZW50PlxyXG4gICAgPEZvb3RlciAvPlxyXG4gIDwvQ29udGFpbmVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const bannerConfig = {
  id: 278927,
  original_title: 'The Jungle Book',
  overview: 'After a threat from the tiger Shere Khan forces him to flee the jungle, a man-cub named Mowgli embarks on a journey of self discovery with the help of panther, Bagheera, and free spirited bear, Baloo.',
  poster_path: '/vOipe2myi26UDwP978hsYOrnUWC.jpg',
  release_year: 2016,
  genres_data: ['Family', 'Adventure', 'Drama', 'Fantasy'],
  price: 305
};

const HomePage = () => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_layout_Header__WEBPACK_IMPORTED_MODULE_6__["default"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
  css: mainCls,
  justifyContent: "space-between"
}, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
  className: "content"
}, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
  className: "title"
}, bannerConfig.original_title), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
  className: "subtitle"
}, `2016 | ${bannerConfig.genres_data.toString().replace(/,/g, ', ')}`), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
  className: "overview"
}, bannerConfig.overview), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
  className: "price"
}, `$${bannerConfig.price}`), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
  className: "action"
}, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, null, "Purchase"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
  href: "https://www.youtube.com/watch?v=5mkm22yO-bs&t=1s"
}, "Watch Trailer"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: `/product/${bannerConfig.id}`
}, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
  src: `https://image.tmdb.org/t/p/w500${bannerConfig.poster_path}`,
  alt: bannerConfig.original_title
})))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=home.js.629a4a58d07e5e66dd82.hot-update.js.map