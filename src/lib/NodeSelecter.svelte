<script lang="ts">
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
	}

	let { nodes, onChangeSelectedNodes }: Props = $props();

	const selectionNodes: DocNode[] = $state([]);
	const nodeHeights: number[] = $state([]);

	let element: HTMLElement | undefined = $state();

	// const nodeTree = $derived(selectionNodes.reduce((prev, current, index, arr) => []))

	// $inspect(selectionNodes);
	// $inspect(nodeHeights);

	const onSelectNode = (node: DocNode, index: number = 0) => {
		selectionNodes.splice(index);
		selectionNodes.push(node);
		onChangeSelectedNodes?.call(undefined, selectionNodes);
	}

	const onClickHeader = (index: number = 0) => {
		console.log(nodeHeights, index);
		element?.scrollTo({ top: getTopPosition(index), behavior: "smooth" })
	}

	const onCardRender = (height: number, index: number) => {
		nodeHeights[index] = height;
		console.log(index, height);
	}

	const getTopPosition = (index: number) => {
		const calcHeights = nodeHeights.toSpliced(index);
		return calcHeights.reduce((pre, current) => pre + current, 0);
	}

</script>

{#snippet nodeList(node: DocNode | undefined, index: number)}

	<NodeList 
		parentNode={node} 
		selectedNode={selectionNodes[index]} 
		nodes={getChildNodes(nodes, node)}
		onSelectNode={(targetNode) => onSelectNode(targetNode, index)}
		currentHeight={getTopPosition(index)}
		render={(height: number) => onCardRender(height, index)}
		onClickHeader={() => onClickHeader(index)}
		>
		{#if selectionNodes[index]} 
			{@render nodeList(selectionNodes[index], index+1)}
		{/if}

	</NodeList>

{/snippet}

<view-nodeList bind:this={element}>

	{@render nodeList(undefined, 0)}

	<!-- <button onclick={() => selectedTabId="aa"}>test</button> -->

	<!-- <div id="photos-panel" role="tabpanel" aria-labelledby="photos-tab">
		
	</div> -->
	  


	<!-- {@render nodeList(undefined, -1)}	 -->

	<!-- <NodeList nodes={topNodes} selectedNode={selectionNodes[0]} {onSelectNode}>
		{#each selectionNodes as node, index}
			<NodeList 
				parentNode={node} 
				selectedNode={selectionNodes[index+1]} 
				nodes={getChildNodes(nodes, node)} 
				onSelectNode={(targetNode) => onSelectNode(targetNode, index + 1)}>
			</NodeList>
		{/each}
	</NodeList> -->

</view-nodeList>

<!-- <view-nodeList> -->
<!-- <VirtualScrollView items={[].fill({test: "test"})}></VirtualScrollView> -->

<!-- </view-nodeList> -->


<style>

	view-nodeList {
		
		overflow: auto;
		display: block;
		/* padding: 8px; */
	}

</style>
