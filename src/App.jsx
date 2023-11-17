import { useEffect, useState } from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import { marked } from "marked";

let defaultInput = `<h1>My name is Israel</h1><h2>I love anime, chess, snooker and lots more</h2>
<a href='https://www.google.com'>google.com</a>
<span>you can search stuff usinf the link above</span>
<pre>code block...</pre>
<ul>
  <li>Fruits</li>
</ul>
<img src='' alt='profile img' />
<strong>dkingisreal@gmail.com</strong>`

export default function App() {
	const [inputValue, setInputValue] = useState(defaultInput);
	const [markedDownText, setMarkedDownText] = useState(null);
	const [editorIconClicked, setEditorIconClicked] = useState(false);
	const [previewerIconClicked, setPreviewerIconClicked] = useState(false);

	const getMarkdownText = (inputValue) => {
		let parsedInput = marked.parse(inputValue);
		return { __html: parsedInput };
	};
	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};
	useEffect(() => {
		let val = getMarkdownText(inputValue);
		setMarkedDownText(val);
	}, [inputValue]);

	return (
		<div className="container-fluid" style={{height:'100vh', background:'-webkit-linear-gradient(45deg, purple, wheat 80%)'}}>
			<div className="w-100 p-1">
				<h3 className="text-center" style={{ cursor: "default" }}>
					Markdown Previewer
				</h3>
			</div>
			{!previewerIconClicked && (
				<Editor
					inputValue={inputValue}
					handleInputChange={handleInputChange}
					editorIconClicked={editorIconClicked}
					setEditorIconClicked={setEditorIconClicked}
				/>
			)}
			{!editorIconClicked && (
				<Previewer
					markedDownText={markedDownText}
					previewerIconClicked={previewerIconClicked}
					setPreviewerIconClicked={setPreviewerIconClicked}
				/>
			)}
		</div>
	);
}
