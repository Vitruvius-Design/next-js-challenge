import { screen, render } from '@testing-library/react'
import BooksList from '../BooksList'

const Dummy = ({ books }: { books: Array<Object> }) => {
  return <BooksList books={books} />
}

describe('BooksList', () => {
  const books = [
    {
      key: '/works/OL5735363W',
      title: 'The Hunger Games',
      publish_date: [
        '2009-09',
        '2008',
        '2009',
        '2010-05',
        '2013-10',
        '2013-12-04',
        'Feb 04, 2013',
        'Jun 04, 2015',
        'Oct 29, 2009',
        'Apr 28, 2012',
        'May 05, 2010',
        '2011',
        '2012-02',
        'Nov 02, 2009',
        '2014',
        'Dec 01, 2018',
        '2008-09-14',
        '2008-10',
        'Oct 18, 2015',
        'Sep 30, 2014',
        '2010',
        '2012-03',
        '2012-06-04',
        'Feb 07, 2012',
        'Sep 25, 2016',
        'Mar 16, 2012',
        'Nov 10, 2021',
        '2012-04',
        'Nov 06, 2014',
        '2018',
        '2012',
        'May 05, 2009',
        'Oct 30, 2018',
        'May 20, 2020',
        'May 10, 2009',
        '2015',
        'Mar 17, 2008',
        'Mar 07, 2009',
        '2011-04',
        '2019',
        'Mar 01, 2012',
        'May 14, 2013',
        'Nov 01, 2018',
        '2012-10',
        '2012?',
        '2012-Feb-20',
        '2013',
        '2022',
        '2010?',
        'Nov 10, 2014',
        'May 01, 2009',
      ],
      isbn: [
        '9789876091657',
        '1407153331',
        '0545114071',
        '8499327974',
        '4840146314',
        '9876091654',
        '9788804716709',
        '9780545091022',
        '9786055943639',
        '9783789132186',
        '140712904X',
        '140711168X',
        '140719223X',
        '9781407157863',
        '9787506351539',
        '8427225180',
        '9781407192239',
        '5271257940',
        '9782266305754',
        '9782298027259',
        '9781407132082',
        '6073807848',
        '2266182692',
        '9788372783578',
        '9780545791878',
        '9781407136189',
        '9780606262286',
        '9789810844516',
        '6074001901',
        '9788498675399',
        '9788499327976',
        '1407139797',
        '9785271415203',
        '9788427202122',
        '9781407129037',
        '9780545452397',
        '9781407139791',
        '1987156587',
        '9781407196183',
        '8427202121',
        '9786074001907',
        '0545791871',
        '9781407111681',
        '9781407133171',
        '9781407135281',
        '8498680611',
        '9781407109084',
        '0545405777',
        '9780545114073',
        '9781742835754',
        '054531058X',
        '9780439023481',
        '9862131365',
        '9789351035961',
        '9781606865811',
        '9781407132075',
        '8372783578',
        '9788579800245',
        '9789862131367',
        '2298027250',
        '9788804632238',
        '1536425516',
        '0545229936',
        '9788498680614',
        '1407157868',
        '6050929998',
        '1743629850',
        '9782266257220',
        '1407132083',
        '9788372786371',
        '9781743629857',
        '1407196189',
        '9786073807845',
        '3841501346',
        '9783125781535',
        '1407188933',
        '8579800242',
        '0545471044',
        '4840146322',
        '5271415201',
        '1742835759',
        '8498675391',
        '9351035964',
        '9781407153339',
        '1594135878',
        '9780545471046',
        '1417831731',
        '9785271257940',
        '9810844514',
        '1407136186',
        '9780545425117',
        '9784840146326',
        '0545626382',
        '7506351536',
        '9781484476826',
        '818477169X',
        '9781627656368',
        '1338334921',
        '1407192086',
        '1407135287',
        '2266257226',
        '9781407191294',
        '9781594135873',
        '0545452392',
        '9782266260770',
        '9782266182690',
        '9781411471047',
        '9781760662103',
        '9781417831739',
        '9780545626385',
        '1407191292',
        '9781987156584',
        '9780545405775',
        '9788804594109',
        '1760662100',
        '0439023483',
        '9780545310581',
        '9788804672623',
        '9780545229937',
        '3125781531',
        '9781338321913',
        '141041986X',
        '1338321919',
        '0439023521',
        '0606262288',
        '1407109081',
        '1484476824',
        '1407132075',
        '8804672625',
        '8804716703',
        '2266305751',
        '9781407192086',
        '1606865811',
        '9781407188935',
        '6055943638',
        '9784840146319',
        '0545425115',
        '8804594101',
        '1627656367',
        '9781407129044',
        '9781338334920',
        '9788427225183',
        '8804632232',
        '0545091020',
        '3789132187',
        '9781410419866',
        '9780439023528',
        '1407133179',
        '2266260774',
        '9781536425512',
        '9786050929997',
        '9783841501349',
        '8372786372',
        '9788184771695',
        '1407129031',
        '1411471040',
      ],
      ratings_average: 4.0823865,
      ratings_count: 352,
      first_sentence: ['When I wake up, the other side of the bed is cold.'],
      publisher: [
        'scholastic audiobooks',
        'Mediafakutorī',
        'RBA',
        'Large Print Press',
        'Sterling Publishing Co., Inc.',
        'Scholastic Singapore',
        'Astrelʹ',
        'Oetinger Taschenbuch',
        'Mondadori',
        'Oceano Travesía',
        'Turtleback',
        'Penguin Random House Grupo Editorial',
        'Klett Sprachen GmbH',
        'Rocco Jovens Leitores',
        'Scholastic India',
        'Scholastic Inc.',
        'Thorndike Press',
        'Scholastic Inc',
        'Scholastic Corporation',
        'Pegasus',
        'Lectorum Publications, Incorporated',
        'Pocket',
        'Da kuai wen hua chu ban gu fen you xian gong si',
        'Perfection Learning',
        'Alberdania',
        'Zuo jia chu ban she',
        'French and European Publications Inc',
        'NUEVO EXTREMO',
        'Molino',
        'Dex Yayinevi',
        'Scholastic India Pvt. Ltd.',
        'ACT',
        'Scholastic Audio Books',
        'Da Kuai Wen Hua/ Tsai Fong Books',
        'Oetinger Friedrich GmbH',
        'Media Rodzina',
        'carlo moscatiello ',
        'Scholastic',
        'Pocket Jeunesse',
        'CreateSpace Independent Publishing Platform',
        'Scholastic Press',
        'Scholastic Australia',
        'Oceano Travesía',
        'Scholastic, Incorporated',
        'Scholastic Audio',
        'Éd. France loisirs',
        'POCKET JEUNESSE',
        'AST',
        'Editions France Loisirs',
        'Oetinger Tasenbuch',
        'Círculo de Lectores',
        "Scholastic Children's Books",
        'Estrella Polar',
      ],
      language: ['eng', 'spa', 'swe', 'fre', 'chi', 'pol', 'ger', 'jpn', 'rus'],
      author_key: ['OL1394359A'],
      author_name: ['Suzanne Collins'],
      person: [
        'Katniss Everdeen',
        'Peeta Mellark',
        'Gale Hawthorne',
        'Elmo',
        'President Snow',
        'Primrose Everdeen',
        'Effie',
        'Haymitch Abernathy',
        'Cinna',
        'Effie Trincket',
        'Rue',
        'Cato',
        'Foxface',
        'Clove',
        'Thresh',
        'Madge Undersee',
        'Mayor Undersee',
        'Venia',
        'Flavius',
        'Octavia',
        'Atala',
        'Glimmer',
        'Caesar Flickerman',
        'Claudius Templesmith',
        'Gamemakers',
        'Peacekeepers',
      ],
      place: [
        'Panem',
        'The Capitol',
        'The Pentagon',
        'District 12',
        'The nation of Panem and District 12',
      ],
      subject: [
        'severe poverty',
        'starvation',
        'oppression',
        'effects of war',
        'self-sacrifice',
        'Science fiction',
        'Apocalyptic fiction',
        'Dystopian fiction',
        'Fiction',
        'Juvenile works',
        'Novels',
        'Young adult works',
        'Juvenile fiction',
        'contensts',
        'Young adult fiction',
        'Game shows',
        'Television programs',
        'New York Times bestseller',
        'Contests',
        'nyt:series_books=2010-08-21',
        'Long Now Manual for Civilization',
        'Reality television programs',
        'Television game shows',
        'Survival',
        'Interpersonal relations',
        'Roman',
        'Amerikanisches Englisch',
        'Sisters',
        'Young women',
        'Dystopias',
        'Survival skills',
        'Blind',
        'Books and reading',
        'Reading Level-Grade 9',
        'Reading Level-Grade 8',
        'Reading Level-Grade 11',
        'Reading Level-Grade 10',
        'Reading Level-Grade 12',
        'Survival Stories',
        'Action & Adventure',
        "Children's fiction",
        'Survival, fiction',
        'Interpersonal relations, fiction',
        'Contests, fiction',
        'Television, fiction',
        'Large type book',
        'Future',
        'violent',
        'life risking',
        'bravery.',
        'Roman pour jeunes adultes',
        'Habiletés de survie',
        "Roman d'aventures",
        'Concours et compétitions',
        'Relations humaines',
        'Romans, nouvelles',
        'Émissions televiseés',
        'Spanish language materials',
        'Supervivencia',
        'Novela juvenil',
        'Relaciones humanas',
        'Programas de televisión',
        'Concursos',
        'Fantastische Erzahlung',
        'Fantastische Literatur',
        'Action and adventure fiction',
        'Contests Fiction',
        'Fictional Work',
        'Interpersonal relations Fiction',
        'Jeux télévisés Romans, nouvelles, etc. pour la jeunesse',
        'Reality television programs Fiction',
        'Reality television programs Juvenile fiction',
        'Romans',
        'Survival Fiction',
        'Survival skills Fiction',
        'Television game shows Juvenile fiction',
        'Television programs Fiction',
        'Émissions télévisées',
        'Novela',
        'Televisión',
        'Programas',
        'Competencias',
        'American fiction',
        'Translations into Chinese',
        'Chinese language materials',
        'Romans, nouvelles, etc. pour la jeunesse',
        'Literature and fiction, juvenile',
        'Short stories',
        'Fantasy fiction',
        'American literature, study and teaching',
        'Severe poverty',
        'Starvation',
        'Oppression',
        'Effects of war',
        'Self-sacrifice',
        'Contensts',
        'New york times bestseller',
        'Nyt:series_books=2010-08-21',
        'Long now manual for civilization',
        'Amerikanisches englisch',
        'Reading level-grade 9',
        'Reading level-grade 8',
        'Reading level-grade 11',
        'Reading level-grade 10',
        'Reading level-grade 12',
        'Survival stories',
        'Action & adventure',
        'Violent',
        'Life risking',
        'Bravery.',
      ],
      editions: {
        numFound: 79,
        start: 0,
        numFoundExact: true,
        docs: [
          {
            key: '/book/OL37079411M',
            title: 'The Hunger Games',
            language: ['eng'],
            publisher: ['Scholastic Press'],
            publish_date: ['2008-10'],
            isbn: ['9780439023481', '0439023483'],
          },
        ],
      },
    },
  ]
  it('should render the list of books if there are books', () => {
    render(<Dummy books={books} />)
    expect(screen.getByTestId('books-list-container')).toBeInTheDocument()
  })
  it('should not render the list if there are no book and show a message', () => {
    render(<Dummy books={[]} />)
    expect(screen.getByTestId('no-book-message')).toBeInTheDocument()
  })
})