
<script lang="ts">

	import type { HTMLAttributes } from "svelte/elements";
	
	interface Props extends HTMLAttributes<HTMLDivElement> {
		id: string,
		active?: string,
	}
	
	const props : Props = $props();	

</script>

<md-primary-tab id={props.id} aria-controls="panel">
	{@render props.children?.() }	
</md-primary-tab>