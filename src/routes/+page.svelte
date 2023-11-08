<script>
    import scribble from "$lib/graphics/scribble.svg";
    import earth from "$lib/graphics/earth.svg";
    import placeholder from "$lib/img/placeholder.png";
    import logo from "$lib/graphics/logo.svg";
    import philippines from "$lib/graphics/philippines.svg";
    import harmony from "$lib/graphics/harmony.svg";
    import factory from "$lib/graphics/factory.svg";
    import tree from "$lib/graphics/tree.svg";
    import windmill from "$lib/graphics/windmill.svg";
    import recycling from "$lib/graphics/recycling.svg";
    import water from "$lib/graphics/water.svg";
    import volunteer from "$lib/graphics/volunteer.svg";
    import bike from "$lib/graphics/bike.svg";
</script>

<div class="flex flex-col gap-y-4">
    <!-- FRONT PAGE -->

    <div class="flex flex-row items-center mt-8 mb-8 justify-evenly">
        <div class="flex flex-col gap-y-16">
            <h1 class="text-7xl">
                Saving the environment<br />before we're all dead.
            </h1>
            <div class="flex flex-col -space-y-4">
                <p class="text-2xl">
                    An environmentalist project<br />built by creators
                </p>
                <img class="-ml-1 w-80" src={scribble} alt="Scribble" />
            </div>
        </div>
        <img class="w-80" src={earth} alt="Earth" />
    </div>

    <!-- CAMPAIGN VIDEO -->

    <img
        class="w-[800px] self-center outline-dashed outline-2 outline-offset-2 mt-16 mb-16 outline-palette-900"
        src={placeholder}
        alt="Campaign Video"
    />

    <!-- SUSTAINABLE DEFINITION -->

    <div class="flex flex-row items-center justify-around mt-8">
        <div class="flex flex-row items-center gap-x-4">
            <img class="w-16" src={logo} alt="Logo" />
            <div class="flex flex-col items-center gap-y-1">
                <h1 class="text-6xl">Sustainable</h1>
                <p class="text-xl">suhs-tay-nuh-bl</p>
            </div>
        </div>
        <p class="text-xl w-[500px]">
            of, relating to, or being a method of harvesting or using a resource
            so that the resource is not depleted or permanently damaged
        </p>
    </div>

    <!-- DESCRIPTION -->

    <p
        class="text-3xl outline-dashed outline-2 outline-offset-8 text-center outline-palette-900 w-[80%] self-center mt-16 mb-16"
    >
        In the Philippines, rapid urbanization can lead to greater poverty as
        local governments cannot provide services for all of their citizens.
        Increasing emissions of air pollutants, with significant impacts on
        health, will result from the use of renewable and nonrenewable energy
        sources.
    </p>

    <!-- PHILIPPINES -->

    <img
        class="w-[400px] self-center mt-8 mb-8"
        src={philippines}
        alt="Philippines"
    />

    <!-- WHO WE ARE -->

    <div class="flex flex-row items-center mt-24 justify-evenly">
        <img class="w-60" src={harmony} alt="Harmony" />
        <div class="flex flex-col items-center w-[800px]">
            <div class="flex flex-col items-center -space-y-3">
                <h1 class="text-4xl">Who We Are</h1>
                <img class="w-60" src={scribble} alt="Scribble" />
            </div>
            <p class="text-2xl text-center">
                We are a student-run organization dedicated to conserving the
                natural world we love for future generations. Aspiring
                environmentalists around you have come together to share their
                ideas and draw attention to ecological issues and how you can
                help. We’re focused on educating as many people as possible that
                climate change is here right now, in your school, but you can
                help save your own homes by bolstering local efforts, direct
                action, and reaching out a helping hand.
            </p>
        </div>
    </div>

    <!-- OUR MISSION -->

    <div class="flex flex-row items-center mt-24 justify-evenly">
        <img class="w-60" src={factory} alt="Factory" />
        <div class="flex flex-col items-center w-[800px]">
            <div class="flex flex-col items-center -space-y-3">
                <h1 class="text-4xl">Our Mission</h1>
                <img class="w-60" src={scribble} alt="Scribble" />
            </div>
            <p class="text-2xl text-center">
                Our sole shared purpose is to spread awareness regarding
                ecological issues caused by urbanization and how to prevent
                these issues from spreading on a much bigger scale. Every acre
                we preserve and every river mile we conserve begins with you.
                Your support helps us take on the dual threats of climate change
                and intensive urban growth.
            </p>
        </div>
    </div>

    <!-- OUR GOALS -->

    <div class="flex flex-row items-center mt-24 justify-evenly">
        <img class="w-40" src={earth} alt="Earth" />
        <div class="flex flex-col items-center w-[800px]">
            <div class="flex flex-col items-center -space-y-3">
                <h1 class="text-4xl">Our Goals</h1>
                <img class="w-60" src={scribble} alt="Scribble" />
            </div>
            <p class="text-2xl text-center">
                We have years, not decades, to take on nature’s revenge because
                of human activities. By working together, we’re overcoming
                barriers and enacting our solutions. Together, we find a way.
            </p>
        </div>
    </div>

    <!-- TREE -->

    <img class="self-center w-64 mt-24 mb-24" src={tree} alt="Tree" />

    <!-- GET INVOLVED -->

    <div class="flex flex-col items-center self-center -space-y-2">
        <h1 class="text-4xl">Get involved. This is how you can help.</h1>
        <img class="w-72" src={scribble} alt="Scribble" />
    </div>

    <p class="text-2xl text-center w-[80%] self-center">
        There are so many ways to make positive changes for our environment.
        Volunteer with us. Learn how to reduce your carbon footprint. Donate to
        conservation work. Join advocacies, and campaigns, and spread the news
        through infographics, posters, and flyers. Recycling one plastic bottle
        can save millions.
    </p>

    <h1 class="text-3xl text-center w-[900px] self-center mt-8 mb-8">
        “If we change our thoughts from 'it's too late' to, 'there's still
        hope', we might see some change in the world.”
    </h1>

    <!-- THINGS WE PROMOTE -->

    <div class="flex flex-col items-center mt-12 -space-y-2">
        <h1 class="text-4xl">Things We Promote</h1>
        <img class="w-64" src={scribble} alt="Scribble" />
    </div>

    <!-- ROW 1 -->

    <div class="flex flex-col mt-8">
        <div class="flex flex-row items-center justify-evenly">
            <div class="flex flex-row items-center gap-x-4">
                <img class="w-20" src={windmill} alt="Windmill" />
                <div class="flex flex-col items-center gap-y-6">
                    <h1 class="text-3xl">Renewable Energy</h1>
                    <p class="text-xl w-[500px] text-center">
                        Fossil fuels are the dirtiest and most dangerous energy
                        sources, while nuclear and modern renewable energy
                        sources are vastly safer and cleaner.
                    </p>
                </div>
            </div>

            <div class="flex flex-row items-center gap-x-4">
                <img class="w-20" src={recycling} alt="Recycling" />
                <div class="flex flex-col items-center gap-y-6">
                    <h1 class="text-3xl">Recycling</h1>
                    <p class="text-xl w-[500px] text-center">
                        Recycling reduces the waste that goes to polluting
                        landfills and incinerators and reduces the need to
                        devote land and resources to traditional waste disposal
                        methods.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- ROW 2 -->

    <div class="flex flex-col mt-8">
        <div class="flex flex-row items-center justify-evenly">
            <div class="flex flex-row items-center gap-x-4">
                <img class="w-20" src={tree} alt="Tree" />
                <div class="flex flex-col items-center gap-y-6">
                    <h1 class="text-3xl">Tree Planting</h1>
                    <p class="text-xl w-[500px] text-center">
                        Trees help clean the air we breathe, filter the water we
                        drink, and provide habitat to over 80% of the world's
                        terrestrial biodiversity.
                    </p>
                </div>
            </div>

            <div class="flex flex-row items-center gap-x-4">
                <img class="w-16" src={water} alt="Water" />
                <div class="flex flex-col items-center gap-y-6">
                    <h1 class="text-3xl">Conserving Water</h1>
                    <p class="text-xl w-[500px] text-center">
                        Using water-saving techniques can save you money and
                        diverts less water from our rivers, bays, and estuaries,
                        which helps keep the environment healthy.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- ROW 3 -->

    <div class="flex flex-col mt-8 mb-8">
        <div class="flex flex-row items-center justify-evenly">
            <div class="flex flex-row items-center gap-x-4">
                <img class="w-20" src={volunteer} alt="Volunteer" />
                <div class="flex flex-col items-center gap-y-6">
                    <h1 class="text-3xl">Volunteering</h1>
                    <p class="text-xl w-[500px] text-center">
                        Volunteering is all about bringing a community together
                        to create a local impact. Head to our Volunteer page to
                        learn more.
                    </p>
                </div>
            </div>
            <div class="flex flex-row items-center gap-x-4">
                <img class="w-32" src={bike} alt="Bike" />
                <div class="flex flex-col items-center gap-y-6">
                    <h1 class="text-3xl">Bike More, Drive Less</h1>
                    <p class="text-xl w-[500px] text-center">
                        Bicycle riding uses minimal fossil fuels and is a
                        pollution-free mode of transport. Bikes reduce the need
                        to build, service and dispose of cars.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
