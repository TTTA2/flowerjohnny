<script lang="ts">
    import type { Snippet } from "svelte";
    import Ripple from "./Ripple.svelte";

	const { children, selected = false, onclick }: 
	{
		children?: Snippet, 
		onclick?: (e: MouseEvent) => void, 
		selected?: boolean,

	} = $props();

	const handleClick = (e: MouseEvent) => {
		onclick?.call(undefined, e);
	}

</script>

<div onclick={handleClick} class="cornner" class:selected={selected}>
	<Ripple>
		<div class:selected={selected} class="item">{@render children?.()}</div>
	</Ripple>
</div>

<style>

.cornner {
	position: relative;
	border-radius: 12px;
	padding: 4px;
}

.selected {
	background-color: var(--md-sys-color-secondary-container);
}

.item {
	user-select: none;
	padding: 6px;
	padding-left: 4px;
	border-radius: 12px;
}


</style>