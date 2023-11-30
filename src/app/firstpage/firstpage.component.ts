import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css'],
})
export class FirstpageComponent {
  constructor(private router: Router, private formBuilder: FormBuilder) {}
  form!: FormGroup;

  checkoutForm = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.minLength(3)]),
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });

  ngOnInit(): void {
    this.form = this.checkoutForm;
  }

  onClick(id: string, name: string) {
    console.log('test');
    this.router.navigate(['second'], {
      queryParams: {
        id: id,
        name: name,
      },
    });
  }

  get id() {
    return this.checkoutForm.get('id');
  }
  get name() {
    return this.checkoutForm.get('name');
  }
}
