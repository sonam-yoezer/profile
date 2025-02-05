import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path: '', component: ProfileComponent},
    {path: 'project', component: ProjectsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'skill', component: SkillsComponent},
    {path: 'contact', component: ContactComponent}
    
];
