import { Component } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'app-amplify-angular';
  formFields: any = {
    signUp: {
      email: {
        order:1
      },
      username: {
        order: 2
      },    
      password: {
        order: 3
      },
      confirm_password: {
        order: 4
      },
      // 'custom:your_custom_attribute': {
      //   order: 4
      // }
    },
  }
  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(awsExports);
  }

}
