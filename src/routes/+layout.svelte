<script>
    import "../app.css";
    import "@fontsource/playpen-sans";

    import Header from "../components/Header.svelte";
</script>

<Header />
<slot />

<style lang="postcss">
    :global(html) {
        background-image: url("pattern.svg");
        background-repeat: repeat;
        font-family: "Playpen Sans";
        color: #606f49;
    }
    :global(html)::selection {
        background-color: #97a97c;
    }
</style>
