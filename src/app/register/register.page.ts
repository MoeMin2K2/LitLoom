import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private userService: UserService
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit(): void {
  }

  onRegister() {
    const { name, email, password, confirmPassword} = this.registerForm.value;
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    const user = { name, email, password};
    this.userService.register(user);
    this.navCtrl.navigateRoot('/form');
  }

  navigateToLogin() {
    this.navCtrl.navigateForward('/form');
  }
}
