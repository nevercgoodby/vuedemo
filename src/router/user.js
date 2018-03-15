
import UserPage from '@/components/user/index.vue'

export default (
    {
      path:'/user',
      meta: {
        requireAuth: true,  //need login
      },
      component:UserPage,
    }
)

