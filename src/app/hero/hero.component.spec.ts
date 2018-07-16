import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";


describe('test hero component',()=>{

  // fixture a wrapper for a Component with extra methods for testing
  // classe generique qui prend le component qu'on veut tester
        let fixture:ComponentFixture<HeroComponent>;
    beforeEach(()=>{
        TestBed.configureTestingModule({
               declarations:[HeroComponent],
              // to ignore template errors (unknown attributes) in this case routerlink for example
               schemas:[NO_ERRORS_SCHEMA]


        });

         fixture = TestBed.createComponent(HeroComponent) ;



    });

    it('should have the right hero',()=>{
            fixture.componentInstance.hero = {id:1,name:'dude',strength:15};

           expect(fixture.componentInstance.hero.name).toEqual('dude');

    });

    it('should render the hero name in anchor tag ',()=>{
      fixture.componentInstance.hero = {id:1,name:'dude',strength:15};
      // apply changes to the fixture component
      fixture.detectChanges();
      // nativeElement  is like the dom in javascript
      expect(fixture.nativeElement.querySelector('a').textContent).toContain('dude');

    });



});
