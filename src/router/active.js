import activePublic from '@/components/activePublic/index.vue'

export default
    {
      path:'/active',
      meta: {
        requireAuth: true,  //need login
      },
      component:activePublic,
    }
