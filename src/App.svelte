<script lang="ts">
	import { fly, scale } from "svelte/transition";
	import { cubicIn, cubicOut } from "svelte/easing";
	import Header from "./lib/Header.svelte";
	import Results from "./lib/Results.svelte";
	import { questions } from "./questions";

	let currentQuestionIndex = 0;
	let correctQuestions: number[] = [];
	let incorrectQuestions: number[] = [];
	let choice: null | number = null;
	let submitted = false;
	let resultMessage = "";
	let showResults = false;

	$: currentQuestion = questions[currentQuestionIndex];
	$: progress = currentQuestionIndex + 1 + "/" + questions.length;

	function submitForm() {
		submitted = true;
		if (choice == currentQuestion.correctAnswer) {
			resultMessage = "That's correct!";
			correctQuestions.push(currentQuestionIndex);
		} else {
			resultMessage = "Sorry, that's not correct.";
			incorrectQuestions.push(currentQuestionIndex);
		}
		setTimeout(() => {
			window.scrollTo(0, document.body.scrollHeight);
		}, 200);
	}

	function showNextQuestion() {
		if (currentQuestionIndex < questions.length - 1) {
			submitted = false;
			choice = null;
			resultMessage = "";
			currentQuestionIndex++;
		} else {
			showResults = true;
		}
	}

	function restart() {
		currentQuestionIndex = 0;
		correctQuestions = [];
		incorrectQuestions = [];
		choice = null;
		submitted = false;
		resultMessage = "";
		showResults = false;
	}
</script>

<Header />

<main>
	{#if !showResults}
		{#key currentQuestionIndex}
			<form
				class:submitted
				on:submit|preventDefault={submitForm}
				in:fly={{
					x: -200,
					duration: 400,
					easing: cubicOut,
					delay: 420,
				}}
				out:fly={{ x: 200, duration: 400, easing: cubicIn }}
			>
				<div class="container">
					<small class="progress">{progress}</small>
					<h2>{currentQuestion?.question}</h2>
					<div class="answers">
						{#each currentQuestion?.answers as answer, index}
							<input
								id="input{index}"
								disabled={submitted}
								type="radio"
								bind:group={choice}
								name="question{currentQuestionIndex}"
								value={index}
							/>
							<label
								class="answer"
								for="input{index}"
								class:correct={submitted &&
									index ==
										currentQuestion.correctAnswer}
								class:incorrect={submitted &&
									choice == index &&
									index !=
										currentQuestion.correctAnswer}
							>
								{answer}
							</label>
						{/each}
					</div>
					{#if submitted}
						<div
							transition:scale|local={{ duration: 300 }}
							class="result"
						>
							<p>{resultMessage}</p>
							{#if currentQuestion.explanation}
								<p>{currentQuestion.explanation}</p>
							{/if}
						</div>
					{/if}
					<menu>
						<button
							disabled={submitted || choice == null}
							type="submit">Submit</button
						>
						<button
							disabled={!submitted}
							type="button"
							on:click={showNextQuestion}
						>
							{#if currentQuestionIndex < questions.length - 1}
								Next
							{:else}
								Show results
							{/if}
						</button>
					</menu>
				</div>
			</form>
		{/key}
	{:else}
		<Results
			on:submit={restart}
			{correctQuestions}
			{incorrectQuestions}
		/>
	{/if}
</main>

<style lang="scss">
	main {
		width: min(95vw, 500px);
		margin: 0px auto;
		position: relative;
	}

	form {
		position: absolute;
		width: 100%;
		padding-bottom: 20px;

		.container {
			background-color: var(--form-color);
			padding: 0px 20px;
			border-radius: 10px;
			box-shadow: 0px 0px 20px #fff4;
		}

		.progress {
			transform: translate(15px, -24px);
			float: right;
			font-size: 14px;
			opacity: 0.7;
		}

		h2 {
			padding: 30px 0px;
			text-align: center;
			font-weight: 400;
		}

		.answers {
			display: flex;
			flex-direction: column;
			gap: 20px;
			margin-bottom: 20px;

			input[type="radio"] {
				position: absolute;
				opacity: 0;
				left: -100vw;

				&:checked + .answer {
					background: linear-gradient(
						to bottom right,
						var(--correct-color),
						var(--answer-color)
					);
				}
			}

			.answer {
				box-shadow: 0px 0px 8px #0003,
					2px 2px 10px #fff5 inset;
				padding: 15px;
				border-radius: 5px;
				cursor: pointer;
				background: var(--answer-color);

				&.correct {
					background: var(--correct-color) !important;
				}

				&.incorrect {
					background: var(--incorrect-color) !important;
				}
			}
		}

		&.submitted .answer {
			cursor: initial;
		}

		.result {
			text-align: center;
			font-size: 24px;
		}

		menu {
			padding: 20px 0px;
			display: flex;
			justify-content: center;
			gap: 15px;
		}
	}
</style>
