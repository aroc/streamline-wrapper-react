import {AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChildren} from '@angular/core';

@Component({
  selector: 'streamline-icon',
  templateUrl: 'streamline-icon.component.html',
  styleUrls: ['streamline-icon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreamlineIconComponent implements AfterViewInit {

  @ViewChildren('pathElement') pathEl;

  @Input() public icon;

  @Input() public fill: string;

  @Input() public stroke: string;

  @Input() public size = 24;

  @Input() public width = 24;

  @Input() public height = 24;

  @Input() public spin: boolean;

  @Input() public pulse: boolean;

  @Input() public infinite: boolean;

  @Input() public fast: boolean;

  @Input() public easeInOut: boolean;

  private WIDTH_IDX = 1;
  private HEIGHT_IDX = 2;

  constructor() {

  }

  ngAfterViewInit(): void {
    this.pathEl.forEach((el, idx) => {
      const tempIcon = this.icon[3];

      const tempOptions = {
        ...tempIcon[idx],
        stroke: this.stroke || tempIcon[idx].stroke,
        fill: this.fill || tempIcon[idx].fill
      };

      for (const [key, value] of Object.entries(tempOptions)) {
        el.nativeElement.setAttribute(key, value);
      }

    });
  }

  get classes() {
    return {
      Streamline_Icon_Spin: this.spin,
      Streamline_Icon_Pulse: this.pulse,
      Streamline_Animation_Infinite: this.infinite,
      Streamline_Icon_Fast: this.fast,
      Streamline_Icon_EaseInOut: this.easeInOut,
      Streamline_Icon_Animated: this.spin || this.pulse
    };
  }

  get sizeObject() {

    const sizeObject = {
      width: this.icon[this.WIDTH_IDX],
      height: this.icon[this.HEIGHT_IDX],
      isDefault: true
    };
    if (this.size !== 24) {
      sizeObject.isDefault = (this.size === sizeObject.width);
      sizeObject.height = this.size;
      sizeObject.width = this.size;
    } else {
      if (this.height !== sizeObject.height) {
        sizeObject.height = this.height;
        sizeObject.isDefault = false;
      }

      if (this.width !== sizeObject.width) {
        sizeObject.width = this.width;
        sizeObject.isDefault = false;
      }
    }
    return sizeObject;
  }

  get viewBox(): string {
    return `0 0 ${this.sizeObject.width} ${this.sizeObject.height}`;
  }

  get style(): string {
    return `width: ${this.sizeObject.width}; height: ${this.sizeObject.height}`;
  }

  get transform() {
    return `scale(${this.sizeObject.width / this.icon[this.WIDTH_IDX]},${this.sizeObject.height / this.icon[this.HEIGHT_IDX]})`;
  }


}
