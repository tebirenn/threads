import { Component, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {
  modal: any;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit() {
    this.modal = this.document.getElementById('branchModal');
  }

  openBranchModal() {
    if (this.modal) {
      const wrapper = this.modal.querySelector('#branch-wrapper');
      // wrapper.style.opacity = '1';
      // wrapper.style.zIndex = '150';
      wrapper.classList.remove('branch-closed');
    }
  }
}
