
import HomePage from '@/components/Home.vue'

export default (
    {
      path:'/',
      name:'home',
      meta: {
        requireAuth: true,  //need login 
      },
      component:HomePage,
    }
)

