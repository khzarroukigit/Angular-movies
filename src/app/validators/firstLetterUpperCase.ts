import { AbstractControl, ValidatorFn } from "@angular/forms";

export function firstLetterUpperCaseValidator():ValidatorFn
{
    return (control:AbstractControl)=>{
         const value = <string>control.value;
         if(!value) return;
         if(value.length === 0) return ;
         const firstletter = value[0];
         if(firstletter !== firstletter.toUpperCase()){
             return {
                 firstLetterUpperCaseValidator :{
                     message : 'The first letter must be uppercase'
                 }
             }
         }
    }
}