const chai = require("chai");

const chaiHttp = require("chai-http");

const server = require("./app");

const should = chai.should();

chai.use(chaiHttp);

describe('....Enter the test.........', () => {
    it("shoudl Get / \n\n",(done)=>{
        chai.request(server)
        .get("/")
        .end((err,res)=>{
            if(err){
                done(err);
                process.exit(1);
            }else{
                res.body.meta.message.should.be.a("string");
            done();
            }
        })
    })
})
