<script lang="ts">
  import './style.css';
  import type { TLetter } from '../../types';

  export let letter: TLetter;

  export let isAnswer: boolean;

  $: mode = isAnswer ? 'letter--answer' : 'letter--base';
</script>

<div class={['letter', mode].join(' ')}>
  {letter}
</div>
