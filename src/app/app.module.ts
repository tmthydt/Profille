import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
import { EditComponent } from "./edit/edit.component";
import { ProfileService } from "./profile.service";

const appRoutes: Routes = [
  { path: "", redirectTo: "/profile", pathMatch: "full" },
  { path: "profile", component: ProfileComponent },
  { path: "edit-profile", component: EditComponent }
];

@NgModule({
  declarations: [AppComponent, ProfileComponent, EditComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule {}
