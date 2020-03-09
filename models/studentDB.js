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
            skills: `Web Design with HTML & CSS`,
            detailsURL: `/maftuna`,
            interest: `Travel`, 
            education: `Humber College`,
            experience: `Worked as a graphic designer for 3 years`,
            git: `https://github.com/maftuna-cs`,
            website: `https://github.com/maftuna-cs`,
            call: `647-111-1111`,
            mail: `kh.maftu@gmail.com`,
            location: `Toronto,CA`
        });
    
        this.fakeDB.push({
            name: `Clara`,
            program: `WDDM-f19`,
            photo:'../img/golden.jpg',
            intro:`Detail oriented web developer with years of experience in Web UI and Front-end development.`,
            skills: `Front-end development`,
            detailsURL: `/clara`,
            interest: `Photography`, 
            education: `Humber College`,
            experience: `Worked as a front-end developer for 3 years`,
            git: `https://github.com/clarakhast`,
            website: `https://github.com/clarakhast`,
            call: `647-111-1111`,
            mail: `khast.negar@gmail.com`,
            location: `Toronto,CA`
        });

        this.fakeDB.push({
            name: `Hailey`,
            program: `WDDM-f19`,
            photo:'../img/hailey.png',
            intro:`A new graduate, currently furthering my studies in UI/UX and Front-end development.`,
            skills: `UI/UX design`,
            detailsURL: `/hailey`,
            interest: `Drawing`, 
            education: `Humber College`,
            experience: `Worked as service planner for 1 year`,
            git: `https://github.com/haileykoo`,
            website: `file:///Users/hailey/Desktop/Hailey_Koo-resume.pdf`,
            call: `647-111-1111`,
            mail: `haileykwon8@gmail.com`,
            location: `Toronto,CA`
        });
    },
    getallStudent()
    {
        return this.fakeDB;
    }

}


student.init();
module.exports=student;