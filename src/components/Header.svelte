<script>
    import logo from "$lib/graphics/logo.svg";
    import facebook from "$lib/graphics/facebook-circle.svg";
    import gmail from "$lib/graphics/gmail.svg";

    let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<header
    class={`sticky top-0 z-50 grid items-center grid-cols-3 p-4 ${
        scrollY > 50 ? "bg-palette-100" : "bg-none"
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
    <div class="flex flex-row justify-self-end gap-x-3">
        <a href="https://www.facebook.com/profile.php?id=61553471998676">
            <img class="w-6" src={facebook} alt="Facebook" />
        </a>
        <a
            href="https://mail.google.com/mail/u/0/?fs=1&to=sustainablecityproject@gmail.com&su=Volunteer&tf=cm"
        >
            <img class="w-7" src={gmail} alt="Gmail" />
        </a>
    </div>
</header>
