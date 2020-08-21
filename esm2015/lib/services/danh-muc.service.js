import { Injectable } from '@angular/core';
import { RestService } from '@abp/ng.core';
import * as i0 from "@angular/core";
import * as i1 from "@abp/ng.core";
export class DanhMucService {
    constructor(restService) {
        this.restService = restService;
        this.apiName = 'DanhMuc';
    }
    sample() {
        return this.restService.request({ method: 'GET', url: '/api/DanhMuc/sample' }, { apiName: this.apiName });
    }
}
DanhMucService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DanhMucService_Factory() { return new DanhMucService(i0.ɵɵinject(i1.RestService)); }, token: DanhMucService, providedIn: "root" });
DanhMucService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
DanhMucService.ctorParameters = () => [
    { type: RestService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFuaC1tdWMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2RhbmgtbXVjL3NyYy9saWIvc2VydmljZXMvZGFuaC1tdWMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQUszQyxNQUFNLE9BQU8sY0FBYztJQUd6QixZQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUY1QyxZQUFPLEdBQUcsU0FBUyxDQUFDO0lBRTJCLENBQUM7SUFFaEQsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQzdCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUscUJBQXFCLEVBQUUsRUFDN0MsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUMxQixDQUFDO0lBQ0osQ0FBQzs7OztZQWJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBSlEsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc3RTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIERhbmhNdWNTZXJ2aWNlIHtcbiAgYXBpTmFtZSA9ICdEYW5oTXVjJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc3RTZXJ2aWNlOiBSZXN0U2VydmljZSkge31cblxuICBzYW1wbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdFNlcnZpY2UucmVxdWVzdDx2b2lkLCBhbnk+KFxuICAgICAgeyBtZXRob2Q6ICdHRVQnLCB1cmw6ICcvYXBpL0RhbmhNdWMvc2FtcGxlJyB9LFxuICAgICAgeyBhcGlOYW1lOiB0aGlzLmFwaU5hbWUgfVxuICAgICk7XG4gIH1cbn1cbiJdfQ==