import { Component } from '@angular/core';

@Component({
  selector: 'app-new-branch',
  templateUrl: './new-branch.component.html',
  styleUrls: ['./new-branch.component.css']
})
export class NewBranchComponent {

  closeBranchModal(event: Event) {
    const modal = event.target as HTMLElement;
    modal.style.opacity = '0';
    modal.style.zIndex = '-1';
  }
}
