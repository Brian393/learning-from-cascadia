<style scoped>
.quote {
  font-weight: bold;
  font-style: italic;
  color: #333333;
  text-align: center;
}

.video {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
}

.video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="aside-content">
    <div class="title">
      <h1>Coal, Oil, Gas:<br>None Shall Pass</h1>
    </div>
    <img src="images/OilGas.jpg" />
    <br />
    <div class="caption">Portland City Hall, Nov. 4, 2015</div>
    <br />
    <div class="accordion_title">legends</div>
    <Accordion :open="false">
      <div class="flex">
        <img src="icons/red.png" style="vertical-align: middle;" />&nbsp;Fossil terminal stopped<br><br><img src="icons/yellow.png" style="vertical-align: middle;" />&nbsp;Fossil terminal suspended<br><br><img src="icons/black.png" style="vertical-align: middle;" />&nbsp;Fossil terminal operational
      </div>
    </Accordion><br>

    <div class="justify">
      <p>
        One thing Cascadia has to teach is activism&mdash;successful activism.
        Success takes professional organizations and spontaneous grassroots movements. The
        following sections of the map have been developed with an advocacy
        group,
        <a href="https://columbiariverkeeper.org" target="_blank" rel="nofollow"
          >Columbia Riverkeeper</a
        >, in solidarity with dozens of regional organizations and with millions
        of people.
      </p>

      <p>So what's the situation?</p>

      <p>
        From the 2000s onward North America has witnessed a surge in oil and gas
        extraction, driven by the spread of unconventional techniques like
        hydraulic fracking, but also by deliberate government policies. Wild
        schemes, improvised crews, ramshackle equipment: nothing was too quick
        or too dirty for the energy tycoons exploiting North Dakota's Bakken and
        Canada's Tar Sands. But all that dinosaur blood needed deepwater ports
        on the Pacific Ocean in order to reach the world's thirstiest markets in
        Asia.
      </p>

      <p>

        Fortunately there was something between the devil and the deep
        blue sea: namely, the environmental activists of Oregon, Washington and British
        Columbia.

      </p>

      <p>
        As these river defenders are well aware, the Lower Columbia, from Portland to the mouth of the estuary,
        remains the multi-billion-dollar prize for the export industry. Here,
        climate-wrecking energy can flow in by pipeline, or even worse from the safety standpoint, by rail,
        and ocean-going tankers can carry it away from numerous underused ports
        on either side of the Washington-Oregon border. Or at least, they could carry it away, if the
        region's inhabitants would let them.
      </p>

      <p>
        Over the last decade, a dozen proposed oil, coal and liquified natural
        gas terminals have been stopped dead in the Columbia River alone. Taking a remarkable
        step forward in December 2015, Portland's city council used zoning
        regulations to pass a
        <a
          href="https://www.portlandoregon.gov/citycode/article/557499"
          target="_blank"
          rel="nofollow"
          >resolution</a
        >
        banning any installation of new fossil fuel terminals and any expansion
        of previously existing ones. Successful protest movements continue
        unfolding to this day. But on June 3, 2016, the fiery derailment of a
        Union Pacific train carrying explosive Bakken crude through the Columbia
        Gorge town of 
      <span
        class="maplink"
        @click="
          emit('set-map-view', { center: [-121.406, 45.685], resolution: 20 })
        "
        >Mosier, Oregon</span
      >, showed just how dangerous the commerce in
        energy still is. And despite the disaster, moves are again underway to
        increase oil-by-rail in the region.
      </p>

      <img src="images/tar_sands_route.png" style="width: 100%; height: auto;">
      <div class="caption">source: 
        <a
          href="https://www.nrdc.org/stories/bomb-train-derailment-sparked-resistance-columbia-river-gorge"
          target="_blank"
          rel="nofollow"
          >NRDC</a
        ></div>

      <p>
        Click on the markers to see how an unprecedented spectrum of grassroots
        activists, teachers, students, faith-based groups, health professionals,
        unions, social-justice movements, tribes, environmentalists, NGOs and
        principled public officials have held the
        <a
          href="https://www.sightline.org/?s=Thin+Green+Line&args%5Byear%5D=&args%5Bregion%5D=&args%5Bcategory%5D=&args%5Bauthor%5D="
          target="_blank"
          rel="nofollow"
          >Thin Green Line</a
        >, blocking the implementation of some of the world's most devastating
        energy plans - in particular, the full exploitation of Canada's Tar Sands, know as the most destructive extraction project on earth.
      </p>

      <p>
        This story is hardly over. The yellow markers represent projects that have been halted, but not abandoned; and the black marker shows an operational terminal used for the transfer from railcars to freighters. Going forward, it will take a lot of solidarity to hold that vital line.
        </p>
      <br />
    <div class="accordion_title">sources</div>
    <Accordion>
      <p>The information displayed here has been provided by the Sightline Institute:</p>
      <p><a href="https://www.sightline.org/2017/06/20/mapping-the-thin-green-line/" target="_blank" rel="nofollow">https://www.sightline.org/2017/06/20/mapping-the-thin-green-line/</a><br><br>Click the link to explore the resistance to fossil-fuel terminals across Cascadia.</p>
      <br />
    </Accordion><br>
      </div>
    </div>
</template>

<script>
import AppLightBox from "../../components/AppLightBox.vue";
import Accordion from "../../components/Accordion.vue";

export default {
  name: "WatershedHanfordFloods",
  components: {
    Accordion,
    AppLightBox,
  },
  data: function () {
    return {
      megaImages: [
        {
          src: "images/CascadiaMegaregionFullsize.jpg",
        },
      ],
    };
  },
  methods: {
    emit: function (method, args) {
      this.$eventBus.emit(method, args);
    },
  },
  mounted: function () {
    window?.twttr?.widgets?.createTimeline(
      {
        sourceType: "url",
        url: "https://twitter.com/ColumbiaRKeeper",
      },
      this.$refs.riverkeeper
    );
  },
};
</script>
