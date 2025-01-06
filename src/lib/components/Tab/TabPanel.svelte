<script lang="ts">
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

interface Props extends HTMLAttributes<HTMLDivElement> {
	tabId: string,
	hidden?: boolean,
}

let { tabId, ...others } : Props = $props();

let isHidden = $state(false);
let element: HTMLElement | undefined = undefined;

$effect(() => {
	if (!element) return;
	element.dataset.tabId = tabId;
	console.log([element]);
});

</script>

<tab-panel bind:this={element} {...others} role="tabpanel">
	<div hidden={isHidden}>
		{@render others.children?.() }
	</div>
</tab-panel>

<style>

	tab-panel {
		display: block;
	}

	tab-panel-content {

	}

</style>