import { Pipe, type PipeTransform } from '@angular/core';
import { AbstractControl,ValidationErrors, Validators } from '@angular/forms';
import { error } from 'console';

@Pipe({
  name: 'appFormControlErrorMessage',
  standalone: true,
})
export class FormControlErrorMessagePipe implements PipeTransform {

  transform(errors:ValidationErrors | null):string{
    if (!errors) {
      return "" ;
    }
    const errorMessages: { [key: string]: string } = {
      required: 'This field is required',
      username: `kullanıcı adı en az 2 karakter olmalı ${Validators.minLength(2),Validators.required}`,
      password: `şifre en fazla 8 karakter olmalı ${Validators.minLength(8),Validators.required}`,
     
      // Diğer hata mesajları buraya eklenebilir
    };
  
    const firstErrorKey = Object.keys(errors)[0];
    return errorMessages[firstErrorKey] || 'Unknown error';
    console.log(errorMessages);
    };

}
