<script lang="ts">
    import NodeSelecter from "./NodeSelecter.svelte";
    import { nodes } from "../stories/testData";
    import { getChildNodes, type DocNode } from "../internal/node/node";
    import TemplatesList from "./TemplatesList.svelte";
    import View from "./View.svelte";
    import Tab from "./components/Tab/Tab.svelte";
    import PrimaryTab from "./components/Tab/PrimaryTab.svelte";
    import TabPanel from "./components/Tab/TabPanel.svelte";
    import Divider from "./components/Divider.svelte";

    let selectedNode: DocNode | undefined = $state();
    let selectedTemplateNode: DocNode | undefined = $state();
    

    const onChangeSelectedNodes = (nodes: DocNode[]) => {
        console.log(nodes);

        selectedNode = nodes[nodes.length - 1];
    }

    const onChangeSelectedTemplateNode = (node: DocNode) => {
        selectedTemplateNode = node;
    }

    const onKeyDown = (e: KeyboardEvent) => {
        console.log(e);

        if (e.key == "F" && e.shiftKey && e.ctrlKey) {
            e.preventDefault();
            selectedTabId = "bb";
        }
    }

	let selectedTabId = $state("aa");
	$inspect(selectedTabId);

    let nodeSelecterElement: HTMLElement | undefined = $state(undefined);
    let nodeSelecterHeight = $state(0);

    const handleScrollMoving = (top: number) => {
        nodeSelecterElement?.scroll({ top, behavior: "smooth" });
    }


</script>

<svelte:window onkeydown={onKeyDown} />

<div class="grid-columns">

	<Tab bind:value={selectedTabId} overflow={true}>

		{#snippet tabs()}
			<PrimaryTab id="aa">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                    <circle cx="32" cy="32" r="8" fill="currentColor"/>
                    <circle cx="16" cy="16" r="5" fill="currentColor"/>
                    <circle cx="48" cy="16" r="5" fill="currentColor"/>
                    <circle cx="16" cy="48" r="5" fill="currentColor"/>
                    <circle cx="48" cy="48" r="5" fill="currentColor"/>
                    <line x1="32" y1="32" x2="16" y2="16" stroke="currentColor" stroke-width="4"/>
                    <line x1="32" y1="32" x2="48" y2="16" stroke="currentColor" stroke-width="4"/>
                    <line x1="32" y1="32" x2="16" y2="48" stroke="currentColor" stroke-width="4"/>
                    <line x1="32" y1="32" x2="48" y2="48" stroke="currentColor" stroke-width="4"/>
                </svg>
                ノード
            </PrimaryTab>
			<PrimaryTab id="bb">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                    <circle cx="28" cy="28" r="18" stroke="currentColor" stroke-width="6" fill="none"/>
                    <line x1="42" y1="42" x2="58" y2="58" stroke="currentColor" stroke-width="6"/>
                </svg>
                <span>検索<span style="font-weight:bold;font-size:80%;">（Ctrl+Shift+F）</span></span>
            </PrimaryTab>
		{/snippet}

		{#snippet tabPanels()}
			<div role="tabpanel" data-tabId="aa" style="height:100%;">
                <grid-selecter>
                    <div class="node-selecter-background" bind:this={nodeSelecterElement} bind:clientHeight={nodeSelecterHeight}>
                        <NodeSelecter nodes={nodes} onScrollMoving={handleScrollMoving} {onChangeSelectedNodes} parentHeight={nodeSelecterHeight}></NodeSelecter>
                    </div>
                    <TemplatesList nodes={getChildNodes(nodes, selectedNode)} onClickNode={onChangeSelectedTemplateNode}></TemplatesList>
                </grid-selecter>
			</div>

		{/snippet}

	</Tab>

    <Divider direction="verctial"></Divider>

    <View content={selectedTemplateNode?.content ?? ""}></View>
    <!-- <div>{selectedNode?.caption}</div> -->
    <!-- <div>
        <button onclick={()=>navigator.clipboard.writeText("test")}>adawda</button>
    </div> -->
</div>

<style>

    .grid-columns {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: 100%;
        grid-template-columns: 0.5fr auto 0.5fr;
    }

    grid-selecter {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 0.5fr 0.5fr;
        grid-template-rows: 100%;
        overflow: hidden;
    }

    .node-selecter-background {
        background-color: var(--md-sys-color-surface-container-low, white);
        color: var(--md-sys-color-on-surface, white);
        overflow: auto;
        position: relative;
    }

    hr {
        padding: 0;
        margin: 0;
    }

    .iconTab {

        /* display: flex; */


    }

</style>