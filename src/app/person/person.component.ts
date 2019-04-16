import { Component, Input } from '@angular/core';

interface Person{
    firstName: string;
    lastName: string;
}
@Component({
  selector: 'person',
  templateUrl: `./person.component.html`,
  styleUrls: []
})
export class PersonComponent {
  title = 'Person Component Module';
@Input() person:Person;
}
