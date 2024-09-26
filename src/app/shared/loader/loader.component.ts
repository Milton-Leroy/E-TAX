import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  template: `
     <div class="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      <div class="border-t-transparent border-solid animate-spin rounded-full border-blue-500 border-4 h-16 w-16"></div>
    </div>
  `,
  styles: ``
})
export class LoaderComponent {

}
