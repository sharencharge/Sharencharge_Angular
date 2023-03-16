import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IAddress } from 'src/models/i-address';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.scss']
})
export class FormAddressComponent implements OnInit{

  address : IAddress | undefined;
  formGroupAddress!: FormGroup;
  error: string|undefined;

  constructor(private route : ActivatedRoute,
              private userService : UserService) {

  }

  ngOnInit(): void {
    console.log(localStorage.getItem("id"));
    
    this.findAddressById(Number(this.route.snapshot.paramMap.get('idAddress')));

  }

  get city(): FormControl {
    return this.formGroupAddress.get('city') as FormControl;
  }

  get streetName(): FormControl {
    return this.formGroupAddress.get('streetName') as FormControl;
  }
  
  get streetNumber(): FormControl {
    return this.formGroupAddress.get('streetNumber') as FormControl;
  }

  isFieldOnError(key: string): boolean {
    const field: FormControl = this.formGroupAddress.get(key) as FormControl;
    return (field.invalid && (field.touched || field.dirty));
  }

  findAddressById(idAddress :number) {
    this.userService.findAddressById(idAddress).subscribe(res => {
      this.address = res;
      
      this.formGroupAddress = new FormGroup({
        city: new FormControl(
          this.address.city,
          [
            Validators.required,
          ]
        ),
        streetName: new FormControl(
          this.address.streetName,
          [
            Validators.required,
          ]
        ),
        streetNumber: new FormControl(
          this.address.streetNumber,
          [
            Validators.required,
          ]
        ),
        
        
      });
    });
  }

  onSubmit(): void {
    // if(this.user){
    //   if (this.formGroupUser.valid) {
    //     this.user.firstname = this.firstname.value;
    //     this.user.lastname = this.lastname.value;
    //     this.user.email = this.email.value;
    //     this.user.phoneNumber = this.phoneNumber.value;
    //     this.user.urlAvatar = this.urlAvatar.value;
    //     console.log(this.user);
    //    /*this.publisherRepository
    //       .save(this.publisher)
    //       .pipe(
    //         catchError(err => {
    //           if (err instanceof HttpErrorResponse) {
    //             this.error = err.error.detail;
    //           }
    //           return throwError(err);
    //         })
    //       )
    //       .subscribe((publisher) => {
    //         console.log(publisher);
    //       });*/
    //   } else {
    //     alert('Petit garneman qui essaie de traffiquer mon form !');
    //   }
    // }
  }



}
