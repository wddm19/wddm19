const student =
{

    fakeDB : [],

    init()
    {

        this.fakeDB.push({
            name: `Maftuna`,
            program: `WDDM-f19`,
            photo:'../img/maftuna.png',
            intro:`Experienced Graphic & UI designer with a demonstrated history of working in information technology.`,
            detailsURL: `/maftuna`,
            interest: `Travel`, 
            education: `Humber College`,
            experience: `Worked as a graphic designer for 3 years`,
            git: `https://github.com/maftuna-cs`,
            website: `https://github.com/maftuna-cs`,
            call: `647-111-1111`,
            mail: `kh.maftu@gmail.com`,
            location: `Toronto,CA`,
            lastname: `Kh`,
            title: `UI/UX, Graphic Designer & Front-end developer`,
            description: `Experienced Graphic & UI/UX designer with a demonstrated history of working in Information Technology. Currently expanding my knowledge in Web Design & Development. 
            I stay updated on all of the technologies associated with this
            industry and have the ability to adhere to all rules and coding standards set forth by management. I also have a
            great social and self-management skills which gives me the ability to work both in groups and alone.`,
            skills: [`UI/UX Design`, `Front-End Development`, `Graphic Design`, `Back-End Development`]
        });
    
        this.fakeDB.push({
            name: `Clara`,
            program: `WDDM-f19`,
            photo:'../img/golden.jpg',
            intro:`Detail oriented web developer with years of experience in Web UI and Front-end development.`,
            detailsURL: `/clara`,
            interest: `Photography`, 
            education: `Humber College`,
            experience: `Worked as a front-end developer for 3 years`,
            git: `https://github.com/clarakhast`,
            website: `https://github.com/clarakhast`,
            call: `647-111-1111`,
            mail: `khast.negar@gmail.com`,
            location: `Toronto,CA`,
            lastname: `Khast`,
            title: `Front-End Developer & UX/UI Designer`,
            description: `I’m a junior front-end developer with a good understanding of web design. I am willing to expand my knowledge in
            web development to become a full-stack developer. I stay updated on all of the technologies associated with this
            industry and have the ability to adhere to all rules and coding standards set forth by management. I also have a
            great social and self-management skills which gives me the ability to work both in groups and alone.`,
            skills: [`UI/UX Design`, `Front-End Development`, `Graphic Design`, `Back-End Development`]
        });

        this.fakeDB.push({
            name: `Hailey`,
            program: `WDDM-f19`,
            photo:'../img/hailey.png',
            intro:`A new graduate, currently furthering my studies in UI/UX and Front-end development.`,
            detailsURL: `/hailey`,
            interest: `Drawing`, 
            education: `Humber College`,
            experience: `Worked as service planner for 1 year`,
            git: `https://github.com/haileykoo`,
            website: `file:///Users/hailey/Desktop/Hailey_Koo-resume.pdf`,
            call: `647-111-1111`,
            mail: `haileykwon8@gmail.com`,
            location: `Toronto,CA`,
            lastname: `Koo`,
            title: `Front-End Developer & UX/UI Designer`,
            description: `A new graduate, currently furthering my studies in UI/UX and Front-end development. I am willing to expand my knowledge in
            web development to become a full-stack developer. I stay updated on all of the technologies associated with this
            industry and have the ability to adhere to all rules and coding standards set forth by management. I also have a
            great social and self-management skills which gives me the ability to work both in groups and alone.`,
            skills: [`UI/UX Design`, `Front-End Development`, `Graphic Design`, `Back-End Development`]
        });
    },
    getallStudent()
    {
        return this.fakeDB;
    },

    getStudentData(studentName){ // this returns a specific user
        return this.fakeDB.filter(data => data.name == studentName);
    }

}


student.init();
module.exports=student;