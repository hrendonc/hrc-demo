const btnEliminar = document.querySelector('#btnEliminar')
btnEliminar.addEventListener('click', async () => {
    const id = btnEliminar.dataset.id
    console.log('id: ', id)
    try {
        const data = await fetch(`/mascotas/${id}`, {
            method: 'delete'
        })
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


const formEditar = document.querySelector('#formEditar')
formEditar.addEventListener('submit', async (e) => {
    e.preventDefault()

    //Obtener la informacion de los inputs para enviarlas
    const nombre = document.querySelector('#nombreInput').value
    const descripcion = document.querySelector('#descripcionInput').value
    const id = formEditar.dataset.id
    console.log(nombre,descripcion,id)
    try {
        const data = await fetch(`/mascotas/${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre,
                descripcion
            })
        })

        const res = await data.json();
        console.log(res.mensaje)
        window.location.href = '/mascotas'

    } catch (error) {
        console.log(error)
        console.log(res.mensaje)
    }
})