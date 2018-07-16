import { MessageService } from "./message.service";

describe('test message service ',()=>{

    let messageService :MessageService;


    beforeEach(()=>{
            messageService = new MessageService();

    });

        it('should contain no messages ',()=>{

            expect(messageService.messages.length).toBe(0);


        });

        it('lenngth should equal to 1',()=>{

            messageService.add('message1');
            expect(messageService.messages.length).toBe(1);


        })

});
