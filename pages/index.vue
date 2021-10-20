<template>
  <div>
    <h1>Nuxt Bridge 🌉 with Vue Apollo composables 🚀</h1>
    <pre>{{ episodes }}</pre>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import { useQuery, useResult } from '@vue/apollo-composable'

export default {
  setup() {
    const { result } = useQuery(
      gql`
        query {
          episodes {
            results {
              name
            }
          }
        }
      `
    )
    const episodes = useResult(result, [])

    return { episodes }
  },
}
</script>
