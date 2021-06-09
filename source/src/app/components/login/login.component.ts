import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private dialog;

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
    this.authenticate();
  }

  authenticate() {

    Office.context.ui.displayDialogAsync(

      // The URI to be presented in the Dialog:
      this.getOauthUri(),

      // Dialog Size:
      { height: 80, width: 30 },

      // Result handler. After the Dialog is created, a response is returned immediately.
      (displayDialogResult) => {

        if (displayDialogResult !== undefined) {
          if (displayDialogResult.status == Office.AsyncResultStatus.Failed) {
            console.log("TODO: ", displayDialogResult.error.code);
          } else {

            // Assign the created Dialog to a Class Variable.
            this.dialog = displayDialogResult.value;

            // Messages are sent by developers programatically from the dialog using office.context.ui.messageParent(...)
            this.dialog.addEventHandler(Office.EventType.DialogMessageReceived,
              (dialogMessageReceived) => {

                try {

                  if (dialogMessageReceived != null && dialogMessageReceived.message != null) {


                    // Close the Dialog.
                    this.dialog.close();

                    // Navigate to the subscriptions page.
                    this.router.navigate(['/subscriptions']);
                  }
                } catch (error) {
                  console.log("TODO: ", error);
                }
              }
            );
          }
        } else {
          console.log("Fail to get token");
        }
      }
    );
  }


  private getOauthUri() {

    const AUTHORIZATION_ENDPOINT = 'https://stg-identity.primaverabss.com/connect/authorize' ;
    const RESPONSE_TYPE = 'code token id_token';
    const CLIENT_ID = 'rose-excel-client-app';
    const REDIRECT_URI = 'https://localhost:4200/login.html';
    const SCOPE = 'openid rose-api';
    const NONCE = 'hUPbs8E7nDItyQaQSVkkzuVMDEfRnXWp1UAiTWSBPpcLs9yIPw7ptmFpi7d8pq8NXiSR2rb4aXpKUXEhcdsWLyJMQLVDaEYQUrGpt8rgOO4SxQWcGr7';

    var authUri =
        `${AUTHORIZATION_ENDPOINT}`           +
        `?response_type=${RESPONSE_TYPE}`     +
        `&client_id=${CLIENT_ID}`             +
        `&redirect_uri=${REDIRECT_URI}`       +
        `&scope=${SCOPE}`                     +
        `&nonce=${NONCE}`                     ;

    return authUri;
  }
}
