<script lang="ts">
	import { fade } from "svelte/transition";
	export let correctQuestions: number[] = [];
	export let incorrectQuestions: number[] = [];
	const ratio =
		correctQuestions.length /
		(correctQuestions.length + incorrectQuestions.length);
	const showLines = ratio > 0 && ratio < 1;
	const praise =
		ratio < 0.4
			? "Meh."
			: ratio < 0.7
			? "Good!"
			: ratio < 1
			? "Awesome!"
			: "Perfect!";
</script>

<section
	out:fade={{ duration: 400 }}
	in:fade={{ duration: 400, delay: 400 }}
>
	<p>
		You got {correctQuestions.length} questions correct and {incorrectQuestions.length}
		incorrect.
	</p>
	<p>
		{praise}
	</p>
	<div style:--ratio={ratio} class:showLines class="chart" />

	<form on:submit|preventDefault>
		<button type="submit">Restart</button>
	</form>
</section>

<style lang="scss">
	p {
		text-align: center;
		font-size: 24px;
	}

	.chart {
		position: relative;
		--size: 140px;
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
		margin: 40px auto;
		box-shadow: 0px 0px 20px #0005;
		outline: 2px solid white;
		background: repeating-conic-gradient(
			var(--correct-color) 0%,
			var(--correct-color) calc(var(--ratio) * 100%),
			var(--incorrect-color) calc(var(--ratio) * 100%),
			var(--incorrect-color)
		);

		&.showLines {
			&::after,
			&::before {
				content: "";
				position: absolute;
				width: 2px;
				height: calc(0.5 * var(--size));
				left: calc(50% - 1px);
				background-color: white;
			}

			&::before {
				transform-origin: bottom;
				rotate: calc(var(--ratio) * 360deg);
			}
		}
	}

	form {
		text-align: center;
	}
</style>
