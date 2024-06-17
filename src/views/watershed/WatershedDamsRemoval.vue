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
      <h1>Take 'em down</h1>
    </div>
    <div>
      <iframe
        width="350"
        height="350"
        src="https://www.youtube.com/embed/d7-I1ijSqbI?modestbranding=1&autohide=1&showinfo=0&controls=1&amp;autoplay=1&amp;mute=1&amp;loop=0&rel=0&amp;playlist=d7-I1ijSqbI"
        frameborder="0"
        allow="autoplay; encrypted-media; loop"
        allowfullscreen
      ></iframe>
    </div>
    <div class="caption">
      Spectacular Time Lapse Dam "Removal" Video<br />National Geographic (2011)
    </div>
    <br />

    <Accordion :open="false">
      <h3 slot="header">legends</h3>
      <div class="flex"></div>
    </Accordion>

    <p>
      Dam removal is no longer taboo. According to the 2022 report, Free Rivers,
      1,956 dams have been removed in the US so far, with a high point in 2019
      of 90 dam takedowns in 26 states. Because of the large number of dans
      built in the US - the real number runs well over the 90 thousand
      relatively large ones inventoried by the Army Corps - this is just a drop
      in the damn bucket.
    </p>

    <p>
      Currently it is estimated that over 85% of the country's dams have
      exceeded their useful lifespan of 50 years. Older dams become choked with
      sediment, cease to produce hydropower, and in many cases become a threat
      to populations living downstream. An example is the 770-ft Oroville Dam in
      California, near the southern tip of Cascadia, which was damaged by
      exceptionally violent rainfall in 2017 and forced the evacuation of over
      180,000 people. In the end, no catastrophic flood occurred - not yet.
    </p>

    <p>
      Of course, most of the removed dams are small barriers, not huge
      hydropower structures like Bonneville Dam in the Columbia River Basin. Few
      are proposing to take down the big electricity-producing dams, except the
      one at
      <span
        class="link"
        @click="
          emit('set-map-view', { center: [-121.133, 45.613], resolution: 4 })
        "
        >The Dalles</span
      >
      which dealt a cruel blow to all the indigenous peoples of the region, by
      drowning Celilo Falls. However, consider the case of
      <span
        class="link"
        @click="
          emit('set-map-view', { center: [-121.541, 45.75], resolution: 32 })
        "
        >Condit Dam on the White Salmon River</span
      >, a 125-ft wall built in 1913. Its meager power output could easily be
      replaced by three modern wind turbines. And its removal returned spawning
      grounds to three salmon and steelhead runs, as well as wild Pacific
      lamprey.
    </p>

    <iframe
      width="350"
      height="197"
      src="https://www.youtube.com/embed/4LxMHmw3Z-U?modestbranding=1&autohide=1&showinfo=0&controls=1"
      frameborder="0"
      allow="autoplay; encrypted-media; loop"
      allowfullscreen
    ></iframe>

    <p>
      Nature is not a clock, time cannot be reversed, and the past will not
      return. But we can move forward into a lighter and more just way of
      living, in solidarity with other cultures and with all the other creatures
      living on this earth.<br /><br />
    </p>
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
  name: "WatershedDams",
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
};
</script>
