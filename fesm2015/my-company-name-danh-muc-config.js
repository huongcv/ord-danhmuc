import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RoutesService } from '@abp/ng.core';

const MY_PROJECT_NAME_ROUTE_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureRoutes,
        deps: [RoutesService],
        multi: true,
    },
];
function configureRoutes(routes) {
    return () => {
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

class DanhMucConfigModule {
    static forRoot() {
        return {
            ngModule: DanhMucConfigModule,
            providers: [MY_PROJECT_NAME_ROUTE_PROVIDERS],
        };
    }
}
DanhMucConfigModule.decorators = [
    { type: NgModule }
];

/**
 * Generated bundle index. Do not edit.
 */

export { DanhMucConfigModule, MY_PROJECT_NAME_ROUTE_PROVIDERS, configureRoutes, MY_PROJECT_NAME_ROUTE_PROVIDERS as ɵa, configureRoutes as ɵb };
//# sourceMappingURL=my-company-name-danh-muc-config.js.map
