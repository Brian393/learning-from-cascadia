<template>
  <div v-if="!asideHidden">
    <div id="items" v-if="nav.items">
      <router-link
        v-for="item in nav.items"
        :key="item.name"
        :to="{ path: item.href }"
        @click.native="routeClick(item.href)"
        class="btn"
        >{{ item.name }}</router-link
      >
    </div>

    <div id="subItems" v-if="navSubItems">
      <router-link
        v-for="subItem in navSubItems"
        :key="subItem.name"
        :to="subItem.href"
        @click.native="routeClick(subItem.href)"
        class="btn subItem"
        >{{ subItem.name }}</router-link
      >
    </div>
  </div>
</template>
<style scoped>
#items,
#subItems {
  position: absolute;
  z-index: 1;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  font-size: 1.15em;
}

#items {
  bottom: 20px;
  left: 1.5em;
  flex-direction: column;
  width: 150px;
  max-height: calc(100vh - 170px);
  overflow-y: auto;
}

#subItems {
  font-size: 1em;
  left: calc(150px + 0.5em);
  width: 100%;
  min-width: calc(100px - 0.2em);
  max-width: calc(100vw - 400px - 150px);
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: transparent;
  height: 0;
  bottom: 50px;
}

.btn {
  padding: 0.25em;
  text-align: center;
  border: thin solid darkgray;
  border-radius: 6px;
  margin: 0.1em;
  background-color: rgba(255, 255, 255, 0.95);
  color: black;
  text-decoration: none;
}

.btn:hover,
.router-link-active {
  color: #008000;
}

.subItem {
  min-width: 100px;
  height: 1.25em;
}
@media (max-width: 1075px) {
  #items,
  #subItems {
    font-size: 1em;
  }
  .subItem {
    width: auto;
  }
}
@media (max-width: 850px) {
  #items,
  #subItems {
    position: static;
    font-size: 1.5em;
  }
  #items,
  .subItem {
    width: 100%;
  }
  #subItems {
    margin-top: 1em;
    min-width: 100%;
    max-width: 100%;
  }
}
</style>
<script>
import { mapGetters } from "vuex";

export default {
  name: "AppNav",
  data: function () {
    return {
      nav: [],
      navSubItems: [],
      watershed: {
        items: [
          {
            name: "Remember",
            href: "/watershed/acknowledgement",
          },
          {
            name: "Introduction",
            href: "/watershed/introduction",
          },
          {
            name: "Terminals",
            href: "/watershed/terminals",
          },
          {
            name: "Dams",
            href: "/watershed/dams",
          },
          {
            name: "Hanford",
            href: "/watershed/hanford",
          },
        ],
      },
      megaregion: {
        items: [
          {
            name: "Introduction",
            href: "/megaregion/introduction",
          },
          {
            name: "Vanport",
            href: "/megaregion/vanport",
          },
          {
            name: "Willamette",
            href: "/megaregion/willamette",
          },
          {
            name: "Energy",
            href: "/megaregion/energy",
          },
          {
            name: "Crops",
            href: "/megaregion/crops",
          },
        ],
      },
      bioregion: {
        items: [
          {
            name: "Introduction",
            href: "/bioregion/introduction",
          },
          {
            name: "Salmon",
            href: "/bioregion/salmon",
          },
          {
            name: "Restoration",
            href: "/bioregion/restoration",
          },
          {
            name: "Dancing",
            href: "/bioregion/dancing",
          },
        ],
      },
      subItems: {
        dams: [
          {
            name: "Falls",
            href: "/watershed/dams/falls",
          },
          {
            name: "Takedowns",
            href: "/watershed/dams/removal",
          },
        ],
        hanford: [
          {
            name: "Legacy",
            href: "/watershed/hanford/legacy",
          },
          {
            name: "Plumes",
            href: "/watershed/hanford/plumes",
          },
          {
            name: "Floods",
            href: "/watershed/hanford/floods",
          },
        ],
        crops: [
          {
            name: "Columbia Basin Project",
            href: "/megaregion/crops/basinproject",
          },
        ],
        salmon: [
          {
            name: "Chinook",
            href: "/bioregion/salmon/chinook",
          },
          {
            name: "Coho",
            href: "/bioregion/salmon/coho",
          },
          {
            name: "Chum",
            href: "/bioregion/salmon/chum",
          },
          {
            name: "Sockeye",
            href: "/bioregion/salmon/sockeye",
          },
          {
            name: "Pink",
            href: "/bioregion/salmon/pink",
          },
        ],
        dancing: [
          {
            name: "Children's Dance Caps",
            href: "/bioregion/dancing/caps",
          },
          {
            name: "ARROWHEAD",
            href: "/bioregion/dancing/arrowhead",
          },
        ],
      },
    };
  },
  computed: {
    // mix the getters from vuex store into computed with object spread operator
    ...mapGetters(["asideHidden"]),
  },
  watch: {
    $route(to, from) {
      // react to route changes...
      this.initNav();
    },
  },
  mounted: function () {
    this.initNav();
  },
  methods: {
    initNav: function () {
      if (/watershed/.test(this.$route.name)) {
        this.nav = this.watershed;
      } else if (/megaregion/.test(this.$route.name)) {
        this.nav = this.megaregion;
      } else if (/bioregion/.test(this.$route.name)) {
        this.nav = this.bioregion;
      } else {
        this.nav = [];
      }
      if (/watershedDams/.test(this.$route.name)) {
        this.navSubItems = this.subItems.dams;
      } else if (/watershedHanford/.test(this.$route.name)) {
        this.navSubItems = this.subItems.hanford;
      } else if (/megaregionCrops/.test(this.$route.name)) {
        this.navSubItems = this.subItems.crops;
      } else if (/bioregionSalmon/.test(this.$route.name)) {
        this.navSubItems = this.subItems.salmon;
      } else if (/bioregionRestoration/.test(this.$route.name)) {
        this.navSubItems = this.subItems.restoration;
      } else if (/bioregionDancing/.test(this.$route.name)) {
        this.navSubItems = this.subItems.dancing;
      } else {
        this.navSubItems = [];
      }
    },
    routeClick: function (to) {
      if (to === this.$route.path) {
        this.$eventBus.emit("route-click");
      }
    },
  },
};
</script>
