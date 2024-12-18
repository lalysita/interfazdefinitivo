import { Component } from '@angular/core';

@Component({
  selector: 'app-deber5',
  templateUrl: './deber-5.component.html',
  styleUrls: ['./deber-5.component.css'],
  standalone: false
})
export class Deber5Component {
  // Lista de videojuegos
  products = [
    { 
      name: 'Cuadro', 
      price: 59.99, 
      inventoryStatus: 'In Stock', 
      image: 'https://media.gq.com.mx/photos/64398d7b4ee91f441c9b49c4/4:3/w_2596,h_1947,c_limit/harry%20potter.jpg'
    },
    { 
      name: 'Cuadro', 
      price: 49.99, 
      inventoryStatus: 'Out of Stock', 
      image: 'https://i0.wp.com/www.cinemanet.info/wp-content/uploads/2018/05/CinemaNet-Harry-Potter-y-la-piedra-filosofal-cine-en-familia-3.jpg?fit=1200%2C785&ssl=1'
    },
    { 
      name: 'Cuadro', 
      price: 69.99, 
      inventoryStatus: 'In Stock', 
      image: 'https://www.okchicas.com/wp-content/uploads/2018/06/Nuevos-secretos-de-Harry-Potter-revelados-3.jpg'
    },
    { 
      name: 'Cuadro', 
      price: 29.99, 
      inventoryStatus: 'In Stock', 
      image: 'https://www.mundodeportivo.com/alfabeta/hero/2024/04/harry-potter.1714060606.0282.jpg?width=768&aspect_ratio=16:9&format=nowebp'
    },
    { 
      name: 'Cuadro', 
      price: 59.99, 
      inventoryStatus: 'Low Stock', 
      image: 'https://imagenes.20minutos.es/files/image_990_556/uploads/imagenes/2024/06/26/harry-potter-y-la-piedra-filosofal.jpeg'
    },
      { 
      name: 'Cuadro', 
      price: 69.99, 
      inventoryStatus: 'In Stock', 
      image: 'https://media.es.wired.com/photos/64370c54f381a957088482cc/4:3/w_2668,h_2001,c_limit/reboot%20de%20harry%20potter%20warner.jpg'
    },
  ];

  // Configuración del carrusel (responsiveOptions)
  responsiveOptions = [
    {
      breakpoint: '2060px',
      numVisible: 3,   // 3 juegos visibles en pantallas grandes
      numScroll: 1
    },
    {
      breakpoint: '980px',
      numVisible: 2,   // 2 juegos visibles en pantallas medianas
      numScroll: 1
    },
    {
      breakpoint: '660px',
      numVisible: 1,   // 1 juego visible en pantallas pequeñas
      numScroll: 1
    },
  ];

  // Método para determinar el estilo según el estado del inventario
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }
}
