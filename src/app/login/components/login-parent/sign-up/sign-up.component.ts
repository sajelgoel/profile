import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Signup } from 'src/app/login/model/signup.model';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  @Output() currentPage = new EventEmitter();

  userDetails:Signup = new Signup();
  userDetailsForm:FormGroup;
  formSubmitted:boolean = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.userDetailsForm = this.formBuilder.group({
      emailId: new FormControl(this.userDetails.emailId,[
        Validators.required,
        this.emailDomainValidator
      ]),
      password: new FormControl(this.userDetails.password,[ 
        Validators.required,
        Validators.minLength(8)
      ]),
      confirmPassword: new FormControl(this.userDetails.confirmPassword,[ 
        Validators.required,
        Validators.minLength(8)
      ])
    },
    {
      validator: this.equalValueValidator('password', 'confirmPassword')
    });

    this.userDetailsForm.valueChanges.subscribe(()=>
    console.log(this.confirmPassword)
    )
  }

  get email(){
    return this.userDetailsForm.get('emailId');
  }

  get password(){
    return this.userDetailsForm.get('password');
  }

  get confirmPassword(){
    return this.userDetailsForm.get('confirmPassword');
  }

  goToSignin(){
    this.currentPage.emit("signin");
  }

  submitForm(){
    this.formSubmitted=true;
    console.log("submitted");
  }

  emailDomainValidator(control: FormControl) {
    let email = control.value;

    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailPattern.test(email)) {
      return null;
    } else {
      return {
        invalidEmail: {
        }
      }
    }
  }

  equalValueValidator(targetKey: string, toMatchKey: string): ValidatorFn {
    return (group: FormGroup): {[key: string]: any} => {
      const target = group.controls[targetKey];
      const toMatch = group.controls[toMatchKey];
      if (target.touched && toMatch.touched) {
        const isMatch = target.value === toMatch.value;
        // set equal value error on dirty controls
        if (!isMatch && target.valid) {
          const message = targetKey + ' != ' + toMatchKey;
          toMatch.setErrors({invalidPassword: message});
        }
        if (isMatch && toMatch.hasError('invalidPassword')) {
          return null;
        }
      }
  
      
    }
  }

}