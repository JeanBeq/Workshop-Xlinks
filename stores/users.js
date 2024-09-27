import {defineStore} from "pinia";
import {ref, watch} from "vue";

export const useUserStore = defineStore('user', () => {

  const users = ref(
    (localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : null
  )
  const type = ref(
    (localStorage.getItem('type')) ? localStorage.getItem('type') : null
  )

  watch(users, (nv,ov)=>{
    localStorage.setItem('users',JSON.stringify(nv))
  })

  watch(type, (nv,ov)=>{
    localStorage.setItem('type',nv)
  })

  function setUser (user) {
    users.value = user
  }

  function setUserType(newType) {
    type.value = newType
  }

  return { users, setUser, type, setUserType }
})