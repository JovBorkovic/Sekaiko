(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+TLA":
/*!****************************************************************************!*\
  !*** ./src/app/Components/navbar/user/user-image/user-image.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbmF2YmFyL3VzZXIvdXNlci1pbWFnZS91c2VyLWltYWdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! A:\Sekaiko Project\Sekaiko\src\main.ts */"zUnb");


/***/ }),

/***/ "0zBU":
/*!***************************************************!*\
  !*** ./src/app/Components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.component.html */ "u3yF");
/* harmony import */ var _home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.css */ "Go5P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomeComponent);



/***/ }),

/***/ "1GCL":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/post/post-list/post-list.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<p class=\"info-text mat-body-1\" *ngIf=\"posts.length <= 0 && !isLoading\">\r\n  No posts added yet!\r\n</p>\r\n\r\n<!-- TODO: must do something to display the posts content -->\r\n\r\n\r\n<mat-grid-list cols=\"12\" [rowHeight]=\"tileRowHeight\" *ngIf=\"!isLoading\">\r\n  <mat-grid-tile\r\n    *ngFor=\"let post of posts\"\r\n    [colspan]=\"2\"\r\n    [rowspan]=\"1\"\r\n    class=\"hoverable\"\r\n    (click)=\"openPost(post)\"\r\n    [matTooltip]=\"'Title: ' + post.title\"\r\n  >\r\n    <img\r\n      class=\"img\"\r\n      [src]=\"post.imagePath\"\r\n      [alt]=\"post.title\"\r\n    />\r\n    <mat-action-row\r\n      *ngIf=\"userIsAuthenticated && !neverAuth && userId == post.creator\"\r\n    >\r\n      <a mat-button color=\"primary\" [routerLink]=\"['/edit', post.id]\">EDIT</a>\r\n      <button mat-button color=\"warn\" (click)=\"onDelete(post.id)\">\r\n        DELETE\r\n      </button>\r\n    </mat-action-row>\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n\r\n<mat-paginator\r\n  class=\"Pink_BG\"\r\n  [length]=\"totalPosts\"\r\n  [pageSize]=\"postsPerPage\"\r\n  [pageSizeOptions]=\"pageSizeOptions\"\r\n  (page)=\"onChangedPage($event)\"\r\n  *ngIf=\"posts.length > 0\"\r\n></mat-paginator>\r\n\r\n\r\n\r\n<!-- May not implement again -->\r\n\r\n<!-- <mat-accordion multi=\"true\" *ngIf=\"posts.length > 0 && !isLoading\">\r\n  <mat-expansion-panel *ngFor=\"let post of posts\">\r\n    <div class=\"post-image\">\r\n      <img [src]=\"post.imagePath\" [alt]=\"post.title\" />\r\n    </div>\r\n    <mat-expansion-panel-header>\r\n      {{ post.title }}\r\n    </mat-expansion-panel-header>\r\n    <p>{{ post.content }}</p>\r\n    <mat-action-row *ngIf=\"userIsAuthenticated && userId == post.creator\">\r\n      <a mat-button color=\"primary\" [routerLink]=\"['/edit', post.id]\">EDIT</a>\r\n      <button mat-button color=\"warn\" (click)=\"onDelete(post.id)\">\r\n        DELETE\r\n      </button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n</mat-accordion> -->\r\n");

/***/ }),

/***/ "2Kbr":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/post/post-create/post-create.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n  <form [formGroup]=\"form\" (submit)=\"onSavePost()\" *ngIf=\"!isLoading\">\r\n    <mat-form-field>\r\n      <input matInput type=\"text\" formControlName=\"title\" placeholder=\"Post Title\">\r\n      <mat-error *ngIf=\"form.get('title').invalid\">Please enter a post title.</mat-error>\r\n    </mat-form-field>\r\n    <div>\r\n      <button mat-stroked-button type=\"button\" (click)=\"filePicker.click()\">Pick Image</button>\r\n      <input type=\"file\" #filePicker (change)=\"onImagePicked($event)\" accept=\"image/jpg, image/png, image/jpeg\" enctype=\"multipart/form-data\" >\r\n    </div>\r\n    <div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">\r\n      <img [src]=\"imagePreview\" [alt]=\"form.value.title\">\r\n    </div>\r\n    <mat-form-field>\r\n      <textarea matInput rows=\"4\" formControlName=\"content\" placeholder=\"Post Content\"></textarea>\r\n      <mat-error *ngIf=\"form.get('content').invalid\">Please enter a post title.</mat-error>\r\n    </mat-form-field>\r\n    <button mat-raised-button color=\"accent\" type=\"submit\">Save Post</button>\r\n    \r\n    <button\r\n    mat-raised-button\r\n    color=\"primary\"\r\n    type=\"button\"\r\n    (click)=\"goBack()\">CANCEL</button>\r\n  </form>\r\n</mat-card>");

/***/ }),

/***/ "3m65":
/*!******************************************************!*\
  !*** ./src/app/Components/forum/forum.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label{\r\n    font-size: 24px;\r\n}\r\n\r\n.thread{\r\n    padding: 5% 0;\r\n}\r\n\r\n.collection:hover .collection-item:not(:hover){\r\n    -webkit-animation: slide 1s forwards;\r\n            animation: slide 1s forwards;\r\n}\r\n\r\n/*\r\n====================   Animation\r\n*/\r\n\r\n@-webkit-keyframes slide {\r\n    50% {transform: translate(50px);}\r\n    100% {transform: translate(20px);}\r\n}\r\n\r\n@keyframes slide {\r\n    50% {transform: translate(50px);}\r\n    100% {transform: translate(20px);}\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9mb3J1bS9mb3J1bS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBR0E7SUFDSSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0FBQ2hDOztBQUNBOztDQUVDOztBQUVEO0lBQ0ksS0FBSywwQkFBMEIsQ0FBQztJQUNoQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3JDOztBQUhBO0lBQ0ksS0FBSywwQkFBMEIsQ0FBQztJQUNoQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3JDIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9mb3J1bS9mb3J1bS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVse1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4udGhyZWFke1xyXG4gICAgcGFkZGluZzogNSUgMDtcclxufVxyXG5cclxuXHJcbi5jb2xsZWN0aW9uOmhvdmVyIC5jb2xsZWN0aW9uLWl0ZW06bm90KDpob3Zlcil7XHJcbiAgICBhbmltYXRpb246IHNsaWRlIDFzIGZvcndhcmRzO1xyXG59XHJcbi8qXHJcbj09PT09PT09PT09PT09PT09PT09ICAgQW5pbWF0aW9uXHJcbiovXHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlIHtcclxuICAgIDUwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoNTBweCk7fVxyXG4gICAgMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCk7fVxyXG59Il19 */");

/***/ }),

/***/ "4ewf":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/art/art.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <app-art-filter></app-art-filter>\r\n    \r\n    \r\n<!--container that holds all of the art displayed-->\r\n        <div id=\"artContainer\">\r\n            <div class=\"row\">\r\n                <div class=\"col s12 m6 l4 xl2\">\r\n                    <div>\r\n                        <a href=\"#!\"><img src=\"https://cdnb.artstation.com/p/assets/images/images/024/311/183/4k/andrii-stadnyk-andrii-stadnyk-flooded-hangar-lighting-options-20200216.jpg?1582008829\" class=\"responsive-img\"></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col s12 m6 l4 xl2\">\r\n                    <div>\r\n                        <a href=\"#!\"><img src=\"https://pre00.deviantart.net/4171/th/pre/f/2013/009/4/0/40b24a70a0b5faa29a8a73c336899539-d5r078n.jpg\" class=\"responsive-img\"></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col s12 m6 l4 xl2\">\r\n                    <div>\r\n                        <a href=\"#!\"><img src=\"https://cdnb.artstation.com/p/assets/images/images/024/311/183/4k/andrii-stadnyk-andrii-stadnyk-flooded-hangar-lighting-options-20200216.jpg?1582008829\" class=\"responsive-img\"></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col s12 m6 l4 xl2\">\r\n                    <div>\r\n                        <a href=\"#!\"><img src=\"http://studioghiblimovies.com/wp-content/uploads/2014/12/11-Castle-in-the-Sky.jpg\" class=\"responsive-img\"></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col s12 m6 l4 xl2\">\r\n                    <div>\r\n                        <a href=\"#!\"><img src=\"https://cdnb.artstation.com/p/assets/images/images/024/311/183/4k/andrii-stadnyk-andrii-stadnyk-flooded-hangar-lighting-options-20200216.jpg?1582008829\" class=\"responsive-img\"></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col s12 m6 l4 xl2\">\r\n                    <div>\r\n                        <a href=\"#!\"><img src=\"http://studioghiblimovies.com/wp-content/uploads/2014/12/11-Castle-in-the-Sky.jpg\" class=\"responsive-img\"></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n");

/***/ }),

/***/ "62qp":
/*!************************************************************!*\
  !*** ./src/app/Components/parallax/parallax.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n---------------------      parallax customization\r\n*/\r\n.parallax {\r\n    /* The image used */\r\n    background-image:url('Flooded_Hangar.jpg');\r\n\r\n    /* Full height */\r\n    height: 500px;\r\n\r\n    /* Create the parallax scrolling effect */\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    overflow: hidden;\r\n}\r\n/*\r\nthe overlapping element on the parallax\r\n*/\r\n.parallax .overLap{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0, 0.6);\r\n    margin: auto;\r\n    position: relative;\r\n}\r\n/*\r\nCustomization of button on\r\n*/\r\n.parallax .overLap .btn.LPink_Text.White_BG{\r\n    position: absolute;\r\n    bottom: 30px;\r\n    left: 47%;\r\n    height: 60px;\r\n    padding: 15px 30px;\r\n}\r\n@media only screen and (max-width: 320px){\r\n    .parallax{\r\n        height: 300px !important;\r\n    }\r\n}\r\n/*\r\n======================      Max screen width 1024px laptop size    =================\r\n*/\r\n@media only screen and (max-width: 1024px){\r\n    /*  classes   */\r\n    \r\n    /*Parallax*/\r\n    .parallax{\r\n        height: 400px;\r\n    }\r\n}    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wYXJhbGxheC9wYXJhbGxheC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsMENBQTBEOztJQUUxRCxnQkFBZ0I7SUFDaEIsYUFBYTs7SUFFYix5Q0FBeUM7SUFDekMsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCO0FBQ0E7O0NBRUM7QUFDRDtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTs7Q0FFQztBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUlBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSjtBQUdBOztDQUVDO0FBQ0Q7SUFDSSxlQUFlOztJQUVmLFdBQVc7SUFDWDtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcGFyYWxsYXgvcGFyYWxsYXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICAgIHBhcmFsbGF4IGN1c3RvbWl6YXRpb25cclxuKi9cclxuLnBhcmFsbGF4IHtcclxuICAgIC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vLi4vaW1hZ2VzL0Zsb29kZWRfSGFuZ2FyLmpwZycpO1xyXG5cclxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG5cclxuICAgIC8qIENyZWF0ZSB0aGUgcGFyYWxsYXggc2Nyb2xsaW5nIGVmZmVjdCAqL1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi8qXHJcbnRoZSBvdmVybGFwcGluZyBlbGVtZW50IG9uIHRoZSBwYXJhbGxheFxyXG4qL1xyXG4ucGFyYWxsYXggLm92ZXJMYXB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsIDAuNik7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLypcclxuQ3VzdG9taXphdGlvbiBvZiBidXR0b24gb25cclxuKi9cclxuLnBhcmFsbGF4IC5vdmVyTGFwIC5idG4uTFBpbmtfVGV4dC5XaGl0ZV9CR3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIGxlZnQ6IDQ3JTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KXtcclxuICAgIC5wYXJhbGxheHtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuICAgIFxyXG5cclxuLypcclxuPT09PT09PT09PT09PT09PT09PT09PSAgICAgIE1heCBzY3JlZW4gd2lkdGggMTAyNHB4IGxhcHRvcCBzaXplICAgID09PT09PT09PT09PT09PT09XHJcbiovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcclxuICAgIC8qICBjbGFzc2VzICAgKi9cclxuICAgIFxyXG4gICAgLypQYXJhbGxheCovXHJcbiAgICAucGFyYWxsYXh7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIH1cclxufSAgICAiXX0= */");

/***/ }),

/***/ "655v":
/*!*********************************************************!*\
  !*** ./src/app/Components/support/support.component.ts ***!
  \*********************************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_support_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./support.component.html */ "e79C");
/* harmony import */ var _support_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support.component.css */ "ucff");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SupportComponent = class SupportComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
        $(document).ready(() => {
            // CODE NOW WORKING!
            const formEvent = function () {
                const complaintForm = $('#complaintForm');
                const suggestionForm = $('#suggestionForm');
                const supportForm = $('#supportForm');
                const current = $(this);
                console.log(current);
                current.toggleClass('current');
                if ($(this).attr('id') === 'complaintEmail') {
                    $('#suggestionEmail').removeClass('current');
                    $('#supportEmail').removeClass('current');
                    if (supportForm.hasClass('hide') && suggestionForm.hasClass('hide')) {
                        complaintForm.toggleClass('hide');
                    }
                    else {
                        supportForm.removeClass('hide').addClass('hide');
                        suggestionForm.removeClass('hide').addClass('hide');
                        complaintForm.toggleClass('hide');
                    }
                }
                if ($(this).attr('id') === 'suggestionEmail') {
                    $('#supportEmail').removeClass('current');
                    $('#complaintEmail').removeClass('current');
                    if (supportForm.hasClass('hide') && complaintForm.hasClass('hide')) {
                        suggestionForm.toggleClass('hide');
                    }
                    else {
                        supportForm.removeClass('hide').addClass('hide');
                        complaintForm.removeClass('hide').addClass('hide');
                        suggestionForm.toggleClass('hide');
                    }
                }
                if ($(this).attr('id') === 'supportEmail') {
                    $('#suggestionEmail').removeClass('current');
                    $('#complaintEmail').removeClass('current');
                    if (suggestionForm.hasClass('hide') && complaintForm.hasClass('hide')) {
                        supportForm.toggleClass('hide');
                    }
                    else {
                        suggestionForm.removeClass('hide').addClass('hide');
                        complaintForm.removeClass('hide').addClass('hide');
                        supportForm.toggleClass('hide');
                    }
                }
                console.log(supportForm.attr('class'));
            };
            $('#supportEmail').click(formEvent);
            $('#suggestionEmail').click(formEvent);
            $('#complaintEmail').click(formEvent);
        });
    }
};
SupportComponent.ctorParameters = () => [];
SupportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-support',
        template: _raw_loader_support_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_support_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SupportComponent);



