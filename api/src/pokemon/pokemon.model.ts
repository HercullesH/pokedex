export interface Ability {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }
  
  export interface Cry {
    latest: string;
    legacy: string;
  }
  
  export interface Form {
    name: string;
    url: string;
  }
  
  export interface GameIndex {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }
  
  export interface Move {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }[];
  }
  
  export interface PokemonDetails {
    abilities: Ability[];
    base_experience: number;
    cries: Cry;
    forms: Form[];
    game_indices: GameIndex[];
    height: number;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    species: {
      name: string;
      url: string;
    };
    sprites: {
      front_default: string;
      other: {
        dream_world: {
          front_default: string;
        };
        home: {
          front_default: string;
        };
      };
    };
    stats: {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    }[];
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
    weight: number;
  }
  