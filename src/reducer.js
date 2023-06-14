export const INITIAL_STATE = {
  "Mahasiswa 1": {
    aspek_penilaian_1: 0,
    aspek_penilaian_2: 0,
    aspek_penilaian_3: 0,
    aspek_penilaian_4: 0,
  },
  "Mahasiswa 2": {
    aspek_penilaian_1: 0,
    aspek_penilaian_2: 0,
    aspek_penilaian_3: 0,
    aspek_penilaian_4: 0,
  },
  "Mahasiswa 3": {
    aspek_penilaian_1: 0,
    aspek_penilaian_2: 0,
    aspek_penilaian_3: 0,
    aspek_penilaian_4: 0,
  },
  "Mahasiswa 4": {
    aspek_penilaian_1: 0,
    aspek_penilaian_2: 0,
    aspek_penilaian_3: 0,
    aspek_penilaian_4: 0,
  },
  "Mahasiswa 5": {
    aspek_penilaian_1: 0,
    aspek_penilaian_2: 0,
    aspek_penilaian_3: 0,
    aspek_penilaian_4: 0,
  },
  "Mahasiswa 6": {
    aspek_penilaian_1: 0,
    aspek_penilaian_2: 0,
    aspek_penilaian_3: 0,
    aspek_penilaian_4: 0,
  },
  "Mahasiswa 7": {
    aspek_penilaian_1: 0,
    aspek_penilaian_2: 0,
    aspek_penilaian_3: 0,
    aspek_penilaian_4: 0,
  },
  "Mahasiswa 8": {
    aspek_penilaian_1: 0,
    aspek_penilaian_2: 0,
    aspek_penilaian_3: 0,
    aspek_penilaian_4: 0,
  },
  "Mahasiswa 9": {
    aspek_penilaian_1: 0,
    aspek_penilaian_2: 0,
    aspek_penilaian_3: 0,
    aspek_penilaian_4: 0,
  },
  "Mahasiswa 10": {
    aspek_penilaian_1: 0,
    aspek_penilaian_2: 0,
    aspek_penilaian_3: 0,
    aspek_penilaian_4: 0,
  },
};

export function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      const { mahasiswaKey, aspekKey, value } = action.payload;
      return {
        ...state,
        [mahasiswaKey]: {
          ...state[mahasiswaKey],
          [aspekKey]: value,
        },
      };
    default:
      throw new Error("Unsupported action type");
  }
}
