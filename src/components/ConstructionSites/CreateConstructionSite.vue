<template>
  <v-stepper v-model="e7" vertical>
    <v-stepper-step :complete="e7 > 1" step="1">
      Ajouter un nouveau chantier
      <small>
        Cette etape va creer les aires de livraison, le materiel a affecter au
        chantier
      </small>
    </v-stepper-step>
    <v-stepper-content step="1">
      <v-card color="grey lighten-1" class="mb-12" height="200px">
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field label="Nom du Chantier" required></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field label="Adresse du chantier" required></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field label="Ville" required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field label="Date de debut" required></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field label="Date de fin" required></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field label="Nombre de Lots" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <v-btn color="primary" @click="e7 = 2">Continuer</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e7 > 2" step="2">Affecter les moyens pour le chantier</v-stepper-step>

    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-12" height="200px">
        <v-container>
          <v-row>
            <v-col>
              <v-autocomplete
                :items="deliveryAreas"
                label="Ajouter les aires de livraison"
                item-text="name"
                item-value="name"
                multiple
                required
              >
                <template v-slot:selection="data">
                  <template v-if="typeof data.item !== 'object'">
                    <v-list-item-content v-text="data.item"></v-list-item-content>
                  </template>
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-autocomplete
                :items="siteMaterials"
                label="Ajouter les moyens pour le chantier"
                item-text="name"
                item-value="name"
                multiple
                required
              >
                <template v-slot:selection="data">
                  <template v-if="typeof data.item !== 'object'">
                    <v-list-item-content v-text="data.item"></v-list-item-content>
                  </template>
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
      <v-btn color="primary" class="ma-2" outlined @click="e7 = 2">Retour</v-btn>
      <v-btn color="primary" @click="e7 = 3">Continuer</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
export default {
  name: 'CreateConstructionSites',

  data: () => ({
    e7: 1,
    siteMaterials: [
      { id: 'fffff', name: 'LIFT 01', active: true },
      { id: 'hhhhh', name: 'LIFT 02', active: false },
      { id: 'kkkkk', name: 'Chariot Elevateur T1 RDC', active: true },
      { id: 'mmmmm', name: 'Chariot Elevateur T1', active: true }
    ],
    deliveryAreas: [
      { id: 'sssss', name: 'Auto-Sous Sol 1', active: false },
      { id: 'xxxxx', name: 'Auto-Sous Sol 2', active: true },
      { id: 'wwwww', name: 'Centrale T1:T2', active: true }
    ],
    compagny: [
      { id: 'asfxzada', name: 'Microsoft', active: true },
      { id: 'asfxzada', name: 'Google', active: true },
      { id: 'asfxzada', name: 'vNext', active: false }
    ],
    providers: [
      { id: 'cmznzc', name: 'PAP', active: true },
      { id: 'cmzsdsnzc', name: 'le roy merlin', active: true },
      { id: 'cmzwernzc', name: 'BTP', active: true }
    ]
  }),
  methods: {}
}
</script>
