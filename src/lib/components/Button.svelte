<script lang="ts">

    import type { HTMLAttributes, HTMLButtonAttributes } from "svelte/elements";

	interface Props extends HTMLAttributes<HTMLDivElement> {
		variant: "filled" | "outline" | "elevated" | "tonal" | "text",  
	}

	let { ...props } : Props = $props();
	const { children, variant } = props;

</script>

{#if variant === "filled"}
	<md-filled-button {...props}>{@render children?.()}</md-filled-button>
{/if}

{#if variant === "outline"}
	<md-outlined-button {...props}>{@render children?.()}</md-outlined-button>
{/if}

{#if variant === "elevated"}
	<md-elevated-button {...props}>{@render children?.()}</md-elevated-button>
{/if}

{#if variant === "tonal"}
	<md-filled-tonal-button {...props}>{@render children?.()}</md-filled-tonal-button>
{/if}

{#if variant === "text"}
	<md-text-button {...props}>{@render children?.()}</md-text-button>
{/if}


