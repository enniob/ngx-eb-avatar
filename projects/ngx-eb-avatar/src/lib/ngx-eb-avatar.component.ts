import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-eb-avatar',
  template: `
    <div>
      <img [src]="imgUrl" [alt]="name">
    </div>
  `,
  styles: []
})
export class NgxEbAvatarComponent implements OnInit {
  @Input() name: string;
  @Input() shadow: boolean;
  @Input() width: number;
  @Input() height: number;
  @Input() bgColor: string;
  @Input() fontColor: string;

  imgUrl: string = "";
  
  private initials: string ="";

  constructor() { }

  ngOnInit() {
    this.initials= this.getInitials(this.name);

    this.imgUrl = this.makeAvatar(this.initials, this.width, this.height, this.bgColor, this.fontColor, this.shadow);
  }

  private getInitials(fullName: string): string {
    let returnData: string = '';
    const strObj: string[] = fullName.split(" ");

    strObj.forEach(str => {
      returnData += str.charAt(0);
    });

    return returnData;
  }

  private makeAvatar(name: string, width: number, height: number, bgColor: string, fontColor: string, dispShadow: boolean): string {
    let canvas = document.createElement("canvas");
    canvas.id = "avatar" + Date.now();
    canvas.width = width;
    canvas.height = height;

    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "#" + bgColor;
    ctx.fillRect(0, 0, width, height);

    const fontSize = width / (2 / (100 / 100));
    ctx.font = fontSize + "px Arial";

    if (dispShadow) {
      ctx.shadowColor = "black";
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlur = 5;
    }

    ctx.textAlign = "center";
    ctx.fillStyle = "#" + fontColor;
    ctx.fillText(name, width / 2, height - (height / 2) + (fontSize / 3));

    return canvas.toDataURL("image/png");
  }
}
