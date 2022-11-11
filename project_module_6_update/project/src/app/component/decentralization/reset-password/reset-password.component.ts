import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})


export class ResetPasswordComponent implements OnInit {
  formGroup!: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isSubmited = false;
  formValid = false;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      username: ['']
    })

  }

  onSubmit() {
    this.isSubmited = true;
    // @ts-ignore
    this.authService.resetPassword(this.formGroup.value.username).subscribe(
      data => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Gửi email thành công !',
          showConfirmButton: false,
          timer: 1000
        })
        this.router.navigateByUrl("/verify-reset-password");
      },
      err => {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Gửi email thất bại: Sai tên đăng nhập hoặc tên đăng nhập chưa được đăng ký !',
          showConfirmButton: false,
          timer: 1000
        })
      }
    );
  }
}
