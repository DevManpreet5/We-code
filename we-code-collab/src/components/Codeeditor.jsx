import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import { useParams } from "react-router-dom";
import "ace-builds/src-noconflict/theme-solarized_light";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/python";
import "ace-builds/src-noconflict/snippets/java";
import "ace-builds/src-noconflict/snippets/javascript";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const { lang, id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const compileCode = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://judge0-ce.p.rapidapi.com/submissions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-RapidAPI-Key":
                "2ed0eae1e4mshe04c9f66f0eb877p1396c2jsn90217767a7aa",
            },
            body: JSON.stringify({
              source_code: code,
              language_id: getLanguageId(lang),
            }),
          }
        );
        const data = await response.json();
        if (isMounted && data.token) {
          const result = await fetch(
            `https://judge0-ce.p.rapidapi.com/submissions/${data.token}?base64_encoded=true`,
            {
              method: "GET",
              headers: {
                "X-RapidAPI-Key":
                  "2ed0eae1e4mshe04c9f66f0eb877p1396c2jsn90217767a7aa",
              },
            }
          );
          const resultData = await result.json();
          const output = atob(resultData.stdout);
          setOutput(output);
        }
      } catch (error) {
        console.error("Error compiling code:", error);
        setOutput(
          "Error compiling code. Please check your code and try again."
        );
      } finally {
        setLoading(false);
      }
    };

    if (code.trim() !== "" && loading) {
      compileCode();
    }

    return () => {
      isMounted = false;
    };
  }, [code, lang, loading]);

  const onChange = (newValue) => {
    setCode(newValue);
  };

  const getLanguageId = (language) => {
    switch (language) {
      case "java":
        return 62;
      case "python":
        return 71;
      case "javascript":
        return 63;
      default:
        return 63; // Default to JavaScript
    }
  };

  const handleCompile = () => {
    setLoading(true);
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="  bg-white border-r-2  border-gray-300 h-screen w-[20%] flex flex-col gap-5">
        <div>
          <div className=" text-black  text-2xl text-center mt-2">
            Participants
          </div>
          <div className="flex flex-col mt-5 px-2 gap-3">
            <div className="flex gap-3  items-center  text-black">
              <div className="h-8 w-8  rounded-full bg-green-100"></div>
              <div>Manpreet singh</div>
            </div>
            <div className="flex gap-3  items-center  text-black">
              <div className="h-8 w-8  rounded-full bg-green-100"></div>
              <div>Manpreet </div>
            </div>
          </div>
        </div>

        <div className="flex  flex-col gap-5 w-[90%] ml-[5%]">
          <img src="/images/facecam2.png"></img>
          <img src="/images/facecam2.png"></img>
        </div>
      </div>

      <AceEditor
        editorProps={{
          $blockScrolling: Infinity,
        }}
        width="55vw"
        height="100vh"
        mode={lang}
        theme="xcode"
        onChange={onChange}
        value={code}
        name="UNIQUE_ID_OF_DIV"
        enableBasicAutocompletion={true}
        enableLiveAutocompletion={true}
        enableSnippets={true}
      />

      <div className="w-[20vw] bg-white border-l-2 border-gray-300">
        <button
          className="text-white mt-9  relative left-1/2  -translate-x-1/2 -trasnlate-y-1/2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleCompile}
          disabled={loading}
        >
          {loading ? "Compiling..." : "Compile"}
        </button>
        <div className="text-black text-lg px-10">{output}</div>
      </div>
    </div>
  );
};

export default CodeEditor;
