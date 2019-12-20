import { Component, OnInit } from '@angular/core';
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  faCloudDownloadAlt = faCloudDownloadAlt;
  faHeart = faHeart;
  faStar = faStar;

  constructor() { }

  ngOnInit() {
  }
  
  listArticle = [
    {
    id: '0001',
    author: 'Jane Paul',
    tags: 2,
    title: 'The Top 5 Programming languages Every Software Developer Should Learn',
    description: 'I have read somewhere that a programmer should learn a new programming language every year',
    text: "<p>I have read somewhere that a programmer should learn a new programming language every year ( I think it\'s code complete, not sure, though), but if you cannot do so, I suggest to at least learn following five programming language to do well in your career\.<\p><p>Every company loves a polyglot programmer and an all-rounder who is versatile enough to write a quick script and can also write complex Java programs. In fact, it\'s almost mandatory for a senior developer to learn more than one language.</p><p>Interviewers are giving more attention to an engineer who has good experience with multiple languages like C++ and Java goes quite well, so is Python and Java.</p><p>I personally like Software Engineers who have strong experience in either C++ or Java and can write scripts in Groovy, Perl, or Python.</p>",
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8-IT5bvfMBFnNy1pHDXhtdP3tg5ttGVbSSkpHWfN35ag5f9y&s',
    image: 'http://richinvest.biz/wp-content/uploads/2016/01/red-rounded-with-number-5-md.png',
    createdAt: '2019-12-02',
    updatedAt: '2019-12-09',
    likes: 5,
    stars: 0,
    uni: 0,
    comments: '[CommentSchema.schema]'
    },
    {
      id: '0002',
      author: 'Kate Smit',
      tags: 2,
      title: '10 Tools Used by Java Programmers in Day to day life',
      description: 'Every trade has its tools, and Java programming is no exception.',
      text: "Every trade has its tools, and Java programming is no exception. In fact, good knowledge of tools and mastery of using them saves a lot of time in design, development, testing, debugging, and troubleshooting any production issue. To become a good developer, you must know the right tools for the right jobs. A developer without tools and tricks is like a toothless lion; hence you must devote some time to learning tools required for your day to day job. Many developers think that learning an IDE like Eclipse, NetBeans, or IntelliJ IDEA is enough, but that's just the start of the process. No doubt that IDEs are the most important tool ever created for programmers, but they are not the solution for everything.",
      photo: 'https://www.eyefaceandbody.com/wp-content/themes/eye-face-and-body-theme/images/face-lift.jpg',
      
      image: 'https://s.dou.ua/img/announces/java8_zOfLHJC.png',
      createdAt: '2019-03-01',
      updatedAt: '2019-03-01',
      likes: 100,
      stars: 2,
      uni: 0,
      comments: '[CommentSchema.schema]'
    },
    {
      id: '0003',
      author: 'Paul white',
      tags: 2,
      title: 'Top 3 Programming Languages Java Developers Can Learn in 2020',
      description: 'If you are a Java programmer and thinking to learn some news programming languages',
      text: "If you are a Java programmer and thinking to learn some news programming languages to expand your knowledge and skill, but not sure which programming language is better for you then you have come to the right place. In this article, I'll share 3 programming languages Java developers should learn in 2020 and why they should learn them. There is no surprise that all of these programming languages are JVM based programming languages but they all have different qualities which makes them unique and useful for a certain task. Also, being a Polyglot developer is good quality and often valued high on interviews. It also expands your thinking because different programming languages have different features which make certain things really easy.",
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKb9PgHMU0ovkhUNavsfHwRZBFn9TQgBFK6nfdvmZlxaiajz2cwQ&s',
      image: 'https://nortsov.vn.ua/wp-content/uploads/2018/05/home-slide-1.jpg',
      createdAt: '2019-06-02',
      updatedAt: '2019-06-29',
      likes: 10,
      stars: 10,
      uni: 0,
      comments: '[CommentSchema.schema]'
    }
  ]  
 
  
  


}
