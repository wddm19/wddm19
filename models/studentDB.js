const student =
{

    fakeDB : [],

    init()
    {

        this.fakeDB.push({
            name: `Maftuna`,
            program: `WDDM-f19`,
            photo:'../img/maftuna.png',
            intro:`Experienced graphic designer and web developer with a demonstrated history of working in information technology.`,
            skills: `HTML`
        });
    
        this.fakeDB.push({
            name: `Clara`,
            program: `WDDM-f19`,
            photo:'../img/golden.jpg',
            intro:`Detail oriented web developer with years of experience in Web UI and Front-end development.`,
            skills: `skills`
        });

        this.fakeDB.push({
            name: `Hailey`,
            program: `WDDM-f19`,
            photo:'../img/hailey.png',
            intro:`A new graduate, currently furthering my studies in UI/UX and Front-end development.`,
            skills: `skills`
        });
    },
    getallStudent()
    {
        return this.fakeDB;
    }

}


student.init();
module.exports=student;