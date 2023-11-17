import { useEffect, useState } from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import { marked } from "marked";

export default function App() {
	const [inputValue, setInputValue] = useState("");
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
		<div className="container-xl">
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
