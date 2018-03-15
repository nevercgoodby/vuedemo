
import MainPage from '@/components/main/index.vue'

export default (
    {
      path:'/main',
      meta: {
          requireAuth: true,  //need login 
      },
      component:MainPage,
    }
)

