import { StrengthPipe } from "./strength.pipe";

// add f if you want to run just this test or x if you want to ignore it 
describe('stren pipe',()=>{

  let pipeInstance: StrengthPipe;
  beforeEach(()=>{
      pipeInstance = new StrengthPipe();
  });

  it('if value less than 10 should return weak',()=>{
      let value =5;
       expect(pipeInstance.transform(value)).toContain('weak');


  })



});



