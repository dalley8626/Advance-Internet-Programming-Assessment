import {Injectable} from '@angular/core'
import {Router, CanActivate} from '@angular/router'
import {AuthService} from '../__services/authService/auth.service'
import {Location} from '@angular/common'

@Injectable() 
export class AuthGuard implements CanActivate {
    constructor(
        private authService:AuthService,
        private router:Router,
        private locatation:Location
    ){}

    canActivate() {
        if(!this.authService.notLoggedIn()){
            return true;
        } else {
            this.router.navigate(['/login'])
            return false;
        }
    }
}
