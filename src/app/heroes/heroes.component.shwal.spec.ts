
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import { of } from "rxjs/observable/of";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Hero} from '../hero';
import {HeroComponent} from '../hero/hero.component';
import {By} from '@angular/platform-browser';

describe('test heroes component',()=>{


    // fixture a wrapper for a Component with extra methods for testing
  // classe generique qui prend le component qu'on veut tester
  let fixture:ComponentFixture<HeroesComponent>;
  let MockService;
  let heroes;

  @Component({
    selector: 'app-hero',
    template: '<div>{{hero.name}}</div>',
  })
  class FakeHeroComponent {
    @Input() hero: Hero;
     //  @Output() delete = new EventEmitter();

  }
  beforeEach(()=>{
    heroes =[
      {id:1,name:'spider',strength:20},
      {id:2,name:'wonderful',strength:5},
      {id:3,name:'superdude',strength:40}


    ];
    // createSpyObj takes the service's methods that are called from the component
    MockService = jasmine.createSpyObj(['getHeroes','addHero','deleteHero']);
    //  this is equivalent to ngModule but for test
    TestBed.configureTestingModule({
      declarations:[HeroesComponent,FakeHeroComponent],
      providers:[{provide:HeroService,useValue:MockService}],
      // schemas: [NO_ERRORS_SCHEMA]


    }) ;
    fixture =  TestBed.createComponent(HeroesComponent);

  });

  it('should set heroes correctly from the service',()=>{

    // the result is an observable of heroes
    MockService.getHeroes.and.returnValue(of(heroes));
    fixture.detectChanges();
      expect(fixture.componentInstance.heroes.length).toBe(3);

  });

  it('should have the li',()=>{
    MockService.getHeroes.and.returnValue(of(heroes));
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(3);
  });


  it('should add a  new hero to the heroes list when the add button is clicked ',()=>{

    MockService.getHeroes.and.returnValue(of(heroes));
    fixture.detectChanges();


    const name ="Mr.Ice";
     MockService.addHero.and.returnValue(of({id:5,name:name,strength:11}));
    const inputElement =  fixture.debugElement.query(By.css('input')).nativeElement;
    const addButton = fixture.debugElement.queryAll(By.css('button'))[0];

    inputElement.value = name;
    console.log(inputElement.value);
    addButton.triggerEventHandler('click',null);

    fixture.detectChanges();


    const heroText = fixture.debugElement.query(By.css('ul')).nativeElement.textContent;

     console.log(heroText);
    expect(heroText).toContain(name);


  });


});
