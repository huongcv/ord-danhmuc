(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core')) :
    typeof define === 'function' && define.amd ? define('@my-company-name/danh-muc/config', ['exports', '@angular/core', '@abp/ng.core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['my-company-name'] = global['my-company-name'] || {}, global['my-company-name']['danh-muc'] = global['my-company-name']['danh-muc'] || {}, global['my-company-name']['danh-muc'].config = {}), global.ng.core, global.ng_core));
}(this, (function (exports, core, ng_core) { 'use strict';

    var MY_PROJECT_NAME_ROUTE_PROVIDERS = [
        {
            provide: core.APP_INITIALIZER,
            useFactory: configureRoutes,
            deps: [ng_core.RoutesService],
            multi: true,
        },
    ];
    function configureRoutes(routes) {
        return function () {
            routes.add([
                {
                    path: '/danh-muc',
                    name: "DanhMuc" /* DanhMuc */,
                    iconClass: 'fas fa-book',
                    layout: "application" /* application */,
                    order: 3,
                },
            ]);
        };
    }

    var DanhMucConfigModule = /** @class */ (function () {
        function DanhMucConfigModule() {
        }
        DanhMucConfigModule.forRoot = function () {
            return {
                ngModule: DanhMucConfigModule,
                providers: [MY_PROJECT_NAME_ROUTE_PROVIDERS],
            };
        };
        return DanhMucConfigModule;
    }());
    DanhMucConfigModule.decorators = [
        { type: core.NgModule }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DanhMucConfigModule = DanhMucConfigModule;
    exports.MY_PROJECT_NAME_ROUTE_PROVIDERS = MY_PROJECT_NAME_ROUTE_PROVIDERS;
    exports.configureRoutes = configureRoutes;
    exports.ɵa = MY_PROJECT_NAME_ROUTE_PROVIDERS;
    exports.ɵb = configureRoutes;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-company-name-danh-muc-config.umd.js.map
