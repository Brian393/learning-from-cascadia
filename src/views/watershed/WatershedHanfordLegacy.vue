<style scoped>
.video {
  position: relative;
  padding-bottom: 74.88%;
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
      <h1>The remains</h1>
    </div>
    <img src="images/Hanford/B_reactor.png" class="fullwidth" />
    <div class="caption">Workers inserting fuel rods to B Reactor</div>
    <br />
    <div class="accordion_title">legends</div>
    <Accordion :open="false">
      <div class="flex">For the identification of each legacy infrastructure or waste release site, just roll the mouse over the feature, or click if using a mobile phone.</div>
    </Accordion><br>
    <p>
      To understand the Hanford legacy, you have to know something about the
      production process.
    </p>

    <p>
      Cylinders of enriched uranium, each about 9 inches long and 1.5 inches
      wide, were encased in aluminum to facilitate handling. These relatively
      small slugs were inserted into the middle of long metal tubes set within a
      graphite reactor core, so as to spark a chain reaction. As the uranium atoms broke
      apart into fragments—that's 
      <span
        class="maplink"
        @click="
        emit('set-map-view', { center: [-119.653, 46.6303], resolution: 4 })
        "
        >"nuclear fission"</span
      >—multiple transuranic
      products were formed, including small quantities of highly radioactive
      substances such as strontium-90, technetium-99, cesium-127, iodine-129 and
      plutonium-239.
    </p>

    <p>
      During the fission process, the hot slugs were cooled by river water at a
      rate of some 30,000 gallons per minute. Anti-corrosion chemicals such as
      hexavalent chromium were added. There were no closed cooling circuits, no
      heat exchangers, no steaming towers: the water was just pumped back to the
      river after a few hours in a retention pond. Finally the slugs were pushed
      all the way through the graphite core until they dropped into a pool of
      water where the shortest-lived radioactive isotopes were allowed to decay
      for a two to three-month period.
    </p>

    <p>
      A railroad car then conveyed the slugs to the processing plants on the 
      <span
        class="maplink"
        @click="
        emit('set-map-view', { center: [-119.574, 46.545], resolution: 12 })
        "
        >Central Plateau</span
      >, three hundred feet above the river. There the aluminum
      coating was dissolved in acid, exposing the radioactive materials. The
      initial acid bath was followed by a series of complex chemical treatments,
      each stripping away unwanted impurities, but also leaving behind hot
      wastes and precipitates. Hanford processed nearly twenty million fuel rods
      in the period from 1944 to 1987, yielding some seventy-four tons of
      weapons-grade plutonium.
    </p>

    <img src="images/PlutoniumButton.png" class="fullwidth" />
    <div class="caption">Finished product: a plutonium "button"</div>

    <p>
      Before you on the map is the real yield: a labyrinth of abandoned
      buildings, collapsing tunnels, decaying pipes and equipment, rusting
      drums, dried pools, contaminated ditches, pits and burial grounds, as well
      as 177 leaking underground storage tanks holding roughly 56 million
      gallons of radioactive waste. Over a period of roughly two decades (1968-1986) the liquid component of
      this waste was transferred from the oldest single-shell tanks into 28
      somewhat newer 
      <span
        class="maplink"
        @click="
        emit('set-map-view', { center: [-119.5207, 46.5535], resolution: 2 })
        "
        >double-shell tanks</span
      >. However, water has subsequently
      infiltrated into the remaining sludge in some of the 149 older tanks,
      while leaks have been reported in the newer ones. In the most recent major
      incident (2017), a sealed underground railroad tunnel leading to a
      plutonium-uranium extraction plant located on the Central Plateau suddenly
      collapsed, leaving a hole open to the sky.
    </p>

    <p>
      Roll the mouse over the diagrams. Each piece of the legacy is identified
      by an official name and number. On the Central Plateau, processing plants
      are connected to storage tanks by a tangle of pipelines. The stains of
      unplanned releases and migrating contamination sites envelop the ruins of
      the wartime facilities. The remaining buildings are gradually being
      disassembled by work crews, leaving only freshly capped underground tanks
      and earth scraped bare by bulldozers. At the same time, however, new
      buildings are constructed to support the cleanup effort, including a
      $17-billion-plus vitrification plant which, if ever successfully
      completed, would encase high-level radioactive was in impermeable glass
      logs for storage across the centuries.
    </p>

    <p>
      Pan the map to the 
        <span
        class="maplink"
        @click="
          emit('set-map-view', { center: [-119.542, 46.69], resolution: 10 })
        "
        >reactor sites along the river</span
      >. Cooling water intakes and outfalls can be observed along the bank, as
      well as large retention ponds nearer to the reactors. Process sewers snake
      out in every direction, bearing witness to the large quantities of water
      that bathed all the phases of production. Dumping sites and unplanned
      releases are indicated with colored patches, just as on the Plateau.
      Scroll the cursor over the black architectural footprints to see images of
      the reactors themselves.
    </p>

    <p>
      What remains beyond the shrouded monuments is a deeper and more mobile
      legacy: the contaminant plumes moving through the groundwater, toward the
      river.
    </p>
    <br />
    <div class="accordion_title">sources</div>
    <Accordion>
      <p>Data for this page was retrieved from the Pacific Northwest National Laboratory's Phoenix viewer:</p>
      <p><a href="https://phoenix.pnnl.gov/phoenix/apps/gallery/index.html" target="_blank" rel="nofollow">https://phoenix.pnnl.gov/phoenix/apps/<br>gallery/index.html</a></p>
      <br />
    </Accordion>
  </div>
</template>
<style scoped>
.flex {
  display: flex;
  flex-direction: column;
}
.flex div {
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
}
.flex img {
  margin-right: 0.5em;
}
</style>
<script>
import AppLightBox from "../../components/AppLightBox.vue";
import Accordion from "../../components/Accordion.vue";

export default {
  name: "WatershedHanfordLegacy",
  components: {
    Accordion,
    AppLightBox,
  },
  methods: {
    emit: function (method, args) {
      this.$eventBus.emit(method, args);
    },
  },
};
</script>
