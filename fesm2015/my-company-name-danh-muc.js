import { ɵɵdefineInjectable, ɵɵinject, Injectable, Component, NgModule } from '@angular/core';
import { RestService, DynamicLayoutComponent, LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { RouterModule } from '@angular/router';

class DanhMucService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'DanhMuc';
    }
    sample() {
        return this.restService.request({ method: 'GET', url: '/api/DanhMuc/sample' }, { apiName: this.apiName });
    }
}
DanhMucService.ɵprov = ɵɵdefineInjectable({ factory: function DanhMucService_Factory() { return new DanhMucService(ɵɵinject(RestService)); }, token: DanhMucService, providedIn: "root" });
DanhMucService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
DanhMucService.ctorParameters = () => [
    { type: RestService }
];

class DanhMucComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.sample().subscribe(console.log);
    }
}
DanhMucComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-danh-muc',
                template: ` <p>danh-muc works!</p> `
            },] }
];
DanhMucComponent.ctorParameters = () => [
    { type: DanhMucService }
];

const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: DynamicLayoutComponent,
        children: [{ path: '', component: DanhMucComponent }],
    },
];
class DanhMucRoutingModule {
}
DanhMucRoutingModule.decorators = [
    { type: NgModule, args: [{
                imports: [RouterModule.forChild(routes)],
                exports: [RouterModule],
            },] }
];

class DanhMucModule {
    static forChild() {
        return {
            ngModule: DanhMucModule,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(DanhMucModule.forChild());
    }
}
DanhMucModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DanhMucComponent],
                imports: [CoreModule, ThemeSharedModule, DanhMucRoutingModule],
                exports: [DanhMucComponent],
            },] }
];

/*
 * Public API Surface of danh-muc
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DanhMucComponent, DanhMucModule, DanhMucService, DanhMucRoutingModule as ɵa };
//# sourceMappingURL=my-company-name-danh-muc.js.map
