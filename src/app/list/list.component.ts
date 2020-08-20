import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public selectedProviders =
    JSON.parse(localStorage.getItem('selectedProviders')) || [];
  public unselectedProviders = JSON.parse(
    localStorage.getItem('unselectedProviders')
  ) || [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    },
  ];

  selectProvider(id) {
    this.selectedProviders.push(
      this.unselectedProviders.filter((obj) => obj.id === id)[0]
    );
    this.unselectedProviders = this.unselectedProviders.filter(
      (obj) => obj.id !== id
    );
    this.updateStorage();
  }

  removeProvider(id) {
    this.unselectedProviders.push(
      this.selectedProviders.filter((obj) => obj.id === id)[0]
    );
    this.selectedProviders = this.selectedProviders.filter(
      (obj) => obj.id !== id
    );
    this.updateStorage();
  }

  updateStorage() {
    localStorage.setItem(
      'unselectedProviders',
      JSON.stringify(this.unselectedProviders)
    );
    localStorage.setItem(
      'selectedProviders',
      JSON.stringify(this.selectedProviders)
    );
  }

  constructor() {}

  ngOnInit() {}
}


