<script lang="ts">
    import type { Snippet, SvelteComponent } from "svelte";
    import type { HTMLAttributes, HTMLButtonAttributes } from "svelte/elements";
    import Button from "./components/Button.svelte";
    import Ripple from "./components/Ripple.svelte";

	// interface IProps extends HTMLAttributes<HTMLDivElement> {
	// 	height: number,
	// }

	interface IProps extends HTMLAttributes<HTMLDivElement> {
		height: number,
	}

	let { height = $bindable(0), ...props }: IProps = $props();

	let el: HTMLElement | undefined = $state(undefined);

	$effect(() => {
		// let ww = w;
		// height = 
		// height = (el?.getBoundingClientRect().height) ?? 0;
		// console.log(height);
	});

	export const toScroll = () => {
		el?.scrollIntoView({  });
	}

</script>


<div bind:this={el} bind:clientHeight={height} class="title" {...props}>
	<div class="rippleContainer">
		<Ripple>
			<div class="container2">{@render props.children?.()}</div>
		</Ripple>
	</div>

	<!-- <Button variant="text" style="display:block;text-align:left;">{@render props.children?.()}</Button> -->
</div>
<!-- <div bind:this={el} bind:clientWidth={w} class="title" {...props}>{@render props.children?.()}</div> -->

<style>

.title {
	/* margin: 4px 0 4px 0; */
	font-weight: bold;
	font-size: 12pt;
	position: sticky;
	color: var(--md-sys-color-primary);
	background-color: var(--md-sys-color-on-primary);
	z-index: 1;
	cursor: pointer;
	/* padding: 4px; */
	border-radius: 8px;
}

.rippleContainer {
	padding: 6px;
	position: relative;
	border-radius: 8px;
}

.container2 {
	padding: 6px;
}

</style>