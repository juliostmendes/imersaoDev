var listaFilmes = [
    "https://cdn.ome.lt/zsw44uY88_L_MXSIhrvr-AMSzzk=/fit-in/837x500/smart/uploads/conteudo/fotos/homem-aranha-3-poster.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/3/38/Lord_of_the_Rings_Fellowship_of_the_Ring.jpg",
    "https://m.media-amazon.com/images/I/71QPnEkXygS._AC_SY679_.jpg"
]

for (var i = 0; i < listaFilmes.length; i++){
    document.write("<img src=" + listaFilmes[i] + ">")
}
    