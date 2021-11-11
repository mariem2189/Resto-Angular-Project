import { MenuService } from './../../services/menu.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  menuForm: FormGroup;
  menu: any = {};
  imagePreview:any;
  constructor(
    private fb: FormBuilder,
    private menuService:MenuService) { }

  ngOnInit() {
    this.menuForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      image: ['']
    })
  }

  addMenu() {
    console.log('Here my obj component', this.menu);
    this.menuService.addMenu(this.menu, this.menuForm.value.image).subscribe(
      (data)=> {
        console.log('Here data', data);
      }
    )
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log('Here file', file);
     
    this.menuForm.patchValue({ image: file }); 
    this.menuForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    }; reader.readAsDataURL(file);
  }

}
