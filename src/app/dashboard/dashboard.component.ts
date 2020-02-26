import { Component, OnInit } from '@angular/core';
import { Permission } from '../permission';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PermissionService } from '../permission.service';
import {CardModule} from 'primeng/card';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  permissions: Permission[];

  constructor(
    private permissionService: PermissionService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    this.getPermissions();
  }

  selectedPermission: Permission;

  // onSelect(permission: Permission): void {
  //   this.selectedPermission = permission;
  // }

  getPermissions(): void {
    this.permissionService.getPermissions()
      .subscribe(permissions => this.permissions = permissions);
  }

  deletePermission(permission: Permission) {
    const id = permission.permissionCode;
    if(confirm('Are you sure you want to delete this permission?')) {
      this.permissionService.deletePermission(id).subscribe(data => {
        this.permissions = this.permissions.filter(perm => perm.permissionCode !== id)
      });
    }
    
  }

}
