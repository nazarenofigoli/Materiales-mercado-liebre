const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const getJson = () =>{
	const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	return products;
		}

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controller = {
	index: (req, res) => {
		products = getJson();
		const visited = products.filter(product => product.category == "visited");
		const inSale = products.filter(product => product.category == "in-sale");
		res.render('index',{visited,inSale,toThousand})
	},
	search: (req, res) => {
		const busqueda = req.query.keywords; // Extraer el parámetro 'keywords' de la cadena de consulta
		const result= []; // Inicializar un array vacío llamado 'result' para almacenar los resultados de la búsqueda
		// Iterar a través de cada producto en el array 'products' y verificar si el nombre del producto incluye la palabra clave de búsqueda
		products.forEach(product => {
			if (product.name.toLowerCase().includes(busqueda.toLowerCase())) {
				result.push(product);
			}
		});
		res.render("results", {result,toThousand,busqueda})
	}};

module.exports = controller;
