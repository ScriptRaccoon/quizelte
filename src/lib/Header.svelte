<header>
	<a
		href="https://github.com/ScriptRaccoon/quizelte"
		rel="noreferrer"
		target="_blank"
	>
		<img src="./github-logo.svg" alt="github logo" /></a
	>
	<h1>Quizelte</h1>
	<small>A quiz about web development</small>
</header>

<style lang="scss">
	header {
		padding: 30px 0px;
		text-align: center;
		h1 {
			font-weight: 500;
			font-size: 44px;
		}
		small {
			text-decoration: underline;
			text-underline-offset: 4px;
		}
		a {
			position: absolute;
			top: 10px;
			right: 10px;
			color: white;
			text-decoration: none;
			opacity: 0.8;
			&:hover,
			&:focus-visible {
				opacity: 1;
			}
			img {
				width: 18px;
			}
		}
	}
</style>
