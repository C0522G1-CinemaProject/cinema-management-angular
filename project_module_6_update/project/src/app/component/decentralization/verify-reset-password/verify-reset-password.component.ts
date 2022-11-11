import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";


@Component({
  selector: 'app-verify-reset-password',
  templateUrl: './verify-reset-password.component.html',
  styleUrls: ['./verify-reset-password.component.scss']
})
export class VerifyResetPasswordComponent implements OnInit {
  formGroup!: FormGroup;
  isSuccessful = true;
  isSendMail: boolean = false;
  isSubmited: boolean = true;


  constructor(private route: ActivatedRoute,
              private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]],
      repeatNewPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]],
    });
    this.route.queryParams.subscribe(params => {
      let code = params['code'];
      if (code == null) {
        this.isSendMail = false;
      } else {
        this.isSendMail = true;
        this.isSuccessful = false;
        this.authService.verifyPassword(code).subscribe(
          data => {
            this.isSuccessful = (data.message === 'accepted');
          },
          err => {
            this.isSuccessful = false;
          }
        );
      }
    });
  };

  code: string | undefined;

  onSubmitt() {
    // @ts-ignore
    if (this.formGroup.value.newPassword === this.formGroup.value.repeatNewPassword) {
      this.route.queryParams.subscribe(params => {
        this.code = params['code'];
      });
      // @ts-ignore
      this.authService.doResetPassword(this.formGroup.value.newPassword, this.code).subscribe(data => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Mật khẩu đã được thay đổi!',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigateByUrl("/")
      })
    } else {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Trường nhập lại mật khẩu và mật khẩu không giống nhau!',
        showConfirmButton: false,
        timer: 2000
      })
    }
  }

  validation_messages = {
    'password': [
      {type: 'required', message: 'Trường này không được để trống!'},
      {type: 'minlength', message: 'Mật khẩu cần nhiều hơn 8 ký tự'},
      {type: 'maxlength', message: 'Mật khẩu chỉ được ít hơn 32 ký tự'},
    ]
  };
}
