import { RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
export const MY_PROJECT_NAME_ROUTE_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureRoutes,
        deps: [RoutesService],
        multi: true,
    },
];
export function configureRoutes(routes) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUucHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kYW5oLW11Yy9jb25maWcvc3JjL3Byb3ZpZGVycy9yb3V0ZS5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWUsYUFBYSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHaEQsTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQUc7SUFDN0M7UUFDRSxPQUFPLEVBQUUsZUFBZTtRQUN4QixVQUFVLEVBQUUsZUFBZTtRQUMzQixJQUFJLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDckIsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGLENBQUM7QUFFRixNQUFNLFVBQVUsZUFBZSxDQUFDLE1BQXFCO0lBQ25ELE9BQU8sR0FBRyxFQUFFO1FBQ1YsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUNUO2dCQUNFLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLHlCQUE0QjtnQkFDaEMsU0FBUyxFQUFFLGFBQWE7Z0JBQ3hCLE1BQU0saUNBQXlCO2dCQUMvQixLQUFLLEVBQUUsQ0FBQzthQUNUO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVMYXlvdXRUeXBlLCBSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZURhbmhNdWNSb3V0ZU5hbWVzIH0gZnJvbSAnLi4vZW51bXMvcm91dGUtbmFtZXMnO1xuXG5leHBvcnQgY29uc3QgTVlfUFJPSkVDVF9OQU1FX1JPVVRFX1BST1ZJREVSUyA9IFtcbiAge1xuICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICB1c2VGYWN0b3J5OiBjb25maWd1cmVSb3V0ZXMsXG4gICAgZGVwczogW1JvdXRlc1NlcnZpY2VdLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZVJvdXRlcyhyb3V0ZXM6IFJvdXRlc1NlcnZpY2UpIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICByb3V0ZXMuYWRkKFtcbiAgICAgIHtcbiAgICAgICAgcGF0aDogJy9kYW5oLW11YycsXG4gICAgICAgIG5hbWU6IGVEYW5oTXVjUm91dGVOYW1lcy5EYW5oTXVjLFxuICAgICAgICBpY29uQ2xhc3M6ICdmYXMgZmEtYm9vaycsXG4gICAgICAgIGxheW91dDogZUxheW91dFR5cGUuYXBwbGljYXRpb24sXG4gICAgICAgIG9yZGVyOiAzLFxuICAgICAgfSxcbiAgICBdKTtcbiAgfTtcbn1cbiJdfQ==