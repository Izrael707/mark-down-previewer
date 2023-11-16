import { useState } from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

export default function App() {
	const [inputValue, setInputValue] = useState("");
	function handleInputChange(event) {
		setInputValue(event.target.value);
	}
	return (
		<div className="container-xl">
			<div className="w-100 p-2">
				<h3 className="text-center" style={{ cursor: "default" }}>
					Markdown Previewer
				</h3>
			</div>
			<div className="mt-2 px-5">
				<Editor inputValue={inputValue} handleInputChange={handleInputChange} />
			</div>
			<div className="mt-4 px-2">
				<Previewer inputValue={inputValue} />
			</div>
		</div>
	);
}
