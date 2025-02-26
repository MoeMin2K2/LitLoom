import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileForm: FormGroup;
  user : any = [];
  isEditMode = false;

  constructor(private fb: FormBuilder, 
    private userService: UserService , 
    private navController: NavController,
    private actionSheetController: ActionSheetController) {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dob: [''],
      education: [''],
      job: [''],
      salary: [''],
      address: [''],
      image: ['']
    });
  }

  ngOnInit() {
    const email = this.userService.getCurrentUserEmail();
    this.user = this.userService.getCurrentUser(email);
    if (this.user) {
      this.profileForm.setValue({
        name: this.user.name || '---',
        email: this.user.email || '---',
        password: this.user.password || '---',
        dob: this.user.dob || '---',
        education: this.user.education || '---',
        job: this.user.job || '---',
        salary: this.user.salary || '---',
        address: this.user.address || '---',
        image: this.user.image || '',
      });
    }
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  onUpdateProfile() {
    if (this.profileForm.valid) {
      this.userService.updateUser(this.profileForm.value);
      const email = this.userService.getCurrentUserEmail();
      if (email) {
        this.user = this.userService.getCurrentUser(email);
        this.isEditMode = false;
      }
    }
  }

  goBack() {
    this.navController.back();
  }

  async openImageOptions() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image Source',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera-outline',
          handler: () => {
            this.changeProfileImage(CameraSource.Camera);
          },
        },
        {
          text: 'Gallery',
          icon: 'image-outline',
          handler: () => {
            this.changeProfileImage(CameraSource.Photos);
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  async changeProfileImage(source: CameraSource) {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: source,
    });
    this.profileForm.patchValue({ image: image.dataUrl });
    this.user.image = image.dataUrl;
  }
}
