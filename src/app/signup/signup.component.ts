import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  checkoutForm;
  formSubmitted;
  private stepCounter = 0;

  constructor(private formBuilder: FormBuilder) {

    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: '',
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
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    //this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    this.formSubmitted = true;
  }
  

  ngOnInit() {
  }

}
