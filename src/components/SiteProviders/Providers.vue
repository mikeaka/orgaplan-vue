<template>
  <div>
    <v-container class="my-5" fluid>
      <v-data-table :headers="headers" :items="siteProviders" class="elevation-1">
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>Liste des Fournisseurs</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>

            <v-row justify="center">
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on }">
                  <v-btn class="mb-2" color="primary" dark v-on="on">Ajouter un Fournisseur</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Creer un Fournisseur</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field label="Nom Societe*" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field label="Nom Fournisseur*" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field label="Adresse*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Email*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Contacts*" required></v-text-field>
                        </v-col>

                        <v-col cols="12">
                          <v-autocomplete
                            :items="constructionSites"
                            label="Selectionner Chantier"
                            item-text="siteName"
                            item-value="siteName"
                            multiple
                          >
                            <template v-slot:selection="data">
                              <template v-if="typeof data.item !== 'object'">
                                <v-list-item-content v-text="data.item"></v-list-item-content>
                              </template>
                              <v-list-item-content>
                                <v-list-item-title v-html="data.item.siteName"></v-list-item-title>
                              </v-list-item-content>
                            </template>
                          </v-autocomplete>
                        </v-col>

                        <v-col cols="12">
                          <v-text-field label="Actif*" required></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>*indique les champs obligatoires</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
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
    dialog: false,

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
    constructionSites: [
      {
        id: 'azertyui',
        siteName: 'Chantier1',
        imageUrl:
          'http://www.oeecentre.fr/wp-content/uploads/2019/11/Confluence-PIC-800-1.png',
        active: true
      },
      {
        id: 'azertysdsdqui',
        siteName: 'Chantier2',
        imageUrl:
          'http://www.oeecentre.fr/wp-content/uploads/2018/05/Lily-of-the-Valley-PIC-3-6-1200.gif',
        active: true
      },
      {
        id: 'azeqsdqsdqrtyui',
        siteName: 'Chantier3',
        imageUrl:
          'http://www.oeecentre.fr/wp-content/uploads/2018/05/Vista-PIC-3-6-1200.gif',
        active: true
      }
    ],
    methods: {
      editItem() {},

      deleteItem() {}
    }
  })
}
</script>
