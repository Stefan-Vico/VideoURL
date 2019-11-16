import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetails implements OnInit {
  udForm: FormGroup;
  loading: Boolean = false;
  submitted = false;

  constructor(
      private router :Router,
      private formBuilder: FormBuilder,
      private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
      this.udForm = this.formBuilder.group({
        clientUsername: ['', Validators.required],
        operatorUsernam: ['', Validators.required]
      });
  }

  get f() { return this.udForm.controls; }

onSubmit() {
      this.submitted = true;
      this.loading = true;
      if (this.udForm.invalid) {
          this.loading = false;
          return;
      }
    this.authenticationService.setDetails(this.f.clientUsername.value, this.f.operatorUsernam.value).then((data)=>{
      console.log(data)
      setTimeout(()=>{
        localStorage.setItem('usersForChat', JSON.stringify(data))
        console.log(data)
        this.router.navigate([''])
        this.loading = false;   },1500)
        
    })
    }

}
