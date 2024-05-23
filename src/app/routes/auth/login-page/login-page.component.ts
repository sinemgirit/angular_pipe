import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { LoginFormComponent } from '../../../features/auth/components/login-form/login-form.component';
import { Validators } from '@angular/forms';
import { FormControlErrorMessagePipe } from '../../../features/products/pipes/formControlErrorMessage.pipe';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    // BasicLayoutComponent,
    SharedModule,
    LoginFormComponent,
    FormControlErrorMessagePipe
   
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  constructor(private router: Router) {}

  onLoginSucces() {
    this.router.navigate(['/']);
  }

  // pipe(){

  //   const errorMessages: { [key: string]: string } = {
  //     required: 'This field is required',
  //     username: `kullanıcı adı en az 2 karakter olmalı ${Validators.minLength(2),Validators.required}`,
  //     password: `şifre en fazla 8 karakter olmalı ${Validators.minLength(8),Validators.required}`,
     
  //     // Diğer hata mesajları buraya eklenebilir
  //   };
  //   const firstErrorKey = Object.keys(errorMessages)[0];
  //   return errorMessages[firstErrorKey] || 'Unknown error';
  //       }

}
