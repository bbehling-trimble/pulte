import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import {AppComponentService} from '../app.component.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  checkoutForm;
  formSubmitted;
  private stepCounter = 0;

  constructor(private formBuilder: FormBuilder, private appComponentService: AppComponentService) {

    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: [ '', Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)],
      email: ['', Validators.required]
    });

  }

  onNext = () => {
    this.stepCounter++;
  }

  onPrev = () => {
    this.stepCounter--;
  }

  onSubmit = (customerData) => {
    this.appComponentService.submitSignup(customerData);
    this.checkoutForm.reset();
    this.formSubmitted = true;
  }
  

  ngOnInit() {
  }

}
