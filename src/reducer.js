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
let sui = {
  aspek_penilaian_1: {
    mahasiswa_1: "2",
    mahasiswa_2: "3",
    mahasiswa_3: "5",
    mahasiswa_4: "5",
    mahasiswa_5: "4",
    mahasiswa_6: "5",
    mahasiswa_7: "4",
    mahasiswa_8: "7",
    mahasiswa_9: "5",
    mahasiswa_10: "6",
  },
  aspek_penilaian_2: {
    mahasiswa_1: "3",
    mahasiswa_2: "4",
    mahasiswa_3: "5",
    mahasiswa_4: "4",
    mahasiswa_5: "6",
    mahasiswa_6: "5",
    mahasiswa_7: "5",
    mahasiswa_8: "6",
    mahasiswa_9: "5",
    mahasiswa_10: "6",
  },
  aspek_penilaian_3: {
    mahasiswa_1: "3",
    mahasiswa_2: "5",
    mahasiswa_3: "6",
    mahasiswa_4: "5",
    mahasiswa_5: "5",
    mahasiswa_6: "5",
    mahasiswa_7: "4",
    mahasiswa_8: "5",
    mahasiswa_9: "5",
    mahasiswa_10: "6",
  },
  aspek_penilaian_4: {
    mahasiswa_1: "4",
    mahasiswa_2: "4",
    mahasiswa_3: "4",
    mahasiswa_4: "6",
    mahasiswa_5: "6",
    mahasiswa_6: "3",
    mahasiswa_7: "5",
    mahasiswa_8: "4",
    mahasiswa_9: "7",
    mahasiswa_10: "5",
  },
};
