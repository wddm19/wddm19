
  const student = [
    {
        id: 100,
        image: `/img/student.jpg`,
        name: `Clara`,
        lastname: `Khast`,
        title: `Front-End Developer & UX/UI Designer`,
        description: `I’m a junior front-end developer with a good understanding of web design. I am willing to expand my knowledge in
        web development to become a full-stack developer. I stay updated on all of the technologies associated with this
        industry and have the ability to adhere to all rules and coding standards set forth by management. I also have a
        great social and self-management skills which gives me the ability to work both in groups and alone.`,
        skills: [`UI/UX Design`, `Front-End Development`, `Graphic Design`, `Back-End Development`],
        email:`clarakhast@gmail.com`,
        tel:`647-111-1111`,
    },
    {
        id: 101,
        image: `/img/Hailey.png`,
        name: `Hailey`,
        lastname: `Koo`,
        title: `Front-End Developer & UX/UI Designer`,
        description: `A new graduate, currently furthering my studies in UI/UX and Front-end development. I am willing to expand my knowledge in
        web development to become a full-stack developer. I stay updated on all of the technologies associated with this
        industry and have the ability to adhere to all rules and coding standards set forth by management. I also have a
        great social and self-management skills which gives me the ability to work both in groups and alone.`,
        skills: [`UI/UX Design`, `Front-End Development`, `Graphic Design`, `Back-End Development`],
        email:`haileykwon8@gmail.com`,
        tel:`647-111-1111`,
    },
    {
        id:102,
        image: `/img/maftuna.png`,
        name: `Maftuna`,
        lastname: `Kh`,
        title: `Web Developer & Graphic Designer`,
        description: `Experienced graphic designer and web developer with a demonstrated history of working in information technology. I stay updated on all of the technologies associated with this
        industry and have the ability to adhere to all rules and coding standards set forth by management. I also have a
        great social and self-management skills which gives me the ability to work both in groups and alone.`,
        skills: [`UI/UX Design`, `Front-End Development`, `Graphic Design`, `Back-End Development`],
        email:`kh.maftu@gmail.com`,
        tel:`647-111-1111`,
    }
]

const studentBtn = event => {
    let students;
    if (window.location.pathname.slice(2,6) == `clara`) {
        students = student.filter(student => student.name == `Clara`);
    } else if (window.location.pathname.slice(2,8) == `maftuna`) {
        students =student.filter(student => student.name == `Maftuna`);
    } else if (window.location.pathname.slice(2,7) == `hailey`) {
        students = student.filter(student => student.name == `Hailey`);
    } else {
      return;
    }
    renderItemsFromArray(students);
}

const getItemsAsHtmlString = student => {

    return `
    <section id="home">
    <div class="intro-container">
        <div class="intro-text">
            <h1>i<span class="green">'</span>m <br>${student.name}<br>${student.lastname}<span class="green">&bull;</span></h1>
            <p>${student.title}</p>
        </div>
    </div>
</section>

<section id="about" class="about">
<div class="about-wrapper">
<div class="profile-smallimg"><div class="profile__image"><img src="${student.image}"></div></div>

    <p>${student.description} </p>
    <input type="button" value="Download resume">
    </div>
</section>

<section id="skills" class="clearfix">
    <section id="skill" class="skills">
        <h3><span class="number">01</span> my skills</h3>
        <p>My knowledge level in web development</p>
    
      <ul class="skills-list">
      <li class="skill-percentage">${student.skills[0]}</li>
      <li class="skill-percentage">${student.skills[1]}</li>
      <li class="skill-percentage">${student.skills[2]}</li>
      <li class="skill-percentage">${student.skills[3]}</li>
    </ul>

    </section>
</section>

<section id="portfolio" class="skills">
    <h3><span class="number">02</span> portfolio</h3>
    <p>some of my projects</p>

    <ul class="img-list">
        <li>
            <a href="#" target="_blank">
                <img src="img/1.jpg" width="230" height="220" />
                <span class="text-content"><span>Travel Blog</span></span>
            </a>
        </li>

        <li>
            <a href="#" target="_blank">
                <img src="img/3.jpg" width="230" height="220" />
                <span class="text-content"><span>E-Commerce</span></span>
            </a>
        </li>

        <li>
            <a href="#" target="_blank">
                <img src="img/student.jpg" width="230" height="220" />
                <span class="text-content"><span>WebStore</span></span>
            </a>
        </li>

        <li>
            <a href="#" target="_blank">
                <img src="img/7.jpg" width="230" height="220" />
                <span class="text-content"><span>Profit Calculator</span></span>
            </a>
        </li>


    </ul>
</section>

<section id="timeline">
      <h3><span class="number">03</span> Experience</h3>
      <ul>
        <li>
          <div>
            <time>MAY-SEP 2014</time>
            <h4 class="company">KTE.CO</h4> 
            <p class="title">Frontend Developer</p>
            <p class="description">During my internship, I had a chance to learn about some of the most popular web technologies and develop functional websites based on usability, as a part of team. I was able to achieve a proficient understanding of web markup (HTML5 & CSS3) , client-side scripting and JavaScript frameworks (jQuery).</p>
          </div>
        </li>
        <li>
          <div>
            <time>MAY-SEP 2015</time>
            <h4 class="company">KTE.CO</h4> 
            <p class="title">Web Designer and Frontend Developer</p>
            <p class="description">I was introduced to web designing during this internship and I was able to design a webpage layout, edit and write some of the contents using Photoshop. I was also responsible for assisting with coding and troubleshooting.</p>
          </div>
        </li>
        <li>
          <div>
            <time>2011 - 2016</time>
            <h4 class="company">Metropolia Uas</h4> 
            <p class="title">Student</p>
            <p class="description">Studying for Bachelor degree of Information Technology. Through my studies and personal projects, I had the opportunity of learning some of the most popular web technologies.</p>
          </div>
        </li>
      </ul>
    </section>

    <section id="contact">
      <div id="intro">
        <h2>contact</h2>
        <p>I'm available fo freelance. If you have a project that I can help you with or you are interested in working together contact me right now. </p><br>
        <p>${student.email} <br>Tel: ${student.tel}</p>
      </div>

      <form id="contact_form">
        <input type="text" placeholder="Name" id="name" name="name">
        <input type="email" placeholder="Email" name="email" id="email">
        <input type="text" placeholder="Subject" id="subject" name="subject"> 
        <textarea placeholder="Message" name="message" id="message"></textarea>
        <input type="submit" value="Send" id='send_message'>
        </p>
      </form>
    </section>

    <section id="last-section">
      <div></div>
    </section>

   `;
}

const renderItemsFromArray = arr => {
    if (arr.length > 0) {
        document.getElementById('student-info').innerHTML = arr.map(getItemsAsHtmlString).join('\n');
    } else {
        return;
    }}

window.addEventListener('load', () => {
    document.getElementById('student').addEventListener('click', studentBtn);
    renderItemsFromArray(student);
});