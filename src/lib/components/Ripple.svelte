<script lang="ts">

    import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	
	interface IProps extends HTMLAttributes<HTMLDivElement> {
		container?: Snippet
	}

	const props: IProps = $props();
	const children = props.children;
	const container = props.container;
	
	let n_conatiner, ripple, control;

	//@ts-ignore
	ripple?.attach(control);

</script>

{#snippet content()}
	<md-ripple bind:this={ripple}></md-ripple>
	<div bind:this={control}>{@render children?.()}</div>		
{/snippet}

{#if container}
	<!-- <div bind:this={n_conatiner} class={`container`} style={props.style}> -->
		{@render content?.()}
	<!-- </div> -->
{:else}
	{@render content?.()}
{/if}



<style>

.container {
	position: relative;
}

</style>