<template>
  <v-container class="my-5">
    <v-card flat v-for="chantier in constructionSites" :key="chantier.id">
      <v-layout row wrap :class="`pa-3 chantier ${chantier.status}`">
        <v-flex xs3 md3>
          <div class="caption grey--text">Nom du Chantier</div>
          <div>{{ chantier.siteName }}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">localisation</div>
          <div>{{ chantier.location }}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Duree du projet</div>
          <div>{{ chantier.projectDuration }}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Reponsable du projet</div>
          <div>{{ chantier.responsible }}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="caption grey--text">Status du projet</div>
          <div class="right">
            <v-chip
              small
              :class="`white--text caption my-2 chantier ${chantier.status} `"
            >{{ chantier.status }}</v-chip>
          </div>
        </v-flex>
        <v-flex>
          <div class="caption grey--text">Actions</div>
          <v-icon small color="green" class="mr-2" @click="editItem(item)">edit</v-icon>
          <v-icon small color="red" @click="deleteItem(item)">delete</v-icon>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </v-card>

    <v-row align="center" class="ma-4">
      <v-spacer></v-spacer>
      <div class="text-center">
        <v-btn class="mx-2" fab dark color="indigo" to="/constructionsites/new">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ConstructionSites',

  data: () => ({
    constructionSites: [
      {
        id: 'azertyui',
        siteName: 'Chantier1',
        imageUrl:
          'http://www.oeecentre.fr/wp-content/uploads/2019/11/Confluence-PIC-800-1.png',
        active: true,
        status: 'en-cours',
        location: 'Grigny',
        projectDuration: '1 an',
        responsible: 'Georges'
      },
      {
        id: 'azertysdsdqui',
        siteName: 'Chantier2',
        imageUrl:
          'http://www.oeecentre.fr/wp-content/uploads/2018/05/Lily-of-the-Valley-PIC-3-6-1200.gif',
        active: true,
        status: 'en-cours',
        location: 'Paris',
        projectDuration: '3 ans',
        responsible: 'Marc'
      },
      {
        id: 'azeqsdqsdqrtyui',
        siteName: 'Chantier3',
        imageUrl:
          'http://www.oeecentre.fr/wp-content/uploads/2018/05/Vista-PIC-3-6-1200.gif',
        active: true,
        status: 'terminee',
        location: 'Montreuil',
        projectDuration: '3 ans',
        responsible: 'John'
      }
    ],
    siteMaterials: [
      { id: 'fffff', name: 'LIFT 01', active: true },
      { id: 'hhhhh', name: 'LIFT 02', active: true },
      { id: 'kkkkk', name: 'Chariot Elevateur T1 RDC', active: true },
      { id: 'mmmmm', name: 'Chariot Elevateur T1', active: true }
    ],
    deliveryAreas: [
      { id: 'sssss', name: 'Auto-Sous Sol 1', active: true },
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
  })
}
</script>

<style scope>
.chantier.terminee {
  border-left: 4px solid #3cd1c2;
}
.chantier.en-cours {
  border-left: 4px solid orange;
}
.chantier.depassement {
  border-left: 4px solid tomato;
}
.v-chip.terminee {
  background: #3cd1c2;
}
.v-chip.en-cours {
  background: orange;
}
.v-chip.depassement {
  background: tomato;
}
</style>
