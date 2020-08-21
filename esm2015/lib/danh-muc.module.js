import { NgModule } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { DanhMucComponent } from './components/danh-muc.component';
import { DanhMucRoutingModule } from './danh-muc-routing.module';
export class DanhMucModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFuaC1tdWMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZGFuaC1tdWMvc3JjL2xpYi9kYW5oLW11Yy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBd0MsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU9qRSxNQUFNLE9BQU8sYUFBYTtJQUN4QixNQUFNLENBQUMsUUFBUTtRQUNiLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPLElBQUksaUJBQWlCLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBZkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUNoQyxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLENBQUM7Z0JBQzlELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5nTW9kdWxlRmFjdG9yeSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZU1vZHVsZSwgTGF6eU1vZHVsZUZhY3RvcnkgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xuaW1wb3J0IHsgVGhlbWVTaGFyZWRNb2R1bGUgfSBmcm9tICdAYWJwL25nLnRoZW1lLnNoYXJlZCc7XG5pbXBvcnQgeyBEYW5oTXVjQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2RhbmgtbXVjLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYW5oTXVjUm91dGluZ01vZHVsZSB9IGZyb20gJy4vZGFuaC1tdWMtcm91dGluZy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtEYW5oTXVjQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW0NvcmVNb2R1bGUsIFRoZW1lU2hhcmVkTW9kdWxlLCBEYW5oTXVjUm91dGluZ01vZHVsZV0sXG4gIGV4cG9ydHM6IFtEYW5oTXVjQ29tcG9uZW50XSxcbn0pXG5leHBvcnQgY2xhc3MgRGFuaE11Y01vZHVsZSB7XG4gIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPERhbmhNdWNNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IERhbmhNdWNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yTGF6eSgpOiBOZ01vZHVsZUZhY3Rvcnk8RGFuaE11Y01vZHVsZT4ge1xuICAgIHJldHVybiBuZXcgTGF6eU1vZHVsZUZhY3RvcnkoRGFuaE11Y01vZHVsZS5mb3JDaGlsZCgpKTtcbiAgfVxufVxuIl19