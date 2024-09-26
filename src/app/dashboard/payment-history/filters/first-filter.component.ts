import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-history-first-filter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      class="border border-banner-blue w-full flex items-center justify-between px-2 py-[5px] rounded bg-white
                text-[#222B45] hover:bg-dashbody transition duration-200 ease-in-out"
      (click)="displayFilter2()"
    >
      <input type="hidden" [value]="selectedFilter" />
      <span
        class="text-[15px] font-medium leading-[24px]"
        *ngIf="selectedFilter == ''"
        >Statuts</span
      >
      <span
        class="text-[15px] font-medium leading-[24px]"
        *ngIf="selectedFilter != ''"
        >{{ selectedFilter || 'Toutes' }}</span
      >
      <i class="fa-solid fa-chevron-down text-[10px]"></i>
    </button>
    <div
      class="absolute mt-2 w-full border bg-white shadow rounded"
      *ngIf="showFilter2"
    >
      <ul
        class="text-[13px] leading-[24px] font-semibold flex flex-col gap-y-1"
      >
        <li
          class="px-4 pt-0.5 hover:bg-dashbody"
          [ngClass]="{
            'bg-banner-blue text-white': selectedFilter === 'Toutes les Statuts'
          }"
          (click)="selectFilter('Toutes les Statuts')"
        >
          Toutes les Statuts
        </li>

        <li
          class="px-4 pt-0.5 hover:bg-dashbody"
          [ngClass]="{
            'bg-banner-blue text-white': selectedFilter === 'Activée'
          }"
          (click)="selectFilter('Activée')"
        >
          Activée
        </li>

        <li
          class="px-4 pt-0.5 hover:bg-dashbody rounded-b"
          [ngClass]="{
            'bg-banner-blue text-white': selectedFilter === 'Désactivée'
          }"
          (click)="selectFilter('Désactivée')"
        >
          Désactivée
        </li>
      </ul>
    </div>
  `,
  styles: ``,
})
export class FirstPayhisFilterComponent {
  showFilter2: boolean = false;
  selectedFilter: string = ''; // To store the selected value

  displayFilter2() {
    this.showFilter2 = !this.showFilter2; // Toggle dropdown visibility
  }

  // Method to capture and set the selected value from the list
  selectFilter(filter2Val: string) {
    this.selectedFilter = filter2Val;
    this.showFilter2 = false; // Close the dropdown after selection
  }
}
