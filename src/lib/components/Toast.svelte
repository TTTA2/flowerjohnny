<script lang="ts">

import { fly, fade } from 'svelte/transition';

let {
	message,
	duration = 3000,
	visible = $bindable(false),
	onClose,
}: {
	message: string;
	duration: number;
	visible: boolean;
	onClose?: () => void;
} = $props();

	$effect(() => {

		if (visible) {

			setTimeout(() => {
				visible = false;
				//トーストが閉じる際にコールバックを呼び出す
				onClose?.call(undefined);
			}, duration);
		}
	});

</script>

{#if visible}
	<div class="toast" transition:fly={{ opacity: 1, y:100, duration: 500 }}>
		<md-elevation part="elevation" aria-hidden="true"></md-elevation>
		{message}
	</div>
{/if}

<style>

	.toast {
		display: flex;
		position: fixed;
		bottom: 20px;
		left: 50%;
		background-color: var(--md-sys-color-inverse-surface);
		color: white;
		justify-items: center;
		justify-content: center;
		border-radius: var(--md-sys-shape-corner-extra-small, 4px);
		font-size: 16px;
		height: 48px;
		padding: 0 16px 0 16px;
		flex-direction: column;
		--md-elevation-level: 3;
		/* md.sys.color.shadow */
	}
	

/* 
	.toast {
		position: fixed;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		background-color: rgba(0, 0, 0, 0.8);
		color: white;
		padding: 10px 20px;
		border-radius: 5px;
		font-size: 16px;
		transition: opacity 0.3s ease;
	}
	 */
	/* .toast {
		position: fixed;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		background-color: rgba(0, 0, 0, 0.8);
		color: white;
		padding: 10px 20px;
		border-radius: 5px;
		font-size: 16px;
		opacity: 0;
		transition: opacity 0.3s ease;
	} */

	.toast.visible {
		display: block;
		opacity: 1;
	}

	.toast.hidden {
		display: none;
	}

</style>
