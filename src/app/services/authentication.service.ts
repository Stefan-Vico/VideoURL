import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor() {}

async setDetails(clientUsername: string, operatorUsernam: string) {
    try {
      if (clientUsername && operatorUsernam) {
        var usersForChat = {
          clientName: clientUsername,
          operatorName: operatorUsernam
        }
            return usersForChat; 
        }
    } catch (error) {
        return(error)
    }
  }

  logout() {
    localStorage.removeItem('usersForChat')
    window.location.reload()
  }
}
