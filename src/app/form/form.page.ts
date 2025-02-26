import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  form: FormGroup;
  loading: boolean = false;

  constructor(private alertController: AlertController,private fb: FormBuilder , private navController: NavController , private userService: UserService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    console.log("ngOnInit - FormPage")
  }

  tokenChar: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890_+$";
  randomToken() {
    let token: string = "";
    for (let i = 0; i < 10; i++) {
      token += this.tokenChar.charAt(Math.floor(Math.random() * this.tokenChar.length)); // (0-1 * 65)
    }
    return token;
  }

  async onSubmit() {
    const { email, password } = this.form.value;
    const user = this.userService.getCurrentUser(email);

    if (!email || !password) {
      await this.showAlert('Error', 'Please fill in both email and password.');
      return;
    }

    if (user) {
      if (user.password === password) {
        this.loading = true;
        localStorage.setItem('token', this.randomToken());
        localStorage.setItem('currentUserEmail', email);
        console.log("After Submitted Token: ", localStorage.getItem('token'));
        setTimeout(() => {
          this.loading = false;
          this.navController.navigateForward(['/document']);
        }, 3000);
      } else {
        await this.showAlert('Invalid Credentials', 'The password you entered is incorrect.');
      }
    } else {
      await this.showAlert('Not Registered', 'The email you entered is not registered. Would you like to register?', true);
    }
  }

  async showAlert(header: string, message: string, showRegister: boolean = false) {

    const buttons: any[] = [
      {
        text: 'Ok',
        role: 'cancel'
      }
    ];

    if (showRegister) {
      buttons.push({
        text: 'Register',
        handler: () => {
          this.toRegister();
        }
      });
    }

    const alert = await this.alertController.create({
      header,
      message,
      buttons
    });

    await alert.present();
  }

  toRegister() {
    console.log("Register is Called.")
    this.navController.navigateForward(['/register']);
  }
}
