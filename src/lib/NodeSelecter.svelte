<script lang="ts">
    import { draw } from "svelte/transition";
    import { getChildNodes, type DocNode } from "../internal/node/node";
    import Ripple from "./components/Ripple.svelte";
    import PrimaryTab from "./components/Tab/PrimaryTab.svelte";
    import Tab from "./components/Tab/Tab.svelte";
    import TabPanel from "./components/Tab/TabPanel.svelte";
    import VirtualScrollView from "./components/VirtualScrollView.svelte";
    import NodeList from "./NodeList.svelte";

	type Props = {
		nodes: DocNode[],
		onChangeSelectedNodes?: (selectionNodes: DocNode[]) => void,
		onScrollMoving?: (top: number) => void,
		parentHeight?: number,
	}

	let { nodes, onChangeSelectedNodes, onScrollMoving, parentHeight }: Props = $props();

	const selectionNodes: DocNode[] = $state([]);
	const titleHeights: number[] = $state([]);
	const nodeHeights: number[] = $state([]);

	let element: HTMLElement | undefined = $state();
	let elementHeight = $state(0);

	let isRenderedFinally = $state(false);

	let isReserveSelectedScrollGroupIndex = $state(-1);
	let isReserveSelectedScroll = $state(false);


	const h = $derived(elementHeight - (parentHeight ?? 0));

	// const nodeTree = $derived(selectionNodes.reduce((prev, current, index, arr) => []))

	// $inspect(selectionNodes);
	// $inspect(nodeHeights);

	const onSelectNode = (node: DocNode, index: number = 0) => {

		selectionNodes.splice(index);
		selectionNodes.push(node);

		onChangeSelectedNodes?.call(undefined, selectionNodes);

		isReserveSelectedScroll = true;
	}

	const onClickHeader = (index: number = 0) => {

		let height = 0;

		for (let i = 0; i < index; i++) {
			height += nodeHeights[i];
		}

		onScrollMoving?.call(undefined, height);
	}

	const onCardRender = (type: "title" | "nodeGroup", height: number, index: number) => {

		if (type == "title") {
			titleHeights[index] = height;
		}

		if (type == "nodeGroup") {

			nodeHeights[index] = height;

			if (index == 0) {
				isRenderedFinally = true;
			} else {
				isRenderedFinally = false;
			}
		}
	}

	const getTopPosition = (index: number) => {
		const calcHeights = titleHeights.toSpliced(index);
		return calcHeights.reduce((pre, current) => pre + current, 0);
	}

	const getRecalcHeight = (_elementHeight: number, _parentHeight:number) => {

		const  test = [...nodeHeights];
		const c = getTopPosition(titleHeights.length - 1);
		const a = _parentHeight - test[test.length - 1] - c - 8;
		return a;
	}

	const spaceHeight = $derived(getRecalcHeight(elementHeight, parentHeight ?? 0));

	$effect(() => {

		if (isReserveSelectedScroll && isRenderedFinally) {

			//スクロールさせる量を計算する
			const index = selectionNodes.length - 1;
			let max = nodeHeights[index];

			console.log(index, max, [...nodeHeights]);

			const a = nodeHeights.toReversed();

			for (let i = 0; i < a.length - 1; i++) {
				max -= nodeHeights[i];
			}

			max -= titleHeights[titleHeights.length - 1] - 8;

			console.log(max, [...nodeHeights]);

			onScrollMoving?.call(undefined, max);		
			isReserveSelectedScroll = false;
		}
	});

</script>

{#snippet nodeList(node: DocNode | undefined, index: number)}

	<NodeList 
		parentNode={node} 
		selectedNode={selectionNodes[index]} 
		nodes={getChildNodes(nodes, node)}
		onSelectNode={(targetNode) => onSelectNode(targetNode, index)}
		currentHeight={getTopPosition(index)}
		render={(type: "title" | "nodeGroup", height: number) => onCardRender(type, height, index)}
		onClickHeader={() => onClickHeader(index)}
		>

		{#if selectionNodes[index]} 
			{@render nodeList(selectionNodes[index], index+1)}
		{/if}

	</NodeList>

{/snippet}

<view-nodeList bind:this={element}>
	<div bind:clientHeight={elementHeight}>
		{@render nodeList(undefined, 0)}
	</div>
	<div class="spacer" style:height={`${spaceHeight}px`}></div>
</view-nodeList>


<style>

	view-nodeList {
		
		/* overflow: auto; */
		display: block;
		padding: 8px;
	}

	.spacer {
		width: 100%;
	}

</style>
