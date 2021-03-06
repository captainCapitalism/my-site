import { FancyBoxContainerProps } from '../FancyBox/FancyBoxContainer'
import { FancyBoxProps } from '../FancyBox/FancyBox'
import ids from './main-ids';

const logoData = {
  js: {
      color: '#f7df1e',
      img: 'logos/js.png' 
  },
  css: {
      color: '#2062af',
      img: 'logos/css.png'
  },
  git: {
      color: '#f05033',
      img: 'logos/git.png'
  },
  html: { 
      color: '#e44d26',
      img: 'logos/html.png'
  },
  mocha: {
      color: '#8d6748',
      img: 'logos/mocha.png'
  },
  mongo: {
      color: '#499d4a',
      img: 'logos/mongodb.png'
  },
  node: {
      color: '#4bae4f',
      img: 'logos/node.png'
  },
  react: {
      color: '#00d8ff',
      img: 'logos/react.png'
  },
  redux: {
      color: '#764abc',
      img: 'logos/redux.png'
  },
}


const fancyBoxes:Array<FancyBoxProps> = [
  {
    id: 'skill-js',
    backgroundImage: logoData.js.img,
    hiddenProps: {
      content: [
        'es6+', 
        'functional-style programming', 
        'jQuery',
      ],
      backgroundColor: logoData.js.color
    }
  } , 
  {
    id: 'skill-node',
    backgroundImage: logoData.node.img,
    hiddenProps: {
      content: [
        'express',
        'npm',
        'RESTful API',
      ],
      backgroundColor: logoData.node.color
    },
  } , 
  {
    id: 'skill-react',
    backgroundImage: logoData.react.img,
    hiddenProps: {
      content: [
        'functional, class based components', 
        'hooks',
      ],
      backgroundColor: logoData.react.color
    }
  } , 
  {
    id: 'skill-css',
    backgroundImage: logoData.css.img,
    hiddenProps: {
      content: [
        'CSS3', 
        'SCSS', 
        'Responsive Web Design',
      ],
      backgroundColor: logoData.css.color
    }
  } , 
  {
    id: 'skill-redux',
    backgroundImage: logoData.redux.img,
    hiddenProps: {
      content: [
        'usage with react',
      ],
      backgroundColor: logoData.redux.color
    }
  } , 
  // {
  //   id: 'skill-git',
  //   backgroundImage: logoData.git.img,
  //   hiddenProps: {
  //     content: [
  //       'github',
  //     ],
  //     backgroundColor: logoData.git.color
  //   }
  // } , 
  {
    id: 'skill-html',
    backgroundImage: logoData.html.img,
    hiddenProps: {
      content: [
        'semantic markup',
        'ejs', 
        'pug', 
      ],
      backgroundColor: logoData.html.color
    }
  } , 
  {
    id: 'skill-mocha',
    backgroundImage: logoData.mocha.img,
    hiddenProps: {
      content: [
        'chai', 
        'tdd', 
        'bdd', 
        'unit, integration, functional testing',
      ],
      backgroundColor: logoData.mocha.color
    }
  } , 
  // {
  //   id: 'skill-mongo',
  //   backgroundImage: logoData.mongo.img,
  //   hiddenProps: {
  //     content: [
  //       'integration with node',
  //     ],
  //     backgroundColor: logoData.mongo.color
  //   }
  // } ,
]

const skills: FancyBoxContainerProps = {
  id: ids.skills,
  fancyBoxes
}

export default skills