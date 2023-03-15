import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/models/i-user';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent {

  user : IUser | undefined;
  formGroupUser!: FormGroup;
  error: string|undefined;

  constructor(private route : ActivatedRoute,
              private userService : UserService) {

  }

  ngOnInit(): void {
    console.log(localStorage.getItem("id"));
    
    this.findUser(Number(localStorage.getItem("id")));

  }

  get firstname(): FormControl {
    return this.formGroupUser.get('firstname') as FormControl;
  }
  get lastname(): FormControl {
    return this.formGroupUser.get('lastname') as FormControl;
  }
  get urlAvatar(): FormControl {
    return this.formGroupUser.get('urlAvatar') as FormControl;
  }
  get phoneNumber(): FormControl {
    return this.formGroupUser.get('phoneNumber') as FormControl;
  }
  get email(): FormControl {
    return this.formGroupUser.get('email') as FormControl;
  }
  

  isFieldOnError(key: string): boolean {
    const field: FormControl = this.formGroupUser.get(key) as FormControl;
    return (field.invalid && (field.touched || field.dirty));
  }

  onSubmit(): void {
    if(this.user){
      if (this.formGroupUser.valid) {
        this.user.firstname = this.firstname.value;
        this.user.lastname = this.lastname.value;
        this.user.email = this.email.value;
        this.user.phoneNumber = this.phoneNumber.value;
        this.user.urlAvatar = this.urlAvatar.value;
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
  }
  
  findUser(idUSer :number) {
    this.userService.findUserById(idUSer).subscribe(res => {
      this.user = res;
      console.log("zzzz");
      
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
        urlAvatar: new FormControl(
          this.user.urlAvatar,
          [
            Validators.required,
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
        )
        
      });
    });
  }
    

}
