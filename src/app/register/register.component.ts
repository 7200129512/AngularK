import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ServicetestService } from '../servicetest.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private service:ServicetestService)
  {
    
  }
user:any={};
username: any;
  onSubmit()
  {
    this.service.saveuser(this.user).subscribe(x=>x);
    console.log(this.user);
  }
}
