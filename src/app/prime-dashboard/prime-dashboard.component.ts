import { Component, OnInit } from '@angular/core';
import { PermissionService } from '../permission.service';
import { Permission } from '../permission';

@Component({
  selector: 'app-prime-dashboard',
  templateUrl: './prime-dashboard.component.html',
  styleUrls: ['./prime-dashboard.component.css']
})
export class PrimeDashboardComponent implements OnInit {

  permissions: Permission[];

  constructor(private permissionService: PermissionService) { }

  ngOnInit() {
    this.getPermissions();
    console.log(this.permissions)
  }

  getPermissions(): void {
    this.permissionService.getPermissions()
      .subscribe(permissions => this.permissions = permissions);
  }

}
