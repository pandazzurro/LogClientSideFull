/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { HttpSpinnerComponent } from './http-spinner.component';
describe('HttpSpinnerComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [HttpSpinnerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(HttpSpinnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/app/http-spinner/http-spinner.component.spec.js.map