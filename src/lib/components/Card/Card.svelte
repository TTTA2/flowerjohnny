<script lang="ts">

    import type { Snippet } from "svelte";

	const { children, variant }: {
		children: Snippet,
		variant: "outline"

	} = $props();

</script>

<div class="card" class:outline={variant==="outline"}>
	{@render children()}
</div>

<style>

.card {
	margin: 8px 0 8px 0;
    padding: 8px 16px 8px 16px;
    border-radius: var(--md-sys-shape-corner-extra-small, 12px);
}

.outline {
    border: solid 1px var(--md-sys-color-outline-variant);
}

</style>