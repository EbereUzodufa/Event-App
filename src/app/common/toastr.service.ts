import { InjectionToken } from "@angular/core";
import { Toastr } from './toaster.model';

export let TOASTR_TOKEN = new InjectionToken<Toastr>('toastr');