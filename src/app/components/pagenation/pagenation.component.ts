import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagenation',
  templateUrl: './pagenation.component.html',
  styleUrls: ['./pagenation.component.scss']
})
export class PagenationComponent implements OnChanges {

  @Input() currentPage: number;
  @Input() maxPage: number;
  pageList: Array<number>;

  constructor() { }

  ngOnChanges(): void {
    if (this.maxPage) {
      this.pagenate();
    }
  }

  pagenate() {
    const maxPageCount = this.maxPage + 1;
    this.pageList = new Array(maxPageCount);
    for (let i = 0; i < maxPageCount; i++) {
      this.pageList[i] = i;
    }

  }
}
