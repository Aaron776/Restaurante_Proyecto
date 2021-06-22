import { Injectable } from '@angular/core';
import { ItemModel } from '../models/item.model';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: ItemModel[] = [
    {
      id: '1',
      name: 'Colada de Avena',
      imageURL: 'https://www.laylita.com/recetas/wp-content/uploads/2012/03/Colada-o-bebida-de-avena-ecuatoriana-684x1024.jpg',
      price: 1.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      categoria: 'bebida'
    },
    {
      id: '2',
      name: 'Naranjillazo',
      imageURL: 'https://www.laylita.com/recetas/wp-content/uploads/Ecuadorian-canelazo-drink-with-naranjilla-640x427.jpg',
      price: 2.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      categoria: 'bebida'
    },
    {
      id: '3',
      name: 'Chicha de Piña',
      imageURL: 'https://www.laylita.com/recetas/wp-content/uploads/Chicha-de-pi%C3%B1a.jpg',
      price: 3.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      categoria: 'bebida'
    },
    {
      id: '4',
      name: 'Coca-Cola',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/15-09-26-RalfR-WLC-0098.jpg/200px-15-09-26-RalfR-WLC-0098.jpg',
      price: 4.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      categoria: 'bebida'
    },
    {
      id: '5',
      name: 'Jugo de Naranja',
      imageURL: 'https://recetatipica.com/wp-content/uploads/2019/03/jugo-de-naranja.jpg',
      price: 2.15,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
    },
    {
      id: '6',
      name: 'Jugo de Coco',
      imageURL: 'https://unaricareceta.com/wp-content/uploads/2020/06/agua-de-coco.jpg',
      price: 6.00,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      categoria: 'bebida'
    },
    {
      id: '7',
      name: 'Cerveza Pilsener',
      imageURL: 'https://images-na.ssl-images-amazon.com/images/I/41LRB2hxtTL._AC_.jpg',
      price: 6.00,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      categoria: 'bebida'
    },
    {
      id: '8',
      name: 'Croquetas de Jamon',
      imageURL: 'https://www.hola.com/imagenes/cocina/recetas/20191217156471/croquetas-de-jamon-iberico/0-759-983/croquetas-de-jamon-m.jpg',
      price: 1.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      categoria: 'entrada'
    },
    {
      id: '9',
      name: 'Arepas de Chicharron',
      imageURL: 'https://3.bp.blogspot.com/-iZ0EPIlZSDY/V9KX9xWx3jI/AAAAAAAAmdM/cQwxGZnhrh0JyQ_n_2tbXwYrSGVPRNK5gCLcB/s1600/Arepas-de-chicharr%25C3%25B3n.jpg',
      price: 2.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      categoria: 'entrada'
    },
    {
      id: '10',
      name: 'Hayacas',
      imageURL: 'https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2019/11/06134222/la-hallaca.jpg',
      price: 3.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      categoria: 'entrada'
    },
    {
      id: '11',
      name: 'Gazpacho',
      imageURL: 'https://i.blogs.es/a8ade0/gazpacho_tradicional/840_560.jpg',
      price: 4.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      categoria: 'entrada'
    },
    {
      id: '12',
      name: 'Ensalada de Camaron',
      imageURL: 'https://www.laylita.com/recetas/wp-content/uploads/2016/11/Receta-ensalada-de-camaron-600x400.jpg',
      price: 2.15,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      categoria: 'entrada'
    },
    {
      id: '13',
      name: 'Empanadas de Carne',
      imageURL: 'https://www.laylita.com/recetas/wp-content/uploads/2017/02/Empanadas-de-carne.jpg',
      price: 6.00,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      categoria: 'entrada'
    },
    {
      id: '14',
      name: 'Alfajores',
      imageURL: 'https://chipabythedozen.com/wp-content/uploads/2020/03/alfajores-dulce-de-leche-sandwhich-cookies-3-1.jpg',
      price: 1.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      categoria: 'postre'
   },
   {
      id: '15',
      name: 'Rosca de Rey',
      imageURL: 'https://hispanaglobal.com/wp-content/uploads/2017/12/Rosca-de-reyes-HISPANA-GLOBAL-Enriqueta-Lemoine.jpg',
      price: 2.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      categoria: 'postre'
   },
   {
      id: '16',
      name: 'Crepe',
      imageURL: 'https://d1uz88p17r663j.cloudfront.net/original/e5a4e61d82b4f252813a5a8576a7cfcf_Crepe-Relleno_frutos_rojos.jpg',
      price: 3.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      categoria: 'postre'
   },
   {
     id: '17',
     name: 'Churros',
     imageURL: 'https://i.blogs.es/bbda7d/churros_chocolate/1366_2000.jpeg',
     price: 3.10,
     description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
     categoria: 'postre'
  },
  {
   id: '18',
   name: 'Tiramisu',
   imageURL: 'https://d1uz88p17r663j.cloudfront.net/resized/dde749aace6d4539cca86a17baf8b243_tiramizu-porcion_1200_600.jpg',
   price: 3.10,
   description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      categoria: 'postre'
},
{
 id: '19',
 name: 'Mousse',
 imageURL: 'https://www.comedera.com/wp-content/uploads/2016/12/dessert-4034053_1280.jpg',
 price: 3.10,
 description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
 categoria: 'postre'
},
{
  id: '20',
  name: 'Aguado de Gallina',
  imageURL: 'https://www.laylita.com/recetas/wp-content/uploads/Aguado-de-gallina-Laylita.com_-640x427.jpg',
  price: 1.10,
  description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
  categoria: 'plato fuerte'
},
{
  id: '21',
  name: 'Arroz con Camarones',
  imageURL: 'https://www.laylita.com/recetas/wp-content/uploads/Arroz-con-camarones-Laylita.com_-640x427.jpg',
  price: 2.10,
  description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
  categoria: 'plato fuerte'
},
{
  id: '22',
  name: 'Arroz con Menestra de Lentejas',
  imageURL: 'https://www.laylita.com/recetas/wp-content/uploads/Menestra-de-lentejas-Laylita.com_-640x426.jpg',
  price: 3.10,
  description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
  categoria: 'plato fuerte'
},
{
  id: '23',
  name: 'Arroz Marinero',
  imageURL: 'https://www.laylita.com/recetas/wp-content/uploads/Arroz-marinero-Laylita.com_-640x510.jpg',
  price: 4.10,
  description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
  categoria: 'plato fuerte'
},
{
 id: '24',
 name: 'Carne Colorada',
 imageURL: 'https://www.laylita.com/recetas/wp-content/uploads/Carne-colorada-Laylita.com_-640x640.jpg',
 price: 2.15,
 description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
 categoria: 'plato fuerte'
},
{
id: '25',
name: 'Chaulafan',
imageURL: 'https://www.laylita.com/recetas/wp-content/uploads/Chaulafan-Laylita.com_-640x426.jpg',
price: 6.00,
description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
categoria: 'plato fuerte'
},
{
id: '26',
name: 'Churrasco',
imageURL: 'https://www.laylita.com/recetas/wp-content/uploads/Churrasco-Laylita.com_-640x640.jpg',
price: 6.00,
description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
categoria: 'plato fuerte'
},
{
  id: '27',
  name: 'Mariscos al Ajillo',
  imageURL: 'https://www.laylita.com/recetas/wp-content/uploads/2020/11/Receta-de-mariscos-al-ajillo-360x361.jpg',
  price: 12.00,
  description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
  categoria: 'entrada'
  },
  {
    id: '28',
    name: 'Tequeños',
    imageURL: 'https://www.laylita.com/recetas/wp-content/uploads/2019/03/Tequenos-360x361.jpg',
    price: 7.00,
    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
    categoria: 'entrada'
    },
    {
      id: '29',
      name: 'Wafles de Pan de Yuca',
      imageURL: 'https://www.laylita.com/recetas/wp-content/uploads/2018/12/Receta-de-los-gofres-o-waffles-de-pan-de-yuca-360x361.jpg',
      price: 8.30,
      description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      categoria: 'entrada'
      },
      {
        id: '30',
        name: 'Fritada de Chancho',
        imageURL: 'https://www.laylita.com/recetas/wp-content/uploads/Ecuadorian-pork-fritada-Laylita.com_-640x640.jpg',
        price: 8.30,
        description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
        categoria: 'plato fuerte'
        },
        {
          id: '31',
          name: 'Guatita',
          imageURL: 'https://www.laylita.com/recetas/wp-content/uploads/Guatita-Laylita.com_-640x426.jpg',
          price: 9.10,
          description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
          categoria: 'plato fuerte'
          },
          {
            id: '32',
            name: 'Dulce de Higos',
            imageURL: 'https://www.laylita.com/recetas/wp-content/uploads/Higos-pasados-Laylita.com_-640x640.jpg',
            price: 5.10,
            description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
            categoria: 'postre'
            },
            {
              id: '33',
              name: 'Flan de Coco',
              imageURL: 'https://www.laylita.com/recetas/wp-content/uploads/Flan-de-coco-Laylita.com_-640x640.jpg',
              price: 2.00,
              description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
              categoria: 'postre'
              },
              {
                id: '34',
                name: 'Trufa de Canva y Frambuesa',
                imageURL: 'https://i.blogs.es/9eddfa/trufas_cava_frambuesa/1366_2000.jpg',
                price: 5.10,
                description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
                categoria: 'postre'
                },
                {
                  id: '35',
                  name: 'Cerveza Budweiser',
                  imageURL: 'https://www.budweiser.com.ec/sites/g/files/phfypu1531/f/beer-7oz_0.png',
                  price: 2.10,
                  description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
                  categoria: 'bebida'
                  },

    
  

  ];
  constructor() { }

  public getBebidas(): ItemModel[] {
    return this.items.filter(item => item.categoria === 'bebida');
  }
  public getEntradas():ItemModel[]{
    return this.items.filter(item => item.categoria === 'entrada');
  }
  public getPostres():ItemModel[]{
    return this.items.filter(item => item.categoria === 'postre');
  }
  public getPlatosFuertes():ItemModel[]{
    return this.items.filter(item => item.categoria === 'plato fuerte');

  }
  public getById(id: string): ItemModel {
    return this.items.find(item => item.id === id);
  }
}
