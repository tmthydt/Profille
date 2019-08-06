import { Component, OnInit, Input } from "@angular/core";
import { ProfileService } from "../profile.service";

@Component({
  selector: "profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  userProfile: any;
  selectedAvatar: string;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.userProfile = this.profileService.getUserProfile();
    this.selectedAvatar = this.profileService.selectedAvatar;
  }

  editProfile(): void {
    this.profileService.editProfile();
  }
}
