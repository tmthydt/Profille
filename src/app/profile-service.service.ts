import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  profile: any =
  {
    name: "",
    contact: "",
    bio:""

  }

  constructor(private ) { }

  getUserProfile() {
    return this.http.get("/api/animals", { responseType: "json"});
  }

  setUserProfiel(newAnimal) {
    return this.http.post("/api/animals", { name: newAnimal }, { responseType: "json"});
  }

  editProfile(newname, oldname) {
    return this.http.put(`/api/animals/${oldname}`, { name: newname }, { responseType: "json"});
  }
}
