var SAMPLE_TEXT = 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt';
var SAMPLE_TEXT2 = 'Magni dolores eos qui ratione voluptatem sequi nesciunt';

var SAMPLE_COMMENT_LIST = [
  {
    title:'Jessica Jones', text: SAMPLE_TEXT, date: '1d', avatarUrl:'https://s3.amazonaws.com/uifaces/faces/twitter/nettatheninja/128.jpg'
  },
  {
    title:'James Milner', text: SAMPLE_TEXT2, date: '2d', avatarUrl:'https://s3.amazonaws.com/uifaces/faces/twitter/iannnnn/128.jpg'
  },
  {
    title:'Thrive Studio', text: SAMPLE_TEXT, date: '4d', avatarUrl:'https://s3.amazonaws.com/uifaces/faces/twitter/thrivesolo/128.jpg'

  }
];

var SAMPLE_COMMENT_LIST3 = [
  {
    title:'Green Systems Inc', text: SAMPLE_TEXT, date: '3d', avatarUrl:'https://s3.amazonaws.com/uifaces/faces/twitter/artexor/128.jpg'

  },
  {
    title:'Clint Westwood', text: SAMPLE_TEXT2, date: '4d', avatarUrl:'https://s3.amazonaws.com/uifaces/faces/twitter/mko/128.jpg'
  }
];

var SAMPLE_COMMENT_LIST2 = [
  {
    title:'Suzan Watts', text: SAMPLE_TEXT2 + '-' + SAMPLE_TEXT, date: '1d', avatarUrl:'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'

  },
  {
    title:'BAHZ Studios', text: SAMPLE_TEXT, date: '1d', avatarUrl:'https://s3.amazonaws.com/uifaces/faces/twitter/vladabazhan/128.jpg'
  }
];

