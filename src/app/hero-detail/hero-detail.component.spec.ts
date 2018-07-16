import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs/observable/of';
import {Location} from '@angular/common';
import {FormsModule} from '@angular/forms';


describe('test the hero detail component',()=>{

  let mockActivatedRoute;
  let mockHeroService;
  let mockLocation;
    let fixture : ComponentFixture<HeroDetailComponent>;

  beforeEach(()=>{
    mockHeroService = jasmine.createSpyObj(['getHero','updateHero']);
    mockLocation = jasmine.createSpyObj(['back']);
    mockActivatedRoute =
      {
        snapshot:{
        paramMap:{
          get:()=>{ return '3'}
        }
      }
      };


        TestBed.configureTestingModule({
          imports : [FormsModule],
          declarations:[HeroDetailComponent],
          providers : [
            {provide:HeroService,useValue:mockHeroService},
            {provide:Location,useValue:mockLocation},
            {provide:ActivatedRoute,useValue:mockActivatedRoute}
            ]


        });

      fixture = TestBed.createComponent(HeroDetailComponent);
      mockHeroService.getHero.and.returnValue(of({id:3,name:'superDude',strength:100}));
  });


  it('should render the hero name in h2 tag',()=>{

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('h2').textContent ).toContain('SUPERDUDE');

  })



});
