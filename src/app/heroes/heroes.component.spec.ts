import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import { of } from "rxjs/observable/of";
import { NO_ERRORS_SCHEMA } from "@angular/compiler/src/core";

describe('test heroes component',()=>{

    let heroresComponent:HeroesComponent;
    let MockService;
    let heroes ;
    beforeEach(()=>{
      // initialisation avant chaque test
      heroes =[
        {id:1,name:'spider',strength:20},
        {id:2,name:'wonderful',strength:5},
        {id:3,name:'superman',strength:40}


      ];
        // createSpyObj takes the service's methods that are called from the component
        MockService = jasmine.createSpyObj(['getHeroes','addHero','deleteHero']);
        heroresComponent = new HeroesComponent(MockService);
    });

    it('should remove the indicated hero from the heroes list ',()=>{

          // assert that the result is an observable
      MockService.deleteHero.and.returnValue(of(true));
        heroresComponent.heroes = heroes;
        heroresComponent.delete(heroes[2]);
        expect(heroresComponent.heroes.length).toBe(2);

    });



});