/***/ }),

/***/ "6VaG":
/*!*****************************************************!*\
  !*** ./src/app/Components/forum/forum.component.ts ***!
  \*****************************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forum_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forum.component.html */ "rgN8");
/* harmony import */ var _forum_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forum.component.css */ "3m65");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ForumComponent = class ForumComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForumComponent.ctorParameters = () => [];
ForumComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forum',
        template: _raw_loader_forum_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forum_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ForumComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\r\n    cursor: pointer;\r\n}\r\n\r\n.wide-container{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nhtml, body {\r\n    height: 100vh;\r\n}\r\n\r\n/* makes the website take the entire height iof the screen */\r\n\r\n.fullHeight{\r\n    position: absolute;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    width: 100%;\r\n}\r\n\r\n.wide-container > .container {\r\n    padding: 0px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nmat-sidenav-container, mat-sidenav-content, mat-sidenav {\r\n    height: 100%;\r\n}\r\n\r\nmat-sidenav {\r\n    width: 35%;\r\n}\r\n\r\nmat-sidenav-content main {\r\n    height: 100%;\r\n}\r\n\r\n@media only screen and (max-width: 540px) {\r\n    \r\n    .wide-container mat-sidenav {\r\n        width: 50%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLDREQUE0RDs7QUFDNUQ7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQztJQUNHLFlBQVk7QUFDaEI7O0FBQ0M7SUFDRyxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUlBOztJQUVJO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ud2lkZS1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4vKiBtYWtlcyB0aGUgd2Vic2l0ZSB0YWtlIHRoZSBlbnRpcmUgaGVpZ2h0IGlvZiB0aGUgc2NyZWVuICovXHJcbi5mdWxsSGVpZ2h0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ud2lkZS1jb250YWluZXIgPiAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuIG1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiBtYXQtc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG59XHJcbm1hdC1zaWRlbmF2LWNvbnRlbnQgbWFpbiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4gICAgXHJcbiAgICAud2lkZS1jb250YWluZXIgbWF0LXNpZGVuYXYge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "AmRd":
/*!***********************************************************!*\
  !*** ./src/app/Components/navbar/user/user.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".userInformation {\r\n    height: 100%;\r\n    max-width: 20%;\r\n}\r\n.userButton{\r\n    height: 100%!important;\r\n    width: 200px!important;\r\n    min-width: unset!important;\r\n}\r\n.userButton mat-grid-tile p{\r\n    margin: 0;\r\n}\r\n.loginLink {\r\n    height: 100%!important;\r\n    width: 100px!important;\r\n    min-width: unset!important;\r\n}\r\n.loginLink a {\r\n    display: inline-block;\r\n    height:100%;\r\n    width: 100%;\r\n}\r\n.loginLink mat-grid-tile p{\r\n    margin: 0;\r\n}\r\n.loginLink:hover {\r\n    background-color:rgba(195, 0, 255, 0.1);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9uYXZiYXIvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QiwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLFNBQVM7QUFDYjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QiwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBRUE7SUFDSSxTQUFTO0FBQ2I7QUFFQTtJQUNJLHVDQUF1QztBQUMzQyIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbmF2YmFyL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJJbmZvcm1hdGlvbiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDIwJTtcclxufVxyXG4udXNlckJ1dHRvbntcclxuICAgIGhlaWdodDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMjAwcHghaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiB1bnNldCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51c2VyQnV0dG9uIG1hdC1ncmlkLXRpbGUgcHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmxvZ2luTGluayB7XHJcbiAgICBoZWlnaHQ6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMHB4IWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogdW5zZXQhaW1wb3J0YW50O1xyXG59XHJcbi5sb2dpbkxpbmsgYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG9naW5MaW5rIG1hdC1ncmlkLXRpbGUgcHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmxvZ2luTGluazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTk1LCAwLCAyNTUsIDAuMSk7XHJcbn0iXX0= */");

/***/ }),

/***/ "AsuR":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/acc-home/acc-home.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <div class=\"parallax-container z-depth-1\">\r\n        <div class=\"parallax\">\r\n            <div>\r\n                <div class=\"acc-name-bg\">\r\n                    <div class=\"acc-name left White_Text\"><i class=\"material-icons left\">account_circle</i>{{ username }}</div>\r\n                </div>\r\n            </div>\r\n\r\n<!--        \r\n===       Tabs for the mobile screen size\r\n-->\r\n            <div>\r\n                <div class=\"tab-links\">\r\n                    <div class=\"tab current\" data-tab=\"tab-home\">\r\n                        <i class=\"material-icons LPink_Text\">home</i>\r\n                    </div>\r\n                    <div class=\"tab\" data-tab=\"tab-image\">\r\n                        <i class=\"material-icons LPink_Text\">image</i>\r\n                    </div>\r\n                    <div class=\"tab\" data-tab=\"tab-group\">\r\n                        <i class=\"material-icons LPink_Text\">group</i>\r\n                    </div>\r\n                    <div class=\"tab\" data-tab=\"tab-settings\">\r\n                        <i class=\"material-icons LPink_Text\">settings</i>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"tabs-mobile\">\r\n        <div class=\"tab current\" data-tab=\"tab-home\">\r\n                <i class=\"material-icons LPink_Text\">home</i>\r\n        </div>\r\n        <div class=\"tab\" data-tab=\"tab-image\">\r\n            <i class=\"material-icons LPink_Text\">image</i>\r\n        </div>\r\n        <div class=\"tab\" data-tab=\"tab-group\">\r\n            <i class=\"material-icons LPink_Text\">group</i>\r\n        </div>\r\n        <div class=\"tab\" data-tab=\"tab-settings\">\r\n            <i class=\"material-icons LPink_Text\">settings</i>\r\n        </div>\r\n    </div>        \r\n\r\n    \r\n<!--\r\n=======   Account body\r\n-->\r\n    <div class=\"acc-body \">\r\n\r\n\r\n        <div class=\"holder\">\r\n            <div id=\"tab-home\" class=\"tab-content current\">\r\n                <div class=\"section\">\r\n                    <div>\r\n                        <label class=\"label LtBlue_Text\">Uploads <button mat-icon-button class=\"LPink_Text\" type=\"button\" [routerLink]=\"['create']\"><mat-icon>add_photo_alternate</mat-icon></button> </label>\r\n                        <app-post-list></app-post-list>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"section\">\r\n                    <div>\r\n                        <label class=\"label LtBlue_Text\">Group Activity</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n<!--\r\n----------------    image tab-content\r\n-->\r\n            <div id=\"tab-image\" class=\"tab-content\">\r\n                <div class=\"section\">\r\n                    <div>\r\n                        <label class=\"label LtBlue_Text\">Collection</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n<!--\r\n----------------    group tab-content\r\n-->\r\n            <div id=\"tab-group\" class=\"tab-content\">\r\n                <div class=\"section\">\r\n                    <div >\r\n                        <label class=\"label LtBlue_Text\">Groups</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n<!--\r\n----------------    settings tab-content\r\n-->\r\n            <div id=\"tab-settings\" class=\"tab-content\">\r\n                <div class=\"section\">\r\n                    <div >\r\n                        <label class=\"label LtBlue_Text\">Settings</label>\r\n                        <div class=\"accordian\">\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n</div>\r\n\r\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiURL: "http://localhost:3000/api"
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

/***/ "BJyB":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/post/post.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"post-container\">\r\n    <div class=\"image-container valign-wrapper\">\r\n        <mat-card class=\"DBlack_BG\">\r\n            <mat-action-row *ngIf=\"userIsAuthenticated && userId == post.creator\">\r\n                <a mat-button color=\"primary\" [routerLink]=\"['/edit', post.id]\">EDIT</a>\r\n                <button mat-button color=\"warn\" (click)=\"onDelete(post.id)\">\r\n                  DELETE\r\n                </button>\r\n            </mat-action-row>\r\n        \r\n              <img [src]=\"post.imagePath\" [alt]=\"post.title\">\r\n        \r\n        </mat-card>\r\n        \r\n    </div>\r\n    <div class=\"right-panel \">\r\n      <div class=\"container center-align\">\r\n          <div class=\"row \">\r\n              <div class=\"col s12 green lighten-1 \">\r\n                  <h3>{{post.title}}</h3>\r\n              </div>\r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"col s12 green lighten-1 \">\r\n                  <p>{{post.content}}</p>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"container\">\r\n        <form >\r\n          <mat-card class=\"comment-card\">\r\n            <mat-card-header>\r\n              <div mat-card-avatar>  </div>\r\n              <mat-card-title > </mat-card-title>\r\n              <!-- <mat-card-subtitle>{{ aliases }}</mat-card-subtitle> -->\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n              <mat-form-field >\r\n                <mat-label>Leave a comment</mat-label>\r\n                <textarea matInput placeholder=\"This post makes me feel...\"></textarea>\r\n              </mat-form-field>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n              <button mat-button>LIKE</button>\r\n              <button mat-button>SHARE</button>\r\n            </mat-card-actions>\r\n          </mat-card>\r\n          \r\n          \r\n        </form>\r\n      </div>\r\n\r\n\r\n      <div class=\"container \">\r\n        <mat-card class=\"comment-card\">\r\n          <mat-card-header>\r\n            <div mat-card-avatar >  </div>\r\n            <mat-card-title >  </mat-card-title>\r\n            <!-- <mat-card-subtitle>{{ aliases }}</mat-card-subtitle> -->\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <p>\r\n              The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n              A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n              bred for hunting.\r\n            </p>\r\n          </mat-card-content>\r\n          <mat-card-actions>\r\n            <button mat-button>LIKE</button>\r\n            <button mat-button>SHARE</button>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "DTYH":
/*!***************************************************!*\
  !*** ./src/app/Components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_post_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./post.component.html */ "BJyB");
/* harmony import */ var _post_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post.component.css */ "epaP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "U6Tf");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts.service */ "gI4n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









let PostComponent = class PostComponent {
    constructor(authService, router, location, postsService, route) {
        this.authService = authService;
        this.router = router;
        this.location = location;
        this.postsService = postsService;
        this.route = route;
        this.isLoading = false;
        this.userIsAuthenticated = false;
    }
    ngOnInit() {
        setTimeout("post is live");
        this.isLoading = true;
        if (!this.post) {
            this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1)).subscribe((param) => {
                this.postId = param.get("id");
            });
            this.postsService.getPost(this.postId).subscribe((postData) => {
                this.isLoading = false;
                this.post = {
                    id: postData._id,
                    title: postData.title,
                    content: postData.content,
                    imagePath: postData.imagePath,
                    creator: postData.creator,
                    dateCreated: postData.dateCreated,
                };
            });
        }
        this.userSubs = this.authService.user.subscribe((user) => {
            if (!user) {
                return;
            }
            this.userIsAuthenticated = !!user;
            this.userId = user.id;
        });
    }
    goBack() {
        this.location.back();
    }
    onDelete(postId) {
        this.isLoading = true;
        this.postsService.deletePost(postId).subscribe((res) => {
            this.goBack();
        }, () => {
            this.isLoading = false;
        });
    }
};
PostComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: _posts_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
PostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-post-component",
        template: _raw_loader_post_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PostComponent);



/***/ }),

/***/ "DYWW":
/*!*********************************************************!*\
  !*** ./src/app/Components/navbar/nav-bar.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-toolbar{\r\n    border-radius: 3px;\r\n}\r\n@media(max-width: 959px){\r\n    mat-toolbar{\r\n        border-radius: 0px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9uYXZiYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9uYXZiYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogOTU5cHgpe1xyXG4gICAgbWF0LXRvb2xiYXJ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "FSwN":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/forum-thread/forum-thread.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <!--holds the thread question or message-->\n    <div id=\"T_Container\"  class=\"T_Container z-depth-2\">\n        <div class=\"row\">\n            <div class=\"col s8\">\n                <label class=\"thread_title LtBlue_Text\">Thread Title</label>\n            </div>\n            <div class=\"col s3 right-align\">\n                <label class=\"thread_status\">Status:</label>\n            </div>\n            <div id=\"status-check\" class=\"col s1 center red-text\">\n                <i class=\"material-icons\">check</i>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div id=\"Message\" class=\"col s12 LPink_Text\">\n                sfasfadsfadfsf\n            </div>\n        </div>\n    </div>\n\n\n\n\n\n    <div id=\"comments\"></div>\n\n");

/***/ }),

