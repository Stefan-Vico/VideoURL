import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UserDetails } from '../user-details/user-details.component';
import { AuthenticationService } from '../services/authentication.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'url-generator',
  templateUrl: './url-generator.component.html',
  styleUrls: ['./url-generator.component.css']
})
export class UrlGeneratorComponent implements OnInit {
  error: string = '';
  currentUserAuthData: string = JSON.parse(localStorage.getItem('currentUser'));
  customerUrl: string;
  operatorUrl: string;
  loading:Boolean= false;
  customerUsername: string = "";
  operatorUsername: string = "";
  videoUrlStart: string = "https://video-test.cbfsident.com/?role=";
  @ViewChild(UserDetails) userDetails: UserDetails;

  constructor(private apiService: ApiService,
    private authenticationService: AuthenticationService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() { }

  generateUserSpecificUrls(data) {
    let usersForChat = JSON.parse(localStorage.getItem('usersForChat'));
    this.customerUrl = this.videoUrlStart + 'customer&userName=' + usersForChat.clientName + '&streamId=' + data.streamId + '&token=' + data.customertoken;
    this.operatorUrl = this.videoUrlStart + 'operator&userName=' + usersForChat.operatorName + '&streamId=' + data.streamId + '&token=' + data.operatortoken;
  }

  generateUrls() {
    this.loading= true;
    this.apiService.getStreamId()
      .subscribe(data => {
        this.generateUserSpecificUrls(data);
        this.loading = false;
        this.openSnackBar('Url Generated', 'Close')
      },
        error => {
          this.error = 'Custom Error';
        });
  }

  copyUrl(val:string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.openSnackBar('Copied to Clipboard', 'Close')

  }

  logoutThisUser() {
    this.authenticationService.logout();
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}