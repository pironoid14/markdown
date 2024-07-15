import { useState } from "react";
import { marked } from "marked";
import './App.css';

function App() {
  const [text, setText] = useState('# H1 ## H2  `code`  ![alt text](image.jpg)  > blockquote  - First item  - Second item  - Third item  { "firstName": "John","lastName": "Smith","age": 25} [title](https://www.example.com) **bold text** ')
  return (
    <div className="App">
      <textarea id="editor" onChange={(event) => {
        setText(event.target.value);
      }}
        value={text}
      >

      </textarea>
      <div
        id="preview"
       dangerouslySetInnerHTML={{
        __html:marked(text)
       }}
      >

      </div>
    </div>

  );
}

export default App;
