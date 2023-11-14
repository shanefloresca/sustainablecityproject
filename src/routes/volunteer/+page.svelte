<script>
    import scribble from "$lib/graphics/scribble.svg";
    import OrgCard from "../../components/OrgCard.svelte";
    import { orgStore } from "../../stores/stores";
</script>

<div class="flex flex-col items-center mt-8 -space-y-2">
    <h1 class="text-4xl text-center">The Sustainable<br />Organizations</h1>
    <img class="w-56" src={scribble} alt="Scribble" />
</div>

<div class="flex flex-col items-center mt-8">
    <p class="text-xl text-center w-[800px]">
        Consider choosing one organization that resonates with your passion and
        values. Whether it's reforestation, marine conservation, or sustainable
        development, your unique skills and dedication can contribute to
        positive change. By volunteering your time, you become an integral part
        of the solution, actively working towards a healthier and more
        sustainable future.
    </p>
</div>

<div class="flex flex-col items-center mt-24 mb-8 gap-y-16">
    {#each $orgStore as org}
        <OrgCard image={org.image} link={org.link}>
            <h1 slot="name">{org.name}</h1>
            <p slot="content">{org.content}</p>
        </OrgCard>
    {/each}
</div>
