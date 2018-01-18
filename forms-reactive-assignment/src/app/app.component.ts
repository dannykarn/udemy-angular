import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;
  projectStatuses = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required], this.validateProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Stable')
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  // // Synchronous solution
  // validateProjectName(control: FormControl): { [s: string]: boolean } {
  //   if (control.value === 'Test') {
  //     return { 'projectNameInvalid': true };
  //   }

  //   return null;
  // }

  // Asychronous solution
  validateProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Test') {
            resolve({ 'projectNameInvalid': true });
          } else {
            resolve(null);
          }
        }, 2000);
      });

    return promise;
  }

}
