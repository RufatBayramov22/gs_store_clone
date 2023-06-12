import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
export const errorSwal =(icon , message)=>{
    Toast.fire({
        icon: icon,
        title: message,
        background:"#ffab00",
        color:"#fff",
        iconColor:"#a90534",
      })
};

export const successSwal =()=>{
    Toast.fire({
        icon: "success",
        title: "You are loggid in !",
        background:"#a90534",
    color:"#fff",
    iconColor:"#ffab00",
      })
};