import { Injectable } from "@angular/core";
// import { Toastr } from './toaster.model';

// export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');
declare let toastr: any;

@Injectable()

export class ToastrService{
    success(msg:string, title?:string){
        toastr.success(msg, title);
    }
}