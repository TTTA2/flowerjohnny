<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
import type { DocNode } from "../internal/node/node";
import ListItem from "./components/ListItem.svelte";

interface Props extends HTMLAttributes<HTMLDivElement> {
	nodes: DocNode[],
	selectedNode?: DocNode,
	onClickNode?: (node: DocNode) => void,
}

const { nodes, selectedNode, onClickNode }: Props = $props();

const visbleNodes = $derived(nodes.filter(node => node.content != undefined));

const handleClickNode = (node: DocNode) => {
	onClickNode?.call(undefined, node);
}

</script>

<div>
	{#each visbleNodes as node, index}
		<ListItem selected={selectedNode?.id == node.id} onclick={() => handleClickNode(node)}>{node.caption}</ListItem>
	{/each}
</div>