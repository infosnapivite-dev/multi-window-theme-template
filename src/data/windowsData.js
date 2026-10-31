import window1Img from '../assets/home bg.webp';
import window2Img from '../assets/mehendi.webp';
import window3Img from '../assets/Sangeet.webp';
import window4Img from '../assets/haldi.png';
import window5Img from '../assets/wedding.webp';
import window6Img from '../assets/thankyou page.webp';

/**
 * Royal Wedding Invitation Details (Home Page Card)
 * Styled per reference invitation with authentic Indian wedding names
 */
export const WEDDING_COUPLE = {
  blessing: 'With the blessings of Lord Ganesha',
  groomParentsLine1: 'Punam &',
  groomParentsLine2: 'Jagmohan Chhaparwal',
  inviteLine1: 'warmly invite you to celebrate',
  inviteLine2: 'the wedding of their son',
  groomName: 'PUSHKAL',
  groomLineageLine1: 'Grand S/o Smt. Vidyawati &',
  groomLineageLine2: 'Late Dr. R.K. Chhaparwal',
  conjunction: 'with',
  brideName: 'RADHIKA',
  brideParents: 'D/o Smt. Sunita & Shri Rajesh Sharma',
};

/**
 * Mehendi Soirée Invitation Details (Mehendi Page)
 * Styled per reference invitation
 */
export const MEHENDI_DETAILS = {
  dateDay: '6',
  dateSup: 'TH',
  dateRest: 'FEBRUARY 2026',
  title: 'MEHENDI SOIRÉE',
  taglineLine1: "Let's begin the festivities,",
  taglineLine2: 'where music meets mehendi.',
  time: '11:00 am onwards',
  conjunction: 'at',
  venue: 'Buland Chowk',
};

/**
 * Sangeet Evening Invitation Details (Sangeet Page)
 * Styled per reference invitation
 */
export const SANGEET_DETAILS = {
  dateDay: '6',
  dateSup: 'TH',
  dateRest: 'FEBRUARY 2026',
  title: 'SANGEET EVENING',
  taglineLine1: 'One night only.',
  taglineLine2: 'Jeeps, stars, sangeet, & chills.',
  taglineLine3: 'Get ready to dance the night away.',
  time: '6:00 pm',
  conjunction: 'at',
  venue: 'The Fort',
};

/**
 * Haldi Ceremony Invitation Details (Haldi Page)
 * Styled per reference invitation
 */
export const HALDI_DETAILS = {
  dateDay: '7',
  dateSup: 'TH',
  dateRest: 'FEBRUARY 2026',
  title: 'VIBE WITH BLUE',
  taglineLine1: 'Sun-kissed,',
  taglineLine2: 'poolside vibes.',
  taglineLine3: 'Haldi but make it Santorini.',
  time: '11:00 am',
  conjunction: 'at',
  venue: 'Poolside',
};

/**
 * Wedding Ceremony Invitation Details (Wedding Page)
 * Styled per reference invitation
 */
export const WEDDING_DETAILS = {
  dateDay: '7',
  dateSup: 'TH',
  dateRest: 'FEBRUARY 2026',
  titleLine1: 'THE WEDDING',
  titleLine2: 'CEREMONY',
  taglineLine1: 'Here begins forever.',
  taglineLine2: 'Where masala meets Mozart,',
  taglineLine3: 'and Pushkal & Radhika take their sacred pheras.',
  time: '5:00 pm onward',
  conjunction: 'at',
  venue: 'Bagh-E-Inayat',
};

/**
 * Thank You / Warm Regards Details (Window 6)
 * Styled per reference invitation
 */
export const THANK_YOU_DETAILS = {
  title: 'WARM REGARDS',
  familyMembers: [
    'Sadhana - Manmohan',
    'Punam - Jagmohan',
    'Purva - Mrigank',
    'Yashaswini',
  ],
  conjunction: '&',
  familyName: 'The Chhaparwal Family',
  companyName: 'Chirayu Pharmaceuticals',
  contactNumbers: '9425309570, 9301123453',
};

/**
 * All 4 Main Wedding Events for the Mehendi Page Interactive Schedule
 */
