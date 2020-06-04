<template>
  <div>
    <constructionSitesComponent />
  </div>
</template>

<script>
// @ is an alias to /src

import constructionSitesComponent from '@/components/ConstructionSites/ConstructionSites'

export default {
  name: 'ConstructionSites',
  components: {
    constructionSitesComponent
  }
}
</script>
