<script lang="ts">
    import type { HTMLAttributes } from 'svelte/elements';
	import TabPanel from './TabPanel.svelte';
    import type { Snippet, SvelteComponent } from 'svelte';
	
	const getTabs = (): HTMLElement[] => {
		if (!tabControl) return [];
		return Array.from(tabControl?.querySelectorAll("md-primary-tab"));
	}

	const getTabPanels = (): HTMLElement[] => {
		if (!tabControl) return [];
		return Array.from(tabControl?.querySelectorAll(`*[role=tabpanel]`));
		// return Array.from(tabControl?.querySelectorAll("tab-panel"));
	}

	interface Props extends HTMLAttributes<HTMLDivElement> {
		value?: string,
		overflow?: boolean,
		tabs?: Snippet,
		tabPanels?: Snippet,
	}

	let { value = $bindable(""), ...props } : Props = $props();

	let tab: HTMLElement | undefined = $state(undefined);
	let tabControl: HTMLElement | undefined = $state(undefined);
	let tabs: HTMLElement[] = $derived(getTabs());
	let tabPanels: HTMLElement[] = $derived(getTabPanels());

	const changeTab = (e: Event) => {
		//@ts-ignore
		const activeTabIndex: number = e.target?.activeTabIndex ?? 0;
		const id = tabs[activeTabIndex].id;
		selectTab(id);
		value = id;
	}

	const activeTab = (id: string) => {
		for (const tab of tabs) {
			if (tab.id == id) {
				tab.click();
				break;
			}
		}
	}

	const selectTab = (id: string) => {
		for (const tabPanel of tabPanels) {
			tabPanel.style.display = tabPanel.dataset.tabid == id ? "" : "none";
		}
	}
	
	$effect(() => {
		tabControl?.addEventListener("change", changeTab)
	});

	$effect(() => {
		activeTab(value);
		selectTab(value);
	});

</script>

<div class="tcontainer" bind:this={tabControl}>

	<md-tabs bind:this={tab} aria-label="Content to view">
		{@render props.tabs?.()}
	</md-tabs>

	<div class:hmax={props.overflow} class:overflow={props.overflow}>
		{@render props.tabPanels?.()}
	</div>

</div>

<style>

	.tcontainer {
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr;
	}

	.hmax {
		height: 100%;
	}

	.overflow {
		overflow: auto;
	}

</style>