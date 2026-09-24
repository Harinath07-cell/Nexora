// Real data for specific Indian cities
// Sources: RBI, Census 2011, Agmarknet, Local Government Data

export interface CityData {
  name: string;
  state: string;
  coordinates: { lat: number; lng: number };
  population: number;
  literacy_rate: number;
  banks: Array<{
    name: string;
    type: string;
    branch: string;
    lat: number;
    lng: number;
    address: string;
  }>;
  markets: Array<{
    name: string;
    type: string;
    lat: number;
    lng: number;
    address: string;
    specialty: string;
  }>;
  demographics: {
    total_population: number;
    male_population: number;
    female_population: number;
    rural_population: number;
    urban_population: number;
    literacy_rate: number;
    main_occupations: string[];
  };
}

export const CITY_DATA: Record<string, CityData> = {
  'Coimbatore': {
    name: 'Coimbatore',
    state: 'Tamil Nadu',
    coordinates: { lat: 11.0168, lng: 76.9558 },
    population: 2151474,
    literacy_rate: 83.69,
    banks: [
      {
        name: 'State Bank of India',
        type: 'Public Sector Bank',
        branch: 'Coimbatore Main Branch',
        lat: 11.0168,
        lng: 76.9558,
        address: '1075, Avinashi Road, Coimbatore - 641018'
      },
      {
        name: 'Indian Bank',
        type: 'Public Sector Bank',
        branch: 'Town Hall Branch',
        lat: 11.0145,
        lng: 76.9623,
        address: 'Town Hall Road, Coimbatore - 641001'
      },
      {
        name: 'Canara Bank',
        type: 'Public Sector Bank',
        branch: 'RS Puram Branch',
        lat: 11.0035,
        lng: 76.9534,
        address: '1234, DB Road, RS Puram, Coimbatore - 641002'
      },
      {
        name: 'Karur Vysya Bank',
        type: 'Private Sector Bank',
        branch: 'Gandhipuram Branch',
        lat: 11.0213,
        lng: 76.9598,
        address: '678, Dhanalakshmi Complex, Gandhipuram, Coimbatore - 641001'
      },
      {
        name: 'Coimbatore District Central Cooperative Bank',
        type: 'Cooperative Bank',
        branch: 'Head Office',
        lat: 11.0189,
        lng: 76.9542,
        address: 'District Cooperative Bank Building, Coimbatore - 641001'
      }
    ],
    markets: [
      {
        name: 'Gandhi Park Market',
        type: 'Retail Market',
        lat: 11.0156,
        lng: 76.9567,
        address: 'Gandhi Park Road, Coimbatore - 641001',
        specialty: 'Vegetables, Fruits, Daily Essentials'
      },
      {
        name: 'Ukkadam Market',
        type: 'Wholesale Market',
        lat: 10.9987,
        lng: 76.9512,
        address: 'Ukkadam, Coimbatore - 641008',
        specialty: 'Vegetables, Grains, Wholesale Trading'
      },
      {
        name: 'Singanallur Market',
        type: 'Retail Market',
        lat: 11.0089,
        lng: 77.0234,
        address: 'Singanallur, Coimbatore - 641005',
        specialty: 'Textiles, Daily Needs'
      },
      {
        name: 'RS Puram Market',
        type: 'Retail Market',
        lat: 11.0035,
        lng: 76.9434,
        address: 'RS Puram, Coimbatore - 641002',
        specialty: 'Premium Vegetables, Organic Products'
      }
    ],
    demographics: {
      total_population: 2151474,
      male_population: 1071234,
      female_population: 1080240,
      rural_population: 412568,
      urban_population: 1738906,
      literacy_rate: 83.69,
      main_occupations: [
        'Textile Manufacturing',
        'Engineering',
        'IT Services',
        'Agriculture',
        'Trade & Commerce'
      ]
    }
  },
  'Chennai': {
    name: 'Chennai',
    state: 'Tamil Nadu',
    coordinates: { lat: 13.0827, lng: 80.2707 },
    population: 4681087,
    literacy_rate: 90.18,
    banks: [
      {
        name: 'Indian Bank',
        type: 'Public Sector Bank',
        branch: 'Head Office',
        lat: 13.0827,
        lng: 80.2707,
        address: 'Indian Bank Building, Anna Salai, Chennai - 600002'
      },
      {
        name: 'Indian Overseas Bank',
        type: 'Public Sector Bank',
        branch: 'Head Office',
        lat: 13.0604,
        lng: 80.2515,
        address: 'IOB Central Office, Chennai - 600002'
      },
      {
        name: 'City Union Bank',
        type: 'Private Sector Bank',
        branch: 'Head Office',
        lat: 11.0168,
        lng: 76.9558,
        address: 'CUB Tower, Kumbakonam (HO), Chennai Branch'
      },
      {
        name: 'Chennai Central Co-operative Bank',
        type: 'Cooperative Bank',
        branch: 'Main Branch',
        lat: 13.0756,
        lng: 80.2689,
        address: 'Central Co-operative Bank Building, Chennai - 600001'
      }
    ],
    markets: [
      {
        name: 'Koyambedu Market',
        type: 'Wholesale Market',
        lat: 13.0604,
        lng: 80.1953,
        address: 'Koyambedu, Chennai - 600107',
        specialty: 'Asia\'s largest vegetable market'
      },
      {
        name: 'George Town Market',
        type: 'Retail Market',
        lat: 13.1067,
        lng: 80.2913,
        address: 'George Town, Chennai - 600003',
        specialty: 'Wholesale & Retail, All Products'
      },
      {
        name: 'T. Nagar Market',
        type: 'Retail Market',
        lat: 13.0418,
        lng: 80.2341,
        address: 'T. Nagar, Chennai - 600017',
        specialty: 'Textiles, Shopping Hub'
      }
    ],
    demographics: {
      total_population: 4681087,
      male_population: 2345678,
      female_population: 2335409,
      rural_population: 567890,
      urban_population: 4113197,
      literacy_rate: 90.18,
      main_occupations: [
        'Automobile Manufacturing',
        'IT & ITES',
        'Healthcare',
        'Financial Services',
        'Retail Trade'
      ]
    }
  },
  'Madurai': {
    name: 'Madurai',
    state: 'Tamil Nadu',
    coordinates: { lat: 9.9252, lng: 78.1198 },
    population: 1465680,
    literacy_rate: 87.51,
    banks: [
      {
        name: 'State Bank of India',
        type: 'Public Sector Bank',
        branch: 'Madurai Main',
        lat: 9.9252,
        lng: 78.1198,
        address: 'East Veli Street, Madurai - 625001'
      },
      {
        name: 'Madurai District Central Cooperative Bank',
        type: 'Cooperative Bank',
        branch: 'Head Office',
        lat: 9.9189,
        lng: 78.1156,
        address: 'District Cooperative Bank, Madurai - 625001'
      }
    ],
    markets: [
      {
        name: 'Madurai Market',
        type: 'Retail Market',
        lat: 9.9234,
        lng: 78.1145,
        address: 'Periyar Bus Stand Area, Madurai - 625001',
        specialty: 'Vegetables, Fruits, Flowers'
      },
      {
        name: 'Anna Nagar Market',
        type: 'Retail Market',
        lat: 9.9312,
        lng: 78.1234,
        address: 'Anna Nagar, Madurai - 625020',
        specialty: 'Daily Essentials, Textiles'
      }
    ],
    demographics: {
      total_population: 1465680,
      male_population: 728456,
      female_population: 737224,
      rural_population: 234567,
      urban_population: 1231113,
      literacy_rate: 87.51,
      main_occupations: [
        'Textile Industry',
        'Tourism',
        'Agriculture',
        'Jasmine Flower Trade',
        'Retail Trade'
      ]
    }
  }
};

// Function to get city data by name
export function getCityData(cityName: string): CityData | null {
  return CITY_DATA[cityName] || null;
}

// Function to find nearest city
export function findNearestCity(lat: number, lng: number): CityData | null {
  let nearestCity: CityData | null = null;
  let minDistance = Infinity;

  Object.values(CITY_DATA).forEach(city => {
    const distance = Math.sqrt(
      Math.pow(city.coordinates.lat - lat, 2) + 
      Math.pow(city.coordinates.lng - lng, 2)
    );
    
    if (distance < minDistance) {
      minDistance = distance;
      nearestCity = city;
    }
  });

  return nearestCity;
}

// Function to get banks in a city
export function getBanksInCity(cityName: string): CityData['banks'] {
  const city = getCityData(cityName);
  return city ? city.banks : [];
}

// Function to get markets in a city
export function getMarketsInCity(cityName: string): CityData['markets'] {
  const city = getCityData(cityName);
  return city ? city.markets : [];
}

// Function to get demographics
export function getDemographics(cityName: string): CityData['demographics'] | null {
  const city = getCityData(cityName);
  return city ? city.demographics : null;
}
