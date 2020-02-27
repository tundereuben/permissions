import { Component, OnInit, Input } from '@angular/core';
import { PermissionService } from '../permission.service';
import { Permission } from '../permission';

import { FormBuilder, Validators, Form, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth, AuthService } from '../http/auth.service';

@Component({
  selector: 'app-prime-dashboard',
  templateUrl: './prime-dashboard.component.html',
  styleUrls: ['./prime-dashboard.component.css']
})
export class PrimeDashboardComponent implements OnInit {

  public permissionAddForm: FormGroup;
  id: number;
  // @Input() displayModal:boolean;

  permissions: Permission[];
  permission: Permission;
  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  constructor(
    private permissionService: PermissionService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getPermissions();
    this.createForm();
    // this.id = +this.route.snapshot.paramMap.get('id');
    // if (this.id) {
    //   this.getPermission();
    // }
  }

  getPermission(): void {
    this.permissionService.getPermission(this.id)
      .subscribe(data => {
        console.log('data from db', data);
        this.permissionAddForm.patchValue({
          permissionCode: data.permissionCode,
          permissionName: data.permissionName,
          permissionGrouping: data.permissionGrouping,
          permissionEnabled: !!data.enabled ? 'true' : 'false'
        });
      });
  }

  getPermissions(): void {
    this.permissionService.getPermissions()
      .subscribe(permissions => this.permissions = permissions);
  }

  createForm() {
    this.permissionAddForm = this.fb.group({
      permissionCode: [''],
      permissionName: ['', Validators.required],
      permissionGrouping: ['', Validators.required],
      permissionEnabled: ['', Validators.required]
    });

  }

  onEdit(permission: Permission) {
    this.id = permission.permissionCode; 
    this.getPermission();
    console.log(this.permission);
    this.display = true;
    
    // const id = permission.permissionCode;
    // this.permissionService.getPermission(id).subscribe(perm => this.permission = perm);
  }

  onAdd() {
    console.log('Add clicked!');
    this.display = true;
  }

  onSubmit() {
    const code = this.permissionAddForm.get('permissionCode');

    const rawValue = this.permissionAddForm.getRawValue();
    let permissionValues = {
      enabled: rawValue.permissionEnabled === 'true',
      permissionCode: rawValue.permissionCode,
      permissionName: rawValue.permissionName,
      permissionGrouping: rawValue.permissionGrouping
    };

    if (this.permissionAddForm.valid) {
      const permission = <Permission>permissionValues;
      this.permissionService.addPermission(permission).pipe().subscribe(data => {
        console.log(data)
        this.getPermissions();
        this.display = false;
      })

    } else if (this.permissionAddForm.valid && code) {
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


  deletePermission(permission: Permission) {
    const id = permission.permissionCode;
    if (confirm('Are you sure you want to delete this permission?')) {
      this.permissionService.deletePermission(id).subscribe(data => {
        this.permissions = this.permissions.filter(perm => perm.permissionCode !== id)
      });
    }
  }


}
