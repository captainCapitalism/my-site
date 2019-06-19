import {ArticleProps} from '../Article/Article';
import ids from './main-ids';

const aboutMe0: ArticleProps = {
  id: ids.about0,
  hContent: 'Abuot me',
  paragraphs:[{
    key: 'p0',
    content: `I believe I am creator. //a creator.or the, if you think you're God
    Not a programmer nor a software developer. //neither nor
    I think that because more than spending time in front of keyboard, 
    I enjoy making things.`
    
  } , {
    key: 'p1',
    content:   `However, one often needs expensive tools or expandable materials that he 
    makes objects with. It is difficult to move them around and to share the 
    result with others.
    To program one is only required to possess computer and Internet access 
    which both are pretty common to have.`
 
  } , {
    key: 'p2',
    content: `That is why I find creating software more convenient for me. Developer 
    still needs to have professional expertise as well as to put time and 
    effort to achieve quality work; however, I greatly enjoy tinkering, 
    solving problems and learning new concepts which allow me to learn 
    quickly and achieve results.`
  }]
};

export default aboutMe0;