/***/ "Go5P":
/*!****************************************************!*\
  !*** ./src/app/Components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.sectionLabel{\r\n    font-size: 25px;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.imgContainer{\r\n    width: 100%;\r\n    padding: 0;\r\n    height: auto;\r\n}\r\n\r\n\r\n#search{\r\n    width: 100%;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.search {\r\n    margin-top: -15px;\r\n}\r\n\r\n\r\n/*\r\n======================    Max screen width 320 px mobile-s     =========================\r\n*/\r\n\r\n\r\n@media only screen and (max-width: 320px){\r\n/*ID's*/\r\n    \r\n/*Classes*/\r\n    .sectionLabel{\r\n        font-size: 15px;\r\n    }\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBR0E7O0NBRUM7OztBQUNEO0FBQ0EsT0FBTzs7QUFFUCxVQUFVO0lBQ047UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zZWN0aW9uTGFiZWx7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG5cclxuLmltZ0NvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuXHJcbiNzZWFyY2h7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaCB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG5cclxuXHJcbi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT0gICAgTWF4IHNjcmVlbiB3aWR0aCAzMjAgcHggbW9iaWxlLXMgICAgID09PT09PT09PT09PT09PT09PT09PT09PT1cclxuKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCl7XHJcbi8qSUQncyovXHJcbiAgICBcclxuLypDbGFzc2VzKi9cclxuICAgIC5zZWN0aW9uTGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "IAuF":
/*!***********************************************!*\
  !*** ./src/app/Components/auth/user.model.ts ***!
  \***********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(email, id, username, _token, _tokenExpirationDate) {
        this.email = email;
        this.id = id;
        this.username = username;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    ;
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}


/***/ }),

/***/ "IN8j":
/*!*************************************************!*\
  !*** ./src/app/Components/post/posts.module.ts ***!
  \*************************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/angular-material.module */ "rhD1");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.service */ "U6Tf");
/* harmony import */ var _post_create_post_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post-create/post-create.component */ "QEwN");
/* harmony import */ var _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./post-list/post-list.component */ "pX6M");
/* harmony import */ var _post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post.component */ "DTYH");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./posts.service */ "gI4n");











let PostsModule = class PostsModule {
};
PostsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_8__["PostListComponent"],
            _post_create_post_create_component__WEBPACK_IMPORTED_MODULE_7__["PostCreateComponent"],
            _post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        exports: [
            _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_8__["PostListComponent"],
            _post_create_post_create_component__WEBPACK_IMPORTED_MODULE_7__["PostCreateComponent"],
            _post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"]
        ],
        providers: [_posts_service__WEBPACK_IMPORTED_MODULE_10__["PostsService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]]
    })
], PostsModule);



/***/ }),

/***/ "MZQa":
/*!***************************************************!*\
  !*** ./src/app/Components/auth/auth.component.ts ***!
  \***************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth.component.html */ "Yn/v");
/* harmony import */ var _auth_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component.css */ "oW2+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "U6Tf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let AuthComponent = class AuthComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoading = false;
        this.isLoginMode = true;
        this.error = null;
    }
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }
    onHandleError() {
        this.error = null;
    }
    ngOnInit() {
    }
    onSubmit(form) {
        if (!form.valid) {
            return;
        }
        let authObs;
        this.isLoading = true;
        if (this.isLoginMode) {
            this.isLoading = true;
            authObs = this.authService.login(form.value.email, null, form.value.password);
        }
        else {
            this.isLoading = true;
            authObs = this.authService.createUser(form.value.email, form.value.username, form.value.password);
        }
        authObs.subscribe(() => {
            // do something after the user signed in or logged in
            this.router.navigate(["/"]);
        }, error => {
            this.isLoading = false;
        });
        this.isLoading = false;
        form.reset();
    }
    ngOnDestroy() {
        //this.authStatusSub.unsubscribe();
    }
};
AuthComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-auth-component',
        template: _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_auth_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AuthComponent);



/***/ }),

/***/ "Me0A":
/*!*****************************************************!*\
  !*** ./src/app/Components/navbar/nav-bar.module.ts ***!
  \*****************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/angular-material.module */ "rhD1");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.service */ "U6Tf");
/* harmony import */ var _post_posts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../post/posts.service */ "gI4n");
/* harmony import */ var _user_user_image_user_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user-image/user-image.component */ "fg0l");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.component */ "acFo");










let NavbarModule = class NavbarModule {
};
NavbarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
            _user_user_image_user_image_component__WEBPACK_IMPORTED_MODULE_8__["UserImageComponent"],
        ],
        imports: [
            src_app_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ],
        exports: [
            _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
            _user_user_image_user_image_component__WEBPACK_IMPORTED_MODULE_8__["UserImageComponent"]
        ],
        providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _post_posts_service__WEBPACK_IMPORTED_MODULE_7__["PostsService"]]
    })
], NavbarModule);



/***/ }),

/***/ "NLVf":
/*!*******************************************************************!*\
  !*** ./src/app/Components/forum-thread/forum-thread.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForumthreadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumthreadComponent", function() { return ForumthreadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forum_thread_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forum-thread.component.html */ "FSwN");
/* harmony import */ var _forum_thread_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forum-thread.component.css */ "s5TF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ForumthreadComponent = class ForumthreadComponent {
    constructor() { }
    ngOnInit() { }
    ngAfterViewInit() {
        $(() => {
            $(window).scroll(() => {
                const scroll = $(window).scrollTop(); // how many pixels you've scrolled
                const os = $('#T_Container').offset().top; // pixels to the top of div1
                const ht = $('#T_Container').height(); // height of div1 in pixels
                // if you've scrolled further than the top of div1 plus it's height
                // change the color. either by adding a class or setting a css property
                if (scroll > os + ht) {
                    $('#T_Container').addClass('threadNot');
                    $('#T_Container').removeClass('T_Container');
                }
                else if (scroll < ht) {
                    $('#T_Container').addClass('T_Container');
                    $('#T_Container').removeClass('threadNot');
                }
            });
        });
    }
};
ForumthreadComponent.ctorParameters = () => [];
ForumthreadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forum-thread',
        template: _raw_loader_forum_thread_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forum_thread_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ForumthreadComponent);



/***/ }),

/***/ "PFWS":
/*!***********************************************************************!*\
  !*** ./src/app/Components/post/post-create/post-create.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nmat-form-field,\r\ntextarea {\r\n    margin: auto;\r\n    width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n    width: auto;\r\n}\r\n\r\ninput[type=\"file\"] {\r\n    visibility: hidden;\r\n}\r\n\r\n.image-preview{\r\n    height: 5rem;\r\n    margin: 1rem 0;\r\n}\r\n\r\n.image-preview img{\r\n    height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wb3N0L3Bvc3QtY3JlYXRlL3Bvc3QtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztJQUVJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Bvc3QvcG9zdC1jcmVhdGUvcG9zdC1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5tYXQtZm9ybS1maWVsZCxcclxudGV4dGFyZWEge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1zcGlubmVyIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3e1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3IGltZ3tcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "QEwN":
/*!**********************************************************************!*\
  !*** ./src/app/Components/post/post-create/post-create.component.ts ***!
  \**********************************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_post_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./post-create.component.html */ "2Kbr");
/* harmony import */ var _post_create_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-create.component.css */ "PFWS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../posts.service */ "gI4n");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mime-type.validator */ "kasn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");









let PostCreateComponent = class PostCreateComponent {
    constructor(postsService, route, location) {
        this.postsService = postsService;
        this.route = route;
        this.location = location;
        this.enteredTitle = "";
        this.enteredContent = "";
        this.isLoading = false;
        this.mode = "create";
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]
            }),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_7__["mimeType"]]
            })
        });
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has("postId")) {
                this.mode = "edit";
                this.postId = paramMap.get("postId");
                this.isLoading = true;
                this.postsService.getPost(this.postId).subscribe(postData => {
                    this.isLoading = false;
                    this.post = {
                        id: postData._id,
                        title: postData.title,
                        content: postData.content,
                        imagePath: postData.imagePath,
                        creator: postData.creator,
                        dateCreated: postData.dateCreated
                    };
                    this.form.setValue({
                        title: this.post.title,
                        content: this.post.content,
                        image: this.post.imagePath
                    });
                });
            }
            else {
                this.mode = "create";
                this.postId = null;
            }
        });
    }
    onImagePicked(event) {
        const file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get("image").updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    }
    onSavePost() {
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === "create") {
            this.postsService.addPost(this.form.value.title, this.form.value.content, this.form.value.image);
        }
        else {
            this.postsService.updatePost(this.postId, this.form.value.title, this.form.value.content, this.form.value.image);
        }
        this.form.reset();
    }
    goBack() {
        this.location.back();
    }
};
PostCreateComponent.ctorParameters = () => [
    { type: _posts_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"] }
];
PostCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-post-create",
        template: _raw_loader_post_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_create_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PostCreateComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Components_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/auth/auth.service */ "U6Tf");






let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'Sekaiko';
        this.isAuthenticated = false;
    }
    ngOnInit() {
        this.userSubs = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
        });
        this.stretchParallax();
    }
    onSidenavClose() {
    }
    ngAfterViewInit() {
    }
    stretchParallax() {
        jquery__WEBPACK_IMPORTED_MODULE_4__().ready(() => {
            function StretchFullScreen(CheckIn, LookForClass) {
                const container = CheckIn; /*set local variable to Container to check*/
                const cClass = LookForClass; /*set local variable to Class to look for in the container*/
                if (container.hasClass(cClass)) {
                    container.removeClass(cClass);
                }
                else {
                    container.addClass(cClass); // adds class stretch to parallax.
                }
            }
            // DoubleClick event for "parallax-container"
            jquery__WEBPACK_IMPORTED_MODULE_4__(".parallax-container").dblclick(() => {
                // invoke function StretchFullScreen(CheckIn, LookForClass);
                StretchFullScreen(jquery__WEBPACK_IMPORTED_MODULE_4__(".parallax-container"), "stretch");
            });
        });
    }
    logOut() {
        this.authService.logout();
    }
    ngOnDestroy() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _Components_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "U6Tf":
/*!*************************************************!*\
  !*** ./src/app/Components/auth/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.model */ "IAuF");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");








const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiURL + "/user/";
let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
    }
    createUser(email, username, password) {
        const authData = {
            email: email,
            username: username,
            password: password,
        };
        return this.http.post(BACKEND_URL + "signup", authData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])({
            next: (responseData) => {
                this.handleAuthentication(responseData.email, responseData.userId, responseData.username, responseData.token, +responseData.expiresIn);
            },
        }));
    }
    //username is just placeholder. Will not function
    login(email, username, password) {
        const authData = {
            email: email,
            username: username,
            password: password,
        };
        return this.http.post(BACKEND_URL + "/login", authData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])({
            next: (responseData) => {
                this.handleAuthentication(responseData.email, responseData.userId, responseData.username, responseData.token, +responseData.expiresIn);
            },
        }));
    }
    handleAuthentication(email, userId, username, token, expiresIn) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new _user_model__WEBPACK_IMPORTED_MODULE_6__["User"](email, userId, username, token, expirationDate);
        this.saveAuthData(token, expirationDate, userId, username, email);
        this.user.next(user);
        this.autoLogout(expiresIn * 1000);
    }
    logout() {
        this.user.next(null);
        clearTimeout(this.tokenExpirationTimer);
        this.router.navigate(["/"]);
        this.clearAuthData();
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }
    autoLogin() {
        this.getAuthData();
    }
    autoLogout(expirationDuration) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }
    getAuthData() {
        const sekaikoData = JSON.parse(localStorage.getItem("sekaikoData"));
        if (!sekaikoData.token || !sekaikoData.expiration) {
            return;
        }
        const newData = new _user_model__WEBPACK_IMPORTED_MODULE_6__["User"](sekaikoData.email, sekaikoData.userId, sekaikoData.username, sekaikoData.token, new Date(sekaikoData.expiration));
        const now = new Date();
        if (newData.token) {
            this.user.next(newData);
            const expirationDuration = new Date(sekaikoData.expiration).getTime() - now.getTime();
            this.autoLogout(expirationDuration);
        }
    }
    clearAuthData() {
        localStorage.removeItem("sekaikoData");
    }
    saveAuthData(token, expirationDate, userId, username, email) {
        const sekaikoData = {
            token: token,
            expiration: expirationDate,
            userId: userId,
            username: username,
            email: email,
        };
        localStorage.setItem("sekaikoData", JSON.stringify(sekaikoData));
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: "root" })
], AuthService);



/***/ }),

/***/ "VhVg":
/*!***********************************************************!*\
  !*** ./src/app/Components/parallax/parallax.component.ts ***!
  \***********************************************************/
/*! exports provided: ParallaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxComponent", function() { return ParallaxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_parallax_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./parallax.component.html */ "wj5b");
/* harmony import */ var _parallax_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parallax.component.css */ "62qp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "U6Tf");





let ParallaxComponent = class ParallaxComponent {
    constructor(authService) {
        this.authService = authService;
        this.isAuthenticated = true;
    }
    ngOnInit() {
        this.userSubs = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
        });
    }
    ngOnDestroy() {
        this.userSubs.unsubscribe();
    }
};
ParallaxComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
ParallaxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-parallax',
        template: _raw_loader_parallax_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_parallax_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ParallaxComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fullHeight DBlack_BG\">\r\n    <mat-sidenav-container>\r\n        <mat-sidenav #sidenav role=\"navigation\">\r\n          \r\n          <!--this is a place for us to add side-nav code-->\r\n          <mat-nav-list>\r\n            <a mat-list-item [routerLink]=\"['/']\" routerLinkActive=\"DBlue_Text DWhite_BG\" [routerLinkActiveOptions]=\"{exact:true}\" (click)=\"onSidenavClose()\">\r\n                <mat-icon>home</mat-icon> <span class=\"nav-caption\">Home</span>\r\n            </a>\r\n            <a mat-list-item [routerLink]=\"['/art']\" routerLinkActive=\"DBlue_Text DWhite_BG\" (click)=\"onSidenavClose()\">\r\n                <mat-icon>image</mat-icon> <span class=\"nav-caption\">Art</span>   \r\n            </a>\r\n            <a mat-list-item [routerLink]=\"['/forum']\" routerLinkActive=\"DBlue_Text DWhite_BG\" *ngIf=\"isAuthenticated\" (click)=\"onSidenavClose()\">\r\n                <mat-icon>forum</mat-icon><span class=\"nav-caption\">Forums</span>\r\n            </a>\r\n            <a mat-list-item [routerLink]=\"['/support']\" routerLinkActive=\"DBlue_Text DWhite_BG\" *ngIf=\"isAuthenticated\" (click)=\"onSidenavClose()\">\r\n                <mat-icon>form</mat-icon><span class=\"nav-caption\">Contact</span>\r\n            </a>\r\n          </mat-nav-list>\r\n        </mat-sidenav>\r\n        <mat-sidenav-content class=\"DBlack_BG\">\r\n            <app-navbar (sidenavToggle)=\"sidenav.toggle()\" (loggingOut)=\"logOut()\" ></app-navbar>\r\n          <!--in here all the content must reside. We will add a navigation header as well-->\r\n          <main>\r\n            <router-outlet></router-outlet>\r\n          </main>\r\n        </mat-sidenav-content>\r\n      </mat-sidenav-container>\r\n</div>\r\n");