export const WEDDING_EVENTS_LIST = [
  {
    id: 'mehendi',
    number: '01',
    name: 'Mehendi Soirée',
    hindiTagline: '॥ मेहँदी सोइरे ॥',
    dateFull: 'Friday, 6th February 2026',
    dateBadge: '6 FEB',
    time: '11:00 am onwards',
    location: 'Buland Chowk',
    tagline: "Let's begin the festivities, where music meets mehendi.",
    dressCode: 'Vibrant Traditional / Mehendi Greens & Pinks',
    accentColor: '#d4af37',
  },
  {
    id: 'sangeet',
    number: '02',
    name: 'Sangeet Evening',
    hindiTagline: '॥ संगीत संध्या ॥',
    dateFull: 'Friday, 6th February 2026',
    dateBadge: '6 FEB',
    time: '6:00 pm onwards',
    location: 'The Fort',
    tagline: 'One night only. Jeeps, stars, sangeet, & chills. Get ready to dance the night away.',
    dressCode: 'Royal Indo-Western / Glamorous Midnight Glow',
    accentColor: '#e0a96d',
  },
  {
    id: 'haldi',
    number: '03',
    name: 'Haldi Ceremony',
    subtitle: 'Vibe with Blue',
    hindiTagline: '॥ हल्दी उत्सव ॥',
    dateFull: 'Saturday, 7th February 2026',
    dateBadge: '7 FEB',
    time: '11:00 am onwards',
    location: 'Poolside',
    tagline: 'Sun-kissed, poolside vibes. Haldi but make it Santorini.',
    dressCode: 'Santorini White & Blue / Sunny Marigold Yellow',
    accentColor: '#ffd066',
  },
  {
    id: 'wedding',
    number: '04',
    name: 'The Wedding Ceremony',
    hindiTagline: '॥ शुभ विवाह ॥',
    dateFull: 'Saturday, 7th February 2026',
    dateBadge: '7 FEB',
    time: '5:00 pm onward',
    location: 'Bagh-E-Inayat',
    tagline: 'Here begins forever. Where masala meets Mozart, and Pushkal & Radhika take their sacred pheras.',
    dressCode: 'Royal Indian Heritage / Regal Pastels & Gold',
    accentColor: '#fae092',
  },
];

/**
 * 6 Palace Arched Windows & Corresponding Event Pages
 * Matches the reference layout exactly:
 * Row 1: Window 1 (Fort Gate), Window 2 (Mehendi), Window 3 (Sangeet)
 * Row 2: Window 4 (Haldi), Window 5 (Wedding), Window 6 (Thank You)
 */
