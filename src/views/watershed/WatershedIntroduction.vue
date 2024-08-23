<template>
  <div class="aside-content">
    <div class="title">
      <h1>Outside in</h1>
    </div>
    <img src="images/waterbody.png" class="fullwidth" />
    <br />
    <div class="caption">Does the territory inhabit you?</div>
    <br />

    <p>
      The Columbia Gorge is one of the most beautiful sights on earth. But a
      watershed is a lot more than a beautiful view.
    </p>

    <p>
      The Columbia River watershed is a far-flung territory including parts of
      six US states and one Canadian province. Its 
      <span
        class="maplink"
        @click="
          emit('set-map-view', { center: [-118.9306, 47.50], resolution: 2400 })">border</span> is traced, not by
      governments or treaties, but by every drop of water that finds a common
      path to the ocean.
    </p>

    <p>
      Rainfall washes over forested slopes and grassy plains. Snow and ice
      collect on mountain peaks. Dew glistens on high deserts. Groundwater
      bubbles up from artesian springs. Pools spill over into rivulets that
      become creeks and gushing torrents, before rejoining rivers that gradually
      converge into a powerful flood. A watershed is defined by endless
      circulation through a territory. What it takes from the clouds, it gives
      back to
      <span
        class="maplink"
        @click="
          emit('set-map-view', { center: [-123.435, 46.213], resolution: 120 })
        "
        >the sea</span
      >.
    </p>

    <p>
      Human bodies are up to 60% water. We too are part of the shed, along with
      other living species. What we do outside ourselves inevitably seeps back
      in.
    </p>

    <p>
      This map is about political ecology. It suggests that human decisions are
      shaped by exterior realities that have always already gotten under our
      skin. Like most maps, this one will guide you to real and imaginary
      places. It will deliver loads of information, with a wealth of
      topographical detail that increases as you zoom in. It will also show you
      texts and images, and it will even talk to you via multimedia recordings.
      The aim is to provide multiple viewpoints on reality. It's an experiment
      in collective perception.
    </p>

    <p>
      The name of this section, "Watershed," uses a standard scientific category that provides an adminstrative frame for resource exploitation, but also for citizen
      activism and advocacy. Two more speculative headings also appear at the
      top: Megaregion and Bioregion. They're like the red and the blue pill.
      Which one will you choose? Which one is which?
    </p>

    <p>
      This project has been made using public research and open-source software,
      with generous contributions from a growing list of local organizations and
      inhabitants. Legends for each map can be found at the top of the text
      column. Sources and collaborators are identified at the end. Pages will be
      added as new possibilities emerge. The whole thing has been coordinated by
      a Portland-based artist and curator, Mack McFarland, and by an inquisitive
      stranger, Brian Holmes, who came to the Pacific Northwest with the
      quixotic hope of "Learning from Cascadia."
    </p>
    <br />
    <div class="accordion_title">navigation</div>
    <Accordion :open="false">
      <h3 slot="header">how to use the map</h3>
      <div class="flex">
        <p>
          The three main sections are accessed through the navigation bar at the top, while specific locations and themes are reached by clicking on the panel items at lower left. The "home" icon on the top bar takes you back to the start. In some cases further buttons appear at the bottom of the map, to guide you through more complex territories. If you see  
      <span
        class="maplink"
        @click="
          emit('set-map-view', { center: [-114.989, 44.117], resolution: 36 })
        "
        >a link colored purple</span
      >, that will take you somewhere interesting. When in doubt, just click on any word or marker or object that looks significant, and there's a good chance it will reveal something.
    </p>

      </div>
    </Accordion>
    <div class="accordion_title">sources</div>
    <Accordion>
      <h3 slot="header">code</h3>
      <p>
        This work is made with public data and free software. Code repository
        <a href="https://github.com/Brian393/learning-from-cascadia" target="blank"
          >here</a
        >.
      </p>
      <h3 slot="header">sources of Watershed basemap:</h3>
      <p>
        --
        <a
          href="https://nhd.usgs.gov/NHDPlus_HR.html"
          target="_blank"
          rel="nofollow"
          >National Hydrology Dataset</a
        >
      </p>
      <p>
        --
        <a
          href="https://www.arcgis.com/home/item.html?id=1b243539f4514b6ba35e7d995890db1d"
          target="_blank"
          rel="nofollow"
          >Esri World Hillshade Layer</a
        >
      </p>
      <p>
        --
        <a
          href="https://www.fws.gov/wetlands/Data/Mapper.html"
          target="_blank"
          rel="nofollow"
          >National Wetlands Inventory</a
        >
      </p>
      <p>
        --
        <a
          href="http://www.cec.org/tools-and-resources/map-files/land-cover-2010-landsat-30m"
          target="_blank"
          rel="nofollow"
          >North American Land Cover Monitoring System</a
        >
      </p>
      <p>
        --
        <a href="https://www.openstreetmap.org" target="__blank"
          >OpenStreetMap</a
        >
      </p>
      <p>
        --
        <a
          href="https://www.bing.com/maps/aerial"
          target="_blank"
          rel="nofollow"
          >Bing Maps Aerial</a
        >
      </p>
      <p>
        --
        <a
          href="https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer"
          target="_blank"
          rel="nofollow"
          >National Geographic World Map</a
        >
      </p>
      <p>
        --
        <a
          href="https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer"
          target="_blank"
          rel="nofollow"
          >USGS Topo Map</a
        >
      </p>
      <p>
        These sources have been combined and put online using two amazing tools:
        <a href="https://www.qgis.org/en/site/" target="_blank" rel="nofollow"
          >QGIS</a
        >
        and
        <a href="https://openlayers.org/" target="_blank" rel="nofollow"
          >OpenLayers</a
        >.
      </p>
      <p>Thanks to all the creators of this fabulous stuff!</p>
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
  name: "WatershedIntroduction",
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
