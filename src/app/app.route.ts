import { Routes, RouterModule } from "@angular/router";

import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { StartComponent } from "./start/start.component";

const appRoutes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "start", component: StartComponent },

  { path: "**", redirectTo: "" }
];

export const routing = RouterModule.forRoot(appRoutes);
