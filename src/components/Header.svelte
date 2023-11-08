<script>
    import logo from "$lib/graphics/logo.svg";

    let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<header
    class={`sticky top-0 z-50 grid items-center grid-cols-3 p-6 ${
        scrollY > 100 ? "bg-palette-100" : "bg-none"
    }`}
>
    <a class="flex flex-row items-center gap-x-2" href="/">
        <img class="w-5" src={logo} alt="Sustainable City Project Logo" />
        <h1 class="text-xl font-bold">Sustainable City Project</h1>
    </a>
    <ul class="flex flex-row gap-x-10 justify-self-center">
        <li>
            <a class="text-lg font-bold" href="/">Home</a>
        </li>
        <li>
            <a class="text-lg font-bold" href="/blog">Blog</a>
        </li>
        <li>
            <a class="text-lg font-bold" href="/volunteer">Volunteer</a>
        </li>
    </ul>
</header>
