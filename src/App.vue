<template>
  <v-app>
    <v-app-bar
      app
      color="danger"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Inkanas Logo"
          class="shrink mr-2"
          contain
          :src="logo"
          transition="scale-transition"
          width="40"

          @click.stop="drawer = !drawer"
        />

        <span class="mr-2">INKANAS Tanjungpinang</span>
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-content>
      <v-row>
        <div>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-red--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>

import logo from './assets/inkanas.png'

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
    logo,
    drawer: false,
    group: null,
  }),

  watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>
