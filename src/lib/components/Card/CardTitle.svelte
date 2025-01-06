<script lang="ts">
    import type { Snippet } from "svelte";
	const { children }: { children?: Snippet } = $props();
</script>

<div class="title">{@render children?.()}</div>

<style>

.title {
	margin: 4px 0 4px 0;
	font-weight: bold;
	font-size: 12pt;
	position: sticky;
	top: 0;
	z-index: 1;
}

</style>