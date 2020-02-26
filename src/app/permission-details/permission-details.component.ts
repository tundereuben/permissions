import { Component, OnInit, Input } from '@angular/core';
import { Permission }  from '../permission';
import { PermissionService } from '../permission.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-permission-details',
  templateUrl: './permission-details.component.html',
  styleUrls: ['./permission-details.component.css']
})
export class PermissionDetailsComponent implements OnInit {
  @Input() permission: Permission;

  constructor(
    private route: ActivatedRoute,
    private permissionService: PermissionService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPermission();
  }

  getPermission(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.permissionService.getPermission(id)
      .subscribe(permission => this.permission = permission);
  }

  goBack(): void {
    this.location.back();
  }
}
