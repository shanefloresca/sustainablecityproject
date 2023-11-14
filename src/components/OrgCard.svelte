<script>
    import placeholder from "$lib/img/placeholder-square.png";
    export let image = placeholder;
    export let link = "/";
</script>

<div class="flex flex-row items-center justify-around w-[100%]">
    <a class="w-48" href={link}>
        <img
            class="rounded-full outline-dashed outline-2 outline-offset-2 outline-palette-900"
            src={image}
            alt="Logo"
        />
    </a>
    <div class="flex flex-col items-center gap-y-12">
        <a
            href={link}
            class="text-4xl text-center underline underline-offset-8 w-[600px]"
        >
            <slot name="name">Name</slot>
        </a>
        <p class="text-xl text-center w-[800px]">
            <slot name="content"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</slot
            >
        </p>
    </div>
</div>
