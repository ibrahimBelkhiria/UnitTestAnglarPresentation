import {inject, TestBed} from '@angular/core/testing';
import {HeroService} from './hero.service';
import {MessageService} from './message.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('test the hero service ',()=>{
  let MockMessageServ;
  //  this is a service  from angular to help test the http requestes
  let httpTestingcontorller: HttpTestingController;
  let service:HeroService;

    beforeEach(()=>{

    MockMessageServ = jasmine.createSpyObj(['add']);

      TestBed.configureTestingModule({
          imports:[HttpClientTestingModule],
          providers:[HeroService,{provide:MessageService,useValue:MockMessageServ}]

      });

      // inject required services
    httpTestingcontorller = TestBed.get(HttpTestingController);
     service = TestBed.get(HeroService);


    });

    describe('get hero method ',()=>{

      it('it should call get with the correct url ',()=>{

        service.getHero(4).subscribe();

        /*
          service.getHero(3).subscribe();
        */
        const req = httpTestingcontorller.expectOne('api/heroes/4');
          //  expect the returned body to be ..
          req.flush({id:4,name:'superDude',strength:100});

          //  verify the call
        httpTestingcontorller.verify();
      });


    });








});
