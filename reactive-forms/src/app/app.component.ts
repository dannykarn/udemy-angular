import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders: string[] = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'hobbies': new FormArray([]),
      'gender': new FormControl('male')
    });

    // Subscribe to value changes
    // this.signupForm.valueChanges.subscribe(
    //   (value) => {
    //     console.log(value);
    //   }
    // );

    // Subscribe to status changes
    this.signupForm.statusChanges.subscribe(
      (status) => {
        console.log(status);
      }
    );

    // Set values in form group
    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });

    // Partially set values in form group
    this.signupForm.patchValue({
      'userData': {
        'username': 'Anna'
      }
    });
  }

  onSubmit() {
    console.log(this.signupForm);

    this.signupForm.reset({
      'gender': 'male'
    });
  }

  onAddHobby() {
    (<FormArray>this.signupForm.get('hobbies')).push(
      new FormControl(null, Validators.required)
    );
  }

  // Synchronous Validator
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }

    return null;
  }

  // Asynchronous Validator
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'test@test.com') {
            resolve({ 'emailIsForbidden': true });
          } else {
            resolve(null);
          }
        }, 1500);
      }
    );

    return promise;
  }

}
