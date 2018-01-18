import {TestBed, ComponentFixture} from '@angular/core/testing';
import {HoverFocusDirective} from './hoverfocus.directive';
import {Component, DebugElement} from '@angular/core';
import {By} from "@angular/platform-browser";


@Component({
    template: `<input type="text" hoverfocus>`
})
class TestHoverFocusComponent{

}

describe('Directive: HoverFocus', () => {
    let component: TestHoverFocusComponent;
    let fixture: ComponentFixture<TestHoverFocusComponent>
    let inputEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestHoverFocusComponent,HoverFocusDirective]
        });
        fixture = TestBed.createComponent(TestHoverFocusComponent);
        component = fixture.componentInstance;
        inputEl = fixture.debugElement.query(By.css('input'));
    });

    it('hovering over input', () => {
        inputEl.triggerEventHandler('mouseover', null);
        fixture.detectChanges();
        expect(inputEl.nativeElement.style.backgroundColor).toBe('blue');

        inputEl.triggerEventHandler('mouseout',null);
        fixture.detectChanges();
        console.log(inputEl.nativeElement.style.backgroundColor);
        expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
    });
});

