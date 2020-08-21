(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core'), require('@abp/ng.theme.shared'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@my-company-name/danh-muc', ['exports', '@angular/core', '@abp/ng.core', '@abp/ng.theme.shared', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['my-company-name'] = global['my-company-name'] || {}, global['my-company-name']['danh-muc'] = {}), global.ng.core, global.i1, global.ng_theme_shared, global.ng.router));
}(this, (function (exports, i0, i1, ng_theme_shared, router) { 'use strict';

    var DanhMucService = /** @class */ (function () {
        function DanhMucService(restService) {
            this.restService = restService;
            this.apiName = 'DanhMuc';
        }
        DanhMucService.prototype.sample = function () {
            return this.restService.request({ method: 'GET', url: '/api/DanhMuc/sample' }, { apiName: this.apiName });
        };
        return DanhMucService;
    }());
    DanhMucService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DanhMucService_Factory() { return new DanhMucService(i0.ɵɵinject(i1.RestService)); }, token: DanhMucService, providedIn: "root" });
    DanhMucService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    DanhMucService.ctorParameters = function () { return [
        { type: i1.RestService }
    ]; };

    var DanhMucComponent = /** @class */ (function () {
        function DanhMucComponent(service) {
            this.service = service;
        }
        DanhMucComponent.prototype.ngOnInit = function () {
            this.service.sample().subscribe(console.log);
        };
        return DanhMucComponent;
    }());
    DanhMucComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-danh-muc',
                    template: " <p>danh-muc works!</p> "
                },] }
    ];
    DanhMucComponent.ctorParameters = function () { return [
        { type: DanhMucService }
    ]; };

    var routes = [
        {
            path: '',
            pathMatch: 'full',
            component: i1.DynamicLayoutComponent,
            children: [{ path: '', component: DanhMucComponent }],
        },
    ];
    var DanhMucRoutingModule = /** @class */ (function () {
        function DanhMucRoutingModule() {
        }
        return DanhMucRoutingModule;
    }());
    DanhMucRoutingModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [router.RouterModule.forChild(routes)],
                    exports: [router.RouterModule],
                },] }
    ];

    var DanhMucModule = /** @class */ (function () {
        function DanhMucModule() {
        }
        DanhMucModule.forChild = function () {
            return {
                ngModule: DanhMucModule,
                providers: [],
            };
        };
        DanhMucModule.forLazy = function () {
            return new i1.LazyModuleFactory(DanhMucModule.forChild());
        };
        return DanhMucModule;
    }());
    DanhMucModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [DanhMucComponent],
                    imports: [i1.CoreModule, ng_theme_shared.ThemeSharedModule, DanhMucRoutingModule],
                    exports: [DanhMucComponent],
                },] }
    ];

    /*
     * Public API Surface of danh-muc
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DanhMucComponent = DanhMucComponent;
    exports.DanhMucModule = DanhMucModule;
    exports.DanhMucService = DanhMucService;
    exports.ɵa = DanhMucRoutingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-company-name-danh-muc.umd.js.map
