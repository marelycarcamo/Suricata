function crearCard(data) {
	return `
		<div class="card shadow">
		<img src="assets/img/${data.img}" class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">${data.title}</h5>
					<p class="card-text">${data.text}</p>
				</div>
				<ul class="list-group list-group-flush">
					<li class="list-group-item">An item</li>
					<li class="list-group-item">A second item</li>
				</ul>
				<div class="card-body">
					<a href="#" class="card-link">Ver más</a>
					<a href="#" class="card-link">Comprar</a>
				</div>
			</div>
			`;
}

function leerDatos() {
    var lst = [
        {
            img: "colaciones.jpg",
            title: "Colaciones",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        },
        {
            img: "desayunos.jpg",
            title: "Desayunos",
            text: "Iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        },
        {
            img: "bebidas.jpg",
            title: "Bebidas",
            text: "Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        },
        {
            img: "verduras.jpg",
            title: "Verduras",
            text: "Ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        },
        {
            img: "dulces.jpg",
            title: "Dulces",
            text: "Some quick example text to build on the card title and make up the bulk of the cards content.",
        },
        {
            img: "empanadas.jpg",
            title: "Empanadas",
            text: "Some quick example text to build on the card title and make up the bulk of the cards content."
        }
    ];
    return lst;
}


$(document).ready(function () {
	var lista = leerDatos();
	lista.forEach(function (item) {
		var card = crearCard(item);
		$("#productos").append(card);
	});
});
