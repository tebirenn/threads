import { Component, Inject, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-new-branch',
  templateUrl: './new-branch.component.html',
  styleUrls: ['./new-branch.component.css']
})
export class NewBranchComponent implements AfterViewInit {

  modal: any;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit() {
    this.modal = this.document.getElementById('branchModal');
  }

  closeBranchModal(event: Event) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('branch-wrapper')) {
      const wrapper = this.modal.querySelector('#branch-wrapper');
      wrapper.classList.add('branch-closed');
    }
  }
}
