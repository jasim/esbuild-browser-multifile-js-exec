/* Sample code shown as starting template when loading the app */

const index_code = `import React, { useState } from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

import {ClickTracker} from "./ClickTracker.js";

ReactDOM.render(<ClickTracker />, document.getElementById('react_root'));
`;

const click_tracker_code = `import React, { useState } from "https://cdn.skypack.dev/react@17.0.1"
import SelectDate from "./SelectDate.js";

export function ClickTracker() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`

const select_date_code = `
import DatePicker from 'https://cdn.skypack.dev/react-date-picker';

export default function SelectDate() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <p>Select a date!</p>
      <DatePicker
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
`
export default [
  {module_name: "index", code: index_code, upload_filename: null},
  {module_name: "ClickTracker", code: click_tracker_code, upload_filename: null},
  {module_name: "SelectDate", code: select_date_code, upload_filename: null}
]
