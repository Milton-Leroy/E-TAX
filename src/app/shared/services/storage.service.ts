import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // Store the data in the local storage
  setData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Retrieve the data from the local storage
  getData<T>(key: string): T {
    const data = localStorage.getItem(key);

    if(!data) throw new Error('Data not found in the local storage');

    return JSON.parse(data) as T;
  }

}
