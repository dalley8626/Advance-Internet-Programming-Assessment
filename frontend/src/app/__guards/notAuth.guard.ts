import {Injectable} from '@angular/core'
import {Router, CanActivate} from '@angular/router'
import {AuthService} from '../__services/authService/auth.service'

@Injectable() 
export class NotAuthGuard implements CanActivate {
    constructor(
        private authService:AuthService,
        private router:Router
    ){}

    canActivate() {
        if(!this.authService.notLoggedIn()){
            this.router.navigate(['/dashboard'])
            return false;
        } else {
            return true;
        }
    }
}
