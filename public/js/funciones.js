const btnEliminar = document.querySelector('#btnEliminar')
btnEliminar.addEventListener('click', async ()=>{
    console.log('Me picaste!')
    const id = btnEliminar.dataset.id
    console.log('id: ',id)
    try {
        const data = await fetch(`/mascotas/${id}`, {method: 'delete'})
        const res = await data.json()

        if (res.estado) {
            window.location.href = '/mascotas'
        } else {
            console.log(res.mensaje)
        }  
    } catch (error) {
        console.log(error)
    }
})