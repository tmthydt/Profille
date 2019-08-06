import { Component, OnInit, Input } from "@angular/core";
import { ProfileService } from "../profile.service";

@Component({
  selector: "edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  userProfile: any;
  avatars: any[];
  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.userProfile = this.profileService.getUserProfile();
    this.avatars = this.profileService.getAvatars();
    // console.log(this.avatars);
  }

  setUserProfile(userProfile): void {
    console.log(userProfile);
    this.profileService.setUserProfile(userProfile);
  }

  selectAvatar(i) {
    // console.log(this.avatars[i]);
    this.avatars = this.profileService.toggleAvatarSelect(i);
    this.profileService.selectAvatar(i);
  }

  // saveProfile(updatedProfile){
  //   this.profileService.updateProfile(updatedProfile);
  // }

  // backToProfile() {
  //   location.pathname = "/profile";
  // }
}
