import { TestBed, ComponentFixture } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule, ValidatorFn, AbstractControl } from '@angular/forms';
import { RootRenderer, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Router } from "@angular/router";

import { LoginFormComponent } from "./login-form.component";
import { AuthService } from "../../shared/auth.service";



let authServiceStub: Partial<AuthService>;

describe('LoginFormComponent',() => {

    let authServiceStub: Partial<AuthService>;

    let fixtureLoginFormComponent : ComponentFixture<LoginFormComponent>;

    let routerSpy;

    beforeEach(()=>{
        authServiceStub = {
            isLogged: false,
        
            login(username: string, password: string) : boolean { 
                   
                if(username == "test" && password == "test") {
                    this.isLogged = true;    
                }
        
                return this.isLogged;
              },

              loginValidator(): ValidatorFn {
                return (control: AbstractControl): {[key: string]: any} => {
                  return (this.isLogged) ? null : { 'loginError': { value: " Wrong username or password. " } } ;
                };
              }
        }

        routerSpy = jasmine.createSpyObj('Router', ['navigate']);

        TestBed.configureTestingModule({
            declarations: [LoginFormComponent],
            imports:[FormsModule,ReactiveFormsModule],
            providers: [
                { provide: AuthService, useValue: authServiceStub},
                { provide: Router, useValue: routerSpy }
            ],
            schemas:[CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();

        fixtureLoginFormComponent = TestBed.createComponent(LoginFormComponent);

    });

    it('Should redirect to home on sucess login',() => {
        const component = fixtureLoginFormComponent.componentInstance;

        component.loginModel.username = "test";
        component.loginModel.password = "test";

        fixtureLoginFormComponent.detectChanges();
        
        component.auth();

        const spy = routerSpy.navigate as jasmine.Spy;

        const navArgs = spy.calls.first().args[0];

        expect(navArgs[0]).toBe("/home");
        expect(component.loginForm.invalid).toBe(false);
    
    });
    
    it('Should send login form invalid on wrong credentials',() => {
        const component = fixtureLoginFormComponent.componentInstance;

        component.loginModel.username = "wrongusername";
        component.loginModel.password = "worngpassword";

        fixtureLoginFormComponent.detectChanges();

        component.auth();

        expect(component.loginForm.invalid).toBe(true);
        
    
    });
});