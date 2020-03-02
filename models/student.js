const course =
{

    fakeDB : [],

    init()
    {

        this.fakeDB.push({
            id: `WDDM-122`,
            title: `Famworks`,
            classDay:'Mondays',
            startTime:`11:35`,
            endTime: `14:20`,
            assignments: `assignment1`,
            deadline: `March 8th`,
            taskDescription: `www.google.com`,
            grade: '',
            dateGraded: ``,
        });
    
        this.fakeDB.push({
            id: `WDDM-123`,
            title: `Programming`,
            classDay:'Tuesdays',
            startTime:`14:20`,
            endTime: `18:00`,
            assignments: `assignment1`,
            deadline: `March 8th`,
            taskDescription: `www.google.com`,
            grade: '',
            dateGraded: ``,
        });

        this.fakeDB.push({
            id: `WDDM-124`,
            title: `Design`,
            classDay:'Wednesdays',
            startTime:`11:35`,
            endTime: `14:20`,
            assignments: `assignment1`,
            deadline: `March 8th`,
            taskDescription: `www.google.com`,
            grade: '',
            dateGraded: ``,
        });
    
        this. fakeDB.push({
            id: `WDDM-125`,
            title: `Portfolio`,
            classDay:'Thursdays',
            startTime:`11:35`,
            endTime: `14:20`,
            assignments: `assignment1`,
            deadline: `March 8th`,
            taskDescription: `www.google.com`,
            grade: '',
            dateGraded: ``,
        });
    },
    getallCourses()
    {
        return this.fakeDB;
    }

}


course.init();
module.exports=course;