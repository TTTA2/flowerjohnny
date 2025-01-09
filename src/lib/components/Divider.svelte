<script lang="ts">

	const { direction }: { direction: "verctial" | "horizon" } = $props();

</script>

{#if direction=="horizon"}
	<md-divider></md-divider>
{/if}

{#if direction=="verctial"}
	<md-hdivider></md-hdivider>
{/if}

<style>

md-hdivider {
    box-sizing: border-box;
    background-color: var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));
    display: flex;
    width: var(--md-divider-thickness, 1px);
    height: 100%;
}

</style>