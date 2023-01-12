import Bacardi from '../images/Bacardi.webp';
import Daiqiri from '../images/Daiqiri.jpeg';
import GreyGoose from '../images/GreyGoose.jpeg';
import Jagermeister from '../images/Jagermeister.jpeg';
import Licor43 from '../images/Licor43.jpeg';
import Limoncello from '../images/Limoncello.jpeg';
import MoscowMule from '../images/MoscowMule.webp';
import Negroni from '../images/Negroni.jpeg';
import OldFashioned from '../images/OldFashioned.jpeg';
import PinaColada from '../images/PinaColada.jpeg';
import Soju from '../images/Soju.jpeg';

const info = [
  {
    category: 'cocktails',
    drinks: [
      {
        name: 'Negroni',
        image: Negroni,
        category: 'cocktails',
      },
      {
        name: 'Daiquiri',
        image: Daiqiri,
        category: 'cocktails',
      },
      {
        name: 'Old Fashioned',
        image: OldFashioned,
        category: 'cocktails',
      },
      {
        name: 'Piña Colada',
        image: PinaColada,
        category: 'cocktails',
      },
      {
        name: 'Moscow Mule',
        image: MoscowMule,
        category: 'cocktails',
      },
    ],
  },
  {
    category: 'spirits',
    drinks: [
      {
        name: 'Grey Goose',
        image: GreyGoose,
        category: 'spirits',
      },
      {
        name: 'Bacardi',
        image: Bacardi,
        category: 'spirits',
      },
      {
        name: 'Chum Churum Soju',
        image: Soju,
        category: 'spirits',
      },
    ],
  },
  {
    category: 'liqueurs',
    drinks: [
      {
        name: 'Jägermeister',
        image: Jagermeister,
        category: 'liqueurs',
      },
      {
        name: 'Licor 43',
        image: Licor43,
        category: 'liqueurs',
      },
      {
        name: 'Russo Limoncello',
        image: Limoncello,
        category: 'liqueurs',
      },
    ],
  },
];

export default info;
