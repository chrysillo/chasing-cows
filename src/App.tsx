import { useEffect, useState } from "react";
import { generateNewField } from "./functions";
import "./App.css";

function App() {
  const [output, setOutput] = useState<Output>({
    field: [],
    cows: 0,
    herds: 0,
  });

  useEffect(() => {
    setOutput(generateNewField());
  }, []);

  return (
    <div>
      <table>
        <tbody>
          {output.field.map((item, index) => (
            <tr key={index}>
              {item.map((col, i) => (
                <td key={i}>{item[i]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div>Herds: {output.herds}</div>
      <div>Cows: {output.cows}</div>
      <button onClick={() => setOutput(generateNewField())}>Generate</button>
    </div>
  );
}

export default App;

interface Output {
  field: number[][];
  cows: number;
  herds: number;
}
