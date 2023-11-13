<script>
    import BlogPost from "../../components/BlogPost.svelte";
    import infographic1 from "$lib/img/infographic-1.jpg";
    import infographic2 from "$lib/img/infographic-2.jpg";
    import infographic3 from "$lib/img/infographic-3.jpg";
</script>

<svelte:head>
    <title>The Sustainable Blog</title>
</svelte:head>

<div class="flex flex-col gap-y-16">
    <BlogPost author="Chlsy Velasco" published="November 11, 2023">
        <h1 slot="title">We Are so Young and Naive. And We Got Things Done.</h1>
        <p slot="content">
            According to Climate Education from Yale's Program on Climate Change
            Communication, younger generations (generation Z) are more engaged
            than older adults on several measures. For instance, younger
            generations are more likely to view global warming as personally
            important and/or to express a willingness to engage in climate
            activism (protests to the government, campaigns, advocacies, etc).
            When it comes to actually contacting government officials to urge
            them to take action to reduce global warming, however, Millennials
            are no more likely than Baby Boomers or members of the Silent
            Generation to report having done so.<br /><br />According to Teen
            Vogue, climate justice groups that help to save the environment are
            youth-led, meaning that most of these groups or organizations are
            led by 20-year-old individuals and lower. Including our
            organization, the Sustainable City Project.
        </p>
    </BlogPost>
    <BlogPost
        author="Jonathan Ortiz"
        published="November 3, 2023"
        image={infographic1}
    >
        <h1 slot="title">What are the Benefits of Recycling Metals?</h1>
        <p slot="content">
            Metal recycling minimizes air pollution, preserves the environment,
            saves natural resources, and cuts garbage that is sent to landfills.
            Metal recycling delivers more environmental benefits. It conserves
            all-natural resources by reducing down on greenhouse gas emissions
            with little energy.<br /><br />Creating a new metal produces the
            best quantity of greenhouse gas emissions compared with making
            things from recycled metal. Metal recycling maintains different
            sorts of energy, such 92% for aluminum, 90% for copper, and 56% for
            steel. The metal sector plays a vital influence in the UK economy.
            In this post, you can learn some essential benefits of recycling
            scrap metal.<br /><br />Benefits of Recycling Metals<br /><br />1.
            Good for the Environment<br />2. Conserves Energy<br />3. Helps the
            Economy<br />4. Earns More Profit<br />5. Free Up Your Space<br />6.
            Conserves Natural Resources<br /><br />In this blog, you have
            learned metal recycling is a believable form of recycling. If you
            see any unused metal items in your home, then reuse or recycle them
            instead of throwing them out into landfills.
        </p>
    </BlogPost>
    <BlogPost
        author="Harry Sagun"
        published="November 3, 2023"
        image={infographic2}
    >
        <h1 slot="title">Ways to Save Electricity</h1>
        <p slot="content">
            There are several ways to save electricity<br /><br />
            1. Is Turn off lights, always switch off lights when your going out or
            leaving a room, just make it a habit to only light up the area you're
            actually using it<br />
            2. unplug devices, when electronic devices are not in use, just unplug
            them, this switch can make this process easier<br />
            3. use natural light, this can take advantage of natural sunlight during
            the day by opening curtains and blinds, so this will reduce the need
            for artificial lighting<br />
        </p>
    </BlogPost>
    <BlogPost
        author="Penuel Fuentes"
        published="November 3, 2023"
        image={infographic3}
    >
        <h1 slot="title">Ways to Save Water</h1>
        <p slot="content">
            These are the 6 tips of how to save water<br /><br />
            1. Use your dishwasher instead of hand-washing If washing dishes by hand,
            use a basin of soapy water or plug the sink.<br />
            2. Only run the dishwasher and clothes washer when you have a full load.<br
            />
            3. Get a shower timer and use it as a fun way to teach your kids to take
            shorter showers.<br />
            4. Fix household leaks and save 10,000 gallons of water a year plus 10
            percent on your water bills.<br />
            5. Invest in WaterSense shower heads, toilets, and faucets and save over
            16,000 gallons of water a year.<br />
            6. Replace your standard clothes washer and dishwasher with ENERGY STAR
            models-which save water in addition to energy.
        </p>
    </BlogPost>
</div>
