import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/models/user';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.scss']
})
export class FormInscriptionComponent implements OnInit {

  title: string = 'Nouvel éditeur';
  user: User = new User();
  formGroupUser!: FormGroup;
  error: string|undefined;

  constructor(
    private publisherRepository: UserService,
    private httpClient: HttpClient,
  ) {
  }

  ngOnInit(): void {
   
    this.formGroupUser = new FormGroup({
      firstname: new FormControl(
        this.user.firstname,
        [
          Validators.required,
        ]
      ),
      lastname: new FormControl(
        this.user.lastname,
        [
          Validators.required,
        ]
      ),
      birthAt: new FormControl(
        this.user.birthAt,
        [
          Validators.required,
          //Validor futur date if date > dateActual
        ]
      ),
      phoneNumber: new FormControl(
        this.user.phoneNumber,
        [
          Validators.required,
          Validators.maxLength(15)
        ]
      ),
      email: new FormControl(
        this.user.email,
        [
          Validators.required,
          Validators.email
        ]
      ),
      password: new FormControl(
        this.user.password,
        [
          Validators.required,
          Validators.minLength(8),
        ]
      ),
      
    });
  }

  get firstname(): FormControl {
    return this.formGroupUser.get('firstname') as FormControl;
  }
  get lastname(): FormControl {
    return this.formGroupUser.get('lastname') as FormControl;
  }
  get birthAt(): FormControl {
    return this.formGroupUser.get('birthAt') as FormControl;
  }
  get phoneNumber(): FormControl {
    return this.formGroupUser.get('phoneNumber') as FormControl;
  }
  get email(): FormControl {
    return this.formGroupUser.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.formGroupUser.get('password') as FormControl;
  }
 


  isFieldOnError(key: string): boolean {
    const field: FormControl = this.formGroupUser.get(key) as FormControl;
    return (field.invalid && (field.touched || field.dirty));
  }

  onSubmit(): void {
    if (this.formGroupUser.valid) {
      this.user.firstname = this.firstname.value;
      this.user.lastname = this.lastname.value;
      this.user.email = this.email.value;
      this.user.password = this.password.value;
      this.user.phoneNumber = this.phoneNumber.value;
      this.user.birthAt = this.birthAt.value;
      console.log(this.user);
     /*this.publisherRepository
        .save(this.publisher)
        .pipe(
          catchError(err => {
            if (err instanceof HttpErrorResponse) {
              this.error = err.error.detail;
            }
            return throwError(err);
          })
        )
        .subscribe((publisher) => {
          console.log(publisher);
        });*/
    } else {
      alert('Petit garneman qui essaie de traffiquer mon form !');
    }
  }

  /*testLogin(): void {
    this.httpClient
      .post(
        this.rawUrl + 'login_check',
        {
          email: 'toto65@toto.fr',
          password: 'toto65'
        },
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          })
        }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }*/
}