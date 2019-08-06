import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ChangeDetectionStrategy } from "@angular/compiler/src/core";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  userProfile: any = {
    name: "Jane Doe",
    contact: "jane@doe.com",
    bio: "Mysterious, Courageous, Intriguing Doe"
  };

  avatars: any[] = [
    {
      url: "https://www.w3schools.com/howto/img_avatar.png",
      selected: false
    },
    {
      url: "https://www.w3schools.com/w3images/avatar2.png",
      selected: false
    },
    {
      url:
        "https://www.utsa.edu/financialaffairs/budget/imgs/female_avatar.png",
      selected: false
    },
    {
      url: "https://www.w3schools.com/w3images/avatar6.png",
      selected: true
    }
  ];

  selectedAvatar: string = "https://www.w3schools.com/w3images/avatar6.png";

  clicked: number = 0;
  constructor(private router: Router) {}

  getUserProfile(): any {
    return this.userProfile;
  }

  setUserProfile(updatedProfile): any {
    // console.log(updatedProfile.name);
    // console.log(updatedProfile.contact);
    // console.log(updatedProfile.bio);
    // console.log({ ...updatedProfile });
    // this.userProfile = { ...updatedProfile };
    this.userProfile.name = updatedProfile.name;
    this.userProfile.contact = updatedProfile.contact;
    this.userProfile.bio = updatedProfile.bio;
    this.router.navigate(["/profile"]);
    // console.log(this.userProfile);
    return this.userProfile;
  }

  // setUserProfile(updatedProfile): any {
  //   console.log(updatedProfile.target.elements[0].value);
  //   this.userProfile.name = updatedProfile.target.elements[0].value;
  //   this.userProfile.contact = updatedProfile.target.elements[1].value;
  //   this.userProfile.bio = updatedProfile.target.elements[2].value;
  //   this.router.navigate(["/profile"]);
  //   // console.log(this.userProfile);
  //   return this.userProfile;
  // }

  editProfile(): void {
    this.router.navigate(["/edit-profile"]);
    // location.pathname = "/edit-profile";
  }

  getAvatars(): any[] {
    return this.avatars;
  }

  toggleAvatarSelect(i) {
    if (this.avatars[i].selected === true) {
      this.avatars[i].selected = false;
    } else if (this.avatars[i].selected === false) {
      for (let i = 0; i < this.avatars.length; i++) {
        this.avatars[i].selected = false;
      }
      this.avatars[i].selected = true;
    }
    // console.log(this.avatars[i].selected);
    return this.avatars;
  }

  selectAvatar(i): string {
    if (this.avatars[i].selected === true) {
      this.selectedAvatar = this.avatars[i].url;
    } else if (this.avatars[i].selected === false) {
      this.selectedAvatar = "";
    }
    return this.selectedAvatar;
  }
  // updateProfile(updatedProfile: User): void {
  //   this.userProfile = { ...updatedProfile };
  //   this.router.navigate(["/profile"]);
  // }
}
