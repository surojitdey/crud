<template>
  <v-app-bar
      light
      app
      clipped-left
      flat
      color="white"
      class="grey--text navbar"
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-row justify="space-between" align="center">
        <v-col cols="2" class="d-flex justify-space-between">
          <v-toolbar-title>Dashboard</v-toolbar-title>
          <v-toolbar-title>Users</v-toolbar-title>
        </v-col>
        <v-col cols="3" class="d-flex justify-space-between align-center">
          <v-badge
            bordered
            color="error"
            content="5"
            overlap
          >
            <v-icon>mdi-bell-outline</v-icon>
          </v-badge>
          <v-badge
            bordered
            color="orange"
            content="6"
            overlap
          >
            <v-icon>mdi-format-list-checkbox</v-icon>
          </v-badge>
          <v-badge
            bordered
            color="primary"
            content="6"
            overlap
          > 
            <v-icon>mdi-email-open-outline</v-icon>
          </v-badge>
          <v-avatar>
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            >
          </v-avatar>
        </v-col>
      </v-row>
      <v-navigation-drawer
        v-model="drawer"
        color="#3c4b64"
        dark
        absolute
        temporary
        class="md-off"
        app
        clipped
      >
        <v-list nav class="mx-0 pa-0" >
          <v-list-item class="ma-0 pa-0" style="background-color: #303c54">
            <v-list-item-content class="pt-0 mb-5 text-h5 d-flex justify-center">React Practical</v-list-item-content>
          </v-list-item>
          <v-list-item-group
            v-model="group"
          >
            <v-list-item
              v-for="([icon, text], i) in items"
              :key="i"
              link
              active-class="active-class"
            >
              <v-list-item-icon>
                <v-icon>{{ icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
    group: null,
    items: [
      ['mdi-gauge', 'Dashboard'],
      ['mdi-account-supervisor-circle', 'Users'],
    ],
  }),
}
</script>
<style scoped>
.navbar {
  border-bottom: 1px;
}
.active-class {
  background-color: #46546c !important;
}
</style>
