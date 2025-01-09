type TokenDictionary = {
	[key: string]: {
		type: "Description" | "Template",
	}
};

type TextNode = {
	type: "Description" | "Template" | "Text",
	text: string,
}

const tokenDictionary: TokenDictionary = {
	"$": {
		type: "Description",
	},

	"%": {
		type: "Template",
	}
};

export const createNodes = (source: string) => {

	const textNodes: TextNode[] = [];
	let nodeStartIndex = 0;
	let i = 0;
	
	let currentToken = "";

	for (i = 0; i < source.length; i++) {

		const token = source[i];
		const blockwords = tokenDictionary[token];

		if (blockwords && (currentToken == "" || currentToken == token)) {

			const word = token.repeat(5);

			if (source.slice(i, i + word.length) == word) {

				if ((i) - nodeStartIndex > 0) {

					const segment = source.slice(nodeStartIndex, i);
					const trimedSegment = segment.replace(/(^\n)/g, "");//.replace(/\n$/g, "\n\n");
					// const trimedSegment = currentToken == "" ? segment : segment.trim();
					const type = currentToken == "" ? "Text" : tokenDictionary[token]?.type ?? "Text";

					textNodes.push({ type, text: trimedSegment });
				}

				i += word.length;
				nodeStartIndex = i;

				currentToken = currentToken == "" ? token : "";
			}
		}
	}

	if ((i) - nodeStartIndex > 0) {
		const s = source.slice(nodeStartIndex, i).replace(/(^\n)/g, "");
		textNodes.push({ type: "Text", text: s });
		// textNodes.push({ type: "Text", text: s.slice(1, s.length) });
	}

	console.log(textNodes);

	return textNodes;
}

