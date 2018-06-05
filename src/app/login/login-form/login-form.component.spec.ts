import { TestBed, ComponentFixture } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RootRenderer, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { Router } from "@angular/router";

import { LoginFormComponent } from "./login-form.component";
import { AuthService } from "../../shared/auth.service";


describe('LoginFormComponent',() => {

    let authServiceStub: Partial<AuthService>;

    var isLogged = false;

    let fixtureLoginFormComponent : ComponentFixture<LoginFormComponent>;

    let routerSpy;

    beforeEach(()=>{
        authServiceStub = {
        
            login(username: string, password: string) : boolean { 
                   
                if(username == "test" && password == "test") {
                    return true;    
                } else {
                    return false;
                }
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

        component.ngOnInit();

        component.loginForm.controls.username.setValue("test");
        component.loginForm.controls.password.setValue("test");
                
        component.auth();

        expect(component.loginForm.invalid).toBe(false);

        const spy = routerSpy.navigate as jasmine.Spy;

        const navArgs = spy.calls.first().args[0];

        expect(navArgs[0]).toBe("/home");

    });
    
    it('Should send login form invalid on wrong credentials',() => {
        const component = fixtureLoginFormComponent.componentInstance;

        component.loginForm.controls.username.setValue("wrongpassword");
        component.loginForm.controls.password.setValue("wrongpassword");

        component.auth();

        expect(component.loginForm.invalid).toBe(true);
    });

});