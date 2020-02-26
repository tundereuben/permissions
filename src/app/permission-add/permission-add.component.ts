import { Component, OnInit, Input } from '@angular/core';
import { Permission } from '../permission';
import { PermissionService } from '../permission.service';
import { FormBuilder, Validators, Form, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-permission-add',
  templateUrl: './permission-add.component.html',
  styleUrls: ['./permission-add.component.css']
})


export class PermissionAddComponent implements OnInit {

  @Input() permission: Permission;

  public permissionAddForm: FormGroup;
  id: number;

  constructor(
    private permissionService: PermissionService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getPermission();
    }
  }

  getPermission(): void {
    this.permissionService.getPermission(this.id)
      .subscribe(data => {
        console.log('data from db', data);

        this.permissionAddForm.patchValue({
          permissionCode: data.permissionCode,
          permissionName: data.permissionName,
          permissionGrouping: data.permissionGrouping,
          permissionEnabled: data.enabled
        });

      });
  }

  createForm() {
    this.permissionAddForm = this.fb.group({
      permissionCode: [''],
      permissionName: ['', Validators.required],
      permissionGrouping: ['', Validators.required],
      permissionEnabled: ['', Validators.required]
    });

  }

  onSubmit() {
    const code = this.permissionAddForm.get('permissionCode');

    const rawValue = this.permissionAddForm.getRawValue();
    let permissionValues = {
      enabled: rawValue.permissionEnabled,
      permissionCode: rawValue.permissionCode,
      permissionName: rawValue.permissionName,
      permissionGrouping: rawValue.permissionGrouping
    };

    if (this.permissionAddForm.valid) {


      const permission = <Permission>permissionValues;

      this.permissionService.addPermission(permission).pipe().subscribe(data => {
        console.log(data)
      })

    }
    else if (this.permissionAddForm.valid && code) {
      // const rawValue = this.permissionAddForm.getRawValue();

      const permission = <Permission>permissionValues;

      this.permissionService.updatePermission(permission).pipe().subscribe(data => {
        console.log(`id ${permission.permissionCode} updated`);
      })
    }
    else {
      (error) => console.log(error)
    }

    this.router.navigate(['/']);
  }

}