/***/ }),

/***/ "W/2F":
/*!*****************************************************!*\
  !*** ./src/app/Components/auth/auth-interceptor.ts ***!
  \*****************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "U6Tf");





let AuthInterceptor = class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(user => {
            if (!user) {
                return next.handle(req);
            }
            const modifiedReq = req.clone({ headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('authorization', "Bearer " + user.token) });
            // console.log(modifiedReq);
            return next.handle(modifiedReq);
        }));
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "Yn/v":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/auth/auth.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login valign-wrapper \">\r\n  <mat-card>\r\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n    <form *ngIf=\"!isLoading\" (submit)=\"onSubmit(authForm)\" #authForm=\"ngForm\">\r\n    <mat-card-title>{{ isLoginMode ? \"Login\" : \"Sign Up\" }} </mat-card-title>\r\n      <mat-form-field>\r\n        <input\r\n          matInput\r\n          type=\"email\"\r\n          placeholder=\"E-Mail\"\r\n          name=\"email\"\r\n          ngModel\r\n          #emailInput=\"ngModel\"\r\n          required\r\n          email\r\n        />\r\n        <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid E-Mail.</mat-error>\r\n      </mat-form-field>\r\n  \r\n      \r\n      <mat-form-field *ngIf=\"!isLoginMode\">\r\n        <input\r\n          matInput\r\n          type=\"username\"\r\n          placeholder=\"Username\"\r\n          name=\"username\"\r\n          ngModel\r\n          #usernameInput=\"ngModel\"\r\n          required\r\n          maxlength=\"16\"\r\n          minlength=\"3\"\r\n        />\r\n        <mat-error *ngIf=\"usernameInput.invalid\">A username is required.</mat-error>\r\n      </mat-form-field>\r\n      \r\n      <mat-form-field>\r\n        <input\r\n          matInput\r\n          type=\"password\"\r\n          name=\"content\"\r\n          placeholder=\"Password\"\r\n          ngModel\r\n          name=\"password\"\r\n          #passwordInput=\"ngModel\"\r\n          required\r\n          password\r\n          minlength=\"6\"\r\n        />\r\n        <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid Password.</mat-error>\r\n      </mat-form-field>\r\n  \r\n      <button mat-raised-button color=\"accent\" type=\"submit\" *ngIf=\"!isLoading\" [disabled]=\"!authForm.valid\"> {{ isLoginMode ? \"Login\" : \"Sign Up\" }}</button>\r\n  \r\n      <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"onSwitchMode()\"> switch to {{ !isLoginMode ? \"Login\" : \"Sign Up\" }}</button>\r\n        \r\n      <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n    </form>\r\n  </mat-card>\r\n</div>\r\n \r\n\r\n");

/***/ }),

/***/ "Ypg5":
/*!***********************************************************!*\
  !*** ./src/app/Components/acc-home/acc-home.component.ts ***!
  \***********************************************************/
/*! exports provided: AccHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccHomeComponent", function() { return AccHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_acc_home_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./acc-home.component.html */ "AsuR");
/* harmony import */ var _acc_home_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./acc-home.component.css */ "gTyo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let AccHomeComponent = class AccHomeComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnChanges(changes) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        console.log(changes);
        console.log(this.route.snapshot.params.id);
    }
    ngOnInit() {
        this.changeTabs();
        this.userURL = {
            id: this.route.snapshot.params['id'],
            username: this.route.snapshot.params['username']
        };
        this.username = this.userURL.username;
    }
    ngAfterViewInit() {
        this.changeTabs();
    }
    changeTabs() {
        jquery__WEBPACK_IMPORTED_MODULE_4__().ready(() => {
            // =============================           Tab button trigger
            // ----------------  Click event for tabs (Desktop)
            jquery__WEBPACK_IMPORTED_MODULE_4__(".tab-links > .tab").click(
            // Function for desktop tabs
            function tabs() {
                const tabId = jquery__WEBPACK_IMPORTED_MODULE_4__(this).attr("data-tab");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".tab-links > .tab").removeClass("current");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".tab-content").removeClass("current");
                jquery__WEBPACK_IMPORTED_MODULE_4__(this).addClass("current");
                jquery__WEBPACK_IMPORTED_MODULE_4__("#" + tabId).addClass("current");
            });
            // ----------------  Click event for tabs (Mobile)
            jquery__WEBPACK_IMPORTED_MODULE_4__(".tabs-mobile > .tab").click(
            // Function for mobile tabs
            function tabsMobile() {
                const tabId = jquery__WEBPACK_IMPORTED_MODULE_4__(this).attr("data-tab");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".tabs-mobile > .tab").removeClass("current");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".tab-content").removeClass("current");
                jquery__WEBPACK_IMPORTED_MODULE_4__(this).addClass("current");
                jquery__WEBPACK_IMPORTED_MODULE_4__("#" + tabId).addClass("current");
            });
            // ============================            Tab mobile
            (() => {
                const winIsSmall = jquery__WEBPACK_IMPORTED_MODULE_4__(window).width() <= 768;
                if (winIsSmall) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".tabs-mobile").show();
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".tab-links").hide();
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".tab-links").show();
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".tabs-mobile").hide();
                }
            })();
            jquery__WEBPACK_IMPORTED_MODULE_4__(window).resize(() => {
                const winIsSmall = jquery__WEBPACK_IMPORTED_MODULE_4__(window).width() <= 768;
                if (winIsSmall) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".tab-links").hide();
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".tabs-mobile").show();
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".tab-links").show();
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".tabs-mobile").hide();
                }
            });
        });
    }
};
AccHomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AccHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-acc-home",
        template: _raw_loader_acc_home_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_acc_home_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccHomeComponent);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _Components_navbar_nav_bar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/navbar/nav-bar.module */ "Me0A");
/* harmony import */ var _Components_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/auth/auth.service */ "U6Tf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./angular-material.module */ "rhD1");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _Components_post_posts_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/post/posts.module */ "IN8j");
/* harmony import */ var _Components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/auth/auth-interceptor */ "W/2F");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _Components_parallax_parallax_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/parallax/parallax.component */ "VhVg");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/home/home.component */ "0zBU");
/* harmony import */ var _Components_art_art_filter_art_filter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/art/art-filter/art-filter.component */ "ok01");
/* harmony import */ var _Components_acc_home_acc_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/acc-home/acc-home.component */ "Ypg5");
/* harmony import */ var _Components_auth_auth_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Components/auth/auth.component */ "MZQa");
/* harmony import */ var _Components_art_art_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Components/art/art.component */ "oM9I");
/* harmony import */ var _Components_forum_forum_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Components/forum/forum.component */ "6VaG");
/* harmony import */ var _Components_forum_thread_forum_thread_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Components/forum-thread/forum-thread.component */ "NLVf");
/* harmony import */ var _Components_support_support_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Components/support/support.component */ "655v");
/* harmony import */ var _Components_navbar_nav_bar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Components/navbar/nav-bar.component */ "oCwr");

























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _Components_parallax_parallax_component__WEBPACK_IMPORTED_MODULE_15__["ParallaxComponent"],
            _Components_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
            _Components_art_art_filter_art_filter_component__WEBPACK_IMPORTED_MODULE_17__["ArtFilterComponent"],
            _Components_acc_home_acc_home_component__WEBPACK_IMPORTED_MODULE_18__["AccHomeComponent"],
            _Components_auth_auth_component__WEBPACK_IMPORTED_MODULE_19__["AuthComponent"],
            _Components_art_art_component__WEBPACK_IMPORTED_MODULE_20__["ArtComponent"],
            _Components_forum_forum_component__WEBPACK_IMPORTED_MODULE_21__["ForumComponent"],
            _Components_forum_thread_forum_thread_component__WEBPACK_IMPORTED_MODULE_22__["ForumthreadComponent"],
            _Components_support_support_component__WEBPACK_IMPORTED_MODULE_23__["SupportComponent"],
            _Components_navbar_nav_bar_component__WEBPACK_IMPORTED_MODULE_24__["NavbarComponent"]
        ],
        imports: [
            _Components_navbar_nav_bar_module__WEBPACK_IMPORTED_MODULE_4__["NavbarModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _Components_post_posts_module__WEBPACK_IMPORTED_MODULE_10__["PostsModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialModule"],
        ],
        providers: [
            _Components_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _Components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_11__["AuthInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "ZdNE":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/art/art-filter/art-filter.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"LtBlack_BG\">\r\n    <form>\r\n        <div fxFlex fxLayout class=\"input-field\">\r\n            <input id=\"search\" type=\"search\" required>\r\n            <label class=\"label-icon\" for=\"search\">\r\n                <i class=\"material-icons\">search</i>\r\n            </label>\r\n            <i class=\"material-icons\">X</i>\r\n        </div>\r\n        <mat-accordion >\r\n            <mat-expansion-panel hideToggle class=\"DBlack_BG \">\r\n                <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n\r\n                </mat-panel-title>\r\n                <mat-panel-description style=\"color: white !important;\">\r\n                    Filters\r\n                </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n\r\n                <section class=\"filter-section center\">\r\n                    <span class=\"filter-list-section\">\r\n                        <mat-checkbox class=\"filter-margin\"\r\n                                        [checked]=\"allComplete\"\r\n                                        [indeterminate]=\"someComplete()\"\r\n                                        (change)=\"setAll($event.checked)\">\r\n                            {{genres.name}}\r\n                        </mat-checkbox>\r\n                        </span>\r\n                    <span class=\"filter-list-section\">\r\n                        <ul>\r\n                            <li *ngFor=\"let subtask of genres.subtasks\">\r\n                            <mat-checkbox [(ngModel)]=\"subtask.completed\"\r\n                                            [color]=\"subtask.color\"\r\n                                            (ngModelChange)=\"updateAllComplete()\">\r\n                                {{subtask.name}}\r\n                            </mat-checkbox>\r\n                            </li>\r\n                        </ul>\r\n                    </span>\r\n                </section>\r\n                \r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n        <button   mat-button type=\"submit\" class=\"DPink_BG\">Submit</button>\r\n\r\n        \r\n    </form>\r\n</div>");

/***/ }),

/***/ "acFo":
/*!**********************************************************!*\
  !*** ./src/app/Components/navbar/user/user.component.ts ***!
  \**********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user.component.html */ "c7+p");
/* harmony import */ var _user_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component.css */ "AmRd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ "U6Tf");






let UserComponent = class UserComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isAuthenticated = false;
        this.username = "Unknown";
        this.isLoggingOut = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnChanges() {
    }
    ngOnInit() {
        this.userSubs = this.authService.user.subscribe(user => {
            if (user) {
                this.username = user.username;
                this.id = user.id;
            }
            this.isAuthenticated = !!user;
        });
    }
    ngAfterViewInit() {
    }
    goMyHome() {
        this.router.navigate(['/acc-home', this.id, this.username]
        // , {queryParams: { id: this.authService.getUserId() }}
        );
    }
    emitLogout() {
        this.username = "";
        this.isAuthenticated = false;
        this.isLoggingOut.emit();
    }
    ngOnDestroy() {
        this.userSubs.unsubscribe();
    }
};
UserComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
UserComponent.propDecorators = {
    isLoggingOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
UserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user',
        template: _raw_loader_user_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserComponent);



/***/ }),

/***/ "c7+p":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/navbar/user/user.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"userInformation\">\r\n    <div *ngIf=\"!isAuthenticated\" class=\"loginLink\">\r\n        <a [routerLink]=\"['/auth']\"  href=\"#\" >\r\n            <mat-grid-list cols=\"2\" >\r\n                <mat-grid-tile>\r\n                    <mat-icon >login</mat-icon>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                    <p>Login</p>\r\n                </mat-grid-tile>\r\n            </mat-grid-list>\r\n        </a>\r\n    </div>\r\n    <button mat-button [matMenuTriggerFor]=\"menu\" *ngIf=\"isAuthenticated\" class=\"userButton\" >\r\n        <mat-grid-list cols=\"4\" >\r\n            <mat-grid-tile colspan=\"1\">\r\n                <app-user-image class=\"valign-wrapper\"></app-user-image>\r\n            </mat-grid-tile>\r\n            <mat-grid-tile colspan=\"3\" fxHide.lt-md>\r\n                <p class=\"LBlue_Text\">\r\n                    {{username}}\r\n                </p>\r\n            </mat-grid-tile>\r\n        </mat-grid-list>\r\n    </button>\r\n\r\n    \r\n    <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item (click)=\"goMyHome()\"> Home </button>\r\n        <button mat-menu-item (click)=\"emitLogout()\"> Logout </button>\r\n    </mat-menu>\r\n</div>");

/***/ }),

/***/ "dFvp":
/*!***********************************************!*\
  !*** ./src/app/Components/auth/auth.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "U6Tf");





let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((user) => {
            const isAuth = !!user;
            if (isAuth) {
                return true;
            }
            return this.router.createUrlTree(["/auth"]);
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "dZrv":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/navbar/user/user-image/user-image.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-icon>account_circle</mat-icon>");

/***/ }),

