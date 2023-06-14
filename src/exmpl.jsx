import React, { useReducer } from "react";

const initialState = {
  "mahasiswa 1": {
    aspek_penilaian_1: null,
    aspek_penilaian_2: null,
  },
  "mahasiswa 2": {
    aspek_penilaian_1: null,
    aspek_penilaian_2: null,
  },
};

function reducer(state, action) {
  if (action.type === "SET_ASPEK_PENILAIAN") {
    const { mahasiswaKey, aspekKey, value } = action;
    return {
      ...state,
      [mahasiswaKey]: {
        ...state[mahasiswaKey],
        [aspekKey]: value,
      },
    };
  }
  throw new Error("Unsupported action type");
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAspekPenilaianChange = (mahasiswaKey, aspekKey, value) => {
    dispatch({
      type: "SET_ASPEK_PENILAIAN",
      mahasiswaKey,
      aspekKey,
      value,
    });
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="border"></th>
            <th className="border">Aspek Penilaian 1</th>
            <th className="border">Aspek Penilaian 2</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(state).map(([mahasiswaKey, aspekPenilaian]) => (
            <tr key={mahasiswaKey}>
              <td className="border">{mahasiswaKey}</td>
              {Object.entries(aspekPenilaian).map(([aspekKey, value]) => (
                <td className="border" key={aspekKey}>
                  <select
                    value={value}
                    onChange={(e) =>
                      handleAspekPenilaianChange(mahasiswaKey, aspekKey, e.target.value)
                    }
                  >
                    <option value="">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
