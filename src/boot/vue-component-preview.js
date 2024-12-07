import { defineBoot } from '#q-app/wrappers'
import Previewer from "virtual:vue-component-preview";

export default defineBoot(({ app, router, store }) => {
  // something to do
  app.use(Previewer)
})
