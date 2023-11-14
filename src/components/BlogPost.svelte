<script>
    import scribble from "$lib/graphics/scribble.svg";
    /**
     * @type {string | undefined}
     */
    export let image = undefined;
    export let published = "n/a";
    export let author = "author";
</script>

<div class="flex flex-col items-center pt-8 pb-8">
    <h1 class="text-5xl text-center max-w-[700px]">
        <slot name="title">Title</slot>
    </h1>
    <img class="w-60" src={scribble} alt="Scribble" />
    <p class="text-xl">{author}</p>
    <p class="text-xl">{published}</p>
    {#if image}
        <div
            class="mt-20 mb-20 w-[400px] outline-dashed outline-2 outline-palette-900 outline-offset-2"
        >
            <img src={image} alt="Blog" />
        </div>
    {:else}
        <div class="mt-8 mb-8" />
    {/if}
    <p class="text-2xl w-[80%]">
        <slot name="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper
            eget duis at tellus at urna condimentum mattis pellentesque. Morbi
            tristique senectus et netus et malesuada. Ut ornare lectus sit amet
            est placerat. Duis convallis convallis tellus id interdum velit
            laoreet id donec. Vulputate odio ut enim blandit. Morbi tempus
            iaculis urna id volutpat. Amet luctus venenatis lectus magna
            fringilla urna porttitor rhoncus dolor. Duis ultricies lacus sed
            turpis tincidunt id. Ac turpis egestas maecenas pharetra. Placerat
            in egestas erat imperdiet sed euismod nisi porta. Dolor purus non
            enim praesent. Fermentum iaculis eu non diam phasellus vestibulum.
            Adipiscing elit pellentesque habitant morbi tristique senectus et.
            Ut porttitor leo a diam. Lobortis mattis aliquam faucibus purus in
            massa. Diam sit amet nisl suscipit adipiscing bibendum est
            ultricies. Ac tincidunt vitae semper quis lectus nulla at volutpat
            diam.
        </slot>
    </p>
</div>
