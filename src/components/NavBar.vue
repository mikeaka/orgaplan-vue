<template>
  <nav>
    <v-navigation-drawer v-model="sideNav" absolute temporary>
      <v-system-bar></v-system-bar>
      <v-list nav dense>
        <v-list-item>
          <v-list-item-content class="pa-6">
            <v-list-item-title class="title">Welcome Mr John</v-list-item-title>
            <v-list-item-subtitle>john@compagny.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item class="pt-2" v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo lighten-1" dark>
      <v-app-bar-nav-icon @click="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <router-link to="/" tag="span" style="cursor: pointer">Orgaplan Planning</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" v-for="item in menuItems" :key="item.title">
        <v-btn text :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn dark v-on="on" text>
            <v-icon left>arrow_drop_down</v-icon>Admin
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="admmenu in adminMenuItems" :key="admmenu.name" :to="admmenu.link">
            <v-list-item-title>{{ admmenu.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data: () => ({
    sideNav: false,
    menuItems: [
      { icon: 'event_note', title: 'Planning', link: '/Schedules' },
      { icon: 'history', title: 'Historique', link: '/History' },
      { icon: 'local_shipping', title: 'Fournisseurs', link: '/Providers' },
      {
        icon: 'insert_chart_outlined',
        title: 'Statistiques',
        link: '/Statistics'
      },
      { icon: 'lock_open', title: 'Login', link: '/Login' },
      { icon: 'exit_to_app', title: 'Logout', link: '/Logout' }
    ],
    adminMenuItems: [
      { id: 'hjtfdd', name: 'Gerer les chantiers', link: '/constructionsites' },
      {
        id: 'sddfvx',
        name: 'Gerer les zones de livraison',
        link: '/deliveryAreas'
      },
      { id: 'klhgdc', name: 'Gerer le materiel', link: '/materials' }
    ]
  })
}
</script>
