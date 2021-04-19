export interface IFilters {
    focused_on: [
      {name : string},
      {name : string}
    ],
    model : [
      {name : string},
      {name : string},
      {name : string}
    ],
    fuel_type : [
      {name : string},
      {name : string},
      {name : string},
    ],
    transmission : [
      {name : string},
      {name : string}
    ]
  }



export interface IFilterOptions { 
    focused_on? : Set<string>;
    model? : Set<string>;
    fuel_type? : Set<string>;
    transmission? : Set<string>;
  }