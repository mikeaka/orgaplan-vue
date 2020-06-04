<template>
  <div>
    <h1 class="subheading grey--text">Liste des Fournisseurs</h1>

    <v-container class="my-5">
      <v-data-table :headers="headers" :items="siteProviders" class="elevation-1">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>Liste des Fournisseurs</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>

            <template>
              <v-btn outlined color="primary" dark class="mb-2">Ajouter un Fournisseur</v-btn>
            </template>
          </v-toolbar>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">edit</v-icon>
          <v-icon small @click="deleteItem(item)">delete</v-icon>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Providers',

  data: () => ({
    headers: [
      {
        text: 'Societe',
        align: 'start',
        sortable: false,
        value: 'compagnyName'
      },
      { text: 'Nom Fournisseurs', value: 'providerName' },
      { text: 'Adresse', value: 'address' },
      { text: 'Email', value: 'email' },
      { text: 'Contacts', value: 'contacts' },
      { text: 'Actif', value: 'enabled' }
    ],
    siteProviders: [
      {
        id: 'qdsd',
        compagnyName: '3C',
        providerName: 'COFRISET',
        address: '92 Pont de Gennevilliers, Clichy, France',
        email: 'lchartier@cuisine3c.com',
        contacts: '0102020303',
        enabled: true
      },
      {
        id: 'sdsqdsq',
        compagnyName: 'AJB ISOLATIONS',
        providerName: 'AJB ISOLATIONS',
        address: '69 rue Epluche, PierreLaye, France',
        email: 'jeanpierre@orange.com',
        contacts: '0102402930',
        enabled: true
      },
      {
        id: 'lklklk',
        compagnyName: 'AJB ISOLATIONS',
        providerName: 'Knauf',
        address: '54 Zone de Gennevilliers, wolfgantzen, France',
        email: 'qsdr@zoedf.com',
        contacts: '0165372687',
        enabled: true
      },
      {
        id: 'bnxbsn',
        compagnyName: 'ARBONIS',
        providerName: 'ACCESS',
        address: 'Saint-Ouen, France',
        email: 'saintouen@gmail.com',
        contacts: '010204527',
        enabled: true
      },
      {
        id: 'oisqd',
        compagnyName: 'ARBONIS',
        providerName: 'ARBONIS - chemille',
        address: 'chemiller zone NA, Clichy, France',
        email: 'arbonis@orange.com',
        contacts: '010205467892',
        enabled: true
      },
      {
        id: 'oissdasdqd',
        compagnyName: 'ARBONIS - v2',
        providerName: 'ARBONIS - grigny',
        address: 'chemiller zone NA, Clichy, France',
        email: 'arbsdonis@orange.com',
        contacts: '010205467892',
        enabled: true
      }
    ],
    methods: {
      editItem() {},

      deleteItem() {}
    }
  })
}
</script>