/***/ "e79C":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/support/support.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--container that holds information between the nav and footer-->\n<!--Thakes the width of the entire screen-->\n<div class=\"wide-container\">\n\n    <!--container that holds the hero image-->\n            <div>\n    <!--background image-->\n                <div class=\"image\"></div>\n            </div>\n    \n            \n            \n    <!--container that holds contact links-->\n            <div class=\"container\">\n    <!--Support form selection button-->\n                <div class=\"formSelectionContainer\">\n                    <div class=\"row\">\n                        <div class=\"col s12 m12 l12 xl12\">\n                            <label class=\"contact-label LtBlue_Text\">Support</label>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col s12\">\n                            <div>\n                                <a class=\"btn White_BG LPink_Text\" [routerLink]=\"['/forum']\" routerLinkActive=\"router-link-active\" ><i class=\"material-icons left\">forum</i>Check the forums</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col s12\">\n                            <div>\n                                <a id=\"supportEmail\" class=\"btn White_BG LPink_Text\"><i class=\"material-icons left\">email</i>email us</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n    <!--Suggestion form selection button-->\n                <div class=\"formSelectionContainer\">\n                    <div class=\"row\">\n                        <div class=\"col s12 m12 l12 xl12\">\n                            <label class=\"contact-label LtBlue_Text\">Send a suggestion</label>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col s12 m12 l12 xl12\">\n                            <div>\n                                <a id=\"suggestionEmail\" class=\"btn White_BG LPink_Text\"><i class=\"material-icons left\">email</i>we will look it through</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n    <!--Complaint form selection button-->\n                <div class=\"formSelectionContainer\">\n                    <div class=\"row\">\n                        <div class=\"col s12 m12 l12 xl12\">\n                            <label class=\"contact-label LtBlue_Text\">Do you have a complaint?</label>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col s12 m12 l12 xl12\">\n                            <div>\n                                <a id=\"complaintEmail\" class=\"btn White_BG LPink_Text\"><i class=\"material-icons left\">email</i>Tell us though email</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \n            \n            \n    <!--divider that seperates the buttons and the forms-->\n            <div class=\"divider\"></div>\n            \n            \n            \n            \n    <!--Container that holds the forms-->\n            <div class=\"form-container\">\n    <!--Support email form-->\n                <div id=\"supportForm\" class=\"form Blue_BG White_Text hide\">\n                    <div class=\"row\">\n                        <form class=\"col s12\">\n                            <legend class=\"formLegend\">Email Support</legend>\n    <!--account name-->\n                            <div class=\"row\">\n                                <div class=\"input-field col s6\">\n                                    <i class=\"material-icons prefix\">account_box</i>\n                                    <input id=\"Support_AccName\" type=\"text\" class=\"validate\">\n                                    <label for=\"Support_AccName\">Account Name</label>\n                                </div>\n    <!--Email-->\n                                <div class=\"input-field col s6\">\n                                    <i class=\"material-icons prefix\">email</i>\n                                    <input id=\"Support_email\" type=\"email\" class=\"validate\">\n                                    <label for=\"Support_email\" data-error=\"wrong\" data-success=\"right\">Email</label>\n                                </div>\n                            </div>\n    <!--Select a topic-->\n                            <div class=\"row\">\n                                <div class=\"col s12\">\n                                    <label>Choose a topic</label>\n                                    <select class=\"browser-default\">\n                                    <option value=\"\" disabled selected>Choose your option</option>\n                                    <option value=\"1\">Account</option>\n                                    <option value=\"2\">Users</option>\n                                    <option value=\"3\">Other</option>\n                                    </select>\n                                </div>\n                            </div>\n    <!--Subject-->\n                            <div class=\"row\">\n                                <div class=\"input-field col s12\">\n                                    <i class=\"material-icons prefix\">subject</i>\n                                    <input id=\"Support_subject\" type=\"text\" class=\"validate\">\n                                    <label for=\"Support_subject\">Subject</label>\n                                </div>\n                            </div>\n    <!--textbox for message-->\n                            <div class=\"row\">\n                                <div class=\"input-field col s12\">\n                                    <i class=\"material-icons prefix\">mode_edit</i>\n                                    <textarea id=\"messageSupport\" class=\"materialize-textarea\"></textarea>\n                                    <label for=\"messageSupport\">Message</label>\n                                </div>\n                            </div>\n    <!--submit button-->\n                            <div class=\"row\">\n                                <button class=\"btn LtWhite_BG LtBlue_Text waves-effect waves-light right\" type=\"submit\" name=\"action\">Submit\n                                    <i class=\"material-icons right\">send</i>    \n                                </button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n                \n                \n                \n                \n                \n    <!--Suggestion form-->\n                <div id=\"suggestionForm\" class=\"form Blue_BG White_Text hide\">\n                    <div class=\"row\">\n                        <form class=\"col s12\">\n                            <legend class=\"formLegend\">Suggestion</legend>\n    <!--account name-->\n                            <div class=\"row\">\n                                <div class=\"input-field col s6\">\n                                    <i class=\"material-icons prefix\">account_box</i>\n                                    <input id=\"Suggestion_AccName\" type=\"text\" class=\"validate\">\n                                    <label for=\"Suggestion_AccName\">Account Name</label>\n                                </div>\n    <!--Email-->\n                                <div class=\"input-field col s6\">\n                                    <i class=\"material-icons prefix\">email</i>\n                                    <input id=\"Suggestion_email\" type=\"email\" class=\"validate\">\n                                    <label for=\"Suggestion_email\" data-error=\"wrong\" data-success=\"right\">Email</label>\n                                </div>\n                            </div>\n    <!--Subject-->\n                            <div class=\"row\">\n                                <div class=\"input-field col s12\">\n                                    <i class=\"material-icons prefix\">subject</i>\n                                    <input id=\"Suggestion_subject\" type=\"text\" class=\"validate\">\n                                    <label for=\"Suggestion_subject\">Subject</label>\n                                </div>\n                            </div>\n    <!--textbox for message-->\n                            <div class=\"row\">\n                                <div class=\"input-field col s12\">\n                                    <i class=\"material-icons prefix\">mode_edit</i>\n                                    <textarea id=\"Suggestion_message\" class=\"materialize-textarea\"></textarea>\n                                    <label for=\"Suggestion_message\">Message</label>\n                                </div>\n                            </div>\n    <!--submit button-->\n                            <div class=\"row\">\n                                <button class=\"btn LtWhite_BG LtBlue_Text waves-effect waves-light right\" type=\"submit\" name=\"action\">Submit\n                                    <i class=\"material-icons right\">send</i>    \n                                </button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n                \n                \n                \n    <!--Complaint form-->\n                <div id=\"complaintForm\" class=\"form Blue_BG White_Text hide\">\n                    <div class=\"row\">\n                        <form class=\"col s12\">\n                            <legend class=\"formLegend\">Complaint</legend>\n    <!--account name-->\n                            <div class=\"row\">\n                                <div class=\"input-field col s6\">\n                                    <i class=\"material-icons prefix\">account_box</i>\n                                    <input id=\"Complaint_AccName\" type=\"text\" class=\"validate\">\n                                    <label for=\"Complaint_AccName\">Account Name</label>\n                                </div>\n    <!--Email-->\n                                <div class=\"input-field col s6\">\n                                    <i class=\"material-icons prefix\">email</i>\n                                    <input id=\"Complaint_email\" type=\"email\" class=\"validate\">\n                                    <label for=\"Complaint_email\" data-error=\"wrong\" data-success=\"right\">Email</label>\n                                </div>\n                            </div>\n    <!--Select a topic-->\n                            <div class=\"row\">\n                                <div class=\"col s12\">\n                                    <label>Choose a topic</label>\n                                    <select class=\"browser-default\">\n                                    <option value=\"\" disabled selected>Choose your option</option>\n                                    <option value=\"1\">I have experienced a bug</option>\n                                    <option value=\"2\">User interaction</option>\n                                    <option value=\"3\">Other</option>\n                                    </select>\n                                </div>\n                            </div>\n    <!--Subject-->\n                            <div class=\"row\">\n                                <div class=\"input-field col s12\">\n                                    <i class=\"material-icons prefix\">subject</i>\n                                    <input id=\"Complaint_subject\" type=\"text\" class=\"validate\">\n                                    <label for=\"Complaint_subject\">Subject</label>\n                                </div>\n                            </div>\n    <!--textbox for message-->\n                            <div class=\"row\">\n                                <div class=\"input-field col s12\">\n                                    <i class=\"material-icons prefix\">mode_edit</i>\n                                    <textarea id=\"Complaint_message\" class=\"materialize-textarea\"></textarea>\n                                    <label for=\"Complaint_message\">Give us some more detail</label>\n                                </div>\n                            </div>\n    <!--submit button-->\n                            <div class=\"row\">\n                                <button class=\"btn LtWhite_BG LtBlue_Text waves-effect waves-light right\" type=\"submit\" name=\"action\">Submit\n                                    <i class=\"material-icons right\">send</i>    \n                                </button>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>");

/***/ }),

/***/ "epaP":
/*!****************************************************!*\
  !*** ./src/app/Components/post/post.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".post-container{\r\n    min-height: 100%;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n}\r\n.image-container {\r\n    width: 70%;\r\n}\r\nmat-card-content{\r\n    width: 100%;\r\n}\r\nmat-card-content mat-form-feild{\r\n    width: 100%;\r\n}\r\nmat-card-content mat-form-feild textarea {\r\n    width: 100%;\r\n    height: 100px;\r\n}\r\n.image-container mat-card{\r\n    padding: auto;\r\n    border-radius: 0%;\r\n}\r\n.image-container img {\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\r\n    width: 100%;\r\n    max-height: 100%;\r\n}\r\n.right-panel{\r\n    width: 30%;\r\n    background-color: rgb(31, 29, 29);\r\n}\r\n.right-panel .container{\r\n    padding-top: 10%;\r\n}\r\n@media only screen and (max-width: 1023px) {\r\n    .post-container{\r\n        display: block;\r\n    }\r\n\r\n    .image-container {\r\n        width: 100%;\r\n        height: 80%;\r\n    }\r\n\r\n    .right-panel {\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n}\r\n@media only screen and (max-width: 520px) {\r\n    .post-container{\r\n        display: block;\r\n    }\r\n\r\n    .image-container {\r\n        width: 100%;\r\n        max-height: 60%;\r\n    }\r\n\r\n    .right-panel {\r\n        width: 100%;\r\n        height: 100vh;\r\n    }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksc0JBQW1CO09BQW5CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUNBQWlDO0FBQ3JDO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFJQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNKO0FBR0E7SUFDSTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3QtY29udGFpbmVye1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG4uaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWNvbnRlbnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5tYXQtY2FyZC1jb250ZW50IG1hdC1mb3JtLWZlaWxke1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWNvbnRlbnQgbWF0LWZvcm0tZmVpbGQgdGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIG1hdC1jYXJke1xyXG4gICAgcGFkZGluZzogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAlO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucmlnaHQtcGFuZWx7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMxLCAyOSwgMjkpO1xyXG59XHJcblxyXG4ucmlnaHQtcGFuZWwgLmNvbnRhaW5lcntcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDIzcHgpIHtcclxuICAgIC5wb3N0LWNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgIH1cclxuXHJcbiAgICAucmlnaHQtcGFuZWwge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAgIC5wb3N0LWNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA2MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0LXBhbmVsIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "fg0l":
/*!***************************************************************************!*\
  !*** ./src/app/Components/navbar/user/user-image/user-image.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserImageComponent", function() { return UserImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_image_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-image.component.html */ "dZrv");
/* harmony import */ var _user_image_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-image.component.css */ "+TLA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let UserImageComponent = class UserImageComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserImageComponent.ctorParameters = () => [];
UserImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-image',
        template: _raw_loader_user_image_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_image_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserImageComponent);



/***/ }),

/***/ "gI4n":
/*!**************************************************!*\
  !*** ./src/app/Components/post/posts.service.ts ***!
  \**************************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");







const BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiURL + "/posts/";
let PostsService = class PostsService {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.posts = [];
        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    getPosts(postsPerPage, currentPage) {
        const queryParams = `?pagesize=${postsPerPage}&page=${currentPage}`;
        this.http
            .get(BACKEND_URL + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((postData) => {
            return {
                posts: postData.posts.map((post) => {
                    return {
                        title: post.title,
                        content: post.content,
                        id: post._id,
                        imagePath: post.imagePath,
                        creator: post.creator,
                        dateCreated: post.dateCreated
                    };
                }),
                maxPosts: postData.maxPosts,
            };
        }))
            .subscribe((transformedPostData) => {
            this.posts = transformedPostData.posts;
            this.postsUpdated.next({
                posts: [...this.posts],
                postCount: transformedPostData.maxPosts,
            });
            // console.log(transformedPostData.posts);
        });
    }
    getCreatorPosts(id, postsPerPage, currentPage) {
        const queryParams = `?&pagesize=${postsPerPage}&page=${currentPage}`;
        this.http
            .get(BACKEND_URL + id + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((postData) => {
            return {
                posts: postData.posts.map((post) => {
                    return {
                        title: post.title,
                        content: post.content,
                        id: post._id,
                        imagePath: post.imagePath,
                        creator: post.creator,
                        dateCreated: post.dateCreated
                    };
                }),
                maxPosts: postData.maxPosts,
            };
        }))
            .subscribe((transformedPostData) => {
            this.posts = transformedPostData.posts;
            this.postsUpdated.next({
                posts: [...this.posts],
                postCount: transformedPostData.maxPosts,
            });
        });
    }
    getPostUpdateListener() {
        return this.postsUpdated.asObservable();
    }
    getPost(postId) {
        return this.http.get(BACKEND_URL + "/post/" + postId);
    }
    getPostUser(userId) {
    }
    addPost(title, content, image) {
        // const post: Post = { id: null, title: title, content: content };
        const postData = new FormData();
        postData.append("title", title);
        postData.append("content", content);
        postData.append("image", image, title);
        console.log(postData.get("image"));
        this.http
            .post(BACKEND_URL, postData)
            .subscribe((responseData) => {
            // const post: Post = {
            //   id: responseData.post.id,
            //   title: title,
            //   content: content,
            //   imagePath: responseData.post.imagePath,
            // };
            // // const id = responseData.postId;
            // // post.id = id;
            // this.posts.push(post);
            // this.postsUpdated.next([...this.posts]);
            this.router.navigate(["/"]);
        });
    }
    updatePost(id, title, content, image) {
        // const post: Post = { id: id, title: title, content: content, imagePath: null};
        let postData;
        if (typeof image === "object") {
            postData = new FormData();
            postData.append("id", id);
            postData.append("title", title);
            postData.append("content", content);
            postData.append("image", image, title);
        }
        else {
            postData = {
                id: id,
                title: title,
                content: content,
                imagePath: image,
                creator: null,
                dateCreated: null
            };
        }
        this.http
            .put(BACKEND_URL + id, postData)
            .subscribe((response) => {
            // const updatedPosts = [...this.posts];
            // const oldPostIndex = updatedPosts.findIndex((p) => p.id === id);
            // const post: Post =  {
            //   id: id,
            //   title: title,
            //   content: content,
            //   imagePath: ""
            // };
            // updatedPosts[oldPostIndex] = post;
            // this.posts = updatedPosts;
            // this.postsUpdated.next([...this.posts]);
            this.router.navigate(["/"]);
        });
    }
    deletePost(postId) {
        // console.log(localStorage.getItem("sekaikoData"));
        return this.http.delete(BACKEND_URL + postId);
    }
};
PostsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
PostsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
], PostsService);



/***/ }),

