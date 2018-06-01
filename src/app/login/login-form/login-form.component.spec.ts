import { TestBed, ComponentFixture } from "@angular/core/testing";
import { FormsModule } from '@angular/forms';
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
        
                return this.isLogged
              }
        }

        routerSpy = jasmine.createSpyObj('Router', ['navigate']);

        TestBed.configureTestingModule({
            declarations: [LoginFormComponent],
            imports:[FormsModule],
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

        component.model.username = "test";
        component.model.password = "test";

        component.auth();

        const spy = routerSpy.navigate as jasmine.Spy;

        const navArgs = spy.calls.first().args[0];

        expect(navArgs[0]).toBe("/home");;
    
    });
    
});