import { useState, useReducer } from "react";
import { INITIAL_STATE, reducer } from "./reducer";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const handleAspekPenilaianChange = (mahasiswaKey, aspekKey, value) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: {
        mahasiswaKey,
        aspekKey,
        value,
      },
    });
  };

  console.log(state["Mahasiswa 1"]);
  const [modal, setModal] = useState(true);
  const clickModal = () => {
    setModal(!modal);
  };
  let aspekNilai = {
    aspek_penilaian_1: {
      mahasiswa_1: state["Mahasiswa 1"].aspek_penilaian_1,
      mahasiswa_2: state["Mahasiswa 2"].aspek_penilaian_1,
      mahasiswa_3: state["Mahasiswa 3"].aspek_penilaian_1,
      mahasiswa_4: state["Mahasiswa 4"].aspek_penilaian_1,
      mahasiswa_5: state["Mahasiswa 5"].aspek_penilaian_1,
      mahasiswa_6: state["Mahasiswa 6"].aspek_penilaian_1,
      mahasiswa_7: state["Mahasiswa 7"].aspek_penilaian_1,
      mahasiswa_8: state["Mahasiswa 8"].aspek_penilaian_1,
      mahasiswa_9: state["Mahasiswa 9"].aspek_penilaian_1,
      mahasiswa_10: state["Mahasiswa 10"].aspek_penilaian_1,
    },
    aspek_penilaian_2: {
      mahasiswa_1: state["Mahasiswa 1"].aspek_penilaian_2,
      mahasiswa_2: state["Mahasiswa 2"].aspek_penilaian_2,
      mahasiswa_3: state["Mahasiswa 3"].aspek_penilaian_2,
      mahasiswa_4: state["Mahasiswa 4"].aspek_penilaian_2,
      mahasiswa_5: state["Mahasiswa 5"].aspek_penilaian_2,
      mahasiswa_6: state["Mahasiswa 6"].aspek_penilaian_2,
      mahasiswa_7: state["Mahasiswa 7"].aspek_penilaian_2,
      mahasiswa_8: state["Mahasiswa 8"].aspek_penilaian_2,
      mahasiswa_9: state["Mahasiswa 9"].aspek_penilaian_2,
      mahasiswa_10: state["Mahasiswa 10"].aspek_penilaian_2,
    },
    aspek_penilaian_3: {
      mahasiswa_1: state["Mahasiswa 1"].aspek_penilaian_3,
      mahasiswa_2: state["Mahasiswa 2"].aspek_penilaian_3,
      mahasiswa_3: state["Mahasiswa 3"].aspek_penilaian_3,
      mahasiswa_4: state["Mahasiswa 4"].aspek_penilaian_3,
      mahasiswa_5: state["Mahasiswa 5"].aspek_penilaian_3,
      mahasiswa_6: state["Mahasiswa 6"].aspek_penilaian_3,
      mahasiswa_7: state["Mahasiswa 7"].aspek_penilaian_3,
      mahasiswa_8: state["Mahasiswa 8"].aspek_penilaian_3,
      mahasiswa_9: state["Mahasiswa 9"].aspek_penilaian_3,
      mahasiswa_10: state["Mahasiswa 10"].aspek_penilaian_3,
    },
    aspek_penilaian_4: {
      mahasiswa_1: state["Mahasiswa 1"].aspek_penilaian_4,
      mahasiswa_2: state["Mahasiswa 2"].aspek_penilaian_4,
      mahasiswa_3: state["Mahasiswa 3"].aspek_penilaian_4,
      mahasiswa_4: state["Mahasiswa 4"].aspek_penilaian_4,
      mahasiswa_5: state["Mahasiswa 5"].aspek_penilaian_4,
      mahasiswa_6: state["Mahasiswa 6"].aspek_penilaian_4,
      mahasiswa_7: state["Mahasiswa 7"].aspek_penilaian_4,
      mahasiswa_8: state["Mahasiswa 8"].aspek_penilaian_4,
      mahasiswa_9: state["Mahasiswa 9"].aspek_penilaian_4,
      mahasiswa_10: state["Mahasiswa 10"].aspek_penilaian_4,
    },
  };
  console.log(aspekNilai);

  return (
    <>
      <div className="flex justify-center items-center h-screen  w-screen">
        <div>
          <table className="  h-[15rem] w-[100rem]">
            <thead>
              <tr>
                <th className="border "></th>
                <th className="border p-5">Aspek Penilaian 1</th>
                <th className="border p-5">Aspek Penilaian 2</th>
                <th className="border p-5">Aspek Penilaian 3</th>
                <th className="border p-5">Aspek Penilaian 4</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(state).map(([mahasiswaKey, aspekPenilaian]) => (
                <tr key={mahasiswaKey}>
                  <td className="border">{mahasiswaKey}</td>
                  {Object.entries(aspekPenilaian).map(([aspekKey, value]) => (
                    <td className="border p-5" key={aspekKey}>
                      <select
                        value={value}
                        onChange={(e) =>
                          handleAspekPenilaianChange(mahasiswaKey, aspekKey, e.target.value)
                        }
                      >
                        <option value="">---</option>
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
          <div className="w-full mt-2 flex justify-end ">
            <button
              onClick={clickModal}
              className="text-white bg-[#43332c] h-[2rem] w-[10rem] rounded-lg"
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
      <div
        hidden={modal}
        className={`text-center text-white absolute top-[5%] left-[45%] text-left h-[45rem] w-[20rem]
       bg-[#83665a] p-4 rounded-lg shadow-lg overflow-scroll`}
      >
        <div className="flex justify-start fixed">
          <button onClick={clickModal}>
            <h1>X</h1>
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">Data Aspek Nilai</h2>
        <p>
          <pre className="text-white ">{JSON.stringify(aspekNilai, null, 2)}</pre>
        </p>
      </div>
    </>
  );
}

export default App;
