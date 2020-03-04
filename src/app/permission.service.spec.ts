import { TestBed, async, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './http/auth.service';
import { Permission } from './permission';
import { PermissionService } from './permission.service';

describe('PermissionService', () => {
  let permissionService: PermissionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {TestBed.configureTestingModule({
    imports: [HttpClientTestingModule,],
    providers: [AuthService, PermissionService]
  });

  permissionService = TestBed.get(PermissionService);
  httpMock = TestBed.get(HttpTestingController);  
});

  it('should be created', () => {
    const service: PermissionService = TestBed.get(PermissionService);
    expect(service).toBeTruthy();
  });

  it(`should fetch all permissions as an Observable`, async(inject([HttpTestingController, PermissionService],
    (httpClient: HttpTestingController, permissionService: PermissionService) => {

      const permissionItems: Permission[] = [
        {
          "permissionCode": 1,
          "permissionGrouping": "AUTHORIZE_PERMISSION",
          "permissionName": "CREATE_PERMISSION",
          "enabled": true
        },
        {
          "permissionCode": 2,
          "permissionGrouping": "AUTHORIZE_PERMISSION",
          "permissionName": "EDIT_PERMISSION",
          "enabled": false
        },
        {
          "permissionCode": 3,
          "permissionGrouping": "AUTHORIZE_PERMISSION",
          "permissionName": "DELETE_PERMISSION",
          "enabled": false
        }
      ];

      permissionService.getPermissions()
        .subscribe((permissionItems: Permission[]) => {
          expect(permissionItems.length).toBe(3, "Wrong number of permissions returned!");

          const permission = permissionItems.find(permission => permission.permissionCode == 3);
          expect(permission.permissionName).toBe("DELETE_PERMISSION");
        });

      let req = httpMock.expectOne('/aig-uaa/api/permission/getAllpermissions');
      expect(req.request.method).toBe("GET");

      req.flush(permissionItems);

    })));


    it(`should fetch single permission as an Observable`, async(inject([HttpTestingController, PermissionService],
      (httpClient: HttpTestingController, permissionService: PermissionService) => {
  
        const permissionItem: Permission = 
          {
            "permissionCode": 1,
            "permissionGrouping": "AUTHORIZE_PERMISSION",
            "permissionName": "CREATE_PERMISSION",
            "enabled": true
          };
  
        permissionService.getPermission(1)
          .subscribe((permissionItem: Permission) => {
            expect(permissionItem.permissionCode).toBe(1);
          });
  
        let req = httpMock.expectOne(`/aig-uaa/api/permission/getPermissionById/${permissionItem.permissionCode}`);
        expect(req.request.method).toBe("GET");
  
        req.flush(permissionItem);
  
      })));


      it(`should delete a permission and return Observable`, async(inject([HttpTestingController, PermissionService],
        (httpClient: HttpTestingController, permissionService: PermissionService) => {
    
          const permissionItem: Permission = 
            {
              "permissionCode": 1,
              "permissionGrouping": "AUTHORIZE_PERMISSION",
              "permissionName": "CREATE_PERMISSION",
              "enabled": true
            };
    
          permissionService.deletePermission(1)
            .subscribe((permissionItem: Permission) => {
              expect(permissionItem.permissionCode).toBe(1);
            });
    
          let req = httpMock.expectOne(`/aig-uaa/api/permission/deletePermission/${permissionItem.permissionCode}`);
          expect(req.request.method).toBe("DELETE");
    
          req.flush(permissionItem);
    
        })));


        it(`should create a permission and return Observable`, async(inject([HttpTestingController, PermissionService],
          (httpClient: HttpTestingController, permissionService: PermissionService) => {
      
            const permissionItem: Permission = 
              {
                "permissionCode": 1,
                "permissionGrouping": "AUTHORIZE_PERMISSION",
                "permissionName": "CREATE_PERMISSION",
                "enabled": true
              };
      
            permissionService.addPermission(permissionItem)
              .subscribe((permissionItem: Permission) => {
                expect(permissionItem.permissionCode).toBe(1);
              });
      
            let req = httpMock.expectOne(`/aig-uaa/api/permission/createPermission`);
            expect(req.request.method).toBe("POST");
      
            req.flush(permissionItem);
      
          })));


          it(`should update a permission and return Observable`, async(inject([HttpTestingController, PermissionService],
            (httpClient: HttpTestingController, permissionService: PermissionService) => {
        
              const permissionItem: Permission = 
                {
                  "permissionCode": 1,
                  "permissionGrouping": "AUTHORIZE_PERMISSION",
                  "permissionName": "CREATE_PERMISSION",
                  "enabled": true
                };
        
              permissionService.updatePermission(permissionItem)
                .subscribe((permissionItem: Permission) => {
                  expect(permissionItem.permissionCode).toBe(1);
                });
        
              let req = httpMock.expectOne(`/aig-uaa/api/permission/updatePermission/${permissionItem.permissionCode}`);
              expect(req.request.method).toBe("PUT");
        
              req.flush(permissionItem);
        
            })));

            afterEach(() => {
              httpMock.verify();
            })


});
