import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StreamlineIconComponent} from './streamline-icon.component';
import {CommonModule} from '@angular/common';


describe('StreamlineIconComponent', () => {
  let component: StreamlineIconComponent;
  let fixture: ComponentFixture<StreamlineIconComponent>;

  const icon = ['clean-car-leaf',
    24,
    24,
    [{fill: 'none', stroke: '#000', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5'}, {
      fill: 'none',
      stroke: '#000',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '1.5'
    }, {fill: 'none', stroke: '#000', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5'}, {
      fill: 'none',
      stroke: '#000',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '1.5'
    }, {fill: 'none', stroke: '#000', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5'}, {
      fill: 'none',
      stroke: '#000',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '1.5'
    }, {fill: 'none', stroke: '#000', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5'}],
    ['M14.579,20.771s1.219,2.494,3.27,2.307c4.158-.38,3.88-5.907,5.4-7.859a9.105,9.105,0,0,0-8.265.075C12.83,16.511,12.677,18.565,14.579,20.771Z', 'M17.52,18.236s-2.7.334-4.623,5.03', 'M20.25,11.267V9.638a1.5,1.5,0,0,0-.439-1.061L18,6.767H3L1.189,8.577A1.5,1.5,0,0,0,.75,9.638v3.129a1.5,1.5,0,0,0,1.5,1.5h9', 'M18,6.767H3L4.158,1.792A1.5,1.5,0,0,1,5.581.767h9.838a1.5,1.5,0,0,1,1.423,1.025Z', 'M3.75 9.767L5.25 9.767', 'M15.75 9.767L17.25 9.767', 'M5.25,15.767a1.5,1.5,0,0,1-3,0v-1.5h3Z']];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [StreamlineIconComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamlineIconComponent);
    component = fixture.componentInstance;
    component.easeInOut = false;
    component.fast = false;
    component.fill = null;
    component.height = 36;
    component.width = 36;
    component.infinite = false;
    component.icon = icon;
    component.pulse = false;
    component.stroke = '#e30000';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain span container', () => {
    const spanElement: HTMLElement = fixture.nativeElement;
    expect(spanElement.childElementCount).toBe(1);
    expect(spanElement.children[0].tagName).toBe('SPAN');
  });

  it('should have the correct size', () => {
    const spanElement: HTMLElement = fixture.nativeElement;
    const svgElement = spanElement.children[0].children[0];
    expect(svgElement.tagName).toBe('svg');
    expect(svgElement.getAttribute('viewBox')).toBe('0 0 36 36');
  });

  it('should draw a g element with 7 paths', () => {
    const spanElement: HTMLElement = fixture.nativeElement;
    const gElement = spanElement.children[0].children[0].children[0];
    expect(gElement.tagName).toBe('g');
    expect(gElement.childElementCount).toBe(7);
  });


  it('should have the correct d value on the first path', () => {
    const spanElement: HTMLElement = fixture.nativeElement;
    const path = spanElement.children[0].children[0].children[0].children[0];
    expect(path.tagName).toBe('path');
    expect(path.getAttribute('d')).toBe(icon[4][0]);
  });

  it('should have the correct color', () => {
    const changedStroke = '#e30000';
    const spanElement: HTMLElement = fixture.nativeElement;
    const path = spanElement.children[0].children[0].children[0].children[0];
    expect(path.tagName).toBe('path');
    expect(path.getAttribute('stroke')).toBe(changedStroke);
  });


});
