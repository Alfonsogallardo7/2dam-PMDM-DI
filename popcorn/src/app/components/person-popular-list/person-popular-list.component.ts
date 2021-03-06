import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/interfaces/person-popular.interface';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-popular-list',
  templateUrl: './person-popular-list.component.html',
  styleUrls: ['./person-popular-list.component.css']
})
export class PersonPopularListComponent implements OnInit {
  popularPerson: Person[] = [];
  
  constructor( private personServices: PersonService) { }

  ngOnInit(): void {
    this.personServices.getPopularPerson().subscribe(popularPersonResponse => {
      this.popularPerson = popularPersonResponse.results;
    });
  }

}
