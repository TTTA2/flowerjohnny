<script lang="ts">
import type { Snippet, SvelteComponent } from "svelte";
import type { DocNode } from "../internal/node/node";
import Button from "./components/Button.svelte";
import Card from "./components/Card/Card.svelte";
import CardBody from "./components/Card/CardBody.svelte";
import CardTitle from "./components/Card/CardTitle.svelte";
import ListItem from "./components/ListItem.svelte";
import StickyTitle from "./StickyTitle.svelte";

type Props = {
    nodes: DocNode[],
    parentNode?: DocNode,
    selectedNode?: DocNode,
    children?: Snippet,
    onSelectNode: (node: DocNode) => void,
    currentHeight: number,
    render?: (height: number) => void,
    onClickHeader?: () => void,
}

let { nodes, parentNode, selectedNode, onSelectNode, children, currentHeight, render, onClickHeader }: Props = $props();

let element: HTMLElement | undefined = $state(undefined);
let height = $state(0);

const handleClickNode = (node: DocNode) => {
    onSelectNode?.call(undefined, node);
}

const handleClickHead = () => {
    onClickHeader?.call(undefined);
    // element?.toScroll();
}

$effect(() => {
    // console.log(height);
    // console.log(parentNode);
    render?.call(undefined, height);
});

</script>

<div bind:this={element} >
    <StickyTitle onclick={handleClickHead} style={`top: ${currentHeight}px`} bind:height={height}>{parentNode?.caption ?? "親"}</StickyTitle>
    <Card variant="outline">
        <CardTitle> </CardTitle>
        <CardBody>
            {#each nodes as node}
                <ListItem selected={selectedNode?.id == node.id} onclick={() => handleClickNode(node)}>{node.caption}</ListItem>
            {/each}
            <!-- <Button variant="tonal" onclick={(e) => console.log(e)}>aa</Button> -->
        </CardBody>
    </Card>
    
    {@render children?.()}
    
</div>

<style>
 

</style>