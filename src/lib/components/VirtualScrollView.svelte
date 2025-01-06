<script lang="ts">
	import { onMount } from "svelte";
  
	const { items, renderItem, height }: { items: any[], renderItem: (item: any, index: number) => void, height: number } = $props();
  
	let container: HTMLElement | null = null;
	let scrollOffset = $state(0); // 現在のスクロール位置
	let itemHeights = $state(Array(items.length).fill(0)); // 各アイテムの高さを格納
	let totalHeight = $state(0); // 全アイテムの合計高さ
	let visibleStartIndex = $state(0); // 表示範囲の開始インデックス
	let visibleEndIndex = $state(0); // 表示範囲の終了インデックス
  
	let el: HTMLElement | undefined = undefined;

	// アイテム高さの累積和を計算
	function calculateCumulativeHeights() {
	  totalHeight = itemHeights.reduce((sum, h) => sum + h, 0);
	}
  
	// スクロール位置に基づいて表示範囲を計算
	function calculateVisibleRange() {
	  let sumHeight = 0;
	  visibleStartIndex = 0;
  
	  for (let i = 0; i < itemHeights.length; i++) {
		sumHeight += itemHeights[i];
		if (sumHeight > scrollOffset) {
		  visibleStartIndex = i;
		  break;
		}
	  }
  
	  sumHeight = 0;
	  visibleEndIndex = visibleStartIndex;
  
	  for (let i = visibleStartIndex; i < itemHeights.length; i++) {
		sumHeight += itemHeights[i];
		if (sumHeight > height) {
		  visibleEndIndex = i + 1;
		  break;
		}
	  }
  
	  if (visibleEndIndex === 0) {
		visibleEndIndex = itemHeights.length;
	  }
	}
  
	// スクロールイベントの処理
	function handleScroll() {
	  if (container) {
		scrollOffset = container.scrollTop;
		calculateVisibleRange();
	  }
	}
  
	// アイテムの高さを更新
	function updateItemHeight(index: number, height: number) {
	  if (itemHeights[index] !== height) {
		itemHeights[index] = height;
		calculateCumulativeHeights();
		calculateVisibleRange();
	  }
	}
  
	// 初期化
	onMount(() => {
	  calculateCumulativeHeights();
	  calculateVisibleRange();
	});
  </script>
  
  <div
	bind:this={container}
	style="overflow-y: auto; position: relative; height: {height}px;"
	onscroll={handleScroll}
  >
	<div style="height: {totalHeight}px; position: relative;">
	  {#each items as item, index (item)}
		{#if index >= visibleStartIndex && index < visibleEndIndex}
		  <div
			style="position: absolute; top: {itemHeights.slice(0, index).reduce((sum, h) => sum + h, 0)}px; left: 0; right: 0;"
			bind:this={el}
			onintrostart={() => el && updateItemHeight(index, el.offsetHeight)}
		  >
			{renderItem(item, index)}
		  </div>
		{/if}
	  {/each}
	</div>
  </div>
  
  <style>
	div {
	  box-sizing: border-box;
	}
  </style>
  