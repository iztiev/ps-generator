<script lang="ts">
  import './style.css';
  import type { TLetter } from '../../types';
  import Letter from '../Letter/index.svelte';
  
  export let word: string;

  export let isAnswer: boolean;

  let letters: TLetter[] = word.split('') as TLetter[];
</script>

<div class="letters-container">
  {#each letters as letter}
  <Letter {letter} {isAnswer} />
  {/each}
</div>
