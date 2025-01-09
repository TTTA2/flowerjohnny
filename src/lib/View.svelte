<script lang="ts">
import { createNodes } from "../internal/node/parser";
    import Button from "./components/Button.svelte";
    import Toast from "./components/Toast.svelte";

const { content }: { content: string } = $props();
const textNodes = $derived(createNodes(content));

const firstTextNode = $derived(textNodes.filter(node => node.type == "Text"));

const isContainsTemplateNode = $derived(textNodes.find(node => node.type == "Template") != undefined);
const isSingleTextNode = $derived(firstTextNode?.length == 1);
const isShowToolBar = $derived(isSingleTextNode && !isContainsTemplateNode);

let viewElement: HTMLElement | undefined = undefined;

$inspect(isShowToolBar);

let isVisibleToast = $state(false);

const handleClickCopy = (text: string) => {
	// navigator.clipboard.writeText(text);
	// isVisibleToast = true;

	searchInPage("こんにてゃ");
	
}

function searchInPage(query: string) {

	if (!viewElement) return ;

	const startOffset = 0; // Start at third node: 101 E. Main St.
	const endOffset = 2; // End at fifth node: Dodge City, KS
	const range = document.createRange();
	range.setStart(viewElement, startOffset);

	console.log(range);

	range.setEnd(viewElement, endOffset);

	console.log(viewElement.innerHTML);

	const mark = document.createElement("mark");
	range.surroundContents(mark);

}

$effect(() => {

	

});

</script>
<div bind:this={viewElement} class="wrapper" class:view-grid-mode={isShowToolBar}>

	<div class="toolbar" class:hidden={!isShowToolBar}>
		<Button variant="tonal" onclick={() => handleClickCopy(firstTextNode[0]?.text ?? "")}>コピー</Button>
	</div>

	<div class="view">
		{#each textNodes as node}
	
			{#if node.type == "Text"}
				<div class:text={true}>
					{ node.text }
				</div>
			{/if}
	
			{#if node.type == "Description"}
				<div class:text={true} class:description={true}>
					<div>
						<div class="circle">
							<svg class="information" xmlns="http://www.w3.org/2000/svg" scale="2" width="10" height="10" viewBox="0 0 2 10">
								<!-- <rect x="0" y="0" width="2" height="2" /> -->
								<circle cx="1" cy="1" r="1"></circle>
								<rect x="0" y="3" width="2" height="8"/>
							</svg>
						</div>
					</div>
	
					<div class="textWrapper">
						<div>
							{ node.text }
						</div>
					</div>
				</div>
			{/if}
	
			{#if node.type == "Template"}
				<div class:text={true} class:template={true}>
					<code>{ node.text }</code>
					<div class="right">

						<Button variant="tonal" onclick={() => handleClickCopy(node.text)}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="16" height="16">
								<!-- 最初の矩形（コピー元） -->
								<rect x="8" y="8" width="40" height="40" fill="none" stroke="black" stroke-width="4"/>
								
								<!-- 2番目の矩形（コピー先） -->
								<rect x="18" y="18" width="40" height="40" fill="none" stroke="black" stroke-width="4"/>
								
								<!-- 矩形をつなぐ線（コピーを表現） -->
								<line x1="48" y1="28" x2="58" y2="28" stroke="black" stroke-width="4"/>
								<line x1="58" y1="28" x2="58" y2="48" stroke="black" stroke-width="4"/>
							</svg>
							コピー
						</Button>
					</div>
				</div>
			{/if}
	
		{/each}
	
		<Toast bind:visible={isVisibleToast} message="コピーしました" duration={1000}></Toast>
		
	</div>
</div>

<style>

.hidden {
	display: none !important;
}

.wrapper {
	overflow: auto;
}

.view {
	padding: 6px;
	overflow: auto;
}

.view-grid-mode {
	display: grid;
	grid-template-rows: auto 1fr;
	overflow: auto;
}

.toolbar {
	display: flex;
	justify-content: end;
	padding: 6px;
}

.text {
	padding: 6px;
	white-space: pre;
}

.textWrapper {
	display: flex;
}

.description {
	background-color: var(--md-sys-color-primary);
	color: var(--md-sys-color-on-primary);
	border-radius: 4px;
	display: flex;
	flex-direction: row;
	gap: 6px;
	padding: 16px;
	font-weight: bold;
}

.template {
	display: flex;
	background-color: var(--md-sys-color-on-surface);
	color: var(--md-sys-color-surface);
	flex-direction: column;
	border-radius: 4px;
	padding: 16px;
}

.template code {
	font-family: inherit;
	overflow-x: auto;
}

.right {
	display: flex;
	justify-content: flex-end;
}

.check {
	--checkmark-width: 20px;
	--checkmark-height: 20px;
	--checkmark-weight: 3px;
	--checkmark-margin-top: -4px;
	padding: 4px;
}

.circle {
	display: flex;
	/* justify-content: center; */
	padding: 4px;
	/* padding: 7px; */
	/* display: flex; */
	/* justify-content: center; */
}

.information {
	display: flex;
	justify-content: center;
	border-radius: 50%;
	background-color: var(--md-sys-color-on-primary);
	padding: 4px;
	fill: var(--md-sys-color-primary);
}

</style>

<!-- 
.check .circle {
	box-sizing: content-box;
	width: var(--checkmark-width);
	height: var(--checkmark-height);
	border-radius: 50%;
	background-color: var(--md-sys-color-on-primary);
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	/* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); */
}

.check .circle .checkmark {
	width: calc(var(--checkmark-width) / 2);
	height: calc(var(--checkmark-height) / 4);
	border: solid var(--md-sys-color-primary);
	border-width: 0px 0px var(--checkmark-weight) var(--checkmark-weight);
	transform: rotate(-45deg);
	position: inherit;
	margin-top: var(--checkmark-margin-top);
}

.check .circle .info {
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.check .circle .info::after {
	content: '';
	width: 12px;
	height: 12px;
	border-radius: 50%;
	background-color: var(--md-sys-color-primary);;
	margin-top: 4px;
} -->