/***/ "gTyo":
/*!************************************************************!*\
  !*** ./src/app/Components/acc-home/acc-home.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\r\n====================================             Parallax Background Container\r\n*/\r\n/*\r\nyou can control the height and width of this container\r\nchanging values in this class may affect other containers within\r\n*/\r\n.parallax-container{\r\n    height: 300px;\r\n    z-index: 0;\r\n}\r\n/*\r\nparallax-container animation class\r\n*/\r\n.stretch{\r\n    -webkit-animation: stretch 0.3s cubic-bezier(0, 0.42, 0, 1.29);\r\n            animation: stretch 0.3s cubic-bezier(0, 0.42, 0, 1.29);\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n}\r\n/*\r\n------------------- the parallax element\r\n*/\r\n.parallax{\r\n    /* The image used */\r\n    /*https://www.hdwallpapers.in/walls/mr_robot_hd_4k_8k-HD.jpg*/\r\n    background-image:url('Flooded_Hangar.jpg');\r\n    \r\n    /* Create the parallax scrolling effect */\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\r\n}\r\n/*\r\n--------------------Div that holds the account name\r\n*/\r\n/*\r\nYou can control the height of the div\r\nas well as the position\r\n*/\r\n.acc-name-bg{\r\n    width: auto;\r\n    height: 40px;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    border-top-right-radius: 10px;\r\n}\r\n/*\r\ndisplays the account name\r\ncan edit the font type as well as the size\r\n*/\r\n.acc-name{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 800;\r\n    font-size: 28px;\r\n    text-transform: uppercase;\r\n    text-shadow:\r\n        -1px -1px 0 #2469BB,  \r\n        1px -1px 0 #2469BB,\r\n        -1px 1px 0 #2469BB,\r\n        1px 1px 0 #2469BB;\r\n}\r\n.acc-name .material-icons{\r\n    font-size: 40px;\r\n}\r\n.parallax .row{\r\n    padding: 0px;\r\n    margin: 0;\r\n}\r\n/*\r\n=============================           Main account container\r\n*/\r\n/*\r\n-------------------   contains all elements under the bg image\r\n*/\r\n/*\r\nseperate from the background image container for the users name\r\n*/\r\n.acc-body{\r\n    width: auto;\r\n    height: 40%;\r\n}\r\n.tab-links{\r\n    position: absolute;\r\n    right: 20px;\r\n    bottom: 0;\r\n    text-align: right;\r\n    display: flex;\r\n}\r\n.tab{\r\n    height: 100%;\r\n    background-color: #FFF;\r\n    padding: 6px 20px 0px 20px;\r\n    border-radius: 30% 10% 0% 0%;\r\n    display: inline-block;\r\n}\r\n.tab:hover{\r\n    -webkit-animation: pop 0.2s ease-in;\r\n            animation: pop 0.2s ease-in;\r\n    -webkit-animation-fill-mode: forwards;\r\n            animation-fill-mode: forwards;\r\n    cursor: pointer;\r\n}\r\n.tab.current{\r\n    background-color: #000;\r\n}\r\n.tab-content{\r\n    display: none;\r\n    padding: 15px;\r\n}\r\n.tab-content.current{\r\n    display: inherit;\r\n}\r\n/*\r\nlabel for sections on acc page\r\n*/\r\n.label{\r\n    font-size: 20px;\r\n    text-transform: uppercase;\r\n}\r\n.holder{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.acc-body .section{\r\n    max-width: 100%;\r\n    margin-top: 20px;\r\n    padding: 10px;\r\n}\r\n/*\r\n=========================================      Animations\r\n*/\r\n/*\r\n-------------------Pop effect tabs\r\n*/\r\n@-webkit-keyframes pop{\r\n      100%  {transform: scale(1.2); background-color: #000;}\r\n}\r\n@keyframes pop{\r\n      100%  {transform: scale(1.2); background-color: #000;}\r\n}\r\n/*\r\n-------------------Stretch effect parallax\r\n*/\r\n@-webkit-keyframes stretch{\r\n    100% {    \r\n        z-index: 10; \r\n        width: 100%; \r\n        height: 100%; \r\n        position: fixed;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n}\r\n@keyframes stretch{\r\n    100% {\r\n        z-index: 10;\r\n        width: 100%;\r\n        height: 100%;\r\n        position: fixed;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n}\r\n/*\r\n================================================ Screen size (1024px)\r\n*/\r\n@media only screen and (max-width: 1024px) {\r\n/*\r\n=============================           Main account container\r\n*/\r\n/*\r\n-------------------   contains all elements under the bg image\r\n*/\r\n/*\r\nseperate from the background image container for the users name\r\n*/\r\n    .acc-body{\r\n        height: 60%;\r\n    }\r\n\r\n    .holder{\r\n        width: 100%;\r\n        height: auto;\r\n        overflow-x: auto;\r\n        overflow-y: auto;\r\n    }\r\n/*\r\n    ====================================     recent activity container.\r\n*/\r\n/*\r\n---------------holds the recent activity messages\r\n*/\r\n}\r\n/*\r\n================================================ Screen size (768px)\r\n*/\r\n@media only screen and (max-width: 768px) {\r\n    \r\n    .tabs-mobile {\r\n        width: 100%;\r\n        padding: 0%;\r\n        display: flex;\r\n    }\r\n    .tabs-mobile .tab {\r\n        flex:auto;\r\n        text-align: center;\r\n        border-radius: 0;\r\n    }\r\n    .tabs-mobile .tab:hover{\r\n        background-color: #000;\r\n        -webkit-animation: none;\r\n                animation: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hY2MtaG9tZS9hY2MtaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDO0FBQ0Q7OztDQUdDO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsVUFBVTtBQUNkO0FBQ0E7O0NBRUM7QUFDRDtJQUNJLDhEQUFzRDtZQUF0RCxzREFBc0Q7SUFDdEQscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQztBQUNBOztDQUVDO0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsNkRBQTZEO0lBQzdELDBDQUEwRDs7SUFFMUQseUNBQXlDO0lBQ3pDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qix5QkFBaUI7T0FBakIsc0JBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQjtBQUVBOztDQUVDO0FBQ0Q7OztDQUdDO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsNkJBQTZCO0FBQ2pDO0FBQ0E7OztDQUdDO0FBQ0Q7SUFDSSxxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix5QkFBeUI7SUFDekI7Ozs7eUJBSXFCO0FBQ3pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osU0FBUztBQUNiO0FBR0E7O0NBRUM7QUFDRDs7Q0FFQztBQUNEOztDQUVDO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixxQ0FBNkI7WUFBN0IsNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBOztDQUVDO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCO0FBUUE7O0NBRUM7QUFDRDs7Q0FFQztBQUNEO01BQ00sT0FBTyxxQkFBcUIsRUFBRSxzQkFBc0IsQ0FBQztBQUMzRDtBQUNBO01BQ00sT0FBTyxxQkFBcUIsRUFBRSxzQkFBc0IsQ0FBQztBQUMzRDtBQUNBOztDQUVDO0FBQ0Q7SUFDSTtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGVBQWU7UUFDZixNQUFNO1FBQ04sT0FBTztJQUNYO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFdBQVc7UUFDWCxZQUFZO1FBQ1osZUFBZTtRQUNmLE1BQU07UUFDTixPQUFPO0lBQ1g7QUFDSjtBQUVBOztDQUVDO0FBQ0Q7QUFDQTs7Q0FFQztBQUNEOztDQUVDO0FBQ0Q7O0NBRUM7SUFDRztRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtBQUNKOztDQUVDO0FBQ0Q7O0NBRUM7QUFDRDtBQUVBOztDQUVDO0FBQ0Q7O0lBRUk7UUFDSSxXQUFXO1FBQ1gsV0FBVztRQUNYLGFBQWE7SUFDakI7SUFDQTtRQUNJLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsdUJBQWU7Z0JBQWYsZUFBZTtRQUNmLGVBQWU7SUFDbkI7O0FBRUoiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2FjYy1ob21lL2FjYy1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgICAgICAgICAgUGFyYWxsYXggQmFja2dyb3VuZCBDb250YWluZXJcclxuKi9cclxuLypcclxueW91IGNhbiBjb250cm9sIHRoZSBoZWlnaHQgYW5kIHdpZHRoIG9mIHRoaXMgY29udGFpbmVyXHJcbmNoYW5naW5nIHZhbHVlcyBpbiB0aGlzIGNsYXNzIG1heSBhZmZlY3Qgb3RoZXIgY29udGFpbmVycyB3aXRoaW5cclxuKi9cclxuLnBhcmFsbGF4LWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcbi8qXHJcbnBhcmFsbGF4LWNvbnRhaW5lciBhbmltYXRpb24gY2xhc3NcclxuKi9cclxuLnN0cmV0Y2h7XHJcbiAgICBhbmltYXRpb246IHN0cmV0Y2ggMC4zcyBjdWJpYy1iZXppZXIoMCwgMC40MiwgMCwgMS4yOSk7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxufVxyXG4vKlxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBwYXJhbGxheCBlbGVtZW50XHJcbiovXHJcbi5wYXJhbGxheHtcclxuICAgIC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICAvKmh0dHBzOi8vd3d3Lmhkd2FsbHBhcGVycy5pbi93YWxscy9tcl9yb2JvdF9oZF80a184ay1IRC5qcGcqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uLy4uL2ltYWdlcy9GbG9vZGVkX0hhbmdhci5qcGcnKTtcclxuICAgIFxyXG4gICAgLyogQ3JlYXRlIHRoZSBwYXJhbGxheCBzY3JvbGxpbmcgZWZmZWN0ICovXHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLypcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS1EaXYgdGhhdCBob2xkcyB0aGUgYWNjb3VudCBuYW1lXHJcbiovXHJcbi8qXHJcbllvdSBjYW4gY29udHJvbCB0aGUgaGVpZ2h0IG9mIHRoZSBkaXZcclxuYXMgd2VsbCBhcyB0aGUgcG9zaXRpb25cclxuKi9cclxuLmFjYy1uYW1lLWJne1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcbi8qXHJcbmRpc3BsYXlzIHRoZSBhY2NvdW50IG5hbWVcclxuY2FuIGVkaXQgdGhlIGZvbnQgdHlwZSBhcyB3ZWxsIGFzIHRoZSBzaXplXHJcbiovXHJcbi5hY2MtbmFtZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtc2hhZG93OlxyXG4gICAgICAgIC0xcHggLTFweCAwICMyNDY5QkIsICBcclxuICAgICAgICAxcHggLTFweCAwICMyNDY5QkIsXHJcbiAgICAgICAgLTFweCAxcHggMCAjMjQ2OUJCLFxyXG4gICAgICAgIDFweCAxcHggMCAjMjQ2OUJCO1xyXG59XHJcbi5hY2MtbmFtZSAubWF0ZXJpYWwtaWNvbnN7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuLnBhcmFsbGF4IC5yb3d7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4vKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgICAgICAgICAgTWFpbiBhY2NvdW50IGNvbnRhaW5lclxyXG4qL1xyXG4vKlxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tICAgY29udGFpbnMgYWxsIGVsZW1lbnRzIHVuZGVyIHRoZSBiZyBpbWFnZVxyXG4qL1xyXG4vKlxyXG5zZXBlcmF0ZSBmcm9tIHRoZSBiYWNrZ3JvdW5kIGltYWdlIGNvbnRhaW5lciBmb3IgdGhlIHVzZXJzIG5hbWVcclxuKi9cclxuLmFjYy1ib2R5e1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxufVxyXG4udGFiLWxpbmtze1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnRhYntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBwYWRkaW5nOiA2cHggMjBweCAwcHggMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwJSAxMCUgMCUgMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnRhYjpob3ZlcntcclxuICAgIGFuaW1hdGlvbjogcG9wIDAuMnMgZWFzZS1pbjtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50YWIuY3VycmVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbn1cclxuLnRhYi1jb250ZW50e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLnRhYi1jb250ZW50LmN1cnJlbnR7XHJcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xyXG59XHJcbi8qXHJcbmxhYmVsIGZvciBzZWN0aW9ucyBvbiBhY2MgcGFnZVxyXG4qL1xyXG4ubGFiZWx7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5ob2xkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uYWNjLWJvZHkgLnNlY3Rpb257XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLypcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgICBBbmltYXRpb25zXHJcbiovXHJcbi8qXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS1Qb3AgZWZmZWN0IHRhYnNcclxuKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIHBvcHtcclxuICAgICAgMTAwJSAge3RyYW5zZm9ybTogc2NhbGUoMS4yKTsgYmFja2dyb3VuZC1jb2xvcjogIzAwMDt9XHJcbn1cclxuQGtleWZyYW1lcyBwb3B7XHJcbiAgICAgIDEwMCUgIHt0cmFuc2Zvcm06IHNjYWxlKDEuMik7IGJhY2tncm91bmQtY29sb3I6ICMwMDA7fVxyXG59XHJcbi8qXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS1TdHJldGNoIGVmZmVjdCBwYXJhbGxheFxyXG4qL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3RyZXRjaHtcclxuICAgIDEwMCUgeyAgICBcclxuICAgICAgICB6LWluZGV4OiAxMDsgXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgICAgIGhlaWdodDogMTAwJTsgXHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc3RyZXRjaHtcclxuICAgIDEwMCUge1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBTY3JlZW4gc2l6ZSAoMTAyNHB4KVxyXG4qL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4vKlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgICAgICAgICAgTWFpbiBhY2NvdW50IGNvbnRhaW5lclxyXG4qL1xyXG4vKlxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tICAgY29udGFpbnMgYWxsIGVsZW1lbnRzIHVuZGVyIHRoZSBiZyBpbWFnZVxyXG4qL1xyXG4vKlxyXG5zZXBlcmF0ZSBmcm9tIHRoZSBiYWNrZ3JvdW5kIGltYWdlIGNvbnRhaW5lciBmb3IgdGhlIHVzZXJzIG5hbWVcclxuKi9cclxuICAgIC5hY2MtYm9keXtcclxuICAgICAgICBoZWlnaHQ6IDYwJTtcclxuICAgIH1cclxuXHJcbiAgICAuaG9sZGVye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcbi8qXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICAgIHJlY2VudCBhY3Rpdml0eSBjb250YWluZXIuXHJcbiovXHJcbi8qXHJcbi0tLS0tLS0tLS0tLS0tLWhvbGRzIHRoZSByZWNlbnQgYWN0aXZpdHkgbWVzc2FnZXNcclxuKi9cclxufVxyXG5cclxuLypcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IFNjcmVlbiBzaXplICg3NjhweClcclxuKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgXHJcbiAgICAudGFicy1tb2JpbGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgICAudGFicy1tb2JpbGUgLnRhYiB7XHJcbiAgICAgICAgZmxleDphdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG4gICAgLnRhYnMtbW9iaWxlIC50YWI6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "ip4f":
/*!********************************************************************!*\
  !*** ./src/app/Components/art/art-filter/art-filter.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filter-section {\r\n    margin: 12px 0;\r\n  }\r\n  \r\n  .filter-margin {\r\n    margin: 0 12px;\r\n  }\r\n  \r\n  ul {\r\n    list-style-type: none;\r\n    margin-top: 4px;\r\n  }\r\n  \r\n  li {\r\n      padding: 2%;\r\n    display: inline-block;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hcnQvYXJ0LWZpbHRlci9hcnQtZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztFQUVBO01BQ0ksV0FBVztJQUNiLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvYXJ0L2FydC1maWx0ZXIvYXJ0LWZpbHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1zZWN0aW9uIHtcclxuICAgIG1hcmdpbjogMTJweCAwO1xyXG4gIH1cclxuICBcclxuICAuZmlsdGVyLW1hcmdpbiB7XHJcbiAgICBtYXJnaW46IDAgMTJweDtcclxuICB9XHJcbiAgXHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIH1cclxuXHJcbiAgbGkge1xyXG4gICAgICBwYWRkaW5nOiAyJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "kasn":
/*!********************************************************************!*\
  !*** ./src/app/Components/post/post-create/mime-type.validator.ts ***!
  \********************************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

const mimeType = (control) => {
    if (typeof (control.value) === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    const file = control.value;
    const fileReader = new FileReader();
    const frObs = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]((observer) => {
        fileReader.addEventListener("loadend", () => {
            const arr = new Uint8Array(fileReader.result).subarray(0, 4);
            let header = "";
            let isValid = false;
            for (let i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case "89504e47":
                    isValid = true;
                    break;
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                case "ffd8ffe3":
                case "ffd8ffe8":
                    isValid = true;
                    break;
                default:
                    isValid = false;
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeTypoe: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "kxXM":
/*!**************************************************!*\
  !*** ./src/app/Components/art/art.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*id's*/\r\n\r\n/*search bar editing*/\r\n\r\n#search{\r\n    border-color: #FFF;\r\n}\r\n\r\n.filter-label{\r\n    font-size: 15px;\r\n}\r\n\r\n/*Divider that divides content*/\r\n\r\n.divider{\r\n    margin: 2%;\r\n}\r\n\r\n/*Collapsible element editing*/\r\n\r\n.collapsible-header{\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n}\r\n\r\n.collapsible-body{\r\n    padding: 1.5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hcnQvYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTzs7QUFFUCxxQkFBcUI7O0FBQ3JCO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSwrQkFBK0I7O0FBQy9CO0lBQ0ksVUFBVTtBQUNkOztBQUVBLDhCQUE4Qjs7QUFDOUI7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvYXJ0L2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyppZCdzKi9cclxuXHJcbi8qc2VhcmNoIGJhciBlZGl0aW5nKi9cclxuI3NlYXJjaHtcclxuICAgIGJvcmRlci1jb2xvcjogI0ZGRjtcclxufVxyXG5cclxuXHJcbi5maWx0ZXItbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi8qRGl2aWRlciB0aGF0IGRpdmlkZXMgY29udGVudCovXHJcbi5kaXZpZGVye1xyXG4gICAgbWFyZ2luOiAyJTtcclxufVxyXG5cclxuLypDb2xsYXBzaWJsZSBlbGVtZW50IGVkaXRpbmcqL1xyXG4uY29sbGFwc2libGUtaGVhZGVye1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmNvbGxhcHNpYmxlLWJvZHl7XHJcbiAgICBwYWRkaW5nOiAxLjUlO1xyXG59Il19 */");

/***/ }),

