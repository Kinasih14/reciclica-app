import { Component, Input, OnInit } from '@angular/core'; // Capitalize Input and import it correctly
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {

  @Input() message!: string;
  @Input() field!: FormGroup;
  @Input() error!: string;


  constructor() { }

  ngOnInit() {}

  shouldshowComponent() {
    //form.get('email').touched && form.get('email').errors?.required
    if (this.field.touched && this.field.errors?.[this.error]) {
      return true;


    return false;
  }
}}
