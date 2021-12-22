let discos = [
    {
        imagen: "Imagenes/portada/1.jpg",
        title: "Queen",
        description: "Publicación: 13 de julio 1973 || Sello: Parlophone",
        price: 1300,
        spotify: "https://open.spotify.com/album/1kkb8xlG9yssEVsWKiEtAB"
    },
    {
        imagen: "Imagenes/portada/2.jpg",
        title: "Queen II",
        description: "Publicación: 8 de marzo 1974 || Sello: Parlophone",
        price: 2000,
        spotify: "https://open.spotify.com/album/0NouBnbXRJKFWzm9LwCW0K"
    },
    {
        imagen: "Imagenes/portada/3.jpg",
        title: "Sheer Heart Attack",
        description: "Publicación: 8 de noviembre 1974 || Sello: Parlophone",
        price: 2150,
        spotify: "https://open.spotify.com/album/5SBHID8qGG3x52zgoh2ilz"
    },
    {
        imagen: "Imagenes/portada/4.jpg",
        title: "A Night At The Opera",
        description: "Publicación: 21 de noviembre 1975 || Sello: Parlophone",
        price: 2000,
        spotify: "https://open.spotify.com/album/75eP8LZolyNBpqIRyB5pvB"
    },
    {
        imagen: "Imagenes/portada/5.jpg",
        title: "A Day At The Race",
        description: "Publicación: 10 de diciembre 1976 || Sello: Parlophone",
        price: 2150,
        spotify: "https://open.spotify.com/album/4KZGe18wZJbXL6JLW4KyLc"
    },
    {
        imagen: "Imagenes/portada/6.jpg",
        title: "News Of The World",
        description: "Publicación: 28 de octubre 1977 || Sello: Parlophone",
        price: 1950,
        spotify: "https://open.spotify.com/album/7tB40pGzj6Tg0HePj2jWZt"
    },
    {
        imagen: "Imagenes/portada/7.jpg",
        title: "Jazz",
        description: "Publicación: 10 de noviembre 1978 || Sello: Parlophone",
        price: 2000,
        spotify: "https://open.spotify.com/album/2yuTRGIackbcReLUXOYBqU"
    },
    {
        imagen: "Imagenes/portada/8.jpg",
        title: "The Game",
        description: "Publicación: 30 de junio 1980 || Sello: Parlophone",
        price: 1900,
        spotify: "https://open.spotify.com/album/58alCatewkjNm9IM1Ucj67"
    },
    {
        imagen: "Imagenes/portada/9.jpg",
        title: "Hot Space",
        description: "Publicación: 21 de mayo 1982 || Sello: Parlophone",
        price: 1750,
        spotify: "https://open.spotify.com/album/6reTSIf5MoBco62rk8T7Q1"
    },
    {
        imagen: "Imagenes/portada/10.jpg",
        title: "The Works",
        description: "Publicación: 27 de febrero 1984 || Sello: Parlophone",
        price: 2000,
        spotify: "https://open.spotify.com/album/5RS9xkMuDmeVISqGDBmnSa"
    },
    {
        imagen: "Imagenes/portada/11.jpg",
        title: "A Kind Of Magic",
        description: "Publicación: 2 de junio 1986 || Sello: EMI",
        price: 2200,
        spotify: "https://open.spotify.com/album/0pEfDPZko6TnNOgrZMe5nn"
    },
    {
        imagen: "Imagenes/portada/12.jpg",
        title: "The Miracle",
        description: "Publicación: 22 de mayo 1989 || Sello: EMI",
        price: 1900,
        spotify: "https://open.spotify.com/album/3h6SV9wHJtNL1YswZUJs8V"
    },
    {
        imagen: "Imagenes/portada/13.png",
        title: "Innuendo",
        description: "Publicación: 4 de febrero 1991 || Sello: EMI",
        price: 3000,
        spotify: "https://open.spotify.com/album/5kffKW0sSLo6tkLg1veUGC"
    },
    {
        imagen: "Imagenes/portada/14.jpg",
        title: "Made in Heaven",
        description: "Publicación: 6 de noviembre 1995 || Sello: EMI",
        price: 5000,
        spotify: "https://open.spotify.com/album/391ScNR3xKywWSpfDwP3n0"
    },
]
let discosContainer_padre = document.querySelector("#discosContainer_padre");

for (const disco of discos) {
    let discoIndividual = document.createElement("div");
    discoIndividual.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img loading="lazy" src="${disco.imagen}" class="card-img-top"
            alt="Portada Álbum 'Made in Heaven'">
        <div class="card-body">
            <h5 class="card-title">${disco.title}</h5>
            <p class="card-text">${disco.description}</p>
            <p class="card-price">$${disco.price}</p>
            <p class="dolarizacion"></p>
            <a href="${disco.spotify}" class="btn btn-primary"
                target="_blank">Escuchar Álbum</a>
            <button class="btn btn-primary addCarrito showCarrito">Comprar Álbum</button>
        </div>
    </div>
    `
    discosContainer_padre.appendChild(discoIndividual)
}

