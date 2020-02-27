import { Injectable } from '@angular/core';
import { Permission } from './permission';
import { Observable, of } from 'rxjs';
import { AuthService } from './http/auth.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  headers = new HttpHeaders()
        .append('content-type', 'application/json;charset=UTF-8')

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }

  getPermissions(): Observable<Permission[]> {
    return this.http.get<Permission[]>('/aig-uaa/api/permission/getAllpermissions');
  }

  getPermission(id: number): Observable<Permission> {
    const returnData = this.http.get<Permission>(`/aig-uaa/api/permission/getPermissionById/${id}`);
    return returnData;
  }

  addPermission(permission: Permission): Observable<Permission> {
            return this.http.post<Permission>('/aig-uaa/api/permission/createPermission',
            JSON.stringify(permission),
            {headers: this.headers});
  }

  deletePermission(id: number): Observable<{}> {
    return this.http.delete(`/aig-uaa/api/permission/deletePermission/${id}`, {headers: this.headers});
  }

  updatePermission(permission: Permission): Observable<Permission> {
    return this.http.put<Permission>(`/aig-uaa/api/permission/updatePermission/${permission.permissionCode}`, permission, {headers: this.headers});
  }
}