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
/* harmony import */ var _components_layout_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/Content */ "./components/layout/Content.js");
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/Footer */ "./components/layout/Footer.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ "./components/layout/index.js");
/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout/Header */ "./components/layout/Header/index.js");


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









const mainCls = false ? undefined : {
  name: "1ndgivl-mainCls",
  styles: "max-width:1000px;display:flex;flex-direction:row;margin:0 auto;margin-top:50px;color:#fff;.title{color:#ffffff;font-size:85px;font-weight:bold;max-width:480px;line-height:1;}.subtitle{color:#ffffff;font-size:14px;margin-top:20px;line-height:18px;}.price{color:#ffffff;font-size:28px;margin-top:10px;}.overview{color:#ffffff;max-width:427px;margin-top:10px;font-size:14px;font-weight:300;line-height:18px;}.action{margin-top:20px;.ant-btn{margin-right:20px;}}.content{display:flex;width:100%;flex-direction:column;justify-content:center;}img{height:500px;cursor:pointer;}@media (max-width:992px){padding:20px;}@media (max-width:768px){flex-direction:column-reverse;padding:20px;margin-top:0;img{width:100%;height:auto;}.content{margin-top:20px;}.title{font-size:60px;}};label:mainCls;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQW50b25pb1xccm9jYWpvYnNcXHBhZ2VzXFxob21lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNtQiIsImZpbGUiOiJDOlxcVXNlcnNcXEFudG9uaW9cXHJvY2Fqb2JzXFxwYWdlc1xcaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvQ29udGVudCc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyJztcclxuXHJcbmNvbnN0IG1haW5DbHMgPSBjc3NgXHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiA4NXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgfVxyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICB9XHJcbiAgLnByaWNlIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgLm92ZXJ2aWV3IHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWF4LXdpZHRoOiA0MjdweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgfVxyXG4gIC5hY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIC5hbnQtYnRuIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IGJhbm5lckNvbmZpZyA9IHtcclxuICBpZDogMjc4OTI3LFxyXG4gIG9yaWdpbmFsX3RpdGxlOiAnVGhlIEp1bmdsZSBCb29rJyxcclxuICBvdmVydmlldzpcclxuICAgICdBZnRlciBhIHRocmVhdCBmcm9tIHRoZSB0aWdlciBTaGVyZSBLaGFuIGZvcmNlcyBoaW0gdG8gZmxlZSB0aGUganVuZ2xlLCBhIG1hbi1jdWIgbmFtZWQgTW93Z2xpIGVtYmFya3Mgb24gYSBqb3VybmV5IG9mIHNlbGYgZGlzY292ZXJ5IHdpdGggdGhlIGhlbHAgb2YgcGFudGhlciwgQmFnaGVlcmEsIGFuZCBmcmVlIHNwaXJpdGVkIGJlYXIsIEJhbG9vLicsXHJcbiAgcG9zdGVyX3BhdGg6ICcvdk9pcGUybXlpMjZVRHdQOTc4aHNZT3JuVVdDLmpwZycsXHJcbiAgcmVsZWFzZV95ZWFyOiAyMDE2LFxyXG4gIGdlbnJlc19kYXRhOiBbJ0ZhbWlseScsICdBZHZlbnR1cmUnLCAnRHJhbWEnLCAnRmFudGFzeSddLFxyXG4gIHByaWNlOiAzMDUsXHJcbn07XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IChcclxuICA8Q29udGFpbmVyPlxyXG4gICAgPEhlYWRlciAvPlxyXG4gICAgPENvbnRlbnQ+XHJcbiAgICAgIDxkaXYgY3NzPXttYWluQ2xzfSBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57YmFubmVyQ29uZmlnLm9yaWdpbmFsX3RpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICB7YDIwMTYgfCAke2Jhbm5lckNvbmZpZy5nZW5yZXNfZGF0YS50b1N0cmluZygpLnJlcGxhY2UoLywvZywgJywgJyl9YH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVydmlld1wiPntiYW5uZXJDb25maWcub3ZlcnZpZXd9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlXCI+e2AkJHtiYW5uZXJDb25maWcucHJpY2V9YH08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24+UHVyY2hhc2U8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj01bWttMjJ5Ty1icyZ0PTFzXCI+V2F0Y2ggVHJhaWxlcjwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0LyR7YmFubmVyQ29uZmlnLmlkfWB9PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NTAwJHtiYW5uZXJDb25maWcucG9zdGVyX3BhdGh9YH1cclxuICAgICAgICAgICAgYWx0PXtiYW5uZXJDb25maWcub3JpZ2luYWxfdGl0bGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRlbnQ+XHJcbiAgICA8Rm9vdGVyIC8+XHJcbiAgPC9Db250YWluZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXX0= */",
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

const HomePage = () => Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_layout_Header__WEBPACK_IMPORTED_MODULE_7__["default"], null), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_layout_Content__WEBPACK_IMPORTED_MODULE_4__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
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
//# sourceMappingURL=home.js.67fbb2dcdf0ec64cd0e9.hot-update.js.map