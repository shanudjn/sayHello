import React, { useContext } from "react";
import MDEditor, {commands, EditorContext} from "@uiw/react-md-editor";
import "./interest-detail.css";
import rehypeSanitize from "rehype-sanitize";

function InterestDetail() {
  const [value, setValue] = React.useState("");
  const [mode, setMode] = React.useState('preview');
  

  const isUserLoggedIn = false
  function handleSave(){
    //TODO:saving to db
    console.log(value)
  }
  const Button = () => {
    // const { preview, dispatch } = useContext(EditorContext);
    const isUserLoggedIn = true;
    const click = () => {
      setMode('edit')
    };
    if (isUserLoggedIn ) {
      return (
        <svg width="12" height="12" viewBox="0 0 520 520" onClick={click}>
          <polygon
            fill="currentColor"
            points="0 71.293 0 122 319 122 319 397 0 397 0 449.707 372 449.413 372 71.293"
          />
          <polygon
            fill="currentColor"
            points="429 71.293 520 71.293 520 122 481 123 481 396 520 396 520 449.707 429 449.413"
          />
        </svg>
      );
    }
    return (
      <svg width="12" height="12" viewBox="0 0 520 520" onClick={click}>
      <polygon
        fill="currentColor"
        points="0 71.293 0 122 38.023 123 38.023 398 0 397 0 449.707 91.023 450.413 91.023 72.293"
      />
      <polygon
        fill="currentColor"
        points="148.023 72.293 520 71.293 520 122 200.023 124 200.023 397 520 396 520 449.707 148.023 450.413"
      />
    </svg>
    );
  };

  const codePreview = {
    name: "preview",
    keyCommand: "preview",
    value: "preview",
    icon: <Button />
  };

  return (
    <div className="interest-detail">
      <h1 className="text-3xl font-semibold text-left my-8">shahazad</h1>
      <div className="editor" data-color-mode="light">
        <MDEditor value={value} onChange={setValue} height={500} preview={mode} previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }} extraCommands={[codePreview, commands.fullscreen]}/>
      </div>
      {
        isUserLoggedIn && <><button onClick={()=>handleSave()}className="px-4 py-2 font-mono font-semibold bg-fuchsia-300 text-black border border-black shadow-offset-black my-2">Save</button>
        <button onClick={()=>setMode('edit')} className="px-4 py-2 font-mono font-semibold bg-fuchsia-300 text-black border border-black shadow-offset-black my-2">Edit</button></>
      }
      

    </div>
  );
}

export default InterestDetail;
