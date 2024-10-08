import { useState } from "react";
import "./App.css";

function App() {
  const [children, setChildren] = useState(0);
  return (
    <>
      <div className="flex items-center justify-center h-[100vh] bg-slate-500 overflow-auto max-md:w-[200vw]">
        <div className="flex items-center justify-center bg-slate-700 text-white flex-col border border-blue-300 p-10 rounded-md ">
          <h1 className=" text-5xl py-3 px-5 font-serif bg-slate-500 rounded-md border border-blue-300">AW Calculator</h1>
          <table class="table-auto mt-10">
            <thead>
              <tr>
                <th className="px-3">No. of Children</th>
                <th className="px-3">Rice (80gm)</th>
                <th className="px-3">Daal (30gm)</th>
                <th className="px-3">Egg (5.5rs)</th>
                <th className="px-3">Masala (0.16rs)</th>
                <th className="px-3">Oil (3gm)</th>
                <th className="px-3">Fuel (0.5rs)</th>
                <th className="px-3">Breakfast (1.24rs)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">
                  <input
                    type="number"
                    value={children}
                    onChange={(e) => {
                      setChildren(e.target.value);
                    }}
                    className="input p-1 w-20 bg-slate-700 outline-none"
                    required
                  />
                </td>
                <td className="text-center">{80 * children}</td>
                <td className="text-center">{30 * children}</td>
                <td className="text-center">{5.5 * children}</td>
                <td className="text-center">{0.16 * children}</td>
                <td className="text-center">{3 * children}</td>
                <td className="text-center">{0.5 * children}</td>
                <td className="text-center">{1.24 * children}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
