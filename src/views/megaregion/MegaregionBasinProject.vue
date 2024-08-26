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
      <h1>Power plants</h1>
    </div>
    <div class="video">
      <iframe
        width="350"
        height="300"
        src="https://www.youtube.com/embed/X0_TAYxCjwU?&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=X0_TAYxCjwU"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    </div>
    <div class="caption">
      "New Farms from Grand Coulee"<br />&mdash;Universal Newsreel, early
      1950s&mdash;
    </div>
    <br />
    <div class="accordion_title">legends</div>
    <Accordion :open="false">
      <div class="flex">Roll the mouse over the map, or touch any feature, to see which kinds of crops are being grown and kind of irrigation is used.</div>
    </Accordion><br><br>

    <p>
      The blue splash at the center of this page is called Potholes
      Reservoir. It's not directly connected to the turbines and pipelines of
      the Grand Coulee Dam, but is instead the result of unforeseen
      seepage from the Bureau of Reclamation's Columbia Basin Project.
    </p>

    <p>
      What you're looking at here is some of the most productive
      agricultural land in the United States, featuring an amazing diversity of
      cultivated plants. Roll the cursor over the fields to identify the crop
      and the watering technique. Zoom closer and canals appear, connected to
      ditches which feed the sprinklers. At full zoom a spyglass opens up to
      show the material reality of the largest federal irrigation scheme in the
      US.
    </p>

    <p>
      All this was planned in the 1930s in an effort to return fertile land to
      thousands of small farmers fleeing the Dust Bowl. But the hydropower of the Grand
      Coulee Dam was used for plutonium production at Hanford Engineering Works during
      World War II, and the irrigation water only started flowing in the early 1950s, 
      during the Great Acceleration of the postwar period. In the end the main
      beneficiaries were not family farmers, but corporate agriculture employing immigrant laborers.
    </p>

    <p>
      Due in part to its redistributive failures, the Columbia Basin Project
      stopped short of completion, leaving all the land east of the dotted white line
      without the promised water. In what's known as the Odessa Subarea,
      farmers and corporate officials were granted special variances to
      dig wells and pump their irrigation water from the acquifer below. Their
      wells now extend as much as two thousand feet down, and they bring up
      briny water, barely fit for agricultural use.
    </p>

    <img src="images/ColumbiaPlateauGroundwater.png" class="fullwidth" /><br />
    <div class="caption">
      source:
      <a
        href="https://www.usbr.gov/pn/programs/eis/odessa/finaleis/exec.pdf"
        target="_blank"
        rel="nofollow"
        >Bureau of Reclamation</a
      >
    </div>

    <p>
      As the acquifer rapidly runs dry, the Columbia River is being called to the rescue yet again.
      To understand this whole situation you have to look north, to the 
      <span
        class="maplink"
        @click="
          emit('set-map-view', { center: [-118.992, 47.954], resolution: 30 })
        "
        >Grand Coulee dam</span
      >. You'll see a narrow canal linking two massive desert lakes. When you zoom in a bit more, the spyglass reveals the 
      <span
        class="maplink"
        @click="
          emit('set-map-view', { center: [-118.992, 47.954], resolution: 2 })
        "
        >extraordinary pipe system</span
      > that rises three hundred feet from the dam's giant pumphouse to fill this canal. Using the electric power of the dam,
      the Bureau of Reclamation has recreated the power of the Ice Age floods that sculpted this desert landscape.
    </p>

    <p>
      Once pumped over the river bluffs, the water of the Columbia is conveyed to the
      Grand Coulee itself, a great linear scar left on the face of the desert
      by the prehistoric Missoula Floods. At the end of this ancient riverbed an aqueduct emerges
      from a dam, then plunges beneath an upsurge of basalt crust, only to
      reemerge a couple of miles away and fill 
      <span
        class="maplink"
        @click="
          emit('set-map-view', { center: [-119.274, 47.472], resolution: 16 })
        "
        >another ancient canyon</span
      >. Ultimately the water is channeled into an irrigation system, whose two main
      branches serve
      <span
        class="maplink"
        @click="
          emit('set-map-view', { center: [-119.4, 46.89], resolution: 240 })
        "
        >the entire project.</span
      > This system can be turbocharged with more dam water pumped by more
      electricity. The seepage of the river into the surrounding bone-dry desert, while not intentional, has been naturalized as
      part of humanity's power to change everything for the better.
    </p>

    <p>
      The desert has been flooded. The aquifer has been drained. Legislation has
      now been passed to complete the Bureau of Reclamation project, drawing
      yet more water from nature's bounty. What will happen to the
      Columbia River when even more corporate farmers try to make even more of the
      desert bloom?
    </p>
    <div class="video">
      <iframe
        src="https://player.vimeo.com/video/930656836?title=0&byline=0&portrait=0"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
        frameborder="0"
        webkitallowfullscreen
        mozallowfullscreen
        allowfullscreen
      ></iframe>
    </div>
    <div class="caption">&mdash;The Race to Rescue a Declining Aquifer&mdash;<br />East Columbia Basin Irrigation District</div>
    <div class="accordion_title">sources</div>
    <Accordion>
      <p>
        Crop and irrigation information for this map was obtained from 
        <a href="https://agr.wa.gov/departments/land-and-water/natural-resources/agricultural-land-use" target="blank"
          >Washington State Department of Agriculture</a
        > (2017 data).<br><br>Documentation of the Odessa Subarea irrigation project can be found on the website of the 
        <a href="https://ecbid.org/ogwrp/" target="blank"
          >East Columbia Basin Irrigation District</a
        >.
      </p>
    </Accordion><br>
    <br />
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
  name: "MegaregionCropsBasinProject",
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
