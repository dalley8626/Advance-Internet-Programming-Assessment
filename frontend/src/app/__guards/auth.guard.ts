import {Injectable} from '@angular/core'
import {Router, CanActivate} from '@angular/router'
import {AuthService} from '../__services/authService/auth.service'

@Injectable() 
export class AuthGuard implements CanActivate {
    constructor(
        private authService:AuthService,
        private router:Router
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
