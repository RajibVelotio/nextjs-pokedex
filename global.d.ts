declare global {
  type NameUrl = {
    name: string;
    url: string;
  };

  type Ability = {
    ability: NameUrl;
    is_hidden: boolean;
    slot: number;
  };

  type GameIndex = {
    game_index: number;
    version: NameUrl;
  };

  type Move = {
    move: NameUrl;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: NameUrl;
      version_group: NameUrl;
    };
  };

  //   type Sprite = {
  //     back_default: string | null;
  //     back_female: string | null;
  //     back_shiny: string | null;
  //     back_shiny_female: string | null;
  //     front_default: string | null;
  //     front_female: string | null;
  //     front_shiny: string | null;
  //     front_shiny_female: string | null;
  //     other: {
  //       dream_world: {
  //         front_default: string | null;
  //         front_female: string | null;
  //       };
  //       home: {
  //         front_default: string | null;
  //         front_female: string | null;
  //         front_shiny: string | null;
  //         front_shiny_female: string | null;
  //       };
  //       'official-artwork': {
  //         front_default: string | null;
  //         front_shiny: string | null;
  //       };
  //     };
  //   };

  type Sprite = Record<string, any>;

  type Stat = {
    base_stat: number;
    effort: number;
    stat: NameUrl;
  };

  type Type = {
    slot: number;
    type: NameUrl;
  };

  type Pokemon = {
    abilities: Ability[];
    base_experience: number;
    forms: NameUrl[];
    game_indices: GameIndex[];
    height: number;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_types: [];
    species: NameUrl;
    sprites: Sprite;
    stats: Stat[];
    types: Type[];
    weight: number;
  };
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  interface Employee {
    id: number;
    name: string;
    salary: number;
  }

  type Person = {
    name: string;
    age: number;
  };
}

export {};