/***/ "lE69":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/navbar/nav-bar.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<nav>\r\n  <div class=\"nav-wrapper\">\r\n    \r\n    <div fxHide fxShow.lt-md>\r\n      <button mat-icon-button (click)=\"onToggleSidenav()\">\r\n        <mat-icon>menu</mat-icon>\r\n      </button>\r\n    </div>  \r\n    <div fxFlex fxLayout fxLayoutAlign=\"start\" fxHide.lt-md>\r\n\r\n        <ul >\r\n          <li ><a  [routerLink]=\"['/']\" routerLinkActive=\"DBlack_BG\" [routerLinkActiveOptions]=\"{exact:true}\">Home</a></li>\r\n          <li ><a [routerLink]=\"['/art']\" routerLinkActive=\"DBlack_BG\"  >Art</a></li>\r\n          <li ><a  [routerLink]=\"['/forum']\" routerLinkActive=\"DBlack_BG\" *ngIf=\"isAuthenticated\" >Forums</a></li>\r\n          <li ><a  [routerLink]=\"['/support']\" routerLinkActive=\"DBlack_BG\" *ngIf=\"isAuthenticated\" >Contact</a></li>\r\n        </ul>\r\n        \r\n    </div>\r\n      <a class=\"brand-logo center\" [routerLink]=\"['/']\">Sekaiko</a>\r\n    \r\n    <div fxFlex fxLayout fxLayoutAlign=\"end\">\r\n        <!--login/user button-->\r\n        <app-user (isLoggingOut)=\"onLogout()\"></app-user>\r\n    </div>\r\n    \r\n  </div>\r\n</nav>\r\n\r\n");

/***/ }),

/***/ "oCwr":
/*!********************************************************!*\
  !*** ./src/app/Components/navbar/nav-bar.component.ts ***!
  \********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_bar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "lE69");
/* harmony import */ var _nav_bar_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar.component.css */ "DYWW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "U6Tf");





let NavbarComponent = class NavbarComponent {
    constructor(authService) {
        this.authService = authService;
        this.isAuthenticated = false;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.loggingOut = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.onToggleSidenav = () => {
            this.sidenavToggle.emit();
        };
    }
    ngOnInit() {
        if (localStorage.getItem("sekaikoData")) {
            this.authService.autoLogin();
        }
        this.userSub = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user; //same as !user ? false: true;
        });
    }
    ngAfterContentChecked() {
        //Called after every check of the component's or directive's content.
        //Add 'implements AfterContentChecked' to the class.
    }
    onLogout() {
        this.loggingOut.emit();
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
NavbarComponent.propDecorators = {
    sidenavToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    loggingOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_nav_bar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_bar_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavbarComponent);



/***/ }),

/***/ "oM9I":
/*!*************************************************!*\
  !*** ./src/app/Components/art/art.component.ts ***!
  \*************************************************/
/*! exports provided: ArtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtComponent", function() { return ArtComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_art_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./art.component.html */ "4ewf");
/* harmony import */ var _art_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./art.component.css */ "kxXM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ArtComponent = class ArtComponent {
    constructor() { }
    ngOnInit() {
    }
};
ArtComponent.ctorParameters = () => [];
ArtComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-art',
        template: _raw_loader_art_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_art_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ArtComponent);



/***/ }),

/***/ "oW2+":
/*!****************************************************!*\
  !*** ./src/app/Components/auth/auth.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\r\n  margin: auto;\r\n  width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n  width: auto;\r\n}\r\n\r\nmat-card{\r\n    width: 50%;\r\n    margin: auto;\r\n}\r\n\r\n.login {\r\n  height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hdXRoL2F1dGguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbm1hdC1jYXJke1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmxvZ2luIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "ok01":
/*!*******************************************************************!*\
  !*** ./src/app/Components/art/art-filter/art-filter.component.ts ***!
  \*******************************************************************/
/*! exports provided: ArtFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtFilterComponent", function() { return ArtFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_art_filter_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./art-filter.component.html */ "ZdNE");
/* harmony import */ var _art_filter_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./art-filter.component.css */ "ip4f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ArtFilterComponent = class ArtFilterComponent {
    constructor() {
        this.genres = {
            name: 'All',
            completed: false,
            color: 'primary',
            subtasks: [
                { name: 'Landscape', completed: false, color: 'primary' },
                { name: 'Digital Art', completed: false, color: 'primary' },
                { name: 'Painting', completed: false, color: 'primary' },
                { name: 'Sculpture', completed: false, color: 'primary' },
                { name: 'Abstract', completed: false, color: 'primary' },
                { name: 'Contemporary', completed: false, color: 'primary' },
            ]
        };
        this.allComplete = false;
    }
    updateAllComplete() {
        this.allComplete = this.genres.subtasks != null && this.genres.subtasks.every(t => t.completed);
    }
    someComplete() {
        if (this.genres.subtasks == null) {
            return false;
        }
        return this.genres.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
    }
    setAll(completed) {
        this.allComplete = completed;
        if (this.genres.subtasks == null) {
            return;
        }
        this.genres.subtasks.forEach(t => t.completed = completed);
    }
};
ArtFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-art-filter',
        template: _raw_loader_art_filter_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_art_filter_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ArtFilterComponent);



/***/ }),

/***/ "pX6M":
/*!******************************************************************!*\
  !*** ./src/app/Components/post/post-list/post-list.component.ts ***!
  \******************************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_post_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./post-list.component.html */ "1GCL");
/* harmony import */ var _post_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-list.component.css */ "yy1C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ "U6Tf");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../posts.service */ "gI4n");







let PostListComponent = class PostListComponent {
    constructor(postsService, authService, router) {
        this.postsService = postsService;
        this.authService = authService;
        this.router = router;
        // posts = [
        //   { title: "First Post", content: "This is the first post's content" },
        //   { title: "Second Post", content: "This is the second post's content" },
        //   { title: "Third Post", content: "This is the third post's content" }
        // ];
        this.neverAuth = false;
        this.posts = [];
        this.isLoading = false;
        this.totalPosts = 0;
        this.postsPerPage = 5;
        this.currentPage = 1;
        this.pageSizeOptions = [10, 15, 30];
        this.userIsAuthenticated = false;
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        this.tileRowHeight = innerWidth < 1100 ? 100 : 200;
        this.isLoading = true;
        this.authStatusSub = this.authService.user.subscribe((user) => {
            if (!user) {
                return;
            }
            this.userIsAuthenticated = !!user;
            this.userId = user.id;
        });
        if (this.router.url.includes("/acc-home")) {
            this.postsPerPage = 5;
            this.pageSizeOptions = [5];
            this.postsService.getCreatorPosts(this.userId, this.postsPerPage, this.currentPage);
            this.postsSub = this.postsService
                .getPostUpdateListener()
                .subscribe((postData) => {
                this.isLoading = false;
                this.totalPosts = postData.postCount;
                this.posts = postData.posts;
            });
        }
        else if (!this.router.url.includes("/acc-home")) {
            this.postsService.getPosts(this.postsPerPage, this.currentPage);
            this.postsSub = this.postsService
                .getPostUpdateListener()
                .subscribe((postData) => {
                this.isLoading = false;
                this.totalPosts = postData.postCount;
                this.posts = postData.posts;
            });
        }
    }
    onResize(event) {
        this.innerWidth = window.innerWidth;
        this.tileRowHeight = innerWidth < 1100 ? 100 : 200;
    }
    openPost(post) {
        console.log(post);
        this.router.navigate(['/post', post.id]);
    }
    onDelete(postId) {
        this.isLoading = true;
        this.postsService.deletePost(postId).subscribe(res => {
            if (this.router.url.includes("/acc-home")) {
                this.postsService.getCreatorPosts(this.userId, this.postsPerPage, this.currentPage);
            }
            else {
                this.postsService.getPosts(this.postsPerPage, this.currentPage);
            }
        }, () => {
            this.isLoading = false;
        });
    }
    ngOnDestroy() {
        if (this.userIsAuthenticated) {
            this.postsSub.unsubscribe();
            this.authStatusSub.unsubscribe();
        }
    }
    onChangedPage(pageData) {
        if (this.router.url.includes("/acc-home")) {
            this.isLoading = true;
            this.currentPage = pageData.pageIndex + 1;
            this.postsPerPage = pageData.pageSize;
            this.postsService.getCreatorPosts(this.userId, this.postsPerPage, this.currentPage);
        }
        else {
            this.isLoading = true;
            this.currentPage = pageData.pageIndex + 1;
            this.postsPerPage = pageData.pageSize;
            this.postsService.getPosts(this.postsPerPage, this.currentPage);
        }
    }
};
PostListComponent.ctorParameters = () => [
    { type: _posts_service__WEBPACK_IMPORTED_MODULE_6__["PostsService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
PostListComponent.propDecorators = {
    neverAuth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:resize', ['$event'],] }]
};
PostListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-post-list",
        template: _raw_loader_post_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PostListComponent);



/***/ }),

