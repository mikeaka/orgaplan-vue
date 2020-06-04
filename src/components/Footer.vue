<template>
  <v-footer dark padless app insert>
    <v-card class="flex" flat title color="indigo lighten-1" :elevation="10">
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} -
        <strong>Copyright ORGAPLAN</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
