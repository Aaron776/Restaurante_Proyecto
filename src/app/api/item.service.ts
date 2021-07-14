import { Injectable } from '@angular/core';
import { ItemModel } from '../models/item.model';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: ItemModel[] = [
    {
      _id: '1',
      name: 'Colada de Avena',
      imageUrl: 'https://www.laylita.com/recetas/wp-content/uploads/2012/03/Colada-o-bebida-de-avena-ecuatoriana-684x1024.jpg',
      price: 1.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      category: 'bebida'
    },
    {
      _id: '2',
      name: 'Naranjillazo',
      imageUrl: 'https://www.laylita.com/recetas/wp-content/uploads/Ecuadorian-canelazo-drink-with-naranjilla-640x427.jpg',
      price: 2.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      category: 'bebida'
    },
    {
      _id: '3',
      name: 'Chicha de Piña',
      imageUrl: 'https://www.laylita.com/recetas/wp-content/uploads/Chicha-de-pi%C3%B1a.jpg',
      price: 3.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      category: 'bebida'
    },
    {
      _id: '4',
      name: 'Coca-Cola',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/15-09-26-RalfR-WLC-0098.jpg/200px-15-09-26-RalfR-WLC-0098.jpg',
      price: 4.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      category: 'bebida'
    },
    {
      _id: '5',
      name: 'Jugo de Naranja',
      imageUrl: 'https://recetatipica.com/wp-content/uploads/2019/03/jugo-de-naranja.jpg',
      price: 2.15,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500'
    },
    {
      _id: '6',
      name: 'Jugo de Coco',
      imageUrl: 'https://unaricareceta.com/wp-content/uploads/2020/06/agua-de-coco.jpg',
      price: 6.00,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      category: 'bebida'
    },
    {
      _id: '7',
      name: 'Cerveza Pilsener',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41LRB2hxtTL._AC_.jpg',
      price: 6.00,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      category: 'bebida'
    },
    {
      _id: '8',
      name: 'Croquetas de Jamon',
      imageUrl: 'https://www.hola.com/imagenes/cocina/recetas/20191217156471/croquetas-de-jamon-iberico/0-759-983/croquetas-de-jamon-m.jpg',
      price: 1.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      category: 'entrada'
    },
    {
      _id: '9',
      name: 'Arepas de Chicharron',
      imageUrl: 'https://3.bp.blogspot.com/-iZ0EPIlZSDY/V9KX9xWx3jI/AAAAAAAAmdM/cQwxGZnhrh0JyQ_n_2tbXwYrSGVPRNK5gCLcB/s1600/Arepas-de-chicharr%25C3%25B3n.jpg',
      price: 2.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      category: 'entrada'
    },
    {
      _id: '10',
      name: 'Hayacas',
      imageUrl: 'https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2019/11/06134222/la-hallaca.jpg',
      price: 3.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      category: 'entrada'
    },
    {
      _id: '11',
      name: 'Gazpacho',
      imageUrl: 'https://i.blogs.es/a8ade0/gazpacho_tradicional/840_560.jpg',
      price: 4.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      category: 'entrada'
    },
    {
      _id: '12',
      name: 'Ensalada de Camaron',
      imageUrl: 'https://www.laylita.com/recetas/wp-content/uploads/2016/11/Receta-ensalada-de-camaron-600x400.jpg',
      price: 2.15,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      category: 'entrada'
    },
    {
      _id: '13',
      name: 'Empanadas de Carne',
      imageUrl: 'https://www.laylita.com/recetas/wp-content/uploads/2017/02/Empanadas-de-carne.jpg',
      price: 6.00,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      category: 'entrada'
    },
    {
      _id: '14',
      name: 'Alfajores',
      imageUrl: 'https://chipabythedozen.com/wp-content/uploads/2020/03/alfajores-dulce-de-leche-sandwhich-cookies-3-1.jpg',
      price: 1.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      category: 'postre'
   },
   {
      _id: '15',
      name: 'Rosca de Rey',
      imageUrl: 'https://hispanaglobal.com/wp-content/uploads/2017/12/Rosca-de-reyes-HISPANA-GLOBAL-Enriqueta-Lemoine.jpg',
      price: 2.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      category: 'postre'
   },
   {
      _id: '16',
      name: 'Crepe',
      imageUrl: 'https://d1uz88p17r663j.cloudfront.net/original/e5a4e61d82b4f252813a5a8576a7cfcf_Crepe-Relleno_frutos_rojos.jpg',
      price: 3.10,
      description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      category: 'postre'
   },
   {
     _id: '17',
     name: 'Churros',
     imageUrl: 'https://i.blogs.es/bbda7d/churros_chocolate/1366_2000.jpeg',
     price: 3.10,
     description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
     category: 'postre'
  },
  {
   _id: '18',
   name: 'Tiramisu',
   imageUrl: 'https://d1uz88p17r663j.cloudfront.net/resized/dde749aace6d4539cca86a17baf8b243_tiramizu-porcion_1200_600.jpg',
   price: 3.10,
   description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      category: 'postre'
},
{
 _id: '19',
 name: 'Mousse',
 imageUrl: 'https://www.comedera.com/wp-content/uploads/2016/12/dessert-4034053_1280.jpg',
 price: 3.10,
 description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
 category: 'postre'
},
{
  _id: '20',
  name: 'Aguado de Gallina',
  imageUrl: 'https://www.laylita.com/recetas/wp-content/uploads/Aguado-de-gallina-Laylita.com_-640x427.jpg',
  price: 1.10,
  description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
  category: 'plato fuerte'
},
{
  _id: '21',
  name: 'Arroz con Camarones',
  imageUrl: 'https://www.laylita.com/recetas/wp-content/uploads/Arroz-con-camarones-Laylita.com_-640x427.jpg',
  price: 2.10,
  description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
  category: 'plato fuerte'
},
{
  _id: '22',
  name: 'Arroz con Menestra de Lentejas',
  imageUrl: 'https://www.laylita.com/recetas/wp-content/uploads/Menestra-de-lentejas-Laylita.com_-640x426.jpg',
  price: 3.10,
  description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
  category: 'plato fuerte'
},
{
  _id: '23',
  name: 'Arroz Marinero',
  imageUrl: 'https://www.laylita.com/recetas/wp-content/uploads/Arroz-marinero-Laylita.com_-640x510.jpg',
  price: 4.10,
  description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
  category: 'plato fuerte'
},
{
 _id: '24',
 name: 'Carne Colorada',
 imageUrl: 'https://www.laylita.com/recetas/wp-content/uploads/Carne-colorada-Laylita.com_-640x640.jpg',
 price: 2.15,
 description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
 category: 'plato fuerte'
},
{
_id: '25',
name: 'Chaulafan',
imageUrl: 'https://www.laylita.com/recetas/wp-content/uploads/Chaulafan-Laylita.com_-640x426.jpg',
price: 6.00,
description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
category: 'plato fuerte'
},
{
_id: '26',
name: 'Churrasco',
imageUrl: 'https://www.laylita.com/recetas/wp-content/uploads/Churrasco-Laylita.com_-640x640.jpg',
price: 6.00,
description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
category: 'plato fuerte'
},
{
  _id: '27',
  name: 'Mariscos al Ajillo',
  imageUrl: 'https://www.laylita.com/recetas/wp-content/uploads/2020/11/Receta-de-mariscos-al-ajillo-360x361.jpg',
  price: 12.00,
  description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
  category: 'entrada'
  },
  {
    _id: '28',
    name: 'Tequeños',
    imageUrl: 'https://www.laylita.com/recetas/wp-content/uploads/2019/03/Tequenos-360x361.jpg',
    price: 7.00,
    description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
    category: 'entrada'
    },
    {
      _id: '29',
      name: 'Wafles de Pan de Yuca',
      imageUrl: 'https://www.laylita.com/recetas/wp-content/uploads/2018/12/Receta-de-los-gofres-o-waffles-de-pan-de-yuca-360x361.jpg',
      price: 8.30,
      description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
      category: 'entrada'
      },
      {
        _id: '30',
        name: 'Fritada de Chancho',
        imageUrl: 'https://www.laylita.com/recetas/wp-content/uploads/Ecuadorian-pork-fritada-Laylita.com_-640x640.jpg',
        price: 8.30,
        description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
        category: 'plato fuerte'
        },
        {
          _id: '31',
          name: 'Guatita',
          imageUrl: 'https://www.laylita.com/recetas/wp-content/uploads/Guatita-Laylita.com_-640x426.jpg',
          price: 9.10,
          description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
          category: 'plato fuerte'
          },
          {
            _id: '32',
            name: 'Dulce de Higos',
            imageUrl: 'https://www.laylita.com/recetas/wp-content/uploads/Higos-pasados-Laylita.com_-640x640.jpg',
            price: 5.10,
            description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
            category: 'postre'
            },
            {
              _id: '33',
              name: 'Flan de Coco',
              imageUrl: 'https://www.laylita.com/recetas/wp-content/uploads/Flan-de-coco-Laylita.com_-640x640.jpg',
              price: 2.00,
              description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
              category: 'postre'
              },
              {
                _id: '34',
                name: 'Trufa de Canva y Frambuesa',
                imageUrl: 'https://i.blogs.es/9eddfa/trufas_cava_frambuesa/1366_2000.jpg',
                price: 5.10,
                description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
                category: 'postre'
                },
                {
                  _id: '35',
                  name: 'Cerveza Budweiser',
                  imageUrl: 'https://www.budweiser.com.ec/sites/g/files/phfypu1531/f/beer-7oz_0.png',
                  price: 2.10,
                  description:'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
                  category: 'bebida'
                  },

    
  

  ];
  constructor() { }

  public getBebida(): ItemModel[] {
    return this.items.filter(item => item.category === 'bebida');
  }
  public getEntrada():ItemModel[]{
    return this.items.filter(item => item.category === 'entrada');
  }
  public getPostre():ItemModel[]{
    return this.items.filter(item => item.category === 'postre');
  }
  public getPlatosFuerte():ItemModel[]{
    return this.items.filter(item => item.category === 'plato fuerte');

  }
  public getById(_id: string): ItemModel {
    return this.items.find(item => item._id === _id);
  }
}