/***/ "rgN8":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/forum/forum.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--container that holds information between the nav and footer-->\r\n<div class=\"container\">\r\n<div id=\"main-threads\" class=\"thread\">\r\n    \r\n    <Label class=\"label LtBlue_Text\">Main Threads</Label>\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"col s12\">\r\n            <div class=\"collection\">\r\n                <a [routerLink]=\"['forum-thread']\" routerLinkActive=\"router-link-active\"  class=\"collection-item\">Alvin</a>\r\n                <a href=\"#\" class=\"collection-item\">Alvin</a>\r\n                <a href=\"#\" class=\"collection-item\">Alvin</a>\r\n                <a href=\"#\" class=\"collection-item\">Alvin</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"divider\"></div>\r\n\r\n<div id=\"user-threads\" class=\"thread\">\r\n    \r\n    <Label class=\"label LtBlue_Text\">User Threads</Label>\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"col s12\">\r\n            <div class=\"collection\">\r\n                <a href=\"#\" class=\"collection-item\">Alvin</a>\r\n                <a href=\"#\" class=\"collection-item\">Alvin</a>\r\n                <a href=\"#\" class=\"collection-item\">Alvin</a>\r\n                <a href=\"#\" class=\"collection-item\">Alvin</a>\r\n                <a href=\"#\" class=\"collection-item\">Alvin</a>\r\n                <a href=\"#\" class=\"collection-item\">Alvin</a>\r\n                <a href=\"#\" class=\"collection-item\">Alvin</a>\r\n                <a href=\"#\" class=\"collection-item\">Alvin</a>\r\n                <a href=\"#\" class=\"collection-item\">Alvin</a>\r\n                <a href=\"#\" class=\"collection-item\">Alvin</a>\r\n                <a href=\"#\" class=\"collection-item\">Alvin</a>\r\n                <a href=\"#\" class=\"collection-item\">Alvin</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"pagination center\">\r\n        <ul class=\"pagination\">\r\n            <li class=\"disabled\"><a href=\"#!\"><i class=\"material-icons\">chevron_left</i></a></li>\r\n            <li class=\"active\"><a href=\"#!\">1</a></li>\r\n            <li class=\"waves-effect\"><a href=\"#!\">2</a></li>\r\n            <li class=\"waves-effect\"><a href=\"#!\">3</a></li>\r\n            <li class=\"waves-effect\"><a href=\"#!\">4</a></li>\r\n            <li class=\"waves-effect\"><a href=\"#!\">5</a></li>\r\n            <li class=\"waves-effect\"><a href=\"#!\"><i class=\"material-icons\">chevron_right</i></a></li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n</div>\r\n");

/***/ }),

/***/ "rhD1":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");




































/**
 * NgModule that includes all Material modules.
*/
let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__["MatTreeModule"],
        ],
        exports: [
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__["MatStepperModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_31__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_35__["MatTreeModule"],
        ]
    })
], AngularMaterialModule);



/***/ }),

/***/ "s5TF":
/*!********************************************************************!*\
  !*** ./src/app/Components/forum-thread/forum-thread.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n.T_Container{\r\n    min-height: 200px;\r\n    padding: 10px 20px;\r\n}\r\n\r\nlabel.thread_title{\r\n    font-size: 28px;\r\n    font-weight: 600;\r\n}\r\n\r\nlabel.thread_status{\r\n    font-size:  15px;\r\n    font-family: 'Montserrat', monospace;\r\n}\r\n\r\n#status-check .material-icons{\r\n    font-size: 20px;\r\n}\r\n\r\n.T_Container > .row >  #Message{\r\n    font-size: 16px;\r\n}\r\n\r\n.threadNot {\r\n    width: 30%;\r\n    position: fixed;\r\n    right: 0;\r\n    top: 0;\r\n}\r\n\r\n@media only screen and (max-width: 1024px){\r\n    .wide-container{\r\n        margin-right: 0;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9mb3J1bS10aHJlYWQvZm9ydW0tdGhyZWFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixRQUFRO0lBQ1IsTUFBTTtBQUNWOztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2ZvcnVtLXRocmVhZC9mb3J1bS10aHJlYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLlRfQ29udGFpbmVye1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbn1cclxuXHJcbmxhYmVsLnRocmVhZF90aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbmxhYmVsLnRocmVhZF9zdGF0dXN7XHJcbiAgICBmb250LXNpemU6ICAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JywgbW9ub3NwYWNlO1xyXG59XHJcblxyXG4jc3RhdHVzLWNoZWNrIC5tYXRlcmlhbC1pY29uc3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLlRfQ29udGFpbmVyID4gLnJvdyA+ICAjTWVzc2FnZXtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnRocmVhZE5vdCB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcclxuICAgIC53aWRlLWNvbnRhaW5lcntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "u3yF":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"DBlack_BG\">   \r\n          <div class=\"search\">\r\n              <form>\r\n                <div class=\"input-field\">\r\n                  <label class=\"label-icon\" for=\"search\">\r\n                    <mat-icon>search</mat-icon>\r\n                  </label>\r\n                  <input id=\"search\" type=\"search\" required>\r\n                    <i class=\"material-icons\">X</i>\r\n                  </div>\r\n              </form>\r\n          </div> \r\n\r\n          <app-parallax></app-parallax>\r\n\r\n          <div class=\"center\">\r\n              <label class=\"sectionLabel LtBlue_Text\">Most Viewed This Week</label>\r\n        </div>\r\n        <div class=\" center\">\r\n          <label class=\"sectionLabel LtBlue_Text\">Recent Posts</label>\r\n          <app-post-list [neverAuth]=true></app-post-list>\r\n        </div>\r\n</div>");

/***/ }),

/***/ "ucff":
/*!**********************************************************!*\
  !*** ./src/app/Components/support/support.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image{\r\n    background: url(https://images7.alphacoders.com/671/thumb-1920-671281.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: bottom;\r\n    width: 100%;\r\n    height: 600px;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.formSelectionContainer{\r\n    width: 32%;\r\n    height: 100%;\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\n.formSelectionContainer .current{\r\n    background-color: #DC458A !important;\r\n    color: #FFF !important;\r\n}\r\n\r\n.contact-label{\r\n    font-size: 25px;\r\n}\r\n\r\n/*form container settings*/\r\n\r\n.form-container{\r\n    width: 60%;\r\n    margin: 1% auto;\r\n}\r\n\r\n/*form settings*/\r\n\r\n.form{\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 5px;\r\n}\r\n\r\n.formLegend{\r\n    font-size: 30px;\r\n    font-weight: 900;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.form label{\r\n    color: #FFF;\r\n}\r\n\r\n/*edit browser default class from select html element*/\r\n\r\nselect[class=\"browser-default\"]{\r\n    border: 0px none;\r\n    background-color: rgba(0,0,0,0);\r\n    color: white;\r\n    font-weight: 600;\r\n}\r\n\r\n/*option setting from dropdown*/\r\n\r\nselect[class=\"browser-default\"] option{\r\n    color: #548ACB;\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9zdXBwb3J0L3N1cHBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBFQUEwRTtJQUMxRSw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsYUFBYTtJQUNiLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsc0JBQXNCO0FBQzFCOztBQUdBO0lBQ0ksZUFBZTtBQUNuQjs7QUFHQSwwQkFBMEI7O0FBQzFCO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBQ0EsZ0JBQWdCOztBQUNoQjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0Esc0RBQXNEOztBQUN0RDtJQUNJLGdCQUFnQjtJQUNoQiwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFDQSwrQkFBK0I7O0FBQy9CO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvc3VwcG9ydC9zdXBwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pbWFnZXM3LmFscGhhY29kZXJzLmNvbS82NzEvdGh1bWItMTkyMC02NzEyODEuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmZvcm1TZWxlY3Rpb25Db250YWluZXJ7XHJcbiAgICB3aWR0aDogMzIlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb3JtU2VsZWN0aW9uQ29udGFpbmVyIC5jdXJyZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RDNDU4QSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5jb250YWN0LWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG5cclxuLypmb3JtIGNvbnRhaW5lciBzZXR0aW5ncyovXHJcbi5mb3JtLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBtYXJnaW46IDElIGF1dG87XHJcbn1cclxuLypmb3JtIHNldHRpbmdzKi9cclxuLmZvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uZm9ybUxlZ2VuZHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5mb3JtIGxhYmVse1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbn1cclxuLyplZGl0IGJyb3dzZXIgZGVmYXVsdCBjbGFzcyBmcm9tIHNlbGVjdCBodG1sIGVsZW1lbnQqL1xyXG5zZWxlY3RbY2xhc3M9XCJicm93c2VyLWRlZmF1bHRcIl17XHJcbiAgICBib3JkZXI6IDBweCBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLypvcHRpb24gc2V0dGluZyBmcm9tIGRyb3Bkb3duKi9cclxuc2VsZWN0W2NsYXNzPVwiYnJvd3Nlci1kZWZhdWx0XCJdIG9wdGlvbntcclxuICAgIGNvbG9yOiAjNTQ4QUNCO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/home/home.component */ "0zBU");
/* harmony import */ var _Components_art_art_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/art/art.component */ "oM9I");
/* harmony import */ var _Components_forum_forum_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/forum/forum.component */ "6VaG");
/* harmony import */ var _Components_support_support_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/support/support.component */ "655v");
/* harmony import */ var _Components_forum_thread_forum_thread_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/forum-thread/forum-thread.component */ "NLVf");
/* harmony import */ var _Components_acc_home_acc_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/acc-home/acc-home.component */ "Ypg5");
/* harmony import */ var _Components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/auth/auth.guard */ "dFvp");
/* harmony import */ var _Components_auth_auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/auth/auth.component */ "MZQa");
/* harmony import */ var _Components_post_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/post/post-create/post-create.component */ "QEwN");
/* harmony import */ var _Components_post_post_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/post/post.component */ "DTYH");













const route = [
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'home', component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'art', component: _Components_art_art_component__WEBPACK_IMPORTED_MODULE_4__["ArtComponent"] },
    { path: 'auth', component: _Components_auth_auth_component__WEBPACK_IMPORTED_MODULE_10__["AuthComponent"] },
    { path: 'post/:id', component: _Components_post_post_component__WEBPACK_IMPORTED_MODULE_12__["PostComponent"] },
    { path: 'forum', component: _Components_forum_forum_component__WEBPACK_IMPORTED_MODULE_5__["ForumComponent"], canActivate: [_Components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], children: [
            { path: ':forumId', component: _Components_forum_thread_forum_thread_component__WEBPACK_IMPORTED_MODULE_7__["ForumthreadComponent"] }
        ] },
    { path: 'support', component: _Components_support_support_component__WEBPACK_IMPORTED_MODULE_6__["SupportComponent"], canActivate: [_Components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'acc-home', children: [
            { path: ':id/:username', component: _Components_acc_home_acc_home_component__WEBPACK_IMPORTED_MODULE_8__["AccHomeComponent"], canActivate: [_Components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
            { path: ':id/:username/create', component: _Components_post_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_11__["PostCreateComponent"], canActivate: [_Components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] }
        ] },
    { path: '**', redirectTo: '/home', pathMatch: "full" }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(route)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_Components_auth_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "wj5b":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/parallax/parallax.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--parallax-->\r\n<div class=\"parallax\">\r\n<!--transparent film over parallax-->\r\n    <div class=\"overLap\">\r\n        <!--Sign up button-->\r\n        <a class=\"btn LPink_Text White_BG waves-effect waves-light modal-trigger pulse\" *ngIf=\"!isAuthenticated\" [routerLink]=\"['/auth']\">Sign Up</a>\r\n    </div>\r\n</div>    ");

/***/ }),

/***/ "yy1C":
/*!*******************************************************************!*\
  !*** ./src/app/Components/post/post-list/post-list.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nmat-paginator{\r\n    margin-top: 1rem;\r\n}\r\n\r\nmat-action-row {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    background-color: black;\r\n    height: 10%;\r\n}\r\n\r\n:host {\r\n    display: block;\r\n    margin-top: 1rem;\r\n}\r\n\r\n.info-text {\r\n    text-align: center;\r\n}\r\n\r\n.img{\r\n    max-height: 100%;\r\n}\r\n\r\nmat-grid-list {\r\n    width: 90%;\r\n    margin: 0 auto;\r\n    padding: 0px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9wb3N0L3Bvc3QtbGlzdC9wb3N0LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcG9zdC9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubWF0LXBhZ2luYXRvcntcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbm1hdC1hY3Rpb24tcm93IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcblxyXG4uaW5mby10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmltZ3tcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1ncmlkLWxpc3Qge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map