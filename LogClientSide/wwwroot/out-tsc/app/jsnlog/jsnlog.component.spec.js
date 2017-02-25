/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { JSNlogComponent } from './jsnlog.component';
describe('JSNlogComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [JSNlogComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(JSNlogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/app/jsnlog/jsnlog.component.spec.js.map