export const WINDOWS_DATA = [
  {
    id: 'welcome',
    index: 0,
    number: 1,
    row: 1,
    col: 1,
    left: '5.0%',
    top: '32.2%',
    width: '25.3%',
    height: '28.8%',
    title: 'Grand Royal Welcome',
    shortTitle: 'Grand Welcome',
    subtitle: 'Shubh Aagman & Gathering at the Palace',
    tagline: '॥ शुभ आगमन ॥',
    date: 'Friday, 12th December 2026',
    time: '04:00 PM onwards',
    venue: 'The Palace Fort Gates & Main Courtyard',
    dressCode: 'Royal Heritage / Regal Pastels',
    image: window1Img,
    themeColor: '#934b41',
    accentColor: '#e0a96d',
    glowColor: 'rgba(147, 75, 65, 0.45)',
    description:
      'Step into a world of timeless grandeur. As royal trumpets and nagadas herald your arrival, receive the traditional garland welcome amidst showers of fragrant rose petals.',
    highlights: [
      'Traditional Shehnai & Nagada Performance',
      'Rose Petal Shower & Aarti Welcome',
      'Royal Welcome Sharbat & Rajasthani High Tea',
      'Palace Tour & Room Escort'
    ]
  },
  {
    id: 'mehendi',
    index: 1,
    number: 2,
    row: 1,
    col: 2,
    left: '37.35%',
    top: '32.2%',
    width: '25.3%',
    height: '28.8%',
    title: 'Mehendi Ceremony',
    shortTitle: 'Mehendi Ki Shaam',
    subtitle: 'Henna Reverie & Vintage Melodies',
    tagline: '॥ मेहन्दी रसम ॥',
    date: 'Saturday, 13th December 2026',
    time: '01:00 PM onwards',
    venue: 'The Gulabi Bagh (Pink Palace Courtyard)',
    dressCode: 'Festive Pinks, Marigold Yellows & Floral Lehengas',
    image: window2Img,
    themeColor: '#b35b78',
    accentColor: '#f7d794',
    glowColor: 'rgba(179, 91, 120, 0.45)',
    description:
      'Adorn your palms with delicate, fragrant organic henna while immersed in the vintage crackle of classic gramophone melodies, folk dholaks, and cheerful laughter.',
    highlights: [
      'Master Artisans for Intricate Bridal & Guest Henna',
      'Live Rajasthani Folk Singers & Dholak Beats',
      'Vintage Gramophone & Acoustic Music Lounge',
      'Bangle Crafting Bar & High Tea Chaat Bazaar'
    ]
  },
  {
    id: 'sangeet',
    index: 2,
    number: 3,
    row: 1,
    col: 3,
    left: '69.7%',
    top: '32.2%',
    width: '25.3%',
    height: '28.8%',
    title: 'The Wedding Venue',
    shortTitle: 'Venue',
    subtitle: 'Location, Timings, Directions & Countdown',
    tagline: '॥ विवाह स्थल एवं मार्गदर्शन ॥',
    date: '6th & 7th February 2026',
    time: '11:00 AM & 05:00 PM',
    venue: 'Bagh-E-Inayat & The Fort, Jaipur',
    dressCode: 'Royal Heritage & Traditional Elegance',
    image: window3Img,
    themeColor: '#500a07',
    accentColor: '#ffd369',
    glowColor: 'rgba(80, 10, 7, 0.55)',
    description:
      'Set against the majestic Aravalli hills in Jaipur, Bagh-E-Inayat and The Fort welcome you with royal courtyards, illuminated fountains, and timeless Rajput hospitality.',
    highlights: [
      'Valet Parking & Chauffeur Services Available',
      'Dedicated Hospitality & Guest Assistance Desk',
      'Scenic Photobooths & Historic Palace Views',
      'Live Google Maps Navigation Support'
    ]
  },
  {
    id: 'haldi',
    index: 3,
    number: 4,
    row: 2,
    col: 1,
    left: '5.0%',
    top: '67.8%',
    width: '25.3%',
    height: '28.8%',
    title: 'Photo Gallery',
    shortTitle: 'Gallery',
    subtitle: 'Pre-Wedding & Royal Memories',
    tagline: '॥ छायाचित्र दीर्घा ॥',
    date: 'Moments to Cherish',
    time: 'Forever in our hearts',
    venue: 'Royal Memory Lane',
    dressCode: 'Celebration Elegance',
    image: window4Img,
    themeColor: '#387f9f',
    accentColor: '#f1c40f',
    glowColor: 'rgba(56, 127, 160, 0.45)',
    description:
      'Glimpses into Pushkal & Radhika\'s journey of love, laughter, and timeless togetherness.',
    highlights: [
      'Pre-Wedding Portraits & Celebrations',
      'Joyous Family Gatherings & Festivities',
      'Heritage Backdrops & Golden Sunsets'
    ]
  },
  {
    id: 'wedding',
    index: 4,
    number: 5,
    row: 2,
    col: 2,
    left: '37.35%',
    top: '67.8%',
    width: '25.3%',
    height: '28.8%',
    title: 'The Grand Royal Wedding',
    shortTitle: 'The Wedding',
    subtitle: 'Varmala & The Seven Sacred Pheras',
    tagline: '॥ शुभ विवाह ॥',
    date: 'Sunday, 14th December 2026',
    time: '06:00 PM Baraat & Varmala | 07:30 PM Sacred Pheras',
    venue: 'The Royal Fountain Gardens & Water Palace Mandap',
    dressCode: 'Regal Traditional / Royal Sherwanis & Heavily Embroidered Lehengas',
    image: window5Img,
    themeColor: '#96976a',
    accentColor: '#d4af37',
    glowColor: 'rgba(150, 151, 106, 0.45)',
    description:
      'Beside the illuminated royal fountains and amidst sacred Vedic chants, two souls take the sacred seven steps around the holy fire to unite for lifetimes to come.',
    highlights: [
      'Grand Royal Baraat with Vintage Carriages & Brass Band',
      'Exquisite Varmala atop the Floral Fountain Island',
      'Sacred Pheras with Live Classical Shehnai & Santoor',
      'Sumptuous Royal Feast under a Canopy of Lights'
    ]
  },
  {
    id: 'reception',
    index: 5,
    number: 6,
    row: 2,
    col: 3,
    left: '69.7%',
    top: '67.8%',
    width: '25.3%',
    height: '28.8%',
    title: 'Thank You',
    shortTitle: 'Thank You',
    subtitle: 'Heartfelt Gratitude & Celebration Banquet',
    tagline: '॥ सधन्यवाद एवं आशीर्वाद ॥',
    date: 'Sunday, 14th December 2026',
    time: '09:30 PM onwards',
    venue: 'The Royal Peacock Courtyard & Starlight Pavilion',
    dressCode: 'Black Tie / Royal Evening Elegance / Tuxedos & Sarees',
    image: window6Img,
    themeColor: '#7f4342',
    accentColor: '#e5c07b',
    glowColor: 'rgba(127, 67, 66, 0.45)',
    description:
      'Our hearts overflow with joy and deepest gratitude. Thank you for showering our auspicious union with your presence, warmth, and lifelong blessings.',
    highlights: [
      'Gourmet Multi-Cuisine Royal Banquet Dinner',
      'Heartfelt Speeches & Toast to the Newlyweds',
      'Commemorative Royal Photographs & Guestbook Signing',
      'Presentation of Handcrafted Royal Souvenirs & Favors'
    ]
  }
];

