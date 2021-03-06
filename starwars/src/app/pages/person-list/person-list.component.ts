import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Person } from 'src/app/models/interfaces/people.interface';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  listarPersonajes: Person[] = [];
  listarPersonajesFiltrados: Person[] = [];
  genderFormControl = new FormControl('');
  constructor(private peopleServices: PeopleService) { }

  ngOnInit(): void {
    this.peopleServices.getPeople().subscribe(popularPersonsResponse => {
      this.listarPersonajes = popularPersonsResponse.results;
    });
  }

  doFilter() {
    let genderSelected = this.genderFormControl.value;
    this.listarPersonajesFiltrados = this.listarPersonajes.filter(p => p.gender == genderSelected);
  }

}
