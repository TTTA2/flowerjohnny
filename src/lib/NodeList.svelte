<script lang="ts">
import type { Snippet, SvelteComponent } from "svelte";
import type { DocNode } from "../internal/node/node";
import ListItem from "./components/ListItem.svelte";
import StickyTitle from "./StickyTitle.svelte";

type Props = {
    nodes: DocNode[],
    parentNode?: DocNode,
    selectedNode?: DocNode,
    children?: Snippet,
    onSelectNode: (node: DocNode) => void,
    currentHeight: number,
    render?: (type: "title" | "nodeGroup", height: number) => void,
    onClickHeader?: () => void,
}

let { nodes, parentNode, selectedNode, onSelectNode, children, currentHeight, render, onClickHeader }: Props = $props();

let element: HTMLElement | undefined = $state(undefined);
let height = $state(0);
let listHeight = $state(0);

$inspect(listHeight);

const hasChildren = $derived(nodes.length > 0);

const handleClickNode = (node: DocNode) => {
    onSelectNode?.call(undefined, node);
}

const handleClickHead = () => {
    onClickHeader?.call(undefined);
    // element?.toScroll();
}

$effect(() => {
    if (hasChildren) {
        render?.call(undefined, "title", height);
    }
});

$effect(() => {
    if (hasChildren) {
        render?.call(undefined, "nodeGroup", listHeight);
    }
});

</script>

{#if hasChildren}
    <div bind:this={element} bind:clientHeight={listHeight}>
        <StickyTitle onclick={handleClickHead} style={`top: ${currentHeight}px`} bind:height={height}>{parentNode?.caption ?? "親"}</StickyTitle>
        {#each nodes as node}
            <ListItem selected={selectedNode?.id == node.id} onclick={() => handleClickNode(node)}>{node.caption}</ListItem>
        {/each}
        {@render children?.()}
    </div>
{/if}

<style>
 

</style>