var MOCK_IMAGE_FEED_DATA = [
  {
    id: 1,
    title:'Port Credit Townhome',
    description:'An pri veri persius. Te singulis reformidans sit, ex his quis prima vivendum. Ut has dicant constituam, eos nobis noster regione no',
    imgUrl:'http://st.hzcdn.com/simgs/c6d1d3060070a31d_14-3249/modern-exterior.jpg',
    //imgUrl:'http://www.trendir.com/interiors/assets_c/2015/07/clever-bathroom-design-1-thumb-630xauto-55072.jpg',
    author:'Roman Architects',
    location:'Fredericton, NB',
      authorImgUrl:'http://designgear.in/demo/eve/demo/images/speaker3-140x140.png',
    riseScore:80,
    comments: SAMPLE_COMMENT_LIST3,
    tags:[{title:'Wood Siding', top:50, left:25, description:'', photoUrl:'http://bit.ly/1HB7sL9'}, {title:'Door', top:60, left:58, description:'', photoUrl:''}]
  },
  {
    id: 2,
    title:'Solar Powered Home',
    description:'An pri veri persius. Te singulis reformidans sit, ex his quis prima vivendum. Ut has dicant constituam, eos nobis noster regione no',
    imgUrl:'http://st.hzcdn.com/simgs/a5e118420d18f632_14-4457/contemporary-exterior.jpg',
    //imgUrl:'http://www.trendir.com/interiors/assets_c/2015/07/vntage-style-kitchen-mixes-retro-decor-with-industrial-1-thumb-630xauto-55449.jpg',
    author:'West Coast Builders',
    location:'New York, NY',
    authorImgUrl:'http://designgear.in/demo/eve/demo/images/speaker1-140x140.png',
    riseScore:72,
    comments: SAMPLE_COMMENT_LIST,
    tags:[{title:'Window', top:55, left:25, description:'', photoUrl:'http://bit.ly/1XjuMUA'}, {title:'Insulation', top:70, left:70, description:'', photoUrl:'http://bit.ly/1NEotXl'}]
  },
  {
    id: 3,
    title:'Garrison District',
    description:'Ut has dicant constituam, eos nobis noster regione no',
    //imgUrl:'http://www.trendir.com/interiors/assets_c/2015/06/modern-steel-staircase-design-1-thumb-630xauto-53757.jpg',
    imgUrl:'http://st.hzcdn.com/simgs/e661ef520eb8b32c_14-4046/contemporary-exterior.jpg',
    author:'Erica Hayes',
    location:'San Fransisco, CA',
    authorImgUrl:'http://designgear.in/demo/eve/demo/images/speaker2-140x140.png',
    riseScore:78,
    comments: SAMPLE_COMMENT_LIST2,
    tags:[{title:'Exterior Lighting', top:66, left:41, description:''}]
  },
  {
    id: 4,
    title:'Modern Elegance',
    description:'His quis prima vivendum. Ut has dicant constituam, eos nobis noster regione no',
    //imgUrl:'http://www.trendir.com/interiors/assets_c/2015/06/having-a-fireplace-as-a-focal-point-has-never-looked-more-unusual-1-thumb-autox841-53846.jpg',
    imgUrl:'http://st.hzcdn.com/simgs/b751dc9d01145934_14-9916/contemporary-kitchen.jpg',
    author:'Lisa Doyle Designs',
    location:'San Fransisco, CA',
    authorImgUrl:'https://s3.amazonaws.com/uifaces/faces/twitter/allisongrayce/128.jpg',
    riseScore:67,
    comments: SAMPLE_COMMENT_LIST
  },
  {
    id: 5,
    title:'Green Oaks Atherton',
    description:'An pri veri persius. Te singulis reformidans sit, ex his quis prima vivendum. Ut has dicant constituam, eos nobis noster regione no',
    imgUrl:'http://st.hzcdn.com/simgs/3381d4710fda5de4_14-0822/contemporary-kitchen.jpg',
    author:'Scott Manning Inc',
    location:'Vancouver, BC',
    authorImgUrl:'https://s3.amazonaws.com/uifaces/faces/twitter/spjpgrd/128.jpg',
    riseScore:54,
    comments: SAMPLE_COMMENT_LIST2
  },
  {
    title:'Modern Minneapolis Suite',
    description:'Ut has dicant constituam, eos nobis noster regione no',
    imgUrl:'http://st.hzcdn.com/simgs/2de10bb20fd7ad1e_14-3039/modern-dining-room.jpg',
    author:'AZ Builders',
    location:'Minneapolis, MN',
    authorImgUrl:'https://s3.amazonaws.com/uifaces/faces/twitter/adambetts/128.jpg',
    riseScore:62,
    comments: SAMPLE_COMMENT_LIST3
  },
  {
    title:'StarrWood Bathroom',
    imgUrl:'http://st.hzcdn.com/simgs/58c10fb503e01a83_14-9803/modern-bathroom.jpg',
    author:'Future Architects',
    location:'Washington, DC',
    authorImgUrl:'https://s3.amazonaws.com/uifaces/faces/twitter/saschamt/128.jpg',
    riseScore:73,
    comments: SAMPLE_COMMENT_LIST2
  },
  {
    title:'Salem Avenue Renovation',
    description:'An pri veri persius. Te singulis reformidans sit, ex his quis prima vivendum. Ut has dicant constituam, eos nobis noster regione no',
    imgUrl:'http://st.hzcdn.com/simgs/8441e9fc0d7f97da_14-9962/contemporary-pool.jpg',
    author:'Fresh Trends Inc',
    location:'New York, NY',
    authorImgUrl:'https://s3.amazonaws.com/uifaces/faces/twitter/pankogut/128.jpg',
    riseScore:77,
    comments: SAMPLE_COMMENT_LIST
  },
  {
    title:'Madison Passive House',
    description:'Ut has dicant constituam, eos nobis noster regione no',
    author:'SF Architects',
    imgUrl:'http://st.hzcdn.com/simgs/caf14171025d610b_9-1698/contemporary-exterior.jpg',
    authorImgUrl:'http://designgear.in/demo/eve/demo/images/speaker1-140x140.png',
    riseScore:89,
    location:'Vancouver, BC',
    date:'7m'
  },
  {
    title:'Outdoor Fireplace',
    author:'AMD Design Studio',
    description:'An pri veri persius. Te singulis reformidans sit, ex his quis prima vivendum. Ut has dicant constituam, eos nobis noster regione no',
    imgUrl:'http://st.hzcdn.com/simgs/cb7133c40306a691_9-4790/contemporary-landscape.jpg',
    authorImgUrl:'http://designgear.in/demo/eve/demo/images/speaker1-140x140.png',
    riseScore:49,
    location:'Fredericton, NB',
    date:'4h',
    comments: SAMPLE_COMMENT_LIST3
  },
  {
    title:'Parkwood Residence',
    author:'Arturo Gattuso',
    imgUrl:'http://st.hzcdn.com/simgs/101165ca012e6327_14-9778/modern-kitchen.jpg',
    authorImgUrl:'https://s3.amazonaws.com/uifaces/faces/twitter/esquareda/128.jpg',
    riseScore:78,
    location:'New York, NY',
    date:'2w',
    comments: SAMPLE_COMMENT_LIST
  },
  {
    title:'Bernal Heights Residence',
    imgUrl:'http://st.hzcdn.com/simgs/0c91666d016d9fdc_14-9618/modern-kitchen.jpg',
    description:'An pri veri persius. Te singulis reformidans sit, ex his quis prima vivendum. Ut has dicant constituam, eos nobis noster regione no',
    author:'Milan Architects',
    location:'San Fransisco, CA',
    authorImgUrl:'https://s3.amazonaws.com/uifaces/faces/twitter/toffeenutdesign/128.jpg',
    riseScore:72
  }
];

module.exports = MOCK_IMAGE_FEED_DATA;
