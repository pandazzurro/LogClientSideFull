/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ApplicationInsightComponent } from './application-insight.component';
describe('ApplicationInsightComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ApplicationInsightComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ApplicationInsightComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/app/application-insight/application-insight.component.spec.js.map