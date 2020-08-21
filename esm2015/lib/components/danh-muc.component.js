import { Component } from '@angular/core';
import { DanhMucService } from '../services/danh-muc.service';
export class DanhMucComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFuaC1tdWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZGFuaC1tdWMvc3JjL2xpYi9jb21wb25lbnRzL2RhbmgtbXVjLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQU85RCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLFlBQW9CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO0lBQUcsQ0FBQztJQUUvQyxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7OztZQVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLDBCQUEwQjthQUVyQzs7O1lBTlEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYW5oTXVjU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2RhbmgtbXVjLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZGFuaC1tdWMnLFxuICB0ZW1wbGF0ZTogYCA8cD5kYW5oLW11YyB3b3JrcyE8L3A+IGAsXG4gIHN0eWxlczogW10sXG59KVxuZXhwb3J0IGNsYXNzIERhbmhNdWNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IERhbmhNdWNTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2VydmljZS5zYW1wbGUoKS5zdWJzY3JpYmUoY29uc29sZS5sb2cpO1xuICB9XG59XG4iXX0=