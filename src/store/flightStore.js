import { Store } from "pullstate";

export const FlightStore = new Store({
  //Selected Airports
  fromAirport: null,
  toAirport: null,

  // Dates
  departureDate: null,
  returnDate: null,

  // Trip Details
  tripType: "oneway", 

  passengers: {
    adults: 1,
    children: 0,
    infants: 0,
  },

  // Filters
  flightClass: "economy", 

  preferredCarrier: null, 

  flightType: "any", 

  //  Search State
  isSearching: false,      
  searchError: null,       

  //  Results
  searchResults: [],       
  lastSearchPayload: null, 
});

// Reset search
export const resetSearch = () => {
  FlightStore.update(s => {
    s.fromAirport = null;
    s.toAirport = null;
    s.departureDate = null;
    s.returnDate = null;

    s.passengers = {
      adults: 1,
      children: 0,
      infants: 0,
    };

    s.flightClass = "economy";
    s.preferredCarrier = null;
    s.flightType = "any";

    s.searchResults = [];
    s.lastSearchPayload = null;
    s.searchError = null;
  });